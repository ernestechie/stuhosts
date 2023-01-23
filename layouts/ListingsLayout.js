import React from 'react';
import { LayoutWrapper, MobileNavigation, Navbar } from '../components';

const ListingsLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <LayoutWrapper>{children}</LayoutWrapper>
      <MobileNavigation />
    </div>
  );
};

export default ListingsLayout;
