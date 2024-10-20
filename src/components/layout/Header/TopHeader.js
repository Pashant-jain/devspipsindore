import Link from "next/link";
import React from "react";
import email from "/public/assets/icons/email.svg";
import Logo from "/public/assets/images/College-logo.png";
import hamburgerIcon from "/public/assets/icons/hamburgerIcon.svg";
import search from "/public/assets/icons/Search-dark.svg";

import styles from "./style.module.scss";
import Image from "next/image";
import { Button } from "react-bootstrap";

const TopHeader = ({ handleShow }) => {
  return (
    <div className="text-center">
      <div className={styles["topHeader_sect"]}>
        <div className="container">
          <div className={styles["topHeader"]}>
            <div className={styles["topHeader_inner"]}>
              <Button
                variant="primary"
                onClick={handleShow}
                className={styles["mobileMenu"]}
              >
                <Image src={hamburgerIcon} alt="" width={30} height={30} />
              </Button>
              <div className={styles["ContactInfo"]}>
                <Link href="" className="text-regular">
                  <Image src={email} alt="emailIcon" width={20} height={20} />{" "}
                  <span>contact@brixagency.com</span>
                </Link>
              </div>
            </div>
            <div className={styles["External_Links"]}>
              <Link href={"#"} className="text-regular">
                Pay Prof. Course Fee
              </Link>
              <Link
                href={"https://www.nirfindia.org/"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-regular"
              >
                NIRF
              </Link>
              <Link
                href={"mailto:info@spipsindore.com"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-regular"
              >
                E-Mail
              </Link>
              <Link
                href={"https://ecare.spipsindore.com/app/login"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-regular"
              >
                E-Care
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={styles["CollegeLogo_section"]}>
        <div className="container">
          <div className={styles["CollegeLogo_wrp"]}>
            <Button
              variant="primary"
              onClick={handleShow}
              className={styles["mobileMenu"]}
            >
              <Image src={hamburgerIcon} alt="" width={24} height={24} />
            </Button>
            <img
              src={Logo.src}
              alt="logo"
              width={Logo.width}
              height={Logo.height}
              className={styles["CollegeLogo"]}
            />
            <Button variant="primary" className={styles["mobileMenu"]}>
              <Image src={search} alt="" width={24} height={24} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
