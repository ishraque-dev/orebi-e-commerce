import React from 'react';
import {
  NewArrivals,
  HomeService,
  Banner,
  Advertise,
  BestSeller,
  MiddleAdContainer,
  Offers,
} from '../components/Home';
import { Image } from '../components/UI';
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
