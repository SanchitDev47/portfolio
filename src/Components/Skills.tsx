import { Box, Typography } from '@mui/material'
import React from 'react'
import '../Circle.scss';
import HtmlRoundedIcon from '@mui/icons-material/HtmlRounded';
import CssRoundedIcon from '@mui/icons-material/CssRounded';
import JavascriptRoundedIcon from '@mui/icons-material/JavascriptRounded';
// import { faHTML5Logo } from '@fortawesome/react-fontawesome'


export default function Skills() {
  return (
    <Box sx={{ m: '100px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant='h6' sx={{ mt: 5, fontSize: '35px' }}>SKILLS</Typography>
        <Box sx={{ width: '4.8rem', height: '5.8px', borderRadius: '11px', background: '#20C5FA' }} />
      </Box>
      <Box sx={{
        display: 'flex',
        justifyCntent: ' center',
        alignItems: 'center',
        mt: '65px'
      }}>

        <div className="container__progressbars">
          <Box sx={{
            position: 'relative',
            width: '165px',
            height: '165px',
            margin: '1em',
            transform: 'rotate(-90deg)',
            backgroundColor: 'white',
            borderRadius: '50%',
            boxShadow: 12
          }}>
            <svg className="progressbar__svg">
              <circle cx="80" cy="80" r="70" className="progressbar__svg-circle circle-html "> </circle>
            </svg>
            <span className="progressbar__text shadow-html"><HtmlRoundedIcon sx={{ fontSize: '50px' }} /></span>
          </Box>
          <Box sx={{
            position: 'relative',
            width: '165px',
            height: '165px',
            margin: '1em',
            transform: 'rotate(-90deg)',
            backgroundColor: 'white',
            borderRadius: '50%',
            boxShadow: 12
          }}>
            <svg className="progressbar__svg">
              <circle cx="80" cy="80" r="70" className="progressbar__svg-circle circle-html "> </circle>
            </svg>
            <span className="progressbar__text shadow-html"><CssRoundedIcon sx={{ fontSize: '50px' }} /></span>
          </Box>
          <Box sx={{
            position: 'relative',
            width: '165px',
            height: '165px',
            margin: '1em',
            transform: 'rotate(-90deg)',
            backgroundColor: 'white',
            borderRadius: '50%',
            boxShadow: 12
          }}>
            <svg className="progressbar__svg">
              <circle cx="80" cy="80" r="70" className="progressbar__svg-circle circle-html "> </circle>
            </svg>
            <span className="progressbar__text shadow-html"><JavascriptRoundedIcon sx={{ fontSize: '50px' }} /></span>
          </Box>
          <Box sx={{
            position: 'relative',
            width: '165px',
            height: '165px',
            margin: '1em',
            transform: 'rotate(-90deg)',
            backgroundColor: 'white',
            borderRadius: '50%',
            boxShadow: 12
          }}>
            <svg className="progressbar__svg">
              <circle cx="80" cy="80" r="70" className="progressbar__svg-circle circle-html "> </circle>
            </svg>
            <span className="progressbar__text shadow-html">HTML</span>
          </Box>
          <Box sx={{
            position: 'relative',
            width: '165px',
            height: '165px',
            margin: '1em',
            transform: 'rotate(-90deg)',
            backgroundColor: 'white',
            borderRadius: '50%',
            boxShadow: 12
          }}>
            <svg className="progressbar__svg">
              <circle cx="80" cy="80" r="70" className="progressbar__svg-circle circle-html "> </circle>
            </svg>
            <span className="progressbar__text shadow-html">HTML</span>
          </Box>


        </div >

      </Box >

      <div id="main-container-social" className="main-container-social"></div>
    </Box>
  )
}
