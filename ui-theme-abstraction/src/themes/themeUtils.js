/**
 * Theme utility functions for common operations
 */

/**
 * Convert hex color to RGB
 */
export const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
};

/**
 * Convert hex color to RGBA with opacity
 */
export const hexToRgba = (hex, alpha = 1) => {
  const rgb = hexToRgb(hex);
  return rgb ? `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})` : hex;
};

/**
 * Check if a color is light or dark (for contrast calculations)
 */
export const isLightColor = (color) => {
  const rgb = hexToRgb(color);
  if (!rgb) return false;
  
  const brightness = (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
  return brightness > 155;
};

/**
 * Get contrasting text color (black or white) for a given background
 */
export const getContrastColor = (backgroundColor) => {
  return isLightColor(backgroundColor) ? '#000000' : '#FFFFFF';
};

/**
 * Validate theme structure
 */
export const validateTheme = (theme) => {
  const requiredKeys = ['name', 'description', 'colors', 'spacing', 'typography', 'effects'];
  const requiredColors = ['primary', 'secondary', 'accent', 'background', 'surface', 'text', 'textSecondary', 'border', 'shadow'];
  const requiredSpacing = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'];
  
  const errors = [];
  
  // Check top-level keys
  requiredKeys.forEach(key => {
    if (!theme[key]) {
      errors.push(`Missing required key: ${key}`);
    }
  });
  
  // Check colors
  if (theme.colors) {
    requiredColors.forEach(color => {
      if (!theme.colors[color]) {
        errors.push(`Missing required color: ${color}`);
      }
    });
  }
  
  // Check spacing
  if (theme.spacing) {
    requiredSpacing.forEach(size => {
      if (!theme.spacing[size]) {
        errors.push(`Missing required spacing: ${size}`);
      }
    });
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

/**
 * Deep merge two theme objects
 */
export const mergeThemes = (baseTheme, overrides) => {
  const merged = JSON.parse(JSON.stringify(baseTheme));
  
  const deepMerge = (target, source) => {
    for (const key in source) {
      if (source[key] instanceof Object && !Array.isArray(source[key])) {
        target[key] = target[key] || {};
        deepMerge(target[key], source[key]);
      } else {
        target[key] = source[key];
      }
    }
    return target;
  };
  
  return deepMerge(merged, overrides);
};

/**
 * Generate a theme variant (e.g., dark mode)
 */
export const generateDarkVariant = (theme) => {
  return {
    ...theme,
    name: `${theme.name} (Dark)`,
    colors: {
      ...theme.colors,
      background: theme.colors.text,
      text: theme.colors.background,
      surface: hexToRgba(theme.colors.text, 0.9),
      textSecondary: hexToRgba(theme.colors.background, 0.8)
    }
  };
};

/**
 * Export theme as CSS
 */
export const exportThemeAsCss = (theme) => {
  let css = ':root {\n';
  
  // Colors
  Object.entries(theme.colors).forEach(([key, value]) => {
    css += `  --color-${key}: ${value};\n`;
  });
  
  // Spacing
  Object.entries(theme.spacing).forEach(([key, value]) => {
    css += `  --spacing-${key}: ${value};\n`;
  });
  
  // Typography
  Object.entries(theme.typography).forEach(([key, value]) => {
    css += `  --typography-${key}: ${value};\n`;
  });
  
  // Effects
  Object.entries(theme.effects).forEach(([key, value]) => {
    css += `  --effect-${key}: ${value};\n`;
  });
  
  css += '}\n';
  return css;
};

/**
 * Export theme as JSON
 */
export const exportThemeAsJson = (theme) => {
  return JSON.stringify(theme, null, 2);
};

/**
 * Calculate color palette from primary color
 */
export const generateColorPalette = (primaryColor) => {
  // This is a simplified version - you might want to use a library like chroma.js
  const lighten = (color, amount) => {
    const rgb = hexToRgb(color);
    if (!rgb) return color;
    
    return `rgb(${
      Math.min(255, rgb.r + amount)
    }, ${
      Math.min(255, rgb.g + amount)
    }, ${
      Math.min(255, rgb.b + amount)
    })`;
  };
  
  const darken = (color, amount) => {
    const rgb = hexToRgb(color);
    if (!rgb) return color;
    
    return `rgb(${
      Math.max(0, rgb.r - amount)
    }, ${
      Math.max(0, rgb.g - amount)
    }, ${
      Math.max(0, rgb.b - amount)
    })`;
  };
  
  return {
    primary: primaryColor,
    light: lighten(primaryColor, 40),
    lighter: lighten(primaryColor, 80),
    dark: darken(primaryColor, 40),
    darker: darken(primaryColor, 80)
  };
};

/**
 * Get responsive spacing value
 */
export const getResponsiveSpacing = (theme, size, breakpoint = 'desktop') => {
  const multipliers = {
    mobile: 0.75,
    tablet: 0.875,
    desktop: 1,
    large: 1.25
  };
  
  const baseValue = parseInt(theme.spacing[size]);
  const multiplier = multipliers[breakpoint] || 1;
  
  return `${Math.round(baseValue * multiplier)}px`;
};

/**
 * Apply theme to a specific element
 */
export const applyThemeToElement = (element, theme) => {
  if (!element || !theme) return;
  
  // Apply colors
  Object.entries(theme.colors).forEach(([key, value]) => {
    element.style.setProperty(`--color-${key}`, value);
  });
  
  // Apply spacing
  Object.entries(theme.spacing).forEach(([key, value]) => {
    element.style.setProperty(`--spacing-${key}`, value);
  });
  
  // Apply typography
  Object.entries(theme.typography).forEach(([key, value]) => {
    element.style.setProperty(`--typography-${key}`, value);
  });
  
  // Apply effects
  Object.entries(theme.effects).forEach(([key, value]) => {
    element.style.setProperty(`--effect-${key}`, value);
  });
};

/**
 * Remove theme from element
 */
export const removeThemeFromElement = (element) => {
  if (!element) return;
  
  const properties = [
    'color-primary', 'color-secondary', 'color-accent',
    'spacing-xs', 'spacing-sm', 'spacing-md',
    // Add more as needed
  ];
  
  properties.forEach(prop => {
    element.style.removeProperty(`--${prop}`);
  });
};

export default {
  hexToRgb,
  hexToRgba,
  isLightColor,
  getContrastColor,
  validateTheme,
  mergeThemes,
  generateDarkVariant,
  exportThemeAsCss,
  exportThemeAsJson,
  generateColorPalette,
  getResponsiveSpacing,
  applyThemeToElement,
  removeThemeFromElement
};
