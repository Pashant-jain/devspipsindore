import React from "react";
import style from "./style.module.scss";
import cardImg from "/public/assets/images/testimonial.jpeg";
import Image from "next/image";
import Link from "next/link";
const TestimonialsCard = () => {
  return (
    <div className={`${style["TestimonialsCard"]} w-100 `}>
      <div className={style["persnol_del"]}>
        <Link href={"/our-patron/chairman"}>
          <Image
            src={cardImg}
            alt=""
            loading="lazy"
            width={160}
            height={160}
            className={style["card_img"]}
          />
        </Link>
        <div>
          <Link href={"/our-patron/chairman"}>
            <h5 className="heading-5">Macauley Herring</h5>
          </Link>
          <p className="small-text">CEO & Founder</p>
        </div>
      </div>
      <p className="text-regular">
        Ultrices ante adipiscing pellentesque sed sed diam. Neque vestibulum a
        mi sit vestibulum. Proin iaculis et iaculis ullamcorper. In facilisi
        proin volutpat iaculis.
        <br /> <br /> Sed tellus ipsum vel sem auctor orci sed. Tellus vel neque
        eu sed malesuada est. Tristique vestibulum sed ipsum tellus feugiat arcu
        blandit libero ultrices. Volutpat pellentesque quis viverra volutpat
        cursus faucibus velit praesent feugiat. Rhoncus neque vitae consequat
        ultricies tortor varius neque. Tempor mi dui at in adipiscing elit. Id
        vel fames id mauris. Eget pellentesque senectus sed et. Etiam pulvinar
        lacus aliquet pretium.
      </p>
    </div>
  );
};

export default TestimonialsCard;
