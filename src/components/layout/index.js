// components/layout.jsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children,showFooterCta }) => {
  return (
    <div>
      <Header />
      {children}
      <div className='h-20'></div>
      <Footer showFooterCta={showFooterCta} />
    </div>
  );
};

export default Layout;
