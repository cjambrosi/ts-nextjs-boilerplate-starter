type Messages = typeof import('../../locales/pt-br.json');

type IntlMessages = Messages;

export interface IRootLayoutProps {
  children: React.ReactNode;
  params: Ii18nLocales;
}

export interface Ii18nLocales {
  locale: string;
}
