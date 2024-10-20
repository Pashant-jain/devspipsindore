import React from "react";
import style from "./style.module.scss";
import Icon from "/public/assets/icons/Database.svg";
import Image from "next/image";

const ServicesCard = () => {
  return (
    <div className={style["ServicesCard"]}>
      <div className={style["icon"]}>
        <Image src={Icon} alt="" width={36} height={36} loading="lazy" />
      </div>
      <div className={style["content"]}>
        <h3 className="heading-5">Access to e-resources</h3>
        <p className="text-regular">
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Nam nec tortor massa. Praesent cursus porttitor
          egestas.
        </p>
      </div>
    </div>
  );
};

export default ServicesCard;
