# Advanced Theme Configuration Examples

## Example 1: Production Configuration with Security

For production, you might want to load theme configuration from environment variables:

### Step 1: Create `.env` file
```env
VITE_ACTIVE_THEME=glassmorphism
VITE_ALLOW_THEME_SWITCH=false
VITE_DEFAULT_THEME=minimalism
```

### Step 2: Update ThemeProvider.jsx
```jsx
import appSettings from '../../appsettings.json';

const getThemeConfig = () => {
  if (import.meta.env.PROD) {
    return {
      active: import.meta.env.VITE_ACTIVE_THEME || appSettings.theme.active,
      allowRuntimeSwitch: import.meta.env.VITE_ALLOW_THEME_SWITCH === 'true',
      defaultTheme: import.meta.env.VITE_DEFAULT_THEME || appSettings.theme.defaultTheme
    };
  }
  return appSettings.theme;
};

export const ThemeProvider = ({ children }) => {
  const themeConfig = getThemeConfig();
  const [currentThemeName, setCurrentThemeName] = useState(themeConfig.active);
  // ...
};
```

## Example 2: Theme Persistence with localStorage

Save user theme preferences across sessions:

```jsx
// src/themes/ThemeProvider.jsx
export const ThemeProvider = ({ children }) => {
  // Load saved theme or use default
  const getSavedTheme = () => {
    const saved = localStorage.getItem('app-theme');
    return saved || appSettings.theme.active;
  };

  const [currentThemeName, setCurrentThemeName] = useState(getSavedTheme());

  const changeTheme = (themeName) => {
    if (!appSettings.theme.allowRuntimeSwitch) {
      console.warn('Runtime theme switching is disabled');
      return;
    }
    
    if (getAllThemes().includes(themeName)) {
      setCurrentThemeName(themeName);
      localStorage.setItem('app-theme', themeName); // Persist choice
    }
  };
  
  // ...
};
```

## Example 3: Multi-tenant Configuration

Different themes for different organizations:

### appsettings.json
```json
{
  "theme": {
    "active": "neo-brutalism",
    "allowRuntimeSwitch": false,
    "defaultTheme": "neo-brutalism",
    "tenantThemes": {
      "acme-corp": "minimalism",
      "tech-startup": "neo-brutalism",
      "design-agency": "glassmorphism",
      "finance-co": "skeuomorphism"
    }
  }
}
```

### Usage
```jsx
// Detect tenant from URL or user context
const getTenantFromUrl = () => {
  const subdomain = window.location.hostname.split('.')[0];
  return subdomain;
};

export const ThemeProvider = ({ children }) => {
  const tenant = getTenantFromUrl();
  const tenantTheme = appSettings.theme.tenantThemes[tenant];
  const initialTheme = tenantTheme || appSettings.theme.active;
  
  const [currentThemeName, setCurrentThemeName] = useState(initialTheme);
  // ...
};
```

## Example 4: Scheduled Theme Changes

Automatically switch themes based on time or events:

```jsx
// src/themes/useScheduledTheme.js
import { useEffect } from 'react';
import { useTheme } from './ThemeProvider';

export const useScheduledTheme = () => {
  const { changeTheme } = useTheme();

  useEffect(() => {
    const checkSchedule = () => {
      const hour = new Date().getHours();
      
      // Business hours: Minimalism
      if (hour >= 9 && hour < 17) {
        changeTheme('minimalism');
      }
      // Evening: Glassmorphism
      else if (hour >= 17 && hour < 22) {
        changeTheme('glassmorphism');
      }
      // Night: Neo-brutalism
      else {
        changeTheme('neo-brutalism');
      }
    };

    checkSchedule();
    const interval = setInterval(checkSchedule, 60000); // Check every minute

    return () => clearInterval(interval);
  }, [changeTheme]);
};

// Usage in App.jsx
function App() {
  useScheduledTheme(); // Automatically changes theme based on time
  // ...
}
```

## Example 5: A/B Testing Integration

Track which theme performs better:

```jsx
// src/themes/ThemeProvider.jsx
const trackThemeChange = (themeName) => {
  // Send to analytics
  if (window.gtag) {
    window.gtag('event', 'theme_change', {
      theme_name: themeName,
      timestamp: new Date().toISOString()
    });
  }
};

const changeTheme = (themeName) => {
  if (getAllThemes().includes(themeName)) {
    setCurrentThemeName(themeName);
    trackThemeChange(themeName);
  }
};
```

## Example 6: Dynamic Theme Loading

Load themes from an API:

```jsx
// src/themes/useRemoteThemes.js
import { useState, useEffect } from 'react';

export const useRemoteThemes = () => {
  const [remoteThemes, setRemoteThemes] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/themes')
      .then(res => res.json())
      .then(data => {
        setRemoteThemes(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load themes:', err);
        setLoading(false);
      });
  }, []);

  return { remoteThemes, loading };
};

// Update themeDefinitions.js to merge remote themes
export const getTheme = (themeName, remoteThemes = {}) => {
  const allThemes = { ...themeDefinitions, ...remoteThemes };
  return allThemes[themeName] || themeDefinitions['neo-brutalism'];
};
```

## Example 7: Theme Customization UI

Allow users to customize theme colors:

```jsx
// src/components/ThemeCustomizer.jsx
import { useTheme } from '../themes/ThemeProvider';
import { useState } from 'react';

export const ThemeCustomizer = () => {
  const { theme, currentThemeName } = useTheme();
  const [customColors, setCustomColors] = useState({});

  const updateColor = (colorKey, newValue) => {
    setCustomColors(prev => ({ ...prev, [colorKey]: newValue }));
    document.documentElement.style.setProperty(`--color-${colorKey}`, newValue);
  };

  return (
    <div className="theme-customizer">
      <h3>Customize Colors</h3>
      {Object.keys(theme.colors).map(colorKey => (
        <div key={colorKey}>
          <label>{colorKey}</label>
          <input
            type="color"
            value={customColors[colorKey] || theme.colors[colorKey]}
            onChange={(e) => updateColor(colorKey, e.target.value)}
          />
        </div>
      ))}
    </div>
  );
};
```

## Example 8: SSR (Server-Side Rendering)

For Next.js or similar frameworks:

```jsx
// pages/_app.jsx
import { ThemeProvider } from '../src/themes/ThemeProvider';
import { useEffect } from 'react';

function MyApp({ Component, pageProps, initialTheme }) {
  return (
    <ThemeProvider initialTheme={initialTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

MyApp.getInitialProps = async ({ ctx }) => {
  // Detect theme from cookie or user preferences
  const theme = ctx.req?.cookies?.theme || 'neo-brutalism';
  
  return { initialTheme: theme };
};

export default MyApp;
```

## Example 9: Theme Transitions

Smooth transitions between themes:

```css
/* Add to index.css */
* {
  transition: background-color 0.5s ease,
              color 0.5s ease,
              border-color 0.5s ease,
              box-shadow 0.5s ease;
}

/* Disable transitions on theme change for instant feedback */
body.theme-changing * {
  transition: none !important;
}
```

```jsx
// In ThemeProvider
const changeTheme = (themeName) => {
  document.body.classList.add('theme-changing');
  setCurrentThemeName(themeName);
  
  setTimeout(() => {
    document.body.classList.remove('theme-changing');
  }, 50);
};
```

## Example 10: Theme Presets for Different Pages

Different themes for different sections of your app:

```jsx
// src/themes/PageThemeWrapper.jsx
import { useEffect } from 'react';
import { useTheme } from './ThemeProvider';

const pageThemes = {
  '/': 'neo-brutalism',
  '/about': 'minimalism',
  '/products': 'glassmorphism',
  '/contact': 'skeuomorphism'
};

export const PageThemeWrapper = ({ children, path }) => {
  const { changeTheme } = useTheme();

  useEffect(() => {
    const pageTheme = pageThemes[path];
    if (pageTheme) {
      changeTheme(pageTheme);
    }
  }, [path, changeTheme]);

  return <>{children}</>;
};
```

---

## Best Practices

1. **Performance**: Lazy load theme definitions if you have many themes
2. **Accessibility**: Ensure all themes meet WCAG color contrast requirements
3. **Testing**: Test components with all available themes
4. **Documentation**: Document theme requirements for new components
5. **Validation**: Validate theme structure on load to catch errors early
6. **Fallbacks**: Always provide fallback values for missing theme properties
7. **Cache**: Cache theme calculations to avoid repeated computation
8. **Mobile**: Test themes on mobile devices for touch interactions
9. **Print**: Consider print styles that work with all themes
10. **Analytics**: Track theme usage to understand user preferences
