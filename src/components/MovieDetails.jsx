//crea un componente moviedettails che mostra i dettagli del film 

import React from 'react';

function MovieDetails(props) {
  const { imagine, title, year, director, cast, genre } = props;

  return (
    <div> 
      <h2>{genre} - {title}</h2>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <div style={{ marginRight: '20px' }}>
          <img src={imagine} alt={title} style={{ width: '150px', height: '200px' }} />
        </div>
        <div>
          <p>{year}</p>
          <p><strong>Regista:</strong> {director}</p>
          <p><strong>Cast:</strong> {cast}</p>
          <p>Descrizione: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor velit eget posuere porta.</p>
        </div>
      </div>
    </div>
  );
}





export default MovieDetails;
