import { createContext, useContext, useState, useEffect } from 'react';
import { buildTheme, getAvailableOptions } from './themeConfig';
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
  const [config, setConfig] = useState({
    uiType: appSettings.theme.uiType || 'neo-brutalism',
    fontScheme: appSettings.theme.fontScheme || 'bold',
    colorScheme: appSettings.theme.colorScheme || 'vibrant'
  });

  const [theme, setTheme] = useState(
    buildTheme(config.uiType, config.fontScheme, config.colorScheme)
  );

  const [portfolio] = useState(appSettings.portfolio);

  useEffect(() => {
    const newTheme = buildTheme(config.uiType, config.fontScheme, config.colorScheme);
    setTheme(newTheme);
    applyThemeToDocument(newTheme);
  }, [config]);

  const applyThemeToDocument = (themeConfig) => {
    const root = document.documentElement;
    
    // Apply colors
    Object.entries(themeConfig.colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });

    // Apply fonts
    Object.entries(themeConfig.fonts).forEach(([key, value]) => {
      root.style.setProperty(`--font-${key}`, value);
    });

    // Apply UI type properties
    root.style.setProperty(`--border-radius`, themeConfig.borderRadius);
    root.style.setProperty(`--border-width`, themeConfig.borderWidth);
    root.style.setProperty(`--shadow-style`, themeConfig.shadowStyle);
    if (themeConfig.blur) root.style.setProperty(`--blur`, themeConfig.blur);
    if (themeConfig.transparency) root.style.setProperty(`--transparency`, themeConfig.transparency);
  };

  const changeConfig = (newConfig) => {
    if (!appSettings.theme.allowRuntimeSwitch) {
      console.warn('Runtime theme switching is disabled in appsettings.json');
      return;
    }
    setConfig({ ...config, ...newConfig });
  };

  const value = {
    theme,
    config,
    portfolio,
    changeConfig,
    availableOptions: getAvailableOptions(),
    canSwitch: appSettings.theme.allowRuntimeSwitch
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
