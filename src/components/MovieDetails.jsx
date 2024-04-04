import { useEffect, useState } from "react";
import { useAppContext } from "../Context";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";

export function MovieDetails({ idFilm }) {
	const [selectedMovie, setSelectedMovie] = useState({});
	const { movies } = useAppContext();
	const navigate = useNavigate();

	useEffect(() => {
		const currentMovie = movies.find(
			(movie_) => movie_.id === parseInt(idFilm)
		);

		console.log("selectedMovie.title", selectedMovie.title);

		setSelectedMovie(currentMovie);
	}, []);

	if (!selectedMovie) {
		navigate("/NotFound");
		return;
	}

	return (
		<div>
			<h2>
				{selectedMovie.genre} - {selectedMovie.title}
			</h2>
			<Grid container spacing={2} mt={{ sm: 2, md: 1 }}>
				<Grid item xs={12} md={5}>
					<img
						src={selectedMovie.image}
						alt={selectedMovie.title}
						style={{
							objectFit: "contain",
							width: "100%",
							maxHeight: "100vh",
						}}
					/>
				</Grid>
				<Grid item xs={12} md={7}>
					<p>
						<strong>Anno:</strong> {selectedMovie.year}
					</p>
					<p>
						<strong>Regista:</strong> {selectedMovie.director}
					</p>
					<p>
						<strong>Cast:</strong> {selectedMovie.cast}
					</p>
					<p>
						<strong>Descrizione:</strong> Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Officiis a possimus inventore tempore doloribus,
						reiciendis eveniet quidem, quas assumenda tempora magni rem eligendi
						soluta commodi fugit iusto enim fugiat. Distinctio reprehenderit,
						deleniti, numquam sequi ratione delectus, architecto dolores placeat
						soluta blanditiis nihil possimus! Neque amet libero accusantium
						vitae, et nobis quam aliquid earum hic deserunt provident est
						eveniet consequuntur ab enim totam nostrum a expedita blanditiis
						autem qui incidunt quidem omnis! Rerum architecto voluptates aliquid
						amet nemo maiores quibusdam ad laboriosam, dolor quos explicabo
						animi possimus ut tenetur molestias magnam, magni maxime reiciendis
						commodi optio expedita nulla esse? Fugit odit, magni nisi quisquam
						dolore optio? Nemo ullam quos, dicta fugit, esse facilis similique
						molestiae labore dolorum illo exercitationem aliquam vel minus
						voluptatem? Dignissimos itaque fugiat saepe necessitatibus deserunt
						ipsum quasi praesentium iste rerum nihil porro tempora, natus harum,
						vero voluptates dicta amet? Beatae, quo. Consectetur consequuntur
						quia cum tenetur placeat.
					</p>
				</Grid>
			</Grid>
		</div>
	);
}
