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
      <p className="absolute left-1/2 top-1 -translate-x-1/2 whitespace-nowrap rounded-md border border-cyan-200/25 bg-slate-950/78 px-3 py-1 text-sm font-black text-cyan-100 backdrop-blur-md">
        {project.date}
      </p>
      <div className="absolute left-1/2 top-11 h-5 w-5 -translate-x-1/2 rounded-md border-4 border-slate-950 bg-cyan-200 shadow-[0_0_0_5px_rgba(255,255,255,0.11),0_0_22px_rgba(103,232,249,0.42)]" />
      <div className="overflow-hidden rounded-xl border border-white/18 bg-white/10 shadow-[0_18px_46px_rgba(2,6,23,0.36)] backdrop-blur-md transition duration-300 group-hover:-translate-y-1 group-hover:border-cyan-200/40">
        <div className="flex h-56 items-center justify-center bg-gradient-to-br from-white via-slate-100 to-cyan-50 p-6">
          <img
            src={project.image}
            alt={project.title}
            className="max-h-full max-w-full object-contain drop-shadow-xl transition duration-300 group-hover:scale-[1.03]"
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
          <button
            onClick={onOpen}
            className="inline-flex items-center gap-2 rounded-lg border border-white/12 bg-white/10 px-4 py-2 font-semibold text-white transition hover:border-cyan-200/40 hover:bg-white/15"
          >
            View more <ExternalLink size={16} />
          </button>
        </div>
      </div>
    </motion.article>
  );
}
