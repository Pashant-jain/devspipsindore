import React, { useEffect, useState } from "react";
import Banner from "@/components/banner";
import Head from "next/head";

import NaacCertificate from "/public/assets/documents/NACC2023/naac-certificate.png";
import bannerImg from "/public/assets/images/college-banner.png";

import Image from "next/image";
import { aboutSpipsData } from "@/config";
import Testimonials from "@/components/comman/testimonials";
import PageContent from "@/components/comman/PageContent";

const AboutSpips = () => {
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
      <main>
        <Banner bannerImg={bannerImg} heading="Self Study Report – Cycle 1" />
        <PageContent
          sectionGap="both"
          content={
            <>
            <div className="d-flex justify-content-center" >
            <iframe
        src={`https://docs.google.com/viewerng/viewer?url=${currentDomain}/assets/documents/NACC2023/Self-Study-Report-Cycle-1.pdf&embedded=true`}
        style={{ width: "640px", height: "800px" }}
        allowFullScreen
        title="Strategic Plan PDF Viewer"
      />

      
            </div>
           
            </>
          }
        />
             </main>
    </>
  );
};

export default AboutSpips;
