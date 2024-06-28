export interface Theme {
    colors: {
        primary: string;
        secondary: string;
        background: string;
        surface: string;
        success: string;
        danger: string;
        warning: string;
        info: string;
        textPrimary: string;
        textSecondary: string;
      };
      typography: {
        fontFamily: string;
        fontSize: {
          small: string;
          medium: string;
          large: string;
        };
        fontWeight: {
          light: number;
          regular: number;
          bold: number; 
          bolder: number;
        };
        lineHeight: {
          normal: string;
          dense: string;
          loose: string; 
        };
      };
      spacing: (factor: number) => string;
      breakpoints: {
        mobile: string;
        tablet: string;
        desktop: string;
      };
      sizing: {
        small: string;
        medium: string;
        large: string;  
      };
      borders: {
        radius: {
          small: string;
          medium: string;
          large: string;
        };
        width: {
          thin: string;
          medium: string;
          thick: string;
        };
      };
      shadows: {
        small: string;
        medium: string;
        large: string;
      };
      zIndex: {
        dropdown: number;
        modal: number;
        tooltip: number;
      };
      transitions: {
        duration: {
          short: string;
          medium: string;
          long: string;
        };
        timingFunction: {
          easeIn: string;
          easeOut: string;
          easeInOut: string;
        };
      };
      icons: {
        small: string;
        medium: string;
        large: string;
      };
     
}