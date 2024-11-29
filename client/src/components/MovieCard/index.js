import React from 'react';
import Card from '@mui/material/Card';
import PropTypes from 'prop-types'
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { CardMenu } from '../CardMenu';
import MenuItem from '@mui/material/MenuItem';
const CardInfo = styled(CardContent)(({theme}) => ({
    '&:last-child': {
        paddingBottom: theme.spacing(2),
      }
  }));
const MovieCard = ({movie,onCardSelect}) => {
    return (
        <Card sx={{ maxWidth: 250, position: "relative" }}>
            <CardMenu>
                <MenuItem onClick={onCardSelect}>
                    Select
                </MenuItem>
            </CardMenu>
            <CardMedia
                component="img"
                height="250"
                
        image={movie.image}
        alt={movie.title}
      />
      <CardInfo>
                <Typography variant="h6" gutterBottom component="div">
                    {movie.title}
                </Typography>
                <Typography mb={0} variant="subtitle1" gutterBottom component="div">
                    {movie.releaseDate}
                </Typography>
            </CardInfo>
        </Card>
    )
}
MovieCard.propTypes={
    movie:PropTypes.shape({
        image:PropTypes.string.isRequired,
        title:PropTypes.string.isRequired,
        releaseDate:PropTypes.string
    }).isRequired,
    onCardSelect:PropTypes.func
}
export default MovieCard;