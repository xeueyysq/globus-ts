import { FC, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import { Container, Typography, Card, CardContent, CardMedia, Grid2, Box, Divider, Chip, Button, Link } from '@mui/material'
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { useMovieStore } from '../store/movieStore';
import { Movie } from '../types';
import MovieAppBar from '../components/MovieAppBar';

const MoviePage: FC = () => {
    const navigate = useNavigate()
    let { id } = useParams<{ id: string }>()
    const { movies } = useMovieStore()
    const [movie, setMovie] = useState<Movie | null>(null)
    
      useEffect(() => {
        const movieS = movies.find(movie => movie.imdbID === id)
        setMovie(movieS || null)
    }, [id, movies])

    const index = movies.indexOf(movie!)

    if (!movie){
      return <div>Loading...</div>
    }

    const handleClick = (n: number) => {
      navigate(`/movie/${movies[n].imdbID}`)
    }

    const convertTime = () => {
      const time = parseInt(movie.Runtime.slice(0, 3)) || 0
      return `${Math.floor(time / 60)}h ${time % 60}m`
    }

    const genres = movie.Genre.split(',')

    return (
        <Container maxWidth="md">
          <MovieAppBar/>
          <Card sx={{backgroundColor: '#1F1F1F', color: 'white', marginTop: '80px', maxWidth: '1500px'}}>
            <Grid2 container display="flex" flexDirection={'column'}  p={2}>
              <Grid2 container>
                <CardMedia
                  component="img"
                  height="400"
                  image={movie.Poster}
                  alt={movie.Title}
                  style={{
                    height: '450px',
                    width: '300px',
                    marginLeft: '15px'
                  }}
                />
                <Grid2 m={2.5} maxWidth={'410px'}>
                  <Box display="flex" mb={1}>
                    <b>Director</b>
                    <Typography color={'#5490DD'} ml={1}>
                      {movie.Director}
                    </Typography>
                  </Box>
                  <Divider style={{ marginTop: 5 }} color='white' />

                  <Box display="flex" mt={2} mb={1}>
                    <b>Writers</b>
                    <Typography color={'#5490DD'} ml={1}>
                      {movie.Writer}
                    </Typography>
                  </Box>
                  <Divider style={{ marginTop: 5 }} color='white' />

                  <Box display="flex" mt={2} mb={1}>
                    <b>Actors</b>
                    <Typography color={'#5490DD'} ml={1}>
                      {movie.Actors}
                    </Typography>
                  </Box>
                  <Divider style={{ marginTop: 5 }} color='white' />
                  
                  <Grid2>
                    {genres.map((genre: string) => (
                      <Chip key={genre} label={genre} variant="outlined" sx={{
                        color: '#F6F5F4',
                        fontSize: '15px',
                        borderColor: 'rgba(255, 255, 255, 0.3)',
                        backgroundColor: 'transparent',
                        marginTop: '20px',
                        marginRight: '10px'
                        }}/>
                    ))}
                  </Grid2>

                </Grid2>
              </Grid2>
              <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
                <Box>
                  <Link 
                    href={`https://www.imdb.com/title/${id}`} 
                    underline='hover' 
                    color='inherit'
                    target="_blank" 
                    rel="noopener noreferrer"
                    >
                    <Typography 
                      variant="h4" 
                      gutterBottom
                    >
                      {movie.Title}
                    </Typography> 
                  </Link>

                  <Box 
                  display={'flex'} 
                  alignItems={'center'} 
                  gap={'15px'}>
                    <Typography 
                    variant="h6" 
                    gutterBottom
                    >
                      {movie.Year}
                    </Typography>
                    <Typography 
                    variant='body1' 
                    gutterBottom 
                    color={'lightgray'}
                    >
                      {convertTime()}
                    </Typography>
                  </Box>
                  <Typography 
                  variant="body1"
                  >
                    {movie.Plot}
                  </Typography> 
                </Box>

                <Box 
                  display={'flex'} 
                  mt={'20px'} 
                  textAlign={'center'} 
                  sx={{userSelect: 'none'}} 
                  maxWidth={'1000'}
                >
                  {movie.Ratings[1] && (
                    <div style={{marginRight: 20}}>
                      <img 
                        src='../public/images/tomatoe.png' 
                        alt={movie.Title} 
                        height={25} />
                        
                      <Typography 
                        variant="body1" 
                        sx={{fontWeight: 'bold'}} 
                        gutterBottom
                      >
                        {movie.Ratings[1].Value.slice(0, -1) || null}
                      </Typography>
                    </div>
                  )}
                  {movie.Ratings[2] && (
                    <div style={{marginRight: 20}}>
                      <img 
                        src='../public/images/meta.png' 
                        alt={movie.Title} 
                        height={25} />

                      <Typography 
                        variant="body1" 
                        sx={{fontWeight: 'bold'}} 
                        gutterBottom
                        >
                          {movie.Ratings[2].Value.slice(0, -4) || null}
                      </Typography>
                    </div>)}
                  <div>
                    <img
                     src='../public/images/imdb.png'
                     alt={movie.Title} 
                     height={25} />
                    <Typography
                     variant="body1" 
                     sx={{fontWeight: 'bold'}} 
                     gutterBottom
                     >
                      {movie.imdbRating || null}
                    </Typography>
                  </div>
                </Box>
              </CardContent>
              <Grid2 display={'flex'} justifyContent={'space-between'}>

                  { index !== 0 ? 
                    <Button 
                      startIcon={<ArrowBack/>} 
                      onClick={() => handleClick(index - 1)} 
                      
                    >
                      Back
                    </Button> : null}

                  { index !== movies.length - 1 ? 
                    <Button 
                      startIcon={<ArrowForward/>} 
                      onClick={() => handleClick(index + 1)}
                      sx={{marginLeft: 'auto'}}
                    >
                      Next
                    </Button> : null}
                  
              </Grid2>
            </Grid2>
          </Card>
        </Container>
      );
}

export default MoviePage;