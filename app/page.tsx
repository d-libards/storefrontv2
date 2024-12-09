import { Button } from '@/components/ui/button';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import LoadingContainer from '@/components/global/LoadingContainer';
import { Suspense } from 'react';
import Hero from '@/components/home/Hero';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Suspense fallback={<LoadingContainer />}>
        <FeaturedProducts />
      </Suspense>
    </>
  );
};
export default HomePage;
