import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Banner from "@/components/banner";
import TabNavigation from "@/components/comman/TabNavigation";

import bannerImg from "/public/assets/images/college-banner.png";
import PageContent from "@/components/comman/PageContent";
import Accordion from "@/components/comman/Accordion";

const Policies = () => {
  const [currentDomain, setCurrentDomain] = useState("");

  useEffect(() => {
    // Ensure we are in the client-side environment
    if (typeof window !== "undefined") {
      setCurrentDomain(window.location.origin); // Get the full origin (domain + protocol)
    }
  }, []);

  // Function to render the iframe
  const renderIframe = (fileName) => {
    if (!currentDomain || !fileName) return null;
    return (
      <div className="d-flex justify-content-center">
        <iframe
          src={`https://docs.google.com/viewerng/viewer?url=${currentDomain}/assets/documents/policies/${fileName}&embedded=true`}
          style={{ width: "640px", height: "800px" }}
          allowFullScreen
          title={fileName}
        />
      </div>
    );
  };

  // Tabs Data
  const tabsData = {
    "Green Policy": <></>,
    "Water Conservation Policy": <></>,
    "Energy Policy": <></>,
    "Disabled Friendly Policy": <></>,
    "Anti-ragging Policy": (
      <PageContent content={renderIframe("Anti-Ragging-Policy.pdf")} />
    ),
    "Admission Policy": <></>,
    "Anti Sexual Harassment Policy": <></>,
  };

  return (
    <>
      <Head>
        <title>Policies - SPIPS</title>
      </Head>
      <Banner
        isFrontBanner={false}
        bannerImg={bannerImg}
        heading={"Policies"}
      />
      <div className="spacing_both">
        <div className="container">
        <Accordion tabsData={tabsData} />
        </div>
      </div>
    </>
  );
};

export default Policies;
