import { Box, Typography } from '@mui/material'
import HtmlRoundedIcon from '@mui/icons-material/HtmlRounded';
import CssRoundedIcon from '@mui/icons-material/CssRounded';
import JavascriptRoundedIcon from '@mui/icons-material/JavascriptRounded';
import styles from '../styles/circle.module.scss';


export default function Skills() {
  return (
    <Box sx={{ m: '100px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant='h6' sx={{ mt: 5, fontSize: '35px' }}>SKILLS</Typography>
        <Box sx={{ width: '4.8rem', height: '5.8px', borderRadius: '11px', background: '#20C5FA' }} />
      </Box>
    

<div className="container">

	<div className="container__progressbars">

		<div className="progressbar">
			<svg className="progressbar__svg">
				<circle cx="80" cy="80" r="70" className="progressbar__svg-circle circle-html shadow-html"> </circle>
			</svg>
			<span className="progressbar__text shadow-html">HTML</span>
		</div>

		<div className="progressbar">
			<svg className="progressbar__svg">
				<circle cx="80" cy="80" r="70" className="progressbar__svg-circle circle-css shadow-css"> </circle>
			</svg>
			<span className="progressbar__text shadow-css">CSS</span>
		</div>

		<div className="progressbar">
			<svg className="progressbar__svg">
				<circle cx="80" cy="80" r="70" className="progressbar__svg-circle circle-scss shadow-scss"> </circle>
			</svg>
			<span className="progressbar__text shadow-scss">SCSS</span>
		</div>

		<div className="progressbar">
			<svg className="progressbar__svg">
				<circle cx="80" cy="80" r="70" className="progressbar__svg-circle circle-js shadow-js"> </circle>
			</svg>
			<span className="progressbar__text shadow-js">JavaScript</span>
		</div>

		<div className="progressbar">
			<svg className="progressbar__svg">
				<circle cx="80" cy="80" r="70" className="progressbar__svg-circle circle-ts shadow-ts"> </circle>
			</svg>
			<span className="progressbar__text shadow-ts">TypeScript</span>
		</div>

		<div className="progressbar">
			<svg className="progressbar__svg">
				<circle cx="80" cy="80" r="70" className="progressbar__svg-circle circle-node shadow-node"> </circle>
			</svg>
			<span className="progressbar__text shadow-node">Node.js</span>
		</div>

		<div className="progressbar">
			<svg className="progressbar__svg">
				<circle cx="80" cy="80" r="70" className="progressbar__svg-circle circle-react shadow-react"> </circle>
			</svg>
			<span className="progressbar__text shadow-react">React.js</span>
		</div>
		<div className="progressbar">
			<svg className="progressbar__svg">
				<circle cx="80" cy="80" r="70" className="progressbar__svg-circle circle-angular shadow-angular"> </circle>
			</svg>
			<span className="progressbar__text shadow-angular">Angular.js</span>
		</div>
		<div className="progressbar">
			<svg className="progressbar__svg">
				<circle cx="80" cy="80" r="70" className="progressbar__svg-circle circle-vue shadow-vue"> </circle>
			</svg>
			<span className="progressbar__text shadow-vue">Vue.js</span>
		</div>
	</div>

</div>


<div id="main-container-social" className="main-container-social"></div>
      {/* <Box sx={{
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
        </div>
      </Box >
      <div id="main-container-social" className="main-container-social"></div> */}
    </Box>
  )
}
