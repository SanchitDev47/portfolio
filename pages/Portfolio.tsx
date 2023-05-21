import { Box, Button, Grid, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import styled from 'styled-components';
import React from 'react'
import { PortfolioDetails } from '@/src/constants';

export default function Portfolio() {


  return (
    <Box sx={{ m: '5%', height: '500px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant='h6' sx={{ mt: 5, fontSize: '35px' }}>PORTFOLIO</Typography>
        <Box sx={{ width: '8.8rem', height: '5.8px', borderRadius: '11px', background: '#20C5FA' }} />
      </Box>

      <Box sx={{ display: 'flex', mt: 10, justifyContent: 'center', alignItems: 'center' }}>
        {/* <Box sx={{ , height: '300px', justifyContent: 'center', alignItems: 'center' }}> */}
        {PortfolioDetails.map((item: any, idx: number) =>
          <Grid key={idx} container sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center', flexDirection: 'row', alignItems: 'flex-start'
          }}>
            <Grid item lg={4} md={5.6} sm={7} xs={9}>
              <Box
                component="img"
                sx={{
                  borderRadius: '12px',
                  boxShadow: 15,
                  borderColor: 'white',
                  border: '5px',
                  width: { lg: '371px', xs: '330px' },
                  height: { lg: '193px', xs: '193px' },
                  mr: '15px'
                }}
                alt="The house from the offer."
                src={item.img}
              />
            </Grid>
            <Grid item lg={3} md={3} sm={5} xs={9}
              sx={{
                display: { lg: 'inline', xs: 'flex' },
                padding: { lg: '0%', md: 0, sm: 0, xs: '20px' },
                flexDirection: { lg: 'row', xs: 'column' },
                alignItems: { lg: 'flex-start', md: 'flex-start', sm: 'flex-start', xs: 'center' },
              }
              } >
              <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: { lg: 'flex-start', md: 'flex-start', sm: 'flex-start', xs: 'center' },
                width: '90%',
                gap: '25px',
                mb: '15px',
                textAlign: { lg: 'left', md: 'left', sm: 'left', xs: 'center' },
              }}>
                <Typography variant='h5'>{item.title}</Typography>
                <Typography variant='subtitle1'>{item.description}</Typography>
              </Box>
              <DemoBtn>Demo<ArrowForwardIcon /></DemoBtn>
            </Grid>
          </Grid>
        )
        }
        {/* </Box> */}
      </Box >
    </Box >
  )
}

const DemoBtn = styled.button`
  display: flex;
  background: #20C5FA;
  color: white;
  border-radius: 8px;
  border: none;
  display: flex;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
    align-items: center;
    height: 40px;
    width: 106px;
    padding: 0;
    justify-content: space-evenly;
`;