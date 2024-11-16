import Head from "next/head";
import bannerImg from "/public/assets/images/college-banner.jpg";
import Image from "next/image";

import Banner from "@/components/banner";
import Features from "@/components/liberary/Features";
import Logo from "/public/assets/images/logo.png";
import missionImg from "/public/assets/images/our-mission.png";
import motoImg from "/public/assets/images/education-img.png";



import Vision from "/public/assets/images/Vision.png";
import PageContent from "@/components/comman/PageContent";
import { useEffect, useState } from "react";





function StrategicImperativePage() {
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
        <title>Motto, Vision and Mission - SPIPS</title>
      </Head>
      <Banner
        // isFrontBanner={false}
        bannerImg={bannerImg}
        heading={"strategic-imperative"}
        // description={
        //   "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam."
        // }
      />
      <Features
          sectionGap="both"
          SectionImage={motoImg}
          descriptionClass="about_message"
          className="bg_white"
          title={'Our Motto'}
          content={
            <>
             <strong className="small-text">“LET YOUR LIGHT SHINE“ </strong>
             embodies our belief in the power of individuality and self-expression. We encourage everyone to embrace their unique talents and perspectives, fostering a community where confidence and creativity thrive. By shining your light, you inspire others, create positive change, and contribute to a brighter, more inclusive world. Join us in celebrating the brilliance within each of us!
            </>
          }
        />

      
        <Features
          sectionGap="bottom"
          SectionImage={Vision}
          descriptionClass="about_message"
          leftImage={true}
          className="bg_white"
          title={"Our Vision"}
          content={
            <>
             TO FORM GLOBAL CITIZENS WITH PROFESSIONALISM AND EFFICIENCY, CHARACTER AND COMMITMENT, WHO WILL TAKE OUR NATION AND THE WORLD TO GREATER  HEIGHTS!
<br/>



            </>
          }
        />
         <Features
          sectionGap="bottom"
          SectionImage={missionImg}
          descriptionClass="about_message"
          className="bg_white"
          title={'Our Mission'}
          content={
            <>
            <ul>
              <li>Molding the students into competent, committed and contributing citizens of the global family.</li>
              <br/>
              <li>Generating value-driven professionals for the corporate world, through imparting world class knowledge and skills which will enable them to be globally competent.</li>
              <br/>
              <li>Inculcating true Christian values in the future professionals and creation of integrated personalities with discipline and quality in both professional and personal lives. 
              </li>
              <br/>
              <li>Enabling the students to set goals ever higher, inspiring them to relentlessly pursue the goals set, and  motivating them to enthusiastically work towards achieving them.</li>
            </ul>
            </>
          }
        />
         <Features
          sectionGap="bottom"
          SectionImage={Logo}
          descriptionClass="about_message"
          className="bg_white"
          leftImage={true}
          title={'Our Values'}
          content={
            <>
            <ul>
              <li>Discipline in and around campus with due respect towards authorities and peer group.</li>
              <br/><li>Secularism thus embracing with indifference all the religions and religious consideration.</li>
              <br/><li>Substance Free Zone to provide a congenial environment.</li>
              <br/><li>Environmental consciousness through saving energy and water along with proper waste management.</li>
              <br/><li>Human values as bouquet of virtues like respect, acceptance, consideration, appreciation, listening, openness, affection, empathy and love towards other human beings.</li>
              <br/><li>Professional ethics including honesty integrity transparency accountability confidentiality objectivity respect obedience towards the guidelines.</li>
              <br/>
                </ul>
            </>
          }
        />
      
      <PageContent
          sectionGap="bottom"
          className="bg_white"
          title="Strategic Plan"
          content={
            <>
            <div className="d-flex justify-content-center" >
            <iframe
        src={`https://docs.google.com/viewerng/viewer?url=${currentDomain}/assets/documents/STARTEGIC-PLAN.pdf&embedded=true`}
        style={{ width: "640px", height: "800px" }}
        allowFullScreen
        title="Strategic Plan PDF Viewer"
      />

      
            </div>
           
            </>
          }
        />




    </>
  );
}

export default StrategicImperativePage;
