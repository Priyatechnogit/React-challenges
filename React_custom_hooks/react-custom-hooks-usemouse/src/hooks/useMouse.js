import { useState, useEffect } from "react";

export default function useMouse() {

const [position, setPosition] = useState([0, 0]);
 useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition([e.clientX, e.clientY]);
    };
    document.body.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.body.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return position;
}
