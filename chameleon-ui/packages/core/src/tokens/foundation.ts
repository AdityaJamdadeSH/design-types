import type { TypographyTokens, SpacingTokens, RadiusTokens, ShadowTokens, AnimationTokens } from '../types/tokens';

/**
 * Typography Tokens
 */
export const typography: TypographyTokens = {
  fontFamily: {
    sans: {
      value: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      type: 'fontFamily',
    },
    serif: {
      value: ['Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
      type: 'fontFamily',
    },
    mono: {
      value: ['Fira Code', 'Consolas', 'Monaco', 'Courier New', 'monospace'],
      type: 'fontFamily',
    },
  },
  fontSize: {
    xs: { value: '0.75rem', type: 'dimension' },
    sm: { value: '0.875rem', type: 'dimension' },
    base: { value: '1rem', type: 'dimension' },
    lg: { value: '1.125rem', type: 'dimension' },
    xl: { value: '1.25rem', type: 'dimension' },
    '2xl': { value: '1.5rem', type: 'dimension' },
    '3xl': { value: '1.875rem', type: 'dimension' },
    '4xl': { value: '2.25rem', type: 'dimension' },
    '5xl': { value: '3rem', type: 'dimension' },
    '6xl': { value: '3.75rem', type: 'dimension' },
    '7xl': { value: '4.5rem', type: 'dimension' },
    '8xl': { value: '6rem', type: 'dimension' },
    '9xl': { value: '8rem', type: 'dimension' },
  },
  fontWeight: {
    thin: { value: 100, type: 'fontWeight' },
    extralight: { value: 200, type: 'fontWeight' },
    light: { value: 300, type: 'fontWeight' },
    normal: { value: 400, type: 'fontWeight' },
    medium: { value: 500, type: 'fontWeight' },
    semibold: { value: 600, type: 'fontWeight' },
    bold: { value: 700, type: 'fontWeight' },
    extrabold: { value: 800, type: 'fontWeight' },
    black: { value: 900, type: 'fontWeight' },
  },
  lineHeight: {
    none: { value: 1 },
    tight: { value: 1.25 },
    snug: { value: 1.375 },
    normal: { value: 1.5 },
    relaxed: { value: 1.625 },
    loose: { value: 2 },
  },
  letterSpacing: {
    tighter: { value: '-0.05em', type: 'dimension' },
    tight: { value: '-0.025em', type: 'dimension' },
    normal: { value: '0em', type: 'dimension' },
    wide: { value: '0.025em', type: 'dimension' },
    wider: { value: '0.05em', type: 'dimension' },
    widest: { value: '0.1em', type: 'dimension' },
  },
};

/**
 * Spacing Tokens (8-point grid system)
 */
export const spacing: SpacingTokens = {
  0: { value: '0', type: 'dimension' },
  0.5: { value: '0.125rem', type: 'dimension' }, // 2px
  1: { value: '0.25rem', type: 'dimension' },    // 4px
  1.5: { value: '0.375rem', type: 'dimension' }, // 6px
  2: { value: '0.5rem', type: 'dimension' },     // 8px
  2.5: { value: '0.625rem', type: 'dimension' }, // 10px
  3: { value: '0.75rem', type: 'dimension' },    // 12px
  3.5: { value: '0.875rem', type: 'dimension' }, // 14px
  4: { value: '1rem', type: 'dimension' },       // 16px
  5: { value: '1.25rem', type: 'dimension' },    // 20px
  6: { value: '1.5rem', type: 'dimension' },     // 24px
  7: { value: '1.75rem', type: 'dimension' },    // 28px
  8: { value: '2rem', type: 'dimension' },       // 32px
  9: { value: '2.25rem', type: 'dimension' },    // 36px
  10: { value: '2.5rem', type: 'dimension' },    // 40px
  11: { value: '2.75rem', type: 'dimension' },   // 44px
  12: { value: '3rem', type: 'dimension' },      // 48px
  14: { value: '3.5rem', type: 'dimension' },    // 56px
  16: { value: '4rem', type: 'dimension' },      // 64px
  20: { value: '5rem', type: 'dimension' },      // 80px
  24: { value: '6rem', type: 'dimension' },      // 96px
  28: { value: '7rem', type: 'dimension' },      // 112px
  32: { value: '8rem', type: 'dimension' },      // 128px
  36: { value: '9rem', type: 'dimension' },      // 144px
  40: { value: '10rem', type: 'dimension' },     // 160px
  44: { value: '11rem', type: 'dimension' },     // 176px
  48: { value: '12rem', type: 'dimension' },     // 192px
  52: { value: '13rem', type: 'dimension' },     // 208px
  56: { value: '14rem', type: 'dimension' },     // 224px
  60: { value: '15rem', type: 'dimension' },     // 240px
  64: { value: '16rem', type: 'dimension' },     // 256px
  72: { value: '18rem', type: 'dimension' },     // 288px
  80: { value: '20rem', type: 'dimension' },     // 320px
  96: { value: '24rem', type: 'dimension' },     // 384px
};

/**
 * Border Radius Tokens
 */
export const radius: RadiusTokens = {
  none: { value: '0', type: 'dimension' },
  sm: { value: '0.125rem', type: 'dimension' },   // 2px
  md: { value: '0.375rem', type: 'dimension' },   // 6px
  lg: { value: '0.5rem', type: 'dimension' },     // 8px
  xl: { value: '0.75rem', type: 'dimension' },    // 12px
  full: { value: '9999px', type: 'dimension' },
};

/**
 * Shadow Tokens
 */
export const shadow: ShadowTokens = {
  sm: {
    value: {
      offsetX: '0',
      offsetY: '1px',
      blur: '2px',
      spread: '0',
      color: 'rgba(0, 0, 0, 0.05)',
    },
    type: 'shadow',
  },
  md: {
    value: {
      offsetX: '0',
      offsetY: '4px',
      blur: '6px',
      spread: '-1px',
      color: 'rgba(0, 0, 0, 0.1)',
    },
    type: 'shadow',
  },
  lg: {
    value: {
      offsetX: '0',
      offsetY: '10px',
      blur: '15px',
      spread: '-3px',
      color: 'rgba(0, 0, 0, 0.1)',
    },
    type: 'shadow',
  },
  xl: {
    value: {
      offsetX: '0',
      offsetY: '20px',
      blur: '25px',
      spread: '-5px',
      color: 'rgba(0, 0, 0, 0.1)',
    },
    type: 'shadow',
  },
};

/**
 * Animation Tokens
 */
export const animation: AnimationTokens = {
  duration: {
    instant: { value: '0ms', type: 'duration' },
    fast: { value: '150ms', type: 'duration' },
    normal: { value: '300ms', type: 'duration' },
    slow: { value: '500ms', type: 'duration' },
    slower: { value: '1000ms', type: 'duration' },
  },
  easing: {
    linear: { value: [0, 0, 1, 1], type: 'cubicBezier' },
    easeIn: { value: [0.4, 0, 1, 1], type: 'cubicBezier' },
    easeOut: { value: [0, 0, 0.2, 1], type: 'cubicBezier' },
    easeInOut: { value: [0.4, 0, 0.2, 1], type: 'cubicBezier' },
    spring: { value: [0.68, -0.55, 0.265, 1.55], type: 'cubicBezier' },
  },
};
