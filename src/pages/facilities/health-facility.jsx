import Banner from "@/components/banner";
import Head from "next/head";
import React from "react";

import Features from "@/components/liberary/Features";
import PrayerRoom from "/public/assets/images/Prayer-Room.jpg";
import bannerImg from "/public/assets/images/college-banner.png";


const HealthFacility = () => {
 
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
          heading="Physical Facility"
          Contact={true}
        />

        <Features
          sectionGap="both"
          SectionImage={PrayerRoom}
          descriptionClass="about_message"
          title={"PRAYER ROOM"}
          content={
            <>
              The beautifully designed Prayer Room in the Campus reminds
              everyone of God. It invites everyone to feel the presence of God
              and to experience serenity and joy.
            </>
          }
        />
        <Features
          sectionGap="both"
          SectionImage={PrayerRoom}
          descriptionClass="about_message"
          leftImage={true}
          className={"bg_white"}
          title={"CLASSROOMS"}
          content={
            <>
              The institute houses spacious well lit and well ventilated class
              rooms creating superior experience of teaching and learning
              housing. Elevated teacher’s platform and boards for better
              visibility and control of the class , announcement speakers, CCTV
              cameras and seating arrangement for 60 students in each class.
              Projectors for AV aid and Biometric machines for attendance are
              installed in classes to provide enhanced teaching experience.
            </>
          }
        />

        <Features
          sectionGap="both"
          SectionImage={PrayerRoom}
          descriptionClass="about_message"
          title={"SEMINAR HALL"}
          content={
            <>
              The Seminar Hall is used majorly for guest talks and student
              development programs. The fully air-conditioned and well-designed
              hall offers audio visual facilities and comfortable and large
              seating space hosts various intellectual programs benefiting the
              students as well as the faculty. Regular Faculty Enrichment
              programs and Research seminars are also hosted at the venue.
            </>
          }
        />
        <Features
          sectionGap="both"
          SectionImage={PrayerRoom}
          descriptionClass="about_message"
          leftImage={true}
          className={"bg_white"}
          title={"CONFERENCE HALL"}
          content={
            <>
              Majorly used for all faculty meeting and evaluation proceedings,
              the conference hall is enabled with AV aid that helps in smooth
              evaluation of all proceedings at the college. the ususal venue for
              the college EVPM meetings, PPA meetings, Xavier Board and
              executive meetings.
            </>
          }
        />
        <Features
          sectionGap="both"
          SectionImage={PrayerRoom}
          descriptionClass="about_message"
          title={"AUDIO VISUAL ROOM"}
          content={
            <>
              In order to make the lectures more interesting and interactive and
              also to improve the presentation skills of the students, the
              college owns smart boards and audio visual facility at a number of
              venues.
            </>
          }
        />
        <Features
          sectionGap="both"
          SectionImage={PrayerRoom}
          descriptionClass="about_message"
          leftImage={true}
          className={"bg_white"}
          title={"AUDITORIUM"}
          content={
            <>
              With a seating capacity of approximately 500+ audience and with
              all the modern facilities various cultural events organised at the
              class apart college auditorium provides a platform for all
              students to showcase their talents and skills. Regular Morning
              assembly with is an integral part of the SPIPS cultural are also
              conducted at the auditorium whereby all major and small events,
              festivals, important days and special programmes are celebrated.
            </>
          }
        />
        <Features
          sectionGap="both"
          SectionImage={PrayerRoom}
          descriptionClass="about_message"
          title={"BADMINTON ARENA"}
          content={
            <>
              The SPIPS campus has ample provision for various indoor sports and
              games. SPIPS gives much importance to sports and games activities,
              coaches and motivates the students to regularly participate in the
              various intercollegiate and university level competitions. The
              Indoor Sports Complex boasts of International Standard facilities
              for Badminton.
            </>
          }
        />
        <Features
          sectionGap="both"
          SectionImage={PrayerRoom}
          descriptionClass="about_message"
          leftImage={true}
          className={"bg_white"}
          title={"CANTEEN"}
          content={
            <>
              The canteen at SPIPS, provides nutritious & tasty refreshments in
              a clean and hygienic atmosphere. This is where often friendships
              are born and built up, ideas are exchanged in an informal manner.
            </>
          }
        />
      </main>
    </>
  );
};

export default HealthFacility;
