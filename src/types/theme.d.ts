import { tThemeName } from '@themes/styled';

export interface IThemeStore {
  themeName: tThemeName;
  onChangeTheme: (name: tThemeName) => void;
}

export enum eThemeStorage {
  NameKey = 'cja-theme-storage'
}
