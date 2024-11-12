import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Banner from "@/components/banner";
import Accordion from "@/components/comman/Accordion";
import TabNavigation from "@/components/comman/TabNavigation";

import bannerImg from "/public/assets/images/college-banner.png";
import RuralUpliftmentImage from "/public/assets/images/collage-7-1-1.png";

const tabsData = {
  "Curriculum Delivery": (
    <>
      <PageContent
        sectionGap="both"
        content={
          <>
            <div className="d-flex justify-content-center">
              <iframe
                src={`https://docs.google.com/viewerng/viewer?url=${currentDomain}/assets/documents/NACC2023/AQAR-2022-23.pdf&embedded=true`}
                style={{ width: "640px", height: "800px" }}
                allowFullScreen
                title="AQAR-2022-23"
              />
            </div>
          </>
        }
      />
    </>
  ),
  "Adherence to Academic Calendar": (
    <>
      <PageContent
        sectionGap="both"
        content={
          <>
            <div className="d-flex justify-content-center">
              <iframe
                src={`https://docs.google.com/viewerng/viewer?url=${currentDomain}/assets/documents/NACC2023/AQAR-2022-23.pdf&embedded=true`}
                style={{ width: "640px", height: "800px" }}
                allowFullScreen
                title="AQAR-2022-23"
              />
            </div>
          </>
        }
      />
    </>
  ),
  "Teachers Participation in Curriculum Development": (
    <>
      <PageContent
        sectionGap="both"
        content={
          <>
            <div className="d-flex justify-content-center">
              <iframe
                src={`https://docs.google.com/viewerng/viewer?url=${currentDomain}/assets/documents/NACC2023/AQAR-2022-23.pdf&embedded=true`}
                style={{ width: "640px", height: "800px" }}
                allowFullScreen
                title="AQAR-2022-23"
              />
            </div>
          </>
        }
      />
    </>
  ),
};

const AnnualReport = () => {
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

export default AnnualReport;
