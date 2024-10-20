import React from "react";
import style from "./style.module.scss";
import SectionHeading from "@/components/comman/sectionHeading";
import ServicesCard from "@/components/cards/ServicesCard";

const Services = () => {
  return (
    <div className={style["Services_wrp"]}>
      <div className="container">
        <SectionHeading
          descriptionClass={"mt-4"}
          varient="white"
          className={"text-white"}
          title={"Library Services and Facilities"}
          description={
            "Phasellus interdum sagittis magna. Donec varius ultricies diam sed lacinia. Mauris porttitor. quis risus eget mattis Ut auctor."
          }
        />
        <div className={style["services_list"]}>
          <ServicesCard />
          <ServicesCard />
          <ServicesCard />
          <ServicesCard />
        </div>
      </div>
    </div>
  );
};

export default Services;
