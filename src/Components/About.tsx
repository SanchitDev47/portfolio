import { Box, CardMedia, Grid, Typography } from '@mui/material'
import Button from '@mui/material/Button'
import React from 'react'

export default function About() {
  return (
    <>
      <Typography variant='h6' sx={{ display: 'flex', justifyContent: 'center', mt: 5, fontSize: '40px', textDecorationLine: 'underline' }}>About Me</Typography>
      <Box sx={{ display: 'flex', height: '300px', alignItems: 'space-evenly', }}>
        <Grid container spacing={3} sx={{ mt: 8, ml: 15, width: '80%', display: 'flex', justifyContent: 'space-evenly', flexDirection: 'row', }}>
          <Box
            component="img"
            sx={{
              borderRadius: '9px',
              border: 'black',
              boxShadow: 12,
              height: 500,
              width: 400,
              maxHeight: 200,
              maxWidth: 350,
            }}
            alt="The house from the offer."
            src="https://i0.wp.com/marvel.com.sa/wp-content/uploads/2022/07/What-is-Your-Website-Design-Process-Blog-Post-Feature-Image-36119-01.png?resize=2048%2C1074&ssl=1"
          />

          <Box sx={{ display: 'flex', height: '90%', width: '35%', flexDirection: 'column', justifyContent: 'space-evenly' }}>
            <Grid item sx={{ display: 'flex', width: '100%', height: '90%' }}>
              Web Developer with extensive knowledge the
              year of experiance,working in web technology
              and UI /UX delivering quality work
            </Grid>

            <Grid item sx={{ m: 3.4, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <Grid sx={{ display: 'flex', width: '9%', justifyContent: 'center', flexWrap: 'wrap', textAlign: 'center' }}>
                <Box component='span' sx={{ color: 'black', fontWeight: 'bold' }}>02+</Box>
                Years
                Experience
              </Grid>
              <Grid sx={{ display: 'flex', width: '9%', justifyContent: 'center', flexWrap: 'wrap', textAlign: 'center' }}>
                <Box component='span' sx={{ color: 'black', fontWeight: 'bold' }}>02+</Box>
                completed
                Project
              </Grid>
              <Grid sx={{ display: 'flex', width: '9%', justifyContent: 'center', flexWrap: 'wrap', textAlign: 'center' }}>
                <Box component='span' sx={{ color: 'black', fontWeight: 'bold' }}>02+</Box>
                company
                worked
              </Grid>
            </Grid>
            <Box>
              <Button>Download CV</Button>
            </Box>
          </Box>
        </Grid>
      </Box>
    </>
  )
}
