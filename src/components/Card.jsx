import React from "react";

export default function Card({ children, className = "" }) {
  return (
    <div className={`surface-card rounded-xl p-6 text-slate-700 backdrop-blur-md ${className}`}>
      <div className="relative z-10">
      {children}
      </div>
    </div>
  );
}
