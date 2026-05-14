import React from "react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
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
    {
      label: "LinkedIn",
      href: profile.linkedin,
      icon: Linkedin,
      external: true,
    },
  ];

  return (
    <aside className="group fixed bottom-4 right-4 z-[60] max-w-[calc(100vw-2rem)] rounded-lg border border-white/15 bg-slate-950/78 p-2 text-xs font-semibold text-white/80 shadow-lg backdrop-blur-md transition-all duration-300 hover:bg-slate-950/92 hover:p-3">
      <div className="flex items-center justify-center gap-2 group-hover:justify-end">
        <span className="inline-flex min-w-20 items-center justify-center rounded-md bg-white/10 px-3 py-2 text-center text-white/75 transition-all duration-300 group-hover:bg-cyan-200 group-hover:text-slate-700">
          Contact
        </span>
        <div className="contact-scrollbar flex max-w-0 items-center gap-2 overflow-hidden opacity-0 transition-all duration-300 group-hover:max-w-[min(42rem,calc(100vw-9rem))] group-hover:overflow-x-auto group-hover:opacity-100">
          {contacts.map((contact) => {
            const Icon = contact.icon;

            return (
              <a
                key={contact.href}
                className="flex items-center gap-2 whitespace-nowrap rounded-md border border-white/10 bg-white/10 px-3 py-2 text-white/80 transition hover:bg-white/20 hover:text-white"
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
