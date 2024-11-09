import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Banner from "@/components/banner";
import Accordion from "@/components/comman/Accordion";
import TabNavigation from "@/components/comman/TabNavigation";

import bannerImg from "/public/assets/images/college-banner.png";
import RuralUpliftmentImage from "/public/assets/images/collage-7-1-1.png";




const tabsData = {
  "Rural Upliftment Program": (
    <>
      <div>
        <p className="text-regular">We are a College with a Difference.</p>
        <br />
        <p className="text-regular">
          In line with the humanitarian philosophy of the management of the institute, the staff and the students believe in the Power of Service. The strength of a human heart is in giving, and to instill and cement this sense of generosity among our students, the college has adopted a rural area where, under the flagship of the NSS and the NCC wing of the college, volunteers organize various development and awareness initiatives from time to time that serve the society, bringing in the difference. Our students are taught to be the change and spread light as they go, rather than be the light.
        </p>
        <Image src={RuralUpliftmentImage} alt="" loading="lazy" width={800} height={800} />
      </div>
    </>
  ),
  "Morning Assembly":  <>
  <div>
    <p className="text-regular">We are a College with a Difference.</p>
    <br />
    <p className="text-regular">
    Morning assembly is the most serene feature of the college curriculum, where the students learn the value of praying together and are exposed to moral and ethical values. 
    </p><p className="text-regular">
For the Morning Assembly SPIPS have a dedicated committee. Present committee members are as follows-
</p><p className="text-regular">
The morning assembly is held on a daily basis in the college and forms an integral part of the college curriculum. Each class is allotted a specific date of performance in the Morning Assembly. Routine activities include-
    </p>
    <ol>
      <li>Prayer</li>
      <li>Prayer Song</li>
      <li>Thoughts</li>
      <li>News</li>
      <li>Students’ Birthday announcement</li>
      <li>Respected Principal delivers the Word of the God</li>
      <li>Honourable Director addresses the Gathering</li>
      <li>Important announcements</li>
      <li>Faculty and Staff Birthday, Achievements  etc are celebrated</li>
      <li>Students achievement are also celebrated</li>
      <li>Days of Special Importance (i.e. Sadbhavna Diwas, Environment Day, NCC day etc.)are also observed</li>
      <li>Celebration of various religious festivals( Eid, Christmas, Diwali etc)</li>
      <li>National Anthem and Song.</li>
      <li>College Anthem</li>
      <li>On every Saturday Faculty Members conduct the assembly.</li>
    </ol>
    <p className="text-regular">
    One or more students are selected from each class as Morning Assembly Volunteers, to promote and develop leadership skills and confidence in the students.
    </p>
  </div>
</>,
  "Promotion of Human Values & Secularism":  <>
  <div>
  
    <p className="text-regular">
    Human values are the virtues that guide us to take into account the human element when we interact with other human beings. Human values are, for example, respect, acceptance, consideration, appreciation, listening, openness, affection, empathy and love towards other human beings.
    </p>
    <br />
    <p className="text-regular">To develop human value in student, certain activities are undertaken-</p>
    <ol>
      <li>Class Wise Social Activity</li>
      <li>Class Presentations</li>
      <li>Special lectures by Director and Principal</li>
      <li>Counselling (students)</li>
      <li>Contribution for social causes (Donations).</li>
    </ol>

    <p className="text-regular">Every faculty and student is treated equally and are given equality of freedom, irrespective of caste, creed or religion. In SPIPS, we celebrate all the major festivals of different religion such as Christmas, Eid and Diwali.

</p>
  </div>
</>,
  "Special Meetings with the Director and Principal":  <>
  <div>
    <p className="text-regular">Special Meetings with the Reverend Director and Respected Principal are conducted every year to help the college understand the grievances of the students. All the students actively participated in the same.</p>
    <br />
    <p className="text-regular">
    Special meetings along with the faculty members are also conducted at a regular basis. The Director and the Principal annually visit the homes of the Faculty Members in order to increase familiarity.</p>
  </div>
</>,
  "Discipline Committee":  <>
  <div>
    <p className="text-regular">Students who engage in academic misconduct or violate the standards of the institution in other ways may be brought before the College’s disciplinary committee.</p>

<h5 className="text-bold" >Objectives</h5>
<ul>
  <li>To ensure calm and peaceful academic atmosphere in the campus.</li>
  <li>To avoid physical confrontation among students.</li>
  <li>To conduct enquiries on report of indisciplinary activities among students.</li>
  <li>To initiate model actions against students involved in indisciplinary activities.</li>
  <li>To initiate steps to reduce violence, confrontation in future.</li>
</ul>
    <br />
    <br />
    <ol>
      <li>Regular meeting is conducted.</li>
      <li>Orientation programmes are conducted at the beginning of each year.</li>
      <li>Uniform is compulsory for students.</li>
      <li>Id Card is compulsory for students.</li>
      <li>Different duties are done by Professors for maintaining discipline in the college:</li>
      <ol>
        <li>Morning Assembly Duty</li>
        <li>Floor Duty and Campus Duty during break time.(Reference Discipline Committee File)</li>
        <li>Campus Duty and Floor Duty at noon time.(Reference Discipline Committee File)</li>
        <li>Duty During the Programmes (Reference Discipline Committee File)</li>
      </ol>
      <li>Students are allowed to go in library and canteen only in break and after the regular classes.</li>
      <li>To make students disciplined and inculcate these values, these duties are also allotted to the students.</li>
    </ol>
    <br />
    <br />
<h5 className="text-bold" >Action against indiscipline students-</h5>
<ol>
  <li>Suspension from regular classes.</li>
  <li>Issuing notice to the parents.</li>
</ol>
<br />
<br />
<h5 className="text-bold" >Action against indiscipline students-</h5>
<ol>
  <li>Designated lectures per day, conducted from Monday to Saturday.</li>
  <li>Arrangement lectures, when any faculty is absent.</li>
  <li>75% attendance is compulsory.</li>
  <li>Teaching through modern technology like AV Room.</li>
  <li>Attendance of the First Year Students using Biometrics Machine.</li>
<li>Smart Board installed in selected classrooms for interactive learning.</li>
<li>Students are not allowed to leave the college campus before 12:45 pm</li>
</ol>
    </div>
</>,
  "Anti-Ragging Zone":  <>
  <div>
  <h5 className="text-bold" >Objective of the Anti-Ragging Committee:</h5>
  <p className="text-regular"> In accordance with the Supreme Court on Ragging (2007), the judgment of Supreme Court on Ragging (2009) and the UGC regulations to curb the menace of ragging (2009), SPIPS  has formed an anti-ragging committee to completely wipe out the menace from the campus.</p>
    <p className="text-regular">What Constitutes Ragging?</p>
    <br/>
    <p className="text-regular">Definition of Ragging as per UGC Regulations, 2009: “Ragging constitutes one or more of any of the following acts:</p>
    <br />
    <ol>
      <li>any conduct by any student or students whether by words spoken or written or by an act which has the effect of teasing, treating or handling with rudeness a fresher or any other student;</li>
      <li>indulging in rowdy or indiscipline activities by any student or students which causes or is likely to cause annoyance, hardship, physical or psychological harm or to raise fear or apprehension thereof in any fresher or any other student;</li>
      <li>asking any student to do any act which such student will not in the ordinary course do and which has the effect of causing or generating a sense of shame, or torment or embarrassment so as to adversely affect the physique or psyche of such fresher or any other student;</li>
      <li>any act by a senior student that prevents, disrupts or disturbs the regular academic activity of any other student or fresher;</li>
      <li>exploiting the services of a fresher or any other student for completing the academic tasks assigned to an individual or a group of students.</li>
      <li>any act of financial extortion or forceful expenditure burden put on a fresher or any other student by students;</li>
      <li>any act of physical abuse including all variants of it: sexual abuse, homosexual assaults, stripping, forcing obscene and lewd acts, gestures, causing bodily harm or any other danger to health or person;</li>
      <li>any act or abuse by spoken words, emails, post, public insults which would also include deriving perverted pleasure, vicarious or sadistic thrill from actively or passively participating in the discomfort to fresher or any other student;</li>
      <li>any act that affects the mental health and self-confidence of a fresher or any other student with or without an intent to derive a sadistic pleasure or showing off power, authority or superiority by a student over any fresher or any other student. “</li>
    </ol>
    <br />
    <br />
    <h5 className="text-bold" >To promote a healthy learning environment, an Anti – Ragging Committee is constituted in this college to prevent ragging and to take anti ragging measures as per the guidelines issued by the Supreme Court of India & UGC. The Anti-Ragging Committee is formed to address the issues concerning ragging. The committee for the academic year 2019-20 is as follows:</h5>
    <ol>
      <li>Committee is formed According to UGC Guidelines.</li>
      <li>Two Outsiders are recruited (One from Police department, and another from media.)</li>
      <li>Student Representative members</li>
      <li>Awareness Program regarding Anti ragging Committee is done through hoardings, declaration in orientation programme of students.</li>
      <li>Regular meetings are conducted.</li>
      <li>Month wise report is sent to DAVV.</li>
      <li>Online Anti-ragging form is submitted annually.</li>
    </ol>
    <br />
    <br />
    <h5 className="text-bold" >Administrative action in the event of ragging in St. Paul Institute of Professional Studies: –</h5>
    <p className="text-regular">
    Depending on the nature and gravity of the crime – established by the Anti-Ragging Squad, those who are found guilty, may face the under mentioned consequences :
    </p>
    <ol>
      <li>Suspension from attending classes and academic privileges.</li>
      <li>Withholding/withdrawing scholarship/fellowship and other benefits.</li>
      <li>Debarring from appearing in any test/examination or other evaluation process.</li>
      <li>Withholding results.</li>
      <li>Debarring from representing the institution in any regional, national or international meet, tournament, youth festival, etc.</li>
      <li>Cancellation of admission.</li>
      <li>Rustication from the institution for period ranging from one to four semesters.</li>
      <li>Expulsion from the institution and consequent debarring from admission to any other institution for a specified period. Provided that where the persons committing or abetting the act of ragging are not identified, the institution shall resort to collective punishment.</li>

    </ol>
  </div>
</>,
};

const InstitutionalDistinctiveness = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Update the screen size state based on window width
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check on mount

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Head>
        <title>INSTITUTIONAL DISTINCTIVENESS - SPIPS</title>
      </Head>
      <Banner
        isFrontBanner={false}
        bannerImg={bannerImg}
        heading={"INSTITUTIONAL DISTINCTIVENESS"}
      />
      <div className={`spacing_both`}>
        <div className="container">
          {isMobile ? (
            <Accordion tabsData={tabsData} />
          ) : (
            <TabNavigation tabsData={tabsData} />
          )}
        </div>
      </div>
    </>
  );
};

export default InstitutionalDistinctiveness;
