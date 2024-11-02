import Banner from "@/components/banner";
import PhotoGallery from "@/components/ui/photo-gallery";
import Head from "next/head";
import bannerImg from "/public/assets/images/liberary-banner.png";
function PhotoGalleryPage() {
  return (
    <>
      <Head>
        <title>Photo Gallery - SPIPS</title>
      </Head>
      <Banner
        isFrontBanner={false}
        bannerImg={bannerImg}
        heading={"Photo Gallery"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam."
        }
      />
      <PhotoGallery />
    </>
  );
}

export default PhotoGalleryPage;
