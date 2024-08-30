import { useMovieStore } from "../store/movieStore";
import { Movie } from "../types";

const { setSearchTitle, setMovies } = useMovieStore()

export const searchMovies = async (title: string) => {
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