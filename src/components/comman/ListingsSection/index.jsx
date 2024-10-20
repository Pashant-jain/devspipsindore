import React from "react";
import style from "./style.module.scss";
import SectionHeading from "../sectionHeading";
import Link from "next/link";

const ListingsSection = ({
  title,
  description,
  listTitle,
  listData,
  sectionGap,
}) => {
  return (
    <div
      className={`${style["CommitteeList_wrp"]} ${
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
          title={title}
          description={description}
          className={"mb-5"}
        />
        <div className={style["list_wrp"]}>
          <h3 className="heading-5">{listTitle}</h3>
          <ul>
            {listData?.map((item, index) => (
              <li key={index}>
                <Link
                  className="text-regular"
                  href={item.link}
                  target={item.target}
                  download={item.download}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ListingsSection;
