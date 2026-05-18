import type { ColorTokens } from '../types/tokens';

/**
 * Base Color Scales
 * Following Tailwind's approach with semantic naming
 */

const neutral = {
  50: { value: '#FAFAFA', type: 'color' as const },
  100: { value: '#F5F5F5', type: 'color' as const },
  200: { value: '#E5E5E5', type: 'color' as const },
  300: { value: '#D4D4D4', type: 'color' as const },
  400: { value: '#A3A3A3', type: 'color' as const },
  500: { value: '#737373', type: 'color' as const },
  600: { value: '#525252', type: 'color' as const },
  700: { value: '#404040', type: 'color' as const },
  800: { value: '#262626', type: 'color' as const },
  900: { value: '#171717', type: 'color' as const },
  950: { value: '#0A0A0A', type: 'color' as const },
};

const blue = {
  50: { value: '#EFF6FF', type: 'color' as const },
  100: { value: '#DBEAFE', type: 'color' as const },
  200: { value: '#BFDBFE', type: 'color' as const },
  300: { value: '#93C5FD', type: 'color' as const },
  400: { value: '#60A5FA', type: 'color' as const },
  500: { value: '#3B82F6', type: 'color' as const },
  600: { value: '#2563EB', type: 'color' as const },
  700: { value: '#1D4ED8', type: 'color' as const },
  800: { value: '#1E40AF', type: 'color' as const },
  900: { value: '#1E3A8A', type: 'color' as const },
  950: { value: '#172554', type: 'color' as const },
};

const purple = {
  50: { value: '#FAF5FF', type: 'color' as const },
  100: { value: '#F3E8FF', type: 'color' as const },
  200: { value: '#E9D5FF', type: 'color' as const },
  300: { value: '#D8B4FE', type: 'color' as const },
  400: { value: '#C084FC', type: 'color' as const },
  500: { value: '#A855F7', type: 'color' as const },
  600: { value: '#9333EA', type: 'color' as const },
  700: { value: '#7E22CE', type: 'color' as const },
  800: { value: '#6B21A8', type: 'color' as const },
  900: { value: '#581C87', type: 'color' as const },
  950: { value: '#3B0764', type: 'color' as const },
};

const green = {
  50: { value: '#F0FDF4', type: 'color' as const },
  100: { value: '#DCFCE7', type: 'color' as const },
  200: { value: '#BBF7D0', type: 'color' as const },
  300: { value: '#86EFAC', type: 'color' as const },
  400: { value: '#4ADE80', type: 'color' as const },
  500: { value: '#22C55E', type: 'color' as const },
  600: { value: '#16A34A', type: 'color' as const },
  700: { value: '#15803D', type: 'color' as const },
  800: { value: '#166534', type: 'color' as const },
  900: { value: '#14532D', type: 'color' as const },
  950: { value: '#052E16', type: 'color' as const },
};

const red = {
  50: { value: '#FEF2F2', type: 'color' as const },
  100: { value: '#FEE2E2', type: 'color' as const },
  200: { value: '#FECACA', type: 'color' as const },
  300: { value: '#FCA5A5', type: 'color' as const },
  400: { value: '#F87171', type: 'color' as const },
  500: { value: '#EF4444', type: 'color' as const },
  600: { value: '#DC2626', type: 'color' as const },
  700: { value: '#B91C1C', type: 'color' as const },
  800: { value: '#991B1B', type: 'color' as const },
  900: { value: '#7F1D1D', type: 'color' as const },
  950: { value: '#450A0A', type: 'color' as const },
};

const yellow = {
  50: { value: '#FEFCE8', type: 'color' as const },
  100: { value: '#FEF9C3', type: 'color' as const },
  200: { value: '#FEF08A', type: 'color' as const },
  300: { value: '#FDE047', type: 'color' as const },
  400: { value: '#FACC15', type: 'color' as const },
  500: { value: '#EAB308', type: 'color' as const },
  600: { value: '#CA8A04', type: 'color' as const },
  700: { value: '#A16207', type: 'color' as const },
  800: { value: '#854D0E', type: 'color' as const },
  900: { value: '#713F12', type: 'color' as const },
  950: { value: '#422006', type: 'color' as const },
};

/**
 * Base Light Theme Colors
 */
export const baseLightColors: ColorTokens = {
  neutral,
  primary: blue,
  secondary: purple,
  accent: blue,
  
  success: green,
  warning: yellow,
  error: red,
  info: blue,
  
  background: { value: '#FFFFFF', type: 'color' },
  foreground: { value: '#0A0A0A', type: 'color' },
  card: { value: '#FAFAFA', type: 'color' },
  border: { value: '#E5E5E5', type: 'color' },
};

/**
 * Base Dark Theme Colors
 */
export const baseDarkColors: ColorTokens = {
  neutral,
  primary: blue,
  secondary: purple,
  accent: blue,
  
  success: green,
  warning: yellow,
  error: red,
  info: blue,
  
  background: { value: '#0A0A0A', type: 'color' },
  foreground: { value: '#FAFAFA', type: 'color' },
  card: { value: '#171717', type: 'color' },
  border: { value: '#262626', type: 'color' },
};
