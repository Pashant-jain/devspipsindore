import Banner from "@/components/banner";
import Head from "next/head";
import React from "react";

import Features from "@/components/liberary/Features";
import bannerImg from "/public/assets/images/college-banner.png";

import Image from "next/image";
import PageContent from "@/components/comman/PageContent";

import Image1 from "/public/assets/images/Nss/1.jpg"
import Image2 from "/public/assets/images/Nss/2.jpg"
import Image3 from "/public/assets/images/Nss/3.jpg"
import Image4 from "/public/assets/images/Nss/4.jpg"
import CommitteeList from "@/components/comman/CommitteeList";
import { AntiRagingCommiteeDeatils, AntiRagingCommiteeHead, grivienceCommiteeDeatils, grivienceCommiteeHead, LibraryAdvisoryCommeitteeTableData, LibraryAdvisoryCommeitteeTablehead } from "@/config";

const GrivienceRedresal = () => {
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
          heading="Grivience Redresal"
          Contact={true}
        />

        <Features
          sectionGap="both"
          imageSlider={NccImages}
          descriptionClass="about_message"
          className="bg_white"
          title={"Grievance Redressal Cell"}
          content={
            <>
            Grievance Redressal Committee of St. Paul Institute of Professional Studies, Indore, has been constituted with following Staff in different positions to enquire the nature and extent of grievance.
<br/><br/>
The Objective of this committee is
<br/><br/>
<ul>
    <li>To formulate the policy to investigate and review complaints or grievances of students and faculties.</li>
    <li>To create awareness of availability of members for students and faculties to report grievances.</li>
    <li>To investigate the cause of grievances.</li>
    <li>To ensure effectual solution depending upon the gravity of the grievances.</li>
</ul>

The Redressal cell along with the Discipline Committee actively monitors the everyday activity of the students. As a result of a strong mentor-mentee relation there are no grievance filled by any student yet. Nevertheless, the in disciplinary actions are well taken care of.
              </>
          }
        />

<CommitteeList
          sectionGap="bottom"
          title="Committee Members"
          tablehead={grivienceCommiteeHead}
          tableData={grivienceCommiteeDeatils}
        />
      </main>
    </>
  );
};

export default GrivienceRedresal;
