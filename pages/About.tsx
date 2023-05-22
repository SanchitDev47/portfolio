import React from 'react'
import styled from 'styled-components';
import { Box, Grid, Typography } from '@mui/material'
import DownloadIcon from '@mui/icons-material/Download';

export default function About() {
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant='h6' sx={{ mt: 5, fontSize: '35px' }}>ABOUT ME</Typography>
        <Box sx={{ width: '8.8rem', height: '5.8px', borderRadius: '11px', background: '#20C5FA' }} />
      </Box>



      <Grid container sx={{ mt: 8, display: 'flex', justifyContent: 'center', flexDirection: 'row', gap: '5%' }}>
        <Box
          component="img"
          sx={{
            borderRadius: '9px',
            border: 'black',
            boxShadow: 12,
            maxHeight: '203px',
            minWidth: '372px'
          }}
          alt="The house from thdfdsdfe offer."
          src="/Assets/001.webp"
        // src="https://i0.wp.com/marvel.com.sa/wp-content/uploads/2022/07/What-is-Your-Website-Design-Process-Blog-Post-Feature-Image-36119-01.png?resize=2048%2C1074&ssl=1"
        />

        <Grid>
          <Grid item sx={{ width: '25%', flexDirection: 'column', justifyContent: 'flex-end' }}>
            <Typography variant='body1' sx={{ fontSize: '18px' }}>
              Web Developer with extensive knowledge the
              year of experiance,working in web technology
              and UI /UX delivering quality work</Typography>
          </Grid>

          <Box sx={{
            display: 'flex',
            width: '5%',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            flexWrap: 'wrap'
          }}>
            <Box>
              +02
              Years
              Experience
            </Box>
            <Box>
              +02
              Years
              Experience
            </Box>
            <Box>
              +02
              Years
              Experience
            </Box>
          </Box>
          <Box>
            <CvBtn>Download CV  <DownloadIcon sx={{ fontSize: '19px' }} /></CvBtn>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}


const CvBtn = styled.button`
      display: flex;
      background: #20C5FA;
      color: white;
      border-radius: 8px;
      border: none;
      display: flex;
      cursor: pointer;
      font-size: 14.1px;
      align-items: center;
      height: 42px;
      width: 149px;
      padding: 0;
      justify-content: space-evenly;
      box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
      &:hover{
      }
      `;