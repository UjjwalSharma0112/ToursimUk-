import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-4 h-4 bg-amber-400 rounded-full pointer-events-none"
      animate={{ x: mousePos.x - 4, y: mousePos.y - 4 }}
      transition={{ type: "tween", stiffness: 20, damping: 60 }}
      style={{ zIndex: 1000 }}
    />
  );
}
