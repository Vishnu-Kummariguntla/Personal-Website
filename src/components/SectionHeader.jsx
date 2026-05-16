import React from "react";

export default function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-12 max-w-3xl">
      <p className="mb-4 inline-flex rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/58">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold leading-tight text-slate-100 md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300/75">
          {subtitle}
        </p>
      )}
    </div>
  );
}
