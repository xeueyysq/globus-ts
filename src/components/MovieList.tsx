import React from 'react';
import { Grid2, Box } from '@mui/material';
import MovieItem from './MovieItem';
import { Movie } from '../types';

interface MovieListProps {
    movies: Movie[],
}

const MovieList: React.FC<MovieListProps> = ({ movies}) => {
    return (
        <Grid2 width={'55%'}>
            {movies.map((movie) => (
                <MovieItem
                key={movie.imdbID}
                id={movie.imdbID}
                title={movie.Title}
                year={movie.Year}
                poster={movie.Poster}
                actors={movie.Actors}
                />
            ))}
        </Grid2>
    )
}

export default MovieList