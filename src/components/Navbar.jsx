import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import MovieIcon from "@mui/icons-material/Movie";
import { NavLink } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useAppContext } from "../Context";

const pages = [
	{ title: "Home", path: "/" },
	{ title: "About us", path: "/about" },
];

function Navbar() {
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [open, setOpen] = React.useState(false);
	const { loggedUser, setLoggedUser } = useAppContext();

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleLogin = (event) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const formJson = Object.fromEntries(formData.entries());
		const username = formJson.user;
		setLoggedUser(username);
		handleClose();
	};

	const handleLogout = () => {
		setLoggedUser(null);
	};

	return (
		<AppBar position="static">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<MovieIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
					<Typography
						variant="h6"
						noWrap
						component={NavLink}
						to="/"
						sx={{
							mr: 2,
							display: { xs: "none", md: "flex" },
							fontFamily: "monospace",
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "inherit",
							textDecoration: "none",
						}}
					>
						MOVIE-BLOG
					</Typography>

					<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: "block", md: "none" },
							}}
						>
							{pages.map((page) => (
								<MenuItem key={page.title} onClick={handleCloseNavMenu}>
									<NavLink
										to={page.path}
										style={{ textDecoration: "none", color: "inherit" }}
									>
										<Typography textAlign="center">{page.title}</Typography>
									</NavLink>
								</MenuItem>
							))}
						</Menu>
					</Box>
					<MovieIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
					<Typography
						variant="h5"
						noWrap
						component="div"
						sx={{
							mr: 2,
							display: { xs: "flex", md: "none" },
							flexGrow: 1,
							fontFamily: "monospace",
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "inherit",
							textDecoration: "none",
						}}
					>
						MOVIE-BLOG
					</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
						{pages.map((page) => (
							<Button
								key={page.title}
								component={NavLink}
								to={page.path}
								onClick={handleCloseNavMenu}
								sx={{ my: 2, color: "white", textDecoration: "none" }}
							>
								{page.title}
							</Button>
						))}
					</Box>
					<Box sx={{ flexGrow: 0 }}>
						{loggedUser ? (
							<Box
								textAlign="right"
								py={1}
								pr={2}
								sx={{ display: "flex", alignItems: "center" }}
							>
								<Typography variant="h6" sx={{ color: "white", mr: 2 }}>
									Ciao, {loggedUser}
								</Typography>
								<Button
									variant="contained"
									onClick={handleLogout}
									sx={{ color: "white", border: "white solid 1px" }}
								>
									Logout
								</Button>
							</Box>
						) : (
							<React.Fragment>
								<Button
									variant="contained"
									onClick={handleClickOpen}
									sx={{ color: "white", border: "white solid 1px" }}
								>
									Login
								</Button>
								<Dialog
									open={open}
									onClose={handleClose}
									PaperProps={{
										component: "form",
										onSubmit: handleLogin,
									}}
								>
									<DialogTitle>Effettua l'accesso</DialogTitle>
									<DialogContent>
										<DialogContentText>
											Scrivi il tuo username
										</DialogContentText>
										<TextField
											autoFocus
											required
											margin="dense"
											id="user"
											name="user"
											label="Username"
											type="string"
											fullWidth
											variant="standard"
										/>
									</DialogContent>
									<DialogActions>
										<Button onClick={handleClose}>Annulla</Button>
										<Button type="submit">Accedi</Button>
									</DialogActions>
								</Dialog>
							</React.Fragment>
						)}
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
}

export default Navbar;
