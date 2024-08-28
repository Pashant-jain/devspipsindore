import Link from "next/link";
import React from "react";
import email from "/public/assets/icons/email.svg";
import Logo from "/public/assets/images/College-logo.png";

import styles from "./style.module.scss";
import Image from "next/image";

const TopHeader = () => {
  console.log(Logo);
  
  return (
    <div className="text-center" >
    <div className={styles["topHeader"]}>
      <div className={styles["ContactInfo"]}>
        <Link href="" className="text-body">
          <Image src={email} alt="emailIcon" width={20} height={20} />{" "}
          <span>contact@brixagency.com</span>
        </Link>
      </div>
      <div className={styles['External_Links']} >
          <Link href={'#'} className="text-regular" >Pay Prof. Course Fee</Link>
          <Link href={'#'} className="text-regular" >NIRF</Link>
          <Link href={'#'} className="text-regular" >E-Mail</Link>
          <Link href={'#'} className="text-regular" >E-Care</Link>

      </div>
    </div>
    {/* <div className={styles['CollegeLogo_wrp']} >
    <img src={Logo.src} alt="logo"  width={Logo.width} height={Logo.height} className={styles['CollegeLogo']}  />
    </div> */}
      </div>
  );
};

export default TopHeader;
