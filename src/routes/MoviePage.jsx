import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useAppContext } from "../Context";


export function MoviePage() {
	const { idFilm } = useParams();
	const { reviews, setReviews } = useAppContext();

	async function utilityFetchReviews() {
		try {
			const response = await fetch(`http://localhost:8080/films/${idFilm}/reviews`);

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
		if (!reviews.length) {
			const fetchedReviews = utilityFetchReviews();
			setReviews(fetchedReviews);
		}
	}, []);


	return (
		<div>
			<h1>Movie Page {idFilm}</h1>
		</div>
	);
}
