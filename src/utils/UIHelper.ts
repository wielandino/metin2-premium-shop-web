export interface ElementPalette {
  /** Main brand colour (e.g. #E74C3C) */
  primary: string;
  /** Darker shade for borders / strong accents (e.g. #C0392B) */
  dark: string;
  /** Lighter / semi-transparent variant (e.g. #e74c3c44) */
  light: string;
  /** Background tint (e.g. #b4320a38) */
  background: string;
}

/**
 * Complete theme for an element, combining a colour palette
 * with an icon identifier.
 */
export interface ElementTheme {
  palette: ElementPalette;
  icon: string;
}

/**
 * Append an alpha channel to a hex colour.
 * @example hexAlpha('#E74C3C', '44') → '#E74C3C44'
 */
export function hexAlpha(hex: string, alpha: string): string {
  return hex + alpha;
}

/**
 * Build a CSS gradient string from a single hex colour.
 * Both stops use the same colour; only opacity differs.
 * @example gradient('#C0392B', 'cc', '88')
 *   → 'rgba(192,57,43,0.800),rgba(192,57,43,0.533)'
 */
export function gradient(
  hex: string,
  opacity1 = 'cc',
  opacity2 = '88',
): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const a1 = (parseInt(opacity1, 16) / 255).toFixed(3);
  const a2 = (parseInt(opacity2, 16) / 255).toFixed(3);
  return `rgba(${r},${g},${b},${a1}),rgba(${r},${g},${b},${a2})`;
}

/**
 * Build a box-shadow colour value (hex + alpha suffix).
 * @example boxShadowColor('#C0392B') → '#c0392b59'
 */
export function boxShadowColor(hex: string, opacity = '59'): string {
  return hex.toLowerCase() + opacity;
}


export const elementThemes: Record<string, ElementTheme> = {
  fire: {
    palette: {
      primary: '#E74C3C',
      dark: '#C0392B',
      light: '#e74c3c44',
      background: '#b4320a38',
    },
    icon: 'fire',
  },
  lightning: {
    palette: {
      primary: '#F1C40F',
      dark: '#d4ac0d',
      light: '#f1c40f44',
      background: '#82640038',
    },
    icon: 'bolt',
  },
  ice: {
    palette: {
      primary: '#3498DB',
      dark: '#2980B9',
      light: '#3498db44',
      background: '#14509638',
    },
    icon: 'snowflake',
  },
};

export interface ArmoryTheme {
  color: string;
  icon: string;
}

export const armoryThemes: Record<string, ArmoryTheme> = {
  chest: {
    color: '#8E44AD',
    icon: 'shield',
  },
  weapon: {
    color: '#E67E22',
    icon: 'hand-fist',
  },
};