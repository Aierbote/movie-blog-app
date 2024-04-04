import React from "react";

export function About() {
	const descriptionStyle = {
		fontWeight: "bold",
		fontSize: "20px",
		lineHeight: "1.5",
		margin: "20px 10%",
		padding: "20px",
		backgroundColor: "#f9f9f9",
		border: "2px solid #ccc",
		borderRadius: "10px",
		boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
		maxWidth: "100%",
		textAlign: "left",
	};

	const openProfile = (url) => {
		window.open(url, "_blank");
	};

	const teamMemberStyle = {
		width: "300px",
		padding: "20px",
		borderRadius: "20px",
		boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
		backgroundColor: "#f9f9f9",
		textAlign: "center",
	};

	const imageStyle = {
		width: "100%",
		borderRadius: "50%",
		marginBottom: "10px",
	};

	return (
		<div style={{ textAlign: "center" }}>
			<h1 style={{ color: "red", fontSize: "36px" }}>Chi siamo?</h1>
			<div style={descriptionStyle}>
				<p>
					Siamo studenti della Steve Jobs School, esperti nei linguaggi di
					programmazione come Python, PHP, Java, JavaScript, Pandas, React,
					Angular, HTML e CSS.
				</p>
				<p>
					{" "}
					Siamo un gruppo di giovani programmatori che hanno trovato la propria
					passione nel mondo della programmazione.
				</p>
				<p>
					Amiamo ciò che facciamo e ci dedichiamo con entusiasmo e passione ad
					ogni progetto che affrontiamo.{" "}
				</p>
				<p>
					La nostra gioia deriva dall'affrontare sfide complesse, risolvere
					problemi intricati e creare soluzioni innovative che possano fare la
					differenza.
				</p>
				<p>
					Siamo appassionati di codice e tecnologia, e la nostra curiosità
					insaziabile ci spinge sempre a imparare e a migliorare le nostre
					competenze.
				</p>
				<p>
					Crediamo che il nostro lavoro possa contribuire a rendere il mondo un
					posto migliore, e siamo determinati a lasciare un'impronta positiva
					con ogni riga di codice che scriviamo.
				</p>
				<p>
					In sintesi, siamo programmatori con un cuore pieno di passione per la
					tecnologia e un'inesauribile voglia di creare e innovare.{" "}
				</p>
			</div>
			<div
				style={{
					display: "flex",
					justifyContent: "space-around",
					marginTop: "20px",
				}}
			>
				<div style={teamMemberStyle}>
					<img src="./Calogero.jpg" alt="Calogero Raia" style={imageStyle} />
					<p>
						Calogero Raia programmatore. Studente Steve Jobs. Data Scientist per
						l'Analisi dei Dati dei Film.
					</p>
					<button
						onClick={() => openProfile("https://github.com/CalogeroRaia")}
					>
						GitHub
					</button>
					<button
						onClick={() =>
							openProfile(
								"https://www.linkedin.com/in/calogero-raia-a798212b8/"
							)
						}
					>
						LinkedIn
					</button>
				</div>
				<div style={teamMemberStyle}>
					<img
						src="./Alberto.jpg"
						alt="Alberto Cangialosi"
						style={imageStyle}
					/>
					<p>
						Alberto Cangialosi programmatore team leader project work. Studente
						Steve Jobs. Esperto nell'utilizzo di terminali.
					</p>
					<button onClick={() => openProfile("https://github.com/Aierbote")}>
						GitHub
					</button>
					<button
						onClick={() =>
							openProfile(
								"https://www.linkedin.com/in/alberto-cangialosi-150833265/"
							)
						}
					>
						LinkedIn
					</button>
				</div>
				<div style={teamMemberStyle}>
					<img
						src="./Alessandro.jpg"
						alt="Alessandro Russo"
						style={imageStyle}
					/>
					<p>
						Alessandro Russo programmatore. Studente Steve Jobs. Specialista in
						User Experience (UX) e Interfaccia Utente (UI).
					</p>
					<button onClick={() => openProfile("https://github.com/alexrusso97")}>
						GitHub
					</button>
					<button
						onClick={() =>
							openProfile(
								"https://www.linkedin.com/in/alessandro-russo-44292520a/"
							)
						}
					>
						LinkedIn
					</button>
				</div>
			</div>
		</div>
	);
}
