# ?? Chameleon UI - The Ultimate Adaptive Design System

> **Build beautiful UIs that adapt to any brand in seconds**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)](https://www.typescriptlang.org/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

---

## ?? Why Chameleon UI?

**The Problem:** Every project needs a design system, but building one from scratch takes weeks. Existing solutions are either too rigid or too complex.

**The Solution:** Chameleon UI is a **design-token-based system** that gives you:
- ? **10+ pre-built themes** (Brutalism, Glassmorphism, etc.)
- ? **Infinite customization** with design tokens
- ? **Type-safe API** with full TypeScript support
- ? **Framework agnostic** core (React, Vue, Svelte adapters)
- ? **Visual theme builder** (no code required)
- ? **Export anywhere** (CSS, JSON, Figma tokens)

---

## ?? Quick Start

### Installation

```bash
npm install @chameleon-ui/core @chameleon-ui/react
```

### Basic Usage

```typescript
import { createTheme, themeEngine } from '@chameleon-ui/core';

// Create a custom theme
const myTheme = createTheme({
  name: 'my-brand',
  tokens: {
    color: {
      primary: {
        500: { value: '#FF6B6B', type: 'color' }
      }
    }
  }
});

// Apply to your app
themeEngine.apply('my-brand');
```

### With React

```tsx
import { ThemeProvider, Button } from '@chameleon-ui/react';

function App() {
  return (
    <ThemeProvider theme="glassmorphism">
      <Button>Click Me</Button>
    </ThemeProvider>
  );
}
```

---

## ?? Design Token System

Chameleon UI uses the [W3C Design Tokens specification](https://design-tokens.github.io/community-group/format/):

```typescript
const tokens = {
  color: {
    primary: {
      50: { value: '#EFF6FF', type: 'color' },
      500: { value: '#3B82F6', type: 'color' },
      900: { value: '#1E3A8A', type: 'color' }
    }
  },
  spacing: {
    4: { value: '1rem', type: 'dimension' }
  },
  radius: {
    md: { value: '0.375rem', type: 'dimension' }
  }
};
```

### Token Categories

| Category | Examples | Usage |
|----------|----------|-------|
| **Color** | primary, secondary, success | Brand colors, semantic colors |
| **Typography** | fontFamily, fontSize, fontWeight | Text styling |
| **Spacing** | 0-96 (8pt grid) | Margins, padding, gaps |
| **Radius** | none, sm, md, lg, xl, full | Border radius |
| **Shadow** | sm, md, lg, xl | Box shadows |
| **Animation** | duration, easing | Transitions, animations |

---

## ?? Pre-built Themes

### Brutalism
```typescript
themeEngine.apply('brutalism');
```
- **Style:** Bold, thick borders, strong shadows
- **Best for:** Creative portfolios, bold brands
- **Characteristics:** 0px radius, hard shadows

### Glassmorphism
```typescript
themeEngine.apply('glassmorphism');
```
- **Style:** Frosted glass, transparency, blur
- **Best for:** Modern apps, SaaS products
- **Characteristics:** Large radius, soft shadows

### Minimalism
```typescript
themeEngine.apply('minimalism');
```
- **Style:** Clean, simple, abundant whitespace
- **Best for:** Professional sites, content focus
- **Characteristics:** Subtle shadows, small radius

### Claymorphism
```typescript
themeEngine.apply('claymorphism');
```
- **Style:** Soft, inflated, 3D clay-like
- **Best for:** Playful brands, modern apps
- **Characteristics:** Large radius, soft shadows

### Neumorphism
```typescript
themeEngine.apply('neumorphism');
```
- **Style:** Soft UI, subtle depth
- **Best for:** Tactile interfaces
- **Characteristics:** Inner/outer shadows

---

## ??? Advanced Usage

### Creating Custom Themes

```typescript
import { createTheme } from '@chameleon-ui/core';

const corporateTheme = createTheme({
  name: 'corporate',
  description: 'Professional corporate theme',
  tokens: {
    color: {
      primary: {
        500: { value: '#2563EB', type: 'color' }
      },
      secondary: {
        500: { value: '#64748B', type: 'color' }
      }
    },
    typography: {
      fontFamily: {
        sans: { 
          value: ['Roboto', 'sans-serif'], 
          type: 'fontFamily' 
        }
      }
    }
  }
});
```

### Extending Existing Themes

```typescript
const darkBrutalism = createTheme({
  name: 'brutalism-custom',
  extend: 'brutalism', // Extend brutalism
  tokens: {
    color: {
      background: { value: '#000000', type: 'color' },
      foreground: { value: '#FFFFFF', type: 'color' }
    }
  }
});
```

### Theme Variants

```typescript
import { createDarkTheme } from '@chameleon-ui/core';

// Auto-create dark variant
const darkVersion = createDarkTheme('glassmorphism');
```

### Exporting Themes

```typescript
// Export as CSS
const css = themeEngine.generateCss('my-theme');

// Export as JSON
const json = themeEngine.export('my-theme');

// Export as Figma tokens
// Coming soon!
```

---

## ?? Packages

### @chameleon-ui/core
The foundation - design tokens and theme engine

```bash
npm install @chameleon-ui/core
```

### @chameleon-ui/react
React components and hooks

```bash
npm install @chameleon-ui/react
```

### @chameleon-ui/vue
Vue 3 components (Coming soon)

### @chameleon-ui/builder
Visual theme builder app

```bash
npm install -g @chameleon-ui/builder
chameleon build
```

---

## ?? CSS Variables

All tokens are automatically converted to CSS variables:

```css
:root {
  /* Colors */
  --color-primary-50: #EFF6FF;
  --color-primary-500: #3B82F6;
  --color-primary-900: #1E3A8A;
  
  /* Typography */
  --font-sans: Inter, system-ui, sans-serif;
  --text-base: 1rem;
  --font-bold: 700;
  
  /* Spacing */
  --space-4: 1rem;
  --space-8: 2rem;
  
  /* Radius */
  --radius-md: 0.375rem;
  
  /* Shadows */
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  
  /* Animation */
  --duration-normal: 300ms;
  --ease-easeInOut: cubic-bezier(0.4, 0, 0.2, 1);
}
```

Use in your CSS:

```css
.card {
  background: var(--color-primary-500);
  padding: var(--space-4);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
  transition: all var(--duration-normal) var(--ease-easeInOut);
}
```

---

## ??? Architecture

```
Chameleon UI Architecture

???????????????????????????????????????
?         Design Tokens               ?
?  (W3C Spec - JSON/TypeScript)       ?
???????????????????????????????????????
               ?
               ?
???????????????????????????????????????
?        Theme Engine                 ?
?  • Token Resolution                 ?
?  • CSS Variable Generation          ?
?  • Theme Composition                ?
???????????????????????????????????????
               ?
               ?
???????????????????????????????????????
?     Framework Adapters              ?
?  • React Provider & Hooks           ?
?  • Vue Composables                  ?
?  • Svelte Stores                    ?
???????????????????????????????????????
               ?
               ?
???????????????????????????????????????
?       UI Components                 ?
?  • Button, Card, Input, etc.        ?
?  • Fully typed & themeable          ?
???????????????????????????????????????
```

---

## ?? Philosophy

### 1. **Design Tokens First**
Everything is a token. This makes themes portable and maintainable.

### 2. **Type Safety**
Full TypeScript support means fewer bugs and better DX.

### 3. **Framework Agnostic Core**
The core works anywhere. Framework adapters are thin wrappers.

### 4. **Developer Experience**
Simple API, great docs, helpful error messages.

### 5. **Zero Lock-in**
Export to CSS, JSON, or any format. You're never stuck.

---

## ?? Comparison

| Feature | Chameleon UI | Tailwind | MUI | Chakra UI |
|---------|--------------|----------|-----|-----------|
| Design Tokens | ? W3C Spec | ?? Config | ? | ?? Theme |
| Pre-built Themes | ? 10+ | ? | ? 2 | ? |
| Visual Builder | ? | ? | ? | ? |
| Framework Agnostic | ? | ? | ? React | ? React |
| Type Safety | ? Full | ?? Partial | ? | ? |
| Bundle Size | ?? Small | ?? Small | ?? Large | ?? Medium |

---

## ??? Roadmap

### Q1 2024
- [x] Core design token system
- [x] Theme engine
- [x] 5 preset themes
- [ ] React component library (50+ components)
- [ ] Documentation site

### Q2 2024
- [ ] Visual theme builder
- [ ] Figma plugin
- [ ] Vue 3 adapter
- [ ] Svelte adapter
- [ ] CLI tool

### Q3 2024
- [ ] Storybook integration
- [ ] Theme marketplace
- [ ] AI theme generator
- [ ] Premium themes

---

## ?? Contributing

We love contributions! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

```bash
# Clone the repo
git clone https://github.com/yourusername/chameleon-ui.git

# Install dependencies
npm install

# Start development
npm run dev
```

---

## ?? License

MIT © [Your Name](https://yourwebsite.com)

---

## ?? Acknowledgments

- [W3C Design Tokens Community Group](https://design-tokens.github.io/community-group/)
- [Tailwind CSS](https://tailwindcss.com/) for inspiration
- [Radix UI](https://www.radix-ui.com/) for component patterns
- All our [contributors](https://github.com/yourusername/chameleon-ui/graphs/contributors)

---

## ?? Support

- ?? [Documentation](https://chameleon-ui.dev)
- ?? [Discord Community](https://discord.gg/chameleon-ui)
- ?? [Issue Tracker](https://github.com/yourusername/chameleon-ui/issues)
- ?? [Twitter](https://twitter.com/chameleonui)

---

<p align="center">
  <strong>Built with ?? by developers, for developers</strong>
</p>

<p align="center">
  <sub>? Star us on GitHub — it helps!</sub>
</p>
