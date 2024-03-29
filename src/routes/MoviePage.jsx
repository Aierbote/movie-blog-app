import { useParams } from "react-router-dom";

export function MoviePage() {
	const { idFilm } = useParams();

	return (
		<div>
			<h1>Movie Page {idFilm}</h1>
		</div>
	);
}
