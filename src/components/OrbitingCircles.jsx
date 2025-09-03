import React, { useEffect, useRef } from "react";

const OrbitingCircles = ({ children, radius = 80, duration = 20, delay = 0, reverse = false, className = "" }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let start = null;
    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = (timestamp - start) / 1000; // seconds
      const angle = ((elapsed + delay) * (360 / duration)) % 360;
      container.style.transform = `rotate(${reverse ? -angle : angle}deg) translate(${radius}px) rotate(${reverse ? angle : -angle}deg)`;
      requestAnimationFrame(animate);
    };

    const frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [radius, duration, delay, reverse]);

  return (
    <div
      ref={containerRef}
      className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${className}`}
    >
      {children}
    </div>
  );
};

export default OrbitingCircles;
