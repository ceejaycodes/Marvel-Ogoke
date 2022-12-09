import React from 'react';
import { Box, Button} from '@mui/material';
import {Terminal, Description } from '@mui/icons-material';
import { TypeAnimation } from 'react-type-animation';
import heroimg from "../../assets/images/Rectangle22.png";

export default function Hero() {
  return ( 
    <>
  
    <Box className='hertxtbx'>
        <TypeAnimation className="hertxt" 
        sequence={[ "Hello, I'm Marvel, a Fullstack Software Developer with Python And Javascript." ]}
        cursor = {false}
        />
        <Box className="herimgbx">
        
      <img className="hero-img" src={heroimg} alt={"Marvel"}/>
    </Box>
    </Box>
    <Box component="div" className="herobtclas">
       <span className='herrr'><a target="_blank" href='mailto:dreelceejay79@yahoo.com'><button  className="hirebtn1">
            Hire Me</button></a><Terminal className="hircon"/>
        </span>
        <span className='herrr'><a target="_blank" href="https://www.dropbox.com/s/q9j2taoxyxs5rbj/Resume-Marvel-Ogoke-8.pdf?dl=0"><button className="hirebtn2">
            Resume</button> </a><Description className="hircon"/>
        </span>
    </Box>
    </>
  )
}
