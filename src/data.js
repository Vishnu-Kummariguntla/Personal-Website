export const profile = {
  name: "Vishnu Kummariguntla",
  tagline: "“Pursue excellence. Success will follow.”",
  intro:
    "I'm currently a student at Dougherty Valley High School and I am deeply interested in all the kinds of systems that come together to make the machines we interact with on a daily basis. I build projects ranging from robotics, to websites and more.",
  goal: "I am an engineer. My long-term goal is to build cool things that make life easier, and contribute to the development of humanity in a meaningful way",
  phone: "925-574-3060",
  email: "vishnu.kummariguntla@gmail.com",
  github: "Vishnu-Kummariguntla",
  linkedin:
    "https://www.linkedin.com/in/vishnu-kummariguntla-236315372/?skipRedirect=true",
  image: "/images/profile/profile.png",
};

export const coolThings = [
  {
    slug: "cricket-fan-engagement",
    title: "Cricket Fan Engagement",
    date: "2026",
    description:
      "Cricket Fan Engagement is an interactive IPL fan experience built with React and Vite. The app combines a product-style landing page, IPL 2026 squad browsing, player career timeline visualizations, and a personality-style fan quiz that maps user answers to cricket profiles. It uses JSON-backed roster and player data, Framer Motion, GSAP, Three.js, Firebase, and responsive CSS to create a polished cricket product experience.",
    image: "/images/ipl/home.png",
    repoUrl: "https://github.com/Vishnu-Kummariguntla/Cricket-Fan-Engagement",
    siteUrl: "https://cricketfanengagement.vercel.app/timeline",
    gallery: [
      {
        src: "/images/ipl/home.png",
        alt: "IPL Universe landing page",
        description:
          "The home screen introduces the IPL Universe with direct entry points for the season timeline, dream team builder, auction room, personality quiz, and 2026 team explorer.",
        skills: ["Product Design", "Navigation", "Three.js"],
      },
      {
        src: "/images/ipl/auction-room.png",
        alt: "IPL mega auction room",
        description:
          "A live auction simulator where users control a franchise purse, bid against AI teams, track squad limits, and build a balanced roster under IPL-style constraints.",
        skills: ["Game Logic", "State Management", "Interactive UI"],
      },
      {
        src: "/images/ipl/fan-quiz.png",
        alt: "Cricketer personality quiz",
        description:
          "A 25-question fan quiz compares user choices against 60 player profiles, tracks progress, and locks the result until every prompt is answered.",
        skills: ["Quiz Scoring", "Profile Matching", "UX Flow"],
      },
      {
        src: "/images/ipl/dream-team.png",
        alt: "IPL dream team builder",
        description:
          "The dream team builder lets users search and filter hundreds of players, assemble a Playing 12, choose an Impact Substitute, and compare team-score presets.",
        skills: ["Search", "Filtering", "Roster Building"],
      },
      {
        src: "/images/ipl/player-timeline.png",
        alt: "Virat Kohli career timeline",
        description:
          "Player timeline visualizations turn career milestones into a connected knowledge network, showing major seasons, trophies, records, team context, and legacy moments.",
        skills: ["Data Visualization", "Career Timelines", "Cricket Data"],
      },
      {
        src: "/images/ipl/season-timeline.png",
        alt: "IPL season timeline",
        description:
          "The IPL season timeline lets fans scrub through league history, highlighting champions, finals, Orange Cap winners, Purple Cap winners, and season-by-season context.",
        skills: ["Timeline UI", "Historical Data", "Responsive Layout"],
      },
    ],
    details: [
      "Built a React and Vite IPL fan experience with routes for a landing page, fan quiz, and player visualizations.",
      "Created an IPL 2026 squad browser with all 10 teams and player-level timeline visualizations.",
      "Designed a personality-style fan quiz with progress tracking, delayed reveal, and 60 possible cricketer matches.",
      "Used JSON-backed team, player, season, and timeline data to keep the interface data-driven and easier to update.",
      "Integrated Framer Motion, GSAP, Three.js, Firebase, and responsive CSS for animation, account features, and a polished product feel.",
    ],
  },
  {
    slug: "accounting-project",
    title: "MiniLedger",
    date: "2026",
    description:
      "MiniLedger is a browser-based finance and accounting dashboard built with HTML, CSS, JavaScript, and Node.js. The core feature is a frontend-only double-entry accounting system that lets users create a chart of accounts, post balanced journal entries, view a general ledger, generate a trial balance, import/export JSON data, and load sample transactions. The project also includes finance-learning sections for news, market signals, volatility, treasuries, equities, MBA flashcards, and SIE study tools. It was completed in 2026.",
    image: "/images/accounting/miniledger.svg",
    repoUrl: "https://github.com/teslaroadster68/Accounting-Project",
    gallery: [
      {
        src: "/images/accounting/sie-trainer.svg",
        alt: "SIE Trainer study tool",
        description:
          "A study interface for Securities Industry Essentials review, with practice prompts, answer tracking, and focused exam-prep sections.",
        skills: ["Finance Education", "Study Tools", "JavaScript"],
      },
    ],
    details: [
      "Built a frontend-only double-entry accounting workflow for creating accounts, posting balanced journal entries, reviewing ledger activity, and generating a trial balance.",
      "Added JSON import/export and sample transactions so users can save, reload, and quickly explore realistic accounting data.",
      "Included finance-learning modules covering market news, signals, volatility, treasuries, equities, MBA flashcards, and SIE study tools.",
      "Used HTML, CSS, JavaScript, and Node.js to structure the browser dashboard and supporting project environment.",
    ],
  },
  {
    slug: "ftc-robotics",
    title: "FTC Robotics",
    date: "2024-2025",
    description:
      "I participated in FIRST Tech Challenge (FTC), a competitive robotics program where teams design, build, and program robots to complete engineering challenges. As the builder and CAD designer on my team, I created detailed 3D models of the robot, designed mechanical systems, and helped assemble and optimize the bot for competition. I collaborated with teammates to test designs, solve engineering problems, and continuously improve the robot's performance throughout the season.",
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
        description:
          "A closer look at the robot hardware and mechanism layout during developmental phases and refinement.",
        skills: [
          "Computer Aided Design",
          "Engineering Process",
          "Design testing",
        ],
      },
      {
        src: "/images/ftc/robot-build-3.jpg",
        alt: "Autonomous programming",
        description:
          "A view of the process behind programming the autonomous part of the game",
        skills: ["Programming", "Fine Tuning"],
      },
      {
        src: "/images/ftc/robot-build-4.jpg",
        alt: "The trifold presentation",
        description:
          "A trifold showcasing all the different aspects of the team and the engineering process",
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

export const debateTournaments = [
  {
    tournament: "California State Tournament",
    result: "5th place",
    year: "2026",
    schoolYear: "Freshman year",
    description:
      "Finished 5th at the High School California State Tournament in Public Forum debate.",
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
    description:
      "Consistently reached elimination rounds in the varsity division at national tournaments including Berkeley, Princeton, and Stanford.",
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
    description:
      "Competed at Nationals in Public Forum debate during middle school.",
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
    description:
      "Competed at the Middle School Tournament of Champions in Public Forum debate.",
    centerResult: true,
    images: [],
  },
];

export const debateYearHighlights = {
  "Freshman year": [
    "Earned 5 bids to the Tournament of Champions.",
    "Debated over 110 rounds.",
    "Peak rank: #121 in the nation",
  ],
};

export const debateRoles = [
  {
    title: "Varsity Public Forum Captain",
    years: "2026-2027",
    description:
      "Served as Varsity Public Forum Captain for Dougherty Valley Speech & Debate, leading team organization, coordinating practices, mentoring underclassmen debaters, and helping drive competitive success at league and national-circuit tournaments. Collaborated closely with coaching staff to manage communication, preparation, and team development while remaining an active varsity competitor throughout the season.",
  },
];

export const debateEnjoymentReasons = [
  {
    title: "It teaches me to clearly articulate my ideas",
    description:
      "Before I started debate, I often found it hard to articulate my ideas concisely, but with the experience of adhering to speech times, I learned that every second counts which makes me more articulate.",
    icon: "MessageSquareText",
  },
  {
    title: "It makes me comfortable with pressure",
    description:
      "Fast rounds force me to listen carefully, think clearly, and make strategic decisions while the clock is running. Debate teaches me how to quickly weigh the benefits versus the harms of a decision.",
    icon: "Scale",
  },
  {
    title: "It builds real teamwork",
    description:
      "Preparing cases, drilling speeches, and adapting in round works best when my partner and I trust each other and communicate well. There are times when we disagree, but this activity has taught me to effectively work past disagreements quickly even under stress.",
    icon: "Handshake",
  },
];

export const hobbies = [
  {
    title: "Car spotting",
    description:
      "Tracking interesting cars, learning the details behind different models, and noticing how design and engineering choices show up in the real world.",
    icon: "Car",
    action: {
      label: "View Cars",
      path: "/cool-cars",
    },
  },
  {
    title: "Programming",
    description:
      "Building small tools and experiments, exploring how software systems work, and turning ideas into usable projects.",
    icon: "Code2",
    action: {
      label: "See Projects",
      path: "/cool-things",
    },
  },
  {
    title: "Cricket",
    description:
      "Following cricket, with an appreciation for the strategy, patience, and consistency the sport rewards.",
    icon: "CricketBat",
  },
  {
    title: "Debate",
    description:
      "Researching complex topics, building arguments, and practicing clear communication through Public Forum debate.",
    icon: "Mic",
    action: {
      label: "View Debate",
      path: "/debate",
    },
  },
];

export const carSpots = [
  {
    title: "McLaren 124c",
    image: "/images/car spotting/car.png",
    description:
      "A low, bright yellow McLaren spotted on the road, with wide rear haunches, dark rear aero, and the compact stance that makes modern McLaren designs stand out.",
  },
  {
    title: "Lamborghini Huracan STO",
    image: "/images/car spotting/car1.png",
    description:
      "A red Lamborghini Huracan with sharp front lighting, hood vents, and aggressive aero details. It has the dramatic wedge shape Lamborghini is known for.",
  },
  {
    title: "BMW E34 M5",
    image: "/images/car spotting/car2.png",
    description:
      "A classic BMW E34 sedan with lowered fitment and deep-dish wheels, giving an older executive car a much more purposeful stance.",
  },
  {
    title: "Ford Mustang GT Convertible",
    image: "/images/car spotting/car3.png",
    description:
      "A gray Mustang GT convertible with a black soft top, black wheels, and the long-hood profile that defines the modern Mustang.",
  },
  {
    title: "Mitsubishi Eclipse Display Car",
    image: "/images/car spotting/car4.png",
    description:
      "A Mitsubishi Eclipse with a show-car look, including a detailed hood pattern and bright purple bodywork that makes it hard to miss.",
  },
];

export const navItems = ["About", "Cool Things I've Done", "Debate", "Hobbies"];
