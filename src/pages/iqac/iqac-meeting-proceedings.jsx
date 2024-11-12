import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Banner from "@/components/banner";
import Accordion from "@/components/comman/Accordion";
import TabNavigation from "@/components/comman/TabNavigation";

import bannerImg from "/public/assets/images/college-banner.png";
import PageContent from "@/components/comman/PageContent";




const InstitutionalDistinctiveness = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentDomain, setCurrentDomain] = useState("");
  
  useEffect(() => {
    // Ensure we are in the client-side environment
    if (typeof window !== "undefined") {
      setCurrentDomain(window.location.origin); // Get the full origin (domain + protocol)
    }
  }, []);

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
   const renderIframe = (fileName) => {
    if (!currentDomain || !fileName) return null;
    return (
      <div className="d-flex justify-content-center">
        <iframe
          src={`https://docs.google.com/viewerng/viewer?url=${currentDomain}/assets/documents/IQAC/meeting-proceedings/${fileName}&embedded=true`}
          style={{ width: "640px", height: "800px" }}
          allowFullScreen
          title={fileName}
        />
      </div>
    );
  };

  // Tabs Data
const tabsData = {
    "Meeting Proceedings (Academic Year 22-23)": (
        <PageContent content={renderIframe('sample.pdf')} />
  ),
    "Meeting Proceedings (Academic Year 22-22)":  <PageContent content={renderIframe('IQAC-MEETING-2022.pdf')} />,
    "Meeting Proceedings (Academic Year 20-21)":  <PageContent content={renderIframe('IQAC-MEETING-2021.pdf')} />,
    "Meeting Proceedings (Academic Year 19-20)":  <PageContent content={renderIframe('IQAC-MEETING-2019.pdf')} />,
    "Meeting Proceedings (Academic Year 18-19)":  <PageContent content={renderIframe('IQAC-MEETING-2018.pdf')} />,
    "Meeting Proceedings (Academic Year 17-18)":  <PageContent content={renderIframe('IQAC-MEETING-2017.pdf')} />,
    "Meeting Proceedings (Academic Year 16-17)":  <PageContent content={renderIframe('IQAC-MEETING-2016.pdf')} />,
  };

  return (
    <>
      <Head>
        <title>INSTITUTIONAL DISTINCTIVENESS - SPIPS</title>
      </Head>
      <Banner
        isFrontBanner={false}
        bannerImg={bannerImg}
        heading={"INSTITUTIONAL DISTINCTIVENESS"}
      />
      <div className="spacing_both">

       
        <div className="container">
        <h2 className="heading-5 mb-5 text-center" >The members of the IQAC are committed to ensuring the overall development of our students as well as the faculty members that strengthens our institution from within. The duty of the cell binds it to ensure that it’s vision is met and the untiring efforts of the members completes the circle of quality assurance.</h2>
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
