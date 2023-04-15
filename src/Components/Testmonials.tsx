

import { Avatar, Box, Grid, Typography, Rating } from '@mui/material'
import * as React from 'react';
import myImage from '../../src/img/001.jpg';
import mohitpic from '../../src/img/mohit.jpg';
import rushitapic from '../../src/img/rushita.jpg';

export default function Testmonials() {
  const [value, setValue] = React.useState<number | null>(3);
  const [otherVal, setotherVal] = React.useState<number | null>(5);
  const [rushValue, setRushVal] = React.useState<number | null>(5);
  return (
    <Box sx={{ m: '100px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant='h6' sx={{ mt: 5, fontSize: '35px' }}>TESTMONIALS</Typography>
        <Box sx={{ width: '8.8rem', height: '5.8px', borderRadius: '11px', background: '#20C5FA' }} />
      </Box>
      <Grid container spacing={3} sx={{ mt: 8, height: '300px', width: '108%', display: 'flex', flexDirection: { lg: 'row', sm: 'column' }, justifyContent: 'space-around' }}>
        {/* First Card */}
        <Box sx={{ display: 'flex', mt: 6, justifyContent: 'space-evenly', flexDirection: 'row', width: '80%' }}>

          <Grid item>
            <Box sx={{ display: 'flex', padding: '6%', boxShadow: 16, flexDirection: 'column', borderRadius: '10px', background: 'white', width: '403px', height: '210px' }}>
              <Box sx={{ display: 'flex', width: '80%', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Grid item lg={3.5}>
                  <Avatar sx={{ width: 48, height: 48 }} src={myImage}></Avatar>
                </Grid>
                <Grid item lg={10} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <Typography sx={{ display: 'flex', flexDirection: 'row' }}>Niharika Ambekar</Typography>
                  <Typography variant='subtitle2' sx={{ display: 'flex', flexDirection: 'row' }}>BSE Student</Typography>
                </Grid>

                <Grid item lg={2} sx={{ display: 'flex' }}>
                  <Box
                    sx={{
                      '& > legend': { mt: 2 },
                    }}
                  >
                    <Rating name="read-only" value={value} readOnly />
                  </Box>
                </Grid>

              </Box>

              <Grid item lg={12} sx={{ mt: '20px' }}>Best work experiance with sanchit Highly Skilled in frontEnd Techonology Dedicated person with their job and Highly enthusiast work they done with great optimistic way
              </Grid>
            </Box>

            <Grid item sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
            </Grid>
          </Grid>

          {/* Secound Card */}
          <Grid item sx={{}}>
            <Box sx={{ display: 'flex', padding: '6%', boxShadow: 12, flexDirection: 'column', borderRadius: '10px', background: 'white', width: '403px', height: '210px' }}>
              <Box sx={{ display: 'flex', width: '80%', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Grid item lg={3.5}>
                  <Avatar sx={{ width: 48, height: 48 }} src={mohitpic}></Avatar>
                </Grid>
                <Grid item lg={10} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <Typography sx={{ display: 'flex', flexDirection: 'row' }}>Mohit Patil</Typography>
                  <Typography variant='subtitle2' sx={{ display: 'flex', flexDirection: 'row' }}>Full-Stack developer</Typography>
                </Grid>

                <Grid item lg={2} sx={{ display: 'flex' }}>
                  <Box
                    sx={{
                      '& > legend': { mt: 2 },
                    }}
                  >
                    <Rating name="read-only" value={otherVal} readOnly />
                  </Box>
                </Grid>

              </Box>

              <Grid item lg={12} sx={{ mt: '20px' }}> item Lorem ipsum dolor sit amet, consectetur adipiscing elit.Tincidunt lacus,
                quam pulvinar vel.At vel consequat dapibus egestas egestas at. Placerat arcu
              </Grid>
            </Box>

            <Grid item sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
            </Grid>
          </Grid>

          <Grid item>
            <Box sx={{ display: 'flex', padding: '6%', boxShadow: 16, flexDirection: 'column', borderRadius: '10px', background: 'white', width: '403px', height: '210px' }}>
              <Box sx={{ display: 'flex', width: '80%', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Grid item lg={3.5}>
                  <Avatar sx={{ width: 48, height: 48 }} src={rushitapic}></Avatar>
                </Grid>
                <Grid item lg={10} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <Typography sx={{ display: 'flex', flexDirection: 'row' }}>Rushita Joshi</Typography>
                  <Typography variant='subtitle2' sx={{ display: 'flex', flexDirection: 'row' }}>Front-End Developer</Typography>
                </Grid>

                <Grid item lg={2} sx={{ display: 'flex' }}>
                  <Box
                    sx={{
                      '& > legend': { mt: 2 },
                    }}
                  >
                    <Rating name="read-only" value={rushValue} readOnly />
                  </Box>
                </Grid>

              </Box>

              <Grid item lg={12} sx={{ mt: '20px' }}>
                "Your solution that was elegant, efficient,
                and User-friendly.You were always available to answer questions, provide guidance
                and it was an absolute pleasure working with you.❤"
              </Grid>
            </Box>

            <Grid item sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
            </Grid>
          </Grid>


        </Box>
      </Grid>
    </Box>
  )
}
