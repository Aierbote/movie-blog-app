import { useEffect, useState } from "react";
import { TextField, Button, Rating, Typography, Box } from "@mui/material";
import { useAppContext } from "../Context";

const FormReview = ({ idFilm, editing = false, setEditing = () => {} }) => {
	const [comment, setComment] = useState("");
	const [rating, setRating] = useState(0);
	// id for the review to edit
	const [editingId, setEditingId] = useState(-1);
	// author for the review to edit
	const [editingAuthor, setEditingAuthor] = useState(null);
	const { reviews, setReviews, loggedUser } = useAppContext();

	function handleCancel() {
		setEditing(false);
	}

	const handleUpdate = async (e) => {
		e.preventDefault();

		try {
			const response = await fetch(
				`http://localhost:8080/films/${idFilm}/reviews/${editingId}`,
				{
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						comment,
						rating,
						user: editingAuthor,
					}),
				}
			);

			if (response.ok) {
				console.log(response);

				// To update the reviews by updating the review with the same id
				setReviews((prevReviews) =>
					prevReviews.map((review) =>
						review.idReview === editingId
							? { ...review, comment, rating }
							: review
					)
				);
			}
		} catch (error) {
			console.error(`Error updating review: ${error}`);
		}
	};

	const handleDelete = async (e) => {
		e.preventDefault();

		try {
			const response = await fetch(
				`http://localhost:8080/films/${idFilm}/reviews/${editingId}`,
				{
					method: "DELETE",
					headers: {
						"Content-Type": "application/json",
					},
				}
			);

			if (response.ok) {
				console.log(response);

				// To delete the review with the same id
				setReviews((prevReviews) =>
					prevReviews.filter((review_) => review_.idReview !== editingId)
				);
			}
		} catch (error) {
			console.error(`Error deleting review: ${error}}`);
		}

		const oldReviews = JSON.parse(localStorage.getItem("reviews")) || [];
		const updatedReviews = oldReviews.filter(
			(review_) => review_.idReview !== editingId
		);
		localStorage.setItem("reviews", JSON.stringify(updatedReviews));
	};

	useEffect(() => {
		if (editing) {
			const editingReviews = reviews.find(
				(review) => review.idFilm === idFilm && review.user === loggedUser
			);

			console.log("editingReviews", editingReviews);

			setComment(editingReviews.comment);
			setRating(editingReviews.rating);
			setEditingId(editingReviews.idReview);
		}
	}, [editing]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (editing) {
			handleUpdate(e);
			setEditing(false);
			return;
		}

		try {
			const response = await sendReview();

			if (response) {
				// Aggiungi la nuova recensione alla lista nel localStorage
				const newReview = {
					idFilm,
					rating,
					comment,
					user: loggedUser,
				};

				const reviewsFromStorage =
					JSON.parse(localStorage.getItem("reviews")) || [];

				const updatedReviews = [...reviewsFromStorage, newReview];

				localStorage.setItem("reviews", JSON.stringify(updatedReviews));

				setReviews(updatedReviews);
				// Resetta il form
				setComment("");
				setRating(0);
			}
		} catch (error) {
			console.error("Error sending review:", error);
			alert("Si è verificato un errore durante l'invio della recensione");
		}
	};

	async function sendReview() {
		try {
			const response = await fetch(
				`http://localhost:8080/films/${idFilm}/reviews`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						comment,
						rating,
						user: loggedUser,
						idFilm,
					}),
				}
			);

			if (!response.ok) {
				throw new Error("Network response was not ok");
			}

			// if it's ok, let's fetch the new data to update the storage
			const updatedResponse = await fetch(
				`http://localhost:8080/films/${idFilm}/reviews`
			);
			const updatedReviews = await updatedResponse.json();
			setReviews(updatedReviews);

			// usual response of POST
			return response.json();
		} catch (error) {
			console.error("Error sending review:", error);
			throw error;
		}
	}

	const isRatingValid = rating > 0;
	const isCommentValid = comment.trim() !== "";

	return (
		<Box
			margin={5}
			border={3}
			padding={2}
			borderRadius={3}
			borderColor={"primary.main"}
		>
			<form onSubmit={handleSubmit}>
				{editing && (
					<Box display={"flex"} justifyContent={"flex-end"}>
						<Button
							type="submit"
							variant="contained"
							color="success"
							onClick={() => {
								setEditing(false);
							}}
							disabled={!isRatingValid || !isCommentValid}
						>
							SAVE
						</Button>
					</Box>
				)}
				<Box
					mb={2}
					border={2}
					padding={1}
					borderRadius={2}
					borderColor={"primary.main"}
					marginTop={1}
				>
					<Typography component="legend">Voto</Typography>
					<Rating
						name="rating"
						value={rating}
						onChange={(event, newValue) => {
							setRating(newValue);
						}}
					/>
				</Box>
				<TextField
					label="Scrivi la tua recensione"
					variant="outlined"
					multiline
					sx={{ width: "50%" }}
					value={comment}
					onChange={(e) => setComment(e.target.value)}
					margin="normal"
				/>
				<br />
				{!editing && (
					<Button
						type="submit"
						variant="contained"
						color="primary"
						disabled={!isRatingValid || !isCommentValid}
					>
						Invia recensione
					</Button>
				)}
				{editing && (
					<Box
						display="flex"
						flexDirection="row"
						justifyContent="flex-end"
						gap="1rem"
						margin={1}
					>
						<Button variant="outlined" onClick={handleCancel}>
							Cancel
						</Button>
						<Button variant="contained" color="error" onClick={handleDelete}>
							DELETE
						</Button>
					</Box>
				)}
			</form>
		</Box>
	);
};

export default FormReview;
