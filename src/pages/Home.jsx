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

export default function Home() {
  return (
    <div>
      <Banner Image={Image} />
      <HomeService />
      <Advertise />
      <NewArrivals />
      <BestSeller />
      <MiddleAdContainer />
      <Offers />
      <Footer />
    </div>
  );
}
