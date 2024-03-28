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
	const [loggedUser, setLoggedUser] = useState(null);
	const [movies, setMovies] = useState(
		!!localStorage.getItem("movies")
			? JSON.parse(localStorage.getItem("movies"))
			: []
	);
	const [reviews, setReviews] = useState([]);

	async function utilityFetchMovies() {
		try {
			const response = await fetch("http://localhost:8080/films");

			if (!response.ok) {
				// DEBUG :
				const errorMessage = await response.text();
				console.error("Server responded with error:", errorMessage);

				throw new Error("Network response was not ok");
			}

			const data = await response.json();
			localStorage.setItem("movies", JSON.stringify(data.films));
			return data.films;
		} catch (error) {
			console.error("Error fetching movies:", error);
			throw error;
		}
	}

	useEffect(() => {
		if (!movies.length) {
			const fetchedMovies = utilityFetchMovies();
			setMovies(fetchedMovies);
		}
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
