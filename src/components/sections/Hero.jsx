import React from "react";
import { motion } from "framer-motion";
import { profile } from "../../data";
import { scrollToSection } from "../../utils/navigation";

export default function Hero() {
  return (
    <section id="home" className="px-5 pb-28 pt-36 text-white md:pb-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="max-w-2xl text-5xl font-black leading-[1.04] md:text-6xl">
            <span className="text-cyan-200">{profile.tagline}</span>
          </h1>
          <p className="mt-6 max-w-xl text-2xl font-semibold leading-snug text-slate-200 md:text-3xl">
            Hi, I'm Vishnu and I like building things.
          </p>
          <p className="mt-6 max-w-xl text-base leading-8 text-white/70">{profile.intro}</p>
          <p className="mt-5 max-w-xl rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-sm font-semibold leading-7 text-cyan-100 backdrop-blur-xl md:text-base">
            {profile.goal}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={() => scrollToSection("about")}
              className="px-5 py-3 rounded-2xl bg-slate-950 text-white font-semibold shadow-sm"
            >
              Learn more about me
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto w-full max-w-[21rem] md:justify-self-end"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-slate-300 opacity-35 blur-3xl" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/15 bg-slate-900 shadow-xl">
            <img
              src={profile.image}
              alt="Profile"
              className="h-full w-full scale-[1.16] object-cover object-[center_42%]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
