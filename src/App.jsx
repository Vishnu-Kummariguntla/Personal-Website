import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Car, ChevronLeft, ChevronRight, Code2, Dumbbell, Github, Mail, Phone, Mic, User, Menu, X, ExternalLink } from "lucide-react";

// =============================
// EASY CUSTOMIZATION AREA
// Edit these arrays to add new updates, achievements, debate results, images, links, etc.
// =============================

const profile = {
  name: "Vishnu Kummariguntla",
  tagline: "Passionate Determined, and Consistent.",
  intro: "I'm currently a student at Dougherty Valley High School and I am deeply interested in all the kinds of systems that come together to make the machines we interact with on a daily basis. I love car spotting, programming, debating, and cricket.",
  goal: "My long-term goal is to build cool things that make life easier, and contribute to the development of humanity in a meaningful way",
  phone: "925-574-3060",
  email: "vishnu.kummariguntla@gmail.com",
  github: "Vishnu-Kummariguntla",
  image: "/images/profile/profile.png",
};

const coolThings = [
  {
    slug: "ftc-robotics",
    title: "FTC Robotics",
    date: "2024-2025",
    description: "I participated in FIRST Tech Challenge (FTC), a competitive robotics program where teams design, build, and program robots to complete engineering challenges. As the builder and CAD designer on my team, I created detailed 3D models of the robot, designed mechanical systems, and helped assemble and optimize the bot for competition. I collaborated with teammates to test designs, solve engineering problems, and continuously improve the robot’s performance throughout the season.",
    image: "/images/ftc/logo.png",
    gallery: [
      {
        src: "/images/ftc/robot-build-1.jpg",
        alt: "FTC robot build photo",
        description: "A team photo with the game field, and the bot.",
        skills: [],
      },
      {
        src: "/images/ftc/robot-build-2.jpg",
        alt: "FTC robot mechanism photo",
        description: "A closer look at the robot hardware and mechanism layout during developmental phases and refinement.",
        skills: ["Computer Aided Design", "Engineering Process", "Design testing"],
      },
      {
        src: "/images/ftc/robot-build-3.jpg",
        alt: "Autonomous programming",
        description: "A view of the process behind programming the autonomous part of the game",
        skills: ["Programming", "Fine Tuning",],
      },
      {
        src: "/images/ftc/robot-build-4.jpg",
        alt: "The trifold presentation",
        description: "A trifold showcasing all the different aspects of the team and the engineering process",
        skills: ["Collaboration", "Communication", "Exposition"],
      },
    ],
    details: [
      "Designed and iterated mechanical parts for the robot using CAD, with a focus on buildability and competition constraints.",
      "Helped assemble the robot and troubleshoot design problems during testing.",
      "Worked with teammates to improve reliability, optimize mechanisms, and prepare the robot for FTC match play.",
      "Practiced engineering documentation by turning ideas, sketches, and tests into clearer design decisions.",
    ],
  },
];

const debateTournaments = [
  {
    tournament: "California State Tournament",
    result: "5th place",
    year: "2026",
    schoolYear: "Freshman year",
    description: "Finished 5th at the High School California State Tournament in Public Forum debate.",
    centerResult: true,
    images: [
      {
        src: "/images/debate/states2.JPEG",
        alt: "California State Tournament debate photo",
      },
      {
        src: "/images/debate/states.png",
        alt: "California State Tournament awards photo",
      },
    ],
  },
  {
    tournament: "National Circuit Tournaments",
    result: "Varsity elimination rounds",
    year: "2026",
    schoolYear: "Freshman year",
    description: "Consistently reached elimination rounds in the varsity division at national tournaments including Berkeley, Princeton, and Stanford.",
    centerResult: true,
    images: [
      {
        src: "/images/debate/6079b048b75726ac0fe76fa8be06d980.JPEG",
        alt: "National circuit debate tournament photo",
      },
      {
        src: "/images/debate/IMG_0042.png",
        alt: "National circuit debate event photo",
      },
      {
        src: "/images/debate/IMG_7922.png",
        alt: "National circuit debate team photo",
      },
    ],
  },
  {
    tournament: "Nationals",
    result: "Champion",
    year: "2025",
    schoolYear: "Middle school",
    description: "Competed at Nationals in Public Forum debate during middle school.",
    centerResult: true,
    images: [
      {
        src: "/images/debate/nats.png",
        alt: "Nationals debate photo",
      },
      {
        src: "/images/debate/nats2.png",
        alt: "Nationals awards photo",
      },
      {
        src: "/images/debate/nats3.png",
        alt: "Nationals tournament photo",
      },
      {
        src: "/images/debate/nats4.JPG",
        alt: "Nationals team photo",
      },
    ],
  },
  {
    tournament: "Middle School Tournament of Champions",
    result: "Semifinalist (3rd)",
    year: "2025",
    schoolYear: "Middle school",
    description: "Competed at the Middle School Tournament of Champions in Public Forum debate.",
    centerResult: true,
    images: [],
  },
];

const debateYearHighlights = {
  "Freshman year": [
    "Earned 5 bids to the Tournament of Champions.",
    "Debated over 110 rounds.",
    "Peak rank: #121 in the nation"
  ],
};

const debateRoles = [
  {
    title: "Varsity Public Forum Captain",
    years: "2026-2027",
    description: "Served as Varsity Public Forum Captain for Dougherty Valley Speech & Debate, leading team organization, coordinating practices, mentoring underclassmen debaters, and helping drive competitive success at league and national-circuit tournaments. Collaborated closely with coaching staff to manage communication, preparation, and team development while remaining an active varsity competitor throughout the season.",
  },
];

const hobbies = [
  {
    title: "Car spotting",
    description: "Tracking interesting cars, learning the details behind different models, and noticing how design and engineering choices show up in the real world.",
    icon: Car,
  },
  {
    title: "Programming",
    description: "Building small tools and experiments, exploring how software systems work, and turning ideas into usable projects.",
    icon: Code2,
  },
  {
    title: "Cricket",
    description: "Following cricket, with an appreciation for the strategy, patience, and consistency the sport rewards.",
    icon: Dumbbell,
  },
  {
    title: "Debate",
    description: "Researching complex topics, building arguments, and practicing clear communication through Public Forum debate.",
    icon: Mic,
  },
];

const navItems = ["About", "Cool Things I've Done", "Debate", "Hobbies"];

function getProjectSortYear(project) {
  const years = project.date.match(/\d{4}/g)?.map(Number) ?? [0];
  return Math.max(...years);
}

function getDebateYear(event) {
  return Number(event.year.match(/\d{4}/)?.[0] ?? 0);
}

const debateYearOrder = ["Freshman year", "Middle school", "Sophomore year", "Junior year", "Senior year"];
const sortedCoolThings = [...coolThings].sort((a, b) => getProjectSortYear(b) - getProjectSortYear(a));
const debateTournamentGroups = debateYearOrder
  .map((schoolYear) => ({
    schoolYear,
    highlights: debateYearHighlights[schoolYear] ?? [],
    tournaments: debateTournaments
      .filter((event) => event.schoolYear === schoolYear)
      .sort((a, b) => getDebateYear(a) - getDebateYear(b)),
  }))
  .filter((group) => group.highlights.length > 0 || group.tournaments.length > 0);

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function sectionId(item) {
  const sectionIds = {
    About: "about",
    "Cool Things I've Done": "cool-things",
    Debate: "debate",
    Hobbies: "hobbies",
  };

  return sectionIds[item] ?? item.toLowerCase().replaceAll(" ", "-");
}

function InteractiveBackground() {
  const [mouse, setMouse] = useState({ x: 50, y: 50 });

  useEffect(() => {
    function handlePointerMove(e) {
      setMouse({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    }

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-slate-950">
      <div
        className="absolute inset-0 transition-all duration-300"
        style={{
          background: `radial-gradient(circle at ${mouse.x}% ${mouse.y}%, rgba(56, 189, 248, 0.48), transparent 26%), radial-gradient(circle at ${100 - mouse.x}% ${100 - mouse.y}%, rgba(168, 85, 247, 0.36), transparent 30%), radial-gradient(circle at ${mouse.y}% ${100 - mouse.x}%, rgba(34, 197, 94, 0.18), transparent 24%), linear-gradient(135deg, #020617, #0f172a, #111827)`,
        }}
      />

      <div className="absolute inset-0 opacity-30 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:48px_48px]" />

      {[...Array(28)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-white/40 blur-[1px]"
          style={{
            left: `${(i * 37) % 100}%`,
            top: `${(i * 53) % 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.9, 0.2],
            scale: [1, 1.7, 1],
          }}
          transition={{
            duration: 3 + (i % 5),
            repeat: Infinity,
            delay: i * 0.15,
          }}
        />
      ))}

      <motion.div
        className="absolute -left-32 top-24 w-96 h-96 rounded-full bg-cyan-400/20 blur-3xl"
        animate={{ x: mouse.x * 1.4 - 70, y: mouse.y * 0.9 - 45 }}
        transition={{ type: "spring", stiffness: 45, damping: 22 }}
      />
      <motion.div
        className="absolute right-0 bottom-0 w-[32rem] h-[32rem] rounded-full bg-purple-500/20 blur-3xl"
        animate={{ x: mouse.x * -1.1 + 55, y: mouse.y * -0.8 + 40 }}
        transition={{ type: "spring", stiffness: 38, damping: 24 }}
      />
    </div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-xl border-b border-white/10 text-white">
      <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
        <button onClick={() => scrollToSection("home")} className="font-bold text-xl tracking-tight">
          {profile.name}
        </button>

        <div className="hidden md:flex gap-6 text-sm font-medium text-white/80">
          {navItems.map((item) => (
            <button key={item} onClick={() => scrollToSection(sectionId(item))} className="hover:text-white">
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

function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-10">
      <p className="uppercase tracking-[0.25em] text-xs font-bold text-slate-500 mb-3">{eyebrow}</p>
      <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-300">{title}</h2>
      {subtitle && <p className="mt-4 text-slate-400 max-w-2xl leading-7">{subtitle}</p>}
    </div>
  );
}

function Card({ children }) {
  return <div className="rounded-3xl bg-white/80 backdrop-blur-xl border border-white/30 shadow-sm p-6 text-slate-700">{children}</div>;
}

function ContactWatermark() {
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

function ProjectDetailPage({ project, onBack }) {
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

          <section className="pt-14 pb-20">
            <p className="text-sm font-bold tracking-[0.25em] uppercase text-cyan-200 mb-4">
              {project.date}
            </p>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight mb-8">
              {project.title}
            </h1>

            <div className="rounded-3xl overflow-hidden bg-white border border-white/20 p-8 mb-10">
              <img src={project.image} alt={project.title} className="mx-auto max-h-72 max-w-full object-contain" />
            </div>

            <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-6">
              <Card>
                <h2 className="text-3xl font-black tracking-tight text-slate-700 mb-4">Overview</h2>
                <p className="text-slate-700 leading-8">{project.description}</p>
              </Card>

              <Card>
                <h2 className="text-3xl font-black tracking-tight text-slate-700 mb-4">Specifics</h2>
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
              <section className="mt-10">
                <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">FTC Gallery</h2>
                <div className="grid md:grid-cols-2 gap-5">
                  {project.gallery.map((image, index) => (
                    <figure
                      key={image.src}
                      className={index === 0 ? "group relative md:col-span-2 rounded-3xl overflow-hidden bg-white/10 border border-white/10" : "group relative rounded-3xl overflow-hidden bg-white/10 border border-white/10"}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className={index === 0 ? "w-full h-[26rem] object-cover object-center transition duration-300 group-hover:scale-105" : "w-full h-72 object-cover object-center transition duration-300 group-hover:scale-105"}
                      />
                      <figcaption className="absolute inset-x-0 bottom-0 translate-y-full bg-slate-950/90 p-5 text-white backdrop-blur-xl transition duration-300 group-hover:translate-y-0">
                        <h3 className="text-xl font-bold mb-2">{image.alt}</h3>
                        <p className="text-sm leading-6 text-white/75 mb-4">{image.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {image.skills.map((skill) => (
                            <span key={skill} className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-cyan-100">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </figcaption>
                    </figure>
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

export default function App() {
  const [route, setRoute] = useState(() => window.location.pathname);
  const timelineRef = useRef(null);
  const [timelinePosition, setTimelinePosition] = useState({ scrollLeft: 0, viewportWidth: 0, scrollWidth: 0 });
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
  }, [route]);

  function navigateTo(path) {
    window.history.pushState({}, "", path);
    setRoute(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

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
    const viewportCenter = timelinePosition.scrollLeft + timelinePosition.viewportWidth / 2;
    const distance = Math.max(-2.1, Math.min(2.1, (cardCenter - viewportCenter) / cardStep));
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

  const timelineMaxScroll = Math.max(0, timelinePosition.scrollWidth - timelinePosition.viewportWidth);
  const timelineProgress = timelineMaxScroll
    ? Math.min(100, Math.max(0, (timelinePosition.scrollLeft / timelineMaxScroll) * 100))
    : 0;
  const canScrollTimelineBack = timelinePosition.scrollLeft > 4;
  const canScrollTimelineForward = timelinePosition.scrollLeft < timelineMaxScroll - 4;

  if (selectedProject) {
    return <ProjectDetailPage project={selectedProject} onBack={() => navigateTo("/")} />;
  }

  return (
    <div className="min-h-screen text-slate-700 relative">
      <InteractiveBackground />
      <ContactWatermark />
      <div className="relative z-10">
        <Navbar />

        <section id="home"className="pt-32 pb-20 px-5 text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-5xl md:text-5xl font-black tracking-tight leading-tight">
              <span className="text-cyan-200">{profile.tagline}</span>
            </h1>
            <p className="mt-5 text-3xl text-slate-300"> Hi, I'm Vishnu and I like building things.</p>
            <p className="mt-6 text-white/75 leading-8 max-w-xl">{profile.intro}</p>
            <p className="mt-4 max-w-xl rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-cyan-100 font-semibold leading-7 backdrop-blur-xl">
              {profile.goal}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button onClick={() => scrollToSection("about")} className="px-5 py-3 rounded-2xl bg-slate-950 text-white font-semibold shadow-sm">
                Learn more about me
              </button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="relative">
            <div className="absolute -inset-4 bg-slate-300 rounded-[2rem] blur-3xl opacity-40" />
            <img src={profile.image} alt="Profile" className="relative rounded-[2rem] shadow-xl w-full h-[430px] object-cover" />
          </motion.div>
        </div>
        </section>

        <section id="about" className="py-20 px-5 text-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="About Me"
            title="A quick snapshot"
            subtitle="Asking questions since 2011"
          />
          <Card>
            <div className="grid md:grid-cols-[80px_1fr] gap-6 items-start">
              <div className="w-16 h-16 rounded-2xl bg-slate-950 text-white flex items-center justify-center">
                <User size={30} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">My story</h3>
                <p className="text-slate-700 leading-8">I was born in Washington on March 3rd 2011, and ever since I was a kid, I had a facination with building things, and finding solutions to problems. From a young age, I enjoyed building Lego sets, and basic programming. Since then I have continued to explore engineering, and building concepts.</p>
                <button
                  onClick={() => scrollToSection("cool-things")}
                  className="mt-5 px-5 py-3 rounded-2xl bg-slate-950 text-white font-semibold shadow-sm"
                >
                  See My Work
                </button>
              </div>
            </div>
          </Card>
        </div>
        </section>

        <section id="cool-things" className="py-20 px-5 bg-slate-950 text-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Projects & More"
            title="Cool things I’ve done"
          />
          <p className="mb-3 max-w-3xl text-white/75 leading-8">
            I love building things because I love watching complex systems come together to create one cohesive product. Every project I do fuels my passion for engineering. Listed below are the various projects and activities I have done over the years and all the things I have learned from them. 
          </p>
          <p className="mb-3 max-w-3xl text-white/75 leading-8">
            In my view these are the aspects of a successful project:
          </p>
          <ul className="mb-6 max-w-3xl list-disc space-y-2 pl-6 text-slate-300 leading-7">
            <li>It solves a real problem or makes something easier to use.</li>
            <li>It shows consistent results, and achieves what I have intended</li>
            <li>It teaches me something new that I can carry into future projects.</li>
          </ul>
          <p className="mb-6 text-sm font-semibold text-slate-300">
            Scroll sideways through the timeline to see projects from most recent to oldest.
          </p>
          <div className="relative">
            <div className="absolute left-0 right-0 top-12 hidden h-px bg-white/20 md:block" />
            <div
              ref={timelineRef}
              onScroll={handleTimelineScroll}
              className="timeline-scrollbar flex gap-14 overflow-x-auto snap-x snap-mandatory pb-12 [perspective:850px] [transform-style:preserve-3d]"
            >
              {sortedCoolThings.map((thing, index) => (
                <motion.article
                  key={thing.title}
                  initial={{ opacity: 0, x: 36 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ delay: index * 0.1 }}
                  style={getTimelineCardStyle(index)}
                  className="relative min-w-[19rem] md:min-w-[26rem] snap-center pt-24 transition-all duration-300 ease-out [transform-style:preserve-3d]"
                >
                  <p className="absolute left-1/2 top-1 -translate-x-1/2 whitespace-nowrap text-sm font-black text-cyan-200">
                    {thing.date}
                  </p>
                  <div className="absolute left-1/2 top-9 h-6 w-6 -translate-x-1/2 rounded-full border-4 border-slate-950 bg-cyan-200 shadow-[0_0_0_6px_rgba(255,255,255,0.12)]" />
                  <div className="rounded-3xl overflow-hidden bg-white/10 border border-white/10">
                    <div className="h-56 bg-white flex items-center justify-center p-6">
                      <img src={thing.image} alt={thing.title} className="max-h-full max-w-full object-contain" />
                    </div>
                    <div className="p-6">
                      <p className="text-sm text-cyan-200 font-bold mb-2">{thing.date}</p>
                      <h3 className="text-2xl font-bold mb-3">{thing.title}</h3>
                      <p className="text-slate-300 leading-7 mb-4 line-clamp-5">{thing.description}</p>
                      <button
                        onClick={() => navigateTo(`/projects/${thing.slug}`)}
                        className="inline-flex items-center gap-2 font-semibold"
                      >
                        View more <ExternalLink size={16} />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-3">
              <button
                type="button"
                onClick={() => scrollTimeline(-1)}
                disabled={!canScrollTimelineBack}
                aria-label="Scroll project timeline left"
                className="flex h-10 w-10 flex-none items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-35"
              >
                <ChevronLeft size={20} />
              </button>
              <div className="h-2 min-w-0 flex-1 overflow-hidden rounded-full bg-white/15">
                <div
                  className="h-full rounded-full bg-cyan-200 transition-[width] duration-200"
                  style={{ width: `${timelineMaxScroll ? Math.max(12, timelineProgress) : 100}%` }}
                />
              </div>
              <button
                type="button"
                onClick={() => scrollTimeline(1)}
                disabled={!canScrollTimelineForward}
                aria-label="Scroll project timeline right"
                className="flex h-10 w-10 flex-none items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-35"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
        </section>

        <section id="debate" className="py-20 px-5 text-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Debate"
            title="Tournament history and debate profile"
            subtitle="I am a competitive Public Forum debater for Dougherty Valley High School with extensive experience on the national circuit. Over the course of my debate career, I have competed at major invitationals across the country, consistently breaking to elimination rounds and earning multiple Tournament of Champions bids. Through debate, I have developed strong skills in public speaking, research, critical thinking, argumentation, and teamwork while debating complex topics involving international relations, technology, economics, and public policy."
          />
          <div className="space-y-10">
            <div>
              <h3 className="mb-5 text-2xl font-bold text-slate-300">Tournament Results</h3>
              <div className="space-y-8">
                {debateTournamentGroups.map((group) => (
                  <div key={group.schoolYear}>
                    <h4 className="mb-4 text-xl font-bold text-cyan-200">{group.schoolYear}</h4>
                    {group.highlights.length > 0 && (
                      <div className="mb-5 space-y-2">
                        {group.highlights.map((highlight) => (
                          <div key={highlight} className="flex gap-3 text-slate-300 leading-7">
                            <span className="mt-3 h-2 w-2 flex-none rounded-full bg-cyan-200" />
                            <p>{highlight}</p>
                          </div>
                        ))}
                      </div>
                    )}
                    <div className="space-y-5">
                      {group.tournaments.map((event) => (
                        <Card key={`${event.schoolYear}-${event.year}-${event.tournament}`}>
                          <div>
                            <div className={event.centerResult ? "flex flex-col gap-4" : "flex flex-col md:flex-row md:items-center md:justify-between gap-4"}>
                              <div>
                                <p className="text-sm text-slate-500 font-semibold">{event.year}</p>
                                <h5 className="text-2xl font-bold">{event.tournament}</h5>
                                <p className="mt-2 text-slate-700">{event.description}</p>
                              </div>
                              <div className={`${event.centerResult ? "mx-auto text-center" : ""} px-4 py-2 rounded-full bg-slate-100 font-bold text-slate-600 w-fit`}>
                                {event.result}
                              </div>
                            </div>
                            {event.images?.length > 0 && (
                              <div className="mt-5 grid justify-center gap-3 md:grid-cols-2">
                                {event.images.map((image) => (
                                  <div key={image.src} className="flex h-72 w-full items-center justify-center overflow-hidden rounded-2xl p-3">
                                    <img
                                      src={image.src}
                                      alt={image.alt}
                                      className="h-full w-full rounded-xl object-contain"
                                    />
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        </Card>
                      ))}
                      </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-5 text-2xl font-bold text-slate-300">Roles</h3>
              <div className="grid md:grid-cols-2 gap-5">
                {debateRoles.map((role) => (
                  <Card key={role.title}>
                    <div className="flex gap-4">
                      <div className="w-14 h-14 flex-none rounded-2xl bg-slate-950 text-white flex items-center justify-center">
                        <Mic size={26} />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500 font-semibold">{role.years}</p>
                        <h4 className="text-2xl font-bold">{role.title}</h4>
                        <p className="mt-2 text-slate-700">{role.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
        </section>

        <section id="hobbies" className="py-20 px-5 text-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Hobbies"
            title="What I do outside class"
            subtitle="A few interests that keep me curious, observant, and consistent."
          />
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hobbies.map((hobby) => {
              const Icon = hobby.icon;

              return (
                <Card key={hobby.title}>
                  <div className="w-14 h-14 rounded-2xl bg-slate-950 text-white flex items-center justify-center mb-5">
                    <Icon size={26} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{hobby.title}</h3>
                  <p className="text-slate-600 leading-7">{hobby.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
        </section>

        <footer className="py-10 px-5 border-t border-white/10 text-center text-white/60">
          <p>© {new Date().getFullYear()} {profile.name}. Built as a living portfolio.</p>
        </footer>
      </div>
    </div>
  );
}
