export const SITE = {
  name: "Cedie Salinas",
  role: "Software Developer",
  tagline: "Building digital products through thoughtful design and scalable code.",
  location: "Philippines",
  availability: "Open to opportunities",
  email: "salinascedie100104@gmail.com",
  github: "https://github.com/JustMeCedie100104",
  linkedin: "https://www.linkedin.com/in/mark-cedric-salinas-29647b414/",

  // ─── Resume ─────────────────────────────────────────────────
  // Drop your PDF at:  client/public/resume.pdf
  resumeUrl: "/resume.pdf",

  // ─── Portrait photo ─────────────────────────────────────────
  // Drop your photo at:  client/public/images/portrait.jpg
  // Supported formats:   .jpg  .png  .webp
  // Then set the value to: "/images/portrait.jpg"
  portraitImageUrl: "/images/HeroSec.jpg" as string | null,
} as const;

export const QUICK_INTRO = {
  title: "About Me",
  tagline: "Designer who codes. Engineer who designs. A Person who adapts to anything.",
  paragraphs: [
    "I enjoy creating digital experiences that combine thoughtful design, strong engineering, and real-world business value.",
    "Currently focused on full-stack development, system architecture, and cloud technologies.",
    "My work sits at the intersection of clean code, scalable systems, and human-centered design—where technical excellence meets real-world impact.",
  ],
} as const;

export const WHY_HIRE_ME = [
  {
    number: "01",
    title: "Real Project Experience",
    description:
      "I build complete applications from database to deployment.",
  },
  {
    number: "02",
    title: "Problem Solver",
    description: "I focus on solving challenges, not simply writing code.",
  },
  {
    number: "03",
    title: "Continuous Learner",
    description: "Technology evolves rapidly. I evolve with it.",
  },
  {
    number: "04",
    title: "Clean Engineering",
    description: "Maintainable code. Scalable systems. Thoughtful architecture.",
  },
] as const;

export const SKILL_CATEGORIES = [
  {
    id: "frontend",
    label: "Frontend",
    skills: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind"],
  },
  {
    id: "backend",
    label: "Backend",
    skills: ["Node.js", "Express.js", "REST API"],
  },
  {
    id: "database",
    label: "Database",
    skills: ["PostgreSQL", "Supabase", "MySQL"],
  },
  {
    id: "tools",
    label: "Tools",
    skills: ["Github", "Figma", "VS Code"],
  },
] as const;

export const LEARNING_SKILLS = ["Docker", "Next.js", "CI/CD", "Cloud Deployment"] as const;

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  techStack: string[];
  category: "frontend" | "backend" | "fullstack" | "uiux";
  featured: boolean;
  githubUrl?: string;
  liveUrl?: string;
  imageGradient: string;
}

export const PROJECTS: ProjectItem[] = [
  {
    id: "1",
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    description:
      "Full-stack online store with cart, checkout, and admin dashboard.",
    techStack: ["React", "Node.js", "PostgreSQL"],
    category: "fullstack",
    featured: true,
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    imageGradient: "linear-gradient(135deg, #1a2a4a 0%, #4f8ef7 100%)",
  },
  {
    id: "2",
    slug: "task-manager",
    title: "Task Manager App",
    description:
      "Collaborative task board with real-time updates and team workspaces.",
    techStack: ["React", "TypeScript", "Supabase"],
    category: "fullstack",
    featured: true,
    githubUrl: "https://github.com",
    imageGradient: "linear-gradient(135deg, #2a1a3a 0%, #a855f7 100%)",
  },
  {
    id: "3",
    slug: "portfolio-cms",
    title: "Portfolio CMS",
    description:
      "Headless CMS for managing projects, blog posts, and contact messages.",
    techStack: ["React", "Express", "MySQL"],
    category: "backend",
    featured: true,
    githubUrl: "https://github.com",
    imageGradient: "linear-gradient(135deg, #1a3a2a 0%, #22c55e 100%)",
  },
  {
    id: "4",
    slug: "design-system",
    title: "UI Design System",
    description:
      "Component library with tokens, documentation, and Figma integration.",
    techStack: ["React", "Tailwind", "Figma"],
    category: "uiux",
    featured: false,
    githubUrl: "https://github.com",
    imageGradient: "linear-gradient(135deg, #3a2a1a 0%, #f59e0b 100%)",
  },
];

export const ACHIEVEMENTS = [
  {
    id: "1",
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    gradient: "linear-gradient(160deg, #0f3460 0%, #4f8ef7 100%)",
  },
  {
    id: "2",
    title: "React Certification",
    issuer: "Meta",
    gradient: "linear-gradient(160deg, #1a1a2e 0%, #61dafb 100%)",
  },
  {
    id: "3",
    title: "Academic Excellence",
    issuer: "University Award",
    gradient: "linear-gradient(160deg, #2d1b4e 0%, #c084fc 100%)",
  },
  {
    id: "4",
    title: "JavaScript Algorithms",
    issuer: "freeCodeCamp",
    gradient: "linear-gradient(160deg, #1a2e1a 0%, #facc15 100%)",
  },

] as const;

export const JOURNEY = [ 
  { year: "2022", title: "Built First Website", description: "Created my first responsive website and deployed it online." },
  { year: "2023", title: "Built First Website", description: "Created my first responsive website and deployed it online." },
  { year: "2024", title: "Learned React & Node.js", description: "Transitioned to modern full-stack development." },
  { year: "2025", title: "Developed Full Stack Apps", description: "Built production-ready applications with databases and APIs." },
  { year: "2026", title: "Seeking Professional Role", description: "Ready to contribute to a team and grow as a developer." },
] as const;

export const WHAT_I_DO = [
  "Frontend Development",
  "Backend Development",
  "Database Design",
  "API Integration",
  "UI Implementation",
] as const;

export const PHILOSOPHY = [
  { title: "Clean Code", description: "Readable, maintainable, and well-structured codebases." },
  { title: "User-Centered Design", description: "Every decision starts with the person using the product." },
  { title: "Continuous Learning", description: "Staying current with tools, patterns, and best practices." },
  { title: "Problem Solving", description: "Breaking complex challenges into clear, actionable steps." },
] as const;

export const EXPERIENCE = [
  {
    id: "1",
    type: "Internship",
    title: "Software Development Intern",
    company: "Avietho Digital",
    period: "2025",
    description: "Contributed to frontend features and API integrations for internal tools.",
  },
  {
    id: "2",
    type: "Freelance",
    title: "Web Developer",
    company: "Independent",
    period: "2024 – Present",
    description: "Built responsive websites and web applications for small businesses.",
  },
] as const;

export const EDUCATION = {
  degree: "Bachelor of Science in Computer Science",
  school: "Arellano University - Jose Abad Santos Campus",
  program: "Computer Science",
  year: "2022 – 2026",
  courses: ["Data Structures", "Web Development", "Database Systems", "Software Engineering"],
  achievements: ["Dean's List", "Best Capstone Project"],
} as const;

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/experience", label: "Experience" },
  { to: "/contact", label: "Contact" },
] as const;
