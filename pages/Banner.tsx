import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import { Typography, Grid, Avatar } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import styled from 'styled-components';
// import myImage from '';
import Image from 'next/image'



export default function Banner() {
  return (
    <>
      <Grid container spacing={3} sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#F2FCFF',
        height: '490px',
        m: 0
      }}>

        <Grid item lg={0.5} md={0.6} sm={1} xs={2} sx={{
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

        <Grid item lg={7.2} md={7} sm={7} xs={3} sx={{
          display: 'flex',
          flexDirection: 'column',
          fontSize: '64px',
          flexWrap: 'nowrap',

        }}>
          <Typography sx={{
            paddingBottom: '5px',
            color: 'black',
            fontSize: { lg: '100%', md: '80%', sm: '70%', xs: '60%' },
            fontWeight: 600
          }}>Hi, <Typography component='span' sx={{
            fontWeight: 600,
            fontSize: { lg: '100%', md: '80%', sm: '70%', xs: '60%' },
            color: '#20C5FA'
          }}>I'm Sanchit</Typography></Typography>
          <Typography sx={{
            paddingBottom: '10px',
            fontWeight: 600,
            fontSize: { lg: '40%', md: '30%', xs: '25%' }
          }}>
            FrontEnd | React Developer</Typography>

          <Typography variant='caption' sx={{
            paddingBottom: '30px',
            width: { lg: '50%', xs: '52%', },
            fontSize: { lg: '30%', xs: '25%' },
            color: 'black',
            flexWrap: 'wrap'
          }}>
            Highly motiveated desgin and developement producing a quality work
          </Typography>
          <Grid item xs={12}>
            <ContactBtn>Contact Me<SendIcon sx={{
              fontSize: '20px',
              display: 'flex',
              justifyContent: 'flex-end'
            }} /></ContactBtn>
          </Grid>
        </Grid>

        {/* Banner Avatar */}
        <Grid item lg={2.2} md={2} sm={3.5} xs={1} sx={{
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'nowrap'

        }}>
          <Avatar sx={{
            height: { lg: '220px', md: '170px', xs: '160px' },
            width: { lg: '220px', md: '170px', xs: '160px' }
          }}
            alt="sanchit" src="/public/Sanchit.jpg"
          />
        </Grid>
      </Grid>
    </>
  )
}

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