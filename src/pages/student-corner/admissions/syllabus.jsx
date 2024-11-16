import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Banner from "@/components/banner";
import Accordion from "@/components/comman/Accordion";
import TabNavigation from "@/components/comman/TabNavigation";
import PageContent from "@/components/comman/PageContent";
import Link from "next/link";

import bannerImg from "/public/assets/images/college-banner.png";

const Syllabus = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentDomain, setCurrentDomain] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentDomain(window.location.origin);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Syllabus data
  const AutonomusIYear202425 = [
    { title: 'I year B. A Group A English Syllabus', link: '', target: "_blank" },
    { title: 'I year B. A Group B Psychology Syllabus', link: '', target: "_blank" },
    { title: 'I Year B. B. A. Syllabus', link: '', target: "_blank" },
    { title: 'I Year B.C.A. Syllabus', link: '', target: "_blank" },
    { title: 'I Year Foundation Syllabus', link: '', target: "_blank" },
    { title: 'I Year Vocational Syllabus', link: '', target: "_blank" },
    { title: 'I Year Elective Syllabus', link: '', target: "_blank" },
  ];

  const AutonomusIIYear202425 = [
    { title: 'II Year B. A. Syllabus', link: '', target: "_blank" },
    { title: 'II Year B. B. A. Syllabus', link: '', target: "_blank" },
    { title: 'II Year B. Com. Syllabus', link: '', target: "_blank" },
    { title: 'II Year B. Sc. Syllabus', link: '', target: "_blank" },
    { title: 'II Year B.C.A. Syllabus', link: '', target: "_blank" },
    { title: 'II Year Foundation Syllabus', link: '', target: "_blank" },
    { title: 'II Year Vocational Syllabus', link: '', target: "_blank" },
    { title: 'II Year Elective Syllabus', link: '', target: "_blank" },
  ];
  const MComSyllabus = [
    { title: 'FIRST SEMESTER', link: '', target: "_blank" },
    { title: 'SECOND SEMESTER', link: '', target: "_blank" },
    { title: 'SEMESTER THIRD', link: '', target: "_blank" },
    { title: 'SEMESTER 4 PART D', link: '', target: "_blank" },
    { title: 'SEMESTER 4 PART E', link: '', target: "_blank" },
    { title: 'SEMESTER 4 PART F', link: '', target: "_blank" },
    { title: 'SEMESTER 4 PART G', link: '', target: "_blank" },
  ];
  const Syllabus202023 = [
    { title: 'Syllabus 2020-2023', link: '', target: "_blank" },
  ];

  // Function to render syllabus links or files
  const renderIframe = (fileName) => {
    if (Array.isArray(fileName)) {
      return (
        <ul>
          {fileName.map((item, index) => (
            <li key={index} className="heading-6 mb-3">
              <Link href={item.link} target={item.target}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      );
    } else if (typeof fileName === "string" && currentDomain) {
      return (
        <iframe
          src={`${currentDomain}/assets/documents/${fileName}`}
          width="100%"
          height="500px"
          frameBorder="0"
          title="Syllabus Document"
        />
      );
    }
    return null;
  };

  // Tabs Data
  const tabsData = {
    "Autonomous I Year Syllabus 2024-25": <PageContent content={renderIframe(AutonomusIYear202425)} />,
    "Autonomous II Year Syllabus 2024-25": <PageContent content={renderIframe(AutonomusIIYear202425)} />,
    "M. Com Syllabus": <PageContent content={renderIframe(MComSyllabus)} />,
    "Syllabus 2020-2023 under DAVV": <PageContent content={renderIframe(Syllabus202023)} />,
  };

  return (
    <>
      <Head>
        <title>Syllabus - SPIPS</title>
      </Head>
      <Banner
        isFrontBanner={false}
        bannerImg={bannerImg}
        heading={"Syllabus"}
      />
      <div className="spacing_both">
        <div className="container">
            <Accordion tabsData={tabsData} />
        
        </div>
      </div>
    </>
  );
};

export default Syllabus;
