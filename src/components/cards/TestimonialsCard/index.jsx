import React from "react";
import style from "./style.module.scss";
import cardImg from "/public/assets/images/testimonial.jpeg";
import Image from "next/image";
import Link from "next/link";
const TestimonialsCard = ({title,role,cardImage,description,link}) => {
  return (
    <div className={`${style["TestimonialsCard"]} w-100 `}>
      <div className={style["persnol_del"]}>
        <Link href={link ? link : ''}>
        {cardImage &&
         <Image
         src={cardImage}
         alt=""
         loading="lazy"
         width={160}
         height={160}
         className={style["card_img"]}
       />
        }
         
        </Link>
        <div>
          <Link href={link ? link : ''}>
            <h5 className="heading-5">{title}</h5>
          </Link>
          {role &&
          <p className="small-text">{role}</p>

          }
        </div>
      </div>
      {/* <p className="text-regular">
       {description}
      </p> */}
    </div>
  );
};

export default TestimonialsCard;
