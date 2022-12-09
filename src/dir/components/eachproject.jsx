import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@mui/material';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function Eachproject( {proj:{image,name, info, link}}) {
  return (
     <Card sx={{ maxWidth: 345 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className='abouttxt'>
         {name}
        </Typography>
        <Typography variant="body2" className='abouttxt' color='black'>
         {info}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button href={link} className="hirebtn2">
        View Code
      </Button>
    </CardActions>
  </Card>
  )
}
