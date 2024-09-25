import React from "react";
import style from "./style.module.scss";
import SectionHeading from "../sectionHeading";
import bgTop from "/public/assets/images/testimonial-bg-wave-top.png";
import bgBottom from "/public/assets/images/testimonial-bg-wave-bottom.png";
import Image from "next/image";
import TestimonialsCard from "@/components/cards/TestimonialsCard";

const Testimonials = () => {
  return (
    <>
      <Image
        src={bgTop}
        alt=""
        loading="lazy"
        width={800}
        height={116}
        className={style["bgImage"]}
      />
      <div className={style["testmonials_wrp"]}>
        <div className="container">
          <SectionHeading title="Meet Our Team" />
          <div className={style['testimonial_list']} >
         <TestimonialsCard/>
         <TestimonialsCard/>
          </div>
        </div>
      </div>
      <Image
        src={bgBottom}
        alt=""
        loading="lazy"
        width={800}
        height={116}
        className={style["bgImage"]}
      />
    </>
  );
};

export default Testimonials;
