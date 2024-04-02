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
					gap: 6,
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
				<Box sx={{ flex: 2 }}>
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
				</Box>
			</Box>
		</div>
	);
}
