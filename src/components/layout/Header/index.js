import React, { useState } from "react";
import SubNavbar from "./SubNavbar";
import MainNavbar from "./MainNavbar";
import TopHeader from "./TopHeader";
import MobileNavbar from "./MobileNavbar";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="header">
      <TopHeader handleShow={handleShow} />
      <SubNavbar />
      <MainNavbar />
      <MobileNavbar handleClose={handleClose} show={show} />
    </div>
  );
};

export default Header;
