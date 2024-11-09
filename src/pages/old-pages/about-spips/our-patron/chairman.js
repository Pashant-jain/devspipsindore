import Banner from "@/components/banner";
import Head from "next/head";
import React from "react";

import BishopSign from "/public/assets/images/Bishop-sign.png";
import Features from "@/components/liberary/Features";
import SectionImage from "/public/assets/images/Bishop_Chacko.jpg";
import styles from "@/styles/Home.module.scss";
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
      <main className={`${styles.main} ${inter.className}`}>
        {/* <Banner
          bannerImg={bannerImg}
          heading="Chairman"
          description="Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam."
        /> */}

        <Features
          sectionGap="both"
          SectionImage={SectionImage}
          descriptionClass="about_message"
          className="bg_white"
          content={
            <>
              <h3 className="heading-5">
                St. Paul Institute of Professional Studies began its humble
                journey in the year 2010 and ever since, has been endeavoring to
                successfully march ahead, offering its service in the city of
                Indore.
              </h3>
              <br />
              <strong className="small-text">
                “O Lord, grant us success” Psalms 118:25.
              </strong>
              This word of God has brought forth fruits and I am happy to see
              the impact SPIPS has made in the city and its surroundings during
              these years. The blessings of God, the prayers of St. Paul, the
              dedicated staff, and the goodwill of the parents and the hard work
              of the students have contributed to make its light shine.
              Additional structures have been built and the facilities have been
              expanded, making SPIPS one of the colleges with best
              infrastructure and facilities. Believing what is mentioned in the
              Holy Bible,
              <strong className="small-text">
                “For I know the plans I have for you,” declares the LORD, “plans
                to prosper you and not to harm you, plans to give you hope and a
                future.” Jeremiah 29:11,
              </strong>
              I encourage all students who are serious about their future to
              join the bandwagon and work for the development of their gifts and
              abilities under the able guidance of the faculty members. We want
              you to become good leaders and serve our nation.
              <br />
              <br />
              <Image
                src={BishopSign}
                alt=""
                width={120}
                height={57}
                loading="lazy"
              />
              <br />
              <br />
              <strong className="small-text">
                Most Rev. Bp. Dr. Chacko Thottumarickal, SVD Bishop of Catholic
                Diocese of Indore
              </strong>
            </>
          }
        />
      
        <div></div>
      </main>
    </>
  );
};

export default Chairman;
