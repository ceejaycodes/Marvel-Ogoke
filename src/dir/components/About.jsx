import { Box,Typography } from '@mui/material';
import { TypeAnimation } from 'react-type-animation';
import heroimg2 from "../../assets/images/Rectangle44.png";
import React, { Fragment } from 'react';

export default function About() {
  return (
      <Fragment>
      <Box id="about"  className="abtbx">
          <TypeAnimation  wrapper='h2' sequence={["About ME"]} className='headd' style={{ fontColor: '#8D867A', fontFamily: 'Inconsolata-Variable'}}
          />

      </Box>
      <Box className='abtbx'>
      <Typography variant='p' className='abouttxt' sx={{fontFamily: 'Inconsolata-Variable'}}> Technology is humanity’s most potent tool in her quest for survival and all round evolution. I am a software developer who believes he can use his skills to make an enormous impact. 
      Although I appreciate the importance of Javascript and frontend technology, I am heavily interested in exploring the potential of Python and its backend frameworks to build scalable applications and software. 
     I find nature fascinating and also enjoy a wide range of alternative music.
 In my spare time, I like to scribble my thoughts into words - it also makes for good poetry. 
     I like to think that I possess problem solving skills that will benefit any organisation regardless of its scale. I appreciate good work ethic and positive spirited people.
     Looking forward to working on your projects or simply connecting over a cup of coffee.
 </Typography>
 </Box>
 <Box className='abtimgbx'>
 <img className="abt-img" src={heroimg2} alt={"Marvel"}/>
 </Box>
 </Fragment>
  )
}
