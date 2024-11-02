import React, { useEffect, useRef, useState } from "react";
import * as pdfjsLib from "pdfjs-dist";
import "turn.js";
import $ from "jquery";
import "./Flipbook.module.css"; // Include CSS from your example

// Set up pdfjs worker path
pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.14.305/pdf.worker.min.js`;

const Flipbook = ({ pdfUrl }) => {
  const [pages, setPages] = useState([]);
  const magazineRef = useRef();

  useEffect(() => {
    const loadPdf = async () => {
      const pdf = await pdfjsLib.getDocument(pdfUrl).promise;
      const pageImages = [];

      for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
        const page = await pdf.getPage(pageNum);
        const viewport = page.getViewport({ scale: 1 });
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");

        canvas.width = viewport.width;
        canvas.height = viewport.height;

        await page.render({
          canvasContext: context,
          viewport: viewport,
        }).promise;

        pageImages.push(canvas.toDataURL("image/png"));
      }

      setPages(pageImages);
    };

    loadPdf();
  }, [pdfUrl]);

  useEffect(() => {
    if (pages.length > 0 && magazineRef.current) {
      $(magazineRef.current).turn({
        width: 922,
        height: 600,
        elevation: 50,
        gradients: true,
        autoCenter: true,
      });
    }
  }, [pages]);

  const renderPages = () =>
    pages.map((pageSrc, index) => (
      <div key={index} className="page">
        <img src={pageSrc} alt={`Page ${index + 1}`} draggable="false" />
      </div>
    ));

  return (
    <div className="magazine-viewport">
      <div ref={magazineRef} className="magazine">
        {renderPages()}
      </div>
      <div className="controls">
        <button
          className="prev-btn"
          onClick={() => $(magazineRef.current).turn("previous")}
        >
          &#8592;
        </button>
        <button
          className="next-btn"
          onClick={() => $(magazineRef.current).turn("next")}
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default Flipbook;
