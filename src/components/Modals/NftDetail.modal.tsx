import React, { useState, useEffect } from 'react';

import { NftAttribute } from '@/interfaces';
export interface NftDetailModalProps extends JSX.IntrinsicAttributes {
  nftData: any;
  metaData: any;
}

export const NFtDetailModal: React.FC<NftDetailModalProps> = ({ nftData, metaData }) => {
  const [ image, setImage ] = useState<string>('');
  const handleClickBuynow = () => {
    const url: string =
      `https://opensea.io/assets/ethereum/${nftData.token_address}/${nftData.token_id}`.toString();
    console.warn('url', url);
    window.open(url, '_blank');
  };
  useEffect(() => {
    setImage('https://ipfs.io/ipfs/' + metaData.image.slice(7));
  }, [ metaData ]);
  return (
    <div className='flex flex-col sm:flex-row justify-center gap-8 text-white'>
      <div>
        <img src={image} alt={nftData.name} className='max-w-md' />
      </div>

      <div className='flex flex-col gap-6 justify-start'>
        <div className='flex gap-2'>
          <span className='text-2xl'>{nftData.name}</span>
          <span className='text-2xl'>#{nftData.token_id}</span>
        </div>

        <div>
          <p className='text-xl'>Description:</p>
          <p>{metaData?.description}</p>
        </div>

        <div>
          <p className='text-xl'>Attributes:</p>
          <div className='grid grid-cols-2 gap-2'>
            {metaData?.attributes.map((attribute: NftAttribute, index: number) => (
              <div key={index} className='border-2 border-gray-200 rounded text-center w-[200px]'>
                <p className='text-blue-200 text-sm'>{attribute.trait_type}</p>
                <p>{attribute.value}</p>
              </div>
            ))}
          </div>
          <p>{metaData?.description}</p>
        </div>

        <button
          onClick={handleClickBuynow}
          className='w-full py-4 border-2 border-gray-200 rounded text-2xl font-bold text-center'
        >
          Buy now
        </button>
      </div>
    </div>
  );
};
