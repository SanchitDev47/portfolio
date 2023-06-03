import { Box, Grid, Typography } from '@mui/material'
import { SkillsCircle } from '@/src/constants';
import CircularProgressBar from '@/Common/Elements/CircularProgressBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SubHeader from '@/Common/Elements/SubHeader';



export default function Skills() {
  return (
    <>
      <SubHeader>SKILLS</SubHeader>
        <Grid container sx={{ justifyContent: 'space-evenly', }}>
          <Grid lg={12} md={8} item sx={{ display: 'contents', height: '100%' }}>
            {SkillsCircle.map((item: any, idx: number) =>
              <CircularProgressBar key={idx} percentage={item.progress} icon={item.icon} />
            )}
          </Grid>
        </Grid>
    </>
  )
}
