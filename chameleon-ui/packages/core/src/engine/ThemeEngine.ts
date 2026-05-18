import merge from 'lodash.merge';
import type { DesignTokens, ThemeConfig, ResolvedTheme, ShadowToken } from '../types/tokens';
import { baseLightColors, baseDarkColors } from '../tokens/colors';
import { typography, spacing, radius, shadow, animation } from '../tokens/foundation';

/**
 * Base theme with all default tokens
 */
const baseTokens: DesignTokens = {
  color: baseLightColors,
  typography,
  spacing,
  radius,
  shadow,
  animation,
};

/**
 * Convert shadow token to CSS value
 */
function shadowToCss(shadowToken: ShadowToken): string {
  const { offsetX, offsetY, blur, spread, color } = shadowToken.value;
  return `${offsetX} ${offsetY} ${blur} ${spread} ${color}`;
}

/**
 * Convert design tokens to CSS variables
 */
function tokensToCssVariables(tokens: DesignTokens): Record<string, string> {
  const variables: Record<string, string> = {};

  // Colors
  Object.entries(tokens.color).forEach(([category, colors]) => {
    if (typeof colors === 'object' && 'value' in colors) {
      // Single color token
      variables[`--color-${category}`] = colors.value;
    } else {
      // Color scale
      Object.entries(colors).forEach(([shade, token]) => {
        variables[`--color-${category}-${shade}`] = token.value;
      });
    }
  });

  // Typography - Font Families
  Object.entries(tokens.typography.fontFamily).forEach(([name, token]) => {
    const value = Array.isArray(token.value) ? token.value.join(', ') : token.value;
    variables[`--font-${name}`] = value;
  });

  // Typography - Font Sizes
  Object.entries(tokens.typography.fontSize).forEach(([size, token]) => {
    variables[`--text-${size}`] = token.value;
  });

  // Typography - Font Weights
  Object.entries(tokens.typography.fontWeight).forEach(([weight, token]) => {
    variables[`--font-${weight}`] = String(token.value);
  });

  // Typography - Line Heights
  Object.entries(tokens.typography.lineHeight).forEach(([name, token]) => {
    variables[`--leading-${name}`] = String(token.value);
  });

  // Typography - Letter Spacing
  Object.entries(tokens.typography.letterSpacing).forEach(([name, token]) => {
    variables[`--tracking-${name}`] = token.value;
  });

  // Spacing
  Object.entries(tokens.spacing).forEach(([size, token]) => {
    variables[`--space-${size}`] = token.value;
  });

  // Radius
  Object.entries(tokens.radius).forEach(([size, token]) => {
    variables[`--radius-${size}`] = token.value;
  });

  // Shadows
  Object.entries(tokens.shadow).forEach(([size, token]) => {
    variables[`--shadow-${size}`] = shadowToCss(token);
  });

  // Animation - Duration
  Object.entries(tokens.animation.duration).forEach(([name, token]) => {
    variables[`--duration-${name}`] = token.value;
  });

  // Animation - Easing
  Object.entries(tokens.animation.easing).forEach(([name, token]) => {
    variables[`--ease-${name}`] = `cubic-bezier(${token.value.join(', ')})`;
  });

  return variables;
}

/**
 * Theme Engine
 */
export class ThemeEngine {
  private themes: Map<string, ResolvedTheme> = new Map();

  /**
   * Register a new theme
   */
  register(config: ThemeConfig): ResolvedTheme {
    let tokens: DesignTokens;

    if (config.extend) {
      // Extend existing theme
      const baseTheme = this.get(config.extend);
      if (!baseTheme) {
        throw new Error(`Cannot extend theme "${config.extend}" - theme not found`);
      }
      tokens = merge({}, baseTheme.tokens, config.tokens) as DesignTokens;
    } else {
      // Merge with base tokens
      tokens = merge({}, baseTokens, config.tokens) as DesignTokens;
    }

    const resolved: ResolvedTheme = {
      name: config.name,
      description: config.description,
      tokens,
      cssVariables: tokensToCssVariables(tokens),
    };

    this.themes.set(config.name, resolved);
    return resolved;
  }

  /**
   * Get a registered theme
   */
  get(name: string): ResolvedTheme | undefined {
    return this.themes.get(name);
  }

  /**
   * Get all registered themes
   */
  getAll(): ResolvedTheme[] {
    return Array.from(this.themes.values());
  }

  /**
   * Generate CSS from theme
   */
  generateCss(themeName: string, selector: string = ':root'): string {
    const theme = this.get(themeName);
    if (!theme) {
      throw new Error(`Theme "${themeName}" not found`);
    }

    const cssVars = Object.entries(theme.cssVariables)
      .map(([key, value]) => `  ${key}: ${value};`)
      .join('\n');

    return `${selector} {\n${cssVars}\n}`;
  }

  /**
   * Apply theme to document
   */
  apply(themeName: string, element: HTMLElement = document.documentElement): void {
    const theme = this.get(themeName);
    if (!theme) {
      throw new Error(`Theme "${themeName}" not found`);
    }

    Object.entries(theme.cssVariables).forEach(([key, value]) => {
      element.style.setProperty(key, value);
    });
  }

  /**
   * Create a theme variant (like dark mode)
   */
  createVariant(baseName: string, variantName: string, overrides: Partial<DesignTokens>): ResolvedTheme {
    return this.register({
      name: variantName,
      tokens: overrides,
      extend: baseName,
    });
  }

  /**
   * Export theme as JSON
   */
  export(themeName: string): string {
    const theme = this.get(themeName);
    if (!theme) {
      throw new Error(`Theme "${themeName}" not found`);
    }
    return JSON.stringify(theme, null, 2);
  }
}

/**
 * Create a global theme engine instance
 */
export const themeEngine = new ThemeEngine();

/**
 * Helper to create a theme quickly
 */
export function createTheme(config: ThemeConfig): ResolvedTheme {
  return themeEngine.register(config);
}

/**
 * Helper to create a dark variant of a theme
 */
export function createDarkTheme(baseName: string): ResolvedTheme {
  return themeEngine.createVariant(baseName, `${baseName}-dark`, {
    color: baseDarkColors,
  });
}
