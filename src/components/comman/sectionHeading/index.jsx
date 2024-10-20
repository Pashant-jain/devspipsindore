import React from "react";
import style from "./style.module.scss";

const SectionHeading = ({
  title,
  description,
  content,
  className,
  descriptionClass,
  varient,
}) => {
  return (
    <div
      className={`${style["SectionHeading"]} ${
        varient == "white" && style["text-white"]
      } ${className}`}
    >
      <h2 className="heading-2">{title}</h2>
      {description && (
        <p className={`text-regular ${style["content"]} ${descriptionClass}`}>
          {description}
        </p>
      )}
      {content && (
        <div className={`text-regular ${style["content"]} ${descriptionClass}`}>
          {content}
        </div>
      )}
    </div>
  );
};

export default SectionHeading;
