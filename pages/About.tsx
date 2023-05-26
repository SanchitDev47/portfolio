import React from 'react'
import styled from 'styled-components';
import { Box, Grid, Typography } from '@mui/material'
import DownloadIcon from '@mui/icons-material/Download';
import Image from 'next/image';
// import sanchiimg from '@/assets/sanchit.jpg'

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
            width: { lg: '371px', md: '344px', xs: '330px' },
            height: { lg: '193px', md: '219px', xs: '193px' },
          }}
          alt="The house from the offer."
          src="/public/Assets/sanchit.jpg"
        />
        <Grid lg={3} md={5} sm={5} xs={5} sx={{ display: 'flex', height: '90%', width: ' 30%', flexDirection: 'column', mt: { lg: 0, md: 0, sm: 0, xs: '30px' },alignItems: {lg:'flex-start',md:'flex-start',sm:'flex-start',xs:'center'}, textAlign: { lg: 'left', md: 'left', sm: 'left', xs: 'center' }, justifyContent: 'flex-end' }}>
          <Grid item sx={{ display: 'flex', width: '100%', height: '90%' }}>
            <Typography variant='body1' sx={{ fontSize: '18px' }}>
              Web Developer with extensive knowledge the
              year of experiance,working in web technology
              and UI /UX delivering quality work</Typography>
          </Grid>

          <Grid item sx={{ mt: 3.4, ml: 0, mr: 0, mb:5, display: 'flex', justifyContent: 'space-between', gap: '30px', alignItems: 'flex-start', width: '92%', }}>
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