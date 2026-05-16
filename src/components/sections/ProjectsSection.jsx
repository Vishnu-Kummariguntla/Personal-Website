import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { coolThings } from "../../data";
import { getProjectSortYear } from "../../utils/sort";
import ProjectCard from "../ProjectCard";
import SectionHeader from "../SectionHeader";

const sortedCoolThings = [...coolThings].sort(
  (a, b) => getProjectSortYear(b) - getProjectSortYear(a),
);

export default function ProjectsSection({ onProjectOpen }) {
  const timelineRef = useRef(null);
  const [timelinePosition, setTimelinePosition] = useState({
    scrollLeft: 0,
    viewportWidth: 0,
    scrollWidth: 0,
  });

  useEffect(() => {
    function updateTimelinePosition() {
      const timeline = timelineRef.current;

      if (!timeline) {
        return;
      }

      setTimelinePosition({
        scrollLeft: timeline.scrollLeft,
        viewportWidth: timeline.clientWidth,
        scrollWidth: timeline.scrollWidth,
      });
    }

    updateTimelinePosition();
    const frame = window.requestAnimationFrame(updateTimelinePosition);
    window.addEventListener("resize", updateTimelinePosition);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", updateTimelinePosition);
    };
  }, []);

  function handleTimelineScroll() {
    const timeline = timelineRef.current;

    if (!timeline) {
      return;
    }

    setTimelinePosition({
      scrollLeft: timeline.scrollLeft,
      viewportWidth: timeline.clientWidth,
      scrollWidth: timeline.scrollWidth,
    });
  }

  function scrollTimeline(direction) {
    const timeline = timelineRef.current;

    if (!timeline) {
      return;
    }

    timeline.scrollBy({
      left: direction * timeline.clientWidth * 0.75,
      behavior: "smooth",
    });
  }

  function getTimelineCardStyle(index) {
    if (!timelinePosition.viewportWidth) {
      return {};
    }

    const cardStep = timelinePosition.viewportWidth >= 768 ? 496 : 352;
    const cardCenter = index * cardStep + cardStep / 2;
    const viewportCenter =
      timelinePosition.scrollLeft + timelinePosition.viewportWidth / 2;
    const distance = Math.max(
      -2.1,
      Math.min(2.1, (cardCenter - viewportCenter) / cardStep),
    );
    const absDistance = Math.abs(distance);
    const rotateY = distance * -46;
    const rotateZ = distance * 5;
    const scale = 1 - Math.min(absDistance * 0.2, 0.42);
    const translateY = absDistance * 34;
    const translateZ = -absDistance * 170;
    const translateX = distance * -28;

    return {
      transform: `perspective(850px) translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) scale(${scale})`,
      opacity: 1 - Math.min(absDistance * 0.28, 0.55),
      zIndex: Math.round(100 - absDistance * 20),
    };
  }

  const timelineMaxScroll = Math.max(
    0,
    timelinePosition.scrollWidth - timelinePosition.viewportWidth,
  );
  const timelineProgress = timelineMaxScroll
    ? Math.min(
        100,
        Math.max(0, (timelinePosition.scrollLeft / timelineMaxScroll) * 100),
      )
    : 0;
  const canScrollTimelineBack = timelinePosition.scrollLeft > 4;
  const canScrollTimelineForward =
    timelinePosition.scrollLeft < timelineMaxScroll - 4;

  return (
    <section
      id="cool-things"
      className="px-5 pb-24 pt-28 text-white md:pb-32 md:pt-36"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="Projects & More"
          title="Cool things I've done"
        />
        <div className="mb-12 max-w-3xl space-y-5 text-base leading-8 text-white/58">
          <p>
            I love building things because I love watching complex systems come
            together to create one cohesive product. Every project I do fuels my
            passion for engineering. Listed below are the various projects and
            activities I have done over the years and all the things I have
            learned from them.
          </p>
          <p>In my view these are the aspects of a successful project:</p>
          <ul className="list-disc space-y-2 pl-6 text-slate-300/85">
            <li>It solves a real problem or makes something easier to use.</li>
            <li>
              It produces reliable results and achieves the goal I designed it
              for.
            </li>
            <li>
              It teaches me something new that I can carry into future projects.
            </li>
          </ul>
        </div>
        <p className="mb-8 text-sm font-semibold uppercase tracking-[0.16em] text-white/45">
          Scroll sideways through the timeline to see projects from most recent
          to oldest.
        </p>

        <div className="relative">
          <div className="absolute left-0 right-0 top-12 hidden h-px bg-white/10 md:block" />
          <div
            ref={timelineRef}
            onScroll={handleTimelineScroll}
            className="timeline-scrollbar flex snap-x snap-mandatory gap-14 overflow-x-auto pb-12 [perspective:850px] [transform-style:preserve-3d]"
          >
            {sortedCoolThings.map((thing, index) => (
              <ProjectCard
                key={thing.title}
                project={thing}
                index={index}
                style={getTimelineCardStyle(index)}
                onOpen={() => onProjectOpen(`/projects/${thing.slug}`)}
              />
            ))}
          </div>

          <div className="mt-4 flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] p-2 backdrop-blur-md">
            <button
              type="button"
              onClick={() => scrollTimeline(-1)}
              disabled={!canScrollTimelineBack}
              aria-label="Scroll project timeline left"
              className="flex h-10 w-10 flex-none items-center justify-center rounded-md border border-white/10 bg-black/30 text-white transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-35"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="h-1.5 min-w-0 flex-1 overflow-hidden rounded-md bg-white/10">
              <div
                className="h-full rounded-md bg-white/70 transition-[width] duration-200"
                style={{
                  width: `${timelineMaxScroll ? Math.max(12, timelineProgress) : 100}%`,
                }}
              />
            </div>
            <button
              type="button"
              onClick={() => scrollTimeline(1)}
              disabled={!canScrollTimelineForward}
              aria-label="Scroll project timeline right"
              className="flex h-10 w-10 flex-none items-center justify-center rounded-md border border-white/10 bg-black/30 text-white transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-35"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
