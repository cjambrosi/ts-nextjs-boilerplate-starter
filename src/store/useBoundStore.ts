import { create } from 'zustand';

import { IBoundStoreProps } from '@/types/zustand';

import { createThemeSlice } from './themeSlice';

export const useBoundStore = create<IBoundStoreProps>()((...a) => ({
  ...createThemeSlice(...a)
}));
