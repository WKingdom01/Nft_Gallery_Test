import React, { useEffect, Suspense } from 'react';
import { BrowserRouter as Browser, Routes, Route, Navigate } from 'react-router-dom';

import { NFtDetailModal } from '@/components/Modals';
import { useModal } from '@/hooks';
import Header from '@/components/Header';

const Gallery = React.lazy(() => import('@/components/Gallery'));
const NftGrid = React.lazy(() => import('@/components/Gallery/NftGrid'));

function App() {
  const { register } = useModal();

  useEffect(() => {
    register('nft', NFtDetailModal);
  }, [ register ]);

  return (
    <div className='App bg-zinc-700 '>
      <Header />
      <div className='p-[40px] pt-40'>
        <Browser>
          <Suspense fallback={<div className='h-screen text-white'>Loading...</div>}>
            <Routes>
              <Route path='/' element={<Navigate to='/gallery' />} />
              <Route path='gallery' element={<Gallery />} />
              <Route path='gallery/:address' element={<NftGrid />} />
            </Routes>
          </Suspense>
        </Browser>
      </div>
    </div>
  );
}

export default App;
