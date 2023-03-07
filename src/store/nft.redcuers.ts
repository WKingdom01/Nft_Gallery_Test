import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICollection } from '@/interfaces';

export interface INftSlice {
  nftList: any;
  collectionList: Array<ICollection>;
}

const initialState: INftSlice = {
  nftList: {},
  collectionList: [
    {
      name: 'Azuki',
      address: '0xed5af388653567af2f388e6224dc7c4b3241c544',
      chain: 'eth',
    },
    {
      name: 'Bored Ape Yacht Club',
      address: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
      chain: 'eth',
    },
  ],
};

export type TNftListPayload = {
  list: Array<any>;
  address: string;
};

export const nftSlice = createSlice({
  name: 'nft',
  initialState,
  reducers: {
    setNftLists: (state, action: PayloadAction<TNftListPayload>) => {
      state.nftList[ action.payload.address ] = [
        ...(state.nftList[ action.payload.address ] || []),
        ...action.payload.list,
      ];
    },
  },
});

export const { setNftLists } = nftSlice.actions;

export default nftSlice.reducer;
