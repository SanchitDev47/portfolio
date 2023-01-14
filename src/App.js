import './App.css';
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import Banner from './Components/Banner';
import AppMenuBar from './Components/AppMenuBar';

function App() {
  return (
    <Box sx={{ flexGrow: 1, }}>
      <AppMenuBar />
      <Banner />
    </Box>
  );
}

export default App;
