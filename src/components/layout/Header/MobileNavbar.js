import React from "react";
import style from "./style.module.scss";
import Link from "next/link";
import { Accordion, Offcanvas } from "react-bootstrap";
import { headerLevel3Data } from "@/data/layout/header";

const MobileNavbar = ({ handleClose, show }) => {
  return (
    <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <div
          className={`${style["MainNavbar"]} ${style["mobileMenu"]} mobileMenu`}
        >
          <Accordion defaultActiveKey="0">
            {headerLevel3Data?.map((menu, index) => (
              <Accordion.Item eventKey={String(index)} key={menu.id || index}>
                <Accordion.Header>{menu.itemName}</Accordion.Header>
                <Accordion.Body>
                  {menu.child &&
                    menu.child.map((submenu, subIndex) => (
                      <div key={submenu.id || subIndex}>
                        {submenu.submenuChild ? (
                          <Accordion>
                            <Accordion.Item eventKey={`${index}-${subIndex}`}>
                              <Accordion.Header>
                                {submenu.subItemName}
                              </Accordion.Header>
                              <Accordion.Body>
                                {submenu.submenuChild.map(
                                  (innerSubmenu, innerIndex) => {
                                    return innerSubmenu.link ? ( // Check if link is defined
                                      <Link
                                        onClick={handleClose}
                                        href={innerSubmenu.link}
                                        className="text-regular"
                                        key={innerSubmenu.id || innerIndex}
                                      >
                                        {innerSubmenu.innerSubItemName}
                                      </Link>
                                    ) : (
                                      <span
                                        key={innerIndex}
                                        className="text-muted"
                                      >
                                        {innerSubmenu.innerSubItemName} (No
                                        Link)
                                      </span>
                                    );
                                  }
                                )}
                              </Accordion.Body>
                            </Accordion.Item>
                          </Accordion>
                        ) : submenu.link ? ( // Check if submenu link is defined
                          <Link
                            onClick={handleClose}
                            href={submenu.link}
                            className="text-regular"
                            target={submenu.target}
                            key={submenu.id || subIndex}
                          >
                            {submenu.subItemName}
                          </Link>
                        ) : (
                          <span key={subIndex} className="text-muted">
                            {submenu.subItemName} (No Link)
                          </span>
                        )}
                      </div>
                    ))}
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default MobileNavbar;
