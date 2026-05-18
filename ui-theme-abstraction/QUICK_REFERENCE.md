# ?? Quick Reference: Complete Theme Control

## ? Configuration File

**File**: `ui-theme-abstraction/appsettings.json`

```json
{
  "theme": {
    "uiType": "UI_TYPE_HERE",
    "fontScheme": "FONT_SCHEME_HERE",
    "colorScheme": "COLOR_SCHEME_HERE"
  },
  "portfolio": {
    "name": "Your Name",
    "title": "Your Title"
  }
}
```

---

## 1?? UI Types (Design Patterns)

| Value | Style | Best For |
|-------|-------|----------|
| `neo-brutalism` | Bold, blocky, thick borders | Modern, edgy |
| `glassmorphism` | Frosted glass, transparent | Elegant, modern |
| `minimalism` | Clean, simple, whitespace | Professional, content-focused |
| `skeuomorphism` | Realistic, 3D-like | Traditional, familiar |
| `claymorphism` | Soft, inflated, puffy | Playful, friendly |
| `liquid-glass` | Fluid, organic | Creative, artistic |

---

## 2?? Font Schemes (Typography)

| Value | Primary Font | Style | Best For |
|-------|--------------|-------|----------|
| `bold` | Space Grotesk | Bold & impactful | Tech, startups |
| `elegant` | Playfair Display | Elegant & refined | Luxury, creative |
| `modern` | Inter | Modern & clean | Apps, SaaS |
| `playful` | Poppins | Playful & fun | Creative, young |
| `technical` | Roboto Mono | Technical & precise | Developer, tech |

---

## 3?? Color Schemes (Color Palettes)

| Value | Primary | Secondary | Style | Best For |
|-------|---------|-----------|-------|----------|
| `vibrant` | #FF6B6B | #4ECDC4 | Vibrant & bold | Creative, fun |
| `professional` | #2B6CB0 | #4A5568 | Corporate | Business, formal |
| `pastel` | #A78BFA | #F472B6 | Soft & pastel | Gentle, friendly |
| `dark` | #818CF8 | #A78BFA | Dark mode | Modern, tech |
| `nature` | #059669 | #0891B2 | Earthy | Nature, eco |
| `monochrome` | #000000 | #404040 | Classic | Timeless, minimal |

---

## ?? Quick Examples

### Bold & Vibrant (Default)
```json
{
  "theme": {
    "uiType": "neo-brutalism",
    "fontScheme": "bold",
    "colorScheme": "vibrant"
  }
}
```

### Professional Corporate
```json
{
  "theme": {
    "uiType": "minimalism",
    "fontScheme": "elegant",
    "colorScheme": "professional"
  }
}
```

### Modern Dark Mode
```json
{
  "theme": {
    "uiType": "glassmorphism",
    "fontScheme": "modern",
    "colorScheme": "dark"
  }
}
```

### Playful Pastel
```json
{
  "theme": {
    "uiType": "claymorphism",
    "fontScheme": "playful",
    "colorScheme": "pastel"
  }
}
```

### Tech Developer
```json
{
  "theme": {
    "uiType": "minimalism",
    "fontScheme": "technical",
    "colorScheme": "monochrome"
  }
}
```

---

## ?? Steps to Change

1. Open `appsettings.json`
2. Change any of the three theme values
3. Save file
4. Refresh browser

**That's it!** ?

---

## ?? Mix & Match

**Total combinations**: 6 × 5 × 6 = **180 unique designs**

Change:
- UI type independently
- Font scheme independently  
- Color scheme independently

All controlled from one file!

---

## ?? Portfolio Content

```json
{
  "portfolio": {
    "name": "Your Name",
    "title": "Your Title",
    "tagline": "Your Tagline",
    "description": "Your description..."
  }
}
```

---

**Need more help?** Read `COMPLETE_GUIDE.md`
