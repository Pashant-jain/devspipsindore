import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Banner from "@/components/banner";
import TabNavigation from "@/components/comman/TabNavigation";

import bannerImg from "/public/assets/images/college-banner.png";
import PageContent from "@/components/comman/PageContent";
import Accordion from "@/components/comman/Accordion";
import Link from "next/link";


const Results = () => {
  return (
    <>
      <Head>
        <title>Results - SPIPS</title>
      </Head>
      <Banner
        isFrontBanner={false}
        bannerImg={bannerImg}
        heading={"Results"}
      />
      <PageContent
          sectionGap="both"
          title={'Results'}
          content={
            <>
            <ul>
               
                <li className="small-text" >
                    <Link href={''} target="_blank" >M. Com I sem January 2024 Results</Link>
                </li> <br/>
                <li className="small-text" >
                    <Link href={''} target="_blank" >BA I year Results</Link>
                </li> <br/>
                <li className="small-text" >
                    <Link href={''} target="_blank" >BBA I year Results</Link>
                </li> <br/> <li className="small-text" >
                    <Link href={''} target="_blank" >BCA I year Results </Link>
                </li> <br/> <li className="small-text" >
                    <Link href={''} target="_blank" >B. Com I year Results </Link>
                </li> <br/> <li className="small-text" >
                    <Link href={''} target="_blank" >B.Sc I year Results </Link>
                </li> <br/> <li className="small-text" >
                    <Link href={''} target="_blank" >M. Com II sem Results
                    </Link>
                </li> <br/> <li className="small-text" >
                    <Link href={''} target="_blank" >Supplementary Exam Results</Link>
                </li> <br/> 
            </ul>
             

            </>
          }
        />
    </>
  );
};

export default Results;
