import React from 'react';

export function About() {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1 style={{ color: 'red', fontSize: '36px' }}>Chi siamo?</h1>
            <p style={{ fontWeight: 'bold', fontSize: '24px', lineHeight: '1.8' }}>
                Siamo degli studenti della Steve Jobs, esperti nell'uso di linguaggi di programmazione come: Python, PHP, Java, JavaScript, Pandas, React, Angular, HTML e CSS.
                Siamo un gruppo di giovani programmatori che hanno trovato la propria passione nel mondo della programmazione. Amiamo ciò che facciamo e ci dedichiamo con entusiasmo e passione a ogni progetto che affrontiamo. La nostra gioia deriva dall'affrontare sfide complesse, risolvere problemi intricati e creare soluzioni innovative che possano fare la differenza. Siamo appassionati di codice e tecnologia, e la nostra curiosità insaziabile ci spinge sempre a imparare e a migliorare le nostre competenze. Crediamo che il nostro lavoro possa contribuire a rendere il mondo un posto migliore e siamo determinati a lasciare un'impronta positiva con ogni riga di codice che scriviamo. In sintesi, siamo programmatori con un cuore pieno di passione per la tecnologia e un'inesauribile voglia di creare e innovare.
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
                <div style={teamMemberStyle}>
                    <img src="./Calogero.jpg" alt="Calogero Raia" style={imageStyle} />
                    <p>
                        Calogero Raia programmatore.
                        Studente Steve Jobs.
                        Data Scientist per l'Analisi dei Dati dei Film.
                    </p>
                </div>
                <div style={teamMemberStyle}>
                    <img src="./Alberto.jpg" alt="Alberto Cangialosi" style={imageStyle} />
                    <p>
                        Alberto Cangialosi programmatore team leader project work.
                        Studente Steve Jobs.
                        Esperto nell'utilizzo di terminali.
                    </p>
                </div>
                <div style={teamMemberStyle}>
                    <img src="./Alessandro.jpg" alt="Alessandro Russo" style={imageStyle} />
                    <p>
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
