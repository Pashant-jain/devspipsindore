import Banner from "@/components/banner";
import Head from "next/head";
import React from "react";

import BishopSign from "/public/assets/images/Bishop-sign.png";
import Features from "@/components/liberary/Features";
import SectionImage from "/public/assets/images/Bishop_Chacko.jpg";
import bannerImg from "/public/assets/images/college-banner.png";

import Image1 from "/public/assets/images/ppa/PPA1.jpg"
import Image2 from "/public/assets/images/ppa/PPA2.jpg"
import Image3 from "/public/assets/images/ppa/PPA3.jpg"
import Image4 from "/public/assets/images/ppa/PPA4.jpg"
import Image5 from "/public/assets/images/ppa/PPA5.jpg"
import Image6 from "/public/assets/images/ppa/PPA6.png"
import Image7 from "/public/assets/images/ppa/PPA7.jpg"


import Image from "next/image";
import PageContent from "@/components/comman/PageContent";


const PPA = () => {

    const NccImages = [
        {
          original: Image1.src,
          thumbnail: Image1.src,
        },
        {
            original: Image2.src,
            thumbnail: Image2.src,
          },
          {
            original: Image3.src,
            thumbnail: Image3.src,
          },
          {
            original: Image4.src,
            thumbnail: Image4.src,
          },
          {
            original: Image5.src,
            thumbnail: Image5.src,
          },
          {
            original: Image6.src,
            thumbnail: Image6.src,
          },
          {
            original: Image7.src,
            thumbnail: Image7.src,
          },
      ];

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
          heading="PARENTS-PROFESSOR ASSOCIATION"
        Contact={true}
        />

        <Features
          sectionGap="both"
          imageSlider={NccImages}
          descriptionClass="about_message"
          className="bg_white"
          title={'PARENTS-PROFESSOR ASSOCIATION'}
          content={
            <>
          St. Paul Institute of Professional Studies inaugurated the Parents Professors Association on 12th March 2011 and ever since then; the Association has been successfully conducting its activities for the overall development of the students.
<br/><br/>
The Association organizes two meetings of the whole body of parents and also three meetings of the Executive Committee of the Association during each Academic Year.
<br/><br/>
The college is the only institute in the city that has been successfully running the association and conducting the meetings meticulously. Subsequently, the parents in large number attend the meeting.
<br/><br/>
The collaboration of the parent representatives for the growth of the students is worth noting. In addition to the meetings the office bearers of the association are instrumental in conducting interviews for the students, hiring them for job, arranging internship and conducting employability enhancing sessions for the students.
<br/><br/>
The Association is hopeful and committed to take the task of coordination of parents with the college, further, with the support of the Management, cooperation of the parents, hard work of the faculty members and blessings of the Almighty. </>
          }
        />
      
    
      </main>
    </>
  );
};

export default PPA;
