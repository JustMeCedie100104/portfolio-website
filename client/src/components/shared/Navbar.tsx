import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { NAV_LINKS, SITE } from "@/data/portfolio";
import { ROUTES } from "@/app/router/routes";
import { useTheme } from "@/app/providers/ThemeProvider";

function IconSun() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1"  x2="12" y2="3"  />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22"  y1="4.22"  x2="5.64"  y2="5.64"  />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1"  y1="12" x2="3"  y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22"  y1="19.78" x2="5.64"  y2="18.36" />
      <line x1="18.36" y1="5.64"  x2="19.78" y2="4.22"  />
    </svg>
  );
}

function IconMoon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
  );
}

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled]  = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  // Close drawer on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  // Elevate navbar shadow after scrolling
  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while drawer is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header className={`navbar${scrolled ? " navbar--scrolled" : ""}`}>
        <Container className="navbar__inner">
          {/* Logo */}
          <NavLink to={ROUTES.HOME} className="navbar__logo" aria-label="Home">
            <span className="navbar__logo-text">CS</span>
            <span className="navbar__logo-dot" aria-hidden="true" />
          </NavLink>

          {/* Desktop nav */}
          <nav className="navbar__nav" aria-label="Main navigation">
            {NAV_LINKS.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  `navbar__link${isActive ? " navbar__link--active" : ""}`
                }
              >
                <span className="navbar__link-text">{label}</span>
                <span className="navbar__link-line" aria-hidden="true" />
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="navbar__cta">
            {/* Theme toggle */}
            <button
              className="navbar__theme-toggle"
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              title={theme === "dark" ? "Light mode" : "Dark mode"}
            >
              <span className="navbar__theme-toggle-track">
                <span className="navbar__theme-toggle-thumb">
                  {theme === "dark" ? <IconMoon /> : <IconSun />}
                </span>
              </span>
            </button>

            <Button
              href={SITE.resumeUrl}
              variant="ghost"
              size="sm"
              download="Cedie_Salinas_Resume.pdf"
            >
              Resume
            </Button>
          </div>

          {/* Hamburger toggle */}
          <button
            className={`navbar__burger${menuOpen ? " navbar__burger--open" : ""}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span />
            <span />
            <span />
          </button>
        </Container>
      </header>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={`navbar__drawer${menuOpen ? " navbar__drawer--open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Mobile navigation">
          {NAV_LINKS.map(({ to, label }, i) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                `navbar__drawer-link${isActive ? " navbar__drawer-link--active" : ""}`
              }
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <span className="navbar__drawer-link-num">0{i + 1}</span>
              {label}
            </NavLink>
          ))}
          <div className="navbar__drawer-cta">
            <Button href={SITE.resumeUrl} variant="primary" size="sm" download="Cedie_Salinas_Resume.pdf">
              Resume
            </Button>
          </div>
        </nav>
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <div
          className="navbar__backdrop"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
