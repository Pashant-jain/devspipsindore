import Banner from "@/components/banner";
import Head from "next/head";
import React from "react";
import styles from "@/styles/Home.module.scss";
import { Inter } from "next/font/google"; // Replace with actual font import if using

import bannerImg from "/public/assets/images/college-banner.png";
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
import CommitteeTable from "@/components/comman/CommitteeList";

import Image1 from "/public/assets/images/Nss/1.jpg"
import Image2 from "/public/assets/images/Nss/2.jpg"
import Image3 from "/public/assets/images/Nss/3.jpg"
import Image4 from "/public/assets/images/Nss/4.jpg"

const Clubs = () => {
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
        <title>SPIPS</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Banner
          bannerImg={bannerImg}
          heading="Clubs & Association"
          Contact={true}
        />
        <Features
          sectionGap="both"
          imageSlider={NccImages}
          descriptionClass="about_message"
          className="bg_white"
          title={"COMMERCE CLUB"}
          content={
            <>
              Commerce and trade are the pillars of a Global civilization.
              Idolizing this concept the Commerce Club as a wing of Commerce
              Department helps the students gain insights related to trade and
              commerce. The club organizes activities pertaining to commerce and
              trade awareness, entrepreneurship promotion, Government policy and
              program awareness sessions, and more to make students grasp an
              overall knowledge of the wide spectrum of the commerce based
              career prospects.
            </>
          }
        />
        <Features
          sectionGap="both"
          imageSlider={NccImages}
          descriptionClass="about_message"
          className="bg_white"
          leftImage={true}
          title={"IT CLUB"}
          content={
            <>
              The IT club primarily helps students become more Tech-savvy, which
              essentially is the need of the hour. The students discuss and
              create IT based projects, learn about IT and Cyber Security
              through various expert sessions, discussions, seminars, open
              forums on subjects related to Information Technology. The club
              operates under the care of the Department of Computer Science, and
              ensure that the students learn necessary skills and concepts that
              will help students empower themselves with IT knowledge.
            </>
          }
        />
        <Features
          sectionGap="bottom"
          imageSlider={NccImages}
          descriptionClass="about_message"
          className="bg_white"
          title={"SCIENCE CLUB"}
          content={
            <>
              To promote the scientific temperament of the students and to
              inspire them to not just study but practice science and contribute
              to the field of Science through brainstorming session, lab
              sessions, discussion forums and other such activities. The club
              operates under the care of the Department of Science.
            </>
          }
        />
        <Features
          sectionGap="both"
          imageSlider={NccImages}
          descriptionClass="about_message"
          className="bg_white"
          leftImage={true}
          title={"ARTS & LITERARY CLUB"}
          content={
            <>
              Designed to promote & develop the linguistic capabilities of the
              students and help them practice the art of language the Department
              of humanities and the Language Lab committee in association
              organize various fun and learning sessions. The primary agenda of
              all the activities conducted under the banner are to help students
              enhance their communication skills that will help them in all
              walks of life.
            </>
          }
        />
        <Features
          sectionGap="bottom"
          imageSlider={NccImages}
          descriptionClass="about_message"
          className="bg_white"
          title={"FINE ARTS CLUB"}
          content={
            <>
              To cater to the non-academic development and in order to provide a
              platform to the students to showcase their creative talents, the
              fine arts club provides platform to the students to showcase their
              various talents in the various cultural and artistic activities.
              Various in-house and intra-college cultural programmes,
              competitions and feast are organized by the club throughout the
              year to keep students positively engaged and to groom and promote
              their talents.
            </>
          }
        />
        <Features
          sectionGap="both"
          imageSlider={NccImages}
          descriptionClass="about_message"
          className="bg_white"
          leftImage={true}
          title={"MANAGEMENT CLUB"}
          content={
            <>
              To promote awareness about the latest trends in Management and
              increase peer interaction opportunities that enhances the
              knowledge, skills and professional growth of the students. An
              initiative under the Department of Management, the SMA promotes
              students to develop personality traits that will help in their
              professional pursuits. The clubs organizes KSA based activities to
              help students and provide the students with platform to become
              Industry-ready.
            </>
          }
        />
        <Features
          sectionGap="bottom"
          imageSlider={NccImages}
          descriptionClass="about_message"
          className="bg_white"
          title={"PHOTOGRAPHY CLUB"}
          content={
            <>
              A Click Of Artistic Joy – The club aspires to help student explore
              the world of photography and provides platform to all the
              shutterbugs at SPIPS to exchange techniques, ideas, collaborations
              to learn and enhance their interest and Photography techniques.
            </>
          }
        />
        <Features
          sectionGap="both"
          imageSlider={NccImages}
          descriptionClass="about_message"
          className="bg_white"
          leftImage={true}
          title={"MUSIC CLUB"}
          content={
            <>
              The SPIPS Music club has helped promote many of our student to
              discover their inner mystro. The clubs through various practice
              sessions and cultural activities gives the students a platform to
              develop, groom and showcase their musical fervour. With activities
              such as vocal and instrumental training session, fun activities
              such as antakshari and in-house and inter college competitions the
              music club is a convivial space for students to explore and polish
              their talent.
            </>
          }
        />
        <Features
          sectionGap="both"
          imageSlider={NccImages}
          descriptionClass="about_message"
          className="bg_white"
          title={"YOGA CLUB"}
          content={
            <>
              To promote overall well being all members and especially to craft
              a healthy mind & body for blissful life the sports and yoga club,
              under the guidance of the physical education department organizes
              various practice sessions and competitions to promote physical
              well being of the students.
              <br />
              <br />
              Yoga – for wellbeing of all. The faculty members as well as
              students are invited to participate on the yoga sessions organized
              time to time under the guidance of expert yoga practitioners. The
              students are promoted to learn nd master the art for themselves as
              well.
            </>
          }
        />
        <Features
          sectionGap="both"
          imageSlider={NccImages}
          descriptionClass="about_message"
          className="bg_white"
          leftImage={true}
          title={"LANGUAGE LAB CLUB"}
          content={
            <>
              Designed to promote & develop the linguistic capabilities of the
              students the language lab club helps the students practices the
              art of language.
            </>
          }
        />
        <Features
          sectionGap="both"
          imageSlider={NccImages}
          descriptionClass="about_message"
          className="bg_white"
          title={"THINKERS CLUB"}
          content={
            <>
              The club stirs up critical and analytical thinking of the students
              to promote them to write and publish research articles in various
              national and international journals, with the abled assistance and
              guidance of the expert faculty members.
            </>
          }
        />
        <Features
          sectionGap="both"
          imageSlider={NccImages}
          descriptionClass="about_message"
          className="bg_white"
          leftImage={true}
          title={"ENVIRONMENTAL CLUB"}
          content={
            <>
              <strong>“Love to Nature, Save to Future “</strong>
              Environmental Awareness Committee works to create a solidarity
              among the students and staff of SPIPS for the protection of
              environmental through Awareness Programmes with respect to
              Environmental Problems and measures to check those problems which
              involves:
              <br />
              <br />
              <ol>
                <li>Green and Clean Campus Initiatives</li>
                <li>Conservations of Water and Energy Resources</li>
                <li>Alternative sources of energy</li>
                <li>Beyond the campus environmental activities</li>
                <li>
                  Environmental and Pollution Awareness Programmes in nearby
                  Areas
                </li>
                <li>Rural Plantation Mission and Urban</li>
              </ol>
            </>
          }
        />
           <Features
          sectionGap="both"
          imageSlider={NccImages}
          descriptionClass="about_message"
          className="bg_white"
          title={"GENDER CHAMPIONS CLUB"}
          content={
            <>
            Gender Champions Club are envisaged as responsible leaders who will facilitate an enabling environment within their schools/colleges/academic institutions where girls are treated with dignity and respect. They will strengthen the potential of these young people to advocate for gender equality and monitor progress towards gender justice.

<br/>
<br/>
<strong>Objective</strong>
The broad mandate of a Gender Championship Club is to provide an integrated and interdisciplinary approach to understanding the social and cultural constructions of gender that shape the experiences of women and men in society. The aim is to make the young boys and girls gender sensitive and create positive social norms that value their rights. Gender Championship Club give a helping hand to all,irrespective of their gender,caste or creed and gives them a sense of security that ensures them with the fact that they can achieve all their dreams and succeed with bewitching colours.
            </>
          }
        />
        <Features
          sectionGap="both"
          imageSlider={NccImages}
          descriptionClass="about_message"
          className="bg_white"
          leftImage={true}
          title={"SPORTS CLUB"}
          content={
            <>
              Harmonizing the energies of a healthy mind and a healthy body is a key component of holistic education. Excellent infrastructure facilities are present at SPIPS, which also places equal focus on academics and athletics to support these ideas. Young men and women’s energies are being channeled and harnessed by the sports Officers through the organisation of a variety of sporting events and encouragement to compete in various in-house, inter-college & national sporting tournaments.
            </>
          }
        />
      </main>
    </>
  );
};

export default Clubs;
