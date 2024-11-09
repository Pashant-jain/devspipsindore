import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Banner from "@/components/banner";
import Accordion from "@/components/comman/Accordion";
import TabNavigation from "@/components/comman/TabNavigation";

import bannerImg from "/public/assets/images/college-banner.png";
import RuralUpliftmentImage from "/public/assets/images/collage-7-1-1.png";




const tabsData = {
  "Rural Upliftment Program": (
    <>
      <div>
        <p className="text-regular">We are a College with a Difference.</p>
        <br />
        <p className="text-regular">
          In line with the humanitarian philosophy of the management of the institute, the staff and the students believe in the Power of Service. The strength of a human heart is in giving, and to instill and cement this sense of generosity among our students, the college has adopted a rural area where, under the flagship of the NSS and the NCC wing of the college, volunteers organize various development and awareness initiatives from time to time that serve the society, bringing in the difference. Our students are taught to be the change and spread light as they go, rather than be the light.
        </p>
        <Image src={RuralUpliftmentImage} alt="" loading="lazy" width={800} height={800} />
      </div>
    </>
  ),
  "Morning Assembly":  <>
  <div>
    <p className="text-regular">We are a College with a Difference.</p>
    <br />
    <p className="text-regular">
      In line with the humanitarian philosophy of the management of the institute, the staff and the students believe in the Power of Service. The strength of a human heart is in giving, and to instill and cement this sense of generosity among our students, the college has adopted a rural area where, under the flagship of the NSS and the NCC wing of the college, volunteers organize various development and awareness initiatives from time to time that serve the society, bringing in the difference. Our students are taught to be the change and spread light as they go, rather than be the light.
    </p>
    <Image src={RuralUpliftmentImage} alt="" loading="lazy" width={800} height={800} />
  </div>
</>,
  "Promotion of Human Values & Secularism":  <>
  <div>
    <p className="text-regular">We are a College with a Difference.</p>
    <br />
    <p className="text-regular">
      In line with the humanitarian philosophy of the management of the institute, the staff and the students believe in the Power of Service. The strength of a human heart is in giving, and to instill and cement this sense of generosity among our students, the college has adopted a rural area where, under the flagship of the NSS and the NCC wing of the college, volunteers organize various development and awareness initiatives from time to time that serve the society, bringing in the difference. Our students are taught to be the change and spread light as they go, rather than be the light.
    </p>
    <Image src={RuralUpliftmentImage} alt="" loading="lazy" width={800} height={800} />
  </div>
</>,
  "Special Meetings with the Director and Principal":  <>
  <div>
    <p className="text-regular">We are a College with a Difference.</p>
    <br />
    <p className="text-regular">
      In line with the humanitarian philosophy of the management of the institute, the staff and the students believe in the Power of Service. The strength of a human heart is in giving, and to instill and cement this sense of generosity among our students, the college has adopted a rural area where, under the flagship of the NSS and the NCC wing of the college, volunteers organize various development and awareness initiatives from time to time that serve the society, bringing in the difference. Our students are taught to be the change and spread light as they go, rather than be the light.
    </p>
    <Image src={RuralUpliftmentImage} alt="" loading="lazy" width={800} height={800} />
  </div>
</>,
  "Discipline Committee":  <>
  <div>
    <p className="text-regular">We are a College with a Difference.</p>
    <br />
    <p className="text-regular">
      In line with the humanitarian philosophy of the management of the institute, the staff and the students believe in the Power of Service. The strength of a human heart is in giving, and to instill and cement this sense of generosity among our students, the college has adopted a rural area where, under the flagship of the NSS and the NCC wing of the college, volunteers organize various development and awareness initiatives from time to time that serve the society, bringing in the difference. Our students are taught to be the change and spread light as they go, rather than be the light.
    </p>
    <Image src={RuralUpliftmentImage} alt="" loading="lazy" width={800} height={800} />
  </div>
</>,
  "Anti-Ragging Zone":  <>
  <div>
    <p className="text-regular">We are a College with a Difference.</p>
    <br />
    <p className="text-regular">
      In line with the humanitarian philosophy of the management of the institute, the staff and the students believe in the Power of Service. The strength of a human heart is in giving, and to instill and cement this sense of generosity among our students, the college has adopted a rural area where, under the flagship of the NSS and the NCC wing of the college, volunteers organize various development and awareness initiatives from time to time that serve the society, bringing in the difference. Our students are taught to be the change and spread light as they go, rather than be the light.
    </p>
    <Image src={RuralUpliftmentImage} alt="" loading="lazy" width={800} height={800} />
  </div>
</>,
};

const InstitutionalDistinctiveness = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Update the screen size state based on window width
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check on mount

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Head>
        <title>INSTITUTIONAL DISTINCTIVENESS - SPIPS</title>
      </Head>
      <Banner
        isFrontBanner={false}
        bannerImg={bannerImg}
        heading={"INSTITUTIONAL DISTINCTIVENESS"}
      />
      <div className={`spacing_both`}>
        <div className="container">
          {isMobile ? (
            <Accordion tabsData={tabsData} />
          ) : (
            <TabNavigation tabsData={tabsData} />
          )}
        </div>
      </div>
    </>
  );
};

export default InstitutionalDistinctiveness;
