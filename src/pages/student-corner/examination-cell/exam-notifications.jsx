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


const ExamNotifications = () => {
  return (
    <>
      <Head>
        <title>Exam Notifications - SPIPS</title>
      </Head>
      <Banner
        isFrontBanner={false}
        bannerImg={bannerImg}
        heading={"Exam Notifications"}
      />
      <PageContent
          sectionGap="both"
          content={
            <>
            <h3 className="heading-5 Secondary_color" >Exam Rules</h3>
            <ul>
            <li className="small-text" >
                    <Link href='' target="_blank" >Exam Rules</Link>
                </li> <br/>
            </ul>
            <h3 className="heading-5" >Notifications</h3>
            <ul>
               
                <li className="small-text" >
                    <Link href={''} target="_blank" >M. Com. I and III sem exam form notification of session 2024-25</Link>
                </li> <br/>
                <li className="small-text" >
                    <Link href={''} target="_blank" >M. Com Notification</Link>
                </li> <br/>
                <li className="small-text" >
                    <Link href={''} target="_blank" >I year Exam Notification (Autonomous)</Link>
                </li> <br/> <li className="small-text" >
                    <Link href={''} target="_blank" >Time Table for I Year (Autonomous)</Link>
                </li> <br/> <li className="small-text" >
                    <Link href={''} target="_blank" >M. Com-II Semester Exam Notification (Autonomous) </Link>
                </li> <br/> <li className="small-text" >
                    <Link href={''} target="_blank" >Supplementary Exam Notice </Link>
                </li> <br/> <li className="small-text" >
                    <Link href={''} target="_blank" >View, Revaluation and Retotalling form 
                    </Link>
                </li> <br/> <li className="small-text" >
                    <Link href={''} target="_blank" >Supplymentary Examination Time Table for I year, June 2024 </Link>
                </li> <br/> 
            </ul>
             

            </>
          }
        />
    </>
  );
};

export default ExamNotifications;
