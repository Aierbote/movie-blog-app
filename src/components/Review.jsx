import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";

const Review = ({ review }) => {
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
			<Divider variant="inset" component="li" />
		</>
	);
};

export default Review;
