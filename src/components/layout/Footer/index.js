import React from "react";
import { Container } from "react-bootstrap";
import style from "./style.module.scss";
import Image from "next/image";
import Link from "next/link";
import Facebook from "/public/assets/icons/Facebook.svg";
import Instagram from "/public/assets/icons/Instagram.svg";
import LinkedIn from "/public/assets/icons/LinkedIn.svg";
import Twitter from "/public/assets/icons/Twitter.svg";
import YouTube from "/public/assets/icons/YouTube.svg";
import arrowRight from "/public/assets/icons/Arrow-right.svg";

const Footer = () => {
  return (
    <>
      <div className={style["footer_cta_wrp"]}>
        <div className="container">
          <div className={style["footer_cta"]}>
            <h2 className="heading-2">
              Are you Ready to Start your
              <br /> Career with us?
            </h2>
            <div className={style["btn_wrp"]}>
              <Link href={"#"} className={style["btn_primary"]}>
                Search Course{" "}
                <Image src={arrowRight} alt="" width={8} height={8} />{" "}
              </Link>
              <Link href={"#"} className={style["btn_secondary"]}>
                Search Course{" "}
                <Image src={arrowRight} alt="" width={8} height={8} />{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={style["footer"]}>
        <Container>
          <div className={style["footerInner"]}>
            <div className={style["footer_info"]}>
              <Image
                src={`https://spipsindore.com/wp-content/uploads/2020/09/school_logo.png`}
                alt="emailIcon"
                width={100}
                height={100}
              />
              <p className="text-regular">
                SPIPS is a Self-financed Christian Minority Institute, approved
                as such by the Government of India. It is owned and managed by
                the Catholic Diocese of Indore. It is approved by the Department
                of Higher Education, M.P., and is affiliated to the Devi Ahilya
                Vishwavidyalaya, Indore.
              </p>
              <div className={style["socialMedia"]}>
                <Link href={`#`}>
                  <Image src={Facebook} alt="" width={24} height={24} />
                </Link>
                <Link href={`#`}>
                  <Image src={Instagram} alt="" width={24} height={24} />
                </Link>
                <Link href={`#`}>
                  <Image src={LinkedIn} alt="" width={24} height={24} />
                </Link>
                <Link href={`#`}>
                  <Image src={Twitter} alt="" width={24} height={24} />
                </Link>
                <Link href={`#`}>
                  <Image src={YouTube} alt="" width={24} height={24} />
                </Link>
              </div>
            </div>
            <div className={style["footerNavLinkWrp"]}>
              
              <div className={`${style["footerNavLink"]} ${style['featured_link']}`} > 
                <h6 className="heading-6">About us</h6>
                
               <div className={style["List"]}>
                  <Link href={`/managing-committee`} className="text-regular">
                    managing-committee
                  </Link>
                  <Link href={`/finantial-committee`} className="text-regular">
                    finantial-committee
                  </Link>
                  <Link href={`/annual-report`} className="text-regular">
                    annual-report
                  </Link>
                  <Link href={`/in-house-committee`} className="text-regular">
                    in-house-committee
                  </Link>
                  <Link href={`/policy`} className="text-regular">
                    Privacy policy
                  </Link>
                </div>
               </div>

              <div className={`${style["footerNavLink"]} ${style['info_dtn']}`}>
                <h6 className="heading-6">Information
                </h6>
                <div className={style["List"]}>
                  <Link href={`#`} className="text-regular">
                    <Image src={Facebook} alt="" width={24} height={24} />
                    <span>
                      7/1, Boundary Road, Lalaram Nagar, Indore, Madhya Pradesh
                      - 452001.
                    </span>
                  </Link>
                  <Link href={`#`} className="text-regular">
                  <Image src={Facebook} alt="" width={24} height={24} />
                  +91 731 2499911, 2490114
                  </Link>
                  <Link href={`#`} className="text-regular">
                  <Image src={Facebook} alt="" width={24} height={24} />
                  info@spipsindore.ac.in
                  </Link>
                  
                </div>
              </div>
            </div>
          </div>
          <div className={style["copyright"]}>
            <p className="text-regular text-center m-0">
              Copyright © 2025 BRIX Agency | All Rights Reserved | Terms and
              Conditions | Privacy Policy
            </p>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
