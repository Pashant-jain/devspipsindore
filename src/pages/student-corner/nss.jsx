import Banner from "@/components/banner";
import Head from "next/head";
import React from "react";

import BishopSign from "/public/assets/images/Bishop-sign.png";
import Features from "@/components/liberary/Features";
import SectionImage from "/public/assets/images/Bishop_Chacko.jpg";
import bannerImg from "/public/assets/images/college-banner.png";

import Image1 from "/public/assets/images/Nss/1.jpg"
import Image2 from "/public/assets/images/Nss/2.jpg"
import Image3 from "/public/assets/images/Nss/3.jpg"
import Image4 from "/public/assets/images/Nss/4.jpg"


import Image from "next/image";
import PageContent from "@/components/comman/PageContent";


const Nss = () => {

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
          heading="National Serving Scheme (NSS)"
        Contact={true}

        />

        <Features
          sectionGap="both"
          imageSlider={NccImages}
          descriptionClass="about_message"
          className="bg_white"
          title={'NATIONAL SERVICE SCHEME'}
          
          content={
            <>
             National Serving Scheme (NSS) and Compulsory Social Service (CSS): SPIPS believes in motivating and providing ample opportunities to the students to contribute towards the betterment of the society. It is to fulfill this objective that SPIPS has two units of NSS, one of which is completely financed by the College. The NSS volunteers of SPIPS work rigorously for Community Literacy Drives, Environment Consciousness and Social Integrity Programmes and various social service related programmes that inculcate a sense of discipline, commitment, patriotism and service to the nation. SPIPS conducts regular Value Education Programmes for its NSS volunteers in order to inspire them to become persons of character and nobility. The NSS Annual Camp provides students an opportunity to live within the community and experience the conditions and problems of the people as well as to learn how to lead a good life despite the scarcity of resources.

            </>
          }
        />
      
      <PageContent
          sectionGap={"bottom"}
          className="bg_white"
          title={"Contact Officer"}
          content={
            <>
           <h3 className="heading-5" >Prof. Vidhi Paryani - +91 96175 95776</h3>
           <br/>
           <br/>
           <h3 className="heading-6" >SPIPS NSS Initiatives</h3>

<ul>
<li>Literary Day</li>
<li>Medical Camp</li>
<li>NSS  Day</li>
<li>International Youth Day</li>
<li>An invited Talk on ” You are not alone”</li>
<li>Cycle Rally</li>
<li>Mask Distribution</li>
<li>World AIDS Day</li>
<li>Sadhbhavna Diwas</li>
<li>National Education Day</li>
<li>Awareness Programme on Women’s Health and Hygiene in Adopted Village</li>
<li>Water Harvesting and Energy Conservation Programme</li>
<li>Eco-Friendly Ganesha Idol Making and Distribution</li>
<li>Paper Bag Making and Distribution</li>
<li>Awareness Drive for Eye Care</li>
<li>Awareness Walk for HIV Aids</li>
<li>Blood Donation Camp</li>
<li>Social Commitment Programme for COVID 19</li>
<li>National Youth Day Celebration</li>
<li>ODF Survey</li>
<li>Cleanliness Drive at Nehru Nagar</li>
<li>Tiranga Yatra</li>
<li>Eye Donation Form Distribution</li>
<li>Plantation Drive</li>
<li><strong>NSS Camp at Village</strong></li>

</ul>
            </>
          }
        />
      </main>
    </>
  );
};

export default Nss;
