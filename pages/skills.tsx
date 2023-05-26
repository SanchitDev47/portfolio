import { Box, Grid, Typography } from '@mui/material'
import styles from '@/styles/icon.module.css';
import { SkillsCircle } from '@/src/constants';
import CircularProgressBar from '@/Common/Elements/CircularProgressBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export default function Skills() {
  return (
    <Box sx={{ m: '150px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant='h6' sx={{ mt: 5, fontSize: '35px' }}>SKILLS</Typography>
        <Box sx={{ width: '4.8rem', height: '5.8px', borderRadius: '11px', background: '#20C5FA' }} />
      </Box>
        <Box sx={{ mt:'5%', display: 'flex',justifyContent:'space-between' }}>
          {SkillsCircle.map((item: any, idx: number) =>
            <CircularProgressBar key={idx} percentage={item.progress} icon={item.icon} />
          )}
        </Box>
      </Box>
      )
}
