import Banner from "@/components/banner";
import Head from "next/head";
import React from "react";

import Features from "@/components/liberary/Features";
import PrayerRoom from "/public/assets/images/Prayer-Room.jpg";
import bannerImg from "/public/assets/images/college-banner.png";


const SportsFacility = () => {
 
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
        <Banner
          bannerImg={bannerImg}
          heading="Sports Facility"
          Contact={true}
        />

        <Features
          sectionGap="both"
          SectionImage={PrayerRoom}
          descriptionClass="about_message"
          title={"Indoor Sports"}
          content={
            <>
            Indoor sports offer a fantastic opportunity to stay active and have fun, regardless of the weather. From carroms to badminton and table tennis to chess, there’s a wide variety of options. These activities provide physical benefits, promote social interaction, and improve coordination. Whether you’re a seasoned athlete or just starting out, indoor sports are a great way to enhance your overall well-being..
            </>
          }
        />
        <Features
          sectionGap="both"
          SectionImage={PrayerRoom}
          descriptionClass="about_message"
          leftImage={true}
          className={"bg_white"}
          title={"Outdoor Sports"}
          content={
            <>
           Outdoor sports offer a multitude of physical and mental benefits. Turf football ensures a consistent playing surface, while basketball demands agility and precision. Cricket is a strategic game of skill and endurance, while football is a physical and mental challenge. Athletics encompasses various track and field events, fostering strength, speed, and coordination.

            </>
          }
        />
        
      </main>
    </>
  );
};

export default SportsFacility;
