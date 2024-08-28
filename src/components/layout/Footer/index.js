import React from "react";
import { Container } from "react-bootstrap";
import style from "./style.module.scss";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
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
              Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam
              mauris sed ma
            </p>
          </div>
          <div className={style["footerNavLinkWrp"]}>
            <div className={style["footerNavLink"]} >
                <h6 className="heading-6" >About us</h6>
                <div className={style['List']} >
                    <Link href={`#`} className='text-regular' >Mission</Link>
                    <Link href={`#`} className='text-regular' >Our team</Link>
                    <Link href={`#`} className='text-regular' >Awards</Link>
                    <Link href={`#`} className='text-regular' >Testimonials</Link>
                    <Link href={`#`} className='text-regular' >Privacy policy</Link>
                </div>
            </div>
            <div className={style["footerNavLink"]} >
                <h6 className="heading-6" >About us</h6>
                <div className={style['List']} >
                    <Link href={`#`} className='text-regular' >Mission</Link>
                    <Link href={`#`} className='text-regular' >Our team</Link>
                    <Link href={`#`} className='text-regular' >Awards</Link>
                    <Link href={`#`} className='text-regular' >Testimonials</Link>
                    <Link href={`#`} className='text-regular' >Privacy policy</Link>
                </div>
            </div>
            <div className={style["footerNavLink"]} >
                <h6 className="heading-6" >About us</h6>
                <div className={style['List']} >
                    <Link href={`#`} className='text-regular' >Mission</Link>
                    <Link href={`#`} className='text-regular' >Our team</Link>
                    <Link href={`#`} className='text-regular' >Awards</Link>
                    <Link href={`#`} className='text-regular' >Testimonials</Link>
                    <Link href={`#`} className='text-regular' >Privacy policy</Link>
                </div>
            </div>
            <div className={style["footerNavLink"]} >
                <h6 className="heading-6" >About us</h6>
                <div className={style['List']} >
                    <Link href={`#`} className='text-regular' >Mission</Link>
                    <Link href={`#`} className='text-regular' >Our team</Link>
                    <Link href={`#`} className='text-regular' >Awards</Link>
                    <Link href={`#`} className='text-regular' >Testimonials</Link>
                    <Link href={`#`} className='text-regular' >Privacy policy</Link>
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
  );
};

export default Footer;
