// pages/index.js

import NanoGallery from "@/components/ui/NanoGallery";

// import NanoGallery from "@/components/NanoGallery";
// import dynamic from "next/dynamic";

// // Dynamically import NanoGallery to avoid SSR issues
// const NanoGallery = dynamic(() => import("@/components/ui/NanoGallery"), {
//   ssr: false,
// });

export default function Home() {
  const galleryImages = [
    { url: "berlin1.jpg", thumbnail: "berlin1_t.jpg", title: "Berlin 1" },
    { url: "berlin2.jpg", thumbnail: "berlin2_t.jpg", title: "Berlin 2" },
    { url: "berlin3.jpg", thumbnail: "berlin3_t.jpg", title: "Berlin 3" },
  ];

  const gallerySettings = {
    galleryL1DisplayMode: "fullContent", // first level display mode -> fullContent
    galleryDisplayMode: "rows", // other levels display mode -> 4 rows
    galleryMaxRows: 4,
    gallerySorting: "random",

    // thumbnail on first gallery level
    thumbnailL1Height: 400,
    thumbnailL1Width: 600, // first level -> grid kayout
    thumbnailL1GutterWidth: 20,
    thumbnailL1GutterHeight: 20,
    thumbnailL1BorderHorizontal: 0,
    thumbnailL1BorderVertical: 0,

    // thumbnail on other gallery level
    thumbnailHeight: 400,
    thumbnailWidth: "auto", // other levels -> justified layout
    thumbnailGutterWidth: 2,
    thumbnailGutterHeight: 2,
    thumbnailBorderHorizontal: 0,
    thumbnailBorderVertical: 0,

    thumbnailAlignment: "fillWidth",

    // THUMBNAIL TOOLS & LABEL
    thumbnailToolbarImage: null,
    thumbnailToolbarAlbum: null,
    // first level label
    // <!-- thumbnailL1Label: { display: true, position:'overImageOnBottom', hideIcons: true, titleFontSize: '1em', align: 'center', titleMultiLine:true, displayDescription: false}, -->
    thumbnailL1Label: {
      display: true,
      valign: "bottom",
      hideIcons: true,
      titleFontSize: "3em",
      align: "left",
      titleMultiLine: true,
      displayDescription: false,
    },
    // other level label
    thumbnailLabel: {
      display: true,
      position: "overImageOnBottom",
      hideIcons: true,
      titleFontSize: "1em",
      align: "center",
      titleMultiLine: true,
      displayDescription: false,
    },

    // thumbnailToolbarAlbum: { topRight: 'counter' },

    // DISPLAY ANIMATION
    thumbnailL1DisplayTransition: "flipUp", // first level display animation
    thumbnailDisplayTransition: "slideDown", // other levels display animation
    thumbnailDisplayTransitionDuration: 500,
    thumbnailDisplayInterval: 30,

    // THUMBNAIL'S HOVER ANIMATION
    // first level
    // <!-- thumbnailL1BuildInit2: 'title_font-weight_bold|image_scale_0.8|label_left_-5px|label_text-transform_uppercase|label_top_95%|label_rotateZ_-90deg|label_transform-origin_top left', -->
    thumbnailL1BuildInit2:
      "title_font-weight_bold|image_scale_0.8|label_left_-25px|label_top_95%|label_rotateZ_-90deg|label_transform-origin_top left",
    thumbnailL1HoverEffect2:
      "imageGrayOff|title_color_#46D6AB_#aaaaaa|labelOpacity50",
    // other levels -> no hover effect

    // touch handling
    touchAnimation: false,
    touchAutoOpenDelay: 800,

    // GALLERY THEME
    galleryTheme: {
      thumbnail: {
        background: "#111",
        titleShadow: "",
        descriptionShadow: "none",
        titleColor: "#fff",
        borderColor: "#000",
      },
      navigationBreadcrumb: { background: "#3C4B5B" },
    },

    // DEEP LINKING
    locationHash: false,
  };

  return (
    <div>
        {/* <NanoGallery /> */}
      <NanoGallery images={galleryImages} settings={gallerySettings} />
    </div>
  );
}
