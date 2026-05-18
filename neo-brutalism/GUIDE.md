# ?? Neo-Brutalism Portfolio Website - Complete Guide

## ?? Project Overview

A stunning single-page portfolio website built from scratch with:
- **Framework**: React 19.2.6 + Vite 8.0.12
- **Style**: Neo-Brutalism (bold colors, thick borders, heavy shadows)
- **Font**: Space Grotesk (Google Fonts)
- **Features**: Scroll animations, responsive design, modern interactions

---

## ?? What's Been Created

### 1. **Complete File Structure**
```
test-website/
??? index.html          (Updated with Space Grotesk font)
??? package.json        (React + Vite setup)
??? src/
?   ??? main.jsx       (App entry point)
?   ??? index.css      (Global styles & CSS variables)
?   ??? App.jsx        (Main portfolio component)
?   ??? App.css        (Neo-brutalism styling)
```

### 2. **Sections Included**
? **Hero Section** - Animated introduction with floating shapes
? **About Section** - Personal bio with animated stats cards
? **Skills Section** - 4 skill cards with hover effects
? **Projects Section** - 6 featured project cards
? **Experience Section** - Timeline with 4 work experiences
? **Contact Section** - Contact cards + social links
? **Footer** - Copyright information

---

## ?? Design System

### Color Palette (Neo-Brutalism)
```css
--bg: #f5f5f0;          /* Off-white background */
--text: #0a0a0a;        /* Almost black text */
--primary: #ff6b35;     /* Orange accent */
--secondary: #00d4ff;   /* Cyan accent */
--accent: #ffeb3b;      /* Yellow highlight */
--white: #ffffff;       /* Pure white */
--black: #0a0a0a;       /* Pure black */
--border: #0a0a0a;      /* Black borders (4-5px thick) */
--shadow: 6px 6px 0px #0a0a0a;  /* Heavy drop shadows */
```

### Typography
- **Font Family**: Space Grotesk (400, 500, 600, 700 weights)
- **Hero Heading**: 4rem (responsive to 2.5rem mobile)
- **Section Titles**: 3rem with rotation effect
- **Body Text**: 1.2rem with 1.8 line-height

---

## ? Animation Features

### 1. **Scroll Animations**
- Intersection Observer API monitors elements
- Elements with `.fade-in` class animate on scroll
- Smooth opacity + translateY transitions

### 2. **Hover Effects**
- Cards lift up with enhanced shadows
- Skills cards get yellow background on hover
- Project cards show shimmer effect
- Buttons translate with deeper shadows

### 3. **Continuous Animations**
- Floating geometric shapes (3 shapes)
- Pulsing timeline dots
- Bouncing "Available for Work" badge
- Hero image rotation effect

### 4. **Navigation**
- Smooth scroll to sections
- Navbar slides down on page load
- Hover states on nav links

---

## ?? How to Use

### Start Development Server
```bash
npm run dev
```
Visit: `http://localhost:5173`

### Build for Production
```bash
npm run build
```
Output in `dist/` folder

---

## ?? Customization Guide

### 1. **Update Personal Info**
Edit `src/App.jsx`:

**Line 51-55**: Change name and title
```jsx
<h1>
  Hi, I'm <span className="hero-highlight">Your Name</span><br />
  Your Title Here
</h1>
```

**Line 56-59**: Update bio
**Line 109-119**: Change about text
**Line 125-144**: Update statistics
**Line 154-237**: Modify skills
**Line 247-394**: Edit projects
**Line 404-473**: Update experience
**Line 485-531**: Change contact info

### 2. **Change Colors**
Edit `src/index.css` (lines 1-10):
```css
:root {
  --primary: #YOUR_COLOR;
  --secondary: #YOUR_COLOR;
  --accent: #YOUR_COLOR;
}
```

### 3. **Change Font**
Edit `index.html` (line 9):
```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font:wght@400;700&display=swap" rel="stylesheet">
```

Then update `src/index.css` (line 15):
```css
font-family: 'Your Font', system-ui, sans-serif;
```

### 4. **Add/Remove Sections**
In `src/App.jsx`:
- Copy any section block (e.g., `<section id="skills">...</section>`)
- Paste and modify content
- Add to navigation links (line 39-45)

---

## ?? Responsive Design

### Breakpoints Defined:
- **Desktop**: Default styles (1200px container)
- **Tablet** (<968px): Single column layouts, adjusted spacing
- **Mobile** (<640px): Stacked elements, larger touch targets

### Key Responsive Changes:
- Hero: 2-column ? 1-column
- Timeline: Centered ? Left-aligned
- Projects: Grid ? Single column
- Navigation: Reduced font sizes
- Stats: 2x2 grid ? Single column

---

## ?? Component Breakdown

### Navigation Bar
- Fixed position
- Logo with yellow background
- 5 nav links with smooth scroll
- Hover: Orange background

### Hero Section
- Two-column layout
- Animated badge
- Large heading with rotated highlight
- Two CTA buttons
- Image wrapper with rotation
- 3 floating shapes

### About Section
- White background
- Two-column: text + stats grid
- 4 animated stat cards
- Hover: Cards lift up

### Skills Section
- 4 skill cards in responsive grid
- Icons (emojis as placeholders)
- Skill tags
- Hover: Yellow background + top border animation

### Projects Section
- 6 project cards (3-column grid)
- Emoji placeholders for images
- Tech stack tags
- Two CTAs per project
- Hover: Shimmer effect + lift

### Experience Section
- Vertical timeline with dots
- Alternating left/right layout
- 4 work experiences
- Pulsing dots
- Hover: Cards lift

### Contact Section
- 3 contact method cards
- 5 social media links
- Centered layout
- Hover effects

---

## ?? Common Issues & Fixes

### Issue: Fonts not loading
**Fix**: Check internet connection for Google Fonts

### Issue: Animations not triggering
**Fix**: Ensure `.fade-in` class is applied to sections

### Issue: Smooth scroll not working
**Fix**: Verify `scroll-behavior: smooth` in index.css

### Issue: Navigation links not working
**Fix**: Check section IDs match nav href values

---

## ?? Design Philosophy

**Neo-Brutalism** embraces:
- ? Bold, contrasting colors
- ? Thick, visible borders
- ? Heavy, offset shadows (not soft)
- ? Geometric shapes
- ? Readable, large typography
- ? Flat, minimal depth
- ? Playful rotations and transforms
- ? Raw, unpolished aesthetic

**Avoided**:
- ? Gradients
- ? Soft shadows
- ? Rounded corners (except specific elements)
- ? Subtle transitions
- ? Muted colors

---

## ?? Performance Tips

1. **Images**: Replace emoji placeholders with optimized images
2. **Fonts**: Already using `font-display: swap` for faster load
3. **Animations**: Using CSS transforms (GPU accelerated)
4. **Build**: Vite optimizes for production automatically

---

## ?? Deployment Options

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag /dist folder to netlify.com/drop
```

### GitHub Pages
```bash
npm run build
# Push /dist folder to gh-pages branch
```

---

## ?? Learning Resources

**Neo-Brutalism Design**:
- [Brutalist Websites](https://brutalistwebsites.com/)
- [Neo-Brutalism UI Trend](https://uxdesign.cc/neo-brutalism-ui-trend)

**React + Vite**:
- [React Docs](https://react.dev/)
- [Vite Guide](https://vite.dev/guide/)

**CSS Animations**:
- [CSS Tricks - Animations](https://css-tricks.com/almanac/properties/a/animation/)
- [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)

---

## ? Checklist Before Launch

- [ ] Replace all dummy data with real content
- [ ] Add actual project images
- [ ] Update contact information
- [ ] Test on mobile devices
- [ ] Check all links work
- [ ] Optimize images
- [ ] Add favicon
- [ ] Set up analytics
- [ ] Test in different browsers
- [ ] Add meta tags for SEO

---

## ?? You're All Set!

Your neo-brutalism portfolio is ready to impress! The website features:
- ? Modern React + Vite setup
- ? Bold, eye-catching design
- ? Smooth animations
- ? Fully responsive
- ? Easy to customize
- ? Production-ready

**Run `npm run dev` and start customizing!**

---

Built with ?? using React + Vite + Neo-Brutalism Design
