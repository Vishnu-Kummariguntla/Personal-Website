import React from "react";
import { Mic } from "lucide-react";
import { debateRoles, debateTournaments, debateYearHighlights } from "../../data";
import { groupDebateTournaments } from "../../utils/sort";
import Card from "../Card";
import SectionHeader from "../SectionHeader";

const debateTournamentGroups = groupDebateTournaments(
  debateTournaments,
  debateYearHighlights,
);

export default function DebateSection() {
  return (
    <section id="debate" className="px-5 py-24 text-white md:py-32">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Debate"
          title="Tournament history and debate profile"
          subtitle="I am a competitive Public Forum debater for Dougherty Valley High School with extensive experience on the national circuit. Over the course of my debate career, I have competed at major invitationals across the country, consistently breaking to elimination rounds and earning multiple Tournament of Champions bids. Through debate, I have developed strong skills in public speaking, research, critical thinking, argumentation, and teamwork while debating complex topics involving international relations, technology, economics, and public policy."
        />
        <div className="space-y-16">
          <div>
            <h3 className="mb-8 text-xl font-bold text-slate-200">
              Tournament Results
            </h3>
            <div className="space-y-12">
              {debateTournamentGroups.map((group) => (
                <div key={group.schoolYear}>
                  <h4 className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-cyan-200/80">
                    {group.schoolYear}
                  </h4>
                  {group.highlights.length > 0 && (
                    <div className="mb-5 space-y-2">
                      {group.highlights.map((highlight) => (
                        <div key={highlight} className="flex gap-3 text-slate-300 leading-7">
                          <span className="mt-3 h-2 w-2 flex-none rounded-full bg-cyan-200" />
                          <p>{highlight}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="space-y-5">
                    {group.tournaments.map((event) => (
                      <DebateTournamentCard
                        key={`${event.schoolYear}-${event.year}-${event.tournament}`}
                        event={event}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-8 text-xl font-bold text-slate-200">Roles</h3>
            <div className="grid md:grid-cols-2 gap-5">
              {debateRoles.map((role) => (
                <Card key={role.title}>
                  <div className="flex gap-4">
                    <div className="w-14 h-14 flex-none rounded-2xl bg-slate-950 text-white flex items-center justify-center">
                      <Mic size={26} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 font-semibold">{role.years}</p>
                      <h4 className="text-xl font-bold leading-snug text-slate-800">
                        {role.title}
                      </h4>
                      <p className="mt-3 text-base leading-7 text-slate-700">
                        {role.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DebateTournamentCard({ event }) {
  return (
    <Card>
      <div>
        <div
          className={
            event.centerResult
              ? "flex flex-col gap-4"
              : "flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          }
        >
          <div>
            <p className="text-sm text-slate-500 font-semibold">{event.year}</p>
            <h5 className="mt-1 text-xl font-bold leading-snug text-slate-800">
              {event.tournament}
            </h5>
            <p className="mt-3 text-base leading-7 text-slate-700">{event.description}</p>
          </div>
          <div
            className={`${event.centerResult ? "mx-auto text-center" : ""} px-4 py-2 rounded-full bg-slate-100 font-bold text-slate-600 w-fit`}
          >
            {event.result}
          </div>
        </div>
        {event.images?.length > 0 && (
          <div className="mt-5 grid justify-center gap-3 md:grid-cols-2">
            {event.images.map((image) => (
              <div
                key={image.src}
                className="flex h-72 w-full items-center justify-center overflow-hidden rounded-2xl p-3"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full rounded-xl object-contain"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
}
