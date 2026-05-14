import React, { useEffect, useState } from "react";
import { profile, coolThings } from "./data";
import ContactWatermark from "./components/ContactWatermark";
import InteractiveBackground from "./components/InteractiveBackground";
import Navbar from "./components/Navbar";
import ProjectDetailPage from "./components/ProjectDetailPage";
import AboutSection from "./components/sections/AboutSection";
import DebateSection from "./components/sections/DebateSection";
import Hero from "./components/sections/Hero";
import HobbiesSection from "./components/sections/HobbiesSection";
import ProjectsSection from "./components/sections/ProjectsSection";

export default function App() {
  const [route, setRoute] = useState(() => window.location.pathname);
  const selectedProject = route.startsWith("/projects/")
    ? coolThings.find((thing) => `/projects/${thing.slug}` === route)
    : null;

  useEffect(() => {
    function handlePopState() {
      setRoute(window.location.pathname);
    }

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  function navigateTo(path) {
    window.history.pushState({}, "", path);
    setRoute(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (selectedProject) {
    return <ProjectDetailPage project={selectedProject} onBack={() => navigateTo("/")} />;
  }

  return (
    <div className="site-shell relative min-h-screen text-slate-700">
      <InteractiveBackground />
      <ContactWatermark />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <AboutSection />
        <ProjectsSection onProjectOpen={navigateTo} />
        <DebateSection />
        <HobbiesSection />
        <footer className="border-t border-white/10 px-5 py-10 text-center text-white/60">
          <p>
            © {new Date().getFullYear()} {profile.name}. Built as a living portfolio.
          </p>
        </footer>
      </div>
    </div>
  );
}
