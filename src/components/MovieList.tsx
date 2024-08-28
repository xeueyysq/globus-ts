import React from 'react';
import MovieItem from './MovieItem';
import { Movie } from '../types';

interface MovieListProps {
    movies: Movie[],
}

const MovieList: React.FC<MovieListProps> = ({ movies}) => {
    return (
        <ul>
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
        </ul>
    )
}

export default MovieList