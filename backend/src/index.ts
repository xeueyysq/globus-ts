import express from 'express';
import dotenv from 'dotenv';
import { fetchMoviesByID, fetchMoviesByS } from './omdbService';

dotenv.config();
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send("Hello on IMDB Clone");
});

app.get('/api/movies/', async (req, res) => {
    const title = req.query.title as string;
    const type = req.query.type as string;

    try {
        const movies = await fetchMoviesByS(title, type);
        res.json(movies);
    } catch (error) {
        console.error('Error fetching movies:', error);
        res.status(500).json({ message: 'Error fetching movies' }); 
    }
});

app.get('/api/movies/:id', async (req, res) => {
    const id = req.params.id as string;
    try {
        const movie = await fetchMoviesByID(id);
        res.json(movie);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching movie' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});
