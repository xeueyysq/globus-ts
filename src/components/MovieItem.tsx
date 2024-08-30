import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Grid } from '@mui/material';

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
        <Grid style={{ marginBottom: 20 }}> 
          <Card onClick={handleClick}>
            <CardActionArea> 
                <Grid container spacing={2}>
                    <Grid item>
                        <CardMedia
                            component="img"
                            image={poster}
                            alt={title}
                            style={{
                                width: '200px',
                                height: '300px',
                                objectFit: 'cover'
                            }}
                        /> 
                    </Grid>
                    <Grid item xs>
                        <CardContent>
                            <Typography variant="h6">{title}</Typography>
                            <Typography variant="body2" color="textSecondary" gutterBottom>{year}</Typography>
                            <Typography variant="body1" gutterBottom>{actors}</Typography>
                        </CardContent>
                    </Grid>
                </Grid>
            </CardActionArea>
          </Card>
        </Grid>
      );
}

export default MovieItem;
