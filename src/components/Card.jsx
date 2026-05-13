import React from "react";

export default function Card({ children }) {
  return (
    <div className="rounded-3xl bg-white/80 backdrop-blur-xl border border-white/30 shadow-sm p-6 text-slate-700">
      {children}
    </div>
  );
}
