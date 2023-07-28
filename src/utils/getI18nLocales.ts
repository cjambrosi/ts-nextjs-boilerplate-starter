import { Ii18nLocales } from '@services/@types/global';
import i18nConfig from '../../i18n.config';

export const getI18nLocales = (): Ii18nLocales[] => {
  return i18nConfig.i18n.locales.map((lang) => ({
    locale: lang
  }));
};
