# 🚀 Quick Start Guide

Get your portfolio up and running in 5 minutes.

---

## ⚡ Fastest Path to Launch

### Step 1: Install Dependencies (1 minute)

```bash
cd client
npm install
```

### Step 2: Add Your Portrait (2 minutes)

**Option A: Use Your Own Image**
1. Prepare an image (4:5 ratio recommended, 600×750px)
2. Save as `client/src/assets/images/portrait.jpg`
3. Update `client/src/data/portfolio.ts`:

```typescript
portraitImageUrl: "/src/assets/images/portrait.jpg"
```

**Option B: Use Placeholder (temporary)**
```typescript
portraitImageUrl: "https://ui-avatars.com/api/?name=Juan+Dela+Cruz&size=600&background=4f8ef7&color=fff&format=png"
```

**Option C: Use Initials (default)**
Leave `portraitImageUrl: null` — your initials will display beautifully

### Step 3: Update Your Info (2 minutes)

Edit `client/src/data/portfolio.ts`:

```typescript
export const SITE = {
  name: "Your Full Name",
  role: "Your Professional Title",
  tagline: "Your unique value proposition",
  editorialStatement: "Your bold statement",
  location: "Your Location",
  availability: "Open to opportunities",
  email: "your@email.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  resumeUrl: "/resume.pdf",
  portraitImageUrl: null, // or your image path
};
```

### Step 4: Run Development Server (30 seconds)

```bash
npm run dev
```

Visit: `http://localhost:5173`

---

## ✅ You're Done!

Your portfolio is now running with:
- ✅ Hybrid design system active
- ✅ Tri-layer hero composition
- ✅ Portrait component (with initials or your image)
- ✅ Editorial and System modes working
- ✅ All sections properly styled
- ✅ Fully responsive

---

## 🎯 What You'll See

### Homepage Flow
1. **Hero** — Your name, role, editorial statement, and portrait in tri-layer layout
2. **Quick Intro** — Large tagline with editorial typography
3. **Why Hire Me** — 4-column grid with numbered cards
4. **Featured Skills** — Bento grid with tech stack
5. **Featured Projects** — Alternating showcase layout
6. **Achievements** — Masonry grid of accomplishments
7. **Contact CTA** — Centered call-to-action

### About Page
1. **Editorial Hero** — Large portrait with bio and tagline
2. **Journey Timeline** — Vertical timeline with accent line
3. **What I Do** — Service grid
4. **Philosophy** — Development principles grid
5. **Future Goals** — Editorial block with tags

---

## 🎨 Design Modes in Action

### You'll Notice:

**System Mode Sections** (Structured):
- Clean grid layouts
- Card-based UI
- Consistent spacing
- Subtle hover effects
- Border accents

**Editorial Mode Sections** (Expressive):
- Large typography
- Asymmetric layouts
- Whitespace emphasis
- Narrative flow
- Expressive statements

**Portrait Integration**:
- Hero: System mode (structured frame)
- About: Editorial mode (tall, left-bordered)
- Skills: Optional micro presence

---

## 📝 Quick Customization

### Change Colors

`client/src/styles/tokens.css`:
```css
--color-accent: #4f8ef7;  /* Your brand color */
```

### Update Intro

`client/src/data/portfolio.ts`:
```typescript
export const QUICK_INTRO = {
  title: "About Me",
  tagline: "Your professional identity in one line",
  paragraphs: [
    "First paragraph...",
    "Second paragraph...",
    "Third paragraph...",
  ],
};
```

### Modify Projects

```typescript
export const PROJECTS: ProjectItem[] = [
  {
    id: "1",
    slug: "your-project",
    title: "Project Name",
    description: "Compelling description",
    techStack: ["React", "Node.js", "PostgreSQL"],
    category: "fullstack",
    featured: true,
    githubUrl: "https://github.com/you/project",
    imageGradient: "linear-gradient(135deg, #1a2a4a 0%, #4f8ef7 100%)",
  },
];
```

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process and restart
npm run dev -- --port 3000
```

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Portrait Not Showing
- Check file path is correct
- Verify image exists in assets/images/
- Try using placeholder URL first
- Falls back to initials if image fails

### Styles Not Updating
- Hard refresh: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
- Clear browser cache
- Restart dev server

---

## 📚 Next Steps

### Immediate (Today)
1. ✅ Portfolio is running
2. ✅ Basic info updated
3. [ ] Replace placeholder projects
4. [ ] Test on mobile device

### This Week
1. [ ] Add real project data
2. [ ] Gather project screenshots
3. [ ] Write compelling descriptions
4. [ ] Update all sections

### Before Launch
1. [ ] Complete [LAUNCH_CHECKLIST.md](LAUNCH_CHECKLIST.md)
2. [ ] Test on all devices
3. [ ] Ask friends for feedback
4. [ ] Build for production: `npm run build`

---

## 🎓 Learn More

### Essential Docs
- **[IMPLEMENTATION_GUIDE.md](IMPLEMENTATION_GUIDE.md)** — Detailed setup
- **[DESIGN_SYSTEM.md](DESIGN_SYSTEM.md)** — Design philosophy
- **[LAYOUT_REFERENCE.md](LAYOUT_REFERENCE.md)** — Visual layouts

### Quick References
- **[LAUNCH_CHECKLIST.md](LAUNCH_CHECKLIST.md)** — Pre-launch tasks
- **[UPDATE_SUMMARY.md](UPDATE_SUMMARY.md)** — What changed
- **[TRANSFORMATION_SUMMARY.md](TRANSFORMATION_SUMMARY.md)** — Before/after

---

## 💡 Pro Tips

### 1. Start with Placeholder Content
Don't wait for perfect content — launch with current content and iterate.

### 2. Test Early, Test Often
Open on your phone while developing. Mobile first = mobile ready.

### 3. Get Feedback
Share with 3-5 people before public launch. Fresh eyes catch issues.

### 4. Iterate After Launch
Your portfolio is never "done" — it evolves with your career.

### 5. Use Version Control
```bash
git add .
git commit -m "feat: Initial portfolio setup"
git push
```

---

## 🚀 Deploy in 5 Minutes

### Vercel (Recommended)
```bash
npm install -g vercel
cd client
vercel
```

### Netlify
```bash
npm install -g netlify-cli
cd client
npm run build
netlify deploy --prod --dir=dist
```

### GitHub Pages
```bash
cd client
npm run build
# Copy dist/ contents to gh-pages branch
```

---

## ✅ Success Checklist

- [ ] Dependencies installed
- [ ] Dev server running
- [ ] Can view homepage at localhost
- [ ] Portrait displays (initials or image)
- [ ] Personal info updated
- [ ] No console errors
- [ ] Responsive on mobile
- [ ] Ready to customize further

---

## 🎉 You're Ready!

Your portfolio is running with a professional hybrid design system. Now:

1. **Customize content** — Make it yours
2. **Add real projects** — Showcase your work
3. **Test thoroughly** — Mobile + desktop
4. **Deploy** — Share with the world

---

## 📞 Need Help?

- **Design Questions:** See [DESIGN_SYSTEM.md](DESIGN_SYSTEM.md)
- **Setup Issues:** See [IMPLEMENTATION_GUIDE.md](IMPLEMENTATION_GUIDE.md)
- **Layout Help:** See [LAYOUT_REFERENCE.md](LAYOUT_REFERENCE.md)

---

**Time to First View:** ~5 minutes  
**Time to Basic Customization:** ~15 minutes  
**Time to Full Launch:** 1-2 hours (with content ready)

---

*Your portfolio is ready. Now make it yours.* 🚀
