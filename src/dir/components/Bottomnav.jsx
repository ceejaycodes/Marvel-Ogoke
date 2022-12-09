import * as React from 'react';
import { useState } from 'react';
import { BottomNavigationAction, BottomNavigation,  } from '@mui/material';
import {  EmojiEmotions, Stream, RoomPreferences, Handshake, Grass } from '@mui/icons-material';



export default function Bottomnav() {

    const [value, setValue] = React.useState(0);
  


  return (
      <>
 <BottomNavigation
  value={value}
  onChange={(event, newValue) => {
    setValue(newValue);
  }}
  sx={{ marginTop: '49.4rem',
  backgroundColor:"#8D867A",
  position: 'fixed',
  left: '0',
  bottom: '0',
  width: '100%',
  display:  { xs: "flex", sm: "flex", md: "none" }}} elevation={3}
>
  <BottomNavigationAction onClick={() => window.location.replace("/#")} label="Home"  icon={<Grass htmlColor='#151515'/> }/>
  <BottomNavigationAction onClick={() => window.location.replace("/#about")} label="About Me"  icon={<EmojiEmotions htmlColor='#151515'/> }/>
  <BottomNavigationAction onClick={() => window.location.replace("/#projects")}label="Projects" icon={<RoomPreferences htmlColor='#151515'  />} />
  <BottomNavigationAction onClick={() => window.location.replace("/#skills")}label="Skills" icon={<Stream htmlColor='#151515'  />} />
  <BottomNavigationAction onClick={() => window.location.replace("/#connect")}label="Connect" icon={<Handshake htmlColor='#151515'  />} />
  </BottomNavigation>
    </>
  )
}
