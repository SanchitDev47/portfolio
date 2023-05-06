import { Avatar, Box, Grid, Typography, Rating } from '@mui/material'
import * as React from 'react';
import styles from "@/styles/keenslider.module.css"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import SliderComponent from '@/Common/Elements/SliderComponent';
// import myImage from '../Assets/001.jpg';
// import mohitpic from '../Assets/mohit.jpg';
// import rushitapic from '../public/rushita.jpg';
// import Niharika from '../public/niharika.jpg';

export default function Testmonials() {
  const [niharikaStar, setNiharikaStar] = React.useState<number | null>(3);
  const [mohitStar, setMohitStar] = React.useState<number | null>(5);
  const [rushiStar, setRushiStar] = React.useState<number | null>(5);
  const [vaishvaniStar, setvaishvaniStar] = React.useState<number | null>(5);

  const TestoDetails = [
    {
      Name: 'Niharika Ambekar',
      Type: 'BSE Student',
      Description: 'Best work experiance with sanchit Highly Skilled in frontEnd Techonology Dedicated person with their job and Highly enthusiast work they done with great optimistic way',
      Rating: niharikaStar,
      ImgUrl: null
    },
    {
      Name: 'Mohit Patil',
      Type: 'Full-Stack Developer',
      Description: '',
      Rating: mohitStar,
      ImgUrl: ''
    },
    {
      Name: 'Vaishnavi Patil',
      Type: '',
      Description: '',
      Rating: '',
      ImgUrl: ''
    },
    {
      Name: 'Rushita Joshi',
      Type: 'Front-End Developer',
      Description: 'Your solution that was elegant, efficient and User-friendly.You were always available to answer questions provide guidance and it was an absolute pleasure working with you❤',
      Rating: rushiStar,
      ImgUrl: null
    },

  ]
  const [ref] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 2,
    },
  })

  const MainClass = 'keen-slider';
  return (
    <Box sx={{ m: '100px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant='h6' sx={{ mt: 5, fontSize: '35px' }}>TESTMONIALS</Typography>
        <Box sx={{ width: '8.8rem', height: '5.8px', borderRadius: '11px', background: '#20C5FA' }} />
      </Box>
      <Grid container spacing={3} sx={{ mt: 8, height: '300px', width: '108%', display: 'flex', flexDirection: { lg: 'row', sm: 'column' }, justifyContent: 'space-around' }}>
        <Box sx={{ display: 'flex', mt: 6, justifyContent: 'space-evenly', flexDirection: 'row', width: '80%' }}>

            {TestoDetails.map((data) => <Grid item>
              <Box sx={{ display: 'flex', padding: '6%', boxShadow: 16, flexDirection: 'column', borderRadius: '10px', background: 'white', width: '403px', height: '210px' }}>
                <Box sx={{ display: 'flex', width: '80%', flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Grid item lg={3.5}>
                    <Avatar sx={{ width: 48, height: 48 }} src={data.ImgUrl}></Avatar>
                  </Grid>
                  <Grid item lg={10} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <Typography sx={{ display: 'flex', flexDirection: 'row' }}>{data.Name}</Typography>
                    <Typography variant='subtitle2' sx={{ display: 'flex', flexDirection: 'row' }}>{data.Type}</Typography>
                  </Grid>

                  <Grid item lg={2} sx={{ display: 'flex' }}>
                    <Box
                      sx={{
                        '& > legend': { mt: 2 },
                      }}
                    >
                      <Rating name="read-only" value={data?.Rating} readOnly />
                    </Box>
                  </Grid>

                </Box>

                <Grid item lg={12} sx={{ mt: '20px' }}>
                  {data.Description}
                </Grid>
              </Box>
            </Grid>
            )}
        </Box>
      </Grid >
    </Box >
  )
}
