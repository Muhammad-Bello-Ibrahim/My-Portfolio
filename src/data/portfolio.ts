export type SkillGroup = {
  title: string;
  items: string[];
};

export type ProjectCategory = "All" | "EdTech" | "Fintech" | "HealthTech" | "Productivity";

export type Project = {
  name: string;
  summary: string;
  category: Exclude<ProjectCategory, "All">;
  stack: string[];
  image: string;
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
  email: "hello@mufteem.dev",
  location: "Nigeria",
  bio: "I am a frontend-focused software engineer with strong MERN expertise, now building AIoT-driven platforms that solve real-world problems in fintech, education, and healthcare.",
  mission:
    "My mission is to design accessible, intelligent digital products that empower people, scale sustainably, and bridge the gap between emerging technologies and everyday impact.",
  socialLinks: [
    { label: "GitHub", href: "https://github.com/qouda" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/mufteem-ibrahim-298158230/" },
    { label: "X", href: "https://x.com/DevMufteem" },
    { label: "Email", href: "mailto:hello@mufteem.dev" },
  ],
  cvPath: "/cv/muhammad-bello-ibrahim-cv.pdf",
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript (ES6+)", "React", "Next.js", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "MongoDB", "REST APIs", "Authentication", "System Integration"],
  },
  {
    title: "AI / IoT",
    items: ["AIoT Prototyping", "Smart System Workflows", "Sensor Data Integration", "Automation Logic"],
  },
  {
    title: "Tools",
    items: ["Git & GitHub", "Figma", "Postman", "Vercel", "CI/CD Foundations"],
  },
];

export const projectCategories: ProjectCategory[] = ["All", "EdTech", "Fintech", "HealthTech", "Productivity"];

export const projects: Project[] = [
  {
    name: "Connectrix",
    summary:
      "A student engagement and club management platform that simplifies communication, event operations, and campus participation.",
    category: "EdTech",
    stack: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
    image: "/projects/connectrix.svg",
    links: {
      live: "#",
      github: "#",
    },
  },
  {
    name: "EGuy",
    summary:
      "A fintech platform with wallet infrastructure, payments, and referral mechanisms built for growth-focused digital commerce.",
    category: "Fintech",
    stack: ["React", "Express", "MongoDB", "Payment APIs"],
    image: "/projects/eguy.svg",
    links: {
      live: "#",
      github: "#",
    },
  },
  {
    name: "meSafe",
    summary:
      "An interoperable biometric health record system designed to improve secure patient identity and continuity of care.",
    category: "HealthTech",
    stack: ["Next.js", "Node.js", "Biometric APIs", "Cloud Storage"],
    image: "/projects/mesafe.svg",
    links: {
      live: "#",
      github: "#",
    },
  },
  {
    name: "Routina",
    summary:
      "A productivity-focused mobile app that helps users structure routines, track progress, and build consistent habits.",
    category: "Productivity",
    stack: ["React Native", "Node.js", "MongoDB", "Push Notifications"],
    image: "/projects/routina.svg",
    links: {
      live: "#",
      github: "#",
    },
  },
];

export const journey = [
  {
    title: "Frontend Development Foundation",
    period: "2020 - 2022",
    description: "Built a strong web foundation with HTML, CSS, JavaScript, and practical UI engineering.",
  },
  {
    title: "MERN Product Delivery",
    period: "2022 - 2024",
    description: "Shipped full-stack solutions in fintech and student-centric systems using MERN technologies.",
  },
  {
    title: "CEO, Orao Technologies",
    period: "2024 - Present",
    description: "Leading product strategy and execution across AI, IoT, EdTech, and HealthTech initiatives.",
  },
  {
    title: "B.Sc. Computer Science Completion",
    period: "December 2025",
    description: "Graduated with a Computer Science degree focused on problem solving, software systems, and innovation.",
  },
];

export const insights = [
  {
    title: "Designing AIoT Products for Real-World Adoption",
    excerpt: "Practical frameworks for building smart systems that users can trust and operate at scale.",
  },
  {
    title: "Building Fintech Experiences with Clarity and Security",
    excerpt: "How product design and backend architecture combine to improve confidence in digital payments.",
  },
  {
    title: "Student Platforms That Drive Meaningful Engagement",
    excerpt: "What makes EdTech systems valuable beyond content delivery and into community enablement.",
  },
];
