import { Typography } from '@mui/material';
import React, { Fragment } from 'react';
import fotimg from "../../assets/images/Rectangle11.png"

export default function Footer() {
  return (
    <div className='footer'>
      <Typography sx={{color:'grey'}} >Made By Marvel © 2022</Typography>
      <img className="fot-img" src={fotimg} alt={"Marvel"}/>
    </div>
  )
}
