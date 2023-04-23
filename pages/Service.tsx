import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ModeIcon from '@mui/icons-material/Mode';
import CodeIcon from '@mui/icons-material/Code';
import PaletteIcon from '@mui/icons-material/Palette';
import styled from 'styled-components';

export default function Service() {
  return (
    <Box sx={{ m: '100px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant='h6' sx={{ mt: 5, fontSize: '35px' }}>SERVICE</Typography>
        <Box sx={{ width: '6.8rem', height: '5.8px', borderRadius: '11px', background: '#20C5FA' }} />
      </Box>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
      }}>
        <Grid container spacing={3} sx={{
          width: '100%',
          justifyContent: 'space-evenly',
          display: 'flex',
          mt: '80px',
          flexWrap: 'wrap'
        }}>

          <Grid item sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'inherit',
            alignItems: 'flex-start',
            width: '265px',
            height: '297px',
            boxShadow: 12,
            backgroundColor: 'white',
            borderRadius: '15px',
            flexWrap: 'wrap'
          }}>
            <PaletteIcon sx={{ fontSize: '35px', color: '#20C5FA' }} />
            <Typography variant='h5' sx={{ flexWrap: 'wrap', width: '38%' }}>Ui/Ux Designer</Typography>
            <ViewmoreBtn>VIEW MORE<ArrowForwardIcon /></ViewmoreBtn>
          </Grid>

          <Grid item sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'inherit',
            alignItems: 'flex-start',
            width: '265px',
            height: '297px',
            boxShadow: 12,
            backgroundColor: 'white',
            borderRadius: '15px'
          }}>
            <CodeIcon sx={{ fontSize: '35px', color: '#20C5FA' }} />
            <Typography variant='h5' sx={{ flexWrap: 'wrap', width: '43%' }}>Front-End Developer</Typography>
            <ViewmoreBtn>VIEW MORE<ArrowForwardIcon /></ViewmoreBtn>
          </Grid>

          <Grid item sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'inherit',
            alignItems: 'flex-start',
            width: '265px',
            height: '297px',
            boxShadow: 12,
            backgroundColor: 'white',
            borderRadius: '15px',
          }}>
            <ModeIcon sx={{ fontSize: '35px', color: '#20C5FA' }} />
            <Typography variant='h5' sx={{ flexWrap: 'wrap', width: '38%' }}>Graphic Designer</Typography>
            <ViewmoreBtn>VIEW MORE<ArrowForwardIcon /></ViewmoreBtn>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}
const ViewmoreBtn = styled.button`
    display: flex;
    width: 67%;
    color:#20C5FA;
    padding-left: 0;
    gap: 9px;
    justify-content: flex-start;
    align-items: center;
    background: none;
    border:none;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    align-items: center;
`;