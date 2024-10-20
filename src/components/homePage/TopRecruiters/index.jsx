import React from "react";
import style from "./style.module.scss";
import SectionHeading from "../../comman/sectionHeading";

import Image from "next/image";

const TopRecruiters = ({ sectionGap, title, description, data }) => {
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
        </div>
      </div>
    </div>
  );
};

export default TopRecruiters;
