/**
 * Design Token Types
 * Following the W3C Design Tokens Community Group specification
 */

export type TokenValue = string | number;

export interface Token<T = TokenValue> {
  value: T;
  type?: string;
  description?: string;
  extensions?: Record<string, any>;
}

export interface ColorToken extends Token<string> {
  type: 'color';
}

export interface DimensionToken extends Token<string> {
  type: 'dimension';
}

export interface FontFamilyToken extends Token<string | string[]> {
  type: 'fontFamily';
}

export interface FontWeightToken extends Token<number | string> {
  type: 'fontWeight';
}

export interface DurationToken extends Token<string> {
  type: 'duration';
}

export interface CubicBezierToken extends Token<[number, number, number, number]> {
  type: 'cubicBezier';
}

export interface ShadowToken extends Token<{
  offsetX: string;
  offsetY: string;
  blur: string;
  spread: string;
  color: string;
}> {
  type: 'shadow';
}

/**
 * Design Token Collections
 */

export interface ColorTokens {
  // Base colors
  neutral: Record<string, ColorToken>;
  primary: Record<string, ColorToken>;
  secondary: Record<string, ColorToken>;
  accent: Record<string, ColorToken>;
  
  // Semantic colors
  success: Record<string, ColorToken>;
  warning: Record<string, ColorToken>;
  error: Record<string, ColorToken>;
  info: Record<string, ColorToken>;
  
  // Surface colors
  background: ColorToken;
  foreground: ColorToken;
  card: ColorToken;
  border: ColorToken;
}

export interface TypographyTokens {
  fontFamily: {
    sans: FontFamilyToken;
    serif: FontFamilyToken;
    mono: FontFamilyToken;
  };
  fontSize: Record<string, DimensionToken>;
  fontWeight: Record<string, FontWeightToken>;
  lineHeight: Record<string, Token<number>>;
  letterSpacing: Record<string, DimensionToken>;
}

export interface SpacingTokens {
  [key: string]: DimensionToken;
}

export interface RadiusTokens {
  none: DimensionToken;
  sm: DimensionToken;
  md: DimensionToken;
  lg: DimensionToken;
  xl: DimensionToken;
  full: DimensionToken;
}

export interface ShadowTokens {
  sm: ShadowToken;
  md: ShadowToken;
  lg: ShadowToken;
  xl: ShadowToken;
}

export interface AnimationTokens {
  duration: Record<string, DurationToken>;
  easing: Record<string, CubicBezierToken>;
}

/**
 * Complete Token System
 */
export interface DesignTokens {
  color: ColorTokens;
  typography: TypographyTokens;
  spacing: SpacingTokens;
  radius: RadiusTokens;
  shadow: ShadowTokens;
  animation: AnimationTokens;
}

/**
 * Theme Configuration
 */
export interface ThemeConfig {
  name: string;
  description?: string;
  tokens: Partial<DesignTokens>;
  extend?: string; // Name of theme to extend
}

/**
 * Resolved Theme
 */
export interface ResolvedTheme {
  name: string;
  description?: string;
  tokens: DesignTokens;
  cssVariables: Record<string, string>;
}

/**
 * Theme Preset Types
 */
export type UIStyle = 
  | 'brutalism'
  | 'glassmorphism'
  | 'minimalism'
  | 'skeuomorphism'
  | 'claymorphism'
  | 'neumorphism';

export type ColorScheme = 
  | 'light'
  | 'dark'
  | 'vibrant'
  | 'pastel'
  | 'nature'
  | 'monochrome'
  | 'professional';

export type TypographyScale = 
  | 'compact'
  | 'comfortable'
  | 'spacious';

export interface ThemePreset {
  uiStyle: UIStyle;
  colorScheme: ColorScheme;
  typography: TypographyScale;
}
