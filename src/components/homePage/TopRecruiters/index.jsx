import React from "react";
import style from "./style.module.scss";
import SectionHeading from "../../comman/sectionHeading";

import Image from "next/image";
import Slider from "react-slick";

const TopRecruiters = ({ sectionGap, title, description, data }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Default for large screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    adaptiveHeight: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // For tablets or medium screens
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768, // For small screens or mobile devices
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480, // Extra small devices
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div
      className={`${style["TopRecruiters_wrp"]} ${
        sectionGap === "top"
          ? "spacing_top"
          : sectionGap === "bottom"
          ? "spacing_bottom"
          : sectionGap === "both"
          ? "spacing_both"
          : ""
      } `}
    >
      <div className="container">
        <SectionHeading title={title} description={description} />
        <div className={style["Recruiters_list"]}>
        <Slider {...settings}>
          {data?.map((item, index) => (
            <div key={index}>
              <Image
                src={item.image}
                alt=""
                loading="lazy"
                width={item?.width || 183}
                height={item?.height || 48}
                className={style["card_img"]}
              />
            </div>
          ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default TopRecruiters;
