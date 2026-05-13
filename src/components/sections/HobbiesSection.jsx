import React from "react";
import { Car, Code2, Dumbbell, Mic } from "lucide-react";
import { hobbies } from "../../data";
import Card from "../Card";
import SectionHeader from "../SectionHeader";

const hobbyIcons = {
  Car,
  Code2,
  Dumbbell,
  Mic,
};

export default function HobbiesSection() {
  return (
    <section id="hobbies" className="px-5 py-24 text-white md:py-32">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Hobbies"
          title="What I do outside class"
          subtitle="A few interests that keep me curious, observant, and consistent."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hobbies.map((hobby) => {
            const Icon = hobbyIcons[hobby.icon];

            return (
              <Card key={hobby.title}>
                <div className="w-14 h-14 rounded-2xl bg-slate-950 text-white flex items-center justify-center mb-5">
                  <Icon size={26} />
                </div>
                <h3 className="mb-3 text-lg font-bold leading-snug text-slate-800">
                  {hobby.title}
                </h3>
                <p className="text-sm leading-7 text-slate-600">{hobby.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
