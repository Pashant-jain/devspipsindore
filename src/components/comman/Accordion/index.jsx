import React, { useState } from "react";
import style from './style.module.scss'

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={` ${style['accordion_wrp']} accordion-item border-b`}>
      <div
        className="accordion-header cursor-pointer flex justify-between items-center p-4 bg-gray-100"
        onClick={toggleAccordion}
      >
        <span className="font-bold text-lg">{title}</span>
        <span>{isOpen ? "-" : "+"}</span>
      </div>
      {isOpen && (
        <div className="accordion-content p-4">
          {content} {/* Directly render the JSX content here */}
        </div>
      )}
    </div>
  );
};


const Accordion = ({ tabsData }) => {
  const tabKeys = Object.keys(tabsData);
  
  return (
    <div className="accordion">
      {tabKeys.map((tab, index) => (
        <AccordionItem key={index} title={tab} content={tabsData[tab]} />
      ))}
    </div>
  );
};

export default Accordion;
