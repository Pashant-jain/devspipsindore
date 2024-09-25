import React from "react";
import style from "./style.module.scss";
import SectionHeading from "../../comman/sectionHeading";
import Recruiter1 from "/public/assets/images/Recruiter1.png";
import Recruiter2 from "/public/assets/images/Recruiter2.png";
import Recruiter3 from "/public/assets/images/Recruiter3.png";
import Recruiter4 from "/public/assets/images/Recruiter4.png";
import Recruiter5 from "/public/assets/images/Recruiter5.png";
import Image from "next/image";


const TopRecruiters = ({ sectionGap }) => {
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
        <SectionHeading
          title="Our Top Recruiters"
          description={
            <>
              Lorem ipsum dolor sit amet consectetur adipiscing elitdolor mattis
              sit phasellus mollis sit <br />
              aliquam sit nullam neques.
            </>
          }
        />
        <div className={style["Recruiters_list"]}>
          <Image
            src={Recruiter1}
            alt=""
            loading="lazy"
            width={183}
            height={48}
            className={style["card_img"]}
          />
          <Image
            src={Recruiter2}
            alt=""
            loading="lazy"
            width={183}
            height={48}
            className={style["card_img"]}
          />
          <Image
            src={Recruiter3}
            alt=""
            loading="lazy"
            width={183}
            height={48}
            className={style["card_img"]}
          />
          <Image
            src={Recruiter4}
            alt=""
            loading="lazy"
            width={183}
            height={48}
            className={style["card_img"]}
          />
          <Image
            src={Recruiter5}
            alt=""
            loading="lazy"
            width={183}
            height={48}
            className={style["card_img"]}
          />
        </div>
      </div>
    </div>
  );
};

export default TopRecruiters;
