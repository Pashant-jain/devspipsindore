import Banner from "@/components/banner";
import Head from "next/head";
import React from "react";

import Features from "@/components/liberary/Features";
import bannerImg from "/public/assets/images/college-banner.png";

import Image from "next/image";
import PageContent from "@/components/comman/PageContent";

import CommitteeList from "@/components/comman/CommitteeList";
import { AntiRagingCommiteeDeatils, AntiRagingCommiteeHead, grivienceCommiteeDeatils, grivienceCommiteeHead, LibraryAdvisoryCommeitteeTableData, LibraryAdvisoryCommeitteeTablehead } from "@/config";

const AdmissionProcedure = () => {
    
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
        <Banner
          bannerImg={bannerImg}
          heading="Admission Procedure"
          Contact={true}
        />

        <PageContent
          sectionGap="both"
          descriptionClass="about_message"
          className="bg_white"
          title={"St Paul Institute of Professional Studies Indore offers various international facilities to its students, including:"}
          content={
            <>
     
<h3 className="heading-5" >Admission Procedure :</h3>
<ul>
   <li>Admission Committee, comprising the Director and Principal, along with other faculty members, selects students for admission to all the programmes adhering to Government norms for Minority Colleges.</li>
   <li>An Enquiry form is given to the students along with latest fee-structure format which the aspirant is expected to fill.</li>
   <li>Then subject counselling is done by specialized admission counsellors and information regarding students’ life at SPIPS is given.</li>
   <li>This is followed by college visit wherein the aspiring students get a chance to view and experience the facilities in the college.</li>
   <li>Pre-admission counselling brings out their aptitudes and interest that enable the teachers to motivate them to join the course comfortable for them.</li>
   <li>Application form is issued along with prospectus This contains the details of programmes offered, eligibility and procedure for admission to different programmes, learning resources, other facilities available in the college and scholarships available for students.</li>
   <li>After filling the application form, verification is done by the authorised faculty members and duly passed by the Principal followed by the Fee submission.</li>
   <li>Details of all the applicants as given in their application forms are computerized and categorized community-wise on the basis of subject and marks, in the college back office.</li>
   </ul>

   <br/><br/>
   <h3 className="heading-5" >Additional Details :</h3>
<ul>
    <li>Admission Committee, comprising the Director and Principal, along with other faculty members, selects students for admission to all the programmes adhering to Government norms for Minority Colleges.</li>
    <li>An Enquiry form is given to the students along with latest fee-structure format which the aspirant is expected to fill.</li>
    <li>Then subject counselling is done by specialized admission counsellors and information regarding students’ life at SPIPS is given.</li>
    <li>This is followed by college visit wherein the aspiring students get a chance to view and experience the facilities in the college.</li>
    <li>Pre-admission counselling brings out their aptitudes and interest that enable the teachers to motivate them to join the course comfortable for them.</li>
    <li>Application form is issued along with prospectus admission. This contains the details of programmes offered, eligibility and procedure for admission to different programmes, learning resources, other facilities available in the college and scholarships available for students.
    </li>
    <li>After filling the application form, verification is done by the authorised faculty members and duly passed by the Principal followed by the Fee submission.</li>
    <li>Details of all the applicants as given in their application forms are computerized and categorized community-wise on the basis of subject and marks, in the college back office.</li>
</ul>
<br/><br/>
<h3 className="heading-5" >International Admissions: </h3>
St Paul Institute of Professional Studies Indore offers various international facilities to its students, including:
<ul>
    <li><strong>International Exposure:</strong> The institute provides opportunities for students to participate in international conferences, seminars, and workshops.</li>
    <li><strong>Global Internships:</strong> Students can avail of internship opportunities with global companies, enhancing their practical skills and international work experience.</li>
    <li><strong>Foreign Language Training:</strong> The institute offers training in foreign languages like French, German, and Spanish to prepare students for global careers</li>
    <li><strong>International Collaborations:</strong> St Paul Institute has tie-ups with foreign universities, enabling student exchange programs, joint research initiatives, and access to international faculty.</li>
    <li><strong>Global Certification Programs:</strong> The institute offers certification programs in association with international organizations, adding value to students’ degrees</li>
</ul>
<br/><br/>
<span className="heading-6" >Note:</span> International candidates are candidates holding foreign passports (including those of Indian origin).
Eligibility Criteria for applying as an International applicant:
The applicants should have
<ul>
    <li>A foreign passport</li>
    <li>A bachelor’s degree or equivalent qualification (from at least a three-year programme) with at least 50% marks or equivalent CGPA/Grades from a recognised university/institute.</li>
    <li>B. Com degree is compulsory to take admission in M. Com program.</li>
</ul>
              </>
          }
        />
  <PageContent
          sectionGap="both"
          className="bg_white"
          
          title="Mode of Payment"
          content={
            <>
         
          Students of all years and semesters will be required to pay the college fees twice a year. The first instalment of fees will be paid in June / July and the second in October. The dates for the June / July payment will be as per the admission schedule printed in the fee structure. The dates for payment in October will be put up on the notice board and also announced during morning assembly.
<br/><br/>
<strong>Note: Due to pandemic Covid-19 the number of instalments has been increased to 4 in the academic year 2020-21 and 2021-22.</strong>
<br/><br/>
The college fee will be revised annually from 5-10% as per the approval of the Governing Body.
<br/><br/>
<strong>Note: Due to pandemic Covid-19 the fee has not been increased in the academic</strong> <strong>year 2020-21 and 2021-22.</strong>
<br/><br/>
<strong>The students have the following options for fee payment: </strong>
<br/><br/>
<strong>1) Fee counter</strong><strong>: The students can pay fee at the account office.</strong>

<strong>2) UPI</strong><strong>: The students can scan the QR code and pay the fee.</strong>

<strong>3) E-care</strong><strong>: This is the student portal wherein each student is issued an ID and password. The students can pay the fee through the e-care portal.</strong>

<strong>4) </strong><strong>The student can pay the fees using:</strong>
<ul>
 	<li>Net Banking (Bank Charges Extra)</li>
 	<li>Debit Card (Bank Charges Extra)</li>
 	<li>Credit Card (Bank Charges Extra)</li>
</ul>
<br/><br/>
<strong>Fee Refund Policy</strong>
<ul>
 	<li>No refund will be granted once the payment is done.</li>
 	<li>Duplicate clause- If student paid twice for one payment then transaction amount will be paid within 15 to 20 working days via same source.</li>
 	<li>Transaction fees charged would not be refunded / reversed for any refund or reversal of any transaction.</li>
</ul>
<br/><br/>
<strong>Debit / Credit Cards Gateway</strong>

Bank shall levy following surcharge on the transacted amount:
<ul>
 	<li>Net banking - 20 + GST</li>
 	<li>Credit Card - 1.4% + GST</li>
 	<li>Debit Card below 2000 - 0.75% + GST</li>
 	<li>Debit Card above 2000 - 1.10% + GST</li>
</ul>
<br/><br/>
The surcharge will be payable by the card users.

*applicable taxes extra.
            </>
          }
        />

      </main>
    </>
  );
};

export default AdmissionProcedure;
