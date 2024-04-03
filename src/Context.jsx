import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext({
	loggedUser: null,
	setLoggedUser: () => {},
	movies: [],
	setMovies: () => {},
	reviews: [],
	setReviews: () => {},
});

const AppProvider = ({ children }) => {
	const initialMovies = !!localStorage.getItem("movies")
		? JSON.parse(localStorage.getItem("movies"))
		: [];
	const initialLoggedUser = !!localStorage.getItem("loggedUser")
		? localStorage.getItem("loggedUser")
		: null;
	const [loggedUser, setLoggedUser] = useState(initialLoggedUser);
	const [movies, setMovies] = useState(initialMovies);
	const [reviews, setReviews] = useState([]);

	async function fetchMovies() {
		try {
			const response = await fetch("http://localhost:8080/films");
			if (!response.ok) throw new Error("Network response was not ok");

			const movies = await response.json();
			//localStorage.setItem("movies", JSON.stringify(movies));
			//setMovies(movies);
			return movies;
		} catch (error) {
			console.error("Error fetching movies:", error);
			throw error;
		}
	}

	useEffect(() => {
		if (movies.length === 0)
			fetchMovies().then((movies) => {
				localStorage.setItem("movies", JSON.stringify(movies));
				setMovies(movies);
			});
	}, []);

	return (
		<AppContext.Provider
			value={{
				loggedUser,
				setLoggedUser,
				movies,
				setMovies,
				reviews,
				setReviews,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

// NOTE : Custom hook to use the AppContext
const useAppContext = () => {
	const context = useContext(AppContext);
	if (!context) {
		throw new Error("useAppContext must be used within an AppProvider");
	}
	return context;
};

export { AppProvider, useAppContext };
