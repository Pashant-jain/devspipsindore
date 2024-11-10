import React, { useState, useEffect } from "react";
import style from "./style.module.scss";
import SectionHeading from "../../comman/sectionHeading";
import { Tab, Tabs } from "react-bootstrap";

const FeaturedCourses = ({ sectionGap, content = [] }) => {
  // Set initial key to the first tab's eventKey
  const [key, setKey] = useState(content.length > 0 ? content[0].key : "");

  useEffect(() => {
    // Update key if content changes
    if (content.length > 0 && !key) {
      setKey(content[0].key);
    }
  }, [content]);

  // TabContent component to render the content dynamically
  const TabContent = ({ tabContent }) => (
    <div className={style["FeaturedCourses_list"]}>{tabContent}</div>
  );

  return (
    <div
      className={`${style["FeaturedCourses"]} ${
        sectionGap === "top"
          ? "spacing_top"
          : sectionGap === "bottom"
          ? "spacing_bottom"
          : sectionGap === "both"
          ? "spacing_both"
          : ""
      } `}
    >
      <div className="flex flex-col gap-5 container">
        <SectionHeading title="Explore Featured Courses" className="mb-5" />
        <div className={`FeaturedCourses_list_wrp text-center ${style["FeaturedCourses_inner"]}`}>
          {content.length > 0 ? (
            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="mb-3"
            >
              {content.map((tab) => (
                <Tab eventKey={tab.key} title={tab.title} key={tab.key}>
                  <TabContent tabContent={tab.content} />
                </Tab>
              ))}
            </Tabs>
          ) : (
            <p>No content available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCourses;
