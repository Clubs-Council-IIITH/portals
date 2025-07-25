"use client";

import { useState } from "react";
import {
  Button,
  Tooltip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

const checkIntranetAccess = async () => {
  try {
    // Try to fetch from the intranet with a timeout of 2 seconds
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2000);

    await fetch("https://intranet.iiit.ac.in", {
      method: "HEAD",
      mode: "no-cors",
      signal: controller.signal,
    });

    clearTimeout(timeoutId);
    return true;
  } catch (error) {
    console.log("Intranet access check failed:", error.message);
    return false;
  }
};

const VPNWarningLink = ({ link, ...buttonProps }) => {
  const [openWarning, setOpenWarning] = useState(false);

  const handleLinkClick = async (e) => {
    e.preventDefault();

    if (!link.requiresVPN) {
      handleConfirmRedirect();
      return;
    }

    const hasIntranetAccess = await checkIntranetAccess();

    if (hasIntranetAccess) {
      handleConfirmRedirect();
    } else {
      setOpenWarning(true);
    }
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
        <Button 
          {...buttonProps} 
          onClick={handleLinkClick}
        >
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
          Internal Network Access Required
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="vpn-warning-description">
            Access to this link is restricted to the internal network. 
            It appears you are not currently connected to the internal network or VPN.
            <br />
            <br />
            Please connect to the VPN or ensure you are on the internal network before proceeding. 
            For additional details about VPN access, visit the VPN site.
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
            Continue
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default VPNWarningLink;