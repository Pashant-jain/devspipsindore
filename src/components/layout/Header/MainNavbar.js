import React from "react";
import style from "./style.module.scss";
import ArrowDown from "/public/assets/icons/arrow-down.svg";
import Link from "next/link";
import Image from "next/image";
import { Dropdown } from "react-bootstrap";
import { headerData } from "./header-config";

const MainNavbar = () => {
  return (
    <div className={`${style["MainNavbar"]} ${style['desktopMenu']}`}>
  {headerData?.map((menu, index) => (
    <div key={index}>
      {menu.child ? (
        <Dropdown>
          <Dropdown.Toggle className="text-regular menu_toggle">
            {menu.itemName}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            {menu.child.map((submenu, subIndex) => (
              <div key={subIndex}>
                {/* If there are submenuChild items, create a nested dropdown */}
                {submenu.submenuChild ? (
                  <Dropdown drop="left" key={subIndex}>
                    <Dropdown.Toggle className="text-regular">
                      {submenu.subItemName}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      {submenu.submenuChild.map(
                        (innerSubmenu, innerIndex) => (
                          <Dropdown.Item as="div" key={innerIndex}>
                            {innerSubmenu.link ? (
                              <Link
                                href={innerSubmenu.link}
                                className="text-regular"
                                target={innerSubmenu.target}
                              >
                                {innerSubmenu.innerSubItemName}
                              </Link>
                            ) : (
                              <span className="text-regular">
                                {innerSubmenu.innerSubItemName}
                              </span>
                            )}
                          </Dropdown.Item>
                        )
                      )}
                    </Dropdown.Menu>
                  </Dropdown>
                ) : (
                  <Dropdown.Item as="div" key={subIndex}>
                    {submenu.link ? (
                      <Link
                        href={submenu.link}
                        className="text-regular"
                        target={submenu.target}
                      >
                        {submenu.subItemName}
                      </Link>
                    ) : (
                      <span className="text-regular">
                        {submenu.subItemName}
                      </span>
                    )}
                  </Dropdown.Item>
                )}
              </div>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      ) : (
        <div>
          {menu.link ? (
            <Link href={menu.link} className="text-regular">
              {menu.itemName}
            </Link>
          ) : (
            <span className="text-regular">{menu.itemName}</span> // Render non-link if no valid URL
          )}
        </div>
      )}
    </div>
  ))}
</div>

  );
};

export default MainNavbar;
