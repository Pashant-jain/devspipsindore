import { useEffect, useState } from "react";
import PageContent from "@/components/comman/PageContent";

import Banner from "@/components/banner";
import Head from "next/head";

import bannerImg from "/public/assets/images/college-banner.png";
import Logo from "/public/assets/images/logo.png";

import Accordion from "@/components/comman/Accordion";
import TabNavigation from "@/components/comman/TabNavigation";
import Features from "@/components/liberary/Features";


const ExtensionActivities = () => {
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
              src={`https://docs.google.com/viewerng/viewer?url=${currentDomain}/assets/documents/NACC2023/${fileName}&embedded=true`}
              style={{ width: "640px", height: "800px" }}
              allowFullScreen
              title={fileName}
            />
          </div>
        );
      };
      
    return (
      <>
        <Head>
        <title>
          SPIPS &#8211; St. Paul Institute of Professional Studies, Indore
        </title>
        <meta
          name="description"
          content="SPIPS - St. Paul Institute of Professional Studies, Indore: A premier educational institution offering top-tier programs in management, commerce, science, and arts. Empowering students with academic excellence, holistic development, and career-oriented learning in a dynamic and inclusive environment."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Banner
          isFrontBanner={false}
          bannerImg={bannerImg}
          heading={"Extension Activities"}
        />
         <Features
          sectionGap="both"
          SectionImage={Logo}
          descriptionClass="about_message"
          className="bg_white"
          title={'Extension Activities in Neighborhood Community'}
          content={
            <>
           <PageContent content={renderIframe('sample.pdf')} />
            </>
          }
        />
      </>
    );
  };
  
  export default ExtensionActivities;
  