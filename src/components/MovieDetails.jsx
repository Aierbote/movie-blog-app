import { useEffect, useState } from "react";
import { useAppContext } from "../Context";
import Box from "@mui/material/Box";

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
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					marginBottom: "20px",
					maxWidth: "100vw",
				}}
				mt={{ sm: 1, md: 3 }}
			>
				<div sx={{ flex: 1, marginRight: "20px" }}>
					<img
						src={selectedMovie.image}
						alt={selectedMovie.title}
						style={{
							maxWidth: "85vw",
							maxHeight: "85vh",
						}}
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
			</Box>
		</div>
	);
}
