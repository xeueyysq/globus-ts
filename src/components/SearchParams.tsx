import { FC } from 'react';
import { Grid2, Chip } from '@mui/material';
import { useMovieStore } from '../store/movieStore';

const SearchParams: FC = () => {
    const { genres, setGenres } = useMovieStore();
    const genresList = [
        "Short",
        "Drama",
        "Comedy",
        "Documentary",
        "Adult",
        "Action",
        "Romance",
        "Thriller",
        "Animation",
        "Family",
        "Crime",
        "Horror",
        "Music",
        "Adventure",
        "Fantasy",
        "Sci-Fi",
        "Mystery",
        "Biography",
        "Sport",
        "History",
        "Musical",
        "Western",
        "War",
        "Reality-TV",
        "News",
        "Talk-Show",
        "Game-Show",
        "Film-Noir",
        "Lifestyle",
        "Experimental",
        "Commercial"
      ];
    return(
        <Grid2>
            {genresList.map((genre: string) => (
                <Chip key={genre} label={genre} variant="outlined" sx={{
                    color: '#090A0B',   
                    fontSize: '15px',
                    borderColor: 'rgba(0, 0, 0, 0.3)',
                    backgroundColor: 'white',
                    marginTop: '20px',
                    marginRight: '10px'
                    }}/>    
            ))}
        </Grid2>
    )      
}

export default SearchParams;