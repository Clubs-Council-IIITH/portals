import { useState, useCallback } from "react";
import {
  Button,
  Tooltip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Box,
  IconButton,
  Slide,
  useTheme,
  alpha,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { useIntranetAccess } from "@/providers/IntranetAccessProvider";
import React from "react";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const VPNWarningLink = ({ link, ...buttonProps }) => {
  const intranetAccessible = useIntranetAccess();
  const [openWarning, setOpenWarning] = useState(false);
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

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
        title={
          <Box sx={{ fontSize: "0.8rem", padding: "4px 8px" }}>
            <Box sx={{ fontWeight: 500, marginBottom: "2px" }}>{link.name}</Box>
            <Box sx={{ opacity: 0.8, fontSize: "0.75rem" }}>{link.url}</Box>
            {link.requiresVPN && !intranetAccessible && (
              <Box
                sx={{
                  marginTop: "4px",
                  display: "flex",
                  alignItems: "center",
                  gap: 0.5,
                  color: "#ffd700",
                  fontSize: "0.7rem",
                }}
              >
                <VpnKeyIcon sx={{ fontSize: "0.8rem" }} />
                VPN Required
              </Box>
            )}
          </Box>
        }
        followCursor
        placement="top"
        arrow
        TransitionProps={{ timeout: 300 }}
        slotProps={{
          tooltip: {
            sx: {
              backgroundColor: isDark
                ? "rgba(50, 50, 50, 0.98)"
                : "rgba(30, 30, 30, 0.95)",
              backdropFilter: "blur(8px)",
              border: `1px solid ${
                isDark ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.2)"
              }`,
              borderRadius: "8px",
              padding: "8px 12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
            },
          },
          arrow: {
            sx: {
              color: isDark
                ? "rgba(50, 50, 50, 0.98)"
                : "rgba(30, 30, 30, 0.95)",
            },
          },
        }}
      >
        <Button
          {...buttonProps}
          onClick={handleLinkClick}
          sx={{
            ...buttonProps.sx,
            position: "relative",
            overflow: "hidden",
            "@keyframes shimmer": {
              "0%": {
                transform: "translateY(-100%)",
                opacity: 0,
              },
              "50%": {
                opacity: 1,
              },
              "100%": {
                transform: "translateY(100%)",
                opacity: 0,
              },
            },
          }}
        >
          {link.name}
        </Button>
      </Tooltip>

      <Dialog
        open={openWarning}
        onClose={() => setOpenWarning(false)}
        slots={{
          transition: Transition,
        }}
        keepMounted
        aria-labelledby="vpn-warning-dialog"
        aria-describedby="vpn-warning-description"
        slotProps={{
          paper: {
            sx: {
              borderRadius: "16px",
              minWidth: { xs: "90%", sm: "500px" },
              maxWidth: "600px",
              backgroundColor: isDark ? "#1d1d1d" : "#ffffff",
              backgroundImage: isDark
                ? "linear-gradient(135deg, rgba(147, 103, 200, 0.05) 0%, rgba(147, 103, 200, 0) 100%)"
                : "linear-gradient(135deg, rgba(95, 111, 101, 0.05) 0%, rgba(95, 111, 101, 0) 100%)",
              boxShadow: isDark
                ? "0 8px 32px rgba(0, 0, 0, 0.6)"
                : "0 8px 32px rgba(0, 0, 0, 0.15)",
              border: `1px solid ${
                isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"
              }`,
            },
          },
          backdrop: {
            sx: {
              backdropFilter: "blur(4px)",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        }}
        disableScrollLock
      >
        <DialogTitle
          id="vpn-warning-dialog"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            paddingBottom: "12px",
            borderBottom: `1px solid ${
              isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"
            }`,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              backgroundColor: isDark
                ? alpha("#ffd700", 0.15)
                : alpha("#ff9800", 0.15),
              color: isDark ? "#ffd700" : "#ff9800",
            }}
          >
            <WarningAmberIcon sx={{ fontSize: "28px" }} />
          </Box>
          <Box sx={{ flex: 1 }}>
            <Box sx={{ fontWeight: 600, fontSize: "1.25rem" }}>
              VPN Access Required
            </Box>
            <Box
              sx={{
                fontSize: "0.875rem",
                color: theme.palette.text.secondary,
                fontWeight: 400,
                marginTop: "2px",
              }}
            >
              Internal network connection needed
            </Box>
          </Box>
          <IconButton
            onClick={() => setOpenWarning(false)}
            size="small"
            sx={{
              color: theme.palette.text.secondary,
              "&:hover": {
                backgroundColor: isDark
                  ? "rgba(255,255,255,0.1)"
                  : "rgba(0,0,0,0.05)",
              },
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent sx={{ padding: "24px", paddingTop: "20px" }}>
          <DialogContentText
            id="vpn-warning-description"
            sx={{
              color: theme.palette.text.primary,
              fontSize: "0.95rem",
              lineHeight: 1.7,
              mt: 1,
            }}
          >
            This resource requires access to the internal network. You don't
            appear to be connected to the campus network or VPN.
          </DialogContentText>

          <Box
            sx={{
              marginTop: 1,
              borderRadius: "12px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                marginBottom: "8px",
              }}
            >
              <Box sx={{ fontWeight: 600, fontSize: "0.9rem" }}>
                What you can do:
              </Box>
            </Box>
            <Box
              component="ul"
              sx={{
                margin: 0,
                paddingLeft: "24px",
                fontSize: "0.875rem",
                lineHeight: 1.8,
                color: theme.palette.text.secondary,
              }}
            >
              <li>Connect to the campus VPN service</li>
              <li>Use the internal network on campus</li>
              <li>Visit the VPN site for setup instructions</li>
            </Box>
          </Box>
        </DialogContent>

        <DialogActions
          sx={{
            padding: "16px 24px",
            gap: 1,
            borderTop: `1px solid ${
              isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"
            }`,
          }}
        >
          <Button
            onClick={() => setOpenWarning(false)}
            sx={{
              color: theme.palette.text.secondary,
              textTransform: "none",
              fontWeight: 500,
              "&:hover": {
                backgroundColor: isDark
                  ? "rgba(255,255,255,0.05)"
                  : "rgba(0,0,0,0.05)",
              },
            }}
          >
            Cancel
          </Button>
          <Box sx={{ flex: 1 }} />
          <Button
            onClick={handleVPNRedirect}
            variant="outlined"
            startIcon={<VpnKeyIcon />}
            sx={{
              textTransform: "none",
              fontWeight: 500,
              borderRadius: "8px",
              borderColor: isDark
                ? alpha(theme.palette.text.secondary, 0.5)
                : theme.palette.primary.main,
              color: isDark
                ? alpha(theme.palette.text.secondary, 0.9)
                : theme.palette.primary.main,
              "&:hover": {
                borderColor: theme.palette.primary.light,
                backgroundColor: alpha(theme.palette.primary.main, 0.08),
              },
            }}
          >
            Setup VPN
          </Button>
          <Button
            onClick={handleConfirmRedirect}
            variant="contained"
            autoFocus
            endIcon={<OpenInNewIcon />}
            sx={{
              textTransform: "none",
              fontWeight: 600,
              borderRadius: "8px",
              backgroundColor: theme.palette.primary.main,
              boxShadow: "none",
              "&:hover": {
                backgroundColor: theme.palette.primary.light,
                boxShadow: `0 4px 12px ${alpha(
                  theme.palette.primary.main,
                  0.3
                )}`,
              },
            }}
          >
            Continue Anyway
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default VPNWarningLink;
