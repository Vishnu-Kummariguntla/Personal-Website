import React from "react";
import { Github, Mail, Phone } from "lucide-react";
import { profile } from "../data";

export default function ContactWatermark() {
  const contacts = [
    {
      label: profile.phone,
      href: `tel:${profile.phone.replaceAll("-", "")}`,
      icon: Phone,
    },
    {
      label: profile.email,
      href: `mailto:${profile.email}`,
      icon: Mail,
    },
    {
      label: profile.github,
      href: `https://github.com/${profile.github}`,
      icon: Github,
      external: true,
    },
  ];

  return (
    <aside className="group fixed bottom-4 right-4 z-[60] max-w-[calc(100vw-2rem)] rounded-full border border-white/15 bg-slate-950/70 p-2 text-xs font-semibold text-white/80 shadow-xl backdrop-blur-xl transition-all duration-300 hover:rounded-3xl hover:bg-slate-950/90 hover:p-3">
      <div className="flex items-center justify-center gap-2 group-hover:justify-end">
        <span className="inline-flex min-w-20 items-center justify-center rounded-full bg-white/10 px-3 py-2 text-center text-white/75 transition-all duration-300 group-hover:bg-cyan-200 group-hover:text-slate-700">
          Contact
        </span>
        <div className="flex max-w-0 items-center gap-2 overflow-hidden opacity-0 transition-all duration-300 group-hover:max-w-[42rem] group-hover:opacity-100">
          {contacts.map((contact) => {
            const Icon = contact.icon;

            return (
              <a
                key={contact.href}
                className="flex items-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-white/10 px-3 py-2 text-white/80 transition hover:bg-white/20 hover:text-white"
                href={contact.href}
                target={contact.external ? "_blank" : undefined}
                rel={contact.external ? "noreferrer" : undefined}
              >
                <Icon size={15} />
                <span>{contact.label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
