import Head from "next/head";
import Banner from "@/components/banner";
import ContactForm from "@/components/ContactForm";

import bannerImg from "/public/assets/images/college-banner.png";


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
      <Banner
          bannerImg={bannerImg}
          heading="Contact Us"
        />
      <ContactForm sectionGap="both" />
      </main>
    </>
  );
}
