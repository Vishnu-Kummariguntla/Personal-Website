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
          background: `radial-gradient(circle at ${mouse.x}% ${mouse.y}%, rgba(34, 211, 238, 0.26), transparent 24%), radial-gradient(circle at ${100 - mouse.x}% ${100 - mouse.y}%, rgba(245, 158, 11, 0.16), transparent 28%), linear-gradient(135deg, #020617, #0f172a 45%, #052e2b)`,
        }}
      />

      <div className="absolute inset-0 opacity-30 bg-[linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:56px_56px]" />
      <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,rgba(255,255,255,0.06)_46%,transparent_58%)] opacity-50" />
      <div className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-cyan-200/10 to-transparent" />

      {[...Array(22)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute h-px w-12 rounded-full bg-cyan-100/30"
          style={{
            left: `${(index * 37) % 100}%`,
            top: `${(index * 53) % 100}%`,
          }}
          animate={{
            x: [0, 28, 0],
            opacity: [0.08, 0.48, 0.08],
            scaleX: [0.8, 1.4, 0.8],
          }}
          transition={{
            duration: 4 + (index % 5),
            repeat: Infinity,
            delay: index * 0.15,
          }}
        />
      ))}

      <motion.div
        className="absolute left-0 top-28 h-32 w-[42rem] -rotate-12 bg-cyan-300/10 blur-3xl"
        animate={{ x: mouse.x * 1.4 - 70, y: mouse.y * 0.9 - 45 }}
        transition={{ type: "spring", stiffness: 45, damping: 22 }}
      />
      <motion.div
        className="absolute bottom-16 right-0 h-32 w-[36rem] rotate-12 bg-amber-300/10 blur-3xl"
        animate={{ x: mouse.x * -1.1 + 55, y: mouse.y * -0.8 + 40 }}
        transition={{ type: "spring", stiffness: 38, damping: 24 }}
      />
    </div>
  );
}
