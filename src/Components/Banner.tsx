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
      backgroundColor: 'rgb(213,237,251)',
      background: 'linear-gradient(80deg, rgba(213,237,251,1) 13%, rgba(255,255,255,1) 48%, rgba(213,237,251,1) 81%)',
    }}>
      <Grid container spacing={3} sx={{ diplay: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Grid lg={0.5} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: '30px' }}>
          <LinkedInIcon sx={{ fontSize: '24px', cursor: 'pointer' }} />
          <InstagramIcon sx={{ fontSize: '24px', cursor: 'pointer' }} />
          <GitHubIcon sx={{ fontSize: '24px', cursor: 'pointer' }} />
        </Grid>
        <Grid lg={7.5} sx={{ display: 'flex', flexWrap: 'wrap', flexDirection: { lg: 'column', md: 'row' } }}>
          <Typography sx={{ paddingBottom: '5px', color: 'black', fontSize: '64px', fontWeight: 600 }}>Hi, <Typography component='span' sx={{ fontSize: '64px', fontWeight: 600, color: '#20C5FA' }}>I'm Sanchit</Typography></Typography>
          <Typography sx={{ paddingBottom: '10px', fontWeight: 600, fontSize: '24px' }}>FrontEnd | React Developer</Typography>
          <Typography variant='caption' sx={{ paddingBottom: '30px', width: '40%', color: 'black', fontSize: '20px', but: '30px', flexWrap: 'wrap' }}>Highly motiveated desgin and developement producing a quality work</Typography>
          <Grid>
            <ContactBtn>Contact Me</ContactBtn>
          </Grid>
        </Grid>
        <Grid lg={1.5}>
          <Avatar sx={{ backgroundColor: 'red', height: '250px', width: '250px', borderRadius: '66% 34% 26% 74% / 34% 33% 67% 66% ' }} alt='sanchit' src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80' />
        </Grid>
      </Grid>
    </Box>
  )
}

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