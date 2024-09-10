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
  const linkCategories = [
    {
      title: 'Academics',
      links: [
        { name: 'Courses', url: 'https://courses.iiit.ac.in', icon: <SchoolIcon /> },
        { name: 'Old Courses Portal', url: 'https://courses.iiit.ac.in', icon: <MenuBookIcon /> },
        { name: 'Intranet', url: 'https://intranet.iiit.ac.in', icon: <WifiIcon /> },
        { name: 'Library', url: 'https://library.iiit.ac.in', icon: <LibraryBooksIcon /> },
      ],
    },
    {
      title: 'Research',
      links: [
        { name: 'Research Centres', url: 'https://web2py.iiit.ac.in/research_centres', icon: <ResearchIcon /> },
        { name: 'Publications Portal', url: 'https://web2py.iiit.ac.in/research_centres/publications/', icon: <LibraryBooksIcon /> },
        { name: 'Seminar', url: 'https://web2py.iiit.ac.in/seminar/default/home', icon: <SchoolIcon /> },
      ],
    },
    {
      title: 'Campus Life',
      links: [
        { name: 'Alumni', url: 'https://alumni.iiit.ac.in/', icon: <PeopleIcon /> },
        { name: 'Blog', url: 'https://blogs.iiit.ac.in/', icon: <HomeIcon /> },
        { name: 'Courier', url: 'https://courier.iiit.ac.in/portal/main1.php', icon: <SelfImprovementIcon /> },
        { name: 'Mess', url: 'https://mess.iiit.ac.in', icon: <SelfImprovementIcon /> },
      ],
    },
  ];

  const popularPortals = [
    { name: 'IMS', url: 'https://ims.iiit.ac.in', icon: <SchoolIcon />,vpnIcon: <VpnLockIcon /> , description: 'Integrated Management System' },
    { name: 'Intranet', url: 'https://intranet.iiit.ac.in', icon: <WifiIcon />, description: 'Internal Network Access' },
    { name: 'Mess', url: 'https://mess.iiit.ac.in', icon: <SelfImprovementIcon />, description: 'Mess Menu and Services' },
    { name: 'IT Self Help', url: 'https://self-help.iiit.ac.in/', icon: <PeopleIcon />, description: 'Technical Assistance' },
    { name: 'Blog', url: 'https://blogs.iiit.ac.in', icon: <HomeIcon />, description: 'Campus Blogs and Stories' },
  ];

  const Miscellaneous = [
    { name: 'IT Self Help', url: 'https://self-help.iiit.ac.in/', icon: <PeopleIcon />, description: 'IT help website' },
    { name: 'Password Reset', url: 'https://passwordreset.iiit.ac.in/', icon: <PeopleIcon />, description:'Password Reset' },
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
          <Switch checked={darkMode} onChange={toggleTheme} sx={{ marginLeft: 'auto' }} />
            {/* <Typography sx={{ marginLeft: 'auto', color: theme.palette.text.primary }}>
              {darkMode ? 'Dark Mode' : 'Light Mode'}
            </Typography> */}
        </AppBar>
        
        <Box sx={{ marginBottom: '30px', marginLeft: isMobile? '0vw':'15vw', marginTop: '2vw', height:'auto' }}>
          <Typography variant="h5" gutterBottom sx={{ textAlign: 'center', marginBottom: '20px', fontFamily: 'Georgia', marginRight: isMobile? '3vw':'15vw', color: theme.palette.text.primary }}>
            Popular Portals
          </Typography>
            
          <Grid container spacing={2}>
            {popularPortals.map((portal, index) => (
              <Grid item xs={12} sm={2} key={index}>
                <Card
                  sx={{
                    backgroundColor: theme.palette.background.paper,
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    borderRadius: '10px', 
                    border: `1px solid ${theme.palette.background.default}`,
                    textAlign: 'center',
                    padding: '20px',
                    paddingBottom: '0vh',
                    height: '100%',
                    marginLeft: isMobile? '13vw':'0vw',
                    width: isMobile? '60vw':'10vw',
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
                              backgroundColor: '#7A1CAC', 
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

        <Box sx={{ marginBottom: '30px', marginLeft: isMobile? '10vw':'34vw', width: '100vw',height:'auto'}}>
          <Typography variant="h5" gutterBottom sx={{ textAlign: 'center', marginBottom: '20px', fontFamily:'Tahoma', marginRight: isMobile? '20vw':'68vw', color: theme.palette.text.secondary }}>
            Miscellaneous
          </Typography>
          <Grid container spacing={2}>
            {Miscellaneous.map((portal, index) => (
              <Grid item xs={12} sm={2} key={index}>
                <Card
                  sx={{
                    backgroundColor: theme.palette.background.paper, 
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    borderRadius: '10px',
                    border: `1px solid ${theme.palette.background.default}`,
                    textAlign: 'center',
                    padding: '20px',
                    paddingBottom: '0vh',
                    marginLeft: isMobile? '3vw':'0vw',
      
                    height: '100%',
                    width: isMobile? '60vw':'13vw',
                    
                    // overflow: 'hidden',
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
                        backgroundColor: theme.palette.primary.secondary,
                        '&:hover': {
                          backgroundColor: theme.palette.primary.lighter, 
                        },
                      }}
                    >
                      {portal.name}
                    </Button>
                    <Typography variant="body2" sx={{ color: theme.palette.text.secondary, fontFamily:'Tahoma', marginTop: '10px' }}>
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
