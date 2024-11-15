import Banner from "@/components/banner";
import Head from "next/head";
import React from "react";

import Features from "@/components/liberary/Features";
import bannerImg from "/public/assets/images/college-banner.png";

import Image from "next/image";
import PageContent from "@/components/comman/PageContent";

import Image1 from "/public/assets/images/Nss/1.jpg";
import Image2 from "/public/assets/images/Nss/2.jpg";
import Image3 from "/public/assets/images/Nss/3.jpg";
import Image4 from "/public/assets/images/Nss/4.jpg";
import CommitteeList from "@/components/comman/CommitteeList";
import {
  AntiRagingCommiteeDeatils,
  AntiRagingCommiteeHead,
  LibraryAdvisoryCommeitteeTableData,
  LibraryAdvisoryCommeitteeTablehead,
} from "@/config";

const TrainingPlacement = () => {
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
  ];
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
        <Banner
          bannerImg={bannerImg}
          heading="Training & Placement"
          Contact={true}
        />

        <Features
          sectionGap="both"
          imageSlider={NccImages}
          descriptionClass="about_message"
          className="bg_white"
          content={
            <>
              <h3 className="heading-6">
                “Success is where preparation and opportunity meet.” -Robert
                William Unser
              </h3>
              St. Paul Institute of Professional Studies, Indore has been
              striving hard to empower the society by providing human resources.
              The Placements, both for final jobs and internships is an integral
              part of the annual calendar of activities of the Career Skill
              development and Placement Committee. The college through the
              committee has laid out a systematic process of dovetailing
              student’s career aspirations with corporate expectations.
              Consequently, industrial visits and industrial exposure tours are
              given specific importance.
              <br />
              <br />
              The career counselling and orientation sessions are devotedly held
              every year, wherein students who are interested in
              placements/internships/career guidance are encouraged to write
              industry-relevant curriculum vitae, participate in Group
              Discussions (GD) and Personal Interviews (PI).
              <br />
              <br />
              Additionally, necessary career guidance, training and skill-sets
              to enhance the employability of the students is the forte of the
              Placement Cell.
              <br />
              <br />
              We empower our students for competitiveness by imparting
              knowledge, and entrepreneurship and providing opportunities to
              enhance creative skills. We truly believe that it is these
              strengths that would help our students to successfully compete
              globally and take advantage of the emerging opportunities.
              <br />
              <br />
              The college under the care of Cell has introduced skills
              development and certification programmes. Tally, advance excel,
              Vedic mathematics, banking and insurance, stock market
              certifications, computer languages, digital marketing, beauty &
              wellness, bank PO, yoga and PSC preparation being prominent.
            </>
          }
        />

        <PageContent
          sectionGap="bottom"
          className="bg_white"
          title=" Career Skill development &amp; Placement Committee - Open and
                Closed campus Companies for Placement"
          content={
            <>
           
              <table className="w-100">
                <tbody>
                  <tr>
                    <td width="470">
                      <table className="w-100">
                        <tbody>
                          <tr>
                            <th width="797">Events</th>
                            <th width="91">Date</th>
                          </tr>
                          <tr>
                            <td>Placemen open Campus- TCS</td>
                            <td>19-09-2016</td>
                          </tr>
                          <tr>
                            <td data-sheets-value='{"1":2,"2":"Placemen open Campus- TCS"}'>
                              Placemen open Campus- CapGemini
                            </td>
                            <td>11-12-2016</td>
                          </tr>
                          <tr>
                            <td data-sheets-value='{"1":2,"2":"Placemen open Campus- CapGemini"}'>
                              Placemen open Campus- i-lead
                            </td>
                            <td>17/02/2017</td>
                          </tr>
                          <tr>
                            <td data-sheets-value='{"1":2,"2":"Placemen open Campus- i-lead"}'>
                              Placemen open Campus- Moreyeahs
                            </td>
                            <td>18/02/2017</td>
                          </tr>
                          <tr>
                            <td data-sheets-value='{"1":2,"2":"Placemen open Campus- Moreyeahs"}'>
                              Placement-CapGemeni
                            </td>
                            <td>18/09/2017</td>
                          </tr>
                          <tr>
                            <td data-sheets-value='{"1":2,"2":"Placement-CapGemeni"}'>
                              Placement-Perfact Solution Group: For Amazon
                              Company
                            </td>
                            <td>05-01-2018</td>
                          </tr>
                          <tr>
                            <td data-sheets-value='{"1":2,"2":"Placement-Perfact Solution Group: For Amazon Company"}'>
                              Placement-Tek Info Tree
                            </td>
                            <td>10-01-2018</td>
                          </tr>
                          <tr>
                            <td data-sheets-value='{"1":2,"2":"Placement-Tek Info Tree"}'>
                              Placement- Job Fair (at VGI) Opportunity open
                              campus
                            </td>
                            <td>21-02-2018</td>
                          </tr>
                          <tr>
                            <td data-sheets-value='{"1":2,"2":"Placement- Job Fair (at VGI) Opportunity open campus"}'>
                              Placement- Wipro- WILP open campus
                            </td>
                            <td>16-03-2018</td>
                          </tr>
                          <tr>
                            <td data-sheets-value='{"1":2,"2":"Placement- Mega Placement Opportunity open campus"}'>
                              Placement- Mega Placement Opportunity open campus
                            </td>
                            <td>05-06-2018</td>
                          </tr>
                          <tr>
                            <td data-sheets-value='{"1":2,"2":"Placement- Wipro- WILP open campus"}'>
                              Placement- Cap Gemini open campus
                            </td>
                            <td>11-12-2018</td>
                          </tr>
                          <tr>
                            <td data-sheets-value='{"1":2,"2":"Placement- Wipro- WILP open campus"}'>
                              Placement- Wipro- WILP open campus
                            </td>
                            <td>06/2019 onwards</td>
                          </tr>
                          <tr>
                            <td data-sheets-value='{"1":2,"2":"Placement- Cap Gemini open campus"}'>
                              Pool Campus Recruitment Programme-2019 for BCA
                              &amp;B.Sc.
                            </td>
                            <td>12/2019 onwards</td>
                          </tr>
                          <tr>
                            <td data-sheets-value='{"1":2,"2":"Pool Campus Recruitment Programme-2019 for BCA &amp;B.Sc."}'>
                              Internship Program in Bajaj Finserv
                            </td>
                            <td>03/2021 onwards</td>
                          </tr>
                          <tr>
                            <td data-sheets-value='{"1":2,"2":"Placement Internship Opportunity in Jaro Education "}'>
                              A Financial education awareness raising program by
                              SEBI
                            </td>
                            <td>24-03-2021</td>
                          </tr>
                          <tr>
                            <td data-sheets-value='{"1":2,"2":"Internship Program in Bajaj Finserv"}'>
                              What Next? Guidance for Career Advancement after
                              graduation (by Mr. Aman Mourya, FinOption
                              Institute of financial Studies)
                            </td>
                            <td>01-06-2021</td>
                          </tr>
                          <tr>
                            <td data-sheets-value='{"1":2,"2":"Training &amp; Internship for BCA &amp; B.Sc. (CS)"}'>
                              Training Session on Opportunities in Govt. Job and
                              its Preparation (by Ms Neha Sharma, Director Ayush
                              Academy)
                            </td>
                            <td>09-06-2021</td>
                          </tr>
                          <tr>
                            <td data-sheets-value='{"1":2,"2":"Campus Placement Drive for Yes Bank by Pinnacle Training &amp; Development Solutions"}'>
                              Job Placement Interview for Teleperformance (for
                              Flipkart)
                            </td>
                            <td>14-07-2021</td>
                          </tr>
                          <tr>
                            <td data-sheets-value='{"1":2,"2":"Campus Placement Drive for WM Universal Solution Pvt. Ltd."}'>
                              Awareness session for certificate course in
                              Banking, Finance and Insurance by Bajaj Finserv
                            </td>
                            <td>28-07-2021</td>
                          </tr>
                          <tr>
                            <td data-sheets-value='{"1":2,"2":"Job Placement Interview for Renascence Global"}'>
                              Session on career opportunities in the field of
                              Accounting Management and software (by Mrs.
                              Rachana Maheshwari, Corporate Trainer)
                            </td>
                            <td>18-08-2021</td>
                          </tr>
                          <tr>
                            <td data-sheets-value='{"1":2,"2":"Job Placement Interview for MMC Convert"}'>
                              Placement Internship Opportunity in Jaro Education
                            </td>
                            <td>30-08-2021</td>
                          </tr>
                          <tr>
                            <td data-sheets-value='{"1":2,"2":"Bajaj Finserve (Certificate Programme Banking, Finance &amp; Insurance)"}'>
                              Internship Interview for Best Seller (Short
                              Listing done on 25th September)
                            </td>
                            <td>01-10-2021</td>
                          </tr>
                          <tr>
                            <td data-sheets-value='{"1":2,"2":"Campus Placement Drive for Dwell Fox"}'>
                              Internship Interview for Decathlon Sports
                            </td>
                            <td>08-10-2021</td>
                          </tr>
                          <tr>
                            <td data-sheets-value='{"1":2,"2":"Internship Interview for Best Seller (Short Listing done on 25th September)"}'>
                              Training Session ‘Resume Building’ by Mr. Pankaj
                              Vyas Corporate Trainer)
                            </td>
                            <td>26-10-2021</td>
                          </tr>
                          <tr>
                            <td data-sheets-value='{"1":2,"2":"Internship Interview for Decathlon Sports"}'>
                              Session on voice and accent training (byMr. Vishal
                              Sharma, Trinity Global, Indore)
                            </td>
                            <td>10-11-2021</td>
                          </tr>
                          <tr>
                            <td data-sheets-value='{"1":2,"2":"Effective Interview Skills and Body Language (by Mr. Captain Jaison Thomas, Renowned Motivational Speaker)"}'>
                              Job Placement Interview for MMF Infotech
                            </td>
                            <td>13-11-2021</td>
                          </tr>
                          <tr>
                            <td data-sheets-value='{"1":2,"2":"Session on voice and accent training (byMr. Vishal Sharma, Trinity Global, Indore)"}'>
                              Effective Interview Skills and Body Language (by
                              Mr. Captain Jaison Thomas, Renowned Motivational
                              Speaker)
                            </td>
                            <td>24-11-2021</td>
                          </tr>
                          <tr>
                            <td data-sheets-value='{"1":2,"2":"Job Placement Interview for MMF Infotech"}'>
                              Bajaj Finserve (Certificate Programme Banking,
                              Finance &amp; Insurance)
                            </td>
                            <td>25-02-2022</td>
                          </tr>
                          <tr>
                            <td data-sheets-value='{"1":2,"2":"Training Session ‘Resume Building’ by Mr. Pankaj Vyas Corporate Trainer)"}'>
                              Campus Placement Drive for Dwell Fox
                            </td>
                            <td>26-02-2022</td>
                          </tr>
                          <tr>
                            <td data-sheets-value='{"1":2,"2":"Session on career opportunities in the field of Accounting Management and software (by Mrs. Rachana Maheshwari, Corporate Trainer)"}'>
                              Job Placement Interview for MMC Convert
                            </td>
                            <td>09-04-2022</td>
                          </tr>
                          <tr>
                            <td data-sheets-value='{"1":2,"2":"Awareness session for certificate course in Banking, Finance and Insurance by Bajaj Finserv"}'>
                              Job Placement Interview for Renascence Global
                            </td>
                            <td>28-05-2022</td>
                          </tr>
                          <tr>
                            <td data-sheets-value='{"1":2,"2":"Job Placement Interview for Teleperformance (for Flipkart)"}'>
                              Campus Placement Drive for WM Universal Solution
                              Pvt. Ltd.
                            </td>
                            <td>13-06-2022</td>
                          </tr>
                          <tr>
                            <td data-sheets-value='{"1":2,"2":"Training Session on Opportunities in Govt. Job and its Preparation (by Ms Neha Sharma, Director Ayush Academy)"}'>
                              Campus Placement Drive for Yes Bank by Pinnacle
                              Training &amp; Development Solutions
                            </td>
                            <td>13-07-2022</td>
                          </tr>
                          <tr>
                            <td data-sheets-value='{"1":2,"2":"What Next? Guidance for Career Advancement after graduation (by Mr. Aman Mourya, FinOption Institute of financial Studies)"}'>
                              Training &amp; Internship for BCA &amp; B.Sc. (CS)
                            </td>
                            <td>20-07-2022</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </>
          }
        />
      </main>
    </>
  );
};

export default TrainingPlacement;
