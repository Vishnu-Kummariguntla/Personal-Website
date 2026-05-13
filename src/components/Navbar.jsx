import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems, profile } from "../data";
import { scrollToSection, sectionId } from "../utils/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-xl border-b border-white/10 text-white">
      <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
        <button
          onClick={() => scrollToSection("home")}
          className="font-bold text-xl tracking-tight"
        >
          {profile.name}
        </button>

        <div className="hidden md:flex gap-6 text-sm font-medium text-white/80">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(sectionId(item))}
              className="hover:text-white"
            >
              {item}
            </button>
          ))}
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-slate-950/95 border-t border-white/10 px-5 pb-4 flex flex-col gap-3">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => {
                scrollToSection(sectionId(item));
                setOpen(false);
              }}
              className="text-left py-2 text-white/80"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
