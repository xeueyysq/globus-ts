export interface Movie {
    imdbID: string;
    Title: string;
    Year: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Poster: string;
    Ratings: { Source: string; Value: string }[];
    imdbRating: string;
  }