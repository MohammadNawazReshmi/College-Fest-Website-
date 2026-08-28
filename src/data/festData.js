export const FEST_DETAILS = {
  name: "PULSE 2026",
  tagline: "The Ultimate Cultural & Tech Odyssey",
  dates: "OCTOBER 24 - 26, 2026",
  venue: "St. Xavier Institute Campus, Main Grounds & Tech Arena",
  countdownTarget: "2026-10-24T09:00:00",
  totalEvents: 28,
  totalPrize: "$15,000+",
  expectedFootfall: "18,000+",
};

export const ANNOUNCEMENTS = [
  "🔥 Early Bird Registration open for HackPulse 2026 - Win up to $4,000!",
  "🎧 Star DJ Night headliner revealed: DJ KSHMR Live on Oct 25th!",
  "⚡ E-Sports Tournament prize pool increased! BGMI & Valorant slots filling fast.",
  "🏆 Battle of the Bands registration closing in 48 hours. Register your college team!",
  "🎭 Fashion Show 'Cosmic Runway' theme officially released: Cyberpunk Futurism."
];

export const EVENT_CATEGORIES = [
  { id: "all", label: "All Events" },
  { id: "tech", label: "Technical & AI" },
  { id: "cultural", label: "Cultural & Music" },
  { id: "esports", label: "Gaming & E-Sports" },
  { id: "arts", label: "Arts & Drama" },
];

export const EVENTS_DATA = [
  {
    id: "hackpulse",
    category: "tech",
    title: "HackPulse 24hr Hackathon",
    tagline: "Build real-world AI solutions under 24 hours",
    prize: "$4,000",
    teamSize: "2 - 4 Members",
    day: "Day 1 (Oct 24)",
    time: "10:00 AM Onwards",
    venue: "Main Tech Auditorium & Innovation Lab",
    fee: "Free Entry",
    description: "The flagship hackathon of PULSE '26. Create innovative software or hardware solutions around Generative AI, Sustainable Tech, or Web3. Mentors from top tech firms will guide teams.",
    rules: [
      "24-hour non-stop hackathon.",
      "All code must be written during the event.",
      "Use of open-source libraries and APIs permitted.",
      "Final pitch of 5 minutes before the jury panel."
    ],
    coordinator: "Aarav Sharma (+91 98765 43210)"
  },
  {
    id: "battle-of-bands",
    category: "cultural",
    title: "VibeNation: Battle of the Bands",
    tagline: "Unleash raw electric energy on the main stage",
    prize: "$3,000",
    teamSize: "3 - 8 Members",
    day: "Day 2 (Oct 25)",
    time: "05:00 PM Onwards",
    venue: "Open Air Amphitheatre (Main Stage)",
    fee: "$15 per Band",
    description: "Bring down the house with your original tracks and electric covers. Rock, Pop, Metal, Fusion - all genres are welcome to battle for the championship trophy.",
    rules: [
      "15 minutes slot per band including setup time.",
      "At least 1 original song mandatory.",
      "Drum kit and PA provided; bring your own guitars/processors."
    ],
    coordinator: "Riya Verma (+91 98765 43211)"
  },
  {
    id: "valorant-championship",
    category: "esports",
    title: "Apex Arena: Valorant 5v5",
    tagline: "Tactical shooter showdown on high-end rigs",
    prize: "$2,500",
    teamSize: "5 Players + 1 Sub",
    day: "Day 1 & 2 (Oct 24-25)",
    time: "11:00 AM Onwards",
    venue: "Gaming Zone B, Computer Lab 3",
    fee: "$10 per Team",
    description: "Double elimination tournament played on 240Hz gaming monitors. Prove your squad's tactical prowess and aim precision.",
    rules: [
      "Custom matches 5v5, Competitive settings.",
      "Map veto system prior to each match.",
      "All players must carry valid student IDs."
    ],
    coordinator: "Karan Mehta (+91 98765 43212)"
  },
  {
    id: "cosmic-runway",
    category: "cultural",
    title: "Cosmic Runway: Fashion Show",
    tagline: "Elegance meets Cyberpunk Futurism",
    prize: "$2,000",
    teamSize: "8 - 15 Models",
    day: "Day 3 (Oct 26)",
    time: "06:30 PM Onwards",
    venue: "Grand Indoor Sports Complex Stage",
    fee: "$20 per Team",
    description: "Express bold artistic vision, stunning choreography, and high-fashion aesthetics centered around the theme: Cyberpunk & Galactic Horizons.",
    rules: [
      "Time limit: 12 minutes max on stage.",
      "Background music and visuals to be submitted 24 hours prior.",
      "Judging based on theme portrayal, garment design, and walk confidence."
    ],
    coordinator: "Ananya Roy (+91 98765 43213)"
  },
  {
    id: "code-blitz",
    category: "tech",
    title: "CodeBlitz: Speed Competitive Coding",
    tagline: "Fastest fingers, cleanest algorithms",
    prize: "$1,200",
    teamSize: "Solo / Individual",
    day: "Day 2 (Oct 25)",
    time: "02:00 PM Onwards",
    venue: "Tech Lab 102",
    fee: "Free Entry",
    description: "Solve complex data structure and algorithmic challenges under tight time pressure. Supported languages: C++, Python, Java, Rust.",
    rules: [
      "Automated evaluation platform (Codeforces style).",
      "Negative marking for wrong submissions.",
      "No internet access allowed outside the test platform."
    ],
    coordinator: "Vikram Das (+91 98765 43214)"
  },
  {
    id: "street-dance-off",
    category: "cultural",
    title: "Beat Drop: 1v1 Street Dance Battle",
    tagline: "Hip-hop, Popping, Krump & Breaking battle",
    prize: "$1,000",
    teamSize: "Solo",
    day: "Day 1 (Oct 24)",
    time: "04:00 PM Onwards",
    venue: "Student Plaza Circle",
    fee: "$5 Entry",
    description: "Improvise on random DJ beats in a circular crowd circle battle! Showcase rhythm, stamina, and original moves.",
    rules: [
      "Audition round -> Top 16 KO battles.",
      "2 rounds of 45 seconds per dancer in battle.",
      "Judged by celebrity street dancers."
    ],
    coordinator: "Rohan Kapoor (+91 98765 43215)"
  },
  {
    id: "bgmi-squads",
    category: "esports",
    title: "Mobile Legends: BGMI Erangel Clash",
    tagline: "Survive the zone, claim victory",
    prize: "$1,500",
    teamSize: "4 Players",
    day: "Day 3 (Oct 26)",
    time: "12:00 PM Onwards",
    venue: "E-Sports Arena Tent",
    fee: "$8 per Squad",
    description: "4 custom Erangel and Miramar matches. Highest total kill + placement points takes home the trophy.",
    rules: [
      "Only official mobile devices allowed (No emulators).",
      "Hacking or exploiting results in immediate ban."
    ],
    coordinator: "Devansh Patel (+91 98765 43216)"
  },
  {
    id: "short-film",
    category: "arts",
    title: "LensCraft: 48hr Short Film Making",
    tagline: "Create cinematic magic around a surprise prompt",
    prize: "$1,200",
    teamSize: "Up to 5 Crew",
    day: "Day 1-3 (Oct 24-26)",
    time: "Submission Oct 26, 02:00 PM",
    venue: "Media Studio 3",
    fee: "Free Entry",
    description: "A prop and tagline will be revealed at launch. Script, shoot, and edit a 3 to 5-minute film within 48 hours.",
    rules: [
      "Film duration: 3 to 5 minutes.",
      "Must include mandatory prop revealed at start.",
      "Original score or royalty-free audio mandatory."
    ],
    coordinator: "Siddharth Rao (+91 98765 43217)"
  }
];

export const SCHEDULE_DAYS = [
  {
    id: "day1",
    label: "Day 1 - Oct 24",
    title: "Ignition & Tech Horizons",
    events: [
      { time: "09:00 AM", title: "Grand Inauguration Ceremony", venue: "Main Auditorium", type: "Ceremony" },
      { time: "10:00 AM", title: "HackPulse 24hr Hackathon Kickoff", venue: "Innovation Lab", type: "Tech" },
      { time: "11:00 AM", title: "Valorant Prelims (5v5)", venue: "Gaming Zone B", type: "E-Sports" },
      { time: "02:00 PM", title: "Robo Soccer League", venue: "Courtyard Field", type: "Tech" },
      { time: "04:00 PM", title: "Beat Drop: 1v1 Dance Battle", venue: "Student Plaza", type: "Cultural" },
      { time: "07:00 PM", title: "Indie Rock Night ft. The Yellow Diary", venue: "Main Stage", type: "Pronite" },
    ]
  },
  {
    id: "day2",
    label: "Day 2 - Oct 25",
    title: "Battleground & Beat Drop",
    events: [
      { time: "10:00 AM", title: "CodeBlitz Speed Coding", venue: "Tech Lab 102", type: "Tech" },
      { time: "11:30 AM", title: "AI Prompt Engineering Contest", venue: "Media Room 1", type: "Tech" },
      { time: "02:00 PM", title: "Valorant Finals & Live Cast", venue: "Main Auditorium Screen", type: "E-Sports" },
      { time: "05:00 PM", title: "VibeNation: Battle of the Bands", venue: "Amphitheatre", type: "Cultural" },
      { time: "08:30 PM", title: "Star EDM Night ft. DJ KSHMR", venue: "Festival Grounds", type: "Pronite" },
    ]
  },
  {
    id: "day3",
    label: "Day 3 - Oct 26",
    title: "Grand Finale & Pronite",
    events: [
      { time: "10:00 AM", title: "Short Film Screening & Judging", venue: "Media Studio 3", type: "Arts" },
      { time: "12:00 PM", title: "BGMI Erangel Squads Finals", venue: "E-Sports Tent", type: "E-Sports" },
      { time: "03:00 PM", title: "Stand-Up Comedy Special", venue: "Main Auditorium", type: "Comedy" },
      { time: "06:30 PM", title: "Cosmic Runway: Fashion Show", venue: "Sports Complex", type: "Cultural" },
      { time: "09:00 PM", title: "Grand Awards Ceremony & Concert", venue: "Main Arena Stage", type: "Pronite" },
    ]
  }
];

export const PRONITE_STAR_ARTISTS = [
  {
    id: "dj-kshmr",
    name: "DJ KSHMR",
    genre: "EDM / Progressive House",
    day: "Day 2 - Oct 25",
    time: "08:30 PM",
    image: "/performer.jpg",
    description: "World-renowned electronic music producer bringing lasers, pyrotechnics, and massive bass to PULSE '26!",
    badge: "EDM HEADLINER"
  },
  {
    id: "yellow-diary",
    name: "The Yellow Diary",
    genre: "Alternative Rock / Indie Fusion",
    day: "Day 1 - Oct 24",
    time: "07:00 PM",
    image: "/fest_hero.jpg",
    description: "Soulful vocals, powerful synth lines, and hit anthems that will make thousands sing in unison.",
    badge: "INDIE ROCK NIGHT"
  }
];

export const SPONSORS = [
  { name: "Red Bull", category: "Energy Partner", logoText: "RED BULL" },
  { name: "GitHub", category: "Developer Partner", logoText: "GITHUB" },
  { name: "Spotify", category: "Music Partner", logoText: "SPOTIFY" },
  { name: "Logitech G", category: "Gaming Gear Partner", logoText: "LOGITECH G" },
  { name: "Razorpay", category: "Payments Partner", logoText: "RAZORPAY" },
  { name: "Intel", category: "Tech Sponsor", logoText: "INTEL" },
];

export const FAQS = [
  {
    q: "Who is eligible to participate in PULSE 2026?",
    a: "Students currently enrolled in any undergraduate or postgraduate program with a valid college ID card can participate in any event."
  },
  {
    q: "How do I receive my Fest Pass?",
    a: "After filling out the online registration form on this portal, an instant digital pass with a unique QR Code and Pass ID will be generated. You can save or screenshot it for gate entry."
  },
  {
    q: "Are outside college students allowed for Star Pronites?",
    a: "Yes! Outside college attendees with a valid Fest Pass and college ID card are allowed entry to the Pronite grounds."
  },
  {
    q: "Is accommodation available for outstation teams?",
    a: "Yes, hostel dormitory accommodation is available for registered outstation participants at nominal rates. Contact our hospitality desk after registration."
  }
];
