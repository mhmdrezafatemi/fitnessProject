import { useState,useEffect } from "react";
export default function useIsMobile(){
  const [isMobile, setIsMobile] = useState(false);

  const resizeBool = () => {
    setIsMobile(window.innerWidth <= 700);
  };
  useEffect(() => {
    window.addEventListener("resize", resizeBool);
    resizeBool();
    return () => {
      window.removeEventListener("resize", resizeBool);
    };
  }, []);
  return isMobile;
}