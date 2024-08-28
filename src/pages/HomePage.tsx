import { FC } from 'react';
import MovieList from '../components/MovieList';
import { Movie } from '../types';
import { Container, Typography, Button, Grid, Input } from '@mui/material';
import { useMovieStore } from '../store/movieStore';

const HomePage: FC = () => {
    const { title, setTitle, movies, setMovies, searchTitle, setSearchTitle } = useMovieStore();

    const searchMovies = async () => {
        try {
            setSearchTitle(title);

            const response = await fetch(`/api/movies?q=${title}`);
            if (!response.ok) {
                throw new Error(`Failed to fetch movies: ${response.statusText}`);
            }

            const data = await response.json();
            const movieList = data.Search || [];

            const movieDetails = await getDetails(movieList);
            setMovies(movieDetails);
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    };

    const getDetails = async (movieList: Movie[]) => {
        return Promise.all(
            movieList.map(async (movie: Movie) => {
                const response = await fetch(`/api/movies/${movie.imdbID}`);
                if (!response.ok) {
                    throw new Error(`Failed to fetch movie details: ${response.statusText}`);
                }
                const movieDetail = await response.json();
                return { ...movie, ...movieDetail };
            })
        );
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            searchMovies();
        }
    };

    return (
        <Container>
            <Typography variant="h3" gutterBottom>
                IMDB Clone
            </Typography>
            <Input
                type="text"
                value={title}
                placeholder="Search movie by title..."
                onChange={(e) => setTitle(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <Button onClick={searchMovies}>Search</Button>
            {searchTitle && (
                <Typography variant="h6">Search results for "{searchTitle}"</Typography>
            )}
            <Grid container style={{ marginTop: '20px' }}>
                <MovieList movies={movies} />
            </Grid>
        </Container>
    );
};

export default HomePage;