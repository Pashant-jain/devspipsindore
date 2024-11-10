import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Banner from "@/components/banner";
import Accordion from "@/components/comman/Accordion";
import TabNavigation from "@/components/comman/TabNavigation";

import bannerImg from "/public/assets/images/college-banner.png";
import RuralUpliftmentImage from "/public/assets/images/collage-7-1-1.png";

const tabsData = {
  "2022-2023": (
    <>
      <div>
        <h5 className="small-text underline text-center">
          ST. PAUL INSTITUTE OF PROFESSIONAL STUDIES, INDORE
        </h5>
        <br />
        <h5 className="small-text text-center">
          ANNUAL REPORT OF THE ACADEMIC YEAR 2021-22
        </h5>
        <br />
        <h5 className="small-text text-center">
          Dr. Sr. Alice Thomas, Principal
        </h5>
        <br />
        <br />
        <p className="text-regular">
          My Heartfelt Greetings to Our Beloved Chairman, His Excellency, Most
          Rev. Dr. Chacko Thottumarickal, Bishop, Catholic Diocese of Indore
          Respected Director of our College, Rev. Fr. Simon Raj Members of the
          Faculty and Staff, my dear Students, parents and well wishers Amid the
          blessings of God Almighty, I am delighted to put forth the Annual
          Report of Academic year 2021-22.{" "}
          <strong>I – Curricular Aspects</strong> Academic year 2021-22
          witnessed 627 new admissions in different courses under the New
          Education Policy 2020. An online welcome cum orientation programme was
          conducted for the new batch of students. The academic year for the
          second and final year commenced with online classes from 3rd July 2021
          while that of first year from 3rd October. The classes are going
          solely on offline mode from 1st December 2021 as per the government
          norms. Farewell was bid to the students of Batch 2019-22. The Career,
          Skills and Placement Committee organized mock drill, webinars and
          workshops, career awareness and opportunities sessions, Session on
          self development, National level awareness programme on
          entrepreneurship, business quiz, tally and digital marketing courses,
          internship and placement drive in Bestsellers India Ltd., Decathon
          India, Dwellfox, WM Universal Solutions, Session on effective
          presentation skills and placement for alumni. Industrial visit was
          conducted for all the First year students.{" "}
          <strong>II- Teaching, Learning and Evaluation</strong> Common class
          tests, Monthly quizzes and Pre-University Exams both offline and
          online were duly conducted. The result of the past academic year was
          very satisfactory. Eighteen students stood in top ten position of DAVV
          results of 2021-22. The detailed result is as follows:-
        </p>
        <br />
        <table className="w-100">
          <thead>
            <tr>
              <th>S. No.</th>
              <th>Class</th>
              <th>2021-22</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>B.Com. (CA)</td>
              <td>96%</td>
            </tr>
            <tr>
              <td>2</td>
              <td>B.Com. (Tax)</td>
              <td>100%</td>
            </tr>
            <tr>
              <td>3</td>
              <td>B.Com. (Plain)</td>
              <td>93%</td>
            </tr>
            <tr>
              <td>4</td>
              <td>B.Com. (FT)</td>
              <td>96%</td>
            </tr>
            <tr>
              <td>5</td>
              <td>B.Com. (Hons)</td>
              <td>100%</td>
            </tr>
            <tr>
              <td>6</td>
              <td>BBA</td>
              <td>Not yet declared</td>
            </tr>
            <tr>
              <td>7</td>
              <td>BCA</td>
              <td>Not yet declared</td>
            </tr>
            <tr>
              <td>8</td>
              <td>BA</td>
              <td>100%</td>
            </tr>
            <tr>
              <td>9</td>
              <td>B.Sc.</td>
              <td>97%</td>
            </tr>
            <tr>
              <td>10</td>
              <td>M.Com.</td>
              <td>100%</td>
            </tr>
          </tbody>
        </table>
        <br />
        <br />
        <table className="w-100">
          <thead>
            <tr>
              <th>S. No.</th>
              <th>Name of Student</th>
              <th>Class</th>
              <th>Percentage</th>
              <th>Position in University</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Bilha John</td>
              <td>B.Com. Hons III A</td>
              <td>90.80%</td>
              <td>III Rank</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Mahak Pandey</td>
              <td>B.Com. Hons III A</td>
              <td>90.48%</td>
              <td>IV Rank</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Navneet Kour Baid</td>
              <td>B.Com. Hons III A</td>
              <td>90.4%</td>
              <td>V Rank</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Ansh Anchaliya</td>
              <td>B.Com. Hons III B</td>
              <td>90.08%</td>
              <td>VI Rank</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Prishita Talreja</td>
              <td>B.Com. Hons III A</td>
              <td>89.76%</td>
              <td>VII Rank</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Mansi Gupta</td>
              <td>B.Com. Hons III B</td>
              <td>89.68%</td>
              <td>VIII Rank</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Kunal Jain</td>
              <td>B.Com. TAX III</td>
              <td>91.25%</td>
              <td>III Rank</td>
            </tr>
            <tr>
              <td>8</td>
              <td>Ishika Jain</td>
              <td>B.Com. TAX III</td>
              <td>90.58%</td>
              <td>V Rank</td>
            </tr>
            <tr>
              <td>9</td>
              <td>Subi S. Jacob</td>
              <td>B.Com. TAX III</td>
              <td>89.75%</td>
              <td>X Rank</td>
            </tr>
            <tr>
              <td>10</td>
              <td>Ms. Sai Krithika</td>
              <td>B.A. III</td>
              <td>91.62%</td>
              <td>I Rank</td>
            </tr>
            <tr>
              <td>11</td>
              <td>Ms. Aashisha Joseph</td>
              <td>B.A. III</td>
              <td>89.11%</td>
              <td>II Rank</td>
            </tr>
            <tr>
              <td>12</td>
              <td>Ms. Anjali Mukati</td>
              <td>B.A. III</td>
              <td>88.07%</td>
              <td>IV Rank</td>
            </tr>
            <tr>
              <td>13</td>
              <td>Ms. Rishita Shukla</td>
              <td>B.A. III</td>
              <td>87.55%</td>
              <td>VI Rank</td>
            </tr>
            <tr>
              <td>14</td>
              <td>Mr. Nitant Sharma</td>
              <td>B.SC. III</td>
              <td>92.48%</td>
              <td>I Rank</td>
            </tr>
            <tr>
              <td>15</td>
              <td>Ms. Tehrim Fatma</td>
              <td>B.SC. III</td>
              <td>89.69%</td>
              <td>II Rank</td>
            </tr>
            <tr>
              <td>16</td>
              <td>Ms. Vaishali Shindwey</td>
              <td>B.SC. III</td>
              <td>88.90%</td>
              <td>VI Rank</td>
            </tr>
          </tbody>
        </table>
        <p className="text-regular"></p>
        <strong>III- Research, Consultancy and Extension Activities</strong> The
        Principal, Dr. Sr. Alice Thomas was conferred the Best Principal Award
        by All India Association of Christian Higher Education (AIACHE) for the
        academic year 2019-20. A book titled ‘Word of God, Streams of Grace’
        written by the Principal, Dr. Sr. Alice Thomas was released on the
        occasion of feast day of Mother Mary on 8th September. Dr. Goldie Zaki
        was conferred the Best Innovative Faculty Award by All India Association
        of Christian Higher Education (AIACHE) for the academic year 2019-20.
        Prof. Stafard Anthony was conferred his doctorate degree. Two Student
        Development Programmes, one faculty development programme and an
        International conference were conducted in collaboration with Research
        Foundation of India. The college participated in student-faculty in
        exchange programme with St. Aloysius College, Jabalpur wherein, Dr.
        Goldie Zaki and Prof. Stafard Anthony were awarded as Best Resource
        Person in Commerce and Management respectively. Two students also bagged
        award in Commerce and Humanities. SPIPS stood third amongst twenty
        colleges. The students also participated in entrepreneurship development
        program conducted ubder MOU with RNT University, Bhopal. The college has
        received the 2 (f) recognition of UGC in June 2021. The college was
        registered on the NAAC portal, the college submitted the Institutional
        Information for Quality Assessment on 25th January 2022, Self Study
        Report on 29th March 2022 and Data Validation and Verification Queries
        on 19th May 2022. It is matter of pride that four more faculty members
        are selected as Ph.D. Guide in Devi Ahilya University raising the number
        of Guides to eight. The Director and the Principal participated in
        Xavier Board Networking and Academic Collaboration Meeting held at
        Kochi, Ernakulam, Kerala from 13th to 15th May. The Memorandum of
        Understanding was signed with the following 13 Institutions:-
        <br />
        <br />
        <ol>
          <li>Alphonsa College, Pala</li>
          <li>Anthony’s College, Shillong</li>
          <li>Kristu Jayanti College (Autonomous), Bangalore</li>
          <li>Xavier’s College (Autonomous), Mumbai</li>
          <li>Assam Don Bosco University, Sonapur</li>
          <li>Xavier Board of Higher Education in India</li>
          <li>Teresa’s (Autonomous) College, Ernakulam</li>
          <li>Francis College, Nagpur</li>
          <li>Joseph’s College, Irinjalakuda</li>
          <li>Carmel College, Mala</li>
          <li>Albert’s College, Ernakulam</li>
          <li>Thomas College, Pala</li>
          <li>Annai Velankanni College, Kanyakumari</li>
          <li>De Paul College, Mysore</li>
        </ol>
        <br />
        <br />
        <strong>IV- Infrastructure and Learning Resources</strong> The
        Management of our college deserves admiration for providing world class
        infrastructure to our students. A Mass Media and Communication Room has
        been added to the infrastructure. Consequently, videos of weekly news
        updates and departmental monthly programmes are recorded religiously.
        Beautification of the college campus with a lot of open space for
        students has also been done. A Save Birds’ Gallery too has been added to
        the infrastructure. <strong>V- Student Support and Progression</strong>{" "}
        The college celebrated the twelfth Foundation Day of the college on 26th
        July. The Freshers’ Talent Show was organized on the occasion of
        birthday of the Director, Rev. Fr. Simon Raj. Offline election of
        house-wise office bearers was done and the investiture ceremony was held
        on 2nd December 2021 along with piping ceremony of the NCC cadets.
        Online competitions for Class XII school students, online Inter-house
        singing, arts, literary and cultural competitions were conducted. SPIPS
        table tennis men’s team was the winner in the inter-collegiate
        tournament. Two girl students have been selected in the DAVV volley ball
        team. Our choir brought laurels by being Super Nine in the national
        level carol singing competition organized by Atma Darshan. Mr. Abhay
        Borasi secured Gold Medal in state level wresting, Ms. Nikki Shukla
        secured Gold Medal at District and Silver Medal at state level yoga
        competition. Mr. Chirag Patel won silver medal in State level Shooting
        championship. Special Class-wise group counseling sessions were
        conducted meticulously by the psychology counselors of the college. The
        Women and Child Protection Committee, Counseling and Tutorial Committee,
        Christian Students’ Association, Students’ Welfare Committee, Gender
        Champion’s Club, Display Board Committee, Research and Journal
        Committee, Photography and PowerPoint Committee, Library Committee,
        Music Committee, Young Thinkers’ Forum, Environment Club and Language
        Lab organized a variety of events for chiseling the skills of the
        students. This year all the days of national and international
        importance, Sliver Jubilee celebration of Director, Rev. Fr. Simon Raj,
        Patrons Day, Feast days of Director and Principal, teacher’s day and
        festivals were enthusiastically celebrated. The registration of the
        SPIPS Alumni has been duly done under the Societies Act.{" "}
        <strong>VI- Governance, Leadership and Management</strong> The
        Management of the College is headed by our loving Chairman, Most Rev.
        Dr. Chacko Thottumarickal, Bishop of the Catholic Diocese of Indore.
        From the bottom of the heart, the SPIPS family extends a profound
        gratitude to the Management, Governing Body, Managing Committee, Finance
        Committee and Director of our College for their care and concern. The
        college hosted Youth Retreat, Animators Training Programme, Religious
        Skills Programme, Tally Training for Rev. Sisters and Religious Group
        Counseling Programme. As a part of social responsibility, the college
        distributed 850 food packets during lockdown. Covid relief fund was
        created and the faculty and students donated fund in the same which
        amounted to Rs. 16,900. Fee concession and extension of fee payment date
        was done for the students facing severe financial crisis due to
        pandemic. Two offline executive committee meetings of Parents Professors
        Association were conducted. Election of the office bearers of executive
        committee was done and one offline class-wise parents professors meeting
        was held witnessing 315 parents. Under the pivotal guidance of the
        Director and Principal two good practices namely Innovative Lectures and
        Internal Quality Check Viva Presentations have been introduced. Monthly
        Evaluation and Planning meetings, Departmental Meeting, Faculty
        Enriching Faculty (FEF) programmes and Intra-Departmental FEF were duly
        conducted. Monthly e-newsletter SPIPS Memoir, three newsletters and
        Annual Magazine were duly issued.{" "}
        <strong>VII- Institutional Distinctiveness and Best Practices</strong>{" "}
        The Director and Principal conducted regular meetings with the Students
        Representatives of Student Welfare, Discipline, Anti-Ragging and
        Programme Committee. <strong>VIII – NSS and NCC Activities</strong> The
        NCC committee conducted regular parades, essay writing, poster making,
        video making and drill competitions, awareness programmes, invited
        talks, social commitment programmes, group activities, group counseling,
        celebration of national patriotic days, plantation drive, nukkad natak,
        fitness test for selection of first year cadets and participation of
        students in CATC camp and Azadi ke Amrit Mahotsav along with the NCC
        Officer. NSS Committee organized a numerous activities in adopted
        village like health awareness camp from September to December 2021,
        donation of clothes and stationery items, free eye check up and
        distribution of specks. It also conducted webinars, trekking, walkathon,
        pandemic awareness through social media, plantation and observance of
        days of social importance. Youth Week, Youth Day, NSS camp at Bicholi
        Hapsi, adopted village, blood donation camp at St. Francis Hospital,
        voting awareness campaign, yoga workshop. During lockdown all the
        departments conducted Alumni Meet.{" "}
        <strong>The Department of Commerce conducted:</strong> Workshops on
        e-filing of passport and driving license, International webinar, Student
        led workshops on Investment and Resin Art Two Poster making exhibitions
        cum competition, nine career planning and entrepreneurial development
        workshops, commerce quiz, session by alumni quiz on ‘Crypto Currency’,
        essay Writing Competition on the topic ‘Current Economic Scenarios’,
        Webinar on union budget, Session on startups, Success stories of start
        ups, guest talk on industry readiness, SPIPS Fiesta , Business Plan
        Competition and selection of three students under Internship interview.
        One thirty two Social commitment programmes and one hundred and One
        hundred and sixteen Class wise personality development activities{" "}
        <strong>The Department of Computer Science organized:</strong> Five
        guest lectures, debate and essay writing competition, two computer
        science quizzes. Three alumni sharing, two national webinar, video and
        PPT presentation and poster making competition, session on online exam
        tips, career counselling, Mock viva, brainstorming activity, group
        discussion, workshop on ‘Python Programming Methodology’, Flyer Making
        Competition, 1-Minute Solo Dance Video Competition on ‘Patriotic Theme’,
        Workshop on programming skills, group discussion, IT Club activity. A
        six days workshop, participation in 15 days student-faculty exchange
        programme under MOU with BSSS college, Bhopal. Twenty two social
        commitment programmes and thirty six class wise personality development
        activities <strong>The Department of Humanities arranged:</strong> Two
        group discussions, seven sessions on language improvement, student mock
        parliament, Student Mock Court, Open House, General Knowledge Quiz, UPSC
        quiz, spell bee competition, session on adult crisis, Nukkad natak,
        Hindi Diwas, three guest talks, poster making and debate competition,
        four Arts club activities, three literary quizzes, three skills
        enhancement activities, quiz on omicron, two group discussions, poetry
        writing competition Twenty two social commitment programmes and thirty
        six class wise personality development activities{" "}
        <strong>The Department of Management conducted:</strong> Three Webinars,
        thirteen departmental activities, SPIPS BBA corona warriors, session
        with alumni and debate competition, presentation on ‘Inspirational
        Personalities of Business World’, session by alumni, talk on Grooming,
        Management fest, session on creative management Thirty nine Social
        commitment programmes and sixty five class wise personality development
        activities. <strong>The Department of Science organized:</strong> Six
        Science Club activities, two session with alumni, one guest talk, one
        group activity and two webinars, group discussion and a session on how
        to write an effective CV, three online quizzes and poster making
        competitions, two video presentations, ‘Science Riddles’, Session on
        communication strategies. Twenty two social commitment programmes and
        thirty six class wise personality development activities{" "}
        <strong>The Department of Physical education organized:</strong> One
        Webinar, one guest lecture, fifteen days online yoga classes,
        inspirational storytelling, Two sports quizzes, two debate competitions,
        celebration of national sports day,Inter House table tennis chess and
        cricket competitions, Inter department chess, football, carom and
        badminton competitions, Inter House Table Tennis Competition, Inter
        House Football and Carrom Competition for both boys and girls, Table
        tennis competition, basket ball tournament, open badminton league
        tournament, Inter class turf football, One minute fitness challenge
        competition, practice matches for indoor and outdoor games. At the end,
        I sincerely acknowledge the incessant co-operation of faculty and staff
        members. Heartfelt thanks to dear parents for their whole-hearted
        support and co-operation. Special thanks to team of faculty for helping
        in preparation of this Annual Report. May the Lord continue to shower
        His grace upon our College in the years to come! Thank you and May God
        bless you all.
        <br/>
        <br/>
        <br/>

        <h5 className="small-text ">Dr. Sr. Alice Thomas</h5>
        <h5 className="small-text ">Principal</h5>
      </div>
    </>
  ),
  "2021-2022": (
    <>
      <div>
      <div class="annual-report">
    <h1 class="heading">ST. PAUL INSTITUTE OF PROFESSIONAL STUDIES, INDORE</h1>
    <h2 class="sub-heading">ANNUAL REPORT OF THE ACADEMIC YEAR 2021-22</h2>
    <p class="presented-by">Dr. Sr. Alice Thomas, Principal</p>

    <div class="greetings">
        <p>My Heartfelt Greetings to Our Beloved Chairman, His Excellency, Most Rev. Dr. Chacko Thottumarickal, Bishop, Catholic Diocese of Indore, Respected Director of our College, Rev. Fr. Simon Raj, Members of the Faculty and Staff, my dear Students, Parents, and Well-wishers.</p>
        <p>Amid the blessings of God Almighty, I am delighted to present the Annual Report of the Academic Year 2021-22.</p>
    </div>

    <div class="section" id="curricular-aspects">
        <h3>I – Curricular Aspects</h3>
        <p>Academic year 2021-22 witnessed <strong>627 new admissions</strong> in different courses under the New Education Policy 2020. An online welcome and orientation program was conducted for the new batch of students. The academic year for the second and final year commenced with online classes from <strong>3rd July 2021</strong> while the first-year classes started on <strong>3rd October 2021</strong>. Offline classes resumed from <strong>1st December 2021</strong> as per government norms.</p>
        <p>The Career, Skills, and Placement Committee organized mock drills, webinars, workshops, career awareness sessions, and placement drives with companies such as Bestsellers India Ltd., Decathlon India, and Dwellfox. An industrial visit was conducted for all first-year students.</p>
    </div>

    <div class="section" id="teaching-learning">
        <h3>II – Teaching, Learning, and Evaluation</h3>
        <p>Common class tests, monthly quizzes, and pre-university exams (both offline and online) were conducted regularly. The result for the past academic year was very satisfactory, with <strong>18 students</strong> securing positions in the top ten of DAVV results for 2021-22.</p>

        <table class="results-table">
            <thead>
                <tr>
                    <th>S. No.</th>
                    <th>Class</th>
                    <th>2021-22</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>B.Com. (CA)</td>
                    <td>96%</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>B.Com. (Tax)</td>
                    <td>100%</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>B.Com. (Plain)</td>
                    <td>93%</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>B.Com. (FT)</td>
                    <td>96%</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>B.Com. (Hons)</td>
                    <td>100%</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>BBA</td>
                    <td>Not yet declared</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>BCA</td>
                    <td>Not yet declared</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>BA</td>
                    <td>100%</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>B.Sc.</td>
                    <td>97%</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>M.Com.</td>
                    <td>100%</td>
                </tr>
            </tbody>
        </table>

        <h4>Top Performers:</h4>
        <table class="top-performers">
            <thead>
                <tr>
                    <th>S.No.</th>
                    <th>Name of Student</th>
                    <th>Class</th>
                    <th>Percentage</th>
                    <th>Position in University</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Bilha John</td>
                    <td>B.Com. Hons III A</td>
                    <td>90.80%</td>
                    <td>III Rank</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Mahak Pandey</td>
                    <td>B.Com. Hons III A</td>
                    <td>90.48%</td>
                    <td>IV Rank</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Navneet Kour Baid</td>
                    <td>B.Com. Hons III A</td>
                    <td>90.4%</td>
                    <td>V Rank</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Ansh Anchaliya</td>
                    <td>B.Com. Hons III B</td>
                    <td>90.08%</td>
                    <td>VI Rank</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Prishita Talreja</td>
                    <td>B.Com. Hons III A</td>
                    <td>89.76%</td>
                    <td>VII Rank</td>
                </tr>
            </tbody>
        </table>
    </div>

    <div class="signature">
        <p>Dr. Sr. Alice Thomas</p>
        <p>Principal</p>
    </div>
</div>

      </div>
    </>
  ),
   "2020-2021": (
    <>
      <div>
       cas
      </div>
    </>
  ),
  "2019-2020": (
    <>
      <div>
       cas
      </div>
    </>
  ),
 
};

const AnnualReport = () => {
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
            <TabNavigation tabsData={tabsData} tabHeadClassName={"p-3"} />
          )}
        </div>
      </div>
    </>
  );
};

export default AnnualReport;
