import { FC } from 'react';
import { useParams } from 'react-router-dom';
import MovieList from '../components/MovieList';
import { Container, Typography, Button, Grid2, Input } from '@mui/material';
import { useMovieStore } from '../store/movieStore';
import MovieAppBar from '../components/MovieAppBar';

const SearchPage: FC = () => {
    const {  movies, searchTitle } = useMovieStore();

    return (
        <Container>
            <MovieAppBar/>
            <Grid2 mt={9}>
                {searchTitle && (
                    <Typography variant="h6" ml={5}>Search "{searchTitle}"</Typography>
                )}
                <Grid2 container>
                    <MovieList movies={movies} />
                </Grid2>
            </Grid2>
        </Container>
    );
};

export default SearchPage;