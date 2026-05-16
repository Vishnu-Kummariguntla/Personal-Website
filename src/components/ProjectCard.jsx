import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function ProjectCard({ project, index, style, onOpen }) {
  return (
    <motion.article
      initial={{ opacity: 0, x: 36 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ delay: index * 0.1 }}
      style={style}
      className="group relative min-w-[19rem] snap-center pt-24 transition-all duration-300 ease-out [transform-style:preserve-3d] md:min-w-[26rem]"
    >
      <p className="absolute left-1/2 top-1 -translate-x-1/2 whitespace-nowrap rounded-md border border-white/10 bg-black/70 px-3 py-1 text-sm font-semibold text-white/70 backdrop-blur-md">
        {project.date}
      </p>
      <div className="absolute left-1/2 top-11 h-4 w-4 -translate-x-1/2 rounded-md border-4 border-black bg-white/70" />
      <div className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] shadow-[0_18px_46px_rgba(0,0,0,0.28)] backdrop-blur-md transition duration-300 group-hover:-translate-y-1 group-hover:border-white/25">
        <div className="flex h-56 items-center justify-center border-b border-white/10 bg-white/[0.04] p-6">
          <img
            src={project.image}
            alt={project.title}
            className="max-h-full max-w-full object-contain transition duration-300 group-hover:scale-[1.03]"
          />
        </div>
        <div className="p-6">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/42">
            {project.date}
          </p>
          <h3 className="mb-3 text-xl font-semibold leading-snug text-white">{project.title}</h3>
          <p className="mb-5 line-clamp-5 text-sm leading-7 text-slate-300/80">
            {project.description}
          </p>
          <button
            onClick={onOpen}
            className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2 font-semibold text-white transition hover:border-white/25 hover:bg-white/10"
          >
            View more <ExternalLink size={16} />
          </button>
        </div>
      </div>
    </motion.article>
  );
}
