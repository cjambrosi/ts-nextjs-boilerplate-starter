import { create } from 'zustand';
import { IBoundStoreProps } from '@services/@types/zustand';
import { createThemeSlice } from './themeSlice';

export const useBoundStore = create<IBoundStoreProps>()((...a) => ({
  ...createThemeSlice(...a)
}));
