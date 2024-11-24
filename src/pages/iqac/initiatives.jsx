import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Banner from "@/components/banner";
import TabNavigation from "@/components/comman/TabNavigation";

import bannerImg from "/public/assets/images/college-banner.png";
import { Accordion } from "react-bootstrap";

// Initiatives Data



const initiatives2021To22 = {
    "Key initiatives taken by IQAC in the Academic Year 2021-22": (
        <><ul>
        <li>Started professional course. MBA at post graduate level.</li>
        <li>Practical Exams duly conducted complying with the New Education Policy.</li>
      </ul></>
  ),
    "Key initiatives taken by IQAC in the Academic Year 2020-21": <p>Content for 2020-21</p>,
    "Key initiatives taken by IQAC in the Academic Year 2019-20": <p>Content for 2019-20</p>,
    "Key initiatives taken by IQAC in the Academic Year 2018-19": <p>Content for 2018-19</p>,
    "Key initiatives taken by IQAC in the Academic Year 2017-18": <p>Content for 2017-18</p>,
    "Key initiatives taken by IQAC in the Academic Year 2016-17": <p>Content for 2016-17</p>,
  };



const InstitutionalDistinctiveness = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Update the screen size state based on window width
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check on mount

    return () => window.removeEventListener("resize", handleResize);
  }, []);

     // Function to render the iframe
     const RenderAccordion = ({ contantData }) => {
      if (!contantData) return null;
      return (
        <Accordion>{contantData}</Accordion> // Use Accordion instead of Accordian
      );
    };
    
      

  // Tabs Data
const tabsData = {
    "Key initiatives taken by IQAC in the Academic Year 2021-22": (
      RenderAccordion(initiatives2021To22)
  ),
    "Key initiatives taken by IQAC in the Academic Year 2020-21": <p>Content for 2020-21</p>,
    "Key initiatives taken by IQAC in the Academic Year 2019-20": <p>Content for 2019-20</p>,
    "Key initiatives taken by IQAC in the Academic Year 2018-19": <p>Content for 2018-19</p>,
    "Key initiatives taken by IQAC in the Academic Year 2017-18": <p>Content for 2017-18</p>,
    "Key initiatives taken by IQAC in the Academic Year 2016-17": <p>Content for 2016-17</p>,
  };

  return (
    <>
      <Head>
        <title>INSTITUTIONAL DISTINCTIVENESS - SPIPS</title>
      </Head>
      <Banner
        isFrontBanner={false}
        bannerImg={bannerImg}
        heading={"IQAC Initiatives"}
        Contact={true}
      />
      <div className="spacing_both">
        <div className="container">
          {isMobile ? (
            <Accordion content={tabsData} />
          ) : (
            <TabNavigation tabsData={tabsData} />
          )}
        </div>
      </div>
    </>
  );
};

export default InstitutionalDistinctiveness;
