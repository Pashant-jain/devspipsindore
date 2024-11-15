import Banner from "@/components/banner";
import Head from "next/head";
import React from "react";

import BishopSign from "/public/assets/images/Bishop-sign.png";
import Features from "@/components/liberary/Features";
import AcademicSpipsImg from "/public/assets/images/academic-spips/academic-spips.png";
import bannerImg from "/public/assets/images/college-banner.png";
import AssessmentMethodsImg from "/public/assets/images/academic-spips/AssessmentMethods.png";


import Image1 from "/public/assets/images/ppa/PPA1.jpg"
import Image2 from "/public/assets/images/ppa/PPA2.jpg"
import Image3 from "/public/assets/images/ppa/PPA3.jpg"
import Image4 from "/public/assets/images/ppa/PPA4.jpg"
import Image5 from "/public/assets/images/ppa/PPA5.jpg"
import Image6 from "/public/assets/images/ppa/PPA6.png"
import Image7 from "/public/assets/images/ppa/PPA7.jpg"


import Image from "next/image";
import PageContent from "@/components/comman/PageContent";


const AcademicSpips = () => {

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
          heading="Academic @ SPIPS"
        Contact={true}
        />
 <PageContent
          sectionGap="top"
          
          content={
            <>
           <h3 className="heading-6" >With the motto ‘Let Your Light Shine’, the college has endeavoured to bring out the best of the students as per their abilities. Additional to ‘Chalk and Talk’ or ‘Lecture Delivery’ method, teachers are focused on the ‘conceptual clarity’ of their subject. Entire teaching-learning and evaluation process undergoes through all the methods mentioned (like Quiz Class test, Assignments, Presentations, Common Class Test, Pre-University Examination, Projects, Mock Viva, PPT Presentations).</h3>
            </>
          }
        />
        <Features
          sectionGap="both"
          imageSlider={NccImages}
          descriptionClass="about_message"
          content={
            <>
   <h3 className="heading-6" >Methods of teaching</h3>
<ul >
 	<li><strong>Experiential Method</strong></li>
 	<li><strong>Participative Method</strong></li>
 	<li><strong>Problem-Solving Method</strong></li>
 	<li><strong>Creative Methods of Teachings -</strong>Some innovative and creative ideas that make teaching methods more effective are:</li>
 	<li>Monthly <span >Personality Development - Class Activity</span></li>
 	<li><strong>Introducing </strong><strong>Lessons with an Illustration</strong></li>
 	<li>Relating life situation</li>
 	<li>Mock Viva</li>
</ul>
<h3 className="heading-6" >Usage of the ICT enabled tools for effective teaching-learning process:</h3>
<p >Selected classrooms and computer labs are ICT enabled with projectors installed and the whole campus is enabled with a high-speed Wi-Fi connection. The faculty at SPIPS uses various ICT enabled tools to enhance the quality of teaching-learning like, Google classroom, which is used to manage and post course-related information- learning material, quizzes, lab submissions and evaluations, assignments, etc. Online classes are conducted as per the schedule provided by the management using the ICT tools like Zoom meeting, Google meet etc. Some of the ICT enabled Methods Used in Teaching Learning Process at SPIPS are as follows:</p>

<ul >
 	<li>Presentation Through PPTs:</li>
 	<li><strong>Introduction of </strong><strong>Online classrooms</strong></li>
 	<li><strong>Usage of QUIZ portals</strong></li>
 	<li><strong>Usage of Digital Library</strong></li>
 	<li><strong>Usage of E-Care portal</strong></li>
</ul>

      </>
          }
        />
       <PageContent
          sectionGap="both"
          className={'bg_white'}
          descriptionClassName="text-center"
          
          content={
            <>
          <Image src={AcademicSpipsImg} alt="" className="w-75 m-auto" width={800} height={400} />
            </>
          }
        />
          <Features
          sectionGap="both"
          imageSlider={NccImages}
          descriptionClass="about_message"
          leftImage={true}
          content={
            <>
   <h3 className="heading-6" >Evaluation Process</h3>
   The college follows academic planner that is inclusive of internal assessment, short term courses and probable dates of university examination.

The team of internal examination committee formulate, plan and execute the examination process in the institution.

The examination schedule with rules and regulations is strictly adhered for the systematic conduct of the examinations. Adequate measures are taken to ensure the objectivity and transparency in the evaluation process is maintained.

Invigilation duties are given to the professors. There are CCTV surveillance cameras inside and outside of the classrooms and in the whole campus to maintain transparency of examinations.

Time table is displayed on the Principal’s notice board and after the examination and evaluation, the answer sheets are shown to the students to understand their mistakes and finally the result is displayed on the noticeboard
<br/><br/>
<h3 className="heading-6" >Frequency of internal assessment</h3>
To assess the students’ performance a special Internal evaluation system based on Continuous Comprehensive Evaluation (CCE) system is formed which comprises of
<br/><br/>
<ul>
    <li>Classroom activity and regular attendance in the class</li>
    <li>Common Class Tests (CCTs) – pen paper mode and through e-care portal</li>
    <li>Pre-University Exam (PUE)</li>
    <li>Assignments/ PPT presentations /Viva</li>
</ul>
<h3 className="heading-6" >Grievances related to internal examination</h3>
The CCT tests and pre-University answer books are shown to the student on a scheduled day after assessment. The students go through the answer books and know their performance regarding strength and lacunas of their studies and techniques in writing answer books. If there are any mistakes or complaints regarding assessment, they are clarified on the very day. All the mechanism to deal with examination related grievances is transparent, time bounded and efficient. The marks scored by the students in each internal exam are displayed on Internal Examination Notice Board.

Hierarchy to be followed for settling grievances include approaching:
<br/><br/>
<ul>
<li>Subject teacher</li>
<li>Class teacher</li>
<li>Head of the Department</li>
<li>Faculty coordinator</li>
<li>Principal</li>
</ul>


      </>
          }
        />
         <Features
          sectionGap="both"
          SectionImage={AssessmentMethodsImg}
          descriptionClass="about_message"
          title={'Assessment Methods'}
          content={
            <>
  <ul>
    <li>Monthly Test on e-care</li>
    <li>Group discussion</li>
    <li>Laboratory performance</li>
    <li>Projects</li>
    <li>Quiz – online and offline</li>
    <li>Project work for final year student</li>
    <li>Feedbacks</li>
    <li>Survey</li>
    <li>Co-curricular activities</li>
    <li>Extracurricular activities</li>
  </ul>

      </>
          }
        />
     
      </main>
    </>
  );
};

export default AcademicSpips;
