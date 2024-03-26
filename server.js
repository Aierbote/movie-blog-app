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

// DEBUG :
console.log('connection', connection);

app.get('/films/:id', async (req, res) => {

  const filmId = req.params.id;
  const sql = `SELECT * FROM film WHERE id = ?`;

  try {
    const [results, fields] = await connection.execute(sql, [filmId]);

    if (results.length === 0) {
      return res.status(404).json({ error: 'Film not found' });
    }

    const film = results[0];

    const cast = JSON.parse(film.cast || '[]');

    const parsedFilm = {
      id: filmId,
      title: film.title,
      year: film.year,
      image: film.image,
      director: film.director,
      cast: cast,
      genre: film.genre
    };

    res.json(parsedFilm);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
