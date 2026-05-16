import React from "react";
import { motion } from "framer-motion";
import { profile } from "../../data";

export default function Hero({ onNavigate }) {
  return (
    <section id="home" className="px-5 pb-20 pt-28 text-white md:pb-28 md:pt-36">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.08] text-white md:text-6xl">
            <span>{profile.tagline}</span>
          </h1>
          <p className="mt-6 max-w-xl text-xl font-medium leading-snug text-slate-200 md:text-2xl">
            Hi, I'm Vishnu and I like building things.
          </p>
          <p className="mt-6 max-w-xl text-base leading-8 text-white/58">{profile.intro}</p>
          <p className="mt-5 max-w-xl border-l border-white/16 pl-5 text-sm font-medium leading-7 text-white/70 md:text-base">
            {profile.goal}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={() => onNavigate("/about")}
              className="cool-button inline-flex items-center rounded-md px-5 py-3 font-semibold"
            >
              Learn more about me
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto w-full max-w-[22rem] md:justify-self-end"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-white/12 bg-slate-950 shadow-[0_24px_64px_rgba(0,0,0,0.35)]">
            <img
              src={profile.image}
              alt="Profile"
              className="h-full w-full scale-[1.12] object-cover object-[center_42%] grayscale-[15%]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
