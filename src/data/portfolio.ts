// Central content model for the portfolio so sections stay reusable and data-driven.
export type SkillGroup = {
  title: string;
  items: string[];
};

export type ProjectCategory = "All" | "Campus Tech" | "Fintech" | "HealthTech" | "Productivity";

export type Project = {
  name: string;
  summary: string;
  category: Exclude<ProjectCategory, "All">;
  stack: string[];
  image: string;
  status: string;
  links: {
    live?: string;
    github?: string;
  };
};

export const profile = {
  name: "Muhammad Bello Ibrahim",
  handle: "Mufteem Dev",
  tagline: "Think Bold, Build Smart.",
  role: "CEO, Orao Technologies",
  location: "Gombe, Nigeria",
  bio: "I am a frontend developer and Computer Science graduate building practical digital products for education, healthcare, finance, and small businesses. I lead product work at Orao Technologies and enjoy turning real problems into clear, usable software.",
  mission:
    "My goal is to build accessible software that solves real problems in Nigerian communities, grows sustainably, and gives people simpler ways to work, learn, receive care, and participate.",
  socialLinks: [
    { label: "GitHub", href: "https://github.com/Muhammad-Bello-Ibrahim" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/mufteem-ibrahim-298158230/" },
    { label: "X", href: "https://x.com/DevMufteem" },
  ],
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript (ES6+)", "React", "Next.js", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "MongoDB", "MySQL", "REST APIs", "Firebase"],
  },
  {
    title: "Product & Design",
    items: ["Figma", "UI/UX", "Product Planning", "Responsive Design", "Technical Documentation"],
  },
  {
    title: "Tools",
    items: ["Git & GitHub", "Vercel", "Netlify", "Postman", "WordPress", "Canva"],
  },
];

export const projectCategories: ProjectCategory[] = ["All", "Campus Tech", "Fintech", "HealthTech", "Productivity"];

export const projects: Project[] = [
  {
    name: "Connectrix",
    summary:
      "A campus platform for student clubs, events, elections, dues, resources, navigation, and community participation. Developed first as my final-year project and now evolving toward a broader product.",
    category: "Campus Tech",
    stack: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
    image: "/projects/connectrix.svg",
    status: "Working product · active development",
    links: {},
  },
  {
    name: "EGuy",
    summary:
      "A web product exploring wallets, payments, transaction records, earnings, and a structured referral programme called ElevateX.",
    category: "Fintech",
    stack: ["React", "Express", "MongoDB", "Payment APIs"],
    image: "/projects/eguy.svg",
    status: "In development",
    links: {},
  },
  {
    name: "meSafe",
    summary:
      "A digital-health product being designed for private hospitals, centred on patient registration, biometric identity, record retrieval, clinical workflows, and auditability.",
    category: "HealthTech",
    stack: ["Next.js", "Node.js", "Biometric APIs", "Cloud Storage"],
    image: "/projects/mesafe.svg",
    status: "MVP planning & validation",
    links: {},
  },
  {
    name: "Routina",
    summary:
      "A productivity app concept focused on helping people organise routines, monitor progress, and build consistent habits.",
    category: "Productivity",
    stack: ["React Native", "Node.js", "MongoDB", "Push Notifications"],
    image: "/projects/routina.svg",
    status: "Prototype concept",
    links: {},
  },
];

export const journey = [
  {
    title: "Frontend Development",
    period: "2020 — Present",
    description: "Building responsive web interfaces and product experiences with JavaScript, React, Next.js, Tailwind CSS, and related tools.",
  },
  {
    title: "Community & Campus Leadership",
    period: "During university",
    description: "Served in student and developer communities, including UI/UX Lead at GDSC GSU and Secretary General roles in campus organisations.",
  },
  {
    title: "CEO, Orao Technologies",
    period: "2025 — Present",
    description: "Leading a registered Nigerian technology venture and coordinating product direction, software delivery, training, and partnerships.",
  },
  {
    title: "B.Sc. (Hons) Computer Science",
    period: "December 2025",
    description: "Graduated from Gombe State University with Second Class Honours (Upper Division). Connectrix was developed as my final-year project.",
  },
];

export const insights = [
  {
    title: "Digital Health for Resource-Constrained Hospitals",
    excerpt: "Exploring usable patient records, identity, clinical workflows, privacy, and offline-aware systems for Nigerian healthcare.",
  },
  {
    title: "Data Engineering & Applied AI",
    excerpt: "Developing stronger Python and data foundations while exploring responsible AI applications in health and public-interest technology.",
  },
  {
    title: "Campus Platforms That Enable Participation",
    excerpt: "Improving how students discover organisations, access resources, pay dues, join events, and take part in campus life.",
  },
];
