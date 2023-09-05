import { getI18nLocales } from '@/utils/getI18nLocales';

describe('getI18nLocales', () => {
  const mockLocales = [{ locale: 'pt-br' }, { locale: 'en' }];
  it('Should return the correct locales list', () => {
    const locales = getI18nLocales();

    expect(locales).toEqual(mockLocales);
  });
});
