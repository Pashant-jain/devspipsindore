"use client";

import React, { useEffect, useRef } from "react";
import { PageFlip } from "page-flip";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

const PDFFlipBook = ({ pdfUrl }) => {
  console.log(pdfUrl, 'pdfUrl');
  
  const bookContainerRef = useRef(null);
  const pageFlipRef = useRef(null); // To hold the PageFlip instance
  useEffect(() => {
    let pageFlip = null;
  
    if (bookContainerRef.current) {
      pageFlip = new PageFlip(bookContainerRef.current, {
        width: 550,
        height: 733,
        size: "stretch",
        minWidth: 315,
        maxWidth: 1000,
        minHeight: 420,
        maxHeight: 1350,
        maxShadowOpacity: 0.5,
        showCover: true,
        mobileScrollSupport: false,
      });
  
      pageFlipRef.current = pageFlip;
  
      console.log("PageFlip initialized", pageFlip);
  
      const loadPages = async () => {
        const pdfPages = bookContainerRef.current.querySelectorAll(".pdf-page");
        if (pdfPages.length > 0) {
          pageFlip.loadFromHTML(pdfPages);
        } else {
          console.error("No pages found to load into PageFlip.");
        }
      };
  
      loadPages();
    }
  
    return () => {
      if (pageFlipRef.current) {
        console.log("Destroying PageFlip instance", pageFlipRef.current);
        pageFlipRef.current.destroy(); // Destroy the instance safely
        pageFlipRef.current = null; // Reset ref
      }
    };
  }, [pdfUrl]);
  

  const handlePreviousPage = () => {
    pageFlipRef.current?.flipPrev();
  };

  const handleNextPage = () => {
    pageFlipRef.current?.flipNext();
  };

  return (
    <div className="container">
      <div>
        <button type="button" className="btn-prev" onClick={handlePreviousPage}>
          Previous page
        </button>
        [<span className="page-current">1</span> of <span className="page-total">-</span>]
        <button type="button" className="btn-next" onClick={handleNextPage}>
          Next page
        </button>
      </div>
      <div ref={bookContainerRef} id="pdfFlipBook" className="flip-book">
        <Worker workerUrl={`https://unpkg.com/pdfjs-dist/build/pdf.worker.min.js`}>
          <Viewer
            fileUrl={pdfUrl}
            plugins={[]}
            renderPage={(props) => (
              <div className="pdf-page page" key={props.pageIndex}>
                {props.canvas}
              </div>
            )}
          />
        </Worker>
      </div>
    </div>
  );
};

export default PDFFlipBook;
