import Banner from "@/components/banner";
import Head from "next/head";
import React, { useEffect, useState } from "react";

import BishopSign from "/public/assets/images/Bishop-sign.png";
import Features from "@/components/liberary/Features";
import SectionImage from "/public/assets/images/Bishop_Thoman.jpeg";
import bannerImg from "/public/assets/images/liberary-banner.png";

import Image from "next/image";
import PageContent from "@/components/comman/PageContent";
import PDFFlipBook from "@/components/PDFFlipBook";


const Journals = () => {
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

<PDFFlipBook pdfUrl={'https://spipsindore.com/wp-content/uploads/2024/03/Newsletter-February-27022024.pdf'} />

        <div></div>
      </main>
    </>
  );
};

export default Journals;
