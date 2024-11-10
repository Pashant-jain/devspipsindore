import Head from "next/head";
import bannerImg from "/public/assets/images/college-banner.jpg";
import Image from "next/image";

import Banner from "@/components/banner";
import Features from "@/components/liberary/Features";
import SectionImage from "/public/assets/images/Director.jpg";
import Logo from "/public/assets/images/logo.png";
import Vision from "/public/assets/images/Vision.png";




function StrategicImperativePage() {
  return (
    <>
      <Head>
        <title>Motto, Vision and Mission - SPIPS</title>
      </Head>
      <Banner
        // isFrontBanner={false}
        bannerImg={bannerImg}
        heading={"Motto, Vision and Mission"}
        // description={
        //   "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam."
        // }
      />
      <Features
          sectionGap="both"
          SectionImage={Logo}
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
          SectionImage={Logo}
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
      
    </>
  );
}

export default StrategicImperativePage;
