import React from 'react';
import { Link } from 'react-router-dom';

export interface CollectionCardProps {
  name: string;
  address: string;
}

export const CollectionCard: React.FC<CollectionCardProps> = (props) => {
  return (
    <Link
      to={`/gallery/${props.address}`}
      key={props.address}
      className=' w-8/12 border rounded-xl relative overflow-hidden p-6 flex flex-col-reverse ease-in transition-all  hover:transform hover:scale-110 hover:outline hover:outline-1 hover:outline-gray-100 hover:shadow-lg hover:cursor-pointer'
    >
      <div className='w-full rounded-xl bg-brand-700/50 relative z-2 p-4 text-white'>
        <h3 className='text-center text-3xl font-bold text-white mt-2 uppercase font-kusansagi'>
          {props.name}
        </h3>
      </div>
    </Link>
  );
};
