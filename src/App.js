import React, { useState } from 'react';

import { Container, Grid, Card, CardContent, Typography, Button, Box, Avatar, AppBar, Toolbar } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SchoolIcon from '@mui/icons-material/School';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import WifiIcon from '@mui/icons-material/Wifi';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ResearchIcon from '@mui/icons-material/Science';
import PeopleIcon from '@mui/icons-material/People';
import HomeIcon from '@mui/icons-material/Home';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import VpnLockIcon from '@mui/icons-material/VpnLock';
import {Divider, Switch} from '@mui/material';
import { useMediaQuery } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#420303', 
//     },
//     secondary: {
//       main: '#420303',
//     },
//   },
// });

function App() {

  const [darkMode, setDarkMode] = useState(false); // State to toggle theme

  const lightTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#5F6F65', 
        secondary: '#2F3645',
        light: '#808D7C',
        lighter: '#939185',
      },
      background: {
        default: '#F8EDED',
        paper: '#ffffff',
      },
    },
    typography: {
      fontFamily: 'Tahoma, Arial',
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#bb86fc',
      },
      background: {
        default: '#121212',
        paper: '#1d1d1d',
      },
      text: {
        primary: '#ffffff',
        secondary: '#aaaaaa',
      },
    },
    typography: {
      fontFamily: 'Tahoma, Arial',
    },
  });

  const theme = darkMode ? darkTheme : lightTheme;

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };
  const isMobile = useMediaQuery('(max-width:600px)');
  const isTablet = useMediaQuery('(min-width:601px) and (max-width:900px)');
  const isBigTablet= useMediaQuery('(min-width:901px) and (max-width:1280px)');
  const is1024 = useMediaQuery('(width:1024px)');
  const is1280 = useMediaQuery('(width:1280px)');
  const linkCategories = [
    {
      title: 'Academics',
      links: [
        { name: 'Courses', url: 'https://courses.iiit.ac.in', icon: <SchoolIcon />,vpnIcon: <VpnLockIcon />, },
        { name: 'Old Courses Portal', url: 'https://courses.iiit.ac.in', icon: <MenuBookIcon />,vpnIcon: <VpnLockIcon />, },
        { name: 'Intranet', url: 'https://intranet.iiit.ac.in', icon: <WifiIcon />,vpnIcon: <VpnLockIcon />, },
        { name: 'Library', url: 'https://library.iiit.ac.in', icon: <LibraryBooksIcon />,vpnIcon: <VpnLockIcon />, },
      ],
    },
    {
      title: 'Research',
      links: [
        { name: 'Research Centres', url: 'https://web2py.iiit.ac.in/research_centres', icon: <ResearchIcon />,vpnIcon: <VpnLockIcon />, },
        { name: 'Publications Portal', url: 'https://web2py.iiit.ac.in/research_centres/publications/', icon: <LibraryBooksIcon />,vpnIcon: <VpnLockIcon />, },
        { name: 'Seminar', url: 'https://web2py.iiit.ac.in/seminar/default/home', icon: <SchoolIcon />,vpnIcon: <VpnLockIcon />, },
      ],
    },
    {
      title: 'Campus Life',
      links: [
        { name: 'Alumni', url: 'https://alumni.iiit.ac.in/', icon: <PeopleIcon />,vpnIcon: <VpnLockIcon />, },
        { name: 'Blog', url: 'https://blogs.iiit.ac.in/', icon: <HomeIcon />,vpnIcon: <VpnLockIcon />, },
        { name: 'Courier', url: 'https://courier.iiit.ac.in/portal/main1.php', icon: <SelfImprovementIcon />,vpnIcon: <VpnLockIcon />, },
        { name: 'Mess', url: 'https://mess.iiit.ac.in', icon: <SelfImprovementIcon />,vpnIcon: <VpnLockIcon />, },
      ],
    },
  ];

  const popularPortals = [
    { name: 'IMS', url: 'https://ims.iiit.ac.in', icon: <SchoolIcon />,vpnIcon: <VpnLockIcon /> , description: 'Integrated Management System' },
    { name: 'Intranet', url: 'https://intranet.iiit.ac.in', icon: <WifiIcon />,vpnIcon: <VpnLockIcon />, description: 'Internal Network Access' },
    { name: 'Mess', url: 'https://mess.iiit.ac.in', icon: <SelfImprovementIcon />,vpnIcon: <VpnLockIcon />, description: 'Mess Menu and Services' },
    { name: 'IT Self Help', url: 'https://self-help.iiit.ac.in/', icon: <PeopleIcon />,vpnIcon: <VpnLockIcon />, description: 'Technical Assistance' },
    { name: 'Blog', url: 'https://blogs.iiit.ac.in', icon: <HomeIcon />,vpnIcon: <VpnLockIcon />, description: 'Campus Blogs and Stories' },
  ];

  const Miscellaneous = [
    { name: 'IT Self Help', url: 'https://self-help.iiit.ac.in/', icon: <PeopleIcon />,vpnIcon: <VpnLockIcon />, description: 'IT help website' },
    { name: 'Password Reset', url: 'https://passwordreset.iiit.ac.in/', icon: <PeopleIcon />,vpnIcon: <VpnLockIcon />, description:'Password Reset' },
  ];


  return (
    <ThemeProvider theme={theme}>
      <div className="background" style={{ backgroundColor: theme.palette.background.default ,maxWidth:'100vw',overflow:'hidden'}}>
      <AppBar position="static" sx={{ backgroundColor: theme.palette.background.default, height: 'auto' }}>
          <Toolbar>
            <Box
              component="img"
              src={darkMode? '/iiit-logo-white.png':'/iiith_logo.png'}
              alt="Logo"
              sx={{
                marginTop: 1,
                marginRight: 2,
                width: isMobile?'40vw':'8vw',  
                height: 'auto', 
              }}
            />
          </Toolbar>
          <Switch checked={darkMode} onChange={toggleTheme} icon={<Brightness7Icon/>} checkedIcon={<Brightness4Icon />} sx={{ marginLeft: 'auto' }} />
          
            {/* <Typography sx={{ marginLeft: 'auto', color: theme.palette.text.primary }}>
              {darkMode ? 'Dark Mode' : 'Light Mode'}
            </Typography> */}
        </AppBar>
        
        <Box sx={{ marginBottom: '30px', marginTop: '2vw', height:'auto',marginLeft:is1024?'-5vw':is1280?'-5vw':isMobile?'auto':isTablet?'-6vw':isBigTablet?'-6vw':'auto',  paddingLeft:isMobile?'auto':isTablet?'auto':isBigTablet?'auto':'5vw', paddingRight:isMobile?'auto':isTablet?'auto':isBigTablet?'auto':'5vw',marginRight:isMobile?'auto':isTablet?'5vw':isBigTablet?'5vw':'5vw' }}>
          <Typography variant="h5" gutterBottom sx={{ textAlign: 'center', marginBottom: '20px', fontFamily: 'Georgia', marginRight: isMobile? '0vw': isTablet?'-15vw':isBigTablet?'-11vw':'0vw',marginLeft:isMobile?'auto':isTablet?'auto':isBigTablet?'auto':'5vw', color: theme.palette.text.primary }}>
            Popular Portals
          </Typography>
          
          <Grid container spacing={is1280?25:isTablet?17:isBigTablet?20:2}>
            {popularPortals.map((portal, index) => (
              <Grid item xs={12} sm={2} key={index}>
                <Card
                  sx={{
                    backgroundColor: theme.palette.background.paper,
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    borderRadius: '10px', 
                    border: `1px solid ${theme.palette.background.default}`,
                    textAlign: 'center',
                    padding:isTablet?'0.1vw':isBigTablet?'0.1vw':'20px',
                    paddingBottom: '0vh',
                    width: isMobile? '60vw':isTablet?'18vw':isBigTablet?'18vw':'10vw',
                    height: '100%',
                    marginLeft: isMobile? '13vw':isTablet?'7vw':isBigTablet?'7vw':'10vw',
                    marginRight: isMobile? '13vw':isTablet?'5vw':isBigTablet?'5vw':'10vw',
                  }}
                >
                  <CardContent>
                    <Button
                      variant="contained"
                      color="primary"
                      href={portal.url}
                      target="_blank"
                      startIcon={portal.icon}
                      fullWidth
                      sx={{
                        padding: '10px',
                        color: 'white',
                        backgroundColor: theme.palette.primary.main,
                        '&:hover': {
                          backgroundColor: theme.palette.primary.light,
                        },
                      }}
                    >
                      {portal.name}
                      {portal.vpnIcon}
                    </Button>
                    <Typography variant="body1" sx={{ color: theme.palette.text.secondary, fontFamily: 'Times New Roman', marginTop: '10px' }}>
                      {portal.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
           
          </Grid>
        </Box>
        
        <Divider sx={{ bgcolor: 'silver', width: '75vw', margin: '2vh auto', marginTop:'7vh' }} />

        <Container
          maxWidth="lg"
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.01)', 
            borderRadius: '10px',
            padding: '30px',
            height: 'auto',
            marginLeft:isMobile?'1vw':'auto',
            marginRight:'auto',
            paddingLeft:'auto',
            paddingRight:'auto',
          }}
        >
          <Grid container spacing={3} sx={{ borderSpacing: '20px' }}>
            {linkCategories.map((category, index) => (
              <Grid item xs={12} sm={4} key={index} sx={{ padding: '0 10px' }}>
                <Card
                  sx={{
                    backgroundColor: theme.palette.background.paper,
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    borderRadius: '10px',
                    border: `1px solid ${theme.palette.background.default}`,
                    textAlign: 'center',
                    padding: '10px',
                    paddingBottom: '20px', 
                    height: '100%',
                    marginLeft: '0.5vw',
                  }}
                >
                  <CardContent>
                    <Typography variant="h5" gutterBottom sx={{ color: theme.palette.text.primary, fontFamily:'Tahoma', marginBottom: '2vh' }}>
                      {category.title}
                    </Typography>
                    {category.links.map((link, i) => (
                      <Box key={i} sx={{ margin: '10px 0' }}>
                        <Button
                          variant="contained"
                          color="primary"
                          href={link.url}
                          target="_blank"
                          startIcon={link.icon}
                          fullWidth
                          sx={{
                            padding: '10px',
                            color: 'white',
                            backgroundColor: '#134B70',
                            '&:hover': {
                              backgroundColor: '#1A6B8D', 
                            },
                          }}
                        >
                         <span>{link.name}</span>
                          {link.vpnIcon}
                        </Button>
                      </Box>
                    ))}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

        <Divider sx={{ bgcolor: 'silver', width: '75vw', margin: '4vh auto', marginTop:'4vh' }} />

  <Box sx={{ marginBottom: '30px',   height:'auto' }}>
    <Typography 
      variant="h5" 
      gutterBottom 
      sx={{ 
        textAlign: 'center', 
        marginBottom: '20px', 
        fontFamily: 'Tahoma', 
        
        color: theme.palette.text.primary 
      }}
    >
      Miscellaneous
    </Typography>
    <Grid container spacing={is1280?40:isTablet ? 25 :isBigTablet?30: 2} sx={{marginLeft:is1280?'-1vw':is1024?'0vw':isTablet?'-2vw':isBigTablet?'-3vw':isMobile?'8.5vw':'33vw'}}>
              
      {Miscellaneous.map((portal, index) => (
        
      <Grid item xs={12} sm={2} key={index}>
        
        <Card
          sx={{
            backgroundColor: theme.palette.background.paper,
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            borderRadius: '10px',
            border: `1px solid ${theme.palette.background.default}`,
            textAlign: 'center',
            padding: isTablet ? '1.5vw' :isBigTablet?'1.5vw': '20px',  // Adjust for tablet
            marginLeft: isTablet ? '1vw' :isBigTablet?'1vw': '0vw',  // Adjust for tablet
            height: '100%',
            width: isMobile ? '60vw' : isTablet ? '20vw' :isBigTablet?'20vw': '13vw',
          }}
        >
          
          <CardContent>
            <Button
              variant="contained"
              color="primary"
              href={portal.url}
              target="_blank"
              startIcon={portal.icon}
              fullWidth
              sx={{
                display: 'flex',
                padding: isTablet ? '1vw' :isBigTablet?'1vw': '10px',
                color: 'white',
                backgroundColor: theme.palette.primary.secondary,
                '&:hover': {
                  backgroundColor: theme.palette.primary.lighter,
                },
              }}
            >
              {portal.name}
              {portal.vpnIcon}
            </Button>
            <Typography variant="body2" sx={{ color: theme.palette.text.secondary, fontFamily: 'Tahoma', marginTop: '10px' }}>
              {portal.description}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
  ))}
</Grid>
</Box>
        <Box
          sx={{
            backgroundColor: theme.palette.background.default,
            color: 'white',
            padding: '10px 0',
            textAlign: 'center',
            marginTop: '50px',
            position: 'relative',
            bottom: 0,
            width: '100%',
            height: '10vh',
          }}
        >
          <Typography variant="body1" sx={{color:theme.palette.text.secondary}}>
            © 2024 IIIT Hyderabad Portals Website. All rights reserved.
          </Typography>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
