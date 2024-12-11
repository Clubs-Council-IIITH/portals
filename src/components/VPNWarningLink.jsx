"use client";

import { useState, useEffect } from "react";
import {
  Button,
  Tooltip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import axios from "axios";

const checkUserIP = async (setUserIP) => {
  try {
    // Use a public IP detection service
    const response = await axios.get("https://api.ipify.org?format=json");
    setUserIP(response.data.ip);
  } catch (error) {
    console.error("Error fetching IP:", error);
  }
};

const VPNWarningLink = ({ link, ...buttonProps }) => {
  const [openWarning, setOpenWarning] = useState(false);
  const [userIP, setUserIP] = useState(null);

  useEffect(() => {
    checkUserIP(setUserIP);
  }, []);

  const handleLinkClick = (e) => {
    // Check if IP is not in the internal network range
    if (link.requiresVPN && userIP && !userIP.startsWith("10.")) {
      e.preventDefault();
      setOpenWarning(true);
    } else handleConfirmRedirect();
  };

  const handleConfirmRedirect = () => {
    setOpenWarning(false);
    window.location.href = link.url;
  };

  const handleVPNRedirect = () => {
    setOpenWarning(false);
    window.location.href = "https://vpn.iiit.ac.in";
  };

  return (
    <>
      <Tooltip
        title={<span style={{ fontSize: "0.8rem" }}>{link.url}</span>}
        followCursor={true}
      >
        <Button {...buttonProps} onClick={handleLinkClick}>
          {link.name}
        </Button>
      </Tooltip>

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
            Access to this link is restricted to the internal network. Your
            current IP address ({userIP}) does not appear to fall within the
            allowed internal network range.
            <br />
            Please connect to the VPN before proceeding. For additional details
            about VPN access, visit the VPN site.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenWarning(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleVPNRedirect} color="secondary">
            VPN Site
          </Button>
          <Button
            onClick={handleConfirmRedirect}
            color="secondary"
            autoFocus
            variant="outlined"
          >
            Proceed
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default VPNWarningLink;
