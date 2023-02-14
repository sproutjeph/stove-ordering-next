import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
const Portal = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);
  return mounted
    ? createPortal(children, document.getElementById("my-portals"))
    : null;
};

export default Portal;
