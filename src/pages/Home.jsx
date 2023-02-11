import React from 'react';
import {
  NewArrivals,
  HomeService,
  Banner,
  Image,
  Advertise,
  BestSeller,
  MiddleAdContainer,
  Offers,
  Footer,
} from '../components';
import usePageTitle from '../hooks/usePageTitle';

export default function Home() {
  usePageTitle('Orebi');
  return (
    <div>
      <Banner Image={Image} />
      <Advertise />
      <HomeService />
      <NewArrivals />
      <BestSeller />
      <MiddleAdContainer />
      <Offers />
    </div>
  );
}
