import { Grid, TextareaAutosize, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export default function Contact() {
  return (
    <>
      <Typography variant='h6' sx={{ display: 'flex', justifyContent: 'center', mt: 5, fontSize: '40px', textDecorationLine: 'underline' }}>Contact</Typography>
      <Grid container spacing={3} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>

        <Grid item sx={{display:'flex', justifyContent:'flex-start'}}>
          <Box>
            <Typography>+91 9850589978</Typography>
            <Typography>Yawal, Maharashtra</Typography>
            <Typography>sanchitbarjibhe98@gmail.com</Typography>
          </Box>
        </Grid>

        <Grid item sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </Grid>
        <Grid item lg={12} sx={{ display: 'flex', }}>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </Grid>
        <Grid item>
          <TextareaAutosize
            aria-label="empty textarea"
            placeholder="Empty"
            style={{ width: 200 }}
          />
        </Grid>
      </Grid>

    </>

  )
}
