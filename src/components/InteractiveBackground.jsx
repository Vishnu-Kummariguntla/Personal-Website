import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function InteractiveBackground() {
  const [mouse, setMouse] = useState({ x: 50, y: 50 });

  useEffect(() => {
    function handlePointerMove(event) {
      setMouse({
        x: (event.clientX / window.innerWidth) * 100,
        y: (event.clientY / window.innerHeight) * 100,
      });
    }

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-black">
      <div
        className="absolute inset-0 transition-all duration-300"
        style={{
          background: `radial-gradient(circle at ${mouse.x}% ${mouse.y}%, rgba(255, 255, 255, 0.08), transparent 26%), linear-gradient(135deg, #030303, #0a0a0a 48%, #111827)`,
        }}
      />

      <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <motion.div
        className="absolute left-0 top-28 h-28 w-[36rem] -rotate-12 bg-white/[0.035] blur-3xl"
        animate={{ x: mouse.x * 1.1 - 55, y: mouse.y * 0.7 - 35 }}
        transition={{ type: "spring", stiffness: 45, damping: 22 }}
      />
      <motion.div
        className="absolute bottom-16 right-0 h-28 w-[32rem] rotate-12 bg-white/[0.025] blur-3xl"
        animate={{ x: mouse.x * -0.9 + 45, y: mouse.y * -0.65 + 32 }}
        transition={{ type: "spring", stiffness: 38, damping: 24 }}
      />
    </div>
  );
}
