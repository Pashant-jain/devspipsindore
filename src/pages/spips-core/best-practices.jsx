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


const BestPractices = () => {

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
          heading="Best Practices"
        Contact={true}
        />

        <Features
          sectionGap="both"
          imageSlider={NccImages}
          descriptionClass="about_message"
          title={'Best Practices at St. Paul Institute of Professional Studies (SPIPS), Indore'}
          content={
            <>
      St. Paul Institute of Professional Studies (SPIPS), Indore was established in the year 2010 with a vision of becoming a College with a difference. Even though the city of Indore boasted of a large number of Colleges offering Undergraduate courses, yet there was a demand from the society for establishing a Catholic/Christian College that would enrich the students with Value Based Quality Education.Within a short span of time, the College has earned a good reputation for itself by moulding the students into competent, committed and contributing citizens of the global family and by creating integrated personalities with discipline and quality.
<br/><br/>
As a catalyst for transforming the scenario of higher education in the city of Indore, SPIPS undertook many good practices and ascertained its proper implementation. To mention a few, we are giving twenty two special features of our College.

      </>
          }
        />
      
      <PageContent
          sectionGap="bottom"
          
          content={
            <>
            <h3 className="heading-6" >As a catalyst for transforming the scenario of higher education in the city of Indore, SPIPS undertook many good practices and ascertained its proper implementation. To mention a few, we are giving twenty two special features of our College.</h3>
            <br/>
           <ol>
            <li>Mentoring at SPIPS is an ongoing process of religiously nurturing andgrooming the students and imbibing professionalism, efficiency, character and commitment in them, thus enabling them to set goals ever higher and inspiring them to relentlessly pursue the set goals. For the moral, ethical and psychological well being of the students, the Class teachers dedicatedly take up the task of counseling each student of their respective classes. The efforts with which, the faculty have built a fraternal and strong rapport with the studentsare worth praising.</li>
            <li>Considering that the students and faculty members are a precious resource, the College provides an interactive and creative environment resulting in developing reciprocity and cooperation among students as well as faculty. This in turn has helped in generating a deep feeling of belongingness which binds all the members of SPIPS as a close knit family.</li>
            <li>The Parents Professors Association is another unique feature of SPIPS. Infact, SPIPS is the only College in the city having such an Association that organizesperiodic meetings for the Parents.</li>
            <li>The Internal Quality Assurance Cell and the Academic Excellence Committee incessantly work to upgrade the quality of academics. A lot of emphasis is laid on conducting the classes regularly and efforts are made to encourage the students to attend all the lectures. For this, the Class Teachers communicate with the students and their parents on a regular basis during and after the College hours.</li>
            <li>The usual graduate courses have been transformed into skills development courses with the help of the initiatives such asShort Term Certificate Courses in each semester, regular Industrial Visits, Industrial Study Tours, Industrial Trainings,etc.</li>
            <li>Another significant feature of the College is the daily ritual of the Morning Assembly. All the significant days and festivals are celebrated with enthusiasm, thus, creating the spirit of oneness and secularism.</li>
            <li>In an earnest effort to impart Value Based Quality Education and to increase the rapport with the students, the Director and the Principal conduct Special Meetings with the students for an open discussion on important issues related to life, in every semester.</li>
            <li>As a part of the participative management, thirty four In-House Committees are functioning in the College under the convenership of Faculty Members. With an objective to create leaders and to empower the students to coordinate and conduct various activities and programmes of the College, the Students’ Representative Body is formed every year.</li>
            <li>The college is meticulous in recruiting the best of the faculty who are not only well qualified but are also highly committed. Faculty enrichment faculty programmes, departmental meetings, intra-departmental faculty enriching faculty programme, meeting with heads of the department are conducted by the Director, the Principal and also by external Resource Persons in order to enhance the quality of teaching, learning and living that is being imparted at SPIPS.</li>
            <li>A Grievance and Redressal Cell functions effectively in our Collegefor the welfare of Students and the Staff. The suggestions received from the students and the staff is dealt with care and concern by the Director and the Principal and genuine action is taken by them as and when required.</li>
            <li>To conserve Energy and Natural Resources, an electronic Data Base Software named e-care has been incorporated so that the details of any student can be found out through a single click.</li>
            <li>Counseling in the College begins as the aspirants come to seek admission. The direct participation of the faculty and the Principal in the Admission Process is a distinctive feature of the College.</li>
            <li>The College designs an Annual Planner and all the Curricular and Co-curricular activities are planned well in advance and are followed as per the Planner.</li>
            <li>SPIPS has devised special Criteria for the Continuous Comprehensive Evaluation (CCE), i.e. the Internal Marking System comprising of four aspects such as Classroom Activities, two Common Class Tests, a Pre-University Exam and Submission of the Assignments in the form of PowerPoint and viva. It is a matter of pride that due to the concerted efforts of the Director, the Principal and the faculty members, the students diligently attend the internal examinations and the atmosphere in the class rooms during these examinations is just similar to that of the University Exams.</li>
            <li>The discipline in and around the College campus has become a distinct feature. During the lecture hours, the faculty takes care of the discipline on all the floors of the College building and also in the campus.</li>
            <li>In order to establish a safe and secure environment, each student is required to carry their Identity Card every day to the College and show it at the main gate to the security staff who are affable and caring.</li>
            <li>The culture of a uniform infusesthe spirit of oneness amongst the SPIPSians. The students and staff take pride in adorning a decent and dignified dress code.</li>
            <li>To appreciate the enthusiastic and dedicated contributionof the students in the successful conduct of the Annual Day, a Thanksgiving cum Felicitation Programme for all the participants and volunteers is organized every year after the Annual Day. Certificates are also distributed to boost the morale of the students.</li>
            <li>In an effort to encourage regular attendance, a Certificate of Appreciation is awarded to the students who achieve the highest attendance in their respective classes in each semester.</li>
            <li>Students are provided with ample opportunities to be able to showcase their talents through several Inter House Arts, Cultural and Literary events, sports activities, etc. The Annual Magazine and three Newsletters published in a year enable the students to express their creative skills.</li>
            <li>The selfless service for a noble cause to humanity is reflected aptly by a group of our NSS volunteers, NCC cadets and other students who are ever ready to donate blood to the people of the city in emergent and critical situations.</li>
           </ol>
            </>
          }
        />
      </main>
    </>
  );
};

export default BestPractices;
