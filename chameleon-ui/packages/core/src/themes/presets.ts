import { createTheme, createDarkTheme } from '../engine/ThemeEngine';
import type { ThemeConfig } from '../types/tokens';

/**
 * Brutalism Theme
 * Bold, unapologetic design with thick borders and strong shadows
 */
const brutalismConfig: ThemeConfig = {
  name: 'brutalism',
  description: 'Bold, unapologetic design with thick borders and vibrant colors',
  tokens: {
    color: {
      primary: {
        50: { value: '#FEF2F2', type: 'color' },
        500: { value: '#FF6B6B', type: 'color' },
        600: { value: '#EF4444', type: 'color' },
      },
      secondary: {
        500: { value: '#4ECDC4', type: 'color' },
      },
      accent: {
        500: { value: '#FFE66D', type: 'color' },
      },
    },
    radius: {
      none: { value: '0px', type: 'dimension' },
      sm: { value: '0px', type: 'dimension' },
      md: { value: '0px', type: 'dimension' },
      lg: { value: '0px', type: 'dimension' },
      xl: { value: '0px', type: 'dimension' },
    },
    shadow: {
      sm: {
        value: {
          offsetX: '4px',
          offsetY: '4px',
          blur: '0px',
          spread: '0px',
          color: '#000000',
        },
        type: 'shadow',
      },
      md: {
        value: {
          offsetX: '6px',
          offsetY: '6px',
          blur: '0px',
          spread: '0px',
          color: '#000000',
        },
        type: 'shadow',
      },
      lg: {
        value: {
          offsetX: '8px',
          offsetY: '8px',
          blur: '0px',
          spread: '0px',
          color: '#000000',
        },
        type: 'shadow',
      },
    },
  },
};

/**
 * Glassmorphism Theme
 * Modern, elegant design with frosted glass effects
 */
const glassmorphismConfig: ThemeConfig = {
  name: 'glassmorphism',
  description: 'Modern, elegant design with frosted glass effects and transparency',
  tokens: {
    radius: {
      md: { value: '16px', type: 'dimension' },
      lg: { value: '20px', type: 'dimension' },
      xl: { value: '24px', type: 'dimension' },
    },
    shadow: {
      sm: {
        value: {
          offsetX: '0',
          offsetY: '8px',
          blur: '32px',
          spread: '0',
          color: 'rgba(0, 0, 0, 0.1)',
        },
        type: 'shadow',
      },
      md: {
        value: {
          offsetX: '0',
          offsetY: '12px',
          blur: '48px',
          spread: '0',
          color: 'rgba(0, 0, 0, 0.12)',
        },
        type: 'shadow',
      },
      lg: {
        value: {
          offsetX: '0',
          offsetY: '16px',
          blur: '64px',
          spread: '0',
          color: 'rgba(0, 0, 0, 0.15)',
        },
        type: 'shadow',
      },
    },
  },
};

/**
 * Minimalism Theme
 * Clean, simple design focusing on essential elements
 */
const minimalismConfig: ThemeConfig = {
  name: 'minimalism',
  description: 'Clean, simple design with abundant whitespace',
  tokens: {
    color: {
      neutral: {
        50: { value: '#FFFFFF', type: 'color' },
        100: { value: '#FAFAFA', type: 'color' },
        900: { value: '#000000', type: 'color' },
      },
    },
    radius: {
      sm: { value: '2px', type: 'dimension' },
      md: { value: '4px', type: 'dimension' },
      lg: { value: '6px', type: 'dimension' },
    },
    shadow: {
      sm: {
        value: {
          offsetX: '0',
          offsetY: '1px',
          blur: '3px',
          spread: '0',
          color: 'rgba(0, 0, 0, 0.04)',
        },
        type: 'shadow',
      },
      md: {
        value: {
          offsetX: '0',
          offsetY: '2px',
          blur: '6px',
          spread: '0',
          color: 'rgba(0, 0, 0, 0.06)',
        },
        type: 'shadow',
      },
    },
  },
};

/**
 * Claymorphism Theme
 * Soft, inflated 3D elements with clay-like appearance
 */
const claymorphismConfig: ThemeConfig = {
  name: 'claymorphism',
  description: 'Soft, inflated design with clay-like 3D elements',
  tokens: {
    radius: {
      md: { value: '24px', type: 'dimension' },
      lg: { value: '30px', type: 'dimension' },
      xl: { value: '40px', type: 'dimension' },
    },
    shadow: {
      sm: {
        value: {
          offsetX: '0',
          offsetY: '8px',
          blur: '20px',
          spread: '0',
          color: 'rgba(0, 0, 0, 0.08)',
        },
        type: 'shadow',
      },
      md: {
        value: {
          offsetX: '0',
          offsetY: '12px',
          blur: '30px',
          spread: '0',
          color: 'rgba(0, 0, 0, 0.1)',
        },
        type: 'shadow',
      },
      lg: {
        value: {
          offsetX: '0',
          offsetY: '16px',
          blur: '40px',
          spread: '0',
          color: 'rgba(0, 0, 0, 0.12)',
        },
        type: 'shadow',
      },
    },
  },
};

/**
 * Neumorphism Theme
 * Soft UI with subtle shadows and highlights
 */
const neumorphismConfig: ThemeConfig = {
  name: 'neumorphism',
  description: 'Soft UI with subtle shadows creating a tactile feel',
  tokens: {
    radius: {
      md: { value: '12px', type: 'dimension' },
      lg: { value: '16px', type: 'dimension' },
      xl: { value: '20px', type: 'dimension' },
    },
    shadow: {
      sm: {
        value: {
          offsetX: '4px',
          offsetY: '4px',
          blur: '8px',
          spread: '0',
          color: 'rgba(0, 0, 0, 0.1)',
        },
        type: 'shadow',
      },
      md: {
        value: {
          offsetX: '6px',
          offsetY: '6px',
          blur: '12px',
          spread: '0',
          color: 'rgba(0, 0, 0, 0.12)',
        },
        type: 'shadow',
      },
    },
  },
};

/**
 * Register all preset themes
 */
export function registerPresetThemes() {
  // Light themes
  const brutalism = createTheme(brutalismConfig);
  const glassmorphism = createTheme(glassmorphismConfig);
  const minimalism = createTheme(minimalismConfig);
  const claymorphism = createTheme(claymorphismConfig);
  const neumorphism = createTheme(neumorphismConfig);

  // Dark variants
  const brutalismDark = createDarkTheme('brutalism');
  const glassmorphismDark = createDarkTheme('glassmorphism');
  const minimalismDark = createDarkTheme('minimalism');
  const claymorphismDark = createDarkTheme('claymorphism');
  const neumorphismDark = createDarkTheme('neumorphism');

  return {
    brutalism,
    glassmorphism,
    minimalism,
    claymorphism,
    neumorphism,
    'brutalism-dark': brutalismDark,
    'glassmorphism-dark': glassmorphismDark,
    'minimalism-dark': minimalismDark,
    'claymorphism-dark': claymorphismDark,
    'neumorphism-dark': neumorphismDark,
  };
}
