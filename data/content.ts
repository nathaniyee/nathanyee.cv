// ============================================================
// SITE CONFIGURATION — edit this section for your identity
// ============================================================

export const siteConfig = {
  name: "Nathan Yee",
  tagline: "Software Engineer Intern @ Apple · CS @ UT Austin",
  bio: [
    "I am a Computer Science student at the University of Texas at Austin, with deep interests in full-stack software engineering, data systems, and automotive technology.",
    "Feel free to explore this website, or reach out if you want to connect!",
  ],
  terminalUser: "nathan",
  terminalDomain: "nathanyee.cv",
  social: {
    github: "https://github.com/nathaniyee",
    linkedin: "https://linkedin.com/in/nathaniyee",
    leetcode: "https://leetcode.com/u/nathanyee/",
  },
  email: "nathanyee99@gmail.com",
  resume: "/resume.pdf",
} as const;

// ============================================================
// CONTENT MODEL
// ============================================================

export interface ContentNode {
  id: string;
  path: string;
  title: string;
  /** One-line summary used in `ls` output and portfolio lists */
  short: string;
  body: string;
  externalUrl?: string;
}

// ============================================================
// CONTENT ENTRIES
// ============================================================

const CONTENT: ContentNode[] = [
  // ── Root files ────────────────────────────────────────────
  {
    id: "welcome.md",
    path: "/welcome.md",
    title: "Welcome",
    short: "Start here",
    body: `# Hi, I'm Nathan.

Type \`ls\` to explore, \`cat <file>\` to read, or \`help\` for a full command list.

**Quick start:**
- \`ls /experience\` — where I've worked
- \`ls /projects\` — things I've built
- \`ls /education\` — what I've studied
- \`ls /misc\` — everything else
- \`photo\` — mog?
- \`cat bio.md\` — a quick introduction`,
  },
  {
    id: "bio.md",
    path: "/bio.md",
    title: "Bio",
    short: "About me",
    body: `# About Me

Hello! I'm Nathan Yee, a Computer Science student at the University of Texas at Austin and a Software Engineer Intern at Apple.

I enjoy building full-stack applications and data-driven tools, especially in environments where software interacts with real-world systems. On campus, I am involved with Longhorn Racing, UT's Formula Student team, where I write software for and conduct tests for our FSAE race car.

When I'm not coding, I enjoy traveling with friends and family, playing competitive trivia games, or cheering for my favorite sports teams.`,
  },

  // ── Experience ────────────────────────────────────────────
  {
    id: "experience/apple.md",
    path: "/experience/apple.md",
    title: "Apple",
    short: "Software Engineer Intern for Apple Newsroom",
    body: `# Apple
Software Engineer Intern · May 2026 – Present

Building full-stack internal web tools for Apple Newsroom using React and Spring Boot, contributing across frontend and backend systems for internal publishing and platform workflows.`,
  },
  {
    id: "experience/foreflight.md",
    path: "/experience/foreflight.md",
    title: "ForeFlight",
    short: "Software Engineer Intern for ForeFlight Web",
    body: `# ForeFlight
Software Engineer Intern · May 2025 – August 2025

Developed production full-stack React features for ForeFlight Web, shipping a browser-based Checklist platform with dynamic rendering, editable workflows, and responsive mobile parity used by thousands of active pilots daily.

https://foreflight.com/products/checklist/`,
  },
  {
    id: "experience/longhornracing.md",
    path: "/experience/longhornracing.md",
    title: "Longhorn Racing",
    short: "Software & Test Engineer for Longhorn Racing Electric",
    body: `# Longhorn Racing
Software & Test Engineer · September 2024 – Present

Developing telemetry, lap timing, and vehicle testing infrastructure for UT Austin's Formula SAE electric race car — building React/Firebase tooling that reduced manual logging time by 80% while supporting trackside analytics and vehicle dynamics testing.

https://driveday.lhre.org/`,
  },
  {
    id: "experience/phenom.md",
    path: "/experience/phenom.md",
    title: "Phenom",
    short: "Software Engineer Intern for Phenom Infrastructure",
    body: `# Phenom
Software Engineer Intern · August 2024 – December 2024

Improved frontend architecture and platform performance for Phenom's athlete management system using React and Sharetribe, increasing user sign-ups by 37%, reducing server error rates by 95%, and improving mobile Lighthouse scores by 56%.

https://www.allphenom.com/`,
  },
  {
    id: "experience/fri.md",
    path: "/experience/fri.md",
    title: "Freshman Research Initiative",
    short: "Undergraduate Researcher",
    body: `# Freshman Research Initiative
Undergraduate Researcher · January 2024 – May 2024

Conducted computational materials research at UT Austin using Python-based optimization and atomic-scale modeling techniques to simulate catalytic materials, implement gradient-descent methodologies, and analyze high-dimensional scientific systems.`,
  },




  // ── Projects ──────────────────────────────────────────────
  {
    id: "projects/drive-day-log.md",
    path: "/projects/drive-day-log.md",
    title: "Drive Day Log",
    short: "Vehicle telemetry and testing platform for Formula SAE track sessions",
    body: `# Drive Day Log
**Stack:** React, TypeScript, Firebase, Firestore

A vehicle testing and telemetry logging platform built for Longhorn Racing Electric to streamline lap timing, penalty tracking, session management, and multi-device data collection during Formula SAE testing sessions.

https://github.com/LonghornRacingElectric/drive-day-log`,
  },
  {
    id: "projects/sentinel.md",
    path: "/projects/sentinel.md",
    title: "Sentinel",
    short: "AI-powered 911 operator triage and incident prioritization system",
    body: `# Sentinel
**Stack:** React, TypeScript, Next.js, FastAPI, Supabase, Gemini API, Twilio

Built at the Texas Momentum x Genesis x Yconic Build-a-thon, placing 2nd out of 100+ teams and winning $3,000 — an AI-powered triage tool for 911 operators that aggregates live distress calls, classifies incidents using Gemini-driven LLM pipelines, and surfaces escalation priorities through embedding similarity clustering.

https://github.com/nathaniyee/sentinel`,
  },
  {
    id: "projects/nba-predictor.md",
    path: "/projects/nba-predictor.md",
    title: "NBA Matchup Predictor",
    short: "Machine learning pipeline for predicting NBA game outcomes",
    body: `# NBA Matchup Predictor
**Stack:** Python, Playwright, scikit-learn

A machine learning pipeline that scrapes and processes thousands of NBA box scores to generate predictive matchup models using custom feature engineering and statistical regression techniques.

https://github.com/nathaniyee/nba-ml-predictor`,
  },
  {
    id: "projects/pintos.md",
    path: "/projects/pintos.md",
    title: "Pintos",
    short: "Unix-like operating system with virtual memory and file system support",
    body: `# Pintos
**Stack:** C, x86 Assembly

A Unix-like operating system project implementing multithreading, synchronization primitives, virtual memory, demand paging, and file system extensions in the Pintos instructional OS.`,
  },
  {
    id: "projects/shindig.md",
    path: "/projects/shindig.md",
    title: "Shindig",
    short: "Location-based social discovery app for personalized event exploration",
    body: `# Shindig
**Stack:** React Native, JavaScript, Firebase, Firestore

A location-based social discovery app built to help users find personalized events and activities through swipe-driven exploration, real-time data synchronization, and geolocation-powered recommendations.

https://github.com/nathaniyee/shindig`,
  },

  // ── Education ─────────────────────────────────────────────
  {
    id: "education/ut-austin.md",
    path: "/education/ut-austin.md",
    title: "The University of Texas at Austin",
    short: "Bachelor of Science in Computer Science",
    body: `# The University of Texas at Austin
    
Bachelor of Science in Computer Science
Minor in Business
Minor in Statistics & Data Science

**Expected graduation:** May 2027

**Activities and societies:** Longhorn Racing, Phi Chi Theta, Texas Momentum, Texas Convergent

**Relevant coursework:** Algorithms, Operating Systems, Computer Architecture, Data Structures, Software Engineering, Machine Learning, Data Management, Linear Algebra, Differential Equations, Statistics, Discrete Math, Calculus I-III`,
  },
  {
    id: "education/taylor.md",
    path: "/education/taylor.md",
    title: "James E. Taylor High School",
    short: "High School Diploma",
    body: `# James E. Taylor High School
    
High School Diploma

**Graduated:** May 2023

**Activities and societies:** Academic Decathlon, Computer Science Club, Asian Student Association

**Relevant coursework:** AP Calculus BC, AP English Literature and Composition, AP Environmental Science, AP Macroeconomics, AP Statistics, AP US Government, AP Art History, AP English Language and Composition, AP Physics 1, AP US History AP Computer Science A, AP Seminar, AP World History, AP Computer Science Principles, AP Human Geography`,
  },

  // ── Misc ──────────────────────────────────────────────────
  {
    id: "misc/sports.md",
    path: "/misc/sports.md",
    title: "Depressed Sports Fan",
    short: "Rockets, Texans, Longhorns, Chelsea FC, McLaren F1",
    body: `# Depressed Sports Fan

I'm a huge sports fan and closely follow the Houston Rockets, Houston Texans, Chelsea FC, Texas Longhorns, and McLaren F1. I also enjoy exploring sports-related apps and prediction platforms such as Real, FotMob, and Kalshi. I track games and stadium visits through Momento (@nae10yee) and occasionally post on Real (@aspergis)!`,
  },
  {
    id: "misc/trivia.md",
    path: "/misc/trivia.md",
    title: "Trivia Enthusiast",
    short: "Trivia games, random facts, and unnecessary knowledge",
    body: `# Trivia Enthusiast
    
I love trivia games and learning random facts about almost anything. My favorite categories are Harry Potter, geography, world flags, and sports trivia. I currently have a trivia rating of 33,593 in Trivial Pursuit, which I am quite proud of.`,
  },
  {
    id: "misc/music.md",
    path: "/misc/music.md",
    title: "Right AirPod User",
    short: "Rap, pop, indie, rock, and discovering new music",
    body: `# Right AirPod User
    
I spend a lot of time listening to music and discovering new artists across rap, pop, indie, and pretty much everything else. My Spotify is usually a mix of current releases, old playlists, and random late-night discoveries.`,
  },
  {
    id: "misc/movies.md",
    path: "/misc/movies.md",
    title: "Aspiring Cinephile",
    short: "Movies, ratings, reviews, and late-night Letterboxd scrolling",
    body: `# Aspiring Cinephile

I enjoy watching all kinds of movies — from big-budget action films to slower character-driven dramas and psychological thrillers. I use Letterboxd (@aspergis) to track films, ratings, and the occasional overly serious review. My four favorite films you ask? Parasite, The Dark Knight, La La Land, and Cars 2.`,
  },
  {
    id: "misc/basketball.md",
    path: "/misc/basketball.md",
    title: "Three-Point Specialist",
    short: "Pickup games, intramural playoff runs, and questionable shot selection",
    body: `# Three-Point Specialist
    
I’ve always loved playing basketball, whether it’s pickup runs at the gym, rec games with friends, or random late-night sessions that end way later than planned. Most of my favorite memories from college honestly come from basketball — especially the competitiveness, trash talk, and chaos that somehow comes with every game. I've been told my player comparison is Trey Murphy III.`,
  },
];

export default CONTENT;

// ── Lookup helpers ────────────────────────────────────────

export function getNodeByPath(path: string): ContentNode | undefined {
  const normalized =
    path.endsWith("/") && path !== "/" ? path.slice(0, -1) : path;
  return CONTENT.find((n) => n.path === normalized);
}

export function getChildNodes(dirPath: string): ContentNode[] {
  const base = dirPath === "/" ? "" : dirPath.replace(/\/$/, "");
  return CONTENT.filter((n) => {
    if (n.path === base) return false;
    const relative = n.path.startsWith(base + "/")
      ? n.path.slice(base.length + 1)
      : null;
    if (!relative) return false;
    return !relative.includes("/");
  });
}

export const TOP_LEVEL_DIRS = [
  "experience",
  "projects",
  "education",
  "misc",
] as const;

export type TopLevelDir = (typeof TOP_LEVEL_DIRS)[number];
