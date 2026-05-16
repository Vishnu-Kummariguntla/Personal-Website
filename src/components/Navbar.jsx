import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems, profile } from "../data";
import { pathForNavItem } from "../utils/navigation";

export default function Navbar({ route, onNavigate }) {
  const [open, setOpen] = useState(false);

  function handleNavigate(path) {
    onNavigate(path);
    setOpen(false);
  }

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/70 text-white backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <button
          onClick={() => handleNavigate("/")}
          className={`rounded-md px-2 py-2 text-left text-sm font-semibold tracking-tight transition ${
            route === "/" ? "text-white" : "text-white/62 hover:text-white"
          }`}
        >
          {profile.name}
        </button>

        <div className="hidden items-center gap-1 text-sm font-medium text-white/58 md:flex">
          {navItems.map((item) => (
            <NavButton
              key={item}
              item={item}
              active={route === pathForNavItem(item)}
              onClick={() => handleNavigate(pathForNavItem(item))}
            />
          ))}
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/5 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="flex flex-col gap-1 border-t border-white/10 bg-black/95 px-5 pb-4 pt-3 md:hidden">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleNavigate(pathForNavItem(item))}
              className={`rounded-md px-3 py-2 text-left transition ${
                route === pathForNavItem(item)
                  ? "bg-white/10 text-white"
                  : "text-white/62 hover:bg-white/5 hover:text-white"
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
      className={`rounded-md px-3 py-2 transition ${
        active ? "bg-white/10 text-white" : "hover:bg-white/5 hover:text-white"
      }`}
    >
      {item}
    </button>
  );
}
