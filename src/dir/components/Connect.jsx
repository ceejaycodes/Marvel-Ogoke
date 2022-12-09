import React from 'react';
import { Box } from '@mui/material';
import { TypeAnimation } from 'react-type-animation';
import Linkedin from '../connect/99032-linkedin.json';
import Whatsapp from '../connect/whatsapp.json';
import Instagram from '../connect/99618-instagram.json';
import Lottie from 'lottie-react';
import { ExternalLink } from 'react-external-link';

export default function Connect() {
  return (
      <>
            <Box id="connect"  className="abtbx">
          <TypeAnimation  wrapper='h2' sequence={["Connect"]} className='headd' style={{ fontColor: '#8D867A', fontFamily: 'Inconsolata-Variable'}}
          />
      </Box>
      <Box  className='conanim'>
      <ExternalLink href='https://linkedin.com/in/marvel-ogoke'><span><Lottie className='conicon' animationData={Linkedin}/> </span></ExternalLink>
      <ExternalLink href='https://wa.me/+2348129751279'><Lottie className='conicon' animationData={Whatsapp}/></ExternalLink>
      <ExternalLink href='https://instagram.com/_topboy_cc'><Lottie className='conicon' animationData={Instagram}/></ExternalLink>
      </Box>
      </>
  )
}
