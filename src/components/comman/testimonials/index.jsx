
// style imports
import style from "./style.module.scss";

// component imports
import SectionHeading from "../sectionHeading";
import Slider from "react-slick";
import TestimonialsCard from "@/components/cards/TestimonialsCard";

import Image from "next/image";

const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Default for large screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    adaptiveHeight: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // For tablets or medium screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768, // For small screens or mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480, // Extra small devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <>
      <Image
        src={"/assets/images/testimonial-bg-wave-top.png"}
        alt=""
        loading="lazy"
        width={800}
        height={116}
        className={style["bgImage"]}
      />
      <div className={style["testmonials_wrp"]}>
        <div className="container">
          <SectionHeading title="Our Alumini" />
          <div className={style["testimonial_list"]}>
            <Slider {...settings}>
              <TestimonialsCard />
              <TestimonialsCard />
            </Slider>
          </div>
        </div>
      </div>
      <Image
        src={"/assets/images/testimonial-bg-wave-bottom.png"}
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
