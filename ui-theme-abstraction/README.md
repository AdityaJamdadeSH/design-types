# UI Theme Abstraction

A powerful React-based theming system that provides an abstraction layer for managing and switching between different UI design patterns dynamically.

## ?? Features

- **Centralized Theme Configuration**: All themes defined in `appsettings.json` for easy management
- **6 Built-in Design Patterns**:
  - Neo-Brutalism
  - Glassmorphism
  - Minimalism
  - Skeuomorphism
  - Claymorphism
  - Liquid Glass
- **Runtime Theme Switching**: Change themes on-the-fly (configurable)
- **CSS Custom Properties**: Automatic CSS variable injection for seamless styling
- **Type-safe Theme System**: Consistent theme structure across all patterns
- **Fully Extensible**: Easy to add new themes

## ?? Getting Started

### Installation

```bash
cd ui-theme-abstraction
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

## ?? Configuration

### appsettings.json

The main configuration file for controlling theme behavior:

```json
{
  "theme": {
    "active": "neo-brutalism",           // Current active theme
    "allowRuntimeSwitch": true,          // Enable/disable runtime switching
    "defaultTheme": "neo-brutalism"      // Fallback theme
  },
  "app": {
    "title": "UI Theme Abstraction Demo",
    "description": "A dynamic theming system for modern UI design patterns"
  }
}
```

**Key Settings:**
- `active`: Set the initial theme (e.g., "glassmorphism", "minimalism")
- `allowRuntimeSwitch`: When `false`, users cannot change themes at runtime
- `defaultTheme`: Fallback theme if the active theme is not found

## ?? Theme Structure

Each theme contains:

### Colors
- `primary`, `secondary`, `accent`
- `background`, `surface`, `text`, `textSecondary`
- `border`, `shadow`

### Spacing
- `xs`, `sm`, `md`, `lg`, `xl`, `xxl`

### Typography
- Font family, sizes (base, small, large, h1-h3)
- Font weights (normal, bold, extra bold)
- Line height

### Effects
- Border radius, border width
- Shadow size and offset
- Blur amount
- Transition timing

## ?? Usage Examples

### Using the Theme Hook

```jsx
import { useTheme } from './themes/ThemeProvider';

function MyComponent() {
  const { theme, currentThemeName, changeTheme } = useTheme();
  
  return (
    <div style={{ 
      background: theme.colors.primary,
      padding: theme.spacing.lg 
    }}>
      <h1>Current Theme: {theme.name}</h1>
      <button onClick={() => changeTheme('glassmorphism')}>
        Switch to Glassmorphism
      </button>
    </div>
  );
}
```

### Using CSS Variables

```css
.myComponent {
  background: var(--color-surface);
  padding: var(--spacing-lg);
  border-radius: var(--effect-borderRadius);
  box-shadow: var(--effect-shadowSize) var(--color-shadow);
  transition: var(--effect-transition);
}
```

## ?? Adding a New Theme

1. Open `src/themes/themeDefinitions.js`
2. Add your theme to the `themeDefinitions` object:

```javascript
'my-custom-theme': {
  name: 'My Custom Theme',
  description: 'A unique design style',
  colors: {
    primary: '#yourColor',
    // ... other colors
  },
  spacing: { /* ... */ },
  typography: { /* ... */ },
  effects: { /* ... */ }
}
```

3. Update `appsettings.json` to use your theme:

```json
{
  "theme": {
    "active": "my-custom-theme"
  }
}
```

## ?? Use Cases

1. **Multi-tenant Applications**: Different themes for different clients
2. **A/B Testing**: Test different design patterns with users
3. **Seasonal Themes**: Switch themes based on events or seasons
4. **User Preferences**: Let users choose their preferred design style
5. **Brand Variants**: Multiple brand identities in one application

## ??? Architecture

```
ui-theme-abstraction/
??? src/
?   ??? themes/
?   ?   ??? ThemeProvider.jsx      # Theme context and provider
?   ?   ??? themeDefinitions.js    # All theme definitions
?   ??? App.jsx                     # Main application
?   ??? App.module.css             # Component styles using CSS vars
?   ??? index.css                  # Global styles
?   ??? main.jsx                   # Entry point
??? appsettings.json               # Configuration file
??? package.json
??? vite.config.js
```

## ?? Production Considerations

For production environments, consider:

1. **Security**: Move sensitive theme configs to environment variables
2. **Performance**: Lazy load theme definitions
3. **Caching**: Cache theme selections in localStorage
4. **SSR**: Server-side render the initial theme to avoid flash

## ?? License

MIT

## ?? Contributing

Feel free to extend this theming system with your own design patterns!
