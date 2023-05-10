import * as React from 'react';
import { Avatar, Box, Grid, Typography, Rating } from '@mui/material'
import { Testmonials_OBJs } from '@/src/constants';

export default function Testmonials() {

  const [data, setData] = React.useState(Testmonials_OBJs);
  const UpdateRating = (itemId: any, newRating: any) => {
    const updatedData = data.map(item => {
      if (item.id === itemId) {
        return { ...item, rating: newRating };
      }
      return item;
    })
    setData(updatedData)
  }

  return (
    <Box sx={{ m: '100px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant='h6' sx={{ mt: 5, fontSize: '35px' }}>TESTMONIALS</Typography>
        <Box sx={{ width: '8.8rem', height: '5.8px', borderRadius: '11px', background: '#20C5FA' }} />
      </Box>
      <Grid container spacing={3} sx={{ mt: 8, height: '300px', width: '108%', display: 'flex', flexDirection: { lg: 'row', sm: 'column' }, justifyContent: 'space-around' }}>
        <Box sx={{ display: 'flex', mt: 6, justifyContent: 'space-evenly', flexDirection: 'row', width: '80%' }}>

          {Testmonials_OBJs.map((item: any, idx: number) =>
            <Grid item key={idx}>
              <Box sx={{ display: 'flex', padding: '6%', boxShadow: 16, flexDirection: 'column', borderRadius: '10px', background: 'white', width: '403px', height: '210px' }}>
                <Box sx={{ display: 'flex', width: '80%', flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Grid item lg={3.5}>
                    <Avatar sx={{ width: 48, height: 48 }} src={item.ImgUrl}></Avatar>
                  </Grid>
                  <Grid item lg={10} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <Typography sx={{ display: 'flex', flexDirection: 'row' }}>{item.Name}</Typography>
                    <Typography variant='subtitle2' sx={{ display: 'flex', flexDirection: 'row' }}>{item.Type}</Typography>
                  </Grid>

                  <Grid item lg={2} sx={{ display: 'flex' }}>
                    <Box
                      sx={{
                        '& > legend': { mt: 2 },
                      }}
                    >
                      <Rating name="read-only" value={item?.Rating} readOnly />
                    </Box>
                  </Grid>

                </Box>

                <Grid item lg={12} sx={{ mt: '20px' }}>
                  {item.Description}
                </Grid>
              </Box>
            </Grid>
          )}
        </Box>
      </Grid >
    </Box >
  )
}
