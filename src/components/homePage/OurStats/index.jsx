import React from "react";
import style from "./style.module.scss";
import SectionHeading from "@/components/comman/sectionHeading";

const OurStats = ({sectionGap}) => {
  return (
    <div className={`${style["our_stats_wrp"]} ${sectionGap === 'top' ? 'spacing_top' : sectionGap === 'bottom' ? 'spacing_bottom' : sectionGap === 'both' ?'spacing_both' : ''} `}>
      <div className="container">
        <SectionHeading title="Our Stats" />
        <div className={style['stats_list']} >
          <div className={style['stats']} >
          <strong className='heading-2' >124+</strong>
          <span className='.text-regular' >Online Programs</span>
          </div>
          <div className={style['stats']} >
          <strong className='heading-2' >124+</strong>
          <span className='.text-regular' >Online Programs</span>
          </div>
          <div className={style['stats']} >
          <strong className='heading-2' >124+</strong>
          <span className='.text-regular' >Online Programs</span>
          </div>
          <div className={style['stats']} >
          <strong className='heading-2' >124+</strong>
          <span className='.text-regular' >Online Programs</span>
          </div>
          <div className={style['stats']} >
          <strong className='heading-2' >124+</strong>
          <span className='.text-regular' >Online Programs</span>
          </div>
          <div className={style['stats']} >
          <strong className='heading-2' >124+</strong>
          <span className='.text-regular' >Online Programs</span>
          </div>
          
          
        </div>
      </div>
    </div>
  );
};

export default OurStats;
