import { createContext, useContext, useState } from "react";

const AppContext = createContext({
	loggedUser: null,
	setLoggedUser: () => { },
	movies: [],
	setMovies: () => { },
	reviews: [],
	setReviews: () => { },
});

const AppProvider = ({ children }) => {
	const [loggedUser, setLoggedUser] = useState(null);
	const [movies, setMovies] = useState([]);
	const [reviews, setReviews] = useState([]);

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
