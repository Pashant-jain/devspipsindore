import Head from "next/head";
import bannerImg from "/public/assets/images/college-banner.jpg";
import Image from "next/image";

import Banner from "@/components/banner";
import Features from "@/components/liberary/Features";
import SectionImage from "/public/assets/images/Director.jpg";
import Logo from "/public/assets/images/logo.png";
import Vision from "/public/assets/images/Vision.png";
import PageContent from "@/components/comman/PageContent";
import { useEffect, useState } from "react";




function StrategicImperativePage() {
  const [currentDomain, setCurrentDomain] = useState("");

  useEffect(() => {
    // Ensure we are in the client-side environment
    if (typeof window !== "undefined") {
      setCurrentDomain(window.location.hostname); // Get the current domain
    }
  }, []);
  return (
    <>
      <Head>
        <title>Motto, Vision and Mission - SPIPS</title>
      </Head>
      <Banner
        // isFrontBanner={false}
        bannerImg={bannerImg}
        heading={"Quality Policy"}
        // description={
        //   "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam."
        // }
      />
      <PageContent
          sectionGap="both"
          className="bg_white"
        //   title="Strategic Plan"
          content={
            <>
            <div className="d-flex justify-content-center" >
            <iframe
        src={`https://docs.google.com/viewerng/viewer?url=${currentDomain}/assets/documents/Quality-Policy.pdf&embedded=true`}
        style={{ width: "640px", height: "800px" }}
        allowFullScreen
        title="Strategic Plan PDF Viewer"
      />

      
            </div>
           
            </>
          }
        />




    </>
  );
}

export default StrategicImperativePage;
