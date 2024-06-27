import React from 'react';
import {
  Footer,
  Navigation,
} from '@devlaunchers/components/src/components/organisms';

export const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
};
