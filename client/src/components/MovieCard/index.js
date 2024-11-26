import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { CardMenu } from './components';
const CardInfo = styled(CardContent)(({theme}) => ({
    '&:last-child': {
        paddingBottom: theme.spacing(2),
      }
  }));
const MovieCard = () => {
    const onAddClick = (movie) => alert('movie is added')
    return (
        <Card sx={{ maxWidth: 250, position: "relative" }}>
            <CardMenu onAddClick={onAddClick}/>
            <CardMedia
                component="img"
                height="250"
                
        image='https://media.themoviedb.org/t/p/w440_and_h660_face/nRuKw7aMtmACgZFVa9kZUO2wPgn.jpg'
        alt='Paella dish'
      />
      <CardInfo>
                <Typography variant="h6" gutterBottom component="div">
                    Smile 2
                </Typography>
                <Typography mb={0} variant="subtitle1" gutterBottom component="div">
                    Oct 18, 2024
                </Typography>
            </CardInfo>
        </Card>
    )
}
export default MovieCard;