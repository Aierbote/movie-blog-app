import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function StickyFooter() {
	return (
		<>
			<Box
				component="footer"
				sx={{
					py: 3,
					px: 2,
					mt: "auto",
					backgroundColor: (theme) =>
						theme.palette.mode === "light"
							? theme.palette.grey[200]
							: theme.palette.grey[800],
				}}
			>
				<Box
					maxwidth="auto"
					sx={{
						display: "flex",
						justifyContent: "center",
						gap: "0px 20rem",
						alignItems: "center",
					}}
				>
					<Box>
						<Typography variant="body2">
							Project Work ITS Steve Jobs Academy corso 23
						</Typography>
						<Typography variant="body2">
							-----------------------------------
						</Typography>
						<Typography variant="body2">Copyright© by:</Typography>
						<Typography variant="body2">-Alberto Cangialosi</Typography>
						<Typography variant="body2">-Calogero Raia</Typography>
						<Typography variant="body2">-Alessandro Russo</Typography>
					</Box>
					<Box>
						<img
							src="https://tse1.mm.bing.net/th?id=OIP.9M6x8cSTpnxfkJPLtt-PzAHaDh&pid=Api&P=0&h=180"
							alt="SteveJobsAcademy"
						/>
					</Box>
				</Box>
			</Box>
			{/* <Box
				sx={{
					display: "flex",
					justifyContent: "center",
					flexDirection: "column",
					minHeight: "100vh",
				}}
			></Box> */}
		</>
	);
}
