import { FC } from 'react';
import MovieList from '../components/MovieList';
import { Container, Typography, Button, Grid, Input } from '@mui/material';
import { useMovieStore } from '../store/movieStore';
import MovieAppBar from '../components/MovieAppBar';

const HomePage: FC = () => {
    const {  movies, searchTitle } = useMovieStore();

    return (
        <Container>
            <MovieAppBar></MovieAppBar>
            {searchTitle && (
                <Typography variant="h6">Search "{searchTitle}"</Typography>
            )}
            <Grid container style={{ marginTop: '20px' }}>
                <MovieList movies={movies} />
            </Grid>
        </Container>
    );
};

export default HomePage;