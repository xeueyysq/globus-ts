import React, { useState } from 'react';
import MovieList from '../components/MovieList';
import { Movie } from '../types';
import { Container, Typography, Button, Grid, Input } from '@mui/material';

const HomePage: React.FC = () => {
    const [title, setTitle] = useState('')
    const [searchTitle, setSearchTitle] = useState('')
    const [movies, setMovies] = useState<Movie[]>([])

    const searchMovies = async () => {
        try {
            setSearchTitle(title)
            const response = await fetch(`/api/movies?q=${title}`);
            if (!response.ok) {
                throw new Error(`Failed to fetch movies: ${response.statusText}`);
            }
            const data = await response.json();
            setMovies(data.Search || []);
        } catch (error) {
            console.error('Error fetching movies:', error);
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter'){
            searchMovies()}
    }

    return (
        <Container>
            <Typography variant="h3" gutterBottom>
                IMDB Clone
            </Typography>
            <Input
            type='text'
            value={title}
            placeholder='Search movie by title...'
            onChange={(e) => setTitle(e.target.value)}
            onKeyDown={handleKeyDown}
            />
            <Button onClick={searchMovies}>Search</Button>
            {searchTitle && (
                <Typography variant='h3'>Search "{searchTitle}"</Typography>
            )}
            <Grid container style={{ marginTop: '20px' }} sx={{ml: -30}}>
                <MovieList movies={movies} />
            </Grid>
        </Container>
    )
}

export default HomePage;