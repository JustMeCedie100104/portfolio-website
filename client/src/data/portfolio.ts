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

export const HERO_STATS = [
  { num: "01", label: "Experience",  value: "1+ Year Experience"         },
  { num: "02", label: "Status",      value: "Open to opportunities"      },
  { num: "03", label: "Based In",    value: "Philippines — Remote Ready" },
] as const;

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
  // ─── Project image ─────────────────────────────────────────
  // Drop screenshot at: client/public/images/projects/<filename>
  // Set imageUrl to:    "/images/projects/your-image.png"
  // Leave as null to use the gradient fallback instead.
  imageUrl?: string | null;
  imageGradient: string;  // fallback gradient when imageUrl is null
}

export const PROJECTS: ProjectItem[] = [
  {
    id: "1",
    slug: "e-commerce-platform",
    title: "Stock N Stack",
    description:
      "Full-stack online store with cart, checkout, and admin dashboard.",
    techStack: ["React", "Node.js", "PostgreSQL"],
    category: "fullstack",
    featured: false,
    githubUrl: "https://github.com",
    // imageUrl: "/images/projects/stock-n-stack.png",
    imageUrl: null,
    imageGradient: "linear-gradient(135deg, #1a2a4a 0%, #4f8ef7 100%)",
  },
  {
    id: "2",
    slug: "task-manager",
    title: "Task Manager",
    description:
      "Collaborative task board with real-time updates and team workspaces.",
    techStack: ["React", "TypeScript", "Supabase"],
    category: "fullstack",
    featured: true,
    githubUrl: "https://github.com",
    // imageUrl: "/images/projects/task-manager.png",
    imageUrl: null,
    imageGradient: "linear-gradient(135deg, #2a1a3a 0%, #a855f7 100%)",
  },
  {
    id: "3",
    slug: "portfolio-cms",
    title: "Portfolio",
    description:
      "Headless CMS for managing projects, blog posts, and contact messages.",
    techStack: ["React", "Express", "PostgreSQL"],
    category: "backend",
    featured: true,
    githubUrl: "https://github.com",
    // imageUrl: "/images/projects/portfolio-cms.png",
    imageUrl: null,
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
    featured: true,
    githubUrl: "https://github.com",
    // imageUrl: "/images/projects/design-system.png",
    imageUrl: null,
    imageGradient: "linear-gradient(135deg, #3a2a1a 0%, #f59e0b 100%)",
  },
];

export const ACHIEVEMENTS = [
  {
    id: "1",
    title: "4x Deans Lister",
    issuer: "Arellano University",
    // Drop certificate image at: client/public/images/achievements/deans-lister.jpg
    // Then set imageUrl to:       "/images/achievements/deans-lister.jpg"
    imageUrl: null as string | null,
    gradient: "linear-gradient(160deg, #0f3460 0%, #4f8ef7 100%)",
  },
  {
    id: "2",
    title: "IBM UI UX Certificate",
    issuer: "IBM SkillsBuild",
    // imageUrl: "/images/achievements/ibm-uiux.jpg",
    imageUrl: null as string | null,
    gradient: "linear-gradient(160deg, #1a1a2e 0%, #61dafb 100%)",
  },
  {
    id: "3",
    title: "Academic Excellence",
    issuer: "University Award",
    // imageUrl: "/images/achievements/academic-excellence.jpg",
    imageUrl: null as string | null,
    gradient: "linear-gradient(160deg, #2d1b4e 0%, #c084fc 100%)",
  },
] as const;

export const JOURNEY = [ 
  { year: "2004", title: "Birth of Cedie Salinas", description: "Cedie Salinas was born in the Year of 2004" },
  { year: "2009 - 2010", title: "Kinder", description: "When I was in kinder, I was already competing with other high ranking students and participating in folk dance and live storytelling on stage." },
  { year: "2011 - 2017", title: "Elementary Days", description: "It was the year of my highs and lows, but every struggle has been overcome." },
  { year: "2017 - 2021", title: "Junior High", description: "Junior high can be sometimes difficult to obtain your things of interest, this era toughen me up and overcome everything." },
  { year: "2022 - 2023", title: "Senior Years", description: "Ready for Everything, First taste of thesis is quite the experience." },
  { year: "2023 - 2025", title: "College 1-3 Years", description: "Became memorable as it nourishes my knowledge in hardcoding and web creation." },
  { year: "2026", title: "OJT", description: "Experienced how Web development can be fully develop, and how proper researching needed to be crucial " },
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
] as const;

export interface EducationItem {
  id: string;
  degree: string;
  school: string;
  program: string;
  year: string;
  courses: string[];
  achievements: string[];
}

export const EDUCATION: EducationItem[] = [
  {
    id: "1",
    degree: "Bachelor of Science in Computer Science",
    school: "Arellano University - Jose Abad Santos Campus",
    program: "Computer Science",
    year: "2023 – Present",
    courses: ["Data Structures", "Web Development", "Database Systems"],
    achievements: ["Dean's Lister"],
  },
  {
    id: "2",
    degree: "Senior High School",
    school: "Arellano University - Jose Abad Santos Campus",
    program: "ICT - Information and Communication Technology",
    year: "2021 – 2023",
    courses: ["Computer Programming", "Animation and Editing"],
    achievements: ["With High Honors"],
  },
  {
    id: "3",
    degree: "Junior High School",
    school: "Pasay City East High School",
    program: "Education High School Curriculum",
    year: "2017 – 2021",
    courses: ["Data Structures", "Web Development", "Database Systems"],
    achievements: ["Top Notcher of Every Grade"],
  },
  {
    id: "4",
    degree: "Elementary",
    school: "Timoteo Paez Elementary School",
    program: "Elementary Curriculum",
    year: "2011 – 2017",
    courses: ["None"],
    achievements: ["Top Notcher of Every Grade"],
  },
];

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/experience", label: "Experience" },
  { to: "/contact", label: "Contact" },
] as const;
