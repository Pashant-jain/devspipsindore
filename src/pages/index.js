import Head from "next/head";
import dynamic from "next/dynamic";

import Banner from "@/components/banner";
import NewsAndAnnouncements from "@/components/homePage/ NewsAndAnnouncements";
import OurStats from "@/components/homePage/OurStats";
import Testimonials from "@/components/comman/testimonials";
import TopRecruiters from "@/components/homePage/TopRecruiters";
import OurGallery from "@/components/homePage/OurGallery";
import Calander from "@/components/homePage/Calendar";

import { Affiliation, Recruiters } from "@/data";
import { testimonialsData } from "@/config";
import Features from "@/components/liberary/Features";
import FeaturedCourses from "@/components/homePage/FeatruredCourses";


import DeptOfScience from '/public/assets/images/department-of-science.jpg'
import DeptOfCommerce from '/public/assets/images/DEPARTMENT-OF-COMMERCE.png'
import DeptOfComputerScience from '/public/assets/images/dept-of-computer-science.jpg'
import DeptOfManagement from '/public/assets/images/dept-of-computer-management.jpg'
import DeptOfhumanities from '/public/assets/images/dept-of-computer-humanities.jpg'
import DeptOfPHysicalEdu from '/public/assets/images/department-of-phy-edu.jpg'




const bannerImg = dynamic(() =>
  import("/public/assets/images/front-banner-img.png")
);

const contentData = [
  {
    key: "tab1",
    title: "Department of Management",
    content: (
      <>
      {/* Department of Commerce Section */}
      <Features
        descriptionClass="about_message"
        SectionImage={DeptOfCommerce}
        content={
          <>
            <h3 className="heading-5">DEPARTMENT OF COMMERCE</h3>
            <br />
            <p>
              The Department of Commerce was established in the year 2010. Since
              its inception, the department has played a pivotal role, steering
              all college endeavors toward success. With an aim to impart
              world-class, value-based education in the fields of business and
              commerce, the department offers a Bachelor in Commerce (B.Com)
              course with distinctive specializations, designed to acquaint
              students with various development practices of trade and commerce
              globally. The department emphasizes a collaborative approach, with
              highly qualified faculty members who organize various academically
              enriching events such as webinars, seminars, and guest lectures to
              provide enhanced exposure to students.
            </p>
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
      {/* Department of Management Section */}
      <Features
        descriptionClass="about_message"
        leftImage={true}
        SectionImage={DeptOfManagement}
        content={
          <>
            <h3 className="heading-5">DEPARTMENT OF MANAGEMENT</h3>
            <br />
            <p>
              The study of Management is a dynamic, self-motivated, and vibrant
              discipline. The youngest department at the college, operating
              independently since its inception, continuously works using a
              hybrid approach of concept-based lecture delivery and interactive
              management activities to enable holistic student development.
              Faculty members, with expertise in complementary areas of
              management studies, foster student growth through management
              activities, games, and skill development programs to prepare them
              for industry readiness.
            </p>
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
    </>
    ),
  },
  {
    key: "tab2",
    title: "Computer Science",
    content: (
      <>
      <Features
      SectionImage={DeptOfScience}
        descriptionClass="about_message"
        content={
          <>
            <h3 className="heading-5">DEPARTMENT OF SCIENCE</h3>
            <br />
            <p>
              The Department of Science was incubated in 2010 with a committed
              focus to help students become efficient follower of scientific
              information, develop rational and systematic observation knack and
              inspire experimental investigation insights for growth of self and
              the society. The department offers a B.Sc (Computer Science)
              course with the total intake of 60 students per year. The students
              are not only trained in academic excellence but also encouraged to
              acquire industrial and research exposure in various technologies.
              Through well equiped Physics laboratory, in-house training
              sessions, National and International research Seminar &amp;
              confrences and with guidance from professional teachers who are
              experts in their respespective branches, the students are guided
              to strike an innovative balance between theory and practical
              knowledge to set up the their involvement and creativity with the
              Subjects.
            </p>
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
        descriptionClass="about_message"
        leftImage={true}
        SectionImage={DeptOfComputerScience}
        content={
          <>
            <h3 className="heading-5">DEPARTMENT OF COMPUTER SCIENCE</h3>
            <br />
            <p>
              The Department of Computer Science was established at St. Paul
              Institute of Professional Studies Indore, in September 2011. The
              Department strives to inculcate an in-depth knowledge among the
              students through various innovative and professional approaches to
              guide and inspire the students to become socially committed
              technical professionals. The department offers a Bachelor of
              Computer Applications (BCA) program, that provides core Computer
              applications foundation and equip the students with the necessary
              technical and research skills satisfying the requirements of the
              professional industries and academia. With well outfitted
              laboratories to execute the need of excellence in computer
              education and a dedicated Faculty team owning a wide range of
              research expertise and academic credentials, the department
              untiringly ensures to provide a dynamic learning environment
              through regular classes and various seminars, conferences,
              workshops, and student development progamme, organised on national
              and International level in association with various agencies for
              the benefit of faculty members and students, to keep up with
              emerging demands in the area of computer applications and its
              studies.
            </p>
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
    </>
    ),
  },
  {
    key: "tab3",
    title: "Social Science",
    content: (
      <>
      <Features
       SectionImage={DeptOfhumanities}
        descriptionClass="about_message"
        content={
          <>
          <h3 className="heading-5">DEPARTMENT OF HUMANITIES</h3>
          <br />
            The Department of Humanities was established at St. Paul Institute
            of Professional Studies, Indore in July 2010. The Department acts as
            a nursery for nurturing skills which complements the subjects taught
            in the field of Arts. The primary strength of the department is its
            intellectual engagement and inter-disciplinary nature. Capitalizing
            on this strength, the department strives to provide academic and
            inter-disciplinary excellence to the students in various streams of
            liberal arts such as Religious Studies, Sociology, Literature,
            Political Science, Psychology etc. Our curriculum focuses on
            concrete questions that matter in living a good life. The Department
            Faculty Members are specialists in complementary disciplines,
            including Theology, Philosophy, Psychology, Political Science,
            Economics, History and Literature. Together they craft intersecting
            classes that equip students to debate, analyze, discern and make
            careers and vocations in fields of law, academia, politics, service,
            priesthood, and fine arts to name just a few of many inspiring
            destinations.
            <br />
            <br />
            <h3 className="heading-5">Courses Offered</h3>
            <ul>
              <li>
                <strong className="small-text">
                  BA (English Literature, Political Science, Psychology)
                </strong>
              </li>
            </ul>
          </>
        }
      />

      <Features
       SectionImage={DeptOfPHysicalEdu}
        descriptionClass="about_message"
        leftImage={true}
       
        content={
          <>
           <h3 className="heading-5">DEPARTMENT OF PHYSICAL EDUCATION</h3>
           <br />
            The Department of Physical Education was setup in 2010 at St. Paul
            Institute of Professional Studies, Indore with a vision to empower
            students to develop healthy habits, instill fitness literacy,
            discipline and inculcate lifelong awareness among the students
            regarding their health, discipline and wellness. Abiding by the
            University directives, the Department of Physical Education and
            Sports indefatigable conducts various indoor and outdoor sports
            activities, Inter-house competitions and tournaments such as
            Badminton, Table Tennis, Chess, Caroms, Basketball, Cricket,
            Football, Volley ball, Athletics and others to keep students
            physically engaged. The students are incessantly trained and groomed
            for various inter collegiate competitions and Inter-Zone (West Zone)
            competitions and for the special programs prescribed by the AIU, DHE
            and DAVV under the able guidance of well trained, dedicated and
            professional sportsperson serving as faculty members in the
            department with a sole aim of promoting Physical Fitness and
            attention to health Well-being. <br />
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
    </>
    ),
  },
];


export default function Home() {
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
        <Banner isFrontBanner={true} bannerImg={bannerImg} />
        <NewsAndAnnouncements sectionGap="both" />
        <OurStats sectionGap="bottom" />
        <Calander sectionGap="both" />
        <FeaturedCourses content={contentData} />
        <Testimonials
          sectionGap="both"
          testimonialsData={testimonialsData}
          showborders={true}
        />
        <TopRecruiters
          sectionGap="both"
          title="Our Top Recruiters"
          data={Recruiters}
        />
        <TopRecruiters
          sectionGap="bottom"
          title="Affiliation With"
          data={Affiliation}
        />
        <OurGallery sectionGap="bottom" />
      </main>
    </>
  );
}
