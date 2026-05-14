import React from "react";
import { Car, Code2, Mic } from "lucide-react";
import { hobbies } from "../../data";
import Card from "../Card";
import SectionHeader from "../SectionHeader";

const hobbyIcons = {
  Car,
  Code2,
  CricketBat,
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
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-slate-950 text-white">
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

function CricketBat({ size = 26 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <g transform="rotate(-24 10.2 12)">
        <rect x="8.7" y="1.6" width="3" height="4.3" rx="0.8" fill="currentColor" />
        <rect x="8.25" y="5.5" width="3.9" height="1.2" rx="0.35" fill="currentColor" />
        <rect x="8.9" y="7.1" width="2.6" height="1.6" rx="0.35" fill="currentColor" />
        <path
          d="M6.7 8.6h7l-1 12.6c-.1.8-.8 1.4-1.6 1.4H9.3c-.8 0-1.5-.6-1.6-1.4L6.7 8.6Z"
          fill="currentColor"
        />
        <rect x="7.15" y="9.7" width="6.1" height="1.1" fill="white" opacity="0.92" />
        <rect x="7.65" y="18.7" width="5.1" height="1.1" fill="white" opacity="0.92" />
      </g>
      <circle cx="17.4" cy="12" r="3.2" fill="currentColor" />
      <path
        d="M15.2 14.2c2.1-.4 3.5-1.8 4.1-4"
        stroke="white"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <path
        d="M14.7 12.3c1.6-.5 2.8-1.6 3.5-3.1"
        stroke="white"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}
