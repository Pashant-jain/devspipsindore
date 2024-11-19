// components/NanoGallery.js
"use client";

import PropTypes from "prop-types";
import { loadScript, loadStylesheet } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Spinner } from "./spinner";

const NanoGallery = ({
  images,
  settings = {
    thumbnailHeight: 150,
    thumbnailWidth: 150,
    itemsBaseURL: "https://nanogallery2.nanostudio.org/samples/",
  },
}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function asyncHandler() {
      await loadScript("https://code.jquery.com/jquery-3.6.0.min.js");
      await loadScript(
        "https://cdn.jsdelivr.net/npm/nanogallery2@3/dist/jquery.nanogallery2.min.js"
      );
      await loadStylesheet(
        "https://cdn.jsdelivr.net/npm/nanogallery2@3/dist/css/nanogallery2.min.css"
      );
      if (!$ || !$("").nanogallery2) return;
      $("#nanogallery2").nanogallery2(settings);
      setLoading(false);
    }

    asyncHandler();
  }, []);

  return (
    <>
      {loading && <Spinner size={"lg"} />}
      <div id="nanogallery2">
        {images?.map((image, index) => (
          <a
            key={index}
            href={image.url}
            data-ngthumb={image.thumbnail}
            title={image.title}
          >
            {image.title}
          </a>
        ))}
      </div>
    </>
  );
};

NanoGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      title: PropTypes.string,
    })
  ).isRequired,
  settings: PropTypes.object,
};

export default NanoGallery;
