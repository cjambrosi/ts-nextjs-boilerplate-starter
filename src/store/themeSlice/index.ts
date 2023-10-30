import { persist } from 'zustand/middleware';

import { eThemeStorage, IThemeStore } from '@/types/theme.d';
import { StateSlice } from '@/types/zustand';

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
