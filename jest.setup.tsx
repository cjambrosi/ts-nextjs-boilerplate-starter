import { ReactNode } from 'react';
import { Queries, render, RenderResult } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';

import en from '@/locales/en.json';
import pt from '@/locales/pt-br.json';

const defaultProviderProps: any = {
  locale: 'en',
  messages: {
    pt,
    en
  }
};

test.customRender = (
  ui: ReactNode,
  { providerProps, ...renderOptions }: any = {}
): RenderResult<Queries, HTMLElement, HTMLElement> => {
  const locale = providerProps?.locale || defaultProviderProps.locale;

  return render(
    <NextIntlClientProvider
      locale={locale}
      messages={{
        ...defaultProviderProps.messages[locale],
        ...(providerProps?.messages || {})
      }}
    >
      {ui}
    </NextIntlClientProvider>,
    renderOptions
  );
};
