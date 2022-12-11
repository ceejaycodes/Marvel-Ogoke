import React, { Fragment } from 'react';
import { Box,Typography } from '@mui/material';
import { TypeAnimation } from 'react-type-animation';
import Skillslogso from '../skillslogso.json';
import Lottie from 'lottie-react';


export default function Skills() {
  return (
      <Fragment >

           <Box id="skills" className="abtbx">
              <TypeAnimation  wrapper='h2' sequence={["Skills"]} className='headd' style={{ fontColor: '#8D867A', fontFamily: 'Inconsolata-Variable'}}
                />
          </Box>

<div className='sklogs'>
<Typography variant='h4' className='abouttxt' sx={{ fontSize: '21px',fontFamily: 'Inconsolata-Variable'}}> 
   Here Are Some Of Languages and Frameworks I Use:
 </Typography>
 <Typography variant='p' className='abouttxt' sx={{fontFamily: 'Inconsolata-Variable'}}> 
  Python(Django, Flask),
  Javascript(ReactJs),
  HTML5,
  CSS3(Material UI, Bootstrap Sass),
  SQL(SQLITE, MySQL, Postgres),
  Version Control(Git, Github)
 </Typography>
  </div>
  <div className='sklanbx' >
    <Lottie className='sklanim' style={{height: '400px', width:'400px'}} animationData={Skillslogso}/>
  </div>


    </Fragment>
  )
}
