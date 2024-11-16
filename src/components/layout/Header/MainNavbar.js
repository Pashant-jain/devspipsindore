import style from "./style.module.scss";
import Link from "next/link";
import { Dropdown } from "react-bootstrap";
import { headerLevel3Data } from "@/data/layout/header";

const MainNavbar = ({className}) => {
  return (
    <div className={`${style["MainNavbar"]} ${style["desktopMenu"]} ${className}`}>
      {headerLevel3Data?.map((menu, index) => (
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

                        <Dropdown.Menu
                          className={"!translate-x-48 !translate-y-10"}
                        >
                          {submenu.submenuChild.map(
                            (innerSubmenu, innerIndex) => (
                              <Dropdown.Item as="div" key={innerIndex}>
                                <Link
                                  href={innerSubmenu.link || "#"}
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
                          href={submenu.link || "#"}
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
