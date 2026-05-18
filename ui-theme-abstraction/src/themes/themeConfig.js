// UI Type Definitions
export const uiTypes = {
  'neo-brutalism': {
    name: 'Neo-Brutalism',
    borderRadius: '0px',
    borderWidth: '3px',
    shadowStyle: '8px 8px 0',
    buttonStyle: 'blocky',
    cardStyle: 'flat',
    navStyle: 'bold',
    spacing: 'loose'
  },
  'glassmorphism': {
    name: 'Glassmorphism',
    borderRadius: '16px',
    borderWidth: '1px',
    shadowStyle: '0 8px 32px rgba(0, 0, 0, 0.1)',
    buttonStyle: 'frosted',
    cardStyle: 'transparent',
    navStyle: 'blur',
    spacing: 'normal',
    blur: '10px',
    transparency: '0.1'
  },
  'minimalism': {
    name: 'Minimalism',
    borderRadius: '2px',
    borderWidth: '1px',
    shadowStyle: '0 2px 8px rgba(0, 0, 0, 0.05)',
    buttonStyle: 'simple',
    cardStyle: 'clean',
    navStyle: 'minimal',
    spacing: 'spacious'
  },
  'skeuomorphism': {
    name: 'Skeuomorphism',
    borderRadius: '8px',
    borderWidth: '1px',
    shadowStyle: '0 4px 12px rgba(0, 0, 0, 0.15)',
    buttonStyle: '3d',
    cardStyle: 'raised',
    navStyle: 'gradient',
    spacing: 'normal'
  },
  'claymorphism': {
    name: 'Claymorphism',
    borderRadius: '30px',
    borderWidth: '0px',
    shadowStyle: '20px 20px 60px, -20px -20px 60px',
    buttonStyle: 'puffy',
    cardStyle: 'inflated',
    navStyle: 'soft',
    spacing: 'normal'
  },
  'liquid-glass': {
    name: 'Liquid Glass',
    borderRadius: '20px',
    borderWidth: '1px',
    shadowStyle: '0 8px 32px rgba(0, 0, 0, 0.2)',
    buttonStyle: 'fluid',
    cardStyle: 'flowing',
    navStyle: 'organic',
    spacing: 'normal',
    blur: '12px',
    transparency: '0.08'
  }
};

// Font Scheme Definitions
export const fontSchemes = {
  'bold': {
    name: 'Bold & Impactful',
    primaryFont: "'Space Grotesk', 'Arial Black', sans-serif",
    secondaryFont: "'Inter', sans-serif",
    baseFontSize: '16px',
    h1Size: '4rem',
    h2Size: '3rem',
    h3Size: '2rem',
    bodyWeight: 400,
    headingWeight: 700,
    boldWeight: 900,
    lineHeight: 1.6,
    letterSpacing: '0.5px'
  },
  'elegant': {
    name: 'Elegant & Refined',
    primaryFont: "'Playfair Display', serif",
    secondaryFont: "'Lato', sans-serif",
    baseFontSize: '16px',
    h1Size: '3.5rem',
    h2Size: '2.75rem',
    h3Size: '2rem',
    bodyWeight: 300,
    headingWeight: 600,
    boldWeight: 700,
    lineHeight: 1.8,
    letterSpacing: '0.3px'
  },
  'modern': {
    name: 'Modern & Clean',
    primaryFont: "'Inter', 'Segoe UI', sans-serif",
    secondaryFont: "'Inter', sans-serif",
    baseFontSize: '16px',
    h1Size: '3.5rem',
    h2Size: '2.5rem',
    h3Size: '1.75rem',
    bodyWeight: 400,
    headingWeight: 600,
    boldWeight: 700,
    lineHeight: 1.6,
    letterSpacing: '0px'
  },
  'playful': {
    name: 'Playful & Fun',
    primaryFont: "'Poppins', sans-serif",
    secondaryFont: "'Poppins', sans-serif",
    baseFontSize: '16px',
    h1Size: '3.5rem',
    h2Size: '2.5rem',
    h3Size: '1.75rem',
    bodyWeight: 400,
    headingWeight: 600,
    boldWeight: 700,
    lineHeight: 1.7,
    letterSpacing: '0.2px'
  },
  'technical': {
    name: 'Technical & Precise',
    primaryFont: "'Roboto Mono', 'Courier New', monospace",
    secondaryFont: "'Roboto', sans-serif",
    baseFontSize: '15px',
    h1Size: '3rem',
    h2Size: '2.25rem',
    h3Size: '1.5rem',
    bodyWeight: 400,
    headingWeight: 500,
    boldWeight: 700,
    lineHeight: 1.7,
    letterSpacing: '0.5px'
  }
};

// Color Scheme Definitions
export const colorSchemes = {
  'vibrant': {
    name: 'Vibrant & Bold',
    primary: '#FF6B6B',
    secondary: '#4ECDC4',
    accent: '#FFE66D',
    background: '#FFFFFF',
    surface: '#F7F7F7',
    text: '#000000',
    textSecondary: '#333333',
    border: '#000000',
    success: '#51CF66',
    warning: '#FFD93D',
    error: '#FF6B6B'
  },
  'professional': {
    name: 'Professional & Corporate',
    primary: '#2B6CB0',
    secondary: '#4A5568',
    accent: '#3182CE',
    background: '#FFFFFF',
    surface: '#F7FAFC',
    text: '#1A202C',
    textSecondary: '#4A5568',
    border: '#E2E8F0',
    success: '#38A169',
    warning: '#DD6B20',
    error: '#E53E3E'
  },
  'pastel': {
    name: 'Soft & Pastel',
    primary: '#A78BFA',
    secondary: '#F472B6',
    accent: '#60A5FA',
    background: '#FEFCE8',
    surface: '#FFF7ED',
    text: '#374151',
    textSecondary: '#6B7280',
    border: '#E5E7EB',
    success: '#86EFAC',
    warning: '#FCD34D',
    error: '#FCA5A5'
  },
  'dark': {
    name: 'Dark & Mysterious',
    primary: '#818CF8',
    secondary: '#A78BFA',
    accent: '#F472B6',
    background: '#111827',
    surface: '#1F2937',
    text: '#F9FAFB',
    textSecondary: '#D1D5DB',
    border: '#374151',
    success: '#34D399',
    warning: '#FBBF24',
    error: '#F87171'
  },
  'nature': {
    name: 'Natural & Earthy',
    primary: '#059669',
    secondary: '#0891B2',
    accent: '#D97706',
    background: '#FFFFFF',
    surface: '#F0FDF4',
    text: '#064E3B',
    textSecondary: '#047857',
    border: '#6EE7B7',
    success: '#10B981',
    warning: '#F59E0B',
    error: '#DC2626'
  },
  'monochrome': {
    name: 'Monochrome & Classic',
    primary: '#000000',
    secondary: '#404040',
    accent: '#666666',
    background: '#FFFFFF',
    surface: '#F5F5F5',
    text: '#000000',
    textSecondary: '#666666',
    border: '#CCCCCC',
    success: '#404040',
    warning: '#808080',
    error: '#000000'
  }
};

// Combine all themes into one object
export const buildTheme = (uiType, fontScheme, colorScheme) => {
  const ui = uiTypes[uiType] || uiTypes['neo-brutalism'];
  const fonts = fontSchemes[fontScheme] || fontSchemes['bold'];
  const colors = colorSchemes[colorScheme] || colorSchemes['vibrant'];

  return {
    name: `${ui.name} + ${fonts.name} + ${colors.name}`,
    uiType: ui,
    fonts: fonts,
    colors: colors,
    // Combined for easy access
    borderRadius: ui.borderRadius,
    borderWidth: ui.borderWidth,
    shadowStyle: ui.shadowStyle,
    blur: ui.blur,
    transparency: ui.transparency,
    spacing: ui.spacing
  };
};

export const getAvailableOptions = () => {
  return {
    uiTypes: Object.keys(uiTypes),
    fontSchemes: Object.keys(fontSchemes),
    colorSchemes: Object.keys(colorSchemes)
  };
};
