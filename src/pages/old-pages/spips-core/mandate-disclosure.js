import Banner from "@/components/banner";
import Head from "next/head";
import React from "react";
import styles from "@/styles/Home.module.scss";
import { Inter } from "next/font/google"; // Replace with actual font import if using

import bannerImg from "/public/assets/images/liberary-banner.png";
import SectionHeading from "@/components/comman/sectionHeading";
import PageContent from "@/components/comman/PageContent";
import Features from "@/components/liberary/Features";
import Services from "@/components/liberary/Services";
import CommitteeList from "@/components/comman/CommitteeList";
import {
  LibraryAdvisoryCommeitteeTableData,
  LibraryAdvisoryCommeitteeTablehead,
  LibraryWorkingTableData,
  LibraryWorkingTablehead,
  policy,
} from "@/config";
import ListingsSection from "@/components/comman/ListingsSection";



const MandateDisclosure = () => {
  return (
    <>
      <Head>
        <title>SPIPS</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <Banner
          bannerImg={bannerImg}
          heading="Policy"
          description="Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam."
        />

        <ListingsSection
          sectionGap="both"
          title="Mandate Disclosure"
          listTitle="Mandate Disclosure"
          listData={policy}
          tablehead={LibraryAdvisoryCommeitteeTablehead}
          tableData={LibraryAdvisoryCommeitteeTableData}
        />
        <div></div>
      </main>
    </>
  );
};

export default MandateDisclosure;
