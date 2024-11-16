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
import { AntiRagingCommiteeDeatils, AntiRagingCommiteeHead, LibraryAdvisoryCommeitteeTableData, LibraryAdvisoryCommeitteeTablehead } from "@/config";

const AntiRaggingCell = () => {
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
          heading="Internal Compliant Committee"
          Contact={true}
        />

        <Features
          sectionGap="both"
          imageSlider={NccImages}
          descriptionClass="about_message"
          className="bg_white"
          title={"ANTI-RAGGING CELL"}
          content={
            <>
             Ragging or any kind of harassment among the students is strictly prohibited. As per the government regulations, any student found indulging in RAGGING or harassing a fellow student is liable for criminal prosecution, expulsion from the college, debarring from admission to any other specified institution for a specific period, withholding scholarships or other benefits, cancellation, of admission, fine of Rs. 25000, imprisonment, etc
            </>
          }
        />

<CommitteeList
          sectionGap="bottom"
          title="Anti Raging Committee"
          tablehead={AntiRagingCommiteeHead}
          tableData={AntiRagingCommiteeDeatils}
        />
      </main>
    </>
  );
};

export default AntiRaggingCell;
