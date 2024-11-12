import { useEffect, useState } from "react";
import PageContent from "@/components/comman/PageContent";

import Banner from "@/components/banner";
import Head from "next/head";

import bannerImg from "/public/assets/images/college-banner.png";
import Accordion from "@/components/comman/Accordion";
import TabNavigation from "@/components/comman/TabNavigation";


const CurricularPlanningAndImplementation = () => {
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
    const renderIframe = () => {
      if (!currentDomain) return null; // Prevent rendering until currentDomain is set
      return (
        <div className="d-flex justify-content-center">
          <iframe
            src={`https://docs.google.com/viewerng/viewer?url=${currentDomain}/assets/documents/NACC2023/AQAR-2022-23.pdf&embedded=true`}
            style={{ width: "640px", height: "800px" }}
            allowFullScreen
            title="AQAR-2022-23"
          />
        </div>
      );
    };
  
    const tabsData = {
      "Curriculum Delivery": <PageContent sectionGap="both" content={renderIframe()} />,
      "Adherence to Academic Calendar": <PageContent sectionGap="both" content={renderIframe()} />,
      "Teachers Participation in Curriculum Development": (
        <PageContent sectionGap="both" content={renderIframe()} />
      ),
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
        <div className={`spacing_both`}>
          <div className="container">
            {isMobile ? (
              <Accordion tabsData={tabsData} />
            ) : (
              <TabNavigation tabsData={tabsData} tabHeadClassName={"p-3"} />
            )}
          </div>
        </div>
      </>
    );
  };
  
  export default CurricularPlanningAndImplementation;
  