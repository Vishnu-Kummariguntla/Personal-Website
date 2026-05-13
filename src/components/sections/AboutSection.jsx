import React from "react";
import { User } from "lucide-react";
import Card from "../Card";
import SectionHeader from "../SectionHeader";
import { scrollToSection } from "../../utils/navigation";

export default function AboutSection() {
  return (
    <section id="about" className="px-5 py-24 text-white md:py-32">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="About Me"
          title="A quick snapshot"
          subtitle="Asking questions since 2011"
        />
        <Card>
          <div className="grid md:grid-cols-[80px_1fr] gap-6 items-start">
            <div className="w-16 h-16 rounded-2xl bg-slate-950 text-white flex items-center justify-center">
              <User size={30} />
            </div>
            <div>
              <h3 className="mb-3 text-xl font-bold text-slate-800">My story</h3>
              <p className="max-w-3xl text-base leading-8 text-slate-700">
                I was born in Washington on March 3rd 2011, and ever since I was a
                kid, I had a fascination with building things, and finding solutions
                to problems. From a young age, I enjoyed building Lego sets, and
                basic programming. Since then I have continued to explore engineering,
                and building concepts.
              </p>
              <button
                onClick={() => scrollToSection("cool-things")}
                className="mt-5 px-5 py-3 rounded-2xl bg-slate-950 text-white font-semibold shadow-sm"
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
