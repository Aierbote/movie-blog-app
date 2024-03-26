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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});