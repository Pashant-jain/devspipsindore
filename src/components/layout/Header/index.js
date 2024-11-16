import React, { useEffect, useState } from "react";
import SubNavbar from "./SubNavbar";
import MainNavbar from "./MainNavbar";
import TopHeader from "./TopHeader";
import MobileNavbar from "./MobileNavbar";

const Header = () => {
  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Add event listener on scroll
  useEffect(() => {
    const handleScroll = () => {
      // Check if the scroll position is greater than 50 pixels
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className="header">
      <TopHeader handleShow={handleShow} scrolled={scrolled} />
      <SubNavbar  />
      <MainNavbar className={scrolled ? 'fixed_mainNavBar' : ''}  />
      <MobileNavbar handleClose={handleClose} show={show} />
    </div>
  );
};

export default Header;
