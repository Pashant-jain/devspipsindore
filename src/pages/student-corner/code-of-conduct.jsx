import Head from "next/head";
import bannerImg from "/public/assets/images/college-banner.jpg";
import Image from "next/image";

import Banner from "@/components/banner";
import Features from "@/components/liberary/Features";
import SectionImage from "/public/assets/images/Director.jpg";
import Logo from "/public/assets/images/logo.png";
import Vision from "/public/assets/images/Vision.png";
import PageContent from "@/components/comman/PageContent";
import { useEffect, useState } from "react";




function CodeOfConduct() {
  const [currentDomain, setCurrentDomain] = useState("");

  useEffect(() => {
    // Ensure we are in the client-side environment
    if (typeof window !== "undefined") {
      setCurrentDomain(window.location.hostname); // Get the current domain
    }
  }, []);
  return (
    <>
      <Head>
        <title>Motto, Vision and Mission - SPIPS</title>
      </Head>
      <Banner
        // isFrontBanner={false}
        bannerImg={bannerImg}
        heading={"Code Of Conduct"}
        Contact={true}
      />
      <PageContent
          sectionGap="both"
          className="bg_white"
          title="Code of Conduct at SPIPS"
          content={
            <>
            <div>
                <h3 className="heading-5" >Identity Card</h3>
                <br/>
                <ul>
                    <li>ID card is an important non-transferable personal document for every student of SPIPS, which identifies you as a member of SPIPS.</li>
                    <li>Every student enrolled in SPIPS will be provided with an Identity Card of the Institute.</li>
                    <li>All are expected to wear the ID card always in the College campus, classrooms, library etc. or produce it whenever you are asked to do so.</li>
                    <li>Only those students who produce the ID card to the Security staff at the main gate will be allowed entry into the College campus.</li>
                    <li>When a student represents the college individually or as a part of our team, in programmes/ competitions held outside our college, he/ she should carry the ID card without fail.</li>
                    <li>In case ID card is lost, the same has to be immediately reported to the respective class teacher. The new card would be issued after making an application and paying sum of Rs 50/-. It is the student’s responsibility to obtain the new Identity card at the earliest.</li>
                    <li>Photocopying or Duplicating of the ID card is strictly prohibited.</li>
                </ul>
<br/>
<br/>

                <h3 className="heading-5" >College Uniform</h3>
                <br/>
                <ul>
                    <li>The College prescribes the uniform and so, all the students of SPIPS are expected to wear the complete uniform.</li>
                    <li>Entry into the college campus is open only for those students who come wearing the complete prescribed college uniform.</li>
                    <li>On Saturdays a decent trouser or jeans with the prescribed college T-Shirt or the Regular Uniform is to be worn.</li>
                    <li>In winter, the students shall wear the Navy Blue sweater and the Blazer with the college mono as prescribed by the college.</li>
                    <li>Students not in the prescribed uniform will not be permitted into the college campus before 2:00 pm</li>
                    <li>To avoid any sort of inconvenience at the main gate, the students need to follow the above mentioned guidelines.</li>

                    </ul>
                    <br/>
<br/>
                    <h3 className="heading-5" >College Uniform</h3>
                <br/>
                <ul>
                    <li>In line with the instructions and regulations issued by the Government, Department of Higher Education, Bhopal and DAVV, Indore, the use of Mobile Phone in the campus is strictly prohibited. Strict disciplinary action will be taken against those who are found using Mobile in the class room or the college premises.</li>
                    <li>Students are requested to SWITCH OFF their mobiles as soon as they enter the college campus.</li>
                    <li>Disciplinary Action as well as fine will be imposed on anyone seen or found using the mobile during the Assembly, Lecture hours or any other common programme.</li>
                    <li>The First time Offenders will have to submit a written apology and a fine of Rs 100/-</li>
                    <li>The Second time Offenders will have to submit a written apology and a fine of Rs 200/-</li>
                    <li>The Third time Offenders: Mobile will be confiscated, will be required to pay a penalty of Rs 200/- , the parents will be called thereof and the mobile will be returned only when requested in person by the parent or authorized guardian.</li>

                    </ul>
                    <br/>
<br/>
                    <h3 className="heading-5" >Use of Vehicle and Parking</h3>
                <br/>
                <ul>
                    <li>Basement of the college is the only area available for parking the vehicles. The vehicles cannot be parked vehicles anywhere else.</li>
                    <li>Since the college has only a limited parking space at the basement, the students are allowed to bring into the college campus their TWO WHEELERS ONLY.</li>
                    <li>Students commuting by four wheelers need to find a secure parking place outside the college campus, at their own risk.</li>
                    <li>Parents/ Guardians/ Friends/ Drivers bringing students should drop and pick them at the main gate only.</li>
                    <li>Those using two wheelers need to ensure that they have a Driving License and ride slowly and cautiously. Helmet and a good Locking system to secure the vehicle properly is a must. The college cannot be held responsible for any loss.</li>
                </ul>
               
                </div>           
            </>
          }
        />

<PageContent
          sectionGap="bottom"
          className="bg_white"
          title="Ragging"
          content={
            <>
            <div>
              
                    <h3 className="heading-5" >As per the Government Regulations</h3>
                <br/>
                <ul>
                    <li>Any disorderly conduct whether by words spoken or written or by an act which has the effect of Teasing, Treating or handing with rudeness a Fresher or a fresher of the same class.
                    </li>
                    <li>Indulging in undisciplined activities which cause or are likely to cause annoyance, hardship or Psychological harm to the Freshers.</li>
                    <li>Asking the students to do any act or perform something in which a student generates a sense of shame or embarrassment, is ragging.</li>
                    <li>Ragging or any kind of harassment among the students is strictly prohibited. As per the government regulations, any student found RAGGING or harassing a fellow student is liable for criminal prosecution and expulsion from the college.</li>
                    <li>If any student ever see or come across any trace of misbehavior or signs of ragging, the same should be immediately informed to any of the Faculty members.</li>
                </ul>
                <br/>
                <br/>
                <h3 className="heading-5" >Consequences of Ragging:</h3>
                <br/>
                <ul>
                    <li>The punishment for ragging may include expulsion or suspension from the Institution and consequent debarring from admission to any other Institution for a specific period.</li>
                    <li>Withholding scholarships or other benefits, debarring from representation in events, withholding results.</li>
                    <li>Cancellation of Admission.</li>
                    <li>Rustication from the Institution for a period, ranging from one to three years.
                    </li>
                    <li>Fine of Rupees 25,000/- to 2,50,000/- and imprisonment.</li>
                    </ul>
                </div>           
            </>
          }
        />


    </>
  );
}

export default CodeOfConduct;
