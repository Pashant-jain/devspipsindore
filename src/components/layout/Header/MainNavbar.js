import React from "react";
import style from "./style.module.scss";
import ArrowDown from "/public/assets/icons/arrow-down.svg";
import Link from "next/link";
import Image from "next/image";
import { Dropdown } from "react-bootstrap";
import { headerData } from "./header-config";

const MainNavbar = () => {
  return (
    <div className={style["MainNavbar"]}>
      {headerData?.map((menu, index) => (
        <div key={index}>
          {menu.child ? (
            <Dropdown>
              <Dropdown.Toggle className="text-regular menu_toggle" >
                {menu.itemName}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {menu.child.map((submenu, subIndex) => (
                  <div key={subIndex}>
                    {/* If there are submenuChild items, create a nested dropdown */}
                    {submenu.submenuChild ? (
                      <Dropdown drop="left" key={subIndex}>
                        <Dropdown.Toggle
                          className="text-regular"
                          
                        >
                          {submenu.subItemName}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          {submenu.submenuChild.map(
                            (innerSubmenu, innerIndex) => (
                              <Dropdown.Item as="div" key={innerIndex}>
                                <Link
                                  href={innerSubmenu.link}
                                  className="text-regular"
                                  target={innerSubmenu.target}
                                >
                                  {innerSubmenu.innerSubItemName}
                                </Link>
                              </Dropdown.Item>
                            )
                          )}
                        </Dropdown.Menu>
                      </Dropdown>
                    ) : (
                      <Dropdown.Item as="div" key={subIndex}>
                        <Link
                          href={submenu.link}
                          className="text-regular"
                          target={submenu.target}
                        >
                          {submenu.subItemName}
                        </Link>
                      </Dropdown.Item>
                    )}
                  </div>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <Link href="/" className="text-regular">
              {menu.itemName}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};

export default MainNavbar;
