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
} from "@/config";
import SectionImage from "/public/assets/images/libery-features.png";
import CommitteeTable from "@/components/comman/CommitteeList";
import Link from "next/link";
import PDFViewer from "@/components/comman/PdfViewer";



const Library = () => {
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
          heading="Library"
          description="Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam."
        />
        <PageContent
          sectionGap="both"
          title="Dynamic Resource Hub for Students and Researchers"
          description={
            <>
              <strong className="heading-6">
                {" "}
                The only thing you absolutely have to know is the location of
                the Library.” – Albert Einstein
              </strong>{" "}
              <br />
              <br />
              Welcome to our library. The College Library is situated on the
              Ground Floor in the second block of College premise after the main
              block. Our library provides a serene and peaceful atmosphere to
              the readers, with an area of about 9200 sq. feet. The library aims
              at providing the members with good books and journals, in order to
              encourage them to cultivate a habit for reading and enhance their
              knowledge.
              <br />
              <br />
            </>
          }
        />
        <Features
          sectionGap="bottom"
          SectionImage={SectionImage}
          title="Our library provides"
          content={
            <>
              <ul>
                <li>
                  Textbooks of various authors and publishers are available for
                  all the courses run in SPIPS.
                </li>
                <br />
                <li>
                  Reference books of national and international authors and
                  publications to provide extra knowledge for the students.
                </li>
                <br />
                <li>
                  Twenty Nine ISSN coded national and international journals for
                  research updates.
                </li>
                <br />
                <li>
                  Twenty One leading magazines and eleven newspapers to make our
                  students enriched.
                </li>
                <br />
                <li>
                  Latest syllabus, and question papers of the university exams
                  of the previous years are available for reference.
                </li>
                <li>
                  A rich collection of national and international books,
                  journals, magazines, newspapers, novels, classics, biographies
                  and competitive material are accessible to the readers.
                </li>
                <br />
              </ul>
            </>
          }
        />
        <Features
          sectionGap="bottom"
          SectionImage={SectionImage}
          leftImage={true}
          title="E-library Facilities"
          content={
            <>
              Our library provides access to a range of digital learning
              platforms and resources, including SOUL 3.0 for library
              automation, DELNET for interlibrary networking, and the National
              Digital Library, a vast academic repository. We also offer
              educational content through SWAYAM, E-PG Pathshala, E-Shiksha, and
              online video lectures. Additionally, resources such as Skill
              India, Bharat Skills, and E-Shodhganga support skill development
              and academic research.
              <br />
              <br />
              <ul>
                <li>
                  <Link
                    className="text-regular font-600"
                    href={"http://192.168.1.227/WebOPAC/"}
                    target="_blank"
                  >
                    SOUL 3.0
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-regular font-600"
                    href={"https://delnet.in/"}
                    target="_blank"
                  >
                    DELNET
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-regular font-600"
                    href={"https://ndl.iitkgp.ac.in/"}
                    target="_blank"
                  >
                    NATIONAL DIGITAL LIBRARY
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-regular font-600"
                    href={"https://swayam.gov.in/nc_details/NPTEL"}
                    target="_blank"
                  >
                    SWAYAM
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-regular font-600"
                    href={"https://nmeict.ac.in/"}
                    target="_blank"
                  >
                    E-PG Pathashala
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-regular font-600"
                    href={"https://www.eshiksha.mp.gov.in/mpdhe/course/"}
                    target="_blank"
                  >
                    E-SHIKSHA
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-regular font-600"
                    href={"https://www.eshiksha.mp.gov.in/mpdhe/course/"}
                    target="_blank"
                  >
                    E-SHIKSHA
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-regular font-600"
                    href={"https://www.skillindiadigital.gov.in/home"}
                    target="_blank"
                  >
                    Skill India
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-regular font-600"
                    href={"https://bharatskills.gov.in/"}
                    target="_blank"
                  >
                    BHARAT SKILLS
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-regular font-600"
                    href={"https://shodhganga.inflibnet.ac.in/"}
                    target="_blank"
                  >
                    E-shodhganga
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-regular font-600"
                    href={
                      "https://highereducation.mp.gov.in/?page=xhzIQmpZwkylQo2b%2Fy5G7w%3D%3D"
                    }
                    target="_blank"
                  >
                    ONLINE VIDEO LECTURES
                  </Link>
                </li>
              </ul>
            </>
          }
        />
        <Services />
        <PDFViewer
          sectionGap="both"
          title="Liberary Details"
          Source={
            "https://spipsindore.com/wp-content/uploads/2024/08/Library-Details.pdf"
          }
        />
        <CommitteeList
          sectionGap="both"
          title="Library Advisory Committee"
          description={
            <>
              Lorem ipsum dolor sit amet consectetur adipiscing elidolor mattis
              sit
              <br /> phasellus mollis sit aliquam sit nullam neques.
            </>
          }
          tablehead={LibraryAdvisoryCommeitteeTablehead}
          tableData={LibraryAdvisoryCommeitteeTableData}
        />
        <CommitteeList
          sectionGap="bottom"
          title="Meet our Library Staff"
          description={
            <>
              Lorem ipsum dolor sit amet consectetur adipiscing elidolor mattis
              sit
              <br /> phasellus mollis sit aliquam sit nullam neques.
            </>
          }
          tablehead={LibraryWorkingTablehead}
          tableData={LibraryWorkingTableData}
        />
        <div></div>
      </main>
    </>
  );
};

export default Library;
