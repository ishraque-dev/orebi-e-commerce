import React from 'react';
import { HomeService } from '../components';
import { Banner, Image } from '../components/index';

export default function Home() {
  return (
    <div>
      <Banner Image={Image} />
      <HomeService />
    </div>
  );
}
