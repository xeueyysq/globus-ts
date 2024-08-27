import { FC, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { Container, Typography, Card, CardContent, CardMedia, Grid, Box } from '@mui/material'

const MoviePage: FC = () => {
    const { id } = useParams<{ id: string }>()
    const [movie, setMovie] = useState<Record<string, any> | null>(null)
    
    useEffect(() => {
        const fetchMovieDetails = async () => {
            const response = await fetch(`/api/movies/${id}`)
            setMovie(await response.json())
        }

    fetchMovieDetails()
    }, [id])
    
    if (!movie){
        return <div>Loading...</div>
    }

    return (
        <Container maxWidth="md">
          <Card sx={{backgroundColor: '#1F1F1F', color: 'white', marginTop: '50px'}}>
            <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} p={2}>
              <CardMedia
                component="img"
                height="400"
                image={movie.Poster}
                alt={movie.Title}
              />
              <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <Box>
                  <Typography variant="h4" gutterBottom>{movie.Title}</Typography> 
                  <Typography variant="h6" gutterBottom>{movie.Year}</Typography> 
                  <Typography variant="body1">{movie.Plot}</Typography> 
                </Box>
                <Box display={'flex'}>
                  {movie.Ratings[1] && (
                    <div style={{marginRight: 20}}>
                      <img src='../public/images/tomatoe.png' alt={movie.Title} height={25} />
                      <Typography variant="body1" sx={{fontWeight: 'bold'}} gutterBottom>{movie.Ratings[1].Value.slice(0, -1) || null}</Typography>
                    </div>
                  )}
                  {movie.Ratings[2] && (
                  <div style={{marginRight: 20}}>
                    <img src='../public/images/meta.png' alt={movie.Title} height={25} />
                    <Typography variant="body1" sx={{fontWeight: 'bold'}} gutterBottom>{movie.Ratings[2].Value.slice(0, -4) || null}</Typography>
                  </div>)}
                  <div style={{textAlign: 'center'}}>
                    <img src='../public/images/imdb.png' alt={movie.Title} height={25} />
                    <Typography variant="body1" sx={{fontWeight: 'bold'}} gutterBottom>{movie.imdbRating || null}</Typography>
                  </div>
                </Box>
              </CardContent>
            </Box>
          </Card>
        </Container>
      );
}

export default MoviePage;