import React from "react";
import style from "./style.module.scss";
import DefaultIcon from "/public/assets/icons/Database.svg";
import Image from "next/image";

const ServicesCard = ({title,description,icon}) => {
  return (
    <div className={style["ServicesCard"]}>
      <div className={style["icon"]}>
        <Image src={Icon || DefaultIcon} alt="" width={36} height={36} loading="lazy" />
      </div>
      <div className={style["content"]}>
        <h3 className="heading-5">{title}</h3>
        <p className="text-regular">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServicesCard;
