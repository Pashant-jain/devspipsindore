import Head from "next/head";
import dynamic from "next/dynamic";

import Banner from "@/components/banner";
import NewsAndAnnouncements from "@/components/homePage/ NewsAndAnnouncements";
import OurStats from "@/components/homePage/OurStats";
import Testimonials from "@/components/comman/testimonials";
import TopRecruiters from "@/components/homePage/TopRecruiters";
import OurGallery from "@/components/homePage/OurGallery";
import Calander from "@/components/homePage/Calendar";

import { Affiliation, Recruiters } from "@/data";
import { testimonialsData } from "@/config";

const bannerImg = dynamic(
  () => import("/public/assets/images/front-banner-img.png")
);

export default function Home() {
  return (
    <>
      <Head>
        <title>SPIPS &#8211; St. Paul Institute of Professional Studies, Indore</title>
        <meta name="description" content="SPIPS - St. Paul Institute of Professional Studies, Indore: A premier educational institution offering top-tier programs in management, commerce, science, and arts. Empowering students with academic excellence, holistic development, and career-oriented learning in a dynamic and inclusive environment." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <Banner isFrontBanner={true} bannerImg={bannerImg} />
        <NewsAndAnnouncements sectionGap="both" />
        <OurStats sectionGap="bottom" />
        {/* <FeaturedCourses sectionGap="both" /> */}
        <Calander sectionGap="both" />
        <Testimonials sectionGap="both" testimonialsData={testimonialsData} showborders={true} />
        <TopRecruiters
          sectionGap="both"
          title="Our Top Recruiters"
          // description={
          //   <>
          //     Lorem ipsum dolor sit amet consectetur adipiscing elitdolor mattis
          //     sit phasellus mollis sit <br />
          //     aliquam sit nullam neques.
          //   </>
          // }
          data={Recruiters}
        />
        <TopRecruiters
          sectionGap="bottom"
          title="Affiliation With"
          // description={
          //   <>
          //     Lorem ipsum dolor sit amet consectetur adipiscing elitdolor mattis
          //     sit phasellus mollis sit <br />
          //     aliquam sit nullam neques.
          //   </>
          // }
          data={Affiliation}
        />
        <OurGallery sectionGap="bottom" />
      </main>
    </>
  );
}
