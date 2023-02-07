import React from 'react';
import {
  NewArrivals,
  HomeService,
  Banner,
  Image,
  Advertise,
} from '../components';

export default function Home() {
  return (
    <div>
      <Banner Image={Image} />
      <HomeService />
      <Advertise />
      <NewArrivals />
    </div>
  );
}
