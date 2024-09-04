import { Movie } from "../types";

export const searchMovies = async (title: string, type: string) => {
    try {
        const url = `/api/movies/?type=${type}&title=${title}`

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch movies: ${response.statusText}`);
        }

        const data = await response.json();
        const movieList = data.Search || [];

        const movieDetails = await getDetails(movieList);
        return movieDetails;
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
