"use client";

import { useState, useCallback } from "react";

export function useWindowManager(initialOpenWindows = ["notepad"]) {
  const [openWindows, setOpenWindows] = useState(initialOpenWindows);
  const [minimizedWindows, setMinimizedWindows] = useState([]);
  const [maximizedWindows, setMaximizedWindows] = useState([]);
  const [zIndexes, setZIndexes] = useState({});
  const [activeWindow, setActiveWindow] = useState(
    initialOpenWindows.length > 0 ? initialOpenWindows[0] : null
  );

  const focusWindow = useCallback((key) => {
    setActiveWindow(key);
    setMinimizedWindows((prev) => prev.filter((w) => w !== key));
    setZIndexes((prev) => {
      const maxZ = Math.max(0, ...Object.values(prev));
      return {
        ...prev,
        [key]: maxZ + 1,
      };
    });
  }, []);

  const openWindow = useCallback(
    (key) => {
      setOpenWindows((prev) => {
        if (prev.includes(key)) return prev;
        return [...prev, key];
      });
      focusWindow(key);
    },
    [focusWindow]
  );

  const closeWindow = useCallback((key) => {
    setOpenWindows((prev) => prev.filter((w) => w !== key));
    setMinimizedWindows((prev) => prev.filter((w) => w !== key));
    setMaximizedWindows((prev) => prev.filter((w) => w !== key));
    setActiveWindow((prevActive) => (prevActive === key ? null : prevActive));
  }, []);

  const minimizeWindow = useCallback((key) => {
    setMinimizedWindows((prev) => (prev.includes(key) ? prev : [...prev, key]));
    setActiveWindow((prevActive) => (prevActive === key ? null : prevActive));
  }, []);

  const toggleMaximizeWindow = useCallback((key) => {
    setMaximizedWindows((prev) =>
      prev.includes(key) ? prev.filter((w) => w !== key) : [...prev, key]
    );
  }, []);

  const toggleFromTaskbar = useCallback(
    (key) => {
      if (activeWindow === key && !minimizedWindows.includes(key)) {
        minimizeWindow(key);
      } else {
        focusWindow(key);
      }
    },
    [activeWindow, minimizedWindows, minimizeWindow, focusWindow]
  );

  return {
    openWindows,
    minimizedWindows,
    maximizedWindows,
    activeWindow,
    zIndexes,
    openWindow,
    closeWindow,
    focusWindow,
    minimizeWindow,
    toggleMaximizeWindow,
    toggleFromTaskbar,
    setActiveWindow,
  };
}
