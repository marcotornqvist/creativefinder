import React, { useState, useEffect } from "react";
import viewportContext from "./viewportContext";

const ViewportState = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <viewportContext.Provider value={{ width, breakpoint: 768 }}>
      {children}
    </viewportContext.Provider>
  );
};

export default ViewportState;
