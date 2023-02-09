import React from 'react';
import { MainNavigation } from '../../components';
import { Outlet } from 'react-router-dom';
import { Footer } from '../../components';
const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
