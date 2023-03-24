import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'

export default function Portfolio() {
  return (
    <>
      <Typography variant='h6' sx={{ display: 'flex', justifyContent: 'center', mt: 5, fontSize: '40px', textDecorationLine: 'underline' }}>Portfolio</Typography>
      <Box sx={{ display: 'flex', height: '300px',justifyContent:'center' }}>
        <Grid container spacing={3} sx={{ mt: 6, width: '50%', display: 'flex', justifyContent: 'space-evenly', flexDirection: 'row', alignItems:'center' }}>
          <Box
            component="img"
            sx={{
              borderRadius: '9px',
              border: 'black',
              boxShadow: 12,
              height: 500,
              width: 400,
              maxHeight: 160.6,
              maxWidth: 290,
            }}
            alt="The house from the offer."
            src="https://i0.wp.com/marvel.com.sa/wp-content/uploads/2022/07/What-is-Your-Website-Design-Process-Blog-Post-Feature-Image-36119-01.png?resize=2048%2C1074&ssl=1"
          />
          <Box sx={{ display: 'flex', height: '90%', width: '40%', flexDirection: 'column', justifyContent: 'space-evenly' }}>
            <Grid>
              <Typography variant='h6'>Product app</Typography>
            </Grid>
            <Grid item sx={{ display: 'flex', width: '100%'}}>
              The product app manage all of business
              requriment and such as product summary
              and some more funcationality
            </Grid>
            <Grid>
            <Button>Demo</Button>
            </Grid>
          </Box>
        </Grid>
      </Box>
    </>
  )
}
