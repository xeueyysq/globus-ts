import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, InputBase, Typography, Toolbar, IconButton, Link, Select, MenuItem, FormControl, InputLabel, Grid2 } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { searchMovies } from '../services/movieService';
import { useMovieStore } from '../store/movieStore';

const MovieAppBar: FC = () => {
    const navigate = useNavigate()
    const { title, setTitle, setSearchTitle, setMovies, movieType, setMovieType } = useMovieStore()

    const search = async () => {
        setSearchTitle(title)
        const movieList = await searchMovies(title, movieType)
        setMovies(movieList || [])
        navigate(`/search/${title}`)
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            search();
        }
    };

    return (
        <AppBar position='static' sx={{ backgroundColor: 'rgb(18, 18, 18)', height: '56px' }}>
            <Toolbar sx={{ marginLeft: '20%', display: 'flex', alignItems: 'center' }}>
                <Link href='/' sx={{ display: 'flex', alignItems: 'center'}}>
                    <img src='/public/images/imdb_logo.png' alt='Site Logo' height={'32px'} />
                </Link>
                <Grid2 sx={{width: '60%', display: 'flex', alignItems: 'center', marginLeft: '16px'}}>
                    <Select
                    value={movieType}
                    onChange={(e) => {setMovieType(e.target.value)}}
                    sx={{backgroundColor: 'white', height: '32px', '&:focus': {
                        borderRadius: 0,
                        borderColor: 'white',
                        boxShadow: 'white',
                        },}}
                    >
                        <MenuItem value='all'>All</MenuItem>
                        <MenuItem value='movie'>Movies</MenuItem>
                        <MenuItem value='series'>Series</MenuItem>
                    </Select>
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
                        width: '70%',
                        flexGrow: 1

                    }}
                    />
                    <IconButton onClick={search} sx={{ marginLeft: '8px', padding: '8px' }}>
                        <SearchIcon sx={{ color: 'white' }} />
                    </IconButton>
                </Grid2>
            </Toolbar>
        </AppBar>
    )
}

export default MovieAppBar