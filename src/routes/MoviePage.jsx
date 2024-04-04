import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useAppContext } from "../Context";
import { useNavigate } from "react-router-dom";
import { MovieDetails } from "../components/MovieDetails";
import FormReview from "../components/FormReview";
import Review from "../components/Review";
import List from "@mui/material/List";

function AlignItemsList({ children }) {
	return (
		<List sx={{ width: "100%", bgcolor: "background.paper" }} maxwidth="90%">
			{children}
		</List>
	);
}

export function MoviePage() {
	const { idFilm } = useParams();
	const { reviews, setReviews, loggedUser } = useAppContext();
	const navigate = useNavigate();

	async function utilityFetchReviews() {
		try {
			const response = await fetch(
				`http://localhost:8080/films/${idFilm}/reviews`
			);

			if (!response.ok) {
				throw new Error("Network response was not ok");
			}

			const data = await response.json();
			localStorage.setItem("reviews", JSON.stringify(data));
			return data;
		} catch (error) {
			console.error("Error fetching reviews:", error);
			throw error;
		}
	}

	useEffect(() => {
		const fetchData = async () => {
			const parsedIdFilm = parseInt(idFilm);
			if (!isNaN(parsedIdFilm) && !reviews.length) {
				try {
					const fetchedReviews = await utilityFetchReviews();
					setReviews(fetchedReviews);
				} catch (error) {
					navigate("/NotFound");
				}
			} else {
				navigate("/NotFound");
			}
		};

		fetchData();

		return () => {
			setReviews([]);
			localStorage.removeItem("reviews");
		};
	}, []);

	return (
		<div>
			<MovieDetails key={"movie/" + idFilm} idFilm={idFilm} />

			{/* Reviews List */}
			<AlignItemsList>
				{reviews.map((review) => (
					<Review key={review.id} review={review} />
				))}
			</AlignItemsList>

			{!!loggedUser && (
				<>
					<h2>Leave a review</h2>
					<FormReview idFilm={idFilm} />
				</>
			)}

			{!loggedUser && <h2>Please login to leave a review</h2>}
		</div>
	);
}
