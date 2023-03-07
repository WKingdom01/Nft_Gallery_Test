import React from 'react';
import { CollectionCard } from '../UI';
import { useSelector } from 'react-redux';

import { selectCollectionList } from '@/store/nft.selectors';
import { ICollection } from '@/interfaces';
export const Collections: React.FC = () => {
  const collections = useSelector(selectCollectionList);

  return (
    <div className='flex flex-col gap-6 justify-center items-center'>
      {collections?.map((collection: ICollection, index: number) => (
        <CollectionCard key={index} name={collection.name} address={collection.address} />
      ))}
    </div>
  );
};
