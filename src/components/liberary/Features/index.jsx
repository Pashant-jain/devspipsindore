import React from "react";
import style from "./style.module.scss";
import Image from "next/image";
import SectionHeading from "@/components/comman/sectionHeading";

const Features = ({ sectionGap,SectionImage }) => {
  return (
    <div
      className={`${style["features_wrp"]} ${
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
        <div className={style["features_inner"]}>
          <div className={style["features_lft"]}>
            <SectionHeading
              className="text-start"
              descriptionClass="mt-5"
              title="Features"
              content={
                <>
                  <ul>
                    <li>
                      {" "}
                      Quisque nulla at ut turpis lobortis. Integer adipiscing
                      urna pulvinar eleifend metus et amet et elit. Elementum
                      suspendisse sit varius ut purus ipsum semper sit.{" "}
                    </li>
                    <br />
                    <li>
                      Integer nunc vel praesent viverra velit pellentesque
                      vulputate semper. Nunc commodo integer fermentum tincidunt
                      ut.
                    </li>
                    <br />
                    <li>
                      Duis scelerisque donec sit mi nibh. Mauris neque sed diam
                      elit. Sit vulputate adipiscing condimentum massa velit
                      sed.
                    </li>
                    <br />
                    <li>
                      Egestas in integer consequat sodales bibendum diam purus
                      nunc. Velit non rhoncus sit hac habitasse orci.
                    </li>
                    <br />
                    <li>
                      Gravida magna velit porttitor varius arcu nunc enim.
                      Ornare cras sed mauris vel. Scelerisque a aliquam
                      suspendisse nunc nunc aliquam auctor placerat massa.
                    </li>
                    <li>
                      Suscipit in facilisis in id amet non urna commodo. Auctor
                      leo enim eu viverra tristique volutpat facilisis ipsum
                      egestas.
                    </li>
                    <br />
                    <li>
                      Suscipit in facilisis in id amet non urna commodo. Auctor
                      leo enim eu viverra tristique volutpat facilisis ipsum
                      egestas.
                    </li>
                    <br />
                  </ul>
                </>
              }
            />
          </div>
          <div className={style["features_right"]}>
            <Image
              src={SectionImage}
              alt=""
              width={600}
              height={608}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
