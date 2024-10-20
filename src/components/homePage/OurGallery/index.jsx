import React from "react";
import style from "./style.module.scss";
import SectionHeading from "../../comman/sectionHeading";
import gallery1 from "/public/assets/images/gallery1.jpeg";
import gallery2 from "/public/assets/images/gallery2.jpeg";
import gallery3 from "/public/assets/images/gallery3.jpeg";
import gallery4 from "/public/assets/images/gallery4.jpeg";
import gallery5 from "/public/assets/images/gallery5.jpeg";
import Image from "next/image";
import Link from "next/link";

const OurGallery = ({ sectionGap }) => {
  return (
    <div
      className={`${style["OurGallery_Wrp"]} ${
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
        <SectionHeading title="Our Gallery" />
        <div className={style["carousel"]}>
          <Link href={"/gallery"}>
            <Image
              src={gallery1}
              alt=""
              loading="lazy"
              width={241}
              height={239}
              className={`${style["card_img"]} ${style["item"]}`}
            />
          </Link>
          <Image
            src={gallery2}
            alt=""
            loading="lazy"
            width={241}
            height={361}
            className={`${style["card_img"]} ${style["item"]}`}
          />
          <Image
            src={gallery3}
            alt=""
            loading="lazy"
            width={241}
            height={239}
            className={`${style["card_img"]} ${style["item"]}`}
          />
          <Image
            src={gallery4}
            alt=""
            loading="lazy"
            width={241}
            height={361}
            className={`${style["card_img"]} ${style["item"]}`}
          />
          <Image
            src={gallery5}
            alt=""
            loading="lazy"
            width={241}
            height={239}
            className={`${style["card_img"]} ${style["item"]}`}
          />
        </div>
      </div>
    </div>
  );
};

export default OurGallery;
