'use client';

import { ReactNode } from 'react';
import StyledComponentsRegistry from '@libs/SCRegistry';
import { ThemeProvider } from 'styled-components';
import { theme } from '@themes/theme';
import { useBoundStore } from '@services/stores/useBoundStore';

interface IAppProvider {
  children: ReactNode;
}

const AppProvider = ({ children }: IAppProvider): JSX.Element => {
  const { themeName } = useBoundStore((state) => state);
  const currentTheme = themeName === 'dark' ? theme.dark : theme.light;

  return (
    <>
      <StyledComponentsRegistry>
        <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
      </StyledComponentsRegistry>
    </>
  );
};

export { AppProvider };
