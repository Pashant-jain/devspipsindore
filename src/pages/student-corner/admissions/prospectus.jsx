import Banner from "@/components/banner";
import Head from "next/head";
import React from "react";

import Features from "@/components/liberary/Features";
import bannerImg from "/public/assets/images/college-banner.png";

import Image from "next/image";
import PageContent from "@/components/comman/PageContent";

import Image1 from "/public/assets/images/admissions/prospectus1.jpeg"
import Image2 from "/public/assets/images/admissions/prospectus2.jpeg"
import CommitteeList from "@/components/comman/CommitteeList";
import { AntiRagingCommiteeDeatils, AntiRagingCommiteeHead, grivienceCommiteeDeatils, grivienceCommiteeHead, LibraryAdvisoryCommeitteeTableData, LibraryAdvisoryCommeitteeTablehead } from "@/config";

const Prospectus = () => {
    
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
          heading="Prospectus"
          Contact={true}
        />

        <PageContent
          sectionGap="both"
          descriptionClass="about_message"
          className="bg_white"
          title={"St Paul Institute of Professional Studies Indore offers various international facilities to its students, including:"}
          content={
            <>
     








<br/><br/>
<ul>
    <li>
   <strong>International Exposure</strong><br/>
    The institute provides opportunities for students to participate in international conferences, seminars, and workshops.
    </li>
    <br/><br/>
    <li><strong>Global Internships</strong><br/>
    Students can avail of internship opportunities with global companies, enhancing their practical skills and international work experience.</li><br/><br/>
    <li>
    <strong>Foreign Language Training</strong><br/>
    The institute offers training in foreign languages like French, German, and Spanish to prepare students for global careers.
    </li><br/><br/>
    <li>
    <strong>International Collaborations</strong><br/>
    St Paul Institute has tie-ups with foreign universities, enabling student exchange programs, joint research initiatives, and access to international faculty.
    </li><br/><br/>
    <li><strong>Global Certification Programs</strong><br/>
    The institute offers certification programs in association with international organizations, adding value to students’ degrees.</li>
</ul>

              </>
          }
        />
  <PageContent
          sectionGap="both"
          className="bg_white"
          
          title="Registration form - Alumini Association"
          content={
            <>
            <div className="d-flex justify-content-center flex-md-row gap-3" >
           <Image src={Image1.src} alt=""   width={600} height={600} className="w-50 h-auto" />
           <Image src={Image2.src} alt=""   width={600} height={600} className="w-50 h-auto" />

            </div>
           
            </>
          }
        />

      </main>
    </>
  );
};

export default Prospectus;
