import Banner from "@/components/banner";
import CardSlider from "@/components/ui/CardSlider";
import accomplishmentsData from "@/data/accomplishmentsData";
import bannerImg from "/public/assets/images/liberary-banner.png";
import Head from "next/head";

function StaffAccomplishmentPage() {
  return (
    <>
      <Head>
        <title>Staff Accomplishment - SPIPS</title>
      </Head>
      <Banner
        isFrontBanner={false}
        bannerImg={bannerImg}
        heading={"Staff Accomplishment"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam."
        }
      />
      <CardSlider title={"2024-2035"} data={accomplishmentsData} />
      <CardSlider title={"2023-2034"} data={accomplishmentsData} />
    </>
  );
}

export default StaffAccomplishmentPage;
