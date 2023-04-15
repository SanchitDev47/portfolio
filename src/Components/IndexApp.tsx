import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Banner from './Banner';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Skills from './Skills';
import Testmonials from './Testmonials';
import About from './About';
import Qualification from './Qualification';
import Footer from './Footer';
import Service from './Service';

interface Props {
    window?: () => Window;
}


const drawerWidth = 240;
const navItems = ['HOME', 'SKILLS', 'SERVICE', 'PORTFOLIO', 'TESTOMINALS', 'CONTACT'];

export default function IndexApp(props: Props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    // function skillsClick(){
    //     navItems[1] += <Testmonials />
    // }

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                Sanchit
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>
            <Box>
                <CssBaseline />
                <AppBar component='div' sx={{ backgroundColor: '#fff', boxShadow: '9', overflow: 'hidden' }}>
                    <Toolbar>
                        <IconButton
                            color='default'
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ color: { sm: '#20C5FA' }, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h1"
                            component="div"
                            sx={{ flexGrow: 1, mx: { lg: 22, md: 15, sm: 1 }, color: '#20C5FA', fontWeight: 600, fontSize: '28px', display: { xs: 'none', sm: 'block' } }}
                        >
                            Sanchit
                        </Typography>
                        <Box sx={{ mr: { lg: 15, md: 2, sm: 2, xs: 1 }, display: { xs: 'none', sm: 'block' } }}>
                            {navItems.map((item) => (
                                <Button key={item} sx={{ mr: { lg: 1.7, md: 2, sm: 0, xs: 1 }, color: 'black', fontWeight: '20px' }}>
                                    {item}
                                </Button>
                            ))}
                        </Box>
                    </Toolbar>
                </AppBar>
                <Box component="nav">
                    <Drawer
                        anchor='right'
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Box>
            </Box>
            {/* <Box sx={{width:'1500px'}}> */}
            <Box>
                <Banner />
                <About />
                <Qualification />
                <Skills />
                <Service />
                <Portfolio />
                <Testmonials />
                <Contact />
                <Footer />
            </Box>
        </>
    );
}
