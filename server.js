const mysql = require('mysql2');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'movie-blog-app'
});

app.get('/', async (req, res) => {
  res.json({ message: 'Welcome to the Movie Blog API' });
});

app.get('/films', async (req, res) => {
  const sql = `SELECT * FROM film`;

  connection.query(
    sql,
    (err, results, fields) => {
      if (err) {
        console.error('Errore durante la connessione al database:', err);
        return;
      }
      const parsedFilms = results.map(film => ({
        ...film,
        cast: JSON.parse(film.cast || '[]')
      }));

      res.json(parsedFilms);

    });
})










app.get('/films/:id', async (req, res) => {
  const filmId = req.params.id;
  const sql = `SELECT * FROM film WHERE id = ${filmId}`;

  connection.query(
    sql,
    (err, results, fields) => {

      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }

      if (results.length === 0) {
        return res.status(404).json({ error: 'Film not found' });
      }

      const parsedFilm = {
        ...results[0],
        cast: JSON.parse(results[0].cast || '[]')
      };

      res.json(parsedFilm);
    }

  );
});


app.put('/films/:id', async (req, res) => {
  const filmId = req.params.id;
  const { title, year, image, director, cast, genre } = req.body;


  if (!title || !year || !image || !director || !cast || !genre) {
    return res.status(400).json({ error: 'Tutti i campi sono obbligatori' });
  }

  const updatedCast = JSON.stringify(cast);

  const updateFilmQuery = `
    UPDATE film
    SET title = ?, year = ?, image = ?, director = ?, cast = ?, genre = ?
    WHERE id = ?
  `;


  connection.query(
    updateFilmQuery,
    [title, year, image, director, updatedCast, genre, filmId],
    (err, results, fields) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Errore interno del server' });
      }

      if (results.affectedRows === 0) {
        return res.status(404).json({ error: 'Film non trovato' });
      }

      res.json({ message: 'Film aggiornato' });
    }
  );
});


app.post('/films/', async (req, res) => {

  const { title, year, image, director, cast, genre } = req.body;
  const updatedCast = JSON.stringify(cast);

  if (!title || !year || !image || !director || !updatedCast || !genre) {
    return res.status(400).json({ error: 'Tutti i campi sono obbligatori' });
  }

  const query = `INSERT INTO film (title, year, image, director, cast, genre) VALUES ('${title}', '${year}', '${image}', '${director}', '${updatedCast}', '${genre}')`;

  connection.query(

    query,
    (err, results, fields) => {

      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Errore interno del server' });
      }

      res.json({ message: `Film aggiunto` });
    }
  )

})

app.delete('/films/:id', async (req, res) => {
  const filmId = req.params.id;

  const deleteFilmQuery = `DELETE FROM film WHERE id = ?`;

  connection.query(
    deleteFilmQuery,
    [filmId],
    (err, results, fields) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Errore interno del server' });
      }

      if (results.affectedRows === 0) {
        return res.status(404).json({ error: 'Film non trovato' });
      }

      res.json({ message: 'Film eliminato' });
    }
  );
});

app.get('/films/:idFilm/reviews', async (req, res) => {
  const idFilm = req.params.idFilm;
  const sql = `SELECT * FROM review WHERE idFilm = ${idFilm}`;

  connection.query(
    sql,
    (err, results, fields) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Errore interno del server' });
      }

      res.json(results);
    }
  );
});


app.post('/films/:idFilm/reviews', async (req, res) => {
  const idFilm = req.params.idFilm;
  const { rating, comment, user } = req.body;

  if (!rating || !comment || !user) {
    return res.status(400).json({ error: 'Tutti i campi sono obbligatori' });
  }

  const query = `INSERT INTO review ( idFilm, rating, comment, user) VALUES ('${idFilm}', '${rating}', '${comment}', '${user}')`;

  connection.query(
    query,
    (err, results, fields) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Errore interno del server' });
      }

      res.json({ message: 'Recensione aggiunta' });
    }
  );

});

app.put('/films/:idFilm/reviews/:idReview', async (req, res) => {
  const filmId = req.params.idFilm;
  const reviewId = req.params.idReview;
  const { comment, rating, user } = req.body;

  if (!comment || !rating || !user) {
    return res.status(400).json({ error: 'Tutti i campi sono obbligatori' });
  }

  const updateRewiewQuery = `
      UPDATE review
      SET comment = ?, rating = ?, user = ?
      WHERE idReview = ? AND idFilm = ?
    `;

  connection.query(
    updateRewiewQuery,
    [comment, rating, user, reviewId, filmId],
    (err, results, fields) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Errore interno del server' });
      }

      if (results.affectedRows === 0) {
        return res.status(404).json({ error: 'Recensione non trovata' });
      }

      res.json({ message: 'Recensione aggiornata' });
    }
  );

})

app.delete('/films/:idFilm/reviews/:idReview', async (req, res) => {
  const filmId = req.params.idFilm;
  const reviewId = req.params.idReview;

  const deleteReviewQuery = `DELETE FROM review WHERE idReview = ? AND idFilm = ?`;

  connection.query(
    deleteReviewQuery,
    [reviewId, filmId],
    (err, results, fields) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Errore interno del server' });
      }

      if (results.affectedRows === 0) {
        return res.status(404).json({ error: 'Recensione non trovata' });
      }

      res.json({ message: 'Recensione eliminata' });
    }
  );
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});