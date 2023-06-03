import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import styled from 'styled-components';
import { Service_OBJs } from '@/src/constants';
import SubHeader from '@/Common/Elements/SubHeader';
import { DetailPopup } from '@/Common/Elements/DetailsPopup';

export default function Service() {
  return (
    <>
      <SubHeader>SERVICE</SubHeader>
      <Grid container sx={{
        width: '100%',
        justifyContent: 'space-evenly',
        display: 'flex',
        m: 0,
        flexWrap: 'wrap',
        paddingTop: '50px', paddingBottom: '50px',
      }}>
        {Service_OBJs.map((item: any, idx: number) =>
          <Grid item key={idx} sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'inherit',
            alignItems: 'flex-start',
            width: '265px',
            height: '297px',
            boxShadow: 12,
            padding: '25px',
            mt:5,
            gap: '10%',
            backgroundColor: 'white',
            borderRadius: '15px',
            flexWrap: 'wrap'
          }}>
            {item.Icon}
            <Typography variant='h5' sx={{ flexWrap: 'wrap', width: '63%' }}>{item.Title}</Typography>
            <ViewmoreBtn>VIEW MORE<ArrowForwardIcon /></ViewmoreBtn>
          </Grid>)}
      </Grid>
    </>
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