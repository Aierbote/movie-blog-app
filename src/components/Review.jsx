import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import { useEffect } from "react";

const Review = ({ review, reviewLeft, loggedUser }) => {
	const { idReview, idFilm, rating, comment, user: author } = review;

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
						<>
							<Typography
								component="legend"
								variant="body2"
								color="text.primary"
								fontFamily={"georgia, serif"}
								fontSize={18}
							>
								{author || "Anonymous"}
							</Typography>
						</>
					}
					secondary={
						<>
							<Rating readOnly name="simple-controlled" value={rating} />
							{!!comment && <Typography>{comment}</Typography>}
						</>
					}
				/>
			</ListItem>

			{loggedUser === author && reviewLeft && <button>Edit...</button>}

			<Divider variant="inset" component="li" />
		</>
	);
};

export default Review;
