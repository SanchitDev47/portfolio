import React from 'react'
import { Box } from '@mui/system'
import { Typography } from '@mui/material';


type HeaderProps = {
  HeaderText: String;
}


export default function SubHeader(props: HeaderProps) {
  const { HeaderText } = props;
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center'
    }}
    >
      <Typography variant='h6'>{HeaderText}</Typography>
    </Box>
  )
}
