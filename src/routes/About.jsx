import { useEffect } from "react";

export function About() {

	useEffect(() => {
        localStorage.removeItem("reviews");
    }, []);
	
	return (
		<div>
			<h1>About</h1>
		</div>
	);
}
