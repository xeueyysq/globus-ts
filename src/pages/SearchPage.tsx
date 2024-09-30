import { FC } from 'react';
import { useParams } from 'react-router-dom';
import MovieList from '../components/MovieList';
import { Container, Typography, Button, Grid2, Input } from '@mui/material';
import { useMovieStore } from '../store/movieStore';
import MovieAppBar from '../components/MovieAppBar';
import SearchParams from '../components/SearchParams';

const SearchPage: FC = () => {
    const {  movies, searchTitle } = useMovieStore();

    return (
        <Grid2>
            <MovieAppBar/>
            {searchTitle && (
                    <Typography mt={3} ml={9} gutterBottom variant="h6">Search "{searchTitle}"</Typography>
                )}
            <Grid2
                container
                spacing={10}
                justifyContent="center"
            >
                <MovieList movies={movies} />
                <SearchParams />
            </Grid2>
        </Grid2>
    );
};

export default SearchPage;