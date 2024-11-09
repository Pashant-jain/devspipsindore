import React, { useState, useEffect, useRef } from "react";
import style from "./style.module.scss";
import SectionHeading from "@/components/comman/sectionHeading";
import { Stats } from "@/data";

// Helper function to animate counting numbers
const animateValue = (start, end, duration, setStatValue) => {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    setStatValue(Math.floor(progress * (end - start) + start)); // Update the current stat value
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
};

const StatItem = ({ endValue, label }) => {
  const [statValue, setStatValue] = useState(0); // State to hold current stat value
  const statRef = useRef(null); // Reference to the stat element
  const [isVisible, setIsVisible] = useState(false); // State to track visibility

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true); // Set visibility to true when in viewport
          observer.disconnect(); // Stop observing after the animation starts
        }
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    if (statRef.current) {
      observer.observe(statRef.current);
    }

    return () => {
      if (statRef.current) {
        observer.unobserve(statRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      animateValue(0, endValue, 2000, setStatValue); // Animate from 0 to endValue over 2 seconds
    }
  }, [endValue, isVisible]);

  return (
    <div className={style["stats"]} ref={statRef}>
      <strong className="heading-2">{statValue}+</strong>
      <span className="text-regular">{label}</span>
    </div>
  );
};

const OurStats = ({ sectionGap }) => {
  return (
    <div
      className={`${style["our_stats_wrp"]} ${
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
        <SectionHeading title="Our Stats" />
        <div className={style["stats_list"]}>
          {Stats?.map((item, index) => (
            <React.Fragment key={index}>
              <StatItem endValue={item.number} label={item.title} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurStats;
