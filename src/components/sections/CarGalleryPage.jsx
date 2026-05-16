import React from "react";
import { carSpots } from "../../data";
import Card from "../Card";
import SectionHeader from "../SectionHeader";

export default function CarGalleryPage() {
  return (
    <section className="px-5 pb-24 pt-28 text-white md:pb-32 md:pt-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Car Spotting"
          title="Cool cars I've found"
          subtitle="A small collection of cars that stood out to me because of their design, stance, rarity, or presence on the road."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {carSpots.map((car) => (
            <Card key={car.title} className="p-0">
              <article className="overflow-hidden">
                <div className="flex aspect-[4/3] items-center justify-center border-b border-white/10 bg-white/[0.04]">
                  <img
                    src={car.image}
                    alt={car.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold leading-snug text-white">
                    {car.title}
                  </h3>
                </div>
              </article>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
