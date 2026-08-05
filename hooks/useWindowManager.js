"use client";

import { useState, useCallback } from "react";

export function useWindowManager(initialOpenWindows = ["notepad"]) {
  const [openWindows, setOpenWindows] = useState(initialOpenWindows);
  const [zIndexes, setZIndexes] = useState({});
  const [activeWindow, setActiveWindow] = useState(
    initialOpenWindows.length > 0 ? initialOpenWindows[0] : null
  );

  const focusWindow = useCallback((key) => {
    setActiveWindow(key);
    setZIndexes((prev) => {
      const maxZ = Math.max(0, ...Object.values(prev));
      return {
        ...prev,
        [key]: maxZ + 1,
      };
    });
  }, []);

  const openWindow = useCallback((key) => {
    setOpenWindows((prev) => {
      if (prev.includes(key)) return prev;
      return [...prev, key];
    });
    focusWindow(key);
  }, [focusWindow]);

  const closeWindow = useCallback((key) => {
    setOpenWindows((prev) => prev.filter((w) => w !== key));
    setActiveWindow((prevActive) => (prevActive === key ? null : prevActive));
  }, []);

  const toggleFromTaskbar = useCallback((key) => {
    setActiveWindow((prevActive) => (prevActive === key ? null : key));
  }, []);

  return {
    openWindows,
    activeWindow,
    zIndexes,
    openWindow,
    closeWindow,
    focusWindow,
    toggleFromTaskbar,
    setActiveWindow,
  };
}
