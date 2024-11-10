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
import ContactForm from "@/components/ContactForm";

const bannerImg = dynamic(
  () => import("/public/assets/images/front-banner-img.png")
);

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>SPIPS &#8211; St. Paul Institute of Professional Studies, Indore</title>
        <meta name="description" content="SPIPS - St. Paul Institute of Professional Studies, Indore: A premier educational institution offering top-tier programs in management, commerce, science, and arts. Empowering students with academic excellence, holistic development, and career-oriented learning in a dynamic and inclusive environment." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
      ContactPage
      <ContactForm />
      </main>
    </>
  );
}
