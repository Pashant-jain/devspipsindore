import React from "react";
import style from "./style.module.scss";
import SectionHeading from "../sectionHeading";

const PageContent = ({ sectionGap, title, description, className }) => {
  return (
    <div
      className={`${style["NewsAndAnnouncements_Wrp"]} ${className} ${
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
          descriptionClass={"mt-4 text-start"}
          title={title}
          description={description}
        />
      </div>
    </div>
  );
};

export default PageContent;
