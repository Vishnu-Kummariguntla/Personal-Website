import React from "react";
import { ArrowLeft } from "lucide-react";
import Card from "./Card";
import ContactWatermark from "./ContactWatermark";
import InteractiveBackground from "./InteractiveBackground";

export default function ProjectDetailPage({ project, onBack }) {
  return (
    <div className="min-h-screen text-white relative">
      <InteractiveBackground />
      <ContactWatermark />
      <div className="relative z-10 px-5 py-8">
        <div className="max-w-5xl mx-auto">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 py-3 rounded-2xl bg-white/10 border border-white/20 text-white font-semibold backdrop-blur-xl"
          >
            <ArrowLeft size={18} />
            Back to Portfolio
          </button>

          <section className="pb-24 pt-16">
            <p className="text-sm font-bold tracking-[0.25em] uppercase text-cyan-200 mb-4">
              {project.date}
            </p>
            <h1 className="mb-10 max-w-4xl text-5xl font-black leading-[1.04] md:text-6xl">
              {project.title}
            </h1>

            <div className="mb-12 overflow-hidden rounded-3xl border border-white/20 bg-white p-8">
              <img
                src={project.image}
                alt={project.title}
                className="mx-auto max-h-72 max-w-full object-contain"
              />
            </div>

            <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-6">
              <Card>
                <h2 className="mb-4 text-2xl font-black text-slate-800">
                  Overview
                </h2>
                <p className="text-slate-700 leading-8">{project.description}</p>
              </Card>

              <Card>
                <h2 className="mb-4 text-2xl font-black text-slate-800">
                  Specifics
                </h2>
                <ul className="space-y-4 text-slate-700 leading-7">
                  {project.details.map((detail) => (
                    <li key={detail} className="flex gap-3">
                      <span className="mt-3 h-2 w-2 flex-none rounded-full bg-slate-950" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>

            {project.gallery?.length > 0 && (
              <section className="mt-16">
                <h2 className="mb-8 text-3xl font-black text-slate-100 md:text-4xl">
                  FTC Gallery
                </h2>
                <div className="grid md:grid-cols-2 gap-5">
                  {project.gallery.map((image, index) => (
                    <GalleryImage key={image.src} image={image} featured={index === 0} />
                  ))}
                </div>
              </section>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}

function GalleryImage({ image, featured }) {
  return (
    <figure
      className={
        featured
          ? "group relative md:col-span-2 rounded-3xl overflow-hidden bg-white/10 border border-white/10"
          : "group relative rounded-3xl overflow-hidden bg-white/10 border border-white/10"
      }
    >
      <img
        src={image.src}
        alt={image.alt}
        className={
          featured
            ? "w-full h-[26rem] object-cover object-center transition duration-300 group-hover:scale-105"
            : "w-full h-72 object-cover object-center transition duration-300 group-hover:scale-105"
        }
      />
      <figcaption className="absolute inset-x-0 bottom-0 translate-y-full bg-slate-950/90 p-5 text-white backdrop-blur-xl transition duration-300 group-hover:translate-y-0">
        <h3 className="text-xl font-bold mb-2">{image.alt}</h3>
        <p className="text-sm leading-6 text-white/75 mb-4">{image.description}</p>
        <div className="flex flex-wrap gap-2">
          {image.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-cyan-100"
            >
              {skill}
            </span>
          ))}
        </div>
      </figcaption>
    </figure>
  );
}
