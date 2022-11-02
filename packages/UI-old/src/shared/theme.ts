const theme = {
  breakpoints: {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
  },
  colors: {
    NEUTRAL_1: '#1c1c1c', // dark
    ACCENT_1: '#ff7f0e', // orange
    ACCENT_2: '#ffab00', // yellow
    ACCENT_3: '#3a7ca5', // dark-blue
    ACCENT_4: '#81c3d7', // loght-blue
    ACCENT_5: '#ffc30f', // orange-yellow
    ACCENT_6: '#C5B1A0', // beige
    NEUTRAL_2: '#f0edee', // light
  },
  fonts: {
    headline: 'Abel',
    normal: 'Nunito Sans',
  },
  fontSizes: {
    small: '1em',
    medium: '2em',
    large: '3em',
  },
} as const;

export type ThemeType = typeof theme;
export default theme;
