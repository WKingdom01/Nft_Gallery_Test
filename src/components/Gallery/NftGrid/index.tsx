import React, { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useParams } from 'react-router';

import { NftCard } from '@/components/UI';
import { useGetNftsQuery } from '@/store/nft.api';
import { selectNftList } from '@/store/nft.selectors';

const NftGrid: React.FC = () => {
  const { address = '' } = useParams();
  const [ cursor, setCurosr ] = useState<any>({});

  const { data } = useGetNftsQuery({
    address,
    cursor: Object.keys(cursor)?.includes(address) ? cursor[ address ] : '',
  });
  const nftLists = useSelector(selectNftList);

  useMemo(() => {
    console.warn(cursor[ address ]);
  }, [ cursor, address ]);

  if (nftLists[ address ]?.length > 0) {
    return (
      <>
        <div className='text-center uppercase text-2xl text-white'>
          {' '}
          {nftLists[ address ][ 0 ]?.name} Collection
        </div>
        <InfiniteScroll
          dataLength={nftLists[ address ]?.length || 0}
          next={() => {
            if (data?.cursor?.length > 0) {
              setCurosr({
                ...cursor,
                [ address ]: data?.cursor,
              });
            }
          }}
          hasMore={typeof data?.cursor === 'string'}
          loader={
            <>
              {Array.from({ length: 16 })
                .fill({})
                .map(() => ({ id: Math.random() }))
                .map(({ id }) => (
                  <div
                    key={id}
                    className='bg-brand-200/20 aspect-[9/14] rounded-xl animate-pulse'
                  />
                ))}
            </>
          }
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
          className='grid place-content-center place-items-center xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-6 my-10'
          style={{ overflow: 'visible', height: 'inherit' }}
        >
          {nftLists[ address ]?.map((nft: any, index: any) => (
            <NftCard key={index} nftData={nft} />
          ))}
        </InfiniteScroll>
      </>
    );
  } else {
    return <div className='text-white h-screen'>Loading ...</div>;
  }
};

export default NftGrid;
