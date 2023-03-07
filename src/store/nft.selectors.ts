import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '.';

export const selectNftRoot = createSelector(
  (state: RootState) => state,
  (state) => state.nftRedcuer,
);

export const selectNftList = createSelector(selectNftRoot, (state: any) => state.nftList);
export const selectCollectionList = createSelector(
  selectNftRoot,
  (state: any) => state.collectionList,
);
