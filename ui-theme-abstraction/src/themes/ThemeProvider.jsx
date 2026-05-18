import { createContext, useContext, useState, useEffect } from 'react';
import { getTheme, getAllThemes } from './themeDefinitions';
import appSettings from '../../appsettings.json';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [currentThemeName, setCurrentThemeName] = useState(
    appSettings.theme.active || appSettings.theme.defaultTheme
  );
  const [theme, setTheme] = useState(getTheme(currentThemeName));

  useEffect(() => {
    const newTheme = getTheme(currentThemeName);
    setTheme(newTheme);
    applyThemeToDocument(newTheme);
  }, [currentThemeName]);

  const applyThemeToDocument = (themeConfig) => {
    const root = document.documentElement;
    
    // Apply colors
    Object.entries(themeConfig.colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });

    // Apply spacing
    Object.entries(themeConfig.spacing).forEach(([key, value]) => {
      root.style.setProperty(`--spacing-${key}`, value);
    });

    // Apply typography
    Object.entries(themeConfig.typography).forEach(([key, value]) => {
      root.style.setProperty(`--typography-${key}`, value);
    });

    // Apply effects
    Object.entries(themeConfig.effects).forEach(([key, value]) => {
      root.style.setProperty(`--effect-${key}`, value);
    });
  };

  const changeTheme = (themeName) => {
    if (!appSettings.theme.allowRuntimeSwitch) {
      console.warn('Runtime theme switching is disabled in appsettings.json');
      return;
    }
    
    if (getAllThemes().includes(themeName)) {
      setCurrentThemeName(themeName);
    } else {
      console.error(`Theme "${themeName}" not found`);
    }
  };

  const value = {
    theme,
    currentThemeName,
    changeTheme,
    availableThemes: getAllThemes(),
    canSwitchTheme: appSettings.theme.allowRuntimeSwitch
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
