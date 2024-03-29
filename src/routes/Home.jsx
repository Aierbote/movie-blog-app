import { useEffect } from "react";

export function Home() {
	
	useEffect(() => {
        localStorage.removeItem("reviews");
    }, []);

	return (
		<div>
			<h1>Home</h1>
		</div>
	);
}
