"use client";

import { useState, useEffect } from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  AppBar,
  Toolbar,
  Divider,
  Switch,
  CircularProgress,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

import {
  linkCategories,
  popularPortals,
  Miscellaneous,
} from "@/constants/constants";
import Footer from "@/components/Footer";
import VPNWarningLink from "@/components/VPNWarningLink";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#5F6F65",
      light: "#808D7C",
    },
    background: {
      default: "#F8EDED",
      paper: "#ffffff",
    },
    text: {
      primary: "#000",
      secondary: "#555",
    },
    switch: "#7b6c7e",
  },
  typography: {
    fontFamily: "Tahoma, Arial",
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#4b2138", // Deep wine/burgundy
      light: "#6d3c52", // Lighter wine
    },
    background: {
      default: "#0a0509", // Almost black with wine tint
      paper: "#150a11", // Very dark wine-black
    },
    text: {
      primary: "#f5e8ef", // Soft white with pink tint
      secondary: "#f1e1e9", // Muted rose-grey
    },
    switch: "#6d3c52", // Match primary light
  },
  typography: {
    fontFamily: "Tahoma, Arial",
  },
});

// const darkTheme = createTheme({
//   palette: {
//     mode: "dark",
//     primary: {
//       main: "#4b2138",
//       light: "#6d3c52",
//     },
//     background: {
//       default: "#1b0c1a",
//       paper: "#1b0c1a",
//     },
//     text: {
//       primary: "#fff",
//       secondary: "#f1e1e9",
//     },
//     switch: "#ab82e0",
//   },
//   typography: {
//     fontFamily: "Tahoma, Arial",
//   },
// });

export default function HomeComponent() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const theme = darkMode ? darkTheme : lightTheme;

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setDarkMode(savedTheme === "dark");
    else {
      const userPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
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
          <style>{`
            @keyframes fadeIn {
              from {
                opacity: 0;
                transform: translateY(20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            @keyframes slideDown {
              from {
                opacity: 0;
                transform: translateY(-20px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            .fade-in {
              animation: fadeIn 0.6s ease-out forwards;
            }

            .slide-down {
              animation: slideDown 0.5s ease-out;
            }

            .card-hover {
              transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            }

            .card-hover:hover {
              transform: translateY(-8px);
              box-shadow: ${
                darkMode
                  ? "0 12px 24px rgba(0, 0, 0, 0.6)"
                  : "0 12px 24px rgba(0, 0, 0, 0.15)"
              } !important;
            }

            .section-title {
              position: relative;
              display: inline-block;
              padding-bottom: 8px;
            }

            .section-title::after {
              content: '';
              position: absolute;
              bottom: 0;
              left: 50%;
              transform: translateX(-50%);
              width: 60px;
              height: 3px;
              background: linear-gradient(90deg, ${
                theme.palette.primary.main
              }, ${theme.palette.primary.light});
              border-radius: 2px;
            }

            .button-glow {
              transition: all 0.3s ease;
            }

            .button-glow:hover {
              box-shadow: 0 0 20px ${theme.palette.primary.main}66;
            }

            .grid-item-stagger {
              animation: fadeIn 0.6s ease-out forwards;
              opacity: 0;
            }
          `}</style>

          <Box
            style={{
              backgroundColor: theme.palette.background.default,
              minHeight: "100vh",
              width: "100%",
            }}
          >
            {/* Enhanced AppBar */}
            <AppBar
              position="static"
              elevation={0}
              className="slide-down"
              sx={{
                backgroundColor: theme.palette.background.paper,
                borderBottom: `1px solid ${
                  darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"
                }`,
              }}
            >
              <Toolbar sx={{ padding: { xs: "8px 16px", md: "12px 24px" } }}>
                <Box
                  component="img"
                  src={darkMode ? "/iiit-logo-white.png" : "/iiith_logo.png"}
                  alt="Logo"
                  sx={{
                    marginRight: 2,
                    width: isMobile ? "40vw" : "8vw",
                    height: "auto",
                    filter: darkMode
                      ? "drop-shadow(0 0 10px rgba(147, 103, 200, 0.3))"
                      : "none",
                    transition: "filter 0.3s ease",
                  }}
                />
                <Box sx={{ flexGrow: 1 }} />
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    backgroundColor: darkMode
                      ? theme.palette.primary.main
                      : "rgba(0,0,0,0.05)",
                    borderRadius: "24px",
                    padding: "4px 8px",
                      transition: "background-color 0.3s ease",
                    px: 1.5,
                  }}
                >
                  <Brightness7Icon
                    sx={{
                      color: !darkMode
                        ? theme.palette.primary.main
                        : theme.palette.text.primary,
                      fontSize: "1.2rem",
                      marginRight: "3px",
                      transition: "color 0.3s ease",
                    }}
                  />
                  <Switch
                    checked={darkMode}
                    onChange={toggleTheme}
                    sx={{
                      "& .MuiSwitch-track": {
                        backgroundColor: theme.palette.primary.main,
                        opacity: 0.5,
                      },
                      "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                        backgroundColor: theme.palette.text.secondary,
                        opacity: 0.4,
                      },
                      "& .MuiSwitch-switchBase.Mui-checked": {
                        color: theme.palette.text.secondary,
                      },
                    }}
                  />
                  <Brightness4Icon
                    sx={{
                      color: darkMode
                        ? theme.palette.text.secondary + "cc"
                        : theme.palette.text.secondary,
                      fontSize: "1.2rem",
                      marginLeft: "3px",
                      transition: "color 0.3s ease",
                    }}
                  />
                </Box>
              </Toolbar>
            </AppBar>

            {/* Popular Portals Section */}
            <Box
              sx={{
                marginTop: { xs: "40px", md: "60px" },
                marginBottom: "60px",
              }}
              className="fade-in"
            >
              <Container maxWidth="lg">
                <Typography
                  variant="h4"
                  className="section-title"
                  sx={{
                    textAlign: "center",
                    marginBottom: "40px",
                    fontFamily: "Georgia, serif",
                    fontWeight: 600,
                    color: theme.palette.text.primary,
                    display: "block",
                    width: "100%",
                  }}
                >
                  Popular Portals
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                  {popularPortals.map((portal, index) => (
                    <Grid
                      item
                      key={index}
                      size={{
                        xs: 12,
                        sm: 6,
                        md: 4,
                        lg: 3,
                      }}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                      className="grid-item-stagger"
                      style={{
                        animationDelay: `${index * 0.1}s`,
                      }}
                    >
                      <Card
                        className="card-hover"
                        sx={{
                          width: "100%",
                          maxWidth: "280px",
                          backgroundColor: theme.palette.background.paper,
                          boxShadow: darkMode
                            ? "0 4px 16px rgba(255, 255, 255, 0.08)"
                            : "0 4px 16px rgba(0, 0, 0, 0.1)",
                          borderRadius: "16px",
                          border: `1px solid ${
                            darkMode
                              ? "rgba(255,255,255,0.1)"
                              : "rgba(0,0,0,0.08)"
                          }`,
                          overflow: "hidden",
                        }}
                      >
                        <Box
                          sx={{
                            background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
                            height: "8px",
                          }}
                        />
                        <CardContent sx={{ padding: "24px" }}>
                          <VPNWarningLink
                            link={{
                              name: portal.name,
                              url: portal.url,
                              requiresVPN: portal.requiresVPN,
                            }}
                            variant="contained"
                            className="button-glow"
                            color="primary"
                            startIcon={portal.icon}
                            sx={{
                              padding: "12px",
                              color: "white",
                              backgroundColor: theme.palette.primary.main,
                              borderRadius: "10px",
                              textTransform: "none",
                              fontSize: "1rem",
                              fontWeight: 500,
                              "&:hover": {
                                backgroundColor: theme.palette.primary.light,
                              },
                            }}
                            fullWidth
                          />
                          <Typography
                            variant="body2"
                            sx={{
                              color: theme.palette.text.secondary,
                              fontFamily: "Tahoma",
                              marginTop: "16px",
                              lineHeight: 1.6,
                              textAlign: "center",
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

            {/* Enhanced Divider */}
            <Divider
              sx={{
                width: "80%",
                margin: "60px auto",
                background: `linear-gradient(90deg, transparent, ${
                  darkMode ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)"
                }, transparent)`,
                height: "1px",
                border: "none",
              }}
            />

            {/* Link Categories Section */}
            <Container
              maxWidth="xl"
              sx={{ marginBottom: "60px" }}
              className="fade-in"
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  gap: 4,
                  alignItems: { xs: "center", md: "stretch" },
                  justifyContent: "center",
                }}
              >
                {linkCategories.map((category, index) => (
                  <Box
                    key={index}
                    sx={{
                      width: { xs: "90%", sm: "80%" },
                      flex: { md: "1 1 0" },
                      minWidth: 0,
                      display: "flex",
                      maxWidth: { md: "350px" },
                    }}
                    className="grid-item-stagger"
                    style={{
                      animationDelay: `${index * 0.15}s`,
                    }}
                  >
                    <Card
                      className="card-hover"
                      sx={{
                        backgroundColor: theme.palette.background.paper,
                        boxShadow: darkMode
                          ? "0 4px 16px rgba(0, 0, 0, 0.4)"
                          : "0 4px 16px rgba(0, 0, 0, 0.1)",
                        borderRadius: "16px",
                        border: `1px solid ${
                          darkMode
                            ? "rgba(255,255,255,0.1)"
                            : "rgba(0,0,0,0.08)"
                        }`,
                        width: "100%",
                        height: "100%",
                      }}
                    >
                      <CardContent sx={{ padding: "28px" }}>
                        <Typography
                          variant="h5"
                          gutterBottom
                          sx={{
                            color: theme.palette.text.primary,
                            fontFamily: "Tahoma",
                            fontWeight: 600,
                            marginBottom: "24px",
                            textAlign: "center",
                            position: "relative",
                            paddingBottom: "12px",
                            "&::after": {
                              content: '""',
                              position: "absolute",
                              bottom: 0,
                              left: "50%",
                              transform: "translateX(-50%)",
                              width: "40px",
                              height: "3px",
                              backgroundColor: theme.palette.primary.main,
                              borderRadius: "2px",
                            },
                          }}
                        >
                          {category.title}
                        </Typography>

                        {category.links.map((link, i) => (
                          <Box key={i} sx={{ margin: "12px 0" }}>
                            <VPNWarningLink
                              link={link}
                              variant="contained"
                              className="button-glow"
                              color="primary"
                              startIcon={link.icon}
                              fullWidth
                              sx={{
                                padding: "12px",
                                color: "white",
                                backgroundColor: "#134B70",
                                borderRadius: "10px",
                                textTransform: "none",
                                fontWeight: 500,
                                "&:hover": {
                                  backgroundColor: "#1A6B8D",
                                },
                              }}
                            />
                          </Box>
                        ))}
                      </CardContent>
                    </Card>
                  </Box>
                ))}
              </Box>
            </Container>

            <Divider
              sx={{
                width: "80%",
                margin: "60px auto",
                background: `linear-gradient(90deg, transparent, ${
                  darkMode ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)"
                }, transparent)`,
                height: "1px",
                border: "none",
              }}
            />

            {/* Miscellaneous Section */}
            <Box sx={{ marginBottom: "60px" }} className="fade-in">
              <Container maxWidth="lg">
                <Typography
                  variant="h4"
                  className="section-title"
                  sx={{
                    textAlign: "center",
                    marginBottom: "40px",
                    fontFamily: "Tahoma",
                    fontWeight: 600,
                    color: theme.palette.text.primary,
                    display: "block",
                    width: "100%",
                  }}
                >
                  Miscellaneous
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                  {Miscellaneous.map((portal, index) => (
                    <Grid
                      item
                      key={index}
                      size={{
                        xs: 12,
                        sm: 6,
                        md: 4,
                        lg: 3,
                      }}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                      className="grid-item-stagger"
                      style={{
                        animationDelay: `${index * 0.1}s`,
                      }}
                    >
                      <Card
                        className="card-hover"
                        sx={{
                          width: "100%",
                          maxWidth: "280px",
                          backgroundColor: theme.palette.background.paper,
                          boxShadow: darkMode
                            ? "0 4px 16px rgba(0, 0, 0, 0.4)"
                            : "0 4px 16px rgba(0, 0, 0, 0.1)",
                          borderRadius: "16px",
                          border: `1px solid ${
                            darkMode
                              ? "rgba(255,255,255,0.1)"
                              : "rgba(0,0,0,0.08)"
                          }`,
                          overflow: "hidden",
                        }}
                      >
                        <Box
                          sx={{
                            background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
                            height: "8px",
                          }}
                        />
                        <CardContent sx={{ padding: "24px" }}>
                          <VPNWarningLink
                            link={portal}
                            variant="contained"
                            className="button-glow"
                            color="primary"
                            startIcon={portal.icon}
                            fullWidth
                            sx={{
                              padding: "12px",
                              color: "white",
                              backgroundColor: theme.palette.primary.main,
                              borderRadius: "10px",
                              textTransform: "none",
                              fontSize: "1rem",
                              fontWeight: 500,
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
                              marginTop: "16px",
                              lineHeight: 1.6,
                              textAlign: "center",
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

            <Footer theme={theme} darkMode={darkMode} />
          </Box>
        </ThemeProvider>
      )}
    </>
  );
}
