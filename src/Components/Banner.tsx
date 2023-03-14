import { Typography, Avatar, Box, Grid, Button } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import styled from 'styled-components';

export default function Banner() {
  return (
    <Box sx={{
      display: 'flex',
      width: '100%',
      height: '450px',
      margin: 0,
      // flexDirection: 'column-reverse',
      backgroundColor: '#F2FCFF',
      background: 'linear-gradient(80deg, rgba(213,237,251,1) 13%, rgba(255,255,255,1) 48%, rgba(213,237,251,1) 81%)',
    }}>
      <Grid container spacing={3} sx={{ diplay: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {/* Main Grid */}
        <Grid item lg={0.5} md={0.6} sm={1} xs={1} sx={{ display: 'flex', flexDirection: { lg: 'column', md: 'column', sm: 'column' }, justifyContent: 'flex-end', gap: '30px' }}>
          <LinkedInIcon sx={{ fontSize: '24px', cursor: 'pointer' }} />
          <InstagramIcon sx={{ fontSize: '24px', cursor: 'pointer' }} />
          <GitHubIcon sx={{ fontSize: '24px', cursor: 'pointer' }} />
        </Grid>
        <Grid item lg={7.2} md={7} sm={6} xs={5} sx={{ display: 'flex', flexWrap: 'nowrap', flexDirection: { lg: 'column', md: 'column', sm: 'column' } }}>
          <Typography sx={{ paddingBottom: '5px', color: 'black', fontSize: { lg: '64px', md: '35px', sm: '35px' }, fontWeight: 600 }}>Hi, <Typography component='span' sx={{ fontSize: { lg: '64px', md: '35px', sm: '35px' }, fontWeight: 600, color: '#20C5FA' }}>I'm Sanchit</Typography></Typography>
          <Typography sx={{ paddingBottom: '10px', fontWeight: 600, fontSize: { lg: '24px', md: '15px', sm: '15px' } }}>FrontEnd | React Developer</Typography>
          <Typography variant='caption' sx={{ paddingBottom: '30px', width: { lg: '50%', md: '50%', sm: '80%' }, color: 'black', fontSize: { lg: '20px', md: '17px', sm: '17px' }, flexWrap: 'wrap' }}>Highly motiveated desgin and developement producing a quality work</Typography>
          <Grid item lg={12} md={12}>
            <ContactBtn>Contact Me</ContactBtn>
          </Grid>
        </Grid>
        {/* Main Grid */}
        <Grid item lg={2.2} md={2} sm={2} xs={2}>
          <Avatar sx={{ backgroundColor: 'red', height: { lg: '220px', md: '170px', sm: '150px', xs: '150px' }, width: { lg: '220px', md: '170px', sm: '150px', xs: '150px' } }} alt='sanchit' src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80' />
        </Grid>
      </Grid>
    </Box>
  )
}


// borderRadius: '66% 34% 26% 74% / 34% 33% 67% 66% '
const ContactBtn = styled.button`
  border-radius: 12px;
  border: none;
  background: #20C5FA;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  padding: 15px 35px;
  color: white;
`;