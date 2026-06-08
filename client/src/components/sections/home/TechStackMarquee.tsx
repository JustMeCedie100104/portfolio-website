// Infinite auto-scrolling tech-stack marquee strip.
// Pure CSS animation — no dependencies.
// The track is duplicated so the loop is completely seamless.

// ── SVG icons (reused from FeaturedSkillsSection) ────────────
function IconReact() {
  return (
    <svg viewBox="-11.5 -10.232 23 20.463" aria-hidden="true" focusable="false">
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
      <ellipse cx="0" cy="0" rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1" fill="none" />
      <ellipse cx="0" cy="0" rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1" fill="none" transform="rotate(60)" />
      <ellipse cx="0" cy="0" rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1" fill="none" transform="rotate(120)" />
    </svg>
  );
}
function IconTypeScript() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <rect width="32" height="32" rx="3" fill="#3178C6" />
      <path d="M18.5 16.5H21v1.75a3.5 3.5 0 01-3.5 3.5A3.5 3.5 0 0114 18.25v-4.5A3.5 3.5 0 0117.5 10a3.5 3.5 0 013.5 3.5H18.5A1 1 0 0017.5 12a1 1 0 00-1 1v4.5a1 1 0 001 1 1 1 0 001-1z" fill="white" />
      <path d="M10 10h7v2.5h-2.25V22H12.25V12.5H10V10z" fill="white" />
    </svg>
  );
}
function IconJavaScript() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <rect width="32" height="32" fill="#F7DF1E" />
      <path d="M19.5 22.5c.5.9 1.2 1.5 2.3 1.5 1 0 1.6-.5 1.6-1.2 0-.8-.6-1.1-1.7-1.6l-.6-.25c-1.7-.72-2.8-1.63-2.8-3.55 0-1.77 1.35-3.12 3.45-3.12 1.5 0 2.58.52 3.35 1.88l-1.83 1.17c-.4-.72-.84-1-1.52-1-.7 0-1.13.44-1.13 1 0 .7.44 1 1.46 1.45l.6.25c2 .86 3.1 1.74 3.1 3.7 0 2.12-1.67 3.3-3.9 3.3-2.2 0-3.6-1.04-4.3-2.4zM10.5 14.5h2.25v7.2c0 1.87.78 2.66 2 2.66.5 0 .88-.06 1.25-.18v2.07c-.44.1-.9.18-1.5.18-2.56 0-4-1.38-4-4.06V14.5z" fill="#000" />
    </svg>
  );
}
function IconNodeJs() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <path d="M16 3L4 9.5v13L16 29l12-6.5v-13L16 3zm0 2.3l9.5 5.2v10.5L16 26.7 6.5 21V10.5L16 5.3z" fill="#339933" />
      <path d="M12 20.5v-9l4-2.3 4 2.3v4.1l-4 2.3-2-1.15V14.6l2 1.15 2-1.15v-2.3l-2-1.15-2 1.15v7.2z" fill="#339933" />
    </svg>
  );
}
function IconPython() {
  return (
    <svg viewBox="0 0 256 255" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="mq_py1" x1="12%" y1="12%" x2="80%" y2="78%">
          <stop offset="0%" stopColor="#387EB8" /><stop offset="100%" stopColor="#366994" />
        </linearGradient>
        <linearGradient id="mq_py2" x1="19%" y1="21%" x2="91%" y2="88%">
          <stop offset="0%" stopColor="#FFE052" /><stop offset="100%" stopColor="#FFC331" />
        </linearGradient>
      </defs>
      <path d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072zm-34.75 19.826a11.13 11.13 0 0 1 11.13 11.13 11.13 11.13 0 0 1-11.13 11.13 11.13 11.13 0 0 1-11.13-11.13 11.13 11.13 0 0 1 11.13-11.13z" fill="url(#mq_py1)" />
      <path d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21H100.073s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 63.159 33.897zm34.75-19.826a11.13 11.13 0 0 1-11.13-11.13 11.13 11.13 0 0 1 11.13-11.13 11.13 11.13 0 0 1 11.13 11.13 11.13 11.13 0 0 1-11.13 11.13z" fill="url(#mq_py2)" />
    </svg>
  );
}
function IconSupabase() {
  return (
    <svg viewBox="0 0 109 113" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="mq_sb1" x1="53.97" y1="54.97" x2="94.16" y2="71.83" gradientUnits="userSpaceOnUse">
          <stop stopColor="#249361" /><stop offset="1" stopColor="#3ECF8E" />
        </linearGradient>
        <linearGradient id="mq_sb2" x1="36.16" y1="30.58" x2="54.48" y2="65.08" gradientUnits="userSpaceOnUse">
          <stop /><stop offset="1" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z" fill="url(#mq_sb1)" />
      <path d="M63.7076 110.284C60.8481 113.885 55.0502 111.912 54.9813 107.314L53.9738 40.0627L99.1935 40.0627C107.384 40.0627 111.952 49.5228 106.859 55.9374L63.7076 110.284Z" fill="url(#mq_sb2)" fillOpacity="0.2" />
      <path d="M45.317 2.07103C48.1765 -1.53037 53.9745 0.442937 54.0434 5.041L54.4849 72.2922H9.83113C1.64038 72.2922 -2.92775 62.8321 2.1655 56.4175L45.317 2.07103Z" fill="#3ECF8E" />
    </svg>
  );
}
function IconPostgreSQL() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <ellipse cx="16" cy="9" rx="10" ry="5" fill="none" stroke="#336791" strokeWidth="2" />
      <path d="M6 9v7c0 2.76 4.48 5 10 5s10-2.24 10-5V9" fill="none" stroke="#336791" strokeWidth="2" />
      <path d="M6 16v7c0 2.76 4.48 5 10 5s10-2.24 10-5v-7" fill="none" stroke="#336791" strokeWidth="2" />
      <ellipse cx="16" cy="9" rx="10" ry="5" fill="#336791" opacity="0.2" />
    </svg>
  );
}
function IconGit() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <path d="M29.47 14.53L17.47 2.53a1.79 1.79 0 00-2.53 0l-2.52 2.52 3.2 3.2a2.13 2.13 0 012.69 2.72l3.08 3.08a2.13 2.13 0 11-1.28 1.28l-2.88-2.88v7.57a2.13 2.13 0 11-1.75-.07V12.2a2.13 2.13 0 01-1.16-2.8L10.97 6.2 2.53 14.64a1.79 1.79 0 000 2.53l12 12a1.79 1.79 0 002.53 0l12.41-12.41a1.79 1.79 0 000-2.53z" fill="#F05032" />
    </svg>
  );
}
function IconFigma() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <rect x="9" y="3" width="7" height="7" rx="3.5" fill="#F24E1E" />
      <rect x="16" y="3" width="7" height="7" rx="3.5" fill="#FF7262" />
      <rect x="9" y="10" width="7" height="7" rx="3.5" fill="#A259FF" />
      <rect x="9" y="17" width="7" height="7" rx="3.5" fill="#0ACF83" />
      <circle cx="19.5" cy="13.5" r="3.5" fill="#1ABCFE" />
    </svg>
  );
}
function IconDocker() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <path d="M31.3 12.6c-.4-.3-1.4-.9-3-.9-.5 0-1 .05-1.5.15-.35-2.35-2.15-3.5-2.25-3.55l-.45-.3-.35.45c-.45.65-.75 1.55-.8 2.35-.1.75.05 1.5.4 2.15-.6.35-1.6.4-1.8.45H2.4a1.4 1.4 0 00-1.4 1.4c-.05 2.45.4 4.9 1.5 7.1 1.25 2.5 3.1 4.3 5.45 5.25 2.6 1.05 6.8 1.3 10 .05 3.4-1.3 5.7-3.85 7.05-7.3.9.05 2.75.05 3.65-1.85l.2-.35-.4-.3zM4.4 15h2.8v2.55H4.4V15zm3.65 0h2.8v2.55H8.05V15zm3.65 0h2.8v2.55h-2.8V15zm3.65 0h2.8v2.55h-2.8V15zM8.05 11.4h2.8v2.55H8.05V11.4zm3.65 0h2.8v2.55h-2.8V11.4zm3.65 0h2.8v2.55h-2.8V11.4zm3.65 3.6h2.8v2.55h-2.8V15z" fill="#2496ED" />
    </svg>
  );
}

// ── The 10 marquee items ──────────────────────────────────────
const MARQUEE_ITEMS = [
  { id: "react",      name: "React",       icon: <IconReact /> },
  { id: "typescript", name: "TypeScript",  icon: <IconTypeScript /> },
  { id: "javascript", name: "JavaScript",  icon: <IconJavaScript /> },
  { id: "nodejs",     name: "Node.js",     icon: <IconNodeJs /> },
  { id: "python",     name: "Python",      icon: <IconPython /> },
  { id: "supabase",   name: "Supabase",    icon: <IconSupabase /> },
  { id: "postgresql", name: "PostgreSQL",  icon: <IconPostgreSQL /> },
  { id: "git",        name: "Git",         icon: <IconGit /> },
  { id: "figma",      name: "Figma",       icon: <IconFigma /> },
  { id: "docker",     name: "Docker",      icon: <IconDocker /> },
];

// Duplicate list so the CSS loop is perfectly seamless
const TRACK_ITEMS = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

// ── Separator dot between items ───────────────────────────────
function Separator() {
  return (
    <span className="marquee__sep" aria-hidden="true">✦</span>
  );
}

// ── Component ─────────────────────────────────────────────────
export function TechStackMarquee() {
  return (
    <div className="marquee-section" aria-label="Tech stack" role="region">
      {/* Top rule */}
      <div className="marquee-rule" aria-hidden="true" />

      <div className="marquee-wrapper">
        {/* Left fade mask */}
        <div className="marquee-fade marquee-fade--left"  aria-hidden="true" />
        {/* Right fade mask */}
        <div className="marquee-fade marquee-fade--right" aria-hidden="true" />

        {/* Scrolling track */}
        <div className="marquee-track" aria-hidden="true">
          {TRACK_ITEMS.map((item, i) => (
            <span key={`${item.id}-${i}`} className="marquee__item">
              <span className="marquee__icon">{item.icon}</span>
              <span className="marquee__name">{item.name}</span>
              <Separator />
            </span>
          ))}
        </div>
      </div>

      {/* Bottom rule */}
      <div className="marquee-rule" aria-hidden="true" />
    </div>
  );
}
