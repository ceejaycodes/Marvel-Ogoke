import React, { Fragment } from 'react';
import { Box,Typography } from '@mui/material';
import { TypeAnimation } from 'react-type-animation';
import Skillslogso from '../../assets/images/skillslogso.json';
import Python from '../../assets/images/python.svg';
import Bootstrap from '../../assets/images/bootstrap.svg';
import Css3 from '../../assets/images/css3.svg';
import Django from '../../assets/images/django.svg';
import Flask from '../../assets/images/flask.svg';
import Github from '../../assets/images/github.svg';
import Git from '../../assets/images/git.svg';
import Html5 from '../../assets/images/html5.svg';
import Javascript from '../../assets/images/javascript.svg';
import MaterialUI from '../../assets/images/material-ui.svg';
import Mysql from '../../assets/images/mysql.svg';
import ReactNative from '../../assets/images/react-native.svg';
import Sass from '../../assets/images/sass.svg';
import Selenium from '../../assets/images/selenium.svg';
import Image from "react-bootstrap/Image";
import Lottie from 'lottie-react';
import { ExternalLink } from 'react-external-link';


export default function Skills() {
  return (
      <Fragment >

           <Box id="skills" className="abtbx">
              <TypeAnimation  wrapper='h2' sequence={["Skills"]} className='headd' style={{ fontColor: '#8D867A', fontFamily: 'Inconsolata-Variable'}}
                />
          </Box>

<div className='sklogs'>
<Typography variant='h4' className='abouttxt' sx={{ fontSize: '21px',fontFamily: 'Inconsolata-Variable'}}> 
   Here Are Some Of The Languages and Frameworks I Use:
 </Typography>
  </div>
  <Box className='skbox'>
  <ExternalLink href='https://docs.python.org/3/'><Image className='skimg' src={Python}/></ExternalLink>
  <ExternalLink href='https://docs.djangoproject.com/en/4.1/'><Image className='skimg' src={Django}/></ExternalLink>
  <ExternalLink href='https://flask.palletsprojects.com/en/2.2.x/'><Image className='skimg' src={Flask}/></ExternalLink>
  <ExternalLink href='https://selenium-python.readthedocs.io/'><Image className='skimg' src={Selenium}/></ExternalLink>
  <ExternalLink href='https://devdocs.io/javascript/'><Image className='skimg' src={Javascript}/></ExternalLink>
  <ExternalLink href='https://beta.reactjs.org/'><Image className='skimg' src={ReactNative}/></ExternalLink>
  <ExternalLink href='https://devdocs.io/html/'> <Image className='skimg' src={Html5}/></ExternalLink>
  <ExternalLink href='https://devdocs.io/css/'> <Image className='skimg' src={Css3}/></ExternalLink>
  <ExternalLink href='https://getbootstrap.com/'><Image className='skimg' src={Bootstrap}/></ExternalLink>
  <ExternalLink href='https://mui.com/'> <Image className='skimg' src={MaterialUI}/></ExternalLink>
  <ExternalLink href='https://sass-lang.com/documentation/'> <Image className='skimg' src={Sass}/></ExternalLink>
  <ExternalLink href='https://dev.mysql.com/doc/'><Image className='skimg' src={Mysql}/></ExternalLink>
  <ExternalLink href='https://github.com'><Image className='skimg' src={Github}/></ExternalLink>
  <ExternalLink href='https://git-scm.com/doc'><Image className='skimg' src={Git}/></ExternalLink>
  </Box>
  <div className='sklanbx' >
    <Lottie className='sklanim' style={{height: '400px', width:'400px'}} animationData={Skillslogso}/>
  </div>


    </Fragment>
  )
}
