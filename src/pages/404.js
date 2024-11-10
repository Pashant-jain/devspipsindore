import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import PageNotFound from "/public/assets/images/404-image.png";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>
          SPIPS &#8211; St. Paul Institute of Professional Studies, Indore
        </title>
        <meta
          name="description"
          content="SPIPS - St. Paul Institute of Professional Studies, Indore: A premier educational institution offering top-tier programs in management, commerce, science, and arts. Empowering students with academic excellence, holistic development, and career-oriented learning in a dynamic and inclusive environment."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="page_not_found_section spacing_both">
          <div className="container">
            <div className="page_not_found_inner">
              <Image src={PageNotFound} alt="Page Not Found" width={400} />
              <div className="page_not_found_content">
              <h1 className="heading-2">Page Not Found</h1>
              <p className="text-regular">
                The page you are looking for might have been removed had its
                name changed or is temporarily unavailable.
              </p>
              <Link href="/" className="text-regular">
                Home Page
              </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
