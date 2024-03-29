import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export function NotFound() {
	const timer = 5;
	const [isRedirecting, setIsRedirecting] = useState(false);
	const [countdown, setCountdown] = useState(timer);

	useEffect(() => {
		/* NOTE : To redirect after X seconds of countdown */
		setTimeout(() => {
			setIsRedirecting(true);
		}, timer * 1_000);
	}, []);

	useEffect(() => {
		const interval = setInterval(() => {
			setCountdown((prevCountdown) => prevCountdown - 1);
		}, 1_000);

		return () => clearInterval(interval);
	});

	if (isRedirecting) {
		return <Navigate to="/" />;
	}

	return (
		<div>
			<h1>404 Not Found</h1>
			<p>Redirecting in {countdown} seconds...</p>
		</div>
	);
}
