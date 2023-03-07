import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setNftLists } from './nft.redcuers';

const API_PREFIX = 'https://deep-index.moralis.io/api/v2/nft';

export const nftApi = createApi({
  reducerPath: 'nft',
  baseQuery: fetchBaseQuery({
    baseUrl: API_PREFIX,
    prepareHeaders: (headers) => {
      // eslint-disable-next-line no-sequences, @typescript-eslint/no-unused-expressions
      headers.set('accept', 'appliation/json'),
      headers.set(
        'X-API-Key',
        process.env.MORALIS_API_KEY ||
            'UOcmzVX7SBgwH1UsNfGuXon78eVB2LKrBVBm5cbMzad3rnVPyPWOra77qYsWBdSP',
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getNfts: builder.query<any, { address: string; cursor: string }>({
      query: ({ address, cursor }) =>
        `${address}?chain=eth&format=decimal&limit=20&cursor=${cursor}`,

      transformResponse(response) {
        return response;
      },

      transformErrorResponse(err) {
        return err.data;
      },
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setNftLists({ list: data.result, address: arg.address }));
        } catch (err) {
          console.error(err);
        }
      },
    }),
  }),
});

export const { useGetNftsQuery } = nftApi;
