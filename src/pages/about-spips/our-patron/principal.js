import Head from "next/head";
import React from "react";
import Features from "@/components/liberary/Features";
import SectionImage from "/public/assets/images/Sr.-Principal.png";
import PageContent from "@/components/comman/PageContent";
import bannerImg from "/public/assets/images/college-banner.png";
import Banner from "@/components/banner";




const Principal = () => {
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
          heading="Our Principal"
        />

        <Features
          sectionGap="both"
          SectionImage={SectionImage}
          descriptionClass="about_message"
          className="bg_white"
          title={"Our Principal"}
          content={
            <>
              <h3 className="heading-5">LIFE PHILOSOPHY</h3>
              <br />
              <strong className="small-text"> “Be faithful, be merciful and in all your ways acknowledge God, and he will make straight your paths”</strong>
              <br />
<br/><br/>
<h3 className="heading-5">EXPERIENCE</h3>
<br />

              Dr. Sr. Alice Thomas is a renowned educationist and an eminent scholar with more than <strong className="small-text">three decades of rich experience in the arena of education & research.</strong> A dynamic leader, kind mentor, superlative communicator, exceptional counselor, expert faculty & organized manager. Sr. Alice is a doctorate in statistics and hold titles to various books and national and international research papers. 
<br/><br/>
Serving as the Principal at SPIPS since 1st March 2017, sister’s illustrious career spans <strong className="small-text">over thirty years.</strong> She started her career as a faculty member at Mercy College, Palakkad, Kerala in 1982. In 1984, she joined Vimala College where she was elevated to the post of Head of Department (Statistics). In 2011, she again worked with Mercy College, Palakkad as Head of Statistics Department Owing to her zeal, unwavering determination and hard work, she was later appointed as the Principal of the same college and rendered her services from 2013 to 2016.
            </>
          }
        />

       
         <PageContent
          sectionGap={"bottom"}
          className="bg_white"
          title={"Our Principal's History"}
          content={
            <>
             <h3 className="heading-5">EDUCATION</h3>
             <ul>
              <li>M.Sc. from the Kerala University</li>
              <li>M.Phil from Cochin University</li>
              <li>P.G.D.C.A. from LBS-State Board of Technical  education</li>
              <li>Ph.D. in Statistics from Mahatma Gandhi University, Kottayam.</li>
             </ul>
             <h3 className="heading-5">CONTRIBUTION IN TEACHING</h3>
             <ul>
              <li>Actively involved in formulating the Graduate syllabi</li>
              <li>Instrumental in introducing Certificate Courses in Analytical Software (SPSS, EXCEL, etc.)</li>
              <li>Imparted computer proficiency skills to a number of students</li>
              <li>Delivered Radio Talks on diverse topics such as ‘Statistic in daily life’ ‘Scientist in this week’ and many more.</li>
              <li>Introduced the system of providing reference list of periodicals available in the library to the students in order to facilitate better learning.</li>
              <li>Undertook Confidence building exercises as a part of employment enhancement programmes for students.</li>
              <li>Incorporated innovative teaching pedagogy in classroom teaching.</li>
              <li>Mentored and encouraged students for participation and paper presentations in conferences and seminars.</li>
              <li>Remedial coaching in Statistics for weak students.</li>
              <li>A Grade NAAC Accreditation awarded in 2014 for Mercy College during her Principalship.</li>
              <li>Qualified and got permission to start Autonomous college.</li>
             </ul>
             <h3 className="heading-5">ACHIEVEMENTS</h3>
             <ul>
              <li>58 University ranks secured by students during her tenure at Mercy College & Vimala College.</li>
              <li>Recognized Research guide of Mahatma Gandhi University Kottayam.</li>
              <li>Special words of appreciation from the NAAC team that visited Vimala College in 2009.</li>
              <li>Organized many seminars, camps, workshops and conferences.</li>
              <li>Substantial contribution in extension activities and community service.</li>
              <li>Bagged and successfully accomplished Metanexus USA sponsored Major & 5 UGC sponsored Minor Projects</li>
              <li>Subject Expert in the staff Selection Committee in L.F. College, Guruvayoor, Mercy College, Palakkad, St. Mary’s College, Thrissur</li>
              <li>Resource Person at many conferences, workshops, seminars</li>
              <li>Life time membership in several Academic Socio-cultural Voluntary organizations</li>
              <li>Strengthened Local Capacities for Peace</li>
             </ul>
             <h3 className="heading-5">PUBLICATIONS</h3>
<ul>
  <li>Authored four books</li>
  <li>Has to her credit, 36 National/International Publications, 33 articles in regional Malayalam Magazines.</li>
  </ul>
  <h3 className="heading-5">RESEARCH PROJECT</h3>
<ul>
  <li>1 Metanexus USA Sponsored Major Project</li>
  <li>5 UGC Sponsored Minor Projects</li>
  </ul>
  <h3 className="heading-5">CONFERENCES / SEMINARS / WORKSHOPS</h3>
<ul>
  <li>14 National & 23 International Paper Publication.</li>
  <li>Total 41 Paper Presentation.</li>
  <li>63 National & International Conference, Seminars & Workshops attended.</li>
  <li>15 others</li>
</ul>
            </>
          }
        />
         <PageContent
          sectionGap={"bottom"}
          className="bg_white"
          title={"AWARDS & RECOGNITION"}
          content={
            <>
           
<ul>
  <li>Inspiring Women’s Award Bangkok 2020 for Distinguished Principal by International Association of Research and Developed Organization.</li>
  <li>Best Educationist Award and Certificate of Education Excellence by International Institute of Education and Management.</li>

  <li>Proudly Presents 2020 Prabhat Prestigious Award, An Exclusive Honour certificate for Excellent Achievement & Renowned Services to the Nationby Sindhu Prabhat News & CBG EDU International.</li>
  <li>Certificate of Achievement,Dr.Sr. Alice Thomas , Principal. St.Paul Institute of Professional Studies, Indore, M.P. is a hon’ble member of research Foundation of India and has all privilege’s of Member.</li>
  <li>All India Association for Christian Higher Education (AIACHE) Award for the best Principal of India, 2019-2020.</li>
</ul>
            </>
          }
        />
         <PageContent
          sectionGap={"bottom"}
          className="bg_white"
          title={"AN ANDROIT ORGANIZER"}
          description={
            <>
           
<ul>
  <li>Established Vimala Society for Science and Religion (VSSR) in 2005 with an aim of exploring the dynamic interface between Science and Religion.</li>
  <li>Organized a Nature Camp at Vazhachal in 2005. Organized a three days seminar at Thatterkkad in 2005.</li>

  <li>Organized an International Seminar on ‘Generation Next 2k5’ on future computing technologies sponsored by VSSR.</li>
  <li>Conducted Inter-collegiate Quiz Competition on Information Technology in connection with the International Seminar.</li>
  <li>Several outreach programmes were arranged. Organized one day seminar on “Participatory Training methods”.</li>
  <li>Organized Orientation Programme for School Teachers.</li>
  <li>Organized training Programme for the care takers of mentally ill.</li>
  <li>Conducted an International Symposium in co­ordination with ASSR.</li>
  <li>Organized workshop on “Skill Training and Marketing” for SHG members jointly by the Social Work Department and VSSR.</li>
  <li>Organized a Diabetes Detection Camp and Awareness Programme.</li>
  <li>Conducted Medical camp and awareness on maternal care.</li>
  <li>Organized three days training Programme on “Pain and Palliative Care”.</li>
  <li>Co-ordinated Annual Conference of Met nexus Institute on Religion and Science, Philadelphia.</li>
<li>Organized a two days Seminar on “Recent Trends in Statistics”.</li>
<li>Organized Workshop on SAS Programming.</li>
<li>Organized Inter-collegiate Quiz Competition for the undergraduate students in Statistics.</li>
<li>Conducted a seminar on ‘Women Empowerment”.</li>
<li>Organized National Seminar on “Geo Aqua Convention”</li>
<li>Organized Golden Jubilee Programmes like National seminars, Social projects (help for Housing, higher education, marriage, free tuition medicine etc.) Rasavikalpam, an inimitable bouquet of Indian Classical Dances, health month, heritage week etc.</li>
</ul>
            </>
          }
        />
    

      

        <div></div>
      </main>
    </>
  );
};

export default Principal;
