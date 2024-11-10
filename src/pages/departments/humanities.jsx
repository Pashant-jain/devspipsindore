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


const SocialScience = () => {
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
        <Banner bannerImg={bannerImg} heading="Dept. Commerce & Management" />

        <Features
          sectionGap="both"
          SectionImage={DepartmeentOfCommerce}
          descriptionClass="about_message"
          className="bg_white"
          title="DEPARTMENT OF HUMANITIES"
          content={
            <>
             The Department of Humanities was established at St. Paul Institute of Professional Studies, Indore in July 2010. The Department acts as a nursery for nurturing skills which complements the subjects taught in the field of Arts. The primary strength of the department is its intellectual engagement and inter-disciplinary nature. Capitalizing on this strength, the department strives to provide academic and inter-disciplinary excellence to the students in various streams of liberal arts such as Religious Studies, Sociology, Literature, Political Science, Psychology etc.

Our curriculum focuses on concrete questions that matter in living a good life. The Department Faculty Members are specialists in complementary disciplines, including Theology, Philosophy, Psychology, Political Science, Economics, History and Literature. Together they craft intersecting classes that equip students to debate, analyze, discern and make careers and vocations in fields of law, academia, politics, service, priesthood, and fine arts to name just a few of many inspiring destinations.
              <br />
              <br />
              <h3 className="heading-5">Courses Offered</h3>
              <ul>
                <li>
                  <strong className="small-text">BA (English Literature, Political Science, Psychology)</strong>
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
          title="DEPARTMENT OF PHYSICAL EDUCATION"
          content={
            <>
              The Department of Physical Education was setup in 2010 at St. Paul Institute of Professional Studies, Indore with a vision to empower students to develop healthy habits, instill fitness literacy, discipline and inculcate lifelong awareness among the students regarding their health, discipline and wellness.

Abiding by the University directives, the Department of Physical Education and Sports indefatigable conducts various indoor and outdoor sports activities, Inter-house competitions and tournaments such as Badminton, Table Tennis, Chess, Caroms, Basketball, Cricket, Football, Volley ball, Athletics and others to keep students physically engaged. The students are incessantly trained and groomed for various inter collegiate competitions and Inter-Zone (West Zone) competitions and for the special programs prescribed by the AIU, DHE and DAVV under the able guidance of well trained, dedicated and professional sportsperson serving as faculty members in the department with a sole aim of promoting Physical Fitness and attention to health Well-being.  <br />
              <br />
              <h3 className="heading-5">Courses Offered</h3>
              <ul>
                <li>
                  <strong className="small-text">Sports Club</strong>
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

export default SocialScience;
