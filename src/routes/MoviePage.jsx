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
		<List sx={{ width: "100%", bgcolor: "background.paper" }} maxWidth="90%">
			{children}
		</List>
	);
}

export function MoviePage() {
	const { idFilm } = useParams();
	const { reviews, setReviews } = useAppContext();
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
			<h1>Movie Page {idFilm}</h1>

			<MovieDetails idFilm={idFilm} />

			{/* Reviews List */}
			<AlignItemsList>
				{reviews.map((review) => (
					<Review key={review.id} review={review} />
				))}
			</AlignItemsList>

			<FormReview idFilm={idFilm} />
		</div>
	);
}
