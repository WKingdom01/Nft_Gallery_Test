import React, { useEffect, useState } from 'react';
import { useModal } from '@/hooks';
import { NftDetailModalProps } from '@/components/Modals';
export interface INftCardProps extends JSX.IntrinsicAttributes {
  nftData: any;
}

export const NftCard: React.FC<INftCardProps> = ({ nftData }) => {
  const [ image, setImage ] = useState('');
  const [ nftDetail, setNftDetail ] = useState<NftDetailModalProps>();
  const { open } = useModal();

  const openModal = () => {
    console.warn('opened modal');
    open('nft', nftDetail);
  };

  useEffect(() => {
    const metaData = JSON.parse(nftData.metadata);
    setNftDetail({
      nftData,
      metaData,
    });
    setImage('https://ipfs.io/ipfs/' + metaData.image.slice(7));
  }, [ nftData ]);

  return (
    <div onClick={openModal} aria-hidden='true'>
      <div className='bg-brand-200/20 max-w-[200px] rounded-x\jsx-eslint\eslint-plugin-jsx-a11y\tree\HEAD\docs\rules\click-events-have-key-events.mdl text-white overflow-hidden ease-in transition-all hover:transform hover:-translate-y-2 hover:outline hover:outline-1 hover:outline-gray-100 hover:shadow-lg hover:cursor-pointer'>
        <img className='w-full aspect-square block' alt={nftData.name} src={image} />
        <div className='flex justify-start gap-2 p-4'>
          <h3 className='text-xl uppercase mt-2 font-semibold '>{nftData.token_id}</h3>
          <h3 className='text-xl mt-2 font-semibold text-clips	'>{nftData.name}</h3>
        </div>
      </div>
    </div>
  );
};
