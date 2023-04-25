import { Box, Button, Grid, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import styled from 'styled-components';
import React from 'react'

export default function Portfolio() {

  const PortfolioDetails = [
    {
      title: 'Product App',
      img: 'https://i0.wp.com/marvel.com.sa/wp-content/uploads/2022/07/What-is-Your-Website-Design-Process-Blog-Post-Feature-Image-36119-01.png?resize=2048%2C1074&ssl=1',
      description: 'The product app manage all of business requriment and such as product summary and some more funcationality',
      // Btnurl: null
    },
    {
      title: 'Product App',
      img: 'https://i0.wp.com/marvel.com.sa/wp-content/uploads/2022/07/What-is-Your-Website-Design-Process-Blog-Post-Feature-Image-36119-01.png?resize=2048%2C1074&ssl=1',
      description: 'The product app manage all of business requriment and such as product summary and some more funcationality',
      // Btnurl: null
    },
  ]
  return (
    <Box sx={{ m: '100px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant='h6' sx={{ mt: 5, fontSize: '35px' }}>PORTFOLIO</Typography>
        <Box sx={{ width: '8.8rem', height: '5.8px', borderRadius: '11px', background: '#20C5FA' }} />
      </Box>
      <Box sx={{ display: 'flex', height: '300px', justifyContent: 'center' }}>
        {PortfolioDetails.map((data) => <Grid container spacing={3} sx={{ mt: 8, width: '70%', display: 'flex', justifyContent: 'space-evenly', flexDirection: 'row', alignItems: 'center' }}>
          <Box
            component="img"
            sx={{
              borderRadius: '12px',
              boxShadow: 15,
              borderColor: 'white',
              border: '5px',
              minWidth: '371px',
              maxHeight: '193px'
            }}
            alt="The house from the offer."
            src={data.img}
          />
          <Box sx={{ display: 'flex', height: '90%', width: '38%', flexDirection: 'column', justifyContent: 'space-evenly', gap: '19px', }}>
            <Grid item sx={{ display: 'flex', width: '100%', flexDirection: 'column', justifyContent: 'space-evenly', gap: '25px' }}>
              <Typography variant='h5'>{data.title}</Typography>
              {data.description}
            </Grid>
            <DemoBtn>Demo<ArrowForwardIcon /></DemoBtn>
          </Box>
        </Grid>
        )}
      </Box>
    </Box>
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