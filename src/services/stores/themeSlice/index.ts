import { persist } from 'zustand/middleware';
import { StateSlice } from '@services/@types/zustand';
import { IThemeStore, eThemeStorage } from '@services/@types/theme';

export const createThemeSlice: StateSlice<IThemeStore> = persist(
  (set, get) => ({
    themeName: 'light',
    onChangeTheme: (name): void =>
      set(() => ({
        themeName: name ? name : get()?.themeName
      }))
  }),
  {
    name: eThemeStorage.NameKey
  }
);
