import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import { useAppContext } from "../Context";

const Review = ({ review, reviewLeft, loggedUser }) => {
	const { idReview, idFilm, rating, comment, user: author } = review;
	const { reviews, setReviews } = useAppContext();
	const [editing, setEditing] = useState(false);

	function toggleEdit() {
		setEditing((prevEditing) => !prevEditing);
	}

	function handleCancel() {
		setEditing(false);
	}

	const handleUpdate = async (e) => {
		e.preventDefault();

		try {
			const response = await fetch(
				`http://localhost:8080/films/${idFilm}/reviews/${idReview}`,
				{
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						comment,
						rating,
						user: author,
					}),
				}
			);

			if (response.ok) {
				console.log(response);

				// To update the reviews by updating the review with the same id
				setReviews((prevReviews) =>
					prevReviews.map((review) =>
						review.idReview === idReview
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
				`http://localhost:8080/films/${idFilm}/reviews/${idReview}`,
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
					prevReviews.filter((review_) => review_.idReview !== idReview)
				);
			}
		} catch (error) {
			console.error(`Error deleting review: ${error}}`);
		}

		const oldReviews = JSON.parse(localStorage.getItem("reviews")) || [];
		const updatedReviews = oldReviews.filter(
			(review_) => review_.idReview !== idReview
		);
		localStorage.setItem("reviews", JSON.stringify(updatedReviews));
	};

	return (
		<>
			<ListItem alignItems="flex-start">
				<ListItemAvatar>
					<Avatar
						alt={author.toUpperCase()}
						src="/static/images/avatar/1.jpg"
					/>
				</ListItemAvatar>
				<ListItemText
					primary={
						<Box display={"flex"} justifyContent={"space-between"}>
							<Typography
								component="legend"
								variant="body2"
								color="text.primary"
								fontFamily={"georgia, serif"}
								fontSize={18}
							>
								{author || "Anonymous"}
							</Typography>
							{loggedUser === author && reviewLeft && (
								<Button
									variant="contained"
									// color="primary"
									color={!editing ? "primary" : "success"}
									onClick={() => {
										toggleEdit();
									}}
								>
									{!editing && "Edit..."}
									{editing && "SAVE"}
								</Button>
							)}
						</Box>
					}
					secondary={
						<>
							<Rating readOnly name="simple-controlled" value={rating} />
							{!!comment && <Typography>{comment}</Typography>}
						</>
					}
				/>
			</ListItem>

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
					<Button
						variant="contained"
						color="error" /* onClick={handleDelete} */
					>
						DELETE
					</Button>
				</Box>
			)}

			<Divider variant="inset" component="li" />
		</>
	);
};

export default Review;
