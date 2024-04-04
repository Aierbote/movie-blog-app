import TitlebarImageList from "../components/TitlebarImageList";
import { Box, Typography } from "@mui/material";

export function Home() {
	return (
		<div>
			<Box
				margin={"auto"}
				height={"auto"}
				width={"90%"}
				my={4}
				display="flex"
				flexDirection={"column"}
				alignItems="flex-start"
				justifyContent="center"
				gap={4}
				p={4}
				sx={{ border: "2px solid grey", borderRadius: "10px" }}
			>
				<Typography fontSize={25} fontFamily={"fantasy"}>
					{" "}
					Benvenuto cinefilo!{" "}
				</Typography>
				<Typography variant="h6">
					Questo è il blog per eccellenza per te che sei patito di cinema e ami
					condividere con gli altri le tue opinioni.
				</Typography>
				<Typography variant="h6">
					Qui potrai sbizzarrirti tra i titoli del momento e i grandi classici!
					Seleziona il film per vedere le informazioni e registrati per
					recensire ed unirti alla nostra community. Sei libero ti modificare o
					cancella la tua recensione in un secondo momento.
				</Typography>
				<Typography variant="h6" fontFamily={"inherit"}>
					Prima regola del MovieBlog: mai parlare del MovieBlog!
				</Typography>
			</Box>

			<TitlebarImageList />
		</div>
	);
}
