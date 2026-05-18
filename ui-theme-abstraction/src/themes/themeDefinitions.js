export const themeDefinitions = {
  'neo-brutalism': {
    name: 'Neo-Brutalism',
    description: 'Bold, unapologetic design with thick borders and vibrant colors',
    colors: {
      primary: '#FF6B6B',
      secondary: '#4ECDC4',
      accent: '#FFE66D',
      background: '#FFFFFF',
      surface: '#F7F7F7',
      text: '#000000',
      textSecondary: '#333333',
      border: '#000000',
      shadow: '#000000'
    },
    spacing: {
      xs: '4px',
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '32px',
      xxl: '48px'
    },
    typography: {
      fontFamily: "'Space Grotesk', 'Arial Black', sans-serif",
      fontSizeBase: '16px',
      fontSizeSmall: '14px',
      fontSizeLarge: '20px',
      fontSizeH1: '48px',
      fontSizeH2: '36px',
      fontSizeH3: '28px',
      fontWeightNormal: 400,
      fontWeightBold: 700,
      fontWeightExtraBold: 900,
      lineHeight: 1.6
    },
    effects: {
      borderRadius: '0px',
      borderWidth: '3px',
      shadowSize: '8px',
      shadowOffset: '8px',
      blur: '0px',
      transition: '0.2s ease-in-out'
    }
  },
  
  'glassmorphism': {
    name: 'Glassmorphism',
    description: 'Modern, elegant design with frosted glass effects',
    colors: {
      primary: '#667eea',
      secondary: '#764ba2',
      accent: '#f093fb',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      surface: 'rgba(255, 255, 255, 0.1)',
      text: '#ffffff',
      textSecondary: 'rgba(255, 255, 255, 0.8)',
      border: 'rgba(255, 255, 255, 0.18)',
      shadow: 'rgba(0, 0, 0, 0.1)'
    },
    spacing: {
      xs: '4px',
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '32px',
      xxl: '48px'
    },
    typography: {
      fontFamily: "'Inter', 'Segoe UI', sans-serif",
      fontSizeBase: '16px',
      fontSizeSmall: '14px',
      fontSizeLarge: '18px',
      fontSizeH1: '42px',
      fontSizeH2: '32px',
      fontSizeH3: '24px',
      fontWeightNormal: 400,
      fontWeightBold: 600,
      fontWeightExtraBold: 700,
      lineHeight: 1.6
    },
    effects: {
      borderRadius: '16px',
      borderWidth: '1px',
      shadowSize: '0 8px 32px',
      shadowOffset: '0',
      blur: '10px',
      transition: '0.3s cubic-bezier(0.4, 0, 0.2, 1)'
    }
  },

  'minimalism': {
    name: 'Minimalism',
    description: 'Clean, simple design focusing on essential elements',
    colors: {
      primary: '#000000',
      secondary: '#666666',
      accent: '#999999',
      background: '#FFFFFF',
      surface: '#FAFAFA',
      text: '#000000',
      textSecondary: '#666666',
      border: '#E5E5E5',
      shadow: 'rgba(0, 0, 0, 0.05)'
    },
    spacing: {
      xs: '4px',
      sm: '8px',
      md: '20px',
      lg: '32px',
      xl: '48px',
      xxl: '64px'
    },
    typography: {
      fontFamily: "'Helvetica Neue', 'Arial', sans-serif",
      fontSizeBase: '16px',
      fontSizeSmall: '14px',
      fontSizeLarge: '18px',
      fontSizeH1: '40px',
      fontSizeH2: '32px',
      fontSizeH3: '24px',
      fontWeightNormal: 300,
      fontWeightBold: 400,
      fontWeightExtraBold: 600,
      lineHeight: 1.8
    },
    effects: {
      borderRadius: '2px',
      borderWidth: '1px',
      shadowSize: '0 2px 8px',
      shadowOffset: '0',
      blur: '0px',
      transition: '0.2s ease'
    }
  },

  'skeuomorphism': {
    name: 'Skeuomorphism',
    description: 'Realistic design mimicking physical objects and textures',
    colors: {
      primary: '#3498db',
      secondary: '#2c3e50',
      accent: '#e74c3c',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      surface: '#ecf0f1',
      text: '#2c3e50',
      textSecondary: '#7f8c8d',
      border: '#bdc3c7',
      shadow: 'rgba(0, 0, 0, 0.3)'
    },
    spacing: {
      xs: '4px',
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '32px',
      xxl: '48px'
    },
    typography: {
      fontFamily: "'Roboto', 'Helvetica', sans-serif",
      fontSizeBase: '16px',
      fontSizeSmall: '14px',
      fontSizeLarge: '18px',
      fontSizeH1: '44px',
      fontSizeH2: '34px',
      fontSizeH3: '26px',
      fontWeightNormal: 400,
      fontWeightBold: 600,
      fontWeightExtraBold: 700,
      lineHeight: 1.6
    },
    effects: {
      borderRadius: '8px',
      borderWidth: '1px',
      shadowSize: '0 4px 12px',
      shadowOffset: '0 2px 4px',
      blur: '0px',
      transition: '0.3s ease'
    }
  },

  'claymorphism': {
    name: 'Claymorphism',
    description: 'Soft, clay-like design with inflated 3D elements',
    colors: {
      primary: '#FF6B6B',
      secondary: '#4ECDC4',
      accent: '#FFE66D',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      surface: '#F7F9FC',
      text: '#2D3748',
      textSecondary: '#718096',
      border: 'transparent',
      shadow: 'rgba(0, 0, 0, 0.1)'
    },
    spacing: {
      xs: '4px',
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '32px',
      xxl: '48px'
    },
    typography: {
      fontFamily: "'Poppins', 'Segoe UI', sans-serif",
      fontSizeBase: '16px',
      fontSizeSmall: '14px',
      fontSizeLarge: '18px',
      fontSizeH1: '44px',
      fontSizeH2: '34px',
      fontSizeH3: '26px',
      fontWeightNormal: 400,
      fontWeightBold: 600,
      fontWeightExtraBold: 700,
      lineHeight: 1.6
    },
    effects: {
      borderRadius: '30px',
      borderWidth: '0px',
      shadowSize: '20px 20px 60px',
      shadowOffset: '-20px -20px 60px',
      blur: '0px',
      transition: '0.3s ease-out'
    }
  },

  'liquid-glass': {
    name: 'Liquid Glass',
    description: 'Fluid, organic design with liquid-like animations',
    colors: {
      primary: '#667eea',
      secondary: '#764ba2',
      accent: '#f093fb',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      surface: 'rgba(255, 255, 255, 0.08)',
      text: '#ffffff',
      textSecondary: 'rgba(255, 255, 255, 0.7)',
      border: 'rgba(255, 255, 255, 0.1)',
      shadow: 'rgba(0, 0, 0, 0.2)'
    },
    spacing: {
      xs: '4px',
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '32px',
      xxl: '48px'
    },
    typography: {
      fontFamily: "'Inter', 'Segoe UI', sans-serif",
      fontSizeBase: '16px',
      fontSizeSmall: '14px',
      fontSizeLarge: '18px',
      fontSizeH1: '48px',
      fontSizeH2: '36px',
      fontSizeH3: '28px',
      fontWeightNormal: 400,
      fontWeightBold: 600,
      fontWeightExtraBold: 700,
      lineHeight: 1.6
    },
    effects: {
      borderRadius: '20px',
      borderWidth: '1px',
      shadowSize: '0 8px 32px',
      shadowOffset: '0',
      blur: '12px',
      transition: '0.4s cubic-bezier(0.4, 0, 0.2, 1)'
    }
  }
};

export const getTheme = (themeName) => {
  return themeDefinitions[themeName] || themeDefinitions['neo-brutalism'];
};

export const getAllThemes = () => {
  return Object.keys(themeDefinitions);
};
