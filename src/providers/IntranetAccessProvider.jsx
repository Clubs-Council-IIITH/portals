"use client";

import { createContext, useContext, useEffect, useState } from "react";

const IntranetAccessContext = createContext();

const checkIntranetAccess = async () => {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2000);

    await fetch("https://intranet.iiit.ac.in", {
      method: "HEAD",
      mode: "no-cors",
      signal: controller.signal,
    });

    clearTimeout(timeoutId);
    return true;
  } catch {
    return false;
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
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  return (
    <IntranetAccessContext.Provider value={intranetAccessible}>
      {children}
    </IntranetAccessContext.Provider>
  );
};

export const useIntranetAccess = () => useContext(IntranetAccessContext);
