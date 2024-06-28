import { Theme } from './theme.d';

const theme: Theme = {
  colors: {
    primary: '#4285f4',  // Google's blue
    secondary: '#34a853',  // Google's green
    background: '#ffffff',  // Pure white for a clean background
    surface: '#f1f3f4',  // Light grey for surfaces
    danger: '#ea4335',  // Google's red for error states
    warning: '#fbbc05',  // Google's yellow for warnings
    info: '#1e8e3e',  // Subtle green for informational messages
    success: '#34a853',  // Google's green for success states
    textPrimary: '#202124',  // Almost black for primary text
    textSecondary: '#5f6368',  // Dark grey for secondary text
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: {
      small: '0.875rem',
      medium: '1rem',
      large: '1.25rem',
    },
    fontWeight: {
      light: 300,
      regular: 400,
      bold: 700,
      bolder: 900
    },
    lineHeight: {
      normal: '1.5',
      dense: '1.25',
      loose: '1.75',
    },
  },
  spacing: (factor: number) => `${0.25 * factor}rem`,
  breakpoints: {
    mobile: '600px',
    tablet: '768px',
    desktop: '1024px',
  },
  sizing: {
    small: '2rem',
    medium: '4rem',
    large: '8rem',
  },
  borders: {
    radius: {
      small: '4px',
      medium: '8px',
      large: '16px',
    },
    width: {
      thin: '1px',
      medium: '2px',
      thick: '4px',
    },
  },
  shadows: {
    small: '0 1px 3px rgba(0, 0, 0, 0.12)',
    medium: '0 3px 6px rgba(0, 0, 0, 0.16)',
    large: '0 10px 20px rgba(0, 0, 0, 0.19)',
  },
  zIndex: {
    dropdown: 1000,
    modal: 1050,
    tooltip: 1100,
  },
  transitions: {
    duration: {
      short: '150ms',
      medium: '300ms',
      long: '500ms',
    },
    timingFunction: {
      easeIn: 'ease-in',
      easeOut: 'ease-out',
      easeInOut: 'ease-in-out',
    },
  },
  icons: {
    small: '16px',
    medium: '24px',
    large: '32px',
  },
};

export default theme;
