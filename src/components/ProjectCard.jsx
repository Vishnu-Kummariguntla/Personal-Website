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
      className="relative min-w-[19rem] md:min-w-[26rem] snap-center pt-24 transition-all duration-300 ease-out [transform-style:preserve-3d]"
    >
      <p className="absolute left-1/2 top-1 -translate-x-1/2 whitespace-nowrap text-sm font-black text-cyan-200">
        {project.date}
      </p>
      <div className="absolute left-1/2 top-9 h-6 w-6 -translate-x-1/2 rounded-full border-4 border-slate-950 bg-cyan-200 shadow-[0_0_0_6px_rgba(255,255,255,0.12)]" />
      <div className="rounded-3xl overflow-hidden bg-white/10 border border-white/10">
        <div className="h-56 bg-white flex items-center justify-center p-6">
          <img
            src={project.image}
            alt={project.title}
            className="max-h-full max-w-full object-contain"
          />
        </div>
        <div className="p-6">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-cyan-200/80">
            {project.date}
          </p>
          <h3 className="mb-3 text-xl font-bold leading-snug text-white">{project.title}</h3>
          <p className="mb-5 line-clamp-5 text-sm leading-7 text-slate-300">
            {project.description}
          </p>
          <button onClick={onOpen} className="inline-flex items-center gap-2 font-semibold">
            View more <ExternalLink size={16} />
          </button>
        </div>
      </div>
    </motion.article>
  );
}
