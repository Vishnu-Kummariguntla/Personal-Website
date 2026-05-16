import React from "react";
import { User } from "lucide-react";
import Card from "../Card";
import SectionHeader from "../SectionHeader";

export default function AboutSection({ onNavigate }) {
  return (
    <section id="about" className="px-5 pb-24 pt-28 text-white md:pb-32 md:pt-36">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="About Me"
          title="A quick snapshot"
          subtitle="Asking questions since 2011"
        />
        <Card>
          <div className="grid md:grid-cols-[80px_1fr] gap-6 items-start">
            <div className="flex h-16 w-16 items-center justify-center rounded-md bg-white/8 text-white">
              <User size={30} />
            </div>
            <div>
              <h3 className="mb-3 text-xl font-semibold text-white">My story</h3>
              <p className="max-w-3xl text-base leading-8 text-slate-300">
                I was born in Washington on March 3rd 2011, and ever since I was a
                kid, I had a fascination with building things, and finding solutions
                to problems. From a young age, I enjoyed building Lego sets, and
                basic programming. Since then I have continued to explore engineering,
                and building concepts.
              </p>
              <button
                onClick={() => onNavigate("/cool-things")}
                className="cool-button mt-5 rounded-md px-5 py-3 font-semibold"
              >
                See My Work
              </button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
