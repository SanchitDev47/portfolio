import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import { Typography, Grid, Avatar } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import styled from 'styled-components';
import myImage from '../../src/img/Sanchit.jpg';


export default function Banner() {
  return (
    <>
      <Grid container spacing={3} sx={{
        display: 'flex',
        // width: '100%',
        height: '490px',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'aqua',
      }}>

        <Grid item lg={0.5} md={0.6} sm={0.5} xs={2} sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          gap: '30px',
          fontSize: '30%'
        }}>
          <a href="https://www.linkedin.com/in/sanchit-barjibhe-600aba1a7/"><LinkedInIcon sx={{ fontSize: '24px', cursor: 'pointer', color: 'black' }} /></a>
          <a href="https://www.instagram.com/astubborne/"><InstagramIcon sx={{ fontSize: '24px', cursor: 'pointer', color: 'black' }} /></a>
          <a href="https://github.com/SanchitDev47"><GitHubIcon sx={{ fontSize: '24px', cursor: 'pointer', color: 'black' }} /></a>
        </Grid>

        <Grid item lg={7.2} md={7} sm={11} xs={3} sx={{
          display: 'flex',
          flexDirection: 'column',
          fontSize: '64px',
          flexWrap: 'nowrap'
        }}>
          <Typography sx={{
            paddingBottom: '5px',
            color: 'black', fontSize: '90%',
            fontWeight: 600
          }}>Hi, <Typography component='span' sx={{ fontSize: '80%', fontWeight: 600, color: '#20C5FA' }}>I'm Sanchit</Typography></Typography>
          <Typography sx={{ paddingBottom: '10px', fontWeight: 600, fontSize: '35%' }}>FrontEnd | React Developer</Typography>

          <Typography variant='caption' sx={{ paddingBottom: '30px', width: { lg: '50%', md: '40%', sm: '35%', xs: '35%' }, color: 'black', fontSize: '28%', flexWrap: 'wrap' }}>Highly motiveated desgin and developement producing a quality work</Typography>
          <Grid item xs={12}>
            <ContactBtn>Contact Me<SendIcon sx={{ fontSize: '20px', display: 'flex', justifyContent: 'flex-end' }} /></ContactBtn>
          </Grid>
        </Grid>

        {/* Banner Avatar */}
        <Grid item lg={2.2} md={2} sm={1.5} xs={1} sx={{
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'nowrap'
        }}>
          <Avatar sx={{ backgroundColor: 'red', height: { lg: '220px', md: '170px', sm: '180px', xs: '180px' }, width: { lg: '220px', md: '170px', sm: '180px', xs: '180px' } }} alt='sanchit' src={myImage} />
        </Grid>
      </Grid>
    </>
  )
}


// borderRadius: '66% 34% 26% 74% / 34% 33% 67% 66% '
const ContactBtn = styled.button`
  display: flex;
  background: #20C5FA;
  color: white;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
    align-items: center;
    height: 53px;
    padding: 0;
    justify-content: space-evenly;
    width: 156px;
    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
    &:hover{
    }
`;