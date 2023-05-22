import { Box, Typography } from '@mui/material'
import HtmlRoundedIcon from '@mui/icons-material/HtmlRounded';
import CssRoundedIcon from '@mui/icons-material/CssRounded';
import JavascriptRoundedIcon from '@mui/icons-material/JavascriptRounded';
import styles from '@/styles/Circle.module.scss';


export default function Skills() {
  return (
    <Box sx={{ m: '100px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant='h6' sx={{ mt: 5, fontSize: '35px' }}>SKILLS</Typography>
        <Box sx={{ width: '4.8rem', height: '5.8px', borderRadius: '11px', background: '#20C5FA' }} />
      </Box>

      <div className={styles['container']}>

        <div className={styles['container__progressbars']}>
          <div className={styles['progressbar']}>
            <svg className={styles['progressbar__svg']}>
              <circle cx="80" cy="80" r="70" className={styles['progressbar__svg circle circle-html']}> </circle>
              {/* <circle cx="80" cy="80" r="70" className={comboclass}> </circle> */}
              {/* <circle cx="80" cy="80" r="70" className={styles['circleclass']}> </circle> */}
            </svg>
            <span className={styles['progressbar__text']}><HtmlRoundedIcon sx={{ fontSize: '50px', color: 'red' }} /></span>
          </div>
        </div>
      </div>
    </Box>
  )
}
