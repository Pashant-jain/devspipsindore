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
    eventsActivitiesDeatils,
  eventsActivitiesHead,
  LibraryAdvisoryCommeitteeTableData,
  LibraryAdvisoryCommeitteeTablehead,
  LibraryWorkingTableData,
  LibraryWorkingTablehead,
  researchGuidesDeatils,
  researchGuidesHead,
} from "@/config";
import CommitteeTable from "@/components/comman/CommitteeList";



const EventsActivities = () => {

    
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
          heading="Events & Activities"
          Contact={true}
          />

        <CommitteeList
          sectionGap="both"
          title="Events and Activities"
          content={'Number of workshops/seminars conducted on Research Methodology, Intellectual Property Rights (IPR) and entrepreneurship during the last five years (5)'}
          tablehead={eventsActivitiesHead}
          tableData={eventsActivitiesDeatils}
        />
        <div></div>
      </main>
    </>
  );
};

export default EventsActivities;
