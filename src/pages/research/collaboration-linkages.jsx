import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Banner from "@/components/banner";
import Accordion from "@/components/comman/Accordion";
import TabNavigation from "@/components/comman/TabNavigation";

import bannerImg from "/public/assets/images/college-banner.png";
import RuralUpliftmentImage from "/public/assets/images/collage-7-1-1.png";

const tabsData = {
  "Activities in Collaborations": (
    <>
      <table className="w-100">
        <tbody>
          <tr>
            <td width="32">
              <strong>S. No</strong>
            </td>
            <td width="252">
              <strong>Title of the collaborative activity</strong>
            </td>
            <td width="265">
              <strong>
                Name of the collaborating agency with contact details
              </strong>
            </td>
            <td width="96">
              <strong>Year of collaboration</strong>
            </td>
            <td width="68">
              <strong>Duration</strong>
            </td>
          </tr>
          <tr>
            <td width="32">1</td>
            <td width="252">Xavier Board Northern Regional Meet</td>
            <td width="265">Xavier Board of Higher Education In India</td>
            <td width="96">2016-17</td>
            <td width="68">1 day</td>
          </tr>
          <tr>
            <td width="32">2</td>
            <td width="252">
              Training Programme on Project based Learning and Need of Academic
              Audit in Enhancing the Quality of Higher Education
            </td>
            <td width="265">St. Aloysius&apos; College, Jabalpur</td>
            <td width="96">2016-17</td>
            <td width="68">2 days</td>
          </tr>
          <tr>
            <td width="32">3</td>
            <td width="252">
              Workshop on Revised Assessment and accreditation Framework for
              Higher Education Institutions in India
            </td>
            <td width="265">St. Aloysius&apos; College, Jabalpur</td>
            <td width="96">2018-19</td>
            <td width="68">2 days</td>
          </tr>
          <tr>
            <td width="32">4</td>
            <td width="252">Workshop on Smart Girl</td>
            <td width="265">Shri Jain Diwakar College, Indore</td>
            <td width="96">2018-19</td>
            <td width="68"></td>
          </tr>
          <tr>
            <td width="32">5</td>
            <td width="252">Workshop on New Education Policy</td>
            <td width="265">Shri Jain Diwakar College, Indore</td>
            <td width="96">2020-21</td>
            <td width="68">1 day</td>
          </tr>
          <tr>
            <td width="32">6</td>
            <td width="252">
              Workshop on Forensic Accounting and Forensic Audit
            </td>
            <td width="265">St. Aloysius&apos; College, Jabalpur</td>
            <td width="96">2020-21</td>
            <td width="68">1 day</td>
          </tr>
          <tr>
            <td width="32">7</td>
            <td width="252">
              Guest Lecture on Triple Talaq-Present Judgement and its various
              dimensions
            </td>
            <td width="265">St. Aloysius&apos; College, Jabalpur</td>
            <td width="96">2020-21</td>
            <td width="68">1 day</td>
          </tr>
          <tr>
            <td width="32">8</td>
            <td width="252">Confluence 2020</td>
            <td width="265">St. Aloysius&apos; College, Jabalpur</td>
            <td width="96">2020-21</td>
            <td width="68">5 Days</td>
          </tr>
          <tr>
            <td width="32">9</td>
            <td width="252">
              Certificate Course in Banking, Finance and Insurance
            </td>
            <td width="265">Bajaj FinServ</td>
            <td width="96">2019-20</td>
            <td width="68">26 Days</td>
          </tr>
          <tr>
            <td width="32">10</td>
            <td width="252">
              International Virtual Conference on &apos;‘Emerging Trends and
              Technologies in Area of I.T., Science, Social Sciences, Commerce
              and Management’
            </td>
            <td width="265">Research Foundation of India</td>
            <td width="96">2019-20</td>
            <td width="68">1 Days</td>
          </tr>
          <tr>
            <td width="32">11</td>
            <td width="252">
              Student Exchange Programme on &apos;7 Dimensions of wellness&apos;
            </td>
            <td width="265">Research Foundation of India</td>
            <td width="96">2020-21</td>
            <td width="68">5 Days</td>
          </tr>
          <tr>
            <td width="32">12</td>
            <td width="252">
              Student Exchange Programme on &apos;Science &amp; Spirituality for a
              harmonious and fulfilling Human Community&apos;
            </td>
            <td width="265">Research Foundation of India</td>
            <td width="96">2020-21</td>
            <td width="68">5 Days</td>
          </tr>
          <tr>
            <td width="32">13</td>
            <td width="252">
              Student Exchange Programme on &apos;Career Planning and Career
              Management&apos;
            </td>
            <td width="265">Research Foundation of India</td>
            <td width="96">2020-21</td>
            <td width="68">5 Days</td>
          </tr>
          <tr>
            <td width="32">14</td>
            <td width="252">
              International Virtual Conference on Intellectual Property Rights
              and Contemporary issues in Innovative, Ecosystem, Environmental
              and Sustainable Development’
            </td>
            <td width="265">Research Foundation of India</td>
            <td width="96">2020-21</td>
            <td width="68">1 day</td>
          </tr>
          <tr>
            <td width="32">15</td>
            <td width="252">
              Application of Knowledge Management in Higher Education
            </td>
            <td width="265">Carmel College Mala (Kerala)</td>
            <td width="96">2022-23</td>
            <td width="68">1 Day</td>
          </tr>
          <tr>
            <td width="32">16</td>
            <td width="252">
              Career Opportunities &amp; Sustainable Development in IT
            </td>
            <td width="265">
              St. Francis De Sales College Nagpur (Maharashtra)
            </td>
            <td width="96">2022-23</td>
            <td width="68">1 Day</td>
          </tr>
          <tr>
            <td width="32">17</td>
            <td width="252">Benchmarking in Service Industry</td>
            <td width="265">St. Xavier&apos;s College Mumbai (Maharashtra)</td>
            <td width="96">2022-23</td>
            <td width="68">1 Day</td>
          </tr>
          <tr>
            <td width="32">18</td>
            <td width="252">Introduction to JAVA for Newbies</td>
            <td width="265">Research Foundation of India, New Delhi</td>
            <td width="96">2022-23</td>
            <td width="68">3 Days</td>
          </tr>
          <tr>
            <td width="32">19</td>
            <td width="252">Practical Implication of Taxation Policy</td>
            <td width="265">St. Aloysius College Jabalpur (Madhya Pradesh)</td>
            <td width="96">2022-23</td>
            <td width="68">1 Day</td>
          </tr>
          <tr>
            <td width="32">20</td>
            <td width="252">
              Handling emotions in Young Age with reference to Love
            </td>
            <td width="265">De Paul College Mysore (Karnataka)</td>
            <td width="96">2022-23</td>
            <td width="68">1 Day</td>
          </tr>
          <tr>
            <td width="32">21</td>
            <td width="252">Introduction of Negotiable Instrument Act</td>
            <td width="265">St. Aloysius College Jabalpur (Madhya Pradesh)</td>
            <td width="96">2022-23</td>
            <td width="68">1 Day</td>
          </tr>
          <tr>
            <td width="32">22</td>
            <td width="252">Nutrition and Wellbeing of Students</td>
            <td width="265">St. Theresa&apos;s College Kerala</td>
            <td width="96">2022-23</td>
            <td width="68">1  Day</td>
          </tr>
          <tr>
            <td width="32">23</td>
            <td width="252">
              Rationality and Critical Thinking Amidst Modern Lifestyle
            </td>
            <td width="265">Marian College Kuttikkanam Autonomous Kerala</td>
            <td width="96">2022-23</td>
            <td width="68">1  Day</td>
          </tr>
          <tr>
            <td width="32">24</td>
            <td width="252">Workshop on Soft Skills</td>
            <td width="265">Research Foundation of India New Delhi</td>
            <td width="96">2022-23</td>
            <td width="68">3 Days</td>
          </tr>
          <tr>
            <td width="32">25</td>
            <td width="252">Learning SPSS to strengthen Research</td>
            <td width="265">
              St. Thomas College Pala Kerala, St. Albert&apos;s College Kerala,
              Alphonsa College Kerala
            </td>
            <td width="96">2022-23</td>
            <td width="68">1 Day</td>
          </tr>
          <tr>
            <td width="32">26</td>
            <td width="252">
              Digital Wellbeing with tips and trick for Interview
            </td>
            <td width="265">
              Annai Vailankanni Arts and Science College Thanjavur (Tamilnadu)
            </td>
            <td width="96">2022-23</td>
            <td width="68">1 Day</td>
          </tr>
          <tr>
            <td width="32">27</td>
            <td width="252">Mock Gram Sabha</td>
            <td width="265">Janvikas Society Indore (Madhya Pradesh)</td>
            <td width="96">2022-23</td>
            <td width="68">1 Day</td>
          </tr>
          <tr>
            <td width="32">28</td>
            <td width="252">
              Group Discussion on Problems of Indian Judicial System
            </td>
            <td width="265">Samman Society Indore (Madhya Pradesh)</td>
            <td width="96">2022-23</td>
            <td width="68">1 Day</td>
          </tr>
          <tr>
            <td width="32">29</td>
            <td width="252">
              Session on Application of Psychology Theories in Practical Life
            </td>
            <td width="265">
              Deen Bandhu Samajik Sansthan Indore (Madhya Pradesh)
            </td>
            <td width="96">2022-23</td>
            <td width="68">1 Day</td>
          </tr>
          <tr>
            <td width="32">30</td>
            <td width="252">Session on Psychology</td>
            <td width="265">
              Indore Diocese of Social Services Indore (Madhya Pradesh)
            </td>
            <td width="96">2022-23</td>
            <td width="68">1 Day</td>
          </tr>
          <tr>
            <td width="32">31</td>
            <td width="252">Session on National Epilepsy Day</td>
            <td width="265">
              St. Francis Hospital Indore Indore (Madhya Pradesh)
            </td>
            <td width="96">2022-23</td>
            <td width="68">1 Day</td>
          </tr>
          <tr>
            <td width="32">32</td>
            <td width="252">Presentation of Successful Entrepreneur Story</td>
            <td width="265">Jain Diwakar College</td>
            <td width="96">2022-23</td>
            <td width="68">1 Day</td>
          </tr>
          <tr>
            <td width="32">33</td>
            <td width="252">Striking Work-Life balance for Young Managers</td>
            <td width="265">
              St. Xavier&apos;s College Mumbai (Maharashtra) &amp; St. Anthony&apos;s
              College, Shillong
            </td>
            <td width="96">2022-23</td>
            <td width="68">1 Day</td>
          </tr>
          <tr>
            <td width="32">34</td>
            <td width="252">
              FDP on Innovative Teaching and Learning Pedagogy
            </td>
            <td width="265">Research Foundation of India, New Delhi</td>
            <td width="96">2022-23</td>
            <td width="68">7 Days</td>
          </tr>
          <tr>
            <td width="32">35</td>
            <td width="252">Internship Programme - Batch First</td>
            <td width="265">VR Subramanian &amp; Co.</td>
            <td width="96">2022-23</td>
            <td width="68">1 Month</td>
          </tr>
          <tr>
            <td width="32">36</td>
            <td width="252">Internship Programme - Batch Second</td>
            <td width="265">VR Subramanian &amp; Co.</td>
            <td width="96">2022-23</td>
            <td width="68">1 Month</td>
          </tr>
        </tbody>
      </table>
    </>
  ),
  "New Collaborations Initiated": (
    <>
      The institute looks forward to following collaborations for the benefit
      and the betterment of the students
      <ul>
        <li>Bhopal School of Social Sciences</li>
        <li>Jain Diwakar College</li>
        <li>Research Foundation of India</li>
        <li>All India Association for Christian Higher Education</li>
        <li>Alphonsa College, Pala</li>
        <li>St. Anthony’s College, Shillong</li>
        <li>St. Aloysius&apos; College (Autonomous), Jabalpur</li>
        <li>Kristu Jayanti College (Autonomous), Bangalore</li>
        <li>St. Xavier&apos;s College (Autonomous), Mumbai</li>
        <li>Assam Don Bosco University, Sonapur</li>
        <li>Xavier Board of Higher Education in India</li>
        <li>St. Teresa&apos;s (Autonomous) College, Ernakulam</li>
        <li>St. Francis De Sales College, Nagpur</li>
        <li>St. Joseph&apos;s College, Irinjalakuda</li>
        <li>De Paul College, Mysore</li>
        <li>St. Albert&apos;s College(Autonomous), Ernakulam</li>
        <li>St. Thomas College, Palai</li>
        <li>Carmel College, Mala</li>
        <li>
          Annai Vailankanni Arts and Science College, Thanjavur, Tamil Nadu
        </li>
        <li>Abhakunj Welfare Society (NGO), Indore</li>
        <li>Unnat Association (NGO), Indore</li>
        <li>Saman Welfare Society (NGO), Indore</li>
        <li>Indo-Global Social Service Society (NGO), Indore</li>
      </ul>
    </>
  ),
  Linkages: (
    <>
      The institute looks forward to following Linkages for the benefit and the
      betterment of the students
      <ul>
        <li>Janvikas Society</li>
        <li>St. Fransis Hospital</li>
        <li>Samman Society</li>
        <li>Indore School of Social Works</li>
        <li>Indore Diocese of Social Service Society</li>
        <li>Deen Bandhu Samaj Sahyog Sansthan</li>
      </ul>
    </>
  ),
};

const CollaborationLinkages = () => {
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
          <Accordion
            tabsData={tabsData}
            tabHeadClassName={"Accordian_dark_bg"}
          />
        </div>
      </div>
    </>
  );
};

export default CollaborationLinkages;
