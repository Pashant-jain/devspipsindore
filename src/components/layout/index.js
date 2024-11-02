// components/layout.jsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <div className='h-20'></div>
      <Footer/>
    </div>
  );
};

export default Layout;
