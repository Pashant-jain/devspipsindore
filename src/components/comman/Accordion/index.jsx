import React, { useState } from "react";
import style from './style.module.scss';

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className={`${style['accordion_wrp']} accordion-item border-b`}>
      <div
        className={`accordion-header cursor-pointer d-flex justify-content-between align-items-center p-4 bg-gray-100 ${style['accordion-header']} ${isOpen && style['open']} `}
        onClick={onClick}
      >
        <span className="font-bold text-lg">{title}</span>
        <span>{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && (
        <div className="accordion-content p-4">
          {content}
        </div>
      )}
    </div>
  );
};

const Accordion = ({ tabsData }) => {
  const tabKeys = Object.keys(tabsData || {}); // Add fallback to empty object
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="accordion">
      {tabKeys.map((tab, index) => (
        <AccordionItem
          key={index}
          title={tab}
          content={tabsData[tab]}
          isOpen={activeIndex === index}
          onClick={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};


export default Accordion;
