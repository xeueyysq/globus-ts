import express from 'express'
import dotenv from 'dotenv'
import { fetchMovies } from './omdbService'

dotenv.config()
const app = express()
app.use(express.json())

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send("Hello on IMDB Clone")
})

app.get('/api/movies', async (req, res) => {
    const searchTerm = req.query.q as string;
    const method = 's'
    try {
        const movies = await fetchMovies(searchTerm, method);
        res.json(movies);  // Отправляем JSON-ответ клиенту
    } catch (error) {
        console.error('Error fetching movies:', error);
        res.status(500).json({ message: 'Error fetching movies' });  // Возвращаем JSON с сообщением об ошибке
    }
});

app.get('/api/movies/:id', async (req, res) => {
    const id = req.params.id as string
    const method = 'i'
    try {
        const movie = await fetchMovies(id, method)
        res.json(movie)
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching movie'})
    }
})


app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})