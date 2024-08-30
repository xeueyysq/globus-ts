import { FC } from 'react';
import { AppBar, InputBase, Typography, Toolbar, Button } from '@mui/material';
import { ImageSearch } from '@mui/icons-material';
import { Search } from '@mui/icons-material';
import { searchMovies } from '../services/movieService';
import { useMovieStore } from '../store/movieStore';

const MovieAppBar: FC = () => {
    const { title, setTitle } = useMovieStore()

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            searchMovies(title);
        }
    };

    return (
        <AppBar>
            <Toolbar>
                <Search>
                    <ImageSearch></ImageSearch>
                    <InputBase
                        value={title}
                        placeholder="Search movie by title..."
                        onChange={(e) => setTitle(e.target.value)}
                        onKeyDown={handleKeyDown}
                    ></InputBase>
                    <Button onClick={() => searchMovies(title)}>Search</Button>
                </Search>
            </Toolbar>
        </AppBar>
    )
}

export default MovieAppBar