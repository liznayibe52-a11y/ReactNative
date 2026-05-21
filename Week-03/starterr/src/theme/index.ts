// ============================================
// THEME — Semana 03
// Constantes de estilo globales.
// Úsalas en todos los StyleSheet del proyecto.
// ============================================

export const COLORS = {
  // Fondos
  background: '#0a0f1a',
  surface: '#101828',
  surfaceAlt: '#1a2540',

  // Bordes
  border: '#2a3f6a',
  borderLight: '#1a2540',

  // Texto
  textPrimary: '#e8f0ff',
  textSecondary: '#7a9acc',
  textMuted: '#4a6a9a',

  // Acento — puedes cambiar este color según tu dominio
  // Ejemplos: '#3fb950' (verde), '#f0883e' (naranja), '#a5d6ff' (azul claro)
  accent: '#4A90E2',
  accentDim: '#4A90E233',

  // Semánticos
  success: '#48BB78',
  warning: '#F6AD55',
  error: '#FC8181',
  info: '#63B3ED',
} as const;

export const TYPOGRAPHY = {
  // Tamaños de fuente
  size: {
    xs: 11,
    sm: 13,
    base: 15,
    md: 17,
    lg: 20,
    xl: 24,
    xxl: 30,
  },

  // Pesos
  weight: {
    regular: '400' as const,
    medium: '500' as const,
    semibold: '600' as const,
    bold: '700' as const,
  },
} as const;

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 12,
  base: 16,
  lg: 20,
  xl: 24,
  xxl: 32,
} as const;

export const RADIUS = {
  sm: 6,
  md: 8,
  lg: 12,
  full: 9999,
} as const;
