import React from "react";
import { Container } from "react-bootstrap";
import style from "./style.module.scss";
import Image from "next/image";
import Link from "next/link";
import Facebook from "/public/assets/icons/Facebook.svg";
import Instagram from "/public/assets/icons/Instagram.svg";
import  Youtube from "/public/assets/icons/YouTube.svg";
import Location from "/public/assets/icons/location.svg";
import Email from "/public/assets/icons/Email.svg";
import Contact from "/public/assets/icons/contact.svg";
import Logo from "/public/assets/images/logo.png";

import { ArrowRight } from "lucide-react";

const Footer = ({showFooterCta}) => {
  return (
    <>
    {showFooterCta &&
      <div className={style["footer_cta_wrp"]}>
        <div className="container">
          <div className={style["footer_cta"]}>
            <h2 className="heading-2">
              Are you Ready to Start your
              <br /> Career with us?
            </h2>
            <div className={style["btn_wrp"]}>
              <Link href={"/student-corner/admissions/admission-procedure/"} className={`flex gap-2 items-center ${style["btn_primary"]}`}>
                Apply Now
                <ArrowRight />
              </Link>
              <Link href={"/contact-us/"} className={`flex gap-2 items-center ${style["btn_secondary"]}`}>
                Contact Us
                <ArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
      }
      <div className={style["footer"]}>
        <Container>
          <div className={style["footerInner"]}>
            <div className={style["footer_info"]}>
              <Image
                src={Logo}
                alt="emailIcon"
                width={150}
                height={150}
              />
              <p className="text-regular">
                SPIPS is a Self-financed Christian Minority Institute, approved
                as such by the Government of India. It is owned and managed by
                the Catholic Diocese of Indore. It is approved by the Department
                of Higher Education, M.P., and is affiliated to the Devi Ahilya
                Vishwavidyalaya, Indore.
              </p>
              <div className={style["socialMedia"]}>
                <Link href={`https://www.facebook.com/stpaulinstituteindore/`} target="_blank">
                  <Image src={Facebook} alt="" width={36} height={36} />
                </Link>
                <Link href={`https://www.instagram.com/officialspips.indore`} target="_blank">
                  <Image src={Instagram} alt="" width={36} height={36} />
                </Link>
                 <Link href={`https://www.youtube.com/@spipsofficial1671`} target="_blank">
                  <Image src={Youtube} alt="" width={36} height={36} />
                </Link>
                {/* <Link href={`#`}>
                  <Image src={Twitter} alt="" width={24} height={24} />
                </Link>
                <Link href={`#`}>
                  <Image src={YouTube} alt="" width={24} height={24} />
                </Link> */}
              </div>
            </div>
            <div className={style["footerNavLinkWrp"]}>
              <div
                className={`${style["footerNavLink"]} ${style["featured_link"]}`}
              >
                <h6 className="heading-6">Featured Links</h6>

                <div className={style["List"]}>
                <Link href={`https://www.nirfindia.org/`} className="text-regular" target="_blank">
                  NIRF
                  </Link>
                  <Link href={`/student-corner/examination-cell/exam-notifications/`} className="text-regular">
                  Exam Notifications
                  </Link>
                  <Link href={`https://ecare.spipsindore.com/app/login`} className="text-regular" target="_blank">
                  E-Care
                  </Link>
                  <Link href={`/student-corner/examination-cell/results/`} className="text-regular">
                  Results
                  </Link>
                 
                
                  <Link href={`/naac/naac-certificate/`} className="text-regular">
                  NAAC
                  </Link>
                  
                  <Link href={`/iqac/about/`} className="text-regular">
                  SPIPS IQAC
                  </Link>
                  <Link
                    href={`https://www.mponline.gov.in/portal/`}
                    target="_blank"
                    className="text-regular"
                  >
                    MP Online
                  </Link>
                 
                  <Link href={`/Chronicles`} className="text-regular">
                    Chronicles
                  </Link>
                  <Link
                    href={`https://nlist.inflibnet.ac.in/`}
                    target="_blank"
                    className="text-regular"
                  >
                    N-List
                  </Link>
                  <Link href={`/news`} className="text-regular">
                    Newsletter
                  </Link>
                 
                  <Link href={`/news`} className="text-regular">
                    DAVV
                  </Link>
                  <Link href={`/careers`} className="text-regular">
                    Careers
                  </Link>
                </div>
              </div>

              <div className={`${style["footerNavLink"]} ${style["info_dtn"]}`}>
                <h6 className="heading-6">Information</h6>
                <div className={style["List"]}>
                  <Link href={`#`} className="text-regular">
                    <Image src={Location} alt="" width={24} height={24} />
                    <span>
                      7/1, Boundary Road, Lalaram Nagar, Indore, Madhya Pradesh
                      - 452001.
                    </span>
                  </Link>
                  <Link href={`#`} className="text-regular">
                    <Image src={Email} alt="" width={24} height={24} />
                    +91 731 2499911, 2490114
                  </Link>
                  <Link href={`#`} className="text-regular">
                    <Image src={Contact} alt="" width={24} height={24} />
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
