import { Avatar, Box, Grid, Typography, Rating } from '@mui/material'
import * as React from 'react';





export default function Testmonials() {
  const [value, setValue] = React.useState<number | null>(4);
  const [otherVal, setotherVal] = React.useState<number | null>(2);


  return (
    <>
      <Typography variant='h6' sx={{ mt: 12, display: 'flex', justifyContent: 'center', fontSize: '40px', textDecorationLine: 'underline' }}>Testmonials</Typography>

      <Grid container spacing={3} sx={{ mt: 6, ml: 0, mr: 0, height: '500px', width: '1500px', display: 'flex', flexDirection: { lg: 'row', sm: 'column' }, justifyContent: 'space-around' }}>
        {/* First Card */}
        <Grid item sx={{ display: 'flex', justifyContent: 'space-evenly', }}>
          <Grid item sx={{ display: 'flex', padding: '6%', boxShadow: 16, flexDirection: 'column', borderRadius: '10px', background: 'white', width: '403px', height: '210px' }}>
            <Box sx={{ display: 'flex', width: '80%', flexDirection: 'row', justifyContent: 'space-between' }}>
              <Grid item lg={3.5}>
                <Avatar sx={{ width: 50, height: 50 }} src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80'></Avatar>
              </Grid>
              <Grid item lg={10} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <Typography sx={{ display: 'flex', flexDirection: 'row' }}>Angala Yu</Typography>
                <Typography variant='caption' sx={{ display: 'flex', flexDirection: 'row' }}>Client</Typography>
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

            <Grid item lg={12} sx={{ mt: '20px' }}> item Lorem ipsum dolor sit amet, consectetur adipiscing elit.Tincidunt lacus,
              quam pulvinar vel.At vel consequat dapibus egestas egestas at. Placerat arcu
            </Grid>
          </Grid>

        </Grid>

        {/* Secound Card */}
        <Grid item sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
          <Box sx={{ display: 'flex', padding: '6%', boxShadow: 16, flexDirection: 'column', borderRadius: '10px', background: 'white', width: '403px', height: '210px' }}>
            <Box sx={{ display: 'flex', width: '80%', flexDirection: 'row', justifyContent: 'space-between' }}>
              <Grid item lg={3.5}>
                <Avatar sx={{ width: 48, height: 48 }} src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80'></Avatar>
              </Grid>
              <Grid item lg={10} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <Typography sx={{ display: 'flex', flexDirection: 'row' }}>Angala Yu</Typography>
                <Typography sx={{ display: 'flex', flexDirection: 'row' }}>Client</Typography>
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
      </Grid>
        </>
        )
}
