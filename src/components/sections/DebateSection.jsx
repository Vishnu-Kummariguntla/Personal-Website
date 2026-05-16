import React from "react";
import { Handshake, MessageSquareText, Mic, Scale } from "lucide-react";
import {
  debateEnjoymentReasons,
  debateRoles,
  debateTournaments,
  debateYearHighlights,
} from "../../data";
import { groupDebateTournaments } from "../../utils/sort";
import Card from "../Card";
import SectionHeader from "../SectionHeader";

const enjoymentIcons = {
  Handshake,
  MessageSquareText,
  Scale,
};

const debateTournamentGroups = groupDebateTournaments(
  debateTournaments,
  debateYearHighlights,
);

export default function DebateSection() {
  return (
    <section id="debate" className="px-5 pb-24 pt-28 text-white md:pb-32 md:pt-36">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Debate"
          title="Tournament history and debate profile"
          subtitle="I am a competitive Public Forum debater for Dougherty Valley High School with extensive experience on the national circuit. Over the course of my debate career, I have competed at major invitationals across the country, consistently breaking to elimination rounds and earning multiple Tournament of Champions bids. Through debate, I have developed strong skills in public speaking, research, critical thinking, argumentation, and teamwork while debating complex topics involving international relations, technology, economics, and public policy."
        />
        <div className="space-y-16">
          <div>
            <h3 className="mb-8 text-xl font-semibold text-slate-200">
              Why I Enjoy Debate
            </h3>
            <div className="grid gap-5 md:grid-cols-3">
              {debateEnjoymentReasons.map((reason) => {
                const Icon = enjoymentIcons[reason.icon];

                return (
                  <Card key={reason.title}>
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-md bg-white/8 text-white">
                      <Icon size={26} />
                    </div>
                    <h4 className="mb-3 text-lg font-semibold leading-snug text-white">
                      {reason.title}
                    </h4>
                    <p className="text-sm leading-7 text-slate-300">
                      {reason.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="mb-8 text-xl font-semibold text-slate-200">
              Tournament Results
            </h3>
            <div className="space-y-12">
              {debateTournamentGroups.map((group) => (
                <div key={group.schoolYear}>
                  <h4 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-white/45">
                    {group.schoolYear}
                  </h4>
                  {group.highlights.length > 0 && (
                    <div className="mb-5 space-y-2">
                      {group.highlights.map((highlight) => (
                        <div key={highlight} className="flex gap-3 text-slate-300 leading-7">
                          <span className="mt-3 h-2 w-2 flex-none rounded-full bg-white/60" />
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
            <h3 className="mb-8 text-xl font-semibold text-slate-200">Roles</h3>
            <div className="grid md:grid-cols-2 gap-5">
              {debateRoles.map((role) => (
                <Card key={role.title}>
                  <div className="flex gap-4">
                    <div className="flex h-14 w-14 flex-none items-center justify-center rounded-md bg-white/8 text-white">
                      <Mic size={26} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-400 font-semibold">{role.years}</p>
                      <h4 className="text-xl font-semibold leading-snug text-white">
                        {role.title}
                      </h4>
                      <p className="mt-3 text-base leading-7 text-slate-300">
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
            <p className="text-sm text-slate-400 font-semibold">{event.year}</p>
            <h5 className="mt-1 text-xl font-semibold leading-snug text-white">
              {event.tournament}
            </h5>
            <p className="mt-3 text-base leading-7 text-slate-300">{event.description}</p>
          </div>
          <div
            className={`${event.centerResult ? "mx-auto text-center" : ""} w-fit rounded-md border border-white/10 bg-white/5 px-4 py-2 font-semibold text-slate-200`}
          >
            {event.result}
          </div>
        </div>
        {event.images?.length > 0 && (
          <div className="mt-5 grid justify-center gap-3 md:grid-cols-2">
            {event.images.map((image) => (
              <div
                key={image.src}
                className="flex h-72 w-full items-center justify-center overflow-hidden rounded-lg p-3"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full rounded-md object-contain"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
}
