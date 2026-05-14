import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems, profile } from "../data";
import { scrollToSection, sectionId } from "../utils/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sectionIds = ["home", ...navItems.map((item) => sectionId(item))];

    function updateActiveSection() {
      const currentSection = sectionIds.reduce(
        (current, id) => {
          const section = document.getElementById(id);

          if (!section) {
            return current;
          }

          const distanceFromTop = Math.abs(section.getBoundingClientRect().top - 96);

          return distanceFromTop < current.distance
            ? { id, distance: distanceFromTop }
            : current;
        },
        { id: "home", distance: Number.POSITIVE_INFINITY },
      );

      setActiveSection(currentSection.id);
    }

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/15 bg-slate-950/72 text-white shadow-[0_12px_34px_rgba(2,6,23,0.26)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <button
          onClick={() => scrollToSection("home")}
          className={`rounded-lg px-3 py-2 text-left font-bold tracking-tight transition ${
            activeSection === "home"
              ? "bg-cyan-100 text-slate-950 shadow-[0_0_18px_rgba(103,232,249,0.18)]"
              : "text-white hover:bg-white/10"
          }`}
        >
          {profile.name}
        </button>

        <div className="hidden items-center gap-2 rounded-xl border border-white/12 bg-white/8 p-1 text-sm font-medium text-white/75 md:flex">
          {navItems.map((item) => (
            <NavButton
              key={item}
              item={item}
              active={activeSection === sectionId(item)}
              onClick={() => scrollToSection(sectionId(item))}
            />
          ))}
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/12 bg-white/10 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="flex flex-col gap-2 border-t border-white/10 bg-slate-950/95 px-5 pb-4 md:hidden">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => {
                scrollToSection(sectionId(item));
                setOpen(false);
              }}
              className={`rounded-lg px-3 py-2 text-left transition ${
                activeSection === sectionId(item)
                  ? "bg-cyan-100 text-slate-950"
                  : "text-white/80 hover:bg-white/10 hover:text-white"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

function NavButton({ item, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-lg px-4 py-2 transition ${
        active
          ? "bg-cyan-100 text-slate-950 shadow-[0_0_16px_rgba(103,232,249,0.18)]"
          : "hover:bg-white/10 hover:text-white"
      }`}
    >
      {item}
    </button>
  );
}
