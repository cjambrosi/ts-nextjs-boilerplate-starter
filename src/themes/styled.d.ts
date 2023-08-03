import 'styled-components';

export type tThemeName = 'light' | 'dark';

interface IColorIntensity {
  ultraIntense?: string;
  intense?: string;
  ultraRegular?: string;
  regular?: string;
  light?: string;
  ultraLight?: string;
  strongLight?: string;
}

// TODO: Remove ignores
declare module 'styled-components' {
  export interface DefaultTheme {
    id: string;
    name: tThemeName;
    fonts: any; // eslint-disable-line
    color: {
      black: IColorIntensity;
      white: IColorIntensity;
    };
    breakpoints: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
  }
}
