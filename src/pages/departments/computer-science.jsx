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

const ScienceAneComputerScience = () => {
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
        <Banner bannerImg={bannerImg} heading="Dept. of Computer Science" />

        <Features
          sectionGap="both"
          SectionImage={DepartmeentOfCommerce}
          descriptionClass="about_message"
          className="bg_white"
          title="DEPARTMENT OF SCIENCE"
          content={
            <>
             The Department of Science was incubated in 2010 with a committed focus to help students become efficient follower of scientific information, develop rational and systematic observation knack and inspire experimental investigation insights for growth of self and the society.

The department offers a B.Sc (Computer Science) course with the total intake of 60 students per year. The students are not only trained in academic excellence but also encouraged to acquire industrial and research exposure in various technologies. Through well equiped Physics laboratory, in-house training sessions, National and International research Seminar &amp; confrences and with guidance from professional teachers who are experts in their respespective branches, the students are guided to strike an innovative balance between theory and practical knowledge to set up the their involvement and creativity with the Subjects.
              <br />
              <br />
              <h3 className="heading-5">Courses Offered</h3>
              <ul>
                <li>
                  <strong className="small-text">B.Sc Computer Science</strong>
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
          title="DEPARTMENT OF COMPUTER SCIENCE"
          content={
            <>
              The Department of Computer Science was established at St. Paul Institute of Professional Studies Indore, in September 2011. The Department strives to inculcate an in-depth knowledge among the students through various innovative and professional approaches to guide and inspire the students to become socially committed technical professionals. The department offers a Bachelor of Computer Applications (BCA) program, that provides core Computer applications foundation and equip the students with the necessary technical and research skills satisfying the requirements of the professional industries and academia.

With well outfitted laboratories to execute the need of excellence in computer education and a dedicated Faculty team owning a wide range of research expertise and academic credentials, the department untiringly ensures to provide a dynamic learning environment through regular classes and various seminars, conferences, workshops, and student development progamme, organised on national and International level in association with various agencies for the benefit of faculty members and students, to keep up with emerging demands in the area of computer applications and its studies.
              <br />
              <br />
              <h3 className="heading-5">Courses Offered</h3>
              <ul>
                <li>
                  <strong className="small-text">BCA</strong>
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

export default ScienceAneComputerScience;
