import React from "react";
import style from "./style.module.scss";
import SectionHeading from "../sectionHeading";
import { Table } from "react-bootstrap";

const CommitteeList = ({ title, description, sectionGap,tablehead,tableData }) => {
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
        <SectionHeading title={title} description={description} className={'mb-5'}  />

       <div className={style['table_main']} >
       <div className={style["table_wrp"]}>
  {tablehead && (
    <div className={style["tHead"]}>
      {tablehead.map((item, index) => (
        <div className={style["key"]} key={index}>
          {item.title}
        </div>
      ))}
    </div>
  )}
  
  <div className={style["tbody"]}>
    {tableData.map((row, rowIndex) => (
      <div className={style["row"]} key={rowIndex}>
        {/* Loop through tablehead to ensure proper order of data */}
        {tablehead.map((headItem, headIndex) => (
          <div className={style["key"]} key={headIndex}>
            {row[headItem.key]} {/* Access the value based on the key from tablehead */}
          </div>
        ))}
      </div>
    ))}
  </div>
</div>
       </div>

      </div>
    </div>
  );
};

export default CommitteeList;
