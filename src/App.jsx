import React, { useEffect, useState } from "react";
import { profile, coolThings } from "./data";
import ContactWatermark from "./components/ContactWatermark";
import InteractiveBackground from "./components/InteractiveBackground";
import Navbar from "./components/Navbar";
import ProjectDetailPage from "./components/ProjectDetailPage";
import AboutSection from "./components/sections/AboutSection";
import CarGalleryPage from "./components/sections/CarGalleryPage";
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
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  if (selectedProject) {
    return <ProjectDetailPage project={selectedProject} onBack={() => navigateTo("/cool-things")} />;
  }

  const pages = {
    "/": <Hero onNavigate={navigateTo} />,
    "/about": <AboutSection onNavigate={navigateTo} />,
    "/cool-things": <ProjectsSection onProjectOpen={navigateTo} />,
    "/debate": <DebateSection />,
    "/hobbies": <HobbiesSection onNavigate={navigateTo} />,
    "/cool-cars": <CarGalleryPage />,
  };

  const currentPage = pages[route] ?? pages["/"];

  return (
    <div className="site-shell relative min-h-screen text-white">
      <InteractiveBackground />
      <ContactWatermark />
      <div className="relative z-10">
        <Navbar route={route} onNavigate={navigateTo} />
        <main>{currentPage}</main>
        <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-white/45">
          <p>
            © {new Date().getFullYear()} {profile.name}. Built as a living portfolio.
          </p>
        </footer>
      </div>
    </div>
  );
}
