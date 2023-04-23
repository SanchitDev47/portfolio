import { Grid, TextareaAutosize, TextField, Typography } from '@mui/material'
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import { Box } from '@mui/system'
import React from 'react'
import styled from 'styled-components';

export default function Contact() {
  return (
    <Box sx={{ m: '100px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant='h6' sx={{ mt: 5, fontSize: '35px' }}>CONTACT</Typography>
        <Box sx={{ width: '6.8rem', height: '5.8px', borderRadius: '11px', background: '#20C5FA' }} />
      </Box>
      <Box sx={{ display: 'flex', height: '500px', flexDirection: 'column' }}>
        <Grid container spacing={3}
          sx={{
            mt: 8,
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            height: '35%',
            gap: '30px'
          }}>

          <Grid item lg={4} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
            <Typography sx={{ fontSize: 20, display: 'flex', alignItems: 'center', gap: '25px' }}><PhoneIcon sx={{ height: 24, width: 24, color: '#20C5FA' }} />+91 9850589978</Typography>
            <Typography sx={{ fontSize: 20, display: 'flex', alignItems: 'center', gap: '25px' }}><LocationOnIcon sx={{ height: 24, width: 24, color: '#20C5FA' }} />Vadodra/Broda, Gujrat</Typography>
            <Typography sx={{ fontSize: 20, display: 'flex', alignItems: 'center', gap: '25px' }}><MailIcon sx={{ height: 24, width: 24, color: '#20C5FA' }} />sanchitbarjibhe98@gmail.com</Typography>
          </Grid>

          <Grid item lg={5} sx={{ display: 'flex', flexDirection: 'column', height: '20%', justifyContent: 'flex-start', gap: '30px', alignItems: 'flex-end' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: '30px' }}>
              <TextField sx={{ width: 220 }} id="outlined-basic" label="Name" variant="outlined" />
              <TextField sx={{ width: 220 }} id="outlined-basic" label="Email" variant="outlined" />
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              <TextField sx={{ width: 468 }} id="outlined-basic" label="Subject" variant="outlined" />
              <TextareaAutosize
                aria-label="empty textarea"
                placeholder="Message"
                minRows={3}
                style={{ maxWidth: 466, minWidth: 466, maxHeight: '90px', minHeight: '90px' }}
              />
            </Box>
            <Box>
              <SubmitBtn>Submit</SubmitBtn>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

const SubmitBtn = styled.button`
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
