# Portfolio Design System

## Hybrid Design Philosophy

This portfolio implements a **Hybrid Design System** that combines two distinct modes:

### Mode A: System Grid (Clean Futurist)
**Purpose:** Structure, discipline, engineering precision  
**Used for:** Navigation, hero baseline, project grids, skills, contact forms

**Characteristics:**
- Strict 12-column grid
- Aligned edges and consistent spacing
- Card-based UI components
- Images behave as UI components
- Hover states with subtle elevation
- Border accents on interaction

**CSS Class:** `.section--system`

### Mode B: Editorial Flow (Magazine Editorial)
**Purpose:** Storytelling, narrative, human expression  
**Used for:** About section, intro text, featured project showcases, section intros

**Characteristics:**
- Broken grid allowed
- Asymmetry encouraged
- Large expressive typography
- Text becomes visual hierarchy
- Images can overlap typography
- Whitespace as design element

**CSS Class:** `.section--editorial`

---

## Human Presence Module (Portrait Component)

The portrait component represents **controlled human presence** within the system.

### Portrait Modes

#### System Mode (`mode="system"`)
- Fixed 4:5 aspect ratio
- Bordered frame with subtle glow
- Hover: elevation + border accent shift
- Behaves like a structured UI element

#### Editorial Mode (`mode="editorial"`)
- Taller 3:4 aspect ratio
- Left border accent (no full frame)
- Can overlap or sit in margins
- Behaves as narrative anchor

### Portrait Sizes
- `large`: 360px max (for About page hero)
- `default`: 280px max (for hero section)
- `compact`: 160px max (for micro-anchors)
- `micro`: 48px max (for identity indicators)

### Usage Guidelines

**DO:**
- Use one primary hero presence image
- Reuse in editorial sections only
- Treat image as UI component
- Maintain consistent framing system

**DON'T:**
- Repeat portrait in every section
- Use decorative repetition
- Create Instagram-style gallery
- Make image dominate the UI

---

## Layout Structure

### Homepage Flow

```
┌─────────────────────────────────────────┐
│ HERO (Hybrid: System + Editorial + Image) │
│ • Left: System info (name, role, CTA)  │
│ • Center: Editorial statement           │
│ • Right: Portrait (system mode)         │
└─────────────────────────────────────────┘
         ↓
┌─────────────────────────────────────────┐
│ QUICK INTRO (Editorial)                 │
│ • Large tagline                         │
│ • Narrative paragraphs                  │
└─────────────────────────────────────────┘
         ↓
┌─────────────────────────────────────────┐
│ WHY HIRE ME (System)                    │
│ • 4-column grid                         │
│ • Numbered cards                        │
└─────────────────────────────────────────┘
         ↓
┌─────────────────────────────────────────┐
│ FEATURED SKILLS (System)                │
│ • Bento grid layout                     │
│ • Optional micro portrait anchor        │
└─────────────────────────────────────────┘
         ↓
┌─────────────────────────────────────────┐
│ FEATURED PROJECTS (Editorial)           │
│ • Alternating showcase layout           │
│ • Large editorial typography            │
└─────────────────────────────────────────┘
         ↓
┌─────────────────────────────────────────┐
│ ACHIEVEMENTS (System)                   │
│ • Masonry grid                          │
│ • Gradient cards                        │
└─────────────────────────────────────────┘
         ↓
┌─────────────────────────────────────────┐
│ CONTACT CTA (Editorial)                 │
│ • Centered layout                       │
│ • Large expressive type                 │
└─────────────────────────────────────────┘
```

### About Page Flow

```
┌─────────────────────────────────────────┐
│ ABOUT HERO (Editorial)                  │
│ • Portrait (editorial, large)           │
│ • Biography with tagline                │
└─────────────────────────────────────────┘
         ↓
┌─────────────────────────────────────────┐
│ JOURNEY TIMELINE (Editorial)            │
│ • Vertical timeline with accent line    │
└─────────────────────────────────────────┘
         ↓
┌─────────────────────────────────────────┐
│ WHAT I DO (System)                      │
│ • Grid of service cards                 │
└─────────────────────────────────────────┘
         ↓
┌─────────────────────────────────────────┐
│ PHILOSOPHY (System)                     │
│ • 4-column grid                         │
└─────────────────────────────────────────┘
         ↓
┌─────────────────────────────────────────┐
│ FUTURE GOALS (Editorial)                │
│ • Centered editorial block              │
│ • Badge tags                            │
└─────────────────────────────────────────┘
```

---

## Typography Hierarchy

### System Mode Typography
- **Headers:** DM Sans, uppercase labels
- **Body:** DM Sans, 1rem base
- **Scale:** Consistent, mathematical
- **Line Height:** 1.6-1.7
- **Letter Spacing:** Subtle tracking

### Editorial Mode Typography
- **Headers:** Instrument Serif, large display sizes
- **Body:** DM Sans, 1.125rem-1.25rem
- **Scale:** Expressive, contextual
- **Line Height:** 1.8
- **Letter Spacing:** Natural

---

## Motion Language

### System Mode Motion
- Hover lift: 2-4px translateY
- Duration: 250ms
- Easing: cubic-bezier(0.16, 1, 0.3, 1)
- Border glow on hover
- No dramatic transforms

### Editorial Mode Motion
- Slow reveal fade-in
- Subtle parallax drift (optional)
- Overlap animation with typography
- Duration: 500ms
- Focus on narrative flow

---

## Color System

### Semantic Colors
```css
--color-bg: #0a0b0f           /* Page background */
--color-surface: #161820      /* Card backgrounds */
--color-accent: #4f8ef7       /* Primary accent */
--color-text: #f0f1f4         /* Primary text */
--color-text-muted: #8b919a   /* Secondary text */
```

### Usage Guidelines
- **System Mode:** Use borders, cards, defined boundaries
- **Editorial Mode:** Use whitespace, subtle gradients, soft glows

---

## Component Reference

### Cards
```tsx
<div className="card card--flat card--hover">
  {/* System mode card with hover effect */}
</div>
```

### Portrait
```tsx
<PortraitFrame mode="system" size="default" />
<PortraitFrame mode="editorial" size="large" />
```

### Section Modes
```tsx
<section className="section section--system">
  {/* Structured content */}
</section>

<section className="section section--editorial">
  {/* Narrative content */}
</section>
```

---

## Responsive Behavior

### Breakpoints
- **Desktop:** 1024px+
- **Tablet:** 768px - 1023px
- **Mobile:** < 768px

### Hero Grid Behavior
- **Desktop:** 5 / 4 / 3 column split
- **Mobile:** Stack all elements, portrait first

### Skills Bento Grid
- **Desktop:** 4 columns (wide cells span 2)
- **Tablet:** 2 columns
- **Mobile:** 1 column

---

## Adding Your Portrait Image

1. Add your portrait image to `/client/src/assets/images/`
2. Update `portfolio.ts`:
```typescript
portraitImageUrl: "/src/assets/images/your-portrait.jpg"
```

The system will automatically:
- Display the image in the portrait frame
- Maintain proper aspect ratios
- Apply mode-specific styling
- Show initials as fallback if image fails

---

## Future Enhancements

- [ ] Add subtle parallax effects in editorial sections
- [ ] Implement scroll-triggered animations
- [ ] Add micro-interactions on skill badges
- [ ] Create project case study template with editorial layout
- [ ] Add blog/devlog with editorial typography
- [ ] Implement dark/light theme toggle (keeping current as dark default)

---

## Key Principles

1. **Structure meets intention** — Every design decision serves both form and function
2. **Human within the system** — Portrait presence is intentional, not decorative
3. **Two modes, one identity** — System and Editorial work together, not against each other
4. **Whitespace is content** — Negative space guides attention
5. **Motion supports narrative** — Animation enhances understanding, not distraction

