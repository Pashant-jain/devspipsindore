import React from "react";
import style from "./style.module.scss";
import SectionHeading from "../sectionHeading";

const PDFViewer = ({ sectionGap, title, description, Source }) => {
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
        {Source && (
          <div className={style["list_wrp"]}>
            {/* <PdfViewer url={Source} /> */}
            <iframe
              src={Source}
              style={{ width: "100%", height: "100vh", border: "none" }}
              title="PDF Viewer"
              allow="fullscreen"
              sandbox="allow-scripts allow-same-origin"
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export default PDFViewer;
