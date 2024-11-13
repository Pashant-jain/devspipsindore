import Banner from "@/components/banner";
import Head from "next/head";
import React from "react";

import BishopSign from "/public/assets/images/Bishop-sign.png";
import Features from "@/components/liberary/Features";
import SectionImage from "/public/assets/images/Bishop_Chacko.jpg";
import bannerImg from "/public/assets/images/college-banner.png";

import Image1 from "/public/assets/images/Ncc/1.jpg"
import Image2 from "/public/assets/images/Ncc/2.jpg"
import Image3 from "/public/assets/images/Ncc/3.jpg"
import Image4 from "/public/assets/images/Ncc/4.jpg"
import Image5 from "/public/assets/images/Ncc/5.jpg"
import Image6 from "/public/assets/images/Ncc/6.jpg"
import Image7 from "/public/assets/images/Ncc/7.jpg"
import Image8 from "/public/assets/images/Ncc/8.jpg"
import Image9 from "/public/assets/images/Ncc/9.jpg"


import Image from "next/image";
import PageContent from "@/components/comman/PageContent";


const Ncc = () => {

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
          {
            original: Image8.src,
            thumbnail: Image8.src,
          },
          {
            original: Image9.src,
            thumbnail: Image9.src,
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
          heading="National Cadet Corp (NCC)"
        Contact={true}

        />

        <Features
          sectionGap="both"
          imageSlider={NccImages}
          descriptionClass="about_message"
          className="bg_white"
          title={'NATIONAL CADET CORP'}
          content={
            <>
             National Cadet Corp (NCC): The NCC unit at SPIPS, which welcomes both boys and girls, is guided by the army unit, known as ‘9 MP Battalion’, CRP Line, Indore. As per the guidelines issued, the NCC unit at SPIPS is completely self-financed. Through this endeavor, SPIPS aims at inculcating in its students a sense of discipline, commitment, patriotism and service to the nation. The cadets are motivated to be punctual and regular for all the prescribed training camps. They are also prepared to appear for A-Certificate, B-Certificate and C-Certificate Exams. This will be very beneficial for their career prospects.

            </>
          }
        />
      
      <PageContent
          sectionGap={"bottom"}
          className="bg_white"
          title={"Contact Officer"}
          content={
            <>
           <h3 className="heading-5" >Capt. Lt. Dr. Avinash Yadav - +91 94253 53832</h3>
           <br/>
           <br/>
           <h3 className="heading-6" >
           NCC Initiatives</h3>

<ul>
  <li>Celebration of Vijay Diwas</li>
  <li>Best Educationist Award and Certificate of Education Excellence by International Institute of Education and Management.</li>

  <li>Cleaning of Statues of freedom Fighters</li>
  <li>Poem Writing</li>
  <li>My Favorite Freedom Fighter</li>
  <li>Fit India Freedom Run</li>
  <li>Plantation Drive</li>
  <li>Kargil Vijay Diwas</li>
  <li>Yoga Sessions</li>
  <li>Short Video Making</li>
  <li>Poster Making</li>
  <li>Mask Distribution</li>
  <li>Parade and Turnout Competition</li>
  <li>Share Your Views</li>
  <li>Soap Distribution</li>
  <li>Essay Writing on Discouraging use of Single use Plastic</li>
  <li>Cleaning of College Campus</li>
  <li>Group Counseling</li>
  <li>Yoga Day Celebration</li>
  <li>Rally for Pollution Awareness</li>
  <li>Social Commitment Programme – Visit to Blind School</li>
  <li>Plantation Drive</li>
  <li>Social Commitment Programme – Visit to Geeta Bhawan Hospital</li>
  <li>Rally for Traffic Awareness</li>
  <li>Cleaning of Statues of National Leaders</li>
  <li>Social Commitment Programme – Visit to Jyoti Niwas Old Age Home</li>
  <li>Awareness for Eye Care and Eye Donation</li>
  <li>Cleaning of College Campus</li>
  <li>Social Commitment Programme – Distribution of Cloth and Fruits</li>
  <li>Social Commitment Programme – Teaching Programme in Slum</li>
  <li>Social Commitment Programme – Visit to Central Jail</li>
  <li>Social Commitment Programme -Distribution of stationary to Slum Area Students</li>
  <li>Cleaning of Spiritual Places</li>
  <li>Distribution of Soap</li>
  <li>Yoga Day Celebration</li>
  <li>Plantation Drive</li>
  <li>Mask Distribution</li>
  <li>Social Commitment Programme – Session on Anxity, Depression and Drug Addiction</li>
  <li>Anti-Tobacco Rally</li>
  <li>Social Commitment Programme – Distribution of Cloth</li>
  <li>Social Commitment Programme – Visit to Orphanage</li>
  <li>Plantation Drive at Devguradiya</li>
  <li>Cleaning of Statues of St. Paul Statue</li>
  <li>Bike Rally</li>
  <li>Drawing Competition</li>
  <li>Blood Donation Camp</li>
  <li>Social Commitment Programme – Visit to Blind School</li>
  <li>Social Commitment Programme- Fruits Distribution</li>
  <li>Social Commitment Programme – Visit to Old Age Home</li>
  <li>Plantation Drive in College Campus</li>
  <li>Plantation Drive at Simrol Talai</li>
  <li>Aids  Awareness Programme</li>
</ul>
            </>
          }
        />
      </main>
    </>
  );
};

export default Ncc;
