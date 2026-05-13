import React from "react";

export default function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-12 max-w-3xl">
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-cyan-200/80">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-black leading-tight text-slate-100 md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300/80">
          {subtitle}
        </p>
      )}
    </div>
  );
}
