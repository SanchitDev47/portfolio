import { Box, Typography } from '@mui/material'
import React from 'react'

export default function About() {
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Typography variant='h6' sx={{ display: 'flex', mt: 5, fontSize: '40px' }}>About</Typography>
      <Box sx={{ width: '60px', height: '5px', display: 'flex', mt: 12, justifyContent: 'center', backgroundColor: 'black' }}></Box>
      </Box>
    </>
  )
}
