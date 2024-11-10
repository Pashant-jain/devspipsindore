import Banner from "@/components/banner";
import Head from "next/head";
import React from "react";

import BishopSign from "/public/assets/images/Bishop-sign.png";
import Features from "@/components/liberary/Features";
import DepartmeentOfCommerce from "/public/assets/images/DEPARTMENT-OF-COMMERCE.png";
import bannerImg from "/public/assets/images/college-banner.png";

import Image from "next/image";
import FeaturedCourses from "@/components/homePage/FeatruredCourses";
import FeaturedCoursesCard from "@/components/cards/FeaturedCoursesCard";

const content = {
    tab1: <>
    czc
    </>,
    tab2: [
      <FeaturedCoursesCard key="4" title="Computer Science" description="Learn AI and Machine Learning." />,
      <FeaturedCoursesCard key="5" title="Data Science" description="Analyze data to make decisions." />,
      <FeaturedCoursesCard key="6" title="Web Development" description="Master front-end and back-end." />
    ],
    tab3: [
      <FeaturedCoursesCard key="7" title="Sociology" description="Understand human society." />,
      <FeaturedCoursesCard key="8" title="Psychology" description="Explore the human mind." />
    ],
    tab4: [
      <FeaturedCoursesCard key="9" title="Faculty 1" description="Expert in Marketing." />,
      <FeaturedCoursesCard key="10" title="Faculty 2" description="Specialist in AI." />
    ]
  };

const CommerceAndManagement = () => {
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
        <Banner bannerImg={bannerImg} heading="Dept. of Commerce & Management" />

        <Features
          sectionGap="both"
          SectionImage={DepartmeentOfCommerce}
          descriptionClass="about_message"
          className="bg_white"
          title="DEPARTMENT OF COMMERCE"
          content={
            <>
              Department of Commerce was established in the year 2010. Since
              it’s inception, the department has played a pivotal role, stiring
              all college endeavor towards success. With an aim to impart world
              class value-based education in the fields of Business and commerce
              the department offers Bachelor in Commerce (B.Com) course in
              distinctive specializations designed to acquint students with
              various development practices of trade and commerce across the
              globe. The core strength of the Department is collaborative
              approach. The faculty members are highly qualified and resourceful
              working tirelessly to organizes various academically enhancing
              events like National and International webinars, seminars, invite
              talks and guest lecturers to provide an enhanced exposure to the
              students. The Department also organizes various activities like
              inter-college debate competition, social commitment programs that
              helps the student individually to widen their personal abilities
              and social responsibilities.
              <br />
              <br />
              <h3 className="heading-5">Courses Offered</h3>
              <ul>
                <li>
                  <strong className="small-text">B.Com</strong>
                </li>
                <li>
                  <strong className="small-text">B.Com Honors</strong>
                </li>
                <li>
                  <strong className="small-text">M.Com</strong>
                </li>
              </ul>
            </>
          }
        />
       
                <Features
          sectionGap="bottom"
          SectionImage={DepartmeentOfCommerce}
          descriptionClass="about_message"
          leftImage={true}
          className="bg_white"
          title="DEPARTMENT OF MANAGEMENT"
          content={
            <>
              The Study of Management is a dynamic, self-motivated and vibrant discipline. the youngest department at the college operating independently Since…., the Department of Management continuously works using a hybrid approach of concept based lecture delivery &amp; interactive management activities in tandem to enable holistic development of the students.

The department faculty members hold expertise in different and complimentary subject areas of management studies fostering student development through management activities and games, personal corporate experiences and personality and skill development programs which helps students expand their gamut of understanding and develop concrete personality making students industry ready.
              <br />
              <br />
              <h3 className="heading-5">Courses Offered</h3>
              <ul>
                <li>
                  <strong className="small-text">BBA</strong>
                </li>
              </ul>
            </>
          }
        />

        <div></div>
      </main>
    </>
  );
};

export default CommerceAndManagement;
