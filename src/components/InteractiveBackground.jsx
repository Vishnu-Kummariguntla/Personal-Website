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
    <div className="fixed inset-0 z-0 overflow-hidden bg-slate-950">
      <div
        className="absolute inset-0 transition-all duration-300"
        style={{
          background: `radial-gradient(circle at ${mouse.x}% ${mouse.y}%, rgba(56, 189, 248, 0.48), transparent 26%), radial-gradient(circle at ${100 - mouse.x}% ${100 - mouse.y}%, rgba(168, 85, 247, 0.36), transparent 30%), radial-gradient(circle at ${mouse.y}% ${100 - mouse.x}%, rgba(34, 197, 94, 0.18), transparent 24%), linear-gradient(135deg, #020617, #0f172a, #111827)`,
        }}
      />

      <div className="absolute inset-0 opacity-30 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:48px_48px]" />

      {[...Array(28)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-2 h-2 rounded-full bg-white/40 blur-[1px]"
          style={{
            left: `${(index * 37) % 100}%`,
            top: `${(index * 53) % 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.9, 0.2],
            scale: [1, 1.7, 1],
          }}
          transition={{
            duration: 3 + (index % 5),
            repeat: Infinity,
            delay: index * 0.15,
          }}
        />
      ))}

      <motion.div
        className="absolute -left-32 top-24 w-96 h-96 rounded-full bg-cyan-400/20 blur-3xl"
        animate={{ x: mouse.x * 1.4 - 70, y: mouse.y * 0.9 - 45 }}
        transition={{ type: "spring", stiffness: 45, damping: 22 }}
      />
      <motion.div
        className="absolute right-0 bottom-0 w-[32rem] h-[32rem] rounded-full bg-purple-500/20 blur-3xl"
        animate={{ x: mouse.x * -1.1 + 55, y: mouse.y * -0.8 + 40 }}
        transition={{ type: "spring", stiffness: 38, damping: 24 }}
      />
    </div>
  );
}
