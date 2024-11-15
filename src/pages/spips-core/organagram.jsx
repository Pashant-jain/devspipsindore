import Head from "next/head";
import React, { useEffect, useState } from "react";
import Features from "@/components/liberary/Features";
import SectionImage from "/public/assets/images/Director.png";
import PageContent from "@/components/comman/PageContent";
import bannerImg from "/public/assets/images/college-banner.png";
import OrganagramImg from "/public/assets/images/organagram.png";

import Banner from "@/components/banner";
import Image from "next/image";


const Organagram = () => {
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
          heading="Organagram"
          Contact={true}
          // description="Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam."
        />

     

       
        <PageContent
          sectionGap="both"
          className="bg_white"
          
          title="Registration form - Alumini Association"
          content={
            <>
            <div className="d-flex justify-content-center" >
           <Image src={OrganagramImg.src} alt=""   width={600} height={600} />
            </div>
           
            </>
          }
        />
        
      </main>
    </>
  );
};

export default Organagram;
