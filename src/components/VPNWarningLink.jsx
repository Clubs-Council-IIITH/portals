import { useState, useCallback } from "react";
import {
  Button,
  Tooltip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useIntranetAccess } from "@/providers/IntranetAccessProvider";

const VPNWarningLink = ({ link, ...buttonProps }) => {
  const intranetAccessible = useIntranetAccess();
  const [openWarning, setOpenWarning] = useState(false);

  const handleConfirmRedirect = useCallback(() => {
    setOpenWarning(false);
    window.open(link.url, "_blank", "noopener,noreferrer");
  }, [link.url]);

  const handleVPNRedirect = useCallback(() => {
    setOpenWarning(false);
    window.open("https://vpn.iiit.ac.in", "_blank", "noopener,noreferrer");
  }, []);

  const handleLinkClick = (e) => {
    e.preventDefault();
    if (!link.requiresVPN || intranetAccessible) {
      handleConfirmRedirect();
    } else {
      setOpenWarning(true);
    }
  };

  return (
    <>
      <Tooltip
        title={<span style={{ fontSize: "0.8rem" }}>{link.url}</span>}
        followCursor
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
          Internal Network Access Required
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="vpn-warning-description">
            Access to this link is restricted to the internal network. It
            appears you are not currently connected to the internal network or
            VPN.
            <br />
            <br />
            Please connect to the VPN or ensure you are on the internal network
            before proceeding. For additional details about VPN access, visit
            the VPN site.
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
