import Head from "next/head";
import React from "react";
import Features from "@/components/liberary/Features";
import SectionImage from "/public/assets/images/Director.png";
import PageContent from "@/components/comman/PageContent";
import bannerImg from "/public/assets/images/college-banner.png";
import Banner from "@/components/banner";


const Director = () => {
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
          heading="Our Director"
          // description="Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam."
        />

        <Features
          sectionGap="both"
          SectionImage={SectionImage}
          descriptionClass="about_message"
          className="bg_white"
          content={
            <>
              <h3 className="heading-5">LIFE PHILOSOPHY</h3>
              <br />
              <strong className="small-text"> “Inspire & aspire to create enabling environment that encourages
              everyone to explore their maximum potential, promotes self-esteem
              and inspires a life with dignity and knowledge”</strong>
              <br /><br /><br />
              <h3 className="heading-5">EXPERIENCE</h3>
              <br/>
              Rev. Fr. Simon Raj has extensive experience of working with
              International Relief and Development Agencies and Consultancies
              focused on poverty alleviation in the state of Madhya Pradesh. He
              has been leading Indore Diocese Social Service Society for the
              past 8 years as its Director and has been managing operations of{" "}
              <strong className="small-text">
                25 parishes, 210 villages, 50 slums, 78 Panchayats in three
                districts at Indore, Dewas and Dhar of Catholic Diocese of
                Indore.
              </strong>{" "}
              Earlier, he has served as the Parish Priest and Development
              officer at Chotta Bangardha, Airport area, Indore from 2000 to
              2006.
              <br />
              <br />
              Highly acclaimed for his program quality management skills, he has
              worked in collaboration with Miserere Germany, World Vision India,
              Caritas India, Caritas Spain, MPSSS, Child Line, CNL, MI, CRS and
              many other renowned national and international organisations. He
              has spearheaded various development program plannings, monitoring
              and evaluation operations at different states in India like
              Orissa, Madhya Pradesh and Chattisgarh.
              <br />
              <br />
              Much loved and respected as a Youth and Vocations Director, Fr.
              Simon Raj has been working for the development and upliftment of
              Youth for 10 years now. During this tenure, he has also worked as
              a consultant with the Youth Rural Life Skill Development
              Foundation (YRLSDF), was the Program coordinator of the Asian
              youth Cross at regional Level in 2009 and served as a Program
              Manager at the National and Regional Youth Convention in Indore &
              Bhopal. Additionally, Fr. Simon Raj was nominated as a panel
              interviewer for CBCI CARD, Delhi and Caritas India Employee
              Selection.
              <br />
              <br />
              Apart from his vast area of expertise, he has also been working as
              Freelance Consultant for nine dioceses at Madhya Pradesh, he has
              headed various significant consulting reports on social
              development and growth management.
            </>
          }
        />

      
        <Features
          sectionGap="bottom"
          SectionImage={SectionImage}
          descriptionClass="about_message"
          leftImage={true}
          className="bg_white"
          title={"CORE SKILLS"}
          content={
            <>
              Rev. Fr. Simon Raj is an effective communicator with proven team
              building abilities. Trained in Competence Assessment, he is able
              to draw the best from the people he works with. A people’s leader
              he invests qualitatively in need-based capacity building of the
              human resources.
              <br />
              <br />
              Having strong analytical and evaluation skills he has led
              qualitative scientific and social research nationally and
              internationally and published reports, manuscripts in peer
              reviewed journals, presentations at meeting and conferences, etc
              <br />
              <br />
              Networking, linkages and advocacy is Rev. Fr. Simon Raj’s forte.
              He excels in Conflict Resolution and Peace Building. Adept in
              financial management he was provided technical assistance for
              execution of various project work as superior and an external
              consultant and has been well appreciated for his efforts.
            </>
          }
        />

        <PageContent
          sectionGap="bottom"
          className="bg_white"
          title="Our Director's History"
          content={
            <>
              <h3 className="heading-5">ACADEMIC QUALIFICATION</h3>
              <ul>
                <li>Masters in Business Administration</li>
                <li>Masters in Sociology</li>
                <li>Masters in English Literature</li>
                <li>Bachelors in Education</li>
                <li>Bachelors in Business Administration</li>
              </ul>
              <h3 className="heading-5">TRAINING & WORKSHOPS</h3>
<ul>
  <li>Local Capacities for Peace building (LCPB)</li>
  <li>Transformation Development Indicator (TDI) report writing.</li>
  <li>Accessing the Competencies of People.</li>
  <li>Human Resources.</li>
  <li>Responding to Child labour- International Lessons Learnt.</li>
  <li>Disaster Management.</li>
  <li>LEAP (Learning through Evaluation and Planning).</li>
  <li>Proposal Writing Workshop for Additional Non -Sponsorship funding.</li>
  <li>Gender Sensitization.</li>
  <li>Budget and Finance Management.</li>
  <li>Child Protection & Policy.</li>
  <li>Climate Change and Community Resilience.</li>
  <li>Policy Assessment.</li>
</ul>
<h3 className="heading-5">ACHIEVEMENTS</h3>
<ul>
  <li>Twice awarded with the Best Social work Director by the Caritas India.</li>
  <li>Formation of Platform for NGO Networking & Linkages.</li>
  <li>Successful Youth Director for 10 years at Indore, Dhar and Dewas district.</li>
  <li>Acclaimed for various initiatives on child Parliament at district level partially managed projects.</li>
  <li>Acclaimed for various on community development through Organic Farming at Khurda & Dhani Block Level.</li>
  <li>Consultant for the National Institute of Public Cooperation & Child Development, Indore</li>
  <li>Member of Agriculture Community of Practice, MEHA, JAN SHAKTI & World Vision as a “think-Tank” to Identify, develop, document and champion integrated sector programming.</li>
  <li>Member of India Program Quality Network, Caritas India with the purpose to clarify the concept of Ministry Quality in relation to World Vision India, Stimulated discussion on different topics and creative thinking.</li>
  <li>Founding member of the MEHA Organization.</li>
  <li>Team Leader for the Indore NGO Alliance, Indore. M.P.</li>
  <li>Dean of Catholic Diocese for two District Indore and Dhar.</li>
</ul>

            </>
          }
        />

        <div></div>
      </main>
    </>
  );
};

export default Director;
