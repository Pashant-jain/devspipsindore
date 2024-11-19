import Banner from "@/components/banner";
import Head from "next/head";
import React, { useEffect, useState } from "react";

import BishopSign from "/public/assets/images/Bishop-sign.png";
import Features from "@/components/liberary/Features";
import SectionImage from "/public/assets/images/Bishop_Thoman.jpeg";
import bannerImg from "/public/assets/images/liberary-banner.png";

import Image from "next/image";
import PageContent from "@/components/comman/PageContent";


const Projects = () => {
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
      <title>SPIPS &#8211; St. Paul Institute of Professional Studies, Indore</title>
        <meta name="description" content="SPIPS - St. Paul Institute of Professional Studies, Indore: A premier educational institution offering top-tier programs in management, commerce, science, and arts. Empowering students with academic excellence, holistic development, and career-oriented learning in a dynamic and inclusive environment." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Banner
          bannerImg={bannerImg}
          heading="Projects"
          Contact={true}
        />

        <PageContent
          sectionGap="both"
          SectionImage={SectionImage}
          descriptionClass="about_message"
          className="bg_white"
          content={
         <>
            <h3 className="heading-5" >St. Paul Institute of Professional Studies has always encouraged and supported faculty development. Service to the community has always been the primary motivator for the institution’s members, who have undertaken a variety of socioeconomic development projects.</h3>
<br/><br/>
            <h4 className="heading-6" >Commerce Department</h4>
            <ul>
                <br/><li>Study of Economic Progress of the Bank Loan Beneficiaries under Self-Employment Schemes in Indore District.</li>
                <br/><li>Study of Satisfaction of the Micro Finance Customers in Indore Division.</li>
                <br/><li>मानव पूंजी प्रबंधन का संगठनात्मक कार्य निष्पादन पर प्रभाव </li>
            </ul>
            <br/><br/>
            <h4 className="heading-6" >Management Department</h4>
            <ul>
                <br/><li>To Study the Green Strategies adopted by IMC for Indore City</li>
                <br/><li>To Study the challenges of women entrepreneurs in Indore City in managing work life balance</li>
                <br/><li>To Study the impact of Social Media on Professional Development of Management Students of Indore City</li>
            </ul>
            <br/><br/>
            <h4 className="heading-6" >Humanities Department</h4>
            <ul>
                <br/><li>Employment Skills and Rural Transformation</li>
                <br/><li>Impact of digitalization on well-being of children of working Women</li>
            </ul>
            <br/><br/>
            <h4 className="heading-6" >Science Department</h4>
            <ul>
                <br/><li>Betterment for current solid waste management by applying improved technologies</li>
                <br/><li>Best Usage of Water in Industrial Sectors.</li>
            </ul>
            <br/><br/>
            <h4 className="heading-6" >Computer Science Department</h4>
            <ul>
                <br/><li>System Design and Implementation of Computerized Diabetes Detection System</li>
                <br/><li>System Analysis and Design for Computerized Employee Management System</li>
                <br/><li>System Design and Implementation of Computerized Canteen Management System</li>
            </ul>
         </>
          }
        />
       <PageContent
          sectionGap="bottom"
          className="bg_white"
          title="In-house Committees"
          content={
            <>
            <div className="d-flex justify-content-center" >
            <iframe
        src={`https://docs.google.com/viewerng/viewer?url=${currentDomain}/assets/documents/Research-Proposal-Documents.pdf&embedded=true`}
        style={{ width: "640px", height: "800px" }}
        allowFullScreen
        title="Statutory Bodies PDF Viewer"
      />

      
            </div>
           
            </>
          }
        />
        <div></div>
      </main>
    </>
  );
};

export default Projects;
