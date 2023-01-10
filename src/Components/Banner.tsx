import { Typography, Avatar, Box, Grid, Button } from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
export default function Banner() {
  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', width: '100%', backgroundColor: 'rgb(213,237,251)', background: 'linear-gradient(80deg, rgba(213,237,251,1) 13%, rgba(255,255,255,1) 48%, rgba(213,237,251,1) 81%)', height: '400px' }}>
        <Grid sx={{ display: 'flex', flexDirection: 'row' }}>
          <Grid container spacing={3}>
            <Grid sx={{ width: '60px', fontSize: '4px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '30px' }}>
              <LinkedInIcon sx={{ fontSize: '19px' }} />
              <InstagramIcon sx={{ fontSize: '19px' }} />
              <GitHubIcon sx={{ fontSize: '19px' }} />
            </Grid>
            <Grid sx={{ width: '420px', height: '400px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '15px', buttom: '30px' }}>
              <Typography sx={{ color: 'black', fontSize: '64px', fontWeight: 600 }}>Hi, <Typography component='span' sx={{ fontSize: '64px', fontWeight: 600, color: '#20C5FA' }}>I'm Sanchit</Typography></Typography>
              <Typography sx={{ fontWeight: 600, fontSize: '24px' }}>FrontEnd | React Developer</Typography>
              <Typography sx={{ color: 'black', fontSize: '20px', flexWrap: 'wrap' }}>Highly motiveated desgin and developement producing a quality work</Typography>
              <Grid sx={{gap:'30px'}}>
                <Button variant="contained">Contact Me</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid>
          <Avatar sx={{ height: '200px', width: '200px' }} alt='sanchit' src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80' />
        </Grid>
      </Box>
    </>
  )
}