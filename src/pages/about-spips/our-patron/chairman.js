import Banner from "@/components/banner";
import Head from "next/head";
import React from "react";

import BishopSign from "/public/assets/images/Bishop-sign.png";
import Features from "@/components/liberary/Features";
import SectionImage from "/public/assets/images/Bishop_Thoman.jpeg";
import bannerImg from "/public/assets/images/college-banner.png";

import Image from "next/image";


const Chairman = () => {
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
          heading="Chairman"
        />

        <Features
          sectionGap="both"
          SectionImage={SectionImage}
          descriptionClass="about_message"
          className="bg_white"
          title={'About The Chairman'}
          content={
            <p className="small-text">
              Bishop Thomas Mathew Kuttimackal is the current Bishop of Indore, India. Born on February 25, 1962, in Kalloorkad, Kerala, in the Diocese of Kothamangalam, he was ordained a priest on November 25, 1987, for the Diocese of Indore. Pope Francis appointed him as the Bishop of Indore on February 17, 2024, and he was ordained as bishop on April 5, 2024.
<br/><br/>
Throughout his ecclesiastical journey, Bishop Kuttimackal has held various positions, including assistant parish priest at Indore Cathedral, vice-principal and principal of St. Paul School Indore, rector of Jhabua and Dewas Minor Seminaries, and parish priest in Dewas and Indore. His dedication to the church and his extensive experience in education and parish work have been instrumental in his leadership roles
            </p>
          }
        />
      
        <div></div>
      </main>
    </>
  );
};

export default Chairman;
