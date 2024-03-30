import { useEffect, useState } from "react";
import { useAppContext } from "../Context";

export function MovieDetails({ idFilm }) {
	const [selectedMovie, setSelectedMovie] = useState({});
	const { movies } = useAppContext();

	useEffect(() => {
		const currentMovie = movies.find(
			(movie_) => movie_.id === parseInt(idFilm)
		);

		console.log("selectedMovie.title", selectedMovie.title);

		setSelectedMovie(currentMovie);
	}, []);

	return (
		<div>
			<h2>
				{selectedMovie.genre} - {selectedMovie.title}
			</h2>
			<div
				style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}
			>
				<div style={{ marginRight: "20px" }}>
					<img
						src={selectedMovie.image}
						alt={selectedMovie.title}
						style={{ width: "150px", height: "200px" }}
					/>
				</div>
				<div>
					<p>{selectedMovie.year}</p>
					<p>
						<strong>Regista:</strong> {selectedMovie.director}
					</p>
					<p>
						<strong>Cast:</strong> {selectedMovie.cast}
					</p>
					<p>
						Descrizione: Lorem ipsum dolor sit amet, consectetur adipiscing
						elit. Donec auctor velit eget posuere porta.
					</p>
				</div>
			</div>
		</div>
	);
}
