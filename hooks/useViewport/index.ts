import React from "react";

export const useViewport = () => {
    const [width, setWidth] = React.useState<number>(0);
  
    React.useEffect(() => {
      const handleWindowResize = () => setWidth(window.innerWidth);
      if (window) {
        window.addEventListener("resize", handleWindowResize);
      }
      return () => window && window.removeEventListener("resize", handleWindowResize);
    });
  
    return { width };
}