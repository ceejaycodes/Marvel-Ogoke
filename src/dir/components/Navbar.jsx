import * as React from 'react';
import { useState } from 'react';
import { ExternalLink } from 'react-external-link';

import {
  AppBar,
  Box,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";

import {
Menu,
  Instagram,
  Twitter,
  GitHub,
  LinkedIn,
} from "@mui/icons-material/";


const Navbar = () => {
    const StyledToolbar = styled(Toolbar)({
      display: "flex",
      justifyContent: "space-between",
    });
    const SocialBox = styled(Box)({
      display: "flex",
      gap: 10,
      justifyContent:"right"
    });
    const MenuBox = styled(Box)({
      display: "flex",
      gap: 30,
    });
    const MenuItems = [
      { Name: "About Me", Link: "about" },
      { Name: "Skills", Link: "skills" },
      { Name: "Projects", Link: "projects" },
      { Name: "Connect", Link: "connect" },
    ];
    return (
      <AppBar sx={{display:"flex", background: "inherit", position:"fixed"}} >
        <StyledToolbar>
            <Typography sx={{
            fontSize: "1.8rem",
            fontFamily: ["Inconsolata-Bold", "Inconsolata-Variable"].join(","),
            color:"#8D867A" 
            }}
            onClick={() => window.location.replace(`/#`)}>Marvel Ogoke</Typography>

      <MenuBox sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
        {MenuItems.map((item) => (
          <Typography
            classes={"classes.menuit"}
            sx={{
            fontFamily: ["Inconsolata-Bold", "Inconsolata-Variable"].join(","),
            color:"#8D867A",
            cursor: "pointer",
            fontSize: "14px",
            }}
            className='menuit'
            onClick={() => window.location.replace(`/#${item.Link}`)}
          >
            {item.Name}
          </Typography>
        ))}
      </MenuBox>


          <SocialBox className="socbox">
           <ExternalLink href='https://github.com/ceejaycodes'> <GitHub className="iconns"/> </ExternalLink>
           <ExternalLink href='https://linkedin.com/in/marvel-ogoke'> <LinkedIn className="iconns"/> </ExternalLink>
           <ExternalLink href='https://instagram.com/_topboy_cc'> <Instagram className="iconns"/> </ExternalLink>
          </SocialBox>
  
        </StyledToolbar>
      </AppBar>
    );
  };
  
  export default Navbar;


  
   

