import './App.css';
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import Banner from './Components/Banner';

function App() {
  return (
    <Box sx={{ flexGrow: 1, }}>
      <AppBar position="sticky" sx={{ backgroundColor: 'white', boxShadow: '9', overflowX: 'hidden' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }} >
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#20C5FA' }}>
              Sanchit
            </Typography>
            <Button>
              HOME
            </Button>
            <Button>
              SKILLS
            </Button>
            <Button>
              PORTFOLIO
            </Button>
            <Button>
              TESTOMINALS
            </Button>
            <Button>
              CONTACT
            </Button>
          </Toolbar>
        </Box>
      </AppBar>
      <Banner />
    </Box>
  );
}

export default App;
