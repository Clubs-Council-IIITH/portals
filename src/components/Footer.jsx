"use client";

import React from "react";
import { Typography, Box, Divider } from "@mui/material";

export default function HomeComponent({ theme, darkMode }) {
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        color: "white",
        padding: "10px 0",
        textAlign: "center",
        marginTop: 2,
        marginBottom: "5px",
      }}
    >
      <Divider
        sx={{
          width: "80%",
          margin: "30px auto",
          background: `linear-gradient(90deg, transparent, ${
            darkMode ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)"
          }, transparent)`,
          height: "1px",
          border: "none",
        }}
      />
      <Typography
        variant="body2"
        sx={{
          color: theme.palette.text.secondary,
          marginLeft: "10px",
          marginRight: "10px",
        }}
      >
        © 2025, IIIT Hyderabad. All rights reserved.
        <br />
        Designed by{" "}
        <a
          href="https://github.com/bhavberi"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          Bhav
        </a>{" "}
        and{" "}
        <a
          href="https://github.com/The-Broken-Keyboard"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          Shreyansh
        </a>{" "}
        (WebAdmins Team)
        <br />
        Page last updated in November, 2025
      </Typography>
    </Box>
  );
}
