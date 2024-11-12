import { useEffect, useState } from "react";
import PageContent from "@/components/comman/PageContent";

import Banner from "@/components/banner";
import Head from "next/head";

import bannerImg from "/public/assets/images/college-banner.png";
import Logo from "/public/assets/images/logo.png";

import Accordion from "@/components/comman/Accordion";
import TabNavigation from "@/components/comman/TabNavigation";
import Features from "@/components/liberary/Features";

const InstitutionalValuesandSocialResponsibilities = () => {
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
        heading={"Institutional Values and Social Responsibilities"}
      />
      <PageContent
        sectionGap={"both"}
        title={"Promotion of Gender Equity"}
        content={
          <>
            <Features
              SectionImage={Logo}
              descriptionClass="about_message"
              content={renderIframe("sample.pdf")}
            />
            <Features
              SectionImage={Logo}
              descriptionClass="about_message"
              leftImage={true}
              content={renderIframe("sample.pdf")}
            />
          </>
        }
      />
       <PageContent
        sectionGap={"bottom"}
        title={"Waste Management"}
        content={
          <>
            <Features
              SectionImage={Logo}
              descriptionClass="about_message"
              content={renderIframe("sample.pdf")}
            />
            <Features
              SectionImage={Logo}
              descriptionClass="about_message"
              leftImage={true}
              content={renderIframe("sample.pdf")}
            />
          </>
        }
      />
     <Features
          sectionGap="bottom"
          SectionImage={Logo}
          descriptionClass="about_message"
          title={'Water Conservation'}
          content={
            <>
           <PageContent content={renderIframe('sample.pdf')} />
            </>
          }
        />
         <Features
          sectionGap="bottom"
          SectionImage={Logo}
          leftImage={true}
          descriptionClass="about_message"
          title={'Green Campus Initiatives'}
          content={
            <>
           <PageContent content={renderIframe('sample.pdf')} />
            </>
          }
        />
           <Features
          sectionGap="bottom"
          SectionImage={Logo}
          descriptionClass="about_message"
          title={'Quality Audits'}
          content={
            <>
           <PageContent content={renderIframe('sample.pdf')} />
            </>
          }
        />
         <Features
          sectionGap="bottom"
          SectionImage={Logo}
          leftImage={true}
          descriptionClass="about_message"
          title={'Facilities for Disabled'}
          content={
            <>
           <PageContent content={renderIframe('sample.pdf')} />
            </>
          }
        />
   <PageContent
        sectionGap={"bottom"}
        title={"Facilities for Disabled"}
        content={
          <>
            <Features
              SectionImage={Logo}
              descriptionClass="about_message"
              content={renderIframe("sample.pdf")}
            />
            <Features
              SectionImage={Logo}
              descriptionClass="about_message"
              leftImage={true}
              content={renderIframe("sample.pdf")}
            />
          </>
        }
      />
      <PageContent
        sectionGap={"bottom"}
        title={"Inclusive Environment"}
        content={
          <>
            <Features
              SectionImage={Logo}
              descriptionClass="about_message"
              content={renderIframe("sample.pdf")}
            />
            <Features
              SectionImage={Logo}
              descriptionClass="about_message"
              leftImage={true}
              content={renderIframe("sample.pdf")}
            />
          </>
        }
      />
       <PageContent
        sectionGap={"bottom"}
        title={"Constitutional Obligations"}
        content={
          <>
            <Features
              SectionImage={Logo}
              descriptionClass="about_message"
              content={renderIframe("sample.pdf")}
            />
            <Features
              SectionImage={Logo}
              descriptionClass="about_message"
              leftImage={true}
              content={renderIframe("sample.pdf")}
            />
          </>
        }
      />
         <Features
          sectionGap="bottom"
          SectionImage={Logo}
          descriptionClass="about_message"
          title={'Celebration of Important Days'}
          content={
            <>
           <PageContent content={renderIframe('sample.pdf')} />
            </>
          }
        />
    </>
  );
};

export default InstitutionalValuesandSocialResponsibilities;
