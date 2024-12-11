"use client";

import React, { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  AppBar,
  Toolbar,
  Divider,
  Switch,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import axios from "axios";

import { linkCategories, popularPortals, Miscellaneous } from "@/app/constants";
import Footer from "@/components/Footer";

const VPNWarningLink = ({ link, ...buttonProps }) => {
  const [openWarning, setOpenWarning] = useState(false);
  const [userIP, setUserIP] = useState(null);

  useEffect(() => {
    const checkUserIP = async () => {
      try {
        // Use a public IP detection service
        const response = await axios.get("https://api.ipify.org?format=json");
        setUserIP(response.data.ip);
      } catch (error) {
        console.error("Error fetching IP:", error);
      }
    };

    checkUserIP();
  }, []);

  const handleLinkClick = (e) => {
    // Check if IP is not in the internal network range
    if (link.requiresVPN && userIP && !userIP.startsWith("10.")) {
      e.preventDefault();
      setOpenWarning(true);
    }
  };

  const handleConfirmRedirect = () => {
    setOpenWarning(false);
    window.location.href = link.url;
  };

  return (
    <>
      <Button {...buttonProps} href={link.url} onClick={handleLinkClick}>
        {link.name}
      </Button>

      <Dialog
        open={openWarning}
        onClose={() => setOpenWarning(false)}
        aria-labelledby="vpn-warning-dialog"
        aria-describedby="vpn-warning-description"
      >
        <DialogTitle id="vpn-warning-dialog">
          Internal Network Access
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="vpn-warning-description">
            This link is only accessible through the internal network. Your
            current IP ({userIP}) is not within the internal network range.
            Please connect to the VPN before proceeding.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenWarning(false)} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleConfirmRedirect} color="primary" autoFocus>
            Proceed
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

// Define themes first
const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#5F6F65",
      secondary: "#2F3645",
      light: "#808D7C",
      lighter: "#939185",
    },
    background: {
      default: "#F8EDED",
      paper: "#ffffff",
    },
    switch: {
      main: "rgb(235, 219, 43)",
    },
  },
  typography: {
    fontFamily: "Tahoma, Arial",
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#bb86fc",
    },
    background: {
      default: "#121212",
      paper: "#1d1d1d",
    },
    text: {
      primary: "#ffffff",
      secondary: "#aaaaaa",
    },
  },
  typography: {
    fontFamily: "Tahoma, Arial",
  },
});

export default function HomeComponent() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false); // State to toggle theme
  const theme = darkMode ? darkTheme : lightTheme;

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setDarkMode(savedTheme === "dark");
    else {
      // Get user system preference
      const userPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      setDarkMode(userPrefersDark);
    }
    setLoading(false);
  }, []);

  const toggleTheme = () => {
    const newTheme = !darkMode ? "dark" : "light";
    setDarkMode(!darkMode);
    localStorage.setItem("theme", newTheme);
  };

  const isMobile = useMediaQuery("(max-width:600px)");
  const isTablet = useMediaQuery("(min-width:601px) and (max-width:900px)");
  const isBigTablet = useMediaQuery("(min-width:901px) and (max-width:1400px)");
  // const is1024 = useMediaQuery("(width:1024px)");
  // const is1280 = useMediaQuery("(width:1280px)");

  return (
    <>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CircularProgress />
        </div>
      ) : (
        <ThemeProvider theme={theme}>
          <div
            className="background"
            style={{
              backgroundColor: theme.palette.background.default,
              // maxWidth: "100vw",
              overflow: "hidden",
              width: "100%",
              height: "auto",
            }}
          >
            <AppBar
              position="static"
              sx={{
                backgroundColor: theme.palette.background.default,
                height: "auto",
              }}
            >
              <Toolbar>
                <Box
                  component="img"
                  src={darkMode ? "/iiit-logo-white.png" : "/iiith_logo.png"}
                  alt="Logo"
                  sx={{
                    marginTop: 1,
                    marginRight: 2,
                    width: isMobile ? "40vw" : "8vw",
                    height: "auto",
                    marginBottom: "1.5vh",
                  }}
                />
                <Switch
                  checked={darkMode}
                  onChange={toggleTheme}
                  icon={
                    <Brightness7Icon
                      fontSize="small"
                      sx={{ color: darkMode ? "#B98C8C" : "#7b6c7e" }}
                    />
                  }
                  checkedIcon={<Brightness4Icon fontSize="small" />}
                  sx={{
                    marginLeft: "auto",
                    "& .MuiSwitch-track": {
                      backgroundColor: darkMode ? "#FFD700" : "#FFD700", // Yellowish color for the track
                    },
                    "& .Mui-checked + .MuiSwitch-track": {
                      backgroundColor: "#FFD700", // Yellowish color for the track when checked
                    },
                    transform: "scale(1.5)",
                  }}
                />
              </Toolbar>
              {/* <Typography sx={{ marginLeft: 'auto', color: theme.palette.text.primary }}>
              {darkMode ? 'Dark Mode' : 'Light Mode'}
            </Typography> */}
            </AppBar>

            <Box
              sx={{
                marginBottom: "30px",
                marginTop: isMobile ? "5vh" : "2vh",
                marginLeft: "auto",
                marginRight: "auto",
                paddingLeft: isMobile ? "auto" : "5vw",
                paddingRight: isMobile ? "auto" : "5vw",
              }}
            >
              <Container
                maxWidth={isMobile ? "md" : isTablet ? "md" : "lg"}
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.01)",
                  borderRadius: "10px",
                  padding: "30px",
                  height: "auto",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{
                    textAlign: "center",
                    marginBottom: "20px",
                    fontFamily: "Georgia",
                    color: theme.palette.text.primary,
                  }}
                >
                  Popular Portals
                </Typography>
                <Grid container spacing={5} justifyContent="center">
                  {popularPortals.map((portal, index) => (
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      md={4}
                      lg={3.5}
                      key={index}
                      sx={{ display: "flex", justifyContent: "center" }}
                    >
                      <Card
                        sx={{
                          width: isMobile
                            ? "90vw"
                            : isTablet
                              ? "40vw"
                              : isBigTablet
                                ? "40vw"
                                : "15vw",
                          backgroundColor: theme.palette.background.paper,
                          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                          borderRadius: "10px",
                          border: `1px solid ${theme.palette.background.default}`,
                          textAlign: "center",
                          padding: "10px",
                          paddingBottom: "20px",
                          height: "100%",
                          margin: "auto",
                        }}
                      >
                        <CardContent>
                          <VPNWarningLink
                            link={{
                              name: portal.name,
                              url: portal.url,
                              requiresVPN: portal.requiresVPN, // Assuming you add this property to your portal objects
                            }}
                            variant="contained"
                            color="primary"
                            startIcon={portal.icon}
                            sx={{
                              padding: "10px",
                              color: "white",
                              backgroundColor: theme.palette.primary.main,
                              "&:hover": {
                                backgroundColor: theme.palette.primary.light,
                              },
                            }}
                            fullWidth
                          />
                          <Typography
                            variant="body1"
                            sx={{
                              color: theme.palette.text.secondary,
                              fontFamily: "Times New Roman",
                              marginTop: "10px",
                            }}
                          >
                            {portal.description}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Container>
            </Box>

            <Divider
              sx={{
                bgcolor: "silver",
                width: "75vw",
                margin: "0vh auto",
                marginTop: "7vh",
              }}
            />

            <Container
              maxWidth="lg"
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.01)",
                borderRadius: "10px",
                padding: "30px",
                height: "auto",
                marginLeft: isMobile ? "1vw" : "auto",
                marginRight: "auto",
                paddingLeft: "auto",
                paddingRight: "auto",
              }}
            >
              <Grid
                container
                spacing={3}
                justifyContent="center"
                sx={{ borderSpacing: "20px" }}
              >
                {linkCategories.map((category, index) => (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    key={index}
                    sx={{
                      padding: "0 10px",
                      marginTop: "20px",
                    }}
                  >
                    <Card
                      sx={{
                        backgroundColor: theme.palette.background.paper,
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                        borderRadius: "10px",
                        border: `1px solid ${theme.palette.background.default}`,
                        textAlign: "center",
                        padding: "10px",
                        paddingBottom: "20px",
                        height: "100%",
                        marginLeft: "0.5vw",
                      }}
                    >
                      <CardContent>
                        <Typography
                          variant="h5"
                          gutterBottom
                          sx={{
                            color: theme.palette.text.primary,
                            fontFamily: "Tahoma",
                            marginBottom: "2vh",
                          }}
                        >
                          {category.title}
                        </Typography>

                        {category.links.map((link, i) => (
                          <Box key={i} sx={{ margin: "10px 0" }}>
                            <VPNWarningLink
                              link={link}
                              variant="contained"
                              color="primary"
                              startIcon={link.icon}
                              fullWidth
                              sx={{
                                padding: "10px",
                                color: "white",
                                backgroundColor: "#134B70",
                                "&:hover": {
                                  backgroundColor: "#1A6B8D",
                                },
                              }}
                            />
                          </Box>
                        ))}
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Container>

            <Divider
              sx={{
                bgcolor: "silver",
                width: "75vw",
                margin: "4vh auto",
                marginTop: "4vh",
              }}
            />

            <Box
              sx={{
                marginBottom: "30px",
                marginTop: isMobile ? "5vh" : "2vh",
                marginLeft: "auto",
                marginRight: "auto",
                paddingLeft: isMobile ? "auto" : "5vw",
                paddingRight: isMobile ? "auto" : "5vw",
              }}
            >
              <Container
                maxWidth={isMobile ? "md" : isTablet ? "md" : "lg"} // Adjust container size based on screen
                sx={{
                  backgroundColor: "rgba(255, 255, 255, 0.01)",
                  borderRadius: "10px",
                  padding: "30px",
                  height: "auto",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                <Typography
                  variant="h5"
                  gutterBottom
                  sx={{
                    textAlign: "center",
                    marginBottom: "20px",
                    fontFamily: "Tahoma",
                    color: theme.palette.text.primary,
                  }}
                >
                  Miscellaneous
                </Typography>
                <Grid container spacing={5} justifyContent="center">
                  {Miscellaneous.map((portal, index) => (
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      md={4}
                      lg={3}
                      key={index}
                      sx={{ display: "flex", justifyContent: "center" }} // Center each card
                    >
                      <Card
                        sx={{
                          width: isMobile
                            ? "90vw"
                            : isTablet
                              ? "40vw"
                              : isBigTablet
                                ? "40vw"
                                : "15vw", // Responsive width
                          backgroundColor: theme.palette.background.paper,
                          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                          borderRadius: "10px",
                          border: `1px solid ${theme.palette.background.default}`,
                          textAlign: "center",
                          padding: "10px",
                          paddingBottom: "20px",
                          height: "100%",
                          margin: "auto", // Center the card
                        }}
                      >
                        <CardContent>
                          <VPNWarningLink
                            link={portal} // Pass the portal object to VPNWarningLink
                            variant="contained"
                            color="primary"
                            startIcon={portal.icon}
                            fullWidth
                            sx={{
                              padding: "10px",
                              color: "white",
                              backgroundColor: theme.palette.primary.main,
                              "&:hover": {
                                backgroundColor: theme.palette.primary.light,
                              },
                            }}
                          />
                          <Typography
                            variant="body2"
                            sx={{
                              color: theme.palette.text.secondary,
                              fontFamily: "Tahoma",
                              marginTop: "10px",
                            }}
                          >
                            {portal.description}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Container>
            </Box>

            <Footer theme={theme} />
          </div>
        </ThemeProvider>
      )}
    </>
  );
}
