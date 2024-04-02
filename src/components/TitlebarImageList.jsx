import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { useAppContext } from "../Context";
import { useNavigate } from "react-router-dom";
import { memo, useCallback } from "react";

const TitlebarImageList = memo(() => {
	const { movies } = useAppContext();
	const navigate = useNavigate();

	const onImageClick = useCallback(
		(id) => {
			console.log("Image clicked", id);

			console.log("Navigating to /movie/:id", id);
			navigate(`/movie/${id}`);
		},
		[navigate]
	);

	return (
		<ImageList sx={{ width: "auto", height: "auto", margin: "1rem" }} cols={5}>
			{movies.map((item) => (
				<ImageListItem
					key={item.id}
					cols={1}
					onClick={() => onImageClick(item.id)}
					sx={{ cursor: "pointer" }}
				>
					<img
						src={`${item.image}?w=248&fit=crop&auto=format`}
						alt={item.title}
						loading="lazy"
					/>
					<ImageListItemBar
						title={item.title}
						subtitle={item.genre}
						actionIcon={
							<IconButton
								sx={{ color: "rgba(255, 255, 255, 0.54)" }}
								aria-label={`info about ${item.title}`}
							>
								<InfoIcon />
							</IconButton>
						}
					/>
				</ImageListItem>
			))}
		</ImageList>
	);
});

export default TitlebarImageList;
