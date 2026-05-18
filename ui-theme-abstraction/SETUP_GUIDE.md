# Quick Start Guide

## Installation & Setup

### 1. Navigate to the project directory
```bash
cd ui-theme-abstraction
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```

The application will open at `http://localhost:5173`

## Configuration

### Change the Active Theme

Edit `appsettings.json`:

```json
{
  "theme": {
    "active": "glassmorphism",  // Change this to any available theme
    "allowRuntimeSwitch": true,
    "defaultTheme": "neo-brutalism"
  }
}
```

**Available themes:**
- `neo-brutalism`
- `glassmorphism`
- `minimalism`
- `skeuomorphism`
- `claymorphism`
- `liquid-glass`

### Disable Runtime Theme Switching

Set `allowRuntimeSwitch` to `false` in `appsettings.json`:

```json
{
  "theme": {
    "active": "minimalism",
    "allowRuntimeSwitch": false,  // Users can't change themes
    "defaultTheme": "minimalism"
  }
}
```

## Usage in Components

### Method 1: Use the Theme Hook

```jsx
import { useTheme } from './themes/ThemeProvider';

function MyComponent() {
  const { theme, changeTheme } = useTheme();
  
  return (
    <div style={{ 
      backgroundColor: theme.colors.primary,
      padding: theme.spacing.lg,
      borderRadius: theme.effects.borderRadius
    }}>
      <h1>{theme.name}</h1>
    </div>
  );
}
```

### Method 2: Use CSS Variables (Recommended)

```css
.myComponent {
  background-color: var(--color-primary);
  padding: var(--spacing-lg);
  border-radius: var(--effect-borderRadius);
  box-shadow: var(--effect-shadowSize) var(--color-shadow);
}
```

### Method 3: Use Pre-built Components

```jsx
import { Button } from './components/Button';
import { Card } from './components/Card';

function App() {
  return (
    <Card title="Welcome">
      <p>This card automatically adapts to the current theme!</p>
      <Button variant="primary">Click Me</Button>
    </Card>
  );
}
```

## Creating Custom Components

### Example: Themed Input Component

```jsx
// src/components/Input.jsx
import { useTheme } from '../themes/ThemeProvider';
import styles from './Input.module.css';

export const Input = ({ placeholder, ...props }) => {
  const { theme } = useTheme();
  
  return (
    <input
      className={styles.input}
      placeholder={placeholder}
      style={{
        borderWidth: theme.effects.borderWidth,
        borderRadius: theme.effects.borderRadius,
      }}
      {...props}
    />
  );
};
```

```css
/* src/components/Input.module.css */
.input {
  padding: var(--spacing-md);
  background: var(--color-background);
  color: var(--color-text);
  border: var(--effect-borderWidth) solid var(--color-border);
  border-radius: var(--effect-borderRadius);
  transition: var(--effect-transition);
}

.input:focus {
  outline: none;
  border-color: var(--color-primary);
}
```

## Available CSS Variables

### Colors
- `--color-primary`
- `--color-secondary`
- `--color-accent`
- `--color-background`
- `--color-surface`
- `--color-text`
- `--color-textSecondary`
- `--color-border`
- `--color-shadow`

### Spacing
- `--spacing-xs` (4px)
- `--spacing-sm` (8px)
- `--spacing-md` (16px)
- `--spacing-lg` (24px)
- `--spacing-xl` (32px)
- `--spacing-xxl` (48px)

### Typography
- `--typography-fontFamily`
- `--typography-fontSizeBase`
- `--typography-fontSizeSmall`
- `--typography-fontSizeLarge`
- `--typography-fontSizeH1`
- `--typography-fontSizeH2`
- `--typography-fontSizeH3`
- `--typography-fontWeightNormal`
- `--typography-fontWeightBold`
- `--typography-fontWeightExtraBold`
- `--typography-lineHeight`

### Effects
- `--effect-borderRadius`
- `--effect-borderWidth`
- `--effect-shadowSize`
- `--effect-shadowOffset`
- `--effect-blur`
- `--effect-transition`

## Build for Production

```bash
npm run build
```

The optimized build will be in the `dist` folder.

## Troubleshooting

### Theme not changing
- Make sure `allowRuntimeSwitch` is set to `true` in `appsettings.json`
- Check browser console for errors
- Verify theme name is correct (case-sensitive)

### Styles not applying
- Ensure you're using the correct CSS variable names
- Check that ThemeProvider wraps your entire app
- Clear browser cache and reload

### TypeScript errors (if adding TypeScript)
- Create type definitions for themes
- Use TypeScript-compatible imports

## Next Steps

1. **Customize existing themes** in `src/themes/themeDefinitions.js`
2. **Create new themes** by adding to the themeDefinitions object
3. **Build reusable components** that use the theme system
4. **Add theme persistence** using localStorage
5. **Implement dark/light mode** variants for each theme

Enjoy building with the UI Theme Abstraction system! ??
