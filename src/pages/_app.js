import React, { useEffect } from "react";
import Layout from "@/components/layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.scss";

export default function App({ Component, pageProps, router }) {

  useEffect(() => {
    const { pathname } = router;
    const setBodyClass = (className) => {
      document.body.className = className; // Set the entire className to just the one class
    };
    if (pathname !== "/") {
      const processedString = pathname.slice(1); // Get route without leading '/'
      setBodyClass(processedString);
    } else {
      document.body.className = ""; // Clear all classes if pathname is '/'
    }
  }, [router.pathname]);

  const { pathname } = router;
  const disableFooterArray = [
    "/_error",
    "/about-spips",
    "/about-spips/institutional-distinctiveness/"
  ];
  const showFooterCta = !disableFooterArray.includes(pathname);


  return (
    <Layout showFooterCta={showFooterCta} >
      <Component {...pageProps} />
    </Layout>
  );
}
