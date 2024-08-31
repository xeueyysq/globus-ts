import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, InputBase, Typography, Toolbar, IconButton, Link } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { searchMovies } from '../services/movieService';
import { useMovieStore } from '../store/movieStore';

const MovieAppBar: FC = () => {
    const navigate = useNavigate()
    const { title, setTitle, setSearchTitle, setMovies } = useMovieStore()

    const search = async () => {
        setSearchTitle(title)
        const movieList = await searchMovies(title)
        setMovies(movieList || [])
        navigate(`/search/${title}`)
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            search();
        }
    };

    return (
        <AppBar sx={{ backgroundColor: 'rgb(18, 18, 18)', height: '56px' }}>
            <Toolbar sx={{ marginLeft: '20%', display: 'flex', alignItems: 'center' }}>
                <Link href='/' sx={{ display: 'flex', alignItems: 'center'}}>
                    <img src='/public/images/imdb_logo.png' alt='Site Logo' height={'32px'} />
                </Link>
                <InputBase
                value={title}
                placeholder="Search movie by title..."
                onChange={(e) => setTitle(e.target.value)}
                onKeyDown={handleKeyDown}
                sx={{ 
                    backgroundColor: 'white', 
                    padding: '4px 8px', 
                    borderRadius: '4px', 
                    height: '32px', 
                    width: '50%', 
                    marginLeft: '16px' 
                }}
                />
                <IconButton onClick={search} sx={{ marginLeft: '8px', padding: '8px' }}>
                <SearchIcon sx={{ color: 'white' }} />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default MovieAppBar