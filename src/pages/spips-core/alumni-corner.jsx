import Head from "next/head";
import React, { useEffect, useState } from "react";
import Features from "@/components/liberary/Features";
import SectionImage from "/public/assets/images/Director.png";
import PageContent from "@/components/comman/PageContent";
import bannerImg from "/public/assets/images/college-banner.png";
import Banner from "@/components/banner";


const AlumniCorner = () => {
    const [currentDomain, setCurrentDomain] = useState("");

    useEffect(() => {
      // Ensure we are in the client-side environment
      if (typeof window !== "undefined") {
        setCurrentDomain(window.location.hostname); // Get the current domain
      }
    }, []);
  return (
    <>
      <Head>
      <title>SPIPS &#8211; St. Paul Institute of Professional Studies, Indore</title>
        <meta name="description" content="SPIPS - St. Paul Institute of Professional Studies, Indore: A premier educational institution offering top-tier programs in management, commerce, science, and arts. Empowering students with academic excellence, holistic development, and career-oriented learning in a dynamic and inclusive environment." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Banner
          bannerImg={bannerImg}
          heading="Alumni Corner"
          Contact={true}
          // description="Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam."
        />

     

        <PageContent
          sectionGap="both"
          className="bg_white"
          content={
            <>
              
<h3 className="heading-6">The Alumni Association of St. Paul Institute of Professional Studies, Indore has been dedicating their services to the college since its inception.

The Alumni Association has received its official registration under the Madhya Pradesh Society Act, 1973 (03/27/01/23865/21) on 25<sup>th</sup> November 2021.</h3>
<br/><br/>
<h3 className="heading-5">Filling of Alumni Form</h3>
<ul>
 	<li>Each of the student in the Final Year Batch fills the a Form for becoming a part of the Alumni of St. Paul Institute of Professional Studies.</li>
 	<li>The Forms are duly filled under the care of the respective class teacher.</li>
 	<li>The students fill in the required details.</li>
</ul>
<h3 className="heading-5">Financial Contribution</h3>
<ul>
 	<li>The Alumni has been extending their financial contribution towards the development of the Mass Media Communication Room.</li>
 	<li>The Alumni of the college contribute Rs.100 per person as a registration fee to be a part of the alumni association.</li>
</ul>
<h3 className="heading-5">Non-Financial Contribution</h3>
<ol>
 	<li><strong>Alumni Guest Lectures</strong>
   
<ul className="my-2" >
 	<li>In order to capitalize on the skills and talents of the alumni, the college organizes guest lectures and seminars to share the wealth of knowledge with the students.</li>
 	<li>The alumni regularly take sessions for guiding the students of the students and conduct career counseling for them.</li>
</ul>
</li>
 	<li><strong>Sharing Excellence in Performing Arts</strong>
     <ul className="my-2" >
 	<li>The prominent alumni in the field of performing arts have also shared their expertise with the students. They have provided free of cost services and trainers and guides to the students of the college.</li>
</ul>
</li>
 	<li><strong>Assuring Quality of Education</strong>
<ul className="my-2" >
 	<li>The Alumni of the college have also actively contributed as a member of the IQAC Core Committee and shared their views and lend their services in the same.</li>
</ul>
</li>
 	<li><strong>Career Counselling and Guidance</strong>
<ul className="my-2" >
 	<li>Alumni in prominent positions conduct regular career counselling and guidance session for the students to help them make a wise career choice.</li>
</ul>
</li>
 	<li><strong>Voicing their Opinions</strong>
<ul className="my-2" >
 	<li>The Alumni representatives are the part of Internal Quality Assurance Cell of the College and thereby they give useful suggestions.</li>
 	<li>The Alumni share their thoughts by the medium of providing articles for the annual magazine.</li>
</ul>
</li>
</ol>
            </>
          }
        />
<PageContent
          sectionGap="bottom"
          className="bg_white"
          title="Certificate of Registration - Alumini Association"
          content={
            <>
            <div className="d-flex justify-content-center" >
            <iframe
        src={`https://docs.google.com/viewerng/viewer?url=${currentDomain}/assets/documents/Alumni-Association-membership-form-2019-22-2.pdf&embedded=true`}
        style={{ width: "640px", height: "800px" }}
        allowFullScreen
        title="Certificate of Registration - Alumini Association"
      />
      
            </div>
           
            </>
          }
        />
        <PageContent
          sectionGap="bottom"
          className="bg_white"
          title="Registration form - Alumini Association"
          content={
            <>
            <div className="d-flex justify-content-center" >
            <iframe
        src={`https://docs.google.com/viewerng/viewer?url=${currentDomain}/assets/documents/Registration-letter.pdf&embedded=true`}
        style={{ width: "640px", height: "800px" }}
        allowFullScreen
        title="Registration form - Alumini Association"
      />
      
            </div>
           
            </>
          }
        />
        
      </main>
    </>
  );
};

export default AlumniCorner;
