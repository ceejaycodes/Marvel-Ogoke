import React from 'react';
import { Box,Typography } from '@mui/material';
import { TypeAnimation } from 'react-type-animation';
import Social from '../../assets/images/social.jpeg';
import Mail from '../../assets/images/mail.jpeg';
import Commerce from '../../assets/images/commerce.jpeg';
import Movies from '../../assets/images/movies.jpeg';
import Eachproject from './eachproject';




export default function Projects() {

const project = [
    {
        image: Social,
        name : "Social Media App",
        info : "A Social Media App Built With Django And Javascript",
        link: "https://github.com/ceejaycodes/Social-Media"
    },
    {
        image: Mail,
        name : "Mail App",
        info : "A Mail App Built With Django And Javascript",
        link: "https://github.com/ceejaycodes/Mail"
    },
    {
        image: Commerce,
        name : "E-commerce",
        info : "An E-commerce website built with Django and Javascript",
        link: "https://github.com/ceejaycodes/Commerce"
    },
    {
        image: Movies,
        name : "Movie Search",
        info : "A movie search app Built With React",
        link: "https://github.com/ceejaycodes/movie-search"
    }

];




  return (
      <>
        <Box id="projects" className="abtbx">
            <TypeAnimation  wrapper='h2' sequence={["Projects"]} className='headd' style={{ fontColor: '#8D867A', fontFamily: 'Inconsolata-Variable'}}
            />
        </Box>

        <Box className='project'>
        {project.map((card) => <Eachproject key={card.name} proj={card}/>)}
        </Box>
    
</>
  )
}




