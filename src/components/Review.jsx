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
import FormReview from "./FormReview";

const Review = ({ review, reviewLeft, loggedUser }) => {
	const { idReview, idFilm, rating, comment, user: author } = review;
	const { reviews, setReviews } = useAppContext();
	const [editing, setEditing] = useState(false);

	if (editing) {
		return (
			<FormReview idFilm={idFilm} editing={editing} setEditing={setEditing} />
		);
	}

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
									color="primary"
									onClick={() => {
										setEditing(true);
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

			<Divider variant="inset" component="li" />
		</>
	);
};

export default Review;
