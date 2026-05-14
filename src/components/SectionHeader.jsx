import React from "react";

export default function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-12 max-w-3xl">
      <p className="mb-4 inline-flex rounded-md border border-cyan-200/25 bg-cyan-200/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.24em] text-cyan-100">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-black leading-tight text-slate-100 md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300/85">
          {subtitle}
        </p>
      )}
    </div>
  );
}
