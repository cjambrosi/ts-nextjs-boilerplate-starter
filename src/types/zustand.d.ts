import { StateCreator } from 'zustand';

import { IThemeStore } from './theme';

export type IBoundStoreProps = IThemeStore;

export type StateSlice<T> = StateCreator<
  IBoundStoreProps,
  [['zustand/devtools', never]],
  [['zustand/persist', Partial<T>]],
  T
>;
