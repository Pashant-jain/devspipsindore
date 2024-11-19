import React, { useEffect } from "react";
import "dflip/css/dflip.min.css";

const Flipbook = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/public/assets/js/dflip.min.js"; // Path to the dFlip script
    script.async = true;

    script.onload = () => {
      if (typeof window.DFLIP === "function") {
        const flipbookContainer = document.getElementById("flipbook");
        new window.DFLIP(flipbookContainer, {
          source: "https://spipsindore.com/wp-content/uploads/2024/11/Memoir-September-2024.pdf",
          webgl: true,
        });
      } else {
        console.error("DFLIP is not available.");
      }
    };

    document.body.appendChild(script);
  }, []);

  return (
    <div
      id="flipbook"
      style={{
        width: "100%",
        height: "600px",
        border: "1px solid #ddd",
      }}
    />
  );
};

export default Flipbook;
