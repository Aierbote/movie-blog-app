# Declarations

## Data Structure

```
// Context
loggedUser = str;
films = array(Film);
reviews = array(Review);

// Film
{
  "id": int,
  "title": string,
  "year": string,
  "image": string,
  "director": string,
  "cast": array(string),
  "genre": string
}

// Review
{
  "idReviews": int,
  "idFilm": int ForeignKey,
  "rating": int,
  "comment": string,
  "user": string
}
```

## endpoints

**FILM:**

| Method | Endpoint      |
| ------ | ------------- |
| GET    | `/films`      |
| GET    | `/films/{id}` |
| POST   | `/films/{id}` |
| PUT    | `/films/{id}` |
| DELETE | `/films/{id}` |

**REVIEW:**

| Method | Endpoint                              |
| ------ | ------------------------------------- |
| GET    | `/films/{id}/reviews`                 |
| POST   | `/films/{idFilm}/reviews/{idReviews}` |
| PUT    | `/films/{idFilm}/reviews/{idReviews}` |
| DELETE | `/films/{idFilm}/reviews/{idReviews}` |
