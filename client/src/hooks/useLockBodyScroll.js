import { useLayoutEffect } from "react";

const useLockBodyScroll = checkActive => {
  useLayoutEffect(() => {
    // Get original body overflow
    const originalStyle = window.getComputedStyle(document.body).overflow;
    // Prevent scrolling on mount
    if (checkActive) document.body.style.overflow = "hidden";
    // Re-enable scrolling when component unmounts
    return () => (document.body.style.overflow = originalStyle);
  }, [checkActive]); // Empty array ensures effect is only run on mount and unmount
};

export default useLockBodyScroll;
