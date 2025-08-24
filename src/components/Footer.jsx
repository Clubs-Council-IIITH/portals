"use client";

import React from "react";
import { Typography, Box } from "@mui/material";

export default function HomeComponent({ theme }) {
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        color: "white",
        padding: "10px 0",
        textAlign: "center",
        marginTop: "20px",
        marginBottom: "5px",
      }}
    >
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
          href="https://github.com/The-Broken-Keyboard"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          Shreyansh
        </a>{" "}
        and{" "}
        <a
          href="https://github.com/bhavberi"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          Bhav
        </a>{" "}
        (WebAdmins Team)
        <br />
        Page last updated in August, 2025
      </Typography>
    </Box>
  );
}
