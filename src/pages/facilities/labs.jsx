import Banner from "@/components/banner";
import Head from "next/head";
import React from "react";

import Features from "@/components/liberary/Features";
import PrayerRoom from "/public/assets/images/Prayer-Room.jpg";
import bannerImg from "/public/assets/images/college-banner.png";


const Labs = () => {
 
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
          heading="Labs"
          Contact={true}
        />

        <Features
          sectionGap="both"
          SectionImage={PrayerRoom}
          descriptionClass="about_message"
          title={"PHYSICS LAB"}
          content={
            <>
              The beautifully designed Prayer Room in the Campus reminds
              everyone of God. It invites everyone to feel the presence of God
              and to experience serenity and joy.
            </>
          }
        />
        <Features
          sectionGap="both"
          SectionImage={PrayerRoom}
          descriptionClass="about_message"
          leftImage={true}
          className={"bg_white"}
          title={"COMPUTER LAB"}
          content={
            <>
            The College has two well equipped Computer Labs with modern computing resources to cater to the ever growing technological needs.
<br/><br/>
The Computer Labs have state-of-the-art equipment relating to various subjects of computer science and information technology.
<br/><br/>
There are 110 computers in the laboratories with the latest configuration. The student computer ratio is 1:1.
<br/><br/>
The department regularly updates its labs with the most modern laboratory facilities. Besides these, the Lab is also furnished with LCD projectors.
<br/><br/>
To facilitate an uninterrupted power supply, the technological infrastructure at SPIPS has a backup of 10 KVA UPS.
<br/><br/>
300 mbps internet is available in the computer labs providing ample opportunity & access to each student to online reference material.


            </>
          }
        />

        <Features
          sectionGap="both"
          SectionImage={PrayerRoom}
          descriptionClass="about_message"
          title={"LANGUAGE LAB"}
          content={
            <>
            “Language is the armory of the human mind, and at once contains the trophies of its past and the weapons of its future conquests.” – S. T. Coleridge
<br/><br/>
We have a fully equipped language lab consisting of 15 personal computers with Genuine License Software along with audio visual facility to enhance the vocabulary, phonetics, English speaking and communication skills of the students.
            </>
          }
        />
    
        
      </main>
    </>
  );
};

export default Labs;
