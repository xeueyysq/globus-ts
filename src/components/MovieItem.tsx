import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Grid2 } from '@mui/material';

interface MovieItemProps {
    id: string
    title: string
    year: string
    poster: string
    actors: string
}

const MovieItem: FC<MovieItemProps> = ({id, title, year, poster, actors}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/movie/${id}`)
    }

    return (
        <Grid2 mb={3}> 
          <Card onClick={handleClick}>
            <CardActionArea> 
                <Grid2 container spacing={2}>
                    <Grid2>
                        <CardMedia
                            component="img"
                            image={poster}
                            alt={title}
                            style={{
                                width: '200px',
                                height: '300px',
                                objectFit: 'cover',
                            }}
                        /> 
                    </Grid2>
                    <Grid2 >
                        <CardContent>
                            <Typography variant="h6">{title}</Typography>
                            <Typography variant="body2" color="textSecondary" gutterBottom>{year}</Typography>
                            <Typography variant="body1" gutterBottom>{actors}</Typography>
                        </CardContent>
                    </Grid2>
                </Grid2>
            </CardActionArea>
          </Card>
        </Grid2>
      );
}

export default MovieItem;
