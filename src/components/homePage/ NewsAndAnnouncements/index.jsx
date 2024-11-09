import React from "react";
import style from "./style.module.scss";
import SectionHeading from "../../comman/sectionHeading";
import AnnouncementsCard from "@/components/cards/AnnouncementsCard";
import Slider from "react-slick";
import { latestAnnouncements } from "@/data";

const NewsAndAnnouncements = ({ sectionGap }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default for large screens
    slidesToScroll: 1,
    autoplay: false,
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
    <div
      className={`${style["NewsAndAnnouncements_Wrp"]} ${
        sectionGap === "top"
          ? "spacing_top"
          : sectionGap === "bottom"
          ? "spacing_bottom"
          : sectionGap === "both"
          ? "spacing_both"
          : ""
      }`}
    >
      <div className="container">
        <SectionHeading
          title="Announcements and News"
          description={
            <>
              Lorem ipsum dolor sit amet consectetur adipiscing elitdolor mattis
              sit phasellus mollis sit <br />
              aliquam sit nullam neques.
            </>
          }
        />
        <div className={`Announcements_list ${style["Announcements_list"]}`}>
          <Slider {...settings}>
            {latestAnnouncements?.map((item, index) => (
              <div key={index}>
                <AnnouncementsCard
                  AnnouncementType={item?.AnnouncementType}
                  date={item?.date}
                  month={item?.month}
                  title={item?.title}
                  link={item?.link}
                  target={item?.target}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default NewsAndAnnouncements;
