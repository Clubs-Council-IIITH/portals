"use client";

import { createContext, useContext, useEffect, useState } from "react";

const IntranetAccessContext = createContext();

const checkIntranetAccess = async () => {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 1000);

    await fetch("https://intranet.iiit.ac.in/offices", {
      method: "HEAD",
      mode: "no-cors",
      signal: controller.signal,
    });

    clearTimeout(timeoutId);
    return true;
  } catch (error) {
    // Check for specific DNS resolution failure
    if (error.message && error.message.includes("ERR_NAME_NOT_RESOLVED")) {
      return false; // DNS resolution failed - not on intranet
    }

    // Check for timeout/abort
    if (error.name === "AbortError") {
      return false; // Timeout - likely DNS or connectivity issue
    }

    // Check for other network errors that indicate DNS failure
    if (
      error.name === "TypeError" &&
      error.message.includes("Failed to fetch")
    ) {
      return false; // Network error - likely DNS related
    }

    // For any other errors in no-cors mode, assume DNS worked
    // (could be CORS, 404, or other HTTP-level errors)
    return true;
  }
};

export const IntranetAccessProvider = ({ children }) => {
  const [intranetAccessible, setIntranetAccessible] = useState(null); // null, true, or false

  useEffect(() => {
    const checkAccess = async () => {
      const result = await checkIntranetAccess();
      setIntranetAccessible(result);
    };

    checkAccess();

    // Optional: re-check if tab regains focus
    const handleVisibility = () => {
      if (document.visibilityState === "visible") {
        checkAccess();
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  return (
    <IntranetAccessContext.Provider value={intranetAccessible}>
      {children}
    </IntranetAccessContext.Provider>
  );
};

export const useIntranetAccess = () => useContext(IntranetAccessContext);
