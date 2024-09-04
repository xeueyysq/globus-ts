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
            <Grid2 mt={9}>
                {searchTitle && (
                    <Typography variant="h6">Search "{searchTitle}"</Typography>
                )}
                    <Grid2 display={'flex'}>
                        <MovieList movies={movies} />
                        <Grid2>
                            <SearchParams />
                        </Grid2>
                    </Grid2>
            </Grid2>
        </Grid2>
    );
};

export default SearchPage;