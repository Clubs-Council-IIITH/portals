import React from 'react';
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


const theme = createTheme({
  palette: {
    primary: {
      main: '#420303', 
    },
    secondary: {
      main: '#420303',
    },
  },
});

function App() {
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
    { name: 'IT Self Help', url: 'https://self-help.iiit.ac.in/', icon: <PeopleIcon /> },
    { name: 'Password Reset ( LDAP/802.1x )', url: 'https://passwordreset.iiit.ac.in/', icon: <PeopleIcon /> },
  ];

  return (
    <ThemeProvider theme={theme}>
      <div className="background" style={{ backgroundColor: '#000000', minHeight: '100vh' }}>
        <AppBar position="static" sx={{ backgroundColor: '#420303', height:'10vh' }}>
          <Toolbar>
            <Box
              component="img"
              src="/iiit-logo-white.png"
              alt="Logo"
              sx={{
                marginTop: 1,
                marginRight: 2,
                width: '8vw',  
                height: 'auto', 
              }}
            />
          </Toolbar>
        </AppBar>
        
        <Box sx={{ marginBottom: '30px', marginLeft: '15vw', marginTop: '2vw' }}>
          <Typography variant="h5" gutterBottom sx={{ textAlign: 'center', marginBottom: '20px', marginRight: '15vw', color: 'white' }}>
            Popular Portals
          </Typography>
          <Grid container spacing={2}>
            {popularPortals.map((portal, index) => (
              <Grid item xs={12} sm={2} key={index}>
                <Card
                  sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    borderRadius: '10px',
                    border: '1px solid rgba(255, 255, 255, 0.5)',
                    textAlign: 'center',
                    padding: '20px',
                    position: 'center',
                    height: '13vh'
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
                        backgroundColor: '#BO3060',
                        '&:hover': {
                          backgroundColor: '#D03D56', 
                        },
                      }}
                    >
                      {portal.name}
                      {portal.vpnIcon}
                    </Button>
                    <Typography variant="body2" sx={{ color: 'white', marginTop: '10px' }}>
                      {portal.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Container
          maxWidth="lg"
          sx={{
            backgroundColor: 'rgba(255, 255, 255, 0.01)', 
            borderRadius: '10px',
            padding: '30px',
          }}
        >
          <Grid container spacing={3} sx={{ borderSpacing: '20px' }}>
            {linkCategories.map((category, index) => (
              <Grid item xs={12} sm={4} key={index} sx={{ padding: '0 10px' }}>
                <Card
                  sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    boxShadow: 'none',
                    borderRadius: '10px',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    textAlign: 'center',
                    padding: '20px', 
                    height: '35vh',
                    marginLeft: '0.5vw',
                  }}
                >
                  <CardContent>
                    <Typography variant="h6" gutterBottom sx={{ color: 'white' }}>
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
                            backgroundColor: '#D03D56',
                            '&:hover': {
                              backgroundColor: '#420303', 
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

        <Box sx={{ marginBottom: '30px', marginLeft: '34vw', width: '100vw' }}>
          <Typography variant="h5" gutterBottom sx={{ textAlign: 'center', marginBottom: '20px', marginRight: '69vw', color: 'white' }}>
            Miscellaneous
          </Typography>
          <Grid container spacing={2}>
            {Miscellaneous.map((portal, index) => (
              <Grid item xs={12} sm={2} key={index}>
                <Card
                  sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    borderRadius: '10px',
                    border: '1px solid rgba(255, 255, 255, 0.5)',
                    textAlign: 'center',
                    padding: '20px',
                    position: 'center',
                    height: '10vh',
                    width: '25vh',
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
                        backgroundColor: '#BO3060',
                        '&:hover': {
                          backgroundColor: '#D03D56', 
                        },
                      }}
                    >
                      {portal.name}
                    </Button>
                    <Typography variant="body2" sx={{ color: 'white', marginTop: '10px' }}>
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
            backgroundColor: '#420303',
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
          <Typography variant="body1">
            © 2024 IIIT Hyderabad Portals Website. All rights reserved.
          </Typography>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
