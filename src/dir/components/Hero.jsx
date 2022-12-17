import React from 'react';
import { Box, Button} from '@mui/material';
import {Terminal, Description } from '@mui/icons-material';
import { TypeAnimation } from 'react-type-animation';
import heroimg from "../../assets/images/Rectangle22.png";

export default function Hero() {
  return ( 
    <>
  
    <Box className='hertxtbx'>
      <span className='herotyp'>
        <TypeAnimation className="hertxt" 
        sequence={[ "Hello, I'm Marvel, a Fullstack Software Developer." ]}
        cursor = {false}
        />
      </span>
        <Box className="herimgbx"> 
      <img className="hero-img" src={heroimg} alt={"Marvel"}/>
    </Box>
    </Box>
    <Box component="div" className="herobtclas">
       <span className='herrr'><a target="_blank" href='mailto:dreelceejay79@yahoo.com'><button  className="hirebtn1">
            Hire Me</button></a>
        </span>
        <span className='herrr'><a target="_blank" href="https://www.dropbox.com/s/go9amgj6qe5cd1l/Resume-Marvel-Ogoke%201.pdf?dl=0"><button className="hirebtn2">
            Résumé</button> </a>
        </span>
    </Box>
    </>
  )
}

