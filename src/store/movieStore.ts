import zustand, { create } from "zustand";
import { Movie } from "../types";

interface MovieStore {
    movies: Movie[];
    title: string;
    searchTitle: string;
    setMovies: (movies: Movie[]) => void;
    setTitle: (title: string) => void;
    setSearchTitle: (title: string) => void;
}

export const useMovieStore = create<MovieStore>((set) => ({
    movies: [],
    title: '',
    searchTitle: '',
    setMovies: (movies) => set({ movies }),
    setTitle: (title) => set({ title: title }),
    setSearchTitle: (title) => set({ searchTitle: title})
  }));