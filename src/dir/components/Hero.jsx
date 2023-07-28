import {React, useEffect} from 'react';
import { Box} from '@mui/material';
import { TypeAnimation } from 'react-type-animation';
import AOS from 'aos';
import 'aos/dist/aos.css';
import heroimg from "../../assets/images/Rectangle22.png";

export default function Hero() {
  useEffect(() => {
    AOS.init({duration: 2000});
  }, [])
  
  return ( 
    <>
  
    <Box className='hertxtbx' id="/">
      <span className='herotyp'>
        <TypeAnimation className="hertxt" 
        sequence={[ "Hello, I'm Marvel, a Fullstack Software Developer." ]}
        cursor = {false}
        />
      </span>
        <Box className="herimgbx" data-aos="fade-left"> 
      <img className="hero-img" src={heroimg} alt={"Marvel"}/>
    </Box>
    </Box>
    <Box component="div" className="herobtclas" data-aos="fade-right">
       <span className='herrr'><a target="_blank" href='mailto:dreelceejay79@yahoo.com'><button  className="hirebtn1">
            Hire Me</button></a>
        </span>
        <span className='herrr'><a target="_blank" href="https://www.dropbox.com/scl/fi/3zytxojhp0kaafer1ikdg/Resume-Marvel-Ogoke-july-2023.pdf?rlkey=44yg73t78o5kgnhp1artj8gz3&dl=0"><button className="hirebtn2">
            Résumé</button> </a>
        </span>
    </Box>
    </>
  )
}

