import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { profile } from "../../data";
import { scrollToSection } from "../../utils/navigation";

export default function Hero() {
  return (
    <section id="home" className="px-5 pb-24 pt-32 text-white md:pb-32 md:pt-40">
      <div className="mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="max-w-3xl text-5xl font-black leading-[1.02] text-cyan-100 md:text-7xl">
            <span>{profile.tagline}</span>
          </h1>
          <p className="mt-6 max-w-xl text-2xl font-semibold leading-snug text-slate-100 md:text-3xl">
            Hi, I'm Vishnu and I like building things.
          </p>
          <p className="mt-6 max-w-xl text-base leading-8 text-white/70">{profile.intro}</p>
          <p className="mt-5 max-w-xl rounded-xl border border-white/15 bg-white/10 px-5 py-4 text-sm font-semibold leading-7 text-cyan-50 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-md md:text-base">
            {profile.goal}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={() => scrollToSection("about")}
              className="cool-button inline-flex items-center gap-2 rounded-lg px-5 py-3 font-semibold"
            >
              Learn more about me <ArrowDown size={17} />
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto w-full max-w-[22rem] md:justify-self-end"
        >
          <div className="absolute -inset-3 rounded-xl border border-cyan-200/25" />
          <div className="absolute -right-8 -top-8 h-28 w-28 rounded-lg border border-amber-200/20 bg-amber-200/10 backdrop-blur-md" />
          <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-lg border border-teal-200/20 bg-teal-200/10 backdrop-blur-md" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-white/20 bg-slate-900 shadow-[0_24px_64px_rgba(0,0,0,0.4)]">
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
