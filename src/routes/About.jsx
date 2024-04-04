import React from 'react';

export function About() {
    const descriptionStyle = {
        fontWeight: 'bold',
        fontSize: '20px',
        lineHeight: '1.5',
        margin: '20px 10%',
        padding: '20px',
        backgroundColor: '#f9f9f9',
        border: '2px solid #ccc',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        maxWidth: '100%',
        textAlign: 'left',
        color: '#333',
    };

    const teamMemberTextStyle = {
        color: '#000',
        padding: '10px',
        borderRadius: '10px',
    };

    const pageStyle = {
        textAlign: 'center',
        backgroundColor: '#555',
        color: '#fff',
        margin: '0',
        padding: '20px',
        borderRadius: '10px', // Aggiunto il bordo grigio
    };

    return (
        <div style={pageStyle}>
            <h1 style={{ color: 'red', fontSize: '36px' }}>Chi siamo?</h1>
            <div style={descriptionStyle}>
                <p>
                    Siamo studenti della Steve Jobs School, esperti nei linguaggi di programmazione come Python, PHP, Java, JavaScript, Pandas, React, Angular, HTML e CSS.
                </p>
                <p> Siamo un gruppo di giovani programmatori che hanno trovato la propria passione nel mondo della programmazione.</p>
                <p>Amiamo ciò che facciamo e ci dedichiamo con entusiasmo e passione ad ogni progetto che affrontiamo. </p>
                <p>La nostra gioia deriva dall'affrontare sfide complesse, risolvere problemi intricati e creare soluzioni innovative che possano fare la differenza.</p>
                <p>Siamo appassionati di codice e tecnologia, e la nostra curiosità insaziabile ci spinge sempre a imparare e a migliorare le nostre competenze.</p>
                <p>Crediamo che il nostro lavoro possa contribuire a rendere il mondo un posto migliore, e siamo determinati a lasciare un'impronta positiva con ogni riga di codice che scriviamo.</p>
                <p>In sintesi, siamo programmatori con un cuore pieno di passione per la tecnologia e un'inesauribile voglia di creare e innovare. </p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
                <div style={teamMemberStyle}>
                    <img src="./Calogero.jpg" alt="Calogero Raia" style={imageStyle} />
                    <p style={teamMemberTextStyle}>
                        Calogero Raia programmatore.
                        Studente Steve Jobs.
                        Data Scientist per l'Analisi dei Dati dei Film.
                    </p>
                </div>
                <div style={teamMemberStyle}>
                    <img src="./Alberto.jpg" alt="Alberto Cangialosi" style={imageStyle} />
                    <p style={teamMemberTextStyle}>
                        Alberto Cangialosi programmatore team leader project work.
                        Studente Steve Jobs.
                        Utente macOS appassionato di Shortcuts Molto confidente col Terminale e Git , con un debole per Python.
                        Molto interessato ad apprendere  React
                    </p>
                </div>
                <div style={teamMemberStyle}>
                    <img src="./Alessandro.jpg" alt="Alessandro Russo" style={imageStyle} />
                    <p style={teamMemberTextStyle}>
                        Alessandro Russo programmatore.
                        Studente Steve Jobs.
                        Specialista in User Experience (UX) e Interfaccia Utente (UI).
                    </p>
                </div>
            </div>
        </div>
    );
}

const teamMemberStyle = {
    width: '300px',
    padding: '20px',
    borderRadius: '20px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9f9f9',
    textAlign: 'center',
};

const imageStyle = {
    width: '100%',
    borderRadius: '50%',
    marginBottom: '10px',
};
