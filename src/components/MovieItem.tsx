import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardActionArea, CardContent, CardMedia, Typography, Grid } from '@mui/material';

interface MovieItemProps {
    id: string
    title: string
    year: string
    poster: string
}

const MovieItem: React.FC<MovieItemProps> = ({id, title, year, poster}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/movie/${id}`)
    }

    return (
        <Grid item xs={12} sm={6} md={12} style={{marginBottom: 20}}> 
          <Card onClick={handleClick}>
            <CardActionArea> 
                <Grid container spacing={2}>
                    <Grid item xs={12} md={3.5}>
                        <CardMedia
                            component="img"
                            height="300"
                            image={poster}
                            alt={title}
                        /> 
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <CardContent>
                            <Typography variant="h6">{title}</Typography>
                            <Typography variant="body2" color="textSecondary">{year}</Typography>
                        </CardContent>
                    </Grid>
                </Grid>
            </CardActionArea>
          </Card>
        </Grid>
      );
}

export default MovieItem