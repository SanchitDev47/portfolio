import { Typography, Box, Grid } from '@mui/material'
import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function footer() {
  return (
    <Box sx={{
      background: '#F2FCFF',
      height: '300px', width: '100%',
    }}>
      <Grid container spacing={3} sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column' }}>
        <Grid item sx={{ display: 'flex', width: '90%', flexDirection: 'row', justifyContent: 'space-between' }}>
          <Box sx={{ ml: '6%' }}>
            <Typography
              variant="h1"
              component="div"
              sx={{ display: 'flex', flexGrow: 1, mx: { lg: 22, md: 15, sm: 1 }, color: '#20C5FA', fontWeight: 600, fontSize: '22px', }}
            >
              Sanchit
            </Typography>
            <Typography
              variant="h1"
              component="div"
              sx={{ display: 'flex', flexGrow: 1, mx: { lg: 22, md: 15, sm: 1 }, color: 'black', fontSize: '16px' }}
            >
              Front-End Developer
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-evenly', gap: '30px' }}>
            <a href="https://www.linkedin.com/in/sanchit-barjibhe-600aba1a7/"><LinkedInIcon sx={{ fontSize: '24px', cursor: 'pointer', color: 'black' }} /></a>
            <a href="https://www.instagram.com/astubborne/"><InstagramIcon sx={{ fontSize: '24px', cursor: 'pointer', color: 'black' }} /></a>
            <a href="https://twitter.com/astubborne"><TwitterIcon sx={{ fontSize: '24px', cursor: 'pointer', color: 'black' }} /></a>
          </Box>
        </Grid>
        <Grid item sx={{ display: 'flex', justifyContent: 'center', alignContent: 'space-evenly' }}>
          <Box sx={{ display: 'flex', height: '80%', width: '60%', gap: '30px', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography
              variant="h1"
              component="div"
              sx={{ flexGrow: 1, color: 'black', fontSize: '17px' }}
            >
              Contact
            </Typography>
            <Typography
              variant="h1"
              component="div"
              sx={{ flexGrow: 1, color: 'black', fontSize: '17px' }}
            >
              Portfolio
            </Typography>
            <Typography
              variant="h1"
              component="div"
              sx={{ flexGrow: 1, color: 'black', fontSize: '17px' }}
            >
              Services
            </Typography>
          </Box>
        </Grid>
      </Grid >
    </Box >

  )
}
