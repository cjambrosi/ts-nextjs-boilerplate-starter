import { DefaultTheme } from 'styled-components/dist/types';

// TODO: Remove ignores
// eslint-disable-next-line
// @ts-ignore
const lightTheme: DefaultTheme = {
  id: 'T_001',
  name: 'light'
};

// TODO: Remove ignores
// eslint-disable-next-line
// @ts-ignore
const darkTheme: DefaultTheme = {
  id: 'T_002',
  name: 'dark'
};

const theme = {
  light: lightTheme,
  dark: darkTheme
};

export { theme };
