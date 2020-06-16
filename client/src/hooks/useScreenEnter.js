import { useState, useEffect } from "react";

const useScreenEnter = (ref, callback) => {
  const [entered, setEntered] = useState(false);

  function activate() {
    if (
      ref.current &&
      isInViewPort(ref.current.getBoundingClientRect()) &&
      !entered
    ) {
      callback();
      setEntered(true);
    }
  }

  useEffect(() => {
    document.addEventListener("scroll", activate);
    return () => document.removeEventListener("scroll", activate);
  });
};

const isInViewPort = rect => {
  if (
    window.screen.height >= rect.bottom &&
    window.screen.width >= rect.right &&
    rect.top >= 0 &&
    rect.left >= 0
  )
    return true;
  return false;
};

export default useScreenEnter;
