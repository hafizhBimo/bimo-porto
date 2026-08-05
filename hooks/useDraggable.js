"use client";

import { useState, useRef, useCallback } from "react";

export function useDraggable(initialPosition = { x: 120, y: 120 }, onFocus, id) {
  const [position, setPosition] = useState(initialPosition);
  const isDragging = useRef(false);
  const dragOffset = useRef({ x: 0, y: 0 });

  const handleMouseDown = useCallback(
    (e) => {
      isDragging.current = true;
      dragOffset.current = {
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      };
      if (onFocus && id) {
        onFocus(id);
      }
    },
    [position.x, position.y, onFocus, id]
  );

  const handleMouseMove = useCallback((e) => {
    if (!isDragging.current) return;

    setPosition({
      x: e.clientX - dragOffset.current.x,
      y: e.clientY - dragOffset.current.y,
    });
  }, []);

  const handleMouseUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  return {
    position,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
  };
}
