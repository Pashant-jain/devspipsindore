import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Banner from "@/components/banner";
import TabNavigation from "@/components/comman/TabNavigation";

import bannerImg from "/public/assets/images/college-banner.png";
import PageContent from "@/components/comman/PageContent";
import Accordion from "@/components/comman/Accordion";
import Link from "next/link";
import IIQAUNdertaking from "/public/assets/documents/mandate-disclosure/IIQA-Undertaking-by-Head.pdf";
import RecogniationOfCollege from "/public/assets/documents/mandate-disclosure/2f-St.-Paul-Institute-of-Professional-Studies.pdf";
import AIASHE from "/public/assets/documents/mandate-disclosure/AIASHE-2019-20.pdf";
import SelfDecleration from "/public/assets/documents/mandate-disclosure/Self-Declaration_St.-Paul-Institute.pdf";
import SpipsAccounts from "/public/assets/documents/mandate-disclosure/Annual-Statements-of-Accounts.pdf";
import Scholarship from "/public/assets/documents/mandate-disclosure/Scholarship.pdf";
import GreenAudit from "/public/assets/documents/mandate-disclosure/Green-Audit-SPIPS-Final.pdf";
import AppointmentRules from "/public/assets/documents/mandate-disclosure/appointment-at-SPIPS.pdf";
import AduitReport from "/public/assets/documents/mandate-disclosure/Audit-Report.pdf";
import RTI from "/public/assets/documents/mandate-disclosure/RTI-Cell-SPIPS.pdf";


const MandateDisclosure = () => {
  return (
    <>
      <Head>
        <title>MandateDisclosure - SPIPS</title>
      </Head>
      <Banner
        isFrontBanner={false}
        bannerImg={bannerImg}
        heading={"Mandate Disclosure"}
      />
      <PageContent
          sectionGap="both"
          content={
            <>
            <ul>
                <li className="heading-6" >
                    <Link href={IIQAUNdertaking} target="_blank" >IIQA Undertaking by the Head of the Institution</Link>
                </li> <br/>
                <li className="heading-6" >
                    <Link href={RecogniationOfCollege} target="_blank" >2(f)-St. Paul Institute of Professional Studies</Link>
                </li> <br/>
                <li className="heading-6" >
                    <Link href={AIASHE} target="_blank" >AIASHE 2019-20</Link>
                </li> <br/>
                <li className="heading-6" >
                    <Link href={SelfDecleration} target="_blank" >Self-Declaration_St. Paul Institute of Professional Studies</Link>
                </li> <br/>
                <li className="heading-6" >
                    <Link href={SelfDecleration} target="_blank" >St. Paul Institute affiliation letter-DAVV</Link>
                </li> <br/>
                <li className="heading-6" >
                    <Link href={SpipsAccounts} target="_blank" >SPIPS – Funds by Philanthropists </Link>
                </li> <br/>
                <li className="heading-6" >
                    <Link href={Scholarship} target="_blank" >Internal Scholarship Policy</Link>
                </li> <br/>
                <li className="heading-6" >
                    <Link href={''} target="_blank" >Scholarship Data</Link>
                </li> <br/>
                 <li className="heading-6" >
                    <Link href={''} target="_blank" >Feedback Reports</Link>
                </li> <br/>
                <li className="heading-6" >
                    <Link href={GreenAudit} target="_blank" >Green Audit</Link>
                </li> <br/>
                <li className="heading-6" >
                    <Link href={AppointmentRules} target="_blank" >Appointment Rules</Link>
                </li> <br/>
                <li className="heading-6" >
                    <Link href={''} target="_blank" >Appointment and Recruitment as per DHE, Bhopal</Link>
                </li> <br/>
                <li className="heading-6" >
                    <Link href={''} target="_blank" >List of Admitted Minority Students 2023-24</Link>
                </li> <br/>
                <li className="heading-6" >
                    <Link href={''} target="_blank" >Feedback from Stakeholders.</Link>
                </li> <br/>
                {/* <li className="heading-6" >
                    <Link href={''} target="_blank" >Financial Management 22-23</Link>
                </li> <br/> */}
                <li className="heading-6" >
                    <Link href={AduitReport} target="_blank" >Audit Report</Link>
                </li> <br/>
                <li className="heading-6" >
                    <Link href={RTI} target="_blank" >Right To Information – RTI</Link>
                </li> <br/>
            </ul>
             

            </>
          }
        />
    </>
  );
};

export default MandateDisclosure;
