import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";

// ─────────────────────────────────────────────────────────────
// Each skill: name, glow color (brand color), and inline SVG
// ─────────────────────────────────────────────────────────────
interface SkillDef {
  id: string;
  name: string;
  glow: string;
  icon: React.ReactNode;
}

const SKILLS: SkillDef[] = [
  // ── Frontend ──────────────────────────────────────────────
  {
    id: "react",
    name: "React",
    glow: "#61DAFB",
    icon: (
      <svg viewBox="-11.5 -10.232 23 20.463" aria-hidden="true">
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
        <ellipse cx="0" cy="0" rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1" fill="none" />
        <ellipse cx="0" cy="0" rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1" fill="none" transform="rotate(60)" />
        <ellipse cx="0" cy="0" rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1" fill="none" transform="rotate(120)" />
      </svg>
    ),
  },
  {
    id: "typescript",
    name: "TypeScript",
    glow: "#3178C6",
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <rect width="32" height="32" rx="3" fill="#3178C6" />
        <path d="M18.5 16.5H21v1.75a3.5 3.5 0 01-3.5 3.5A3.5 3.5 0 0114 18.25v-4.5A3.5 3.5 0 0117.5 10a3.5 3.5 0 013.5 3.5H18.5A1 1 0 0017.5 12a1 1 0 00-1 1v4.5a1 1 0 001 1 1 1 0 001-1z" fill="white" />
        <path d="M10 10h7v2.5h-2.25V22H12.25V12.5H10V10z" fill="white" />
      </svg>
    ),
  },
  {
    id: "javascript",
    name: "JavaScript",
    glow: "#F7DF1E",
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <rect width="32" height="32" fill="#F7DF1E" />
        <path d="M19.5 22.5c.5.9 1.2 1.5 2.3 1.5 1 0 1.6-.5 1.6-1.2 0-.8-.6-1.1-1.7-1.6l-.6-.25c-1.7-.72-2.8-1.63-2.8-3.55 0-1.77 1.35-3.12 3.45-3.12 1.5 0 2.58.52 3.35 1.88l-1.83 1.17c-.4-.72-.84-1-1.52-1-.7 0-1.13.44-1.13 1 0 .7.44 1 1.46 1.45l.6.25c2 .86 3.1 1.74 3.1 3.7 0 2.12-1.67 3.3-3.9 3.3-2.2 0-3.6-1.04-4.3-2.4zM10.5 14.5h2.25v7.2c0 1.87.78 2.66 2 2.66.5 0 .88-.06 1.25-.18v2.07c-.44.1-.9.18-1.5.18-2.56 0-4-1.38-4-4.06V14.5z" fill="#000" />
      </svg>
    ),
  },
  {
    id: "html",
    name: "HTML5",
    glow: "#E34F26",
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M5 3l2.1 23.4L16 29l8.9-2.6L27 3H5z" fill="#E34F26" />
        <path d="M16 27.1V5.2h9.2l-1.8 20.2L16 27.1z" fill="#EF652A" />
        <path d="M16 13.4H9.8l-.4-4.4H16V4.8H8.1l.4 4.4.4 4.2H16v4.4H9l.3 3.4 6.7 1.9 6.7-1.9.8-8.8H16z" fill="white" />
        <path d="M16 13.4v4.4h6.2l-.6 6.4L16 25.4v4.5l6.9-1.9.8-8.9H16z" fill="#EBEBEB" />
      </svg>
    ),
  },
  {
    id: "css",
    name: "CSS3",
    glow: "#1572B6",
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M5 3l2.1 23.4L16 29l8.9-2.6L27 3H5z" fill="#1572B6" />
        <path d="M16 27.1V5.2h9.2l-1.8 20.2L16 27.1z" fill="#33A9DC" />
        <path d="M16 13.4H9.8l-.2-2.4H16V6.8H8.1l.8 8.6H16v4.4l-6.2-1.8-.4-4.6H7l.7 8.1L16 24v-4.6H16z" fill="white" />
        <path d="M16 13.4v4.4h5.8l-.6 5.4L16 24.8v4.5l6.9-1.9.8-8.9H16z" fill="#EBEBEB" />
      </svg>
    ),
  },
  {
    id: "tailwind",
    name: "Tailwind",
    glow: "#06B6D4",
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path
          d="M16 6c-4.4 0-7.2 2.2-8.4 6.6 1.68-2.2 3.64-3.03 5.88-2.48.78.195 1.34.763 1.96 1.392C16.5 12.65 17.88 14.1 21.2 14.1c4.4 0 7.2-2.2 8.4-6.6-1.68 2.2-3.64 3.03-5.88 2.48-.78-.195-1.34-.763-1.96-1.392C20.7 7.45 19.32 6 16 6zM8.8 14.1C4.4 14.1 1.6 16.3.4 20.7c1.68-2.2 3.64-3.03 5.88-2.48.78.195 1.34.763 1.96 1.392C9.3 20.75 10.68 22.2 14 22.2c4.4 0 7.2-2.2 8.4-6.6-1.68 2.2-3.64 3.03-5.88 2.48-.78-.195-1.34-.763-1.96-1.392C13.5 15.55 12.12 14.1 8.8 14.1z"
          fill="#06B6D4"
        />
      </svg>
    ),
  },
  // ── Backend ───────────────────────────────────────────────
  {
    id: "nodejs",
    name: "Node.js",
    glow: "#339933",
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path
          d="M16 3L4 9.5v13L16 29l12-6.5v-13L16 3zm0 2.3l9.5 5.2v10.5L16 26.7 6.5 21V10.5L16 5.3z"
          fill="#339933"
        />
        <path
          d="M12 20.5v-9l4-2.3 4 2.3v4.1l-4 2.3-2-1.15V14.6l2 1.15 2-1.15v-2.3l-2-1.15-2 1.15v7.2z"
          fill="#339933"
        />
      </svg>
    ),
  },
  {
    id: "express",
    name: "Express",
    glow: "#888888",
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <text x="2" y="22" fontSize="13" fontWeight="700" fontFamily="Arial,sans-serif" fill="#888">ex</text>
        <text x="14" y="22" fontSize="13" fontWeight="300" fontFamily="Arial,sans-serif" fill="#ccc">press</text>
      </svg>
    ),
  },
  {
    id: "python",
    name: "Python",
    glow: "#FFD43B",
    icon: (
      <svg viewBox="0 0 256 255" aria-hidden="true">
        <defs>
          <linearGradient id="sk_py1" x1="12%" y1="12%" x2="80%" y2="78%">
            <stop offset="0%" stopColor="#387EB8" />
            <stop offset="100%" stopColor="#366994" />
          </linearGradient>
          <linearGradient id="sk_py2" x1="19%" y1="21%" x2="91%" y2="88%">
            <stop offset="0%" stopColor="#FFE052" />
            <stop offset="100%" stopColor="#FFC331" />
          </linearGradient>
        </defs>
        <path d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072zm-34.75 19.826a11.13 11.13 0 0 1 11.13 11.13 11.13 11.13 0 0 1-11.13 11.13 11.13 11.13 0 0 1-11.13-11.13 11.13 11.13 0 0 1 11.13-11.13z" fill="url(#sk_py1)" />
        <path d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21H100.073s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 63.159 33.897zm34.75-19.826a11.13 11.13 0 0 1-11.13-11.13 11.13 11.13 0 0 1 11.13-11.13 11.13 11.13 0 0 1 11.13 11.13 11.13 11.13 0 0 1-11.13 11.13z" fill="url(#sk_py2)" />
      </svg>
    ),
  },
  // ── Database ──────────────────────────────────────────────
  {
    id: "postgresql",
    name: "PostgreSQL",
    glow: "#336791",
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <ellipse cx="16" cy="9" rx="10" ry="5" fill="none" stroke="#336791" strokeWidth="2" />
        <path d="M6 9v7c0 2.76 4.48 5 10 5s10-2.24 10-5V9" fill="none" stroke="#336791" strokeWidth="2" />
        <path d="M6 16v7c0 2.76 4.48 5 10 5s10-2.24 10-5v-7" fill="none" stroke="#336791" strokeWidth="2" />
        <ellipse cx="16" cy="9" rx="10" ry="5" fill="#336791" opacity="0.2" />
      </svg>
    ),
  },
  {
    id: "supabase",
    name: "Supabase",
    glow: "#3ECF8E",
    icon: (
      <svg viewBox="0 0 109 113" aria-hidden="true">
        <defs>
          <linearGradient id="sk_sb1" x1="53.97" y1="54.97" x2="94.16" y2="71.83" gradientUnits="userSpaceOnUse">
            <stop stopColor="#249361" /><stop offset="1" stopColor="#3ECF8E" />
          </linearGradient>
          <linearGradient id="sk_sb2" x1="36.16" y1="30.58" x2="54.48" y2="65.08" gradientUnits="userSpaceOnUse">
            <stop /><stop offset="1" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z" fill="url(#sk_sb1)" />
        <path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z" fill="url(#sk_sb2)" fillOpacity="0.2" />
        <path d="M45.317 2.07103C48.1765 -1.53037 53.9745 0.442937 54.0434 5.041L54.4849 72.2922H9.83113C1.64038 72.2922 -2.92775 62.8321 2.1655 56.4175L45.317 2.07103Z" fill="#3ECF8E" />
      </svg>
    ),
  },
  {
    id: "mysql",
    name: "MySQL",
    glow: "#4479A1",
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M3 8.5C3 6 8.9 4 16 4s13 2 13 4.5v15C29 22 23.1 24 16 24S3 22 3 23.5v-15z" fill="none" stroke="#4479A1" strokeWidth="2" />
        <ellipse cx="16" cy="8.5" rx="13" ry="4.5" fill="#4479A1" opacity="0.25" />
        <path d="M3 8.5v5C3 16 8.9 18 16 18s13-2 13-4.5v-5" fill="none" stroke="#4479A1" strokeWidth="1.5" />
        <path d="M27 19.5l3 5-2 .5-2-3.5-2 3.5-2-.5 3-5" fill="#4479A1" />
      </svg>
    ),
  },
  // ── Tools ─────────────────────────────────────────────────
  {
    id: "git",
    name: "Git",
    glow: "#F05032",
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path
          d="M29.47 14.53L17.47 2.53a1.79 1.79 0 00-2.53 0l-2.52 2.52 3.2 3.2a2.13 2.13 0 012.69 2.72l3.08 3.08a2.13 2.13 0 11-1.28 1.28l-2.88-2.88v7.57a2.13 2.13 0 11-1.75-.07V12.2a2.13 2.13 0 01-1.16-2.8L10.97 6.2 2.53 14.64a1.79 1.79 0 000 2.53l12 12a1.79 1.79 0 002.53 0l12.41-12.41a1.79 1.79 0 000-2.53z"
          fill="#F05032"
        />
      </svg>
    ),
  },
  {
    id: "figma",
    name: "Figma",
    glow: "#A259FF",
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <rect x="9" y="3" width="7" height="7" rx="3.5" fill="#F24E1E" />
        <rect x="16" y="3" width="7" height="7" rx="3.5" fill="#FF7262" />
        <rect x="9" y="10" width="7" height="7" rx="3.5" fill="#A259FF" />
        <rect x="9" y="17" width="7" height="7" rx="3.5" fill="#0ACF83" />
        <circle cx="19.5" cy="13.5" r="3.5" fill="#1ABCFE" />
      </svg>
    ),
  },
  {
    id: "vscode",
    name: "VS Code",
    glow: "#007ACC",
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path
          d="M30.86 4.57L24.37 1.5a2 2 0 00-2.19.38L1.29 19.57a1.35 1.35 0 00-.04 2l1.79 1.65a1.35 1.35 0 001.72.1L27.6 5.44l-.05 21.15-5.3-4.55L19.7 24.3l4.85 4.67a2 2 0 002.68.12l3.8-3.22A2 2 0 0032 24.2V6.46a2 2 0 00-1.14-1.89zM9.44 20.63L4.28 16l5.16-4.63 5.16 4.63-5.16 4.63z"
          fill="#007ACC"
        />
      </svg>
    ),
  },
  {
    id: "docker",
    name: "Docker",
    glow: "#2496ED",
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path
          d="M31.3 12.6c-.4-.3-1.4-.9-3-.9-.5 0-1 .05-1.5.15-.35-2.35-2.15-3.5-2.25-3.55l-.45-.3-.35.45c-.45.65-.75 1.55-.8 2.35-.1.75.05 1.5.4 2.15-.6.35-1.6.4-1.8.45H2.4a1.4 1.4 0 00-1.4 1.4c-.05 2.45.4 4.9 1.5 7.1 1.25 2.5 3.1 4.3 5.45 5.25 2.6 1.05 6.8 1.3 10 .05 3.4-1.3 5.7-3.85 7.05-7.3.9.05 2.75.05 3.65-1.85l.2-.35-.4-.3zM4.4 15h2.8v2.55H4.4V15zm3.65 0h2.8v2.55H8.05V15zm3.65 0h2.8v2.55h-2.8V15zm3.65 0h2.8v2.55h-2.8V15zM8.05 11.4h2.8v2.55H8.05V11.4zm3.65 0h2.8v2.55h-2.8V11.4zm3.65 0h2.8v2.55h-2.8V11.4zm3.65 3.6h2.8v2.55h-2.8V15z"
          fill="#2496ED"
        />
      </svg>
    ),
  },
  {
    id: "nextjs",
    name: "Next.js",
    glow: "#ffffff",
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="16" cy="16" r="14" fill="#000" />
        <path d="M10 22V10l14 15h-4L10 14v8z" fill="white" />
        <path d="M19.5 10h2.5v8l-2.5-3V10z" fill="white" />
      </svg>
    ),
  },
  {
    id: "restapi",
    name: "REST API",
    glow: "#6DB33F",
    icon: (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <rect x="3" y="8" width="26" height="5" rx="2" fill="none" stroke="#6DB33F" strokeWidth="1.5" />
        <rect x="3" y="15" width="26" height="5" rx="2" fill="none" stroke="#6DB33F" strokeWidth="1.5" />
        <circle cx="7" cy="10.5" r="1.2" fill="#6DB33F" />
        <circle cx="7" cy="17.5" r="1.2" fill="#6DB33F" />
        <path d="M12 24l4 4 4-4" stroke="#6DB33F" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        <path d="M16 28V20" stroke="#6DB33F" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </svg>
    ),
  },
];

// ─────────────────────────────────────────────────────────────

export function FeaturedSkillsSection() {
  return (
    <section className="section section--system">
      <Container>
        <SectionHeader
          label="Tech Stack"
          title="Technical Skills"
          subtitle="Technologies I work with to build full-stack applications."
        />

        <div className="techgrid" style={{ marginTop: "var(--space-10)" }}>
          {SKILLS.map((skill) => (
            <div
              key={skill.id}
              className="techgrid__item"
              style={{ "--skill-glow": skill.glow } as React.CSSProperties}
              title={skill.name}
            >
              <div className="techgrid__icon">{skill.icon}</div>
              <span className="techgrid__name">{skill.name}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
