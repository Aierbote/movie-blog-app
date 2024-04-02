import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import { useState } from "react";

const Review = () => {
	const [rating, setRating] = useState(4);

	return (
		<div>
			<ListItem alignItems="flex-start">
				<ListItemAvatar>
					<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
				</ListItemAvatar>
				<ListItemText
					primary={
						<>
							<Typography
								component="legend"
								variant="body2"
								color="text.primary"
							>
								User
							</Typography>
						</>
					}
					secondary={
						<>
							<Rating
								readOnly
								name="simple-controlled"
								value={rating}
								onChange={(event, newValue) => {
									setRating(newValue);
								}}
							/>
							<Typography>Comment</Typography>
						</>
					}
				/>
			</ListItem>
			<Divider variant="inset" component="li" />
		</div>
	);
};

export default Review;
