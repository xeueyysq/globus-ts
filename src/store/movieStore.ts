import { create } from "zustand";
import { Movie } from "../types";

interface MovieStore {
    movieType: string;
    movies: Movie[];
    title: string;
    searchTitle: string;
    genres: [];
    setMovies: (movies: Movie[]) => void;
    setTitle: (title: string) => void;
    setSearchTitle: (title: string) => void;
    setMovieType: (title: string) => void;
    setGenres: (genres: []) => void;
}

export const useMovieStore = create<MovieStore>((set) => ({
    movies: [],
    title: '',
    searchTitle: '',
    movieType: 'all',
    genres: [],
    setMovies: (movies) => set({ movies }),
    setTitle: (title) => set({ title: title }),
    setSearchTitle: (title) => set({ searchTitle: title}),
    setMovieType: (movieType) => set({movieType: movieType}),
    setGenres: (genres) => set({genres: genres})
  }));