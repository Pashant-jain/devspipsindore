import React from "react";
import style from "./style.module.scss";
import Image from "next/image";
import SectionHeading from "@/components/comman/sectionHeading";
import ReactImageGallery from "react-image-gallery";


const Features = ({
  sectionGap,
  SectionImage,
  content,
  title,
  leftImage,
  descriptionClass,
  className,
  imageSlider,
}) => {
  
  return (
    <div
      className={`${style["features_wrp"]} ${className} ${
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
        <div
          className={`${style["features_inner"]} ${
            leftImage && style["feature_reverse"]
          }`}
        >
          <div className={style["features_lft"]}>
            <SectionHeading
              className="text-start"
              descriptionClass={`${descriptionClass} mt-5`}
              title={title}
              content={content}
            />
          </div>
          <div className={style["features_right"]}>
            {imageSlider ? 
           <ReactImageGallery items={imageSlider} />
          :
          
          
            <Image
              src={SectionImage}
              alt=""
              width={600}
              height={608}
              loading="lazy"
            />
          }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
