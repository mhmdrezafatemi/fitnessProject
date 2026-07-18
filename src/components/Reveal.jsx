import { useState, useEffect, useRef } from "react";
import "../styles/animationStyle.css";

export default function Reveal({ direction, children, delay, distance }) {
  const directions = {
    top: { axis: "Y", sign: -1 },
    bottom: { axis: "Y", sign: 1 },
    left: { axis: "X", sign: -1 },
    right: { axis: "X", sign: 1 },
  };
  const { axis, sign } = directions[direction];
  const translate = axis === "X" ? "translateX" : "translateY";
  const value = sign === -1 ? `-${distance}` : distance;

  const [isVisible, setVisible] = useState(false);

  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setVisible(true);
      }
    });
    observer.observe(ref.current);
  }, []);
  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? "show" : "hide"}`}
      style={{
        transitionDelay: `${delay}ms`,
        transform: isVisible === false ? `${translate}(${value})` : "",
      }}
    >
      {children}
    </div>
  );
}
