import {React, useEffect} from 'react';
import { Typography } from '@mui/material';
import { Box} from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Eachproject( {proj:{image,name, info, link, stack}}) {
  useEffect(() => {
    AOS.init({duration: 2000});
  }, [])
  
  return (
    <Box className='projbox' data-aos="zoom-in">
      <img className='projimg' src={image} alt={"Marvel"}/>
      <span class="projtxt">
      <Typography className="prochild"sx={{ fontSize:"28px", fontColor: '#8D867A', fontFamily: 'Inconsolata-Variable'}} variant='h3'>{name}</Typography>
      <Typography  className="prochild" sx={{ fontSize:"19px", fontColor: '#8D867A', fontFamily: 'Inconsolata-Variable'}}variant='p'>{info}</Typography>
      <a href={link}><button className='hirebtn2'>View Code</button></a>
      </span>
    </Box>
  )
}
