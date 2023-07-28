import { DefaultTheme } from 'styled-components/dist/types';

const lightTheme: DefaultTheme = {
  id: 'T_001',
  name: 'light'
};

const darkTheme: DefaultTheme = {
  id: 'T_002',
  name: 'dark'
};

const theme = {
  light: lightTheme,
  dark: darkTheme
};

export { theme };
