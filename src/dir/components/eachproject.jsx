import React from 'react';
import { Typography } from '@mui/material';
import { Button,Box} from '@mui/material';

export default function Eachproject( {proj:{image,name, info, link, stack}}) {
  return (
    <Box className='projbox'>
      <img className='projimg' src={image} alt={"Marvel"}/>
      <span class="projtxt">
      <Typography className="prochild"sx={{ fontSize:"28px", fontColor: '#8D867A', fontFamily: 'Inconsolata-Variable'}} variant='h3'>{name}</Typography>
      <Typography  className="prochild" sx={{ fontSize:"19px", fontColor: '#8D867A', fontFamily: 'Inconsolata-Variable'}}variant='p'>{info}</Typography>
      <a href={link}><button className='hirebtn2'>View Code</button></a>
      </span>
    </Box>
  )
}
