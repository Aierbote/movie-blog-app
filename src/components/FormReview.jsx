import React, { useState } from 'react';
import { TextField, Button, Rating, Typography, Box } from '@mui/material';
import { useAppContext } from '../Context';

const FormReview = ({ idFilm }) => {
    const [comment, setComment] = useState('');
    const [rating, setRating] = useState(0);
    const {setReviews, loggedUser} = useAppContext();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await sendReview();

            if (response) {
                // Aggiungi la nuova recensione alla lista nel localStorage
                const newReview = {
                    idFilm,
                    rating,
                    comment,
                    user: loggedUser,
                    
                };

                const reviewsFromStorage = JSON.parse(localStorage.getItem('reviews')) || [];

                const updatedReviews = [...reviewsFromStorage, newReview];

                localStorage.setItem('reviews', JSON.stringify(updatedReviews));

                setReviews(updatedReviews);
                // Resetta il form
                setComment('');
                setRating(0);

            }
        } catch (error) {
            console.error('Error sending review:', error);
            alert('Si è verificato un errore durante l\'invio della recensione');
        }
    }

    async function sendReview() {
        try {
            const response = await fetch(`http://localhost:8080/films/${idFilm}/reviews`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    comment,
                    rating,
                    user: 'Gamabunta',
                    idFilm,
                }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            return response.json();
        } catch (error) {
            console.error('Error sending review:', error);
            throw error;
        }
    }

    const isRatingValid = rating > 0;
    const isCommentValid = comment.trim() !== '';

    return (
        <form onSubmit={handleSubmit}>

            <Box mb={2}>
                <Typography component="legend">Voto</Typography>
                <Rating
                    name="rating"
                    value={rating}
                    onChange={(event, newValue) => {
                        setRating(newValue);
                    }}
                />
            </Box>
            <TextField
                label="Scrivi la tua recensione"
                variant="outlined"
                multiline
                sx={{ width: "50%" }}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                margin="normal"
            /><br />
            <Button type="submit" variant="contained" color="primary" disabled={!isRatingValid || !isCommentValid} >
                Invia recensione
            </Button>
        </form>
    );
};

export default FormReview;