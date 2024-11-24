import Head from "next/head";
import React from "react";
import Features from "@/components/liberary/Features";
import SectionImage from "/public/assets/images/Sr.-Principal.png";
import PageContent from "@/components/comman/PageContent";
import bannerImg from "/public/assets/images/college-banner.png";
import Banner from "@/components/banner";

const AboutIqac = () => {
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
        <Banner bannerImg={bannerImg} heading="About SPIPS IQAC" />

        <PageContent
          sectionGap={"both"}
          className="bg_white"
          title={"Internal Quality Assurance Cell (IQAC)"}
          content={
            <div>
              The Cell extensively works towards improving and maintaining the
              quality of education, identifying and suggestive new ways of using
              teaching aids, developing suitable infrastructure and offering
              suggestions for the new self-finance courses. IQAC is an effective
              and efficient internal coordinating and monitoring mechanism in
              the college. The role of IQAC in maintaining quality standards in
              teaching, learning and evaluation becomes crucial.
              <br />
              <br />
              Therefore, for ensuring the excellence in academics, the meeting
              of the committee is held on a regular basis. Post to the
              declaration of the university exams, the analysis of the results
              is done by each class teacher and the same is analysed by the
              Director and the Principal. Accordingly, the remedial classes and
              bridge courses are also conducted for the students for those
              subjects in which the marks secured are not so good.
              <br />
              <br />
              The committee also takes decisions pertaining to internal marking
              criteria, regular classes, conduct of the Common Class Tests,
              Pre-University Exams, Internship Training and many more academics
              related aspects. Owing to the efforts undertaken by the committee,
              the academic environment of the college has been very conducive
              and the college has now gained a considerable reputation in the
              city as far as academic is concerned.
              <br />
              <br />
              Every year IQAC devises a yearly Perspective Plan in the beginning
              of the academic year and also gives an account of the outcome
              achieved at the end of the academic year. Feedback from all the
              stakeholders and the recommendations of the IQAC are taken into
              consideration and innovations are incorporated in further
              perspective plans. Student feedback mechanism, self-appraisal by
              teachers, introduction of teachers training programmes, faculty
              improvement programmes, establishment of staff academy,
              encouragement to teachers for research are some of the measures
              taken for quality sustenance and enhancement as a strategy.
            </div>
          }
        />
       
       <PageContent
          sectionGap="bottom"
          descriptionClass="about_message"
          className="bg_white"
          title={"Objectives of IQAC at SPIPS"}
          content={
            <>
              <ul>
              <li>Ensure quality enhancement in all possible potential areas</li>
                <li>Setting up quality benchmarks in academics and upgrading it as per need</li>
                <li>Industrial-academia linkages</li>
                <li>Promoting research fervour in the campus</li>
                <li>Quality enhancement in Teaching-Learning</li>
                <li>Reforms in Evaluation pattern</li>
                <li>Promoting novel and innovative ideas</li>
                <li>Involve all the stakeholders in decision-making process pertaining to academics</li>
              </ul>
            </>
          }
        />
          <PageContent
          sectionGap="bottom"
          descriptionClass="about_message"
          className="bg_white"
          leftImage={true}
          title={"Functions of IQAC at SPIPS "}
          content={
            <>
              <ul>
              <li>Dedicated efforts to set quality benchmarks for various curricular, extra-curricular and co-curricular activities of the college.</li>
                <li>Conducting regular meetings for proper implementation of policies.</li>
                <li>Enabling environment that is conducive for the learners, thus facilitating effective teaching learning process.</li>
                <li>Acquiring feedback responses from the stakeholders on institutional processes related quality.</li>
                <li>Dissemination of information on various quality Parameters of Higher Education.</li>
                <li>Documentation of the various programmes/activities, meeting minutes leading to quality improvement.</li>
                <li>Acting as a nodal agency of the institution for coordinating quality-related activities, including adoption of best practices.</li>
                <li>Development and Maintenance of institutional database through MIS for the purpose of maintaining/enhancing the institutional quality.</li>
                <li>Development of quality culture in the campus.</li>
<li>Engrossed in preparation of self-study report to be submitted to the NAAC.</li>
    <li>Promote Research Culture in the Campus.</li>
    <li>Develop Quality assurance, enhancement and sustenance strategies for students, teachers and alumni & monitor its functioning.</li>  
    <li>Coordinating with various departments to ensure adherence of quality norms.</li>  
    <li>Acting as bridge between Management and faculty members for practical applications of quality norms.</li>        
              </ul>
            </>
          }
        />
      </main>
    </>
  );
};

export default AboutIqac;
