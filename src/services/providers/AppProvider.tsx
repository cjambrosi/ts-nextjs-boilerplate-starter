'use client';

import { ReactNode } from 'react';
import { AbstractIntlMessages, NextIntlClientProvider } from 'next-intl';
import { ThemeProvider } from 'styled-components';

import StyledComponentsRegistry from '@libs/SCRegistry';
import { theme } from '@themes/theme';

import { useBoundStore } from '@services/stores/useBoundStore';

interface IAppProvider {
  children: ReactNode;
  locale?: string;
  messages?: AbstractIntlMessages;
}

const AppProvider = ({
  children,
  locale,
  messages
}: IAppProvider): JSX.Element => {
  const { themeName } = useBoundStore((state) => state);
  const currentTheme = themeName === 'dark' ? theme.dark : theme.light;

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <StyledComponentsRegistry>
        <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
      </StyledComponentsRegistry>
    </NextIntlClientProvider>
  );
};

export { AppProvider };
