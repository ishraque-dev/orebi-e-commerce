import React from 'react';
import { MainNavigation, Footer } from '../Layouts';
import { Outlet } from 'react-router-dom';

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
