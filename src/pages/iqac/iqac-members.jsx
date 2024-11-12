import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Banner from "@/components/banner";
import Accordion from "@/components/comman/Accordion";
import TabNavigation from "@/components/comman/TabNavigation";

import bannerImg from "/public/assets/images/college-banner.png";
import RuralUpliftmentImage from "/public/assets/images/collage-7-1-1.png";




const tabsData = {
    "IQAC Members 2022-23": (
      <>
       <table width="w-100">
<tbody>
<tr>
<td width="255"><strong>Member’s Name</strong></td>
<td width="445"><strong>Designation</strong></td>
</tr>
<tr>
<td width="255"><strong>Dr. Sr. Alice Thomas</strong></td>
<td width="445">Principal, Chairperson</td>
</tr>
<tr>
<td width="255"><strong>Rev. Fr. Simon Raj</strong></td>
<td width="445">Director</td>
</tr>
<tr>
<td width="255"><strong>Dr. C. P. Mathew</strong></td>
<td width="445">Principal, School of Social Work, Indore, Member</td>
</tr>
<tr>
<td width="255"><strong>Capt. Jaison Thomas</strong></td>
<td width="445">Cheif Patron, Incisive Group</td>
</tr>
<tr>
<td width="255"><strong>Dr. Anil Mirchandani</strong></td>
<td width="445">Faculty Coordinator</td>
</tr>
<tr>
<td width="255"><strong>Dr. Unmekha Tare</strong></td>
<td width="445">College Coordinator</td>
</tr>
<tr>
<td width="255"><strong>Dr. Goldie Zaki</strong></td>
<td width="445"> IQAC Coordinator</td>
</tr>
<tr>
<td width="255"><strong>Dr. Stafard Anthony</strong></td>
<td width="445">IQAC Joint Coordinator</td>
</tr>
<tr>
<td width="255"><strong>All HODs</strong></td>
<td width="445"></td>
</tr>
<tr>
<td width="255"><strong>Dr. Shilpa Dhoble</strong></td>
<td width="445">Librarian</td>
</tr>
<tr>
<td width="255"><strong>Mr. Sahil Isidore</strong></td>
<td width="445">Administrative Staff</td>
</tr>
<tr>
<td width="255"><strong>Ms. Devakshi Kalani</strong></td>
<td width="445">President, Flexituff International ltd.</td>
</tr>
</tbody>
</table>
      </>
    ),
    "IQAC Members 2021-22": (
      <>
       <table width="w-100">
<tbody>
<tr>
<td width="255"><strong>Member’s Name</strong></td>
<td width="445"><strong>Designation</strong></td>
</tr>
<tr>
<td width="255"><strong>Dr. Sr. Alice Thomas</strong></td>
<td width="445">Principal, Chairperson</td>
</tr>
<tr>
<td width="255"><strong>Rev. Fr. Simon Raj</strong></td>
<td width="445">Director</td>
</tr>
<tr>
<td width="255"><strong>Rev. Dr. Fr. C. Michael John</strong></td>
<td width="445">Governing Body Representative</td>
</tr>
<tr>
<td width="255"><strong>Rev. Fr. Antonysamy</strong></td>
<td width="445">Finance Committee Representative</td>
</tr>
<tr>
<td width="255"><strong>Dr. C. P. Mathew</strong></td>
<td width="445">Principal, School of Social Work, Indore, Member</td>
</tr>
<tr>
<td width="255"><strong>Dr. Anil Mirchandani</strong></td>
<td width="445">Faculty Coordinator</td>
</tr>
<tr>
<td width="255"><strong>Dr. Goldie Zaki</strong></td>
<td width="445">IQAC Coordinator</td>
</tr>
<tr>
<td width="255"><strong>Dr. Stafard Anthony</strong></td>
<td width="445">Joint Coordinator</td>
</tr>
<tr>
<td width="255"><strong>Prof. Bhavana Sangamnerkar</strong></td>
<td width="445">Joint Coordinator</td>
</tr>
<tr>
<td width="255"><strong>Prof. Rahat Ahmed</strong></td>
<td width="445">Member, Faculty Representative</td>
</tr>
<tr>
<td width="255"><strong>Mr. Vikas Oberoi</strong></td>
<td width="445">Parent Professors’ Association Representative</td>
</tr>
<tr>
<td width="255"><strong>Dr. Shilpa Dhoble</strong></td>
<td width="445">Librarian</td>
</tr>
<tr>
<td width="255"><strong>Mr. Sahil Isidore</strong></td>
<td width="445">Administrative Staff</td>
</tr>
<tr>
<td width="255"><strong>Mr. Jatin Gera</strong></td>
<td width="445">Alumni</td>
</tr>
<tr>
<td width="255"><strong>Mr. Tanuj Dalal</strong></td>
<td width="445">Alumni</td>
</tr>
<tr>
<td width="255"><strong>Ms. Sakshi Raghuwanshi</strong></td>
<td width="445">Senior Student</td>
</tr>
<tr>
<td width="255"><strong>Mr. Sarvesh Raj</strong></td>
<td width="445">Senior Student</td>
</tr>
</tbody>
</table>
      </>
    ),
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
            <Accordion tabsData={tabsData} />
        
        </div>
      </div>
    </>
  );
};

export default InstitutionalDistinctiveness;
