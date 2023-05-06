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

      <Grid container spacing={3} sx={{ mt: 8, display: 'flex', justifyContent: 'center', flexDirection: 'row', gap: '5%' }}>
        <Box
          component="img"
          sx={{
            borderRadius: '9px',
            border: 'black',
            boxShadow: 12,
            maxHeight: '203px',
            minWidth: '372px'
          }}
          alt="The house from the offer."
          src=""
        />
        <Box sx={{ display: 'flex', height: '90%', width: ' 25%', flexDirection: 'column', justifyContent: 'flex-end' }}>
          <Grid item lg={12} md={10} sm={8} xs={6} sx={{ display: 'flex', width: '100%', height: '90%' }}>
            <Typography variant='body1' sx={{ fontSize: '18px' }}>
              Web Developer with extensive knowledge the
              year of experiance,working in web technology
              and UI /UX delivering quality work</Typography>
          </Grid>

          <Grid item sx={{ m: 3.4, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '92%', ml: '6px' }}>
            <Grid sx={{ display: 'flex', width: '20%', justifyContent: 'center', flexWrap: 'wrap', textAlign: 'center' }}>
              <Box component='span' sx={{ color: 'black', fontWeight: 'bold' }}>02+</Box>
              Years
              Experience
            </Grid>
            <Grid sx={{ display: 'flex', width: '20%', justifyContent: 'center', flexWrap: 'wrap', textAlign: 'center' }}>
              <Box component='span' sx={{ color: 'black', fontWeight: 'bold' }}>02+</Box>
              completed
              Project
            </Grid>
            <Grid sx={{ display: 'flex', width: '20%', justifyContent: 'center', flexWrap: 'wrap', textAlign: 'center' }}>
              <Box component='span' sx={{ color: 'black', fontWeight: 'bold' }}>02+</Box>
              company
              worked
            </Grid>
          </Grid>
          <Box>
            <CvBtn>Download CV  <DownloadIcon sx={{ fontSize: '19px' }} /></CvBtn>
          </Box>
        </Box>
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