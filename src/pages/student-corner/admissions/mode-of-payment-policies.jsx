import Banner from "@/components/banner";
import Head from "next/head";
import React from "react";

import Features from "@/components/liberary/Features";
import bannerImg from "/public/assets/images/college-banner.png";

import Image from "next/image";
import PageContent from "@/components/comman/PageContent";

import CommitteeList from "@/components/comman/CommitteeList";
import { AntiRagingCommiteeDeatils, AntiRagingCommiteeHead, grivienceCommiteeDeatils, grivienceCommiteeHead, LibraryAdvisoryCommeitteeTableData, LibraryAdvisoryCommeitteeTablehead } from "@/config";

const ModeOfPayment = () => {
    
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
          heading="Mode of Payment & Policies"
          Contact={true}
        />

<PageContent
  sectionGap="both"
  descriptionClass="about_message"
  className="bg_white"
  title={"Mode of Payment & Policies"}
  content={
    <>
      <h3 className="heading-6">Terms & Conditions</h3>
      <p>Please read these terms carefully before using the online payment facility. Using the online payment facility on this website indicates that you accept these terms. If you do not accept these terms do not use this facility.</p>

      <h3 className="heading-6">All payments are subject to the following conditions:</h3>
      <p>All Fees quoted are in Indian Rupees. The St. Paul Institute of Professional Studies reserves the right to change the fees as per government directions.

Your payment will normally reach the St. Paul Institute of Professional Studies account within two working days.

The St. Paul Institute of Professional Studies is not responsible for any delay in receipt of fee payment due to incorrect account number or incorrect personal details. The St. Paul Institute of Professional Studies also cannot accept liability if payment is refused or declined by the credit/ debit card supplier for any reason.

In no event will the St. Paul Institute of Professional Studies be liable for any damages whatsoever arising out of the use, inability to use, or the results of use of this site, any websites linked to this site, or the materials or information contained at any or all such sites, whether based on warranty, contract, tort or any other legal theory and whether or not advised of the possibility of such damages.
</p>

      <h3 className="heading-6">Refund Policy</h3>
      <p>Refunds, if applicable, at the discretion of the Management, will only be made to the debit/credit card used for the original transaction. For the avoidance of doubt nothing in this Policy shall require the St. Paul Institute of Professional Studies to refund the Fees (or part thereof) unless such Fees (or part thereof) have previously been paid.</p>

      <h3 className="heading-6">Security</h3>
      <p>The total payment online transactions are executed using state of the art technology (SSL) to ensure secured transaction.</p>

      <h3 className="heading-6">Service Provider</h3>
      <p>The St. Paul Institute of Professional Studies is not directly involved in the online payment but through service provider (Billdesk through Federal Bank).

In the event that the Student does not receive confirmation within 14 days of making the payment it is the responsibility of the Student to check with the St. Paul Institute of Professional Studies that the payment has been accepted.

The Student shall remain responsible for the Tuition Fees until such time as the confirmation as referred to above is received from the St. Paul Institute of Professional Studies in relation to each of these and any outstanding amounts owed to the St. Paul Institute of Professional Studies.</p>

      <h3 className="heading-6">Privacy Policy</h3>
      <p>This Privacy Policy applies to all of the products, services and websites offered by the St. Paul Institute of Professional Studies. Sometimes, we may post product specific privacy notices or Help Centre materials to explain our products in more detail.

If you have any questions about this Privacy Policy, please feel free to contact us through our website or write to us at info@spipsindore.com</p>

<h3 className="heading-6">Privacy Policy</h3>
<p>The St. Paul Institute of Professional Studies ensures upto date information and reserves the right to update / modify / delete at any time.

Please note that the St. Paul Institute of Professional Studies holds no responsibility for incorrect or no longer correct statements, quotes or descriptions and thereby excludes liability for any losses resulting from such wrong information.

Further, the St. Paul Institute of Professional Studies has every right to bring about legal action on students who misuse / alter / reproduce the content / information available on the website

</p>
<h3 className="heading-6">Data Privacy Policy</h3>
<p>The St. Paul Institute of Professional Studies ensures the data privacy policy as per government norms prevalent to time to time.</p>

      <h3 className="heading-6">List of Products / Services sold and their Pricing</h3>
      <table className="w-100">
        <thead>
          <tr>
            <th>No.</th>
            <th>Service</th>
            <th>Transaction Processing Fees</th>
          </tr>
        </thead>
        <tbody>
          {[
            ["1", "Visa, Mastercard, and Rupay Credit Card Payments", "1.00% + taxes"],
            ["2", "RuPay Debit Card Payments", "Nil"],
            ["3", "Visa, MasterCard, Maestro, ATM-cum-Debit Card Payments", "0.90% + taxes"],
            ["4", "Internet Banking Payments", "Rs.16 + taxes (major banks), Rs.10 + taxes (others)"],
            ["5", "Wallet / Prepaid Card Based Payments Facility", "1.25% + taxes"],
            ["6", "UPI", "Nil"],
            ["7", "NEFT/RTGS", "Rs.10 + taxes"]
          ].map((row, index) => (
            <tr key={index}>
              <td>{row[0]}</td>
              <td>{row[1]}</td>
              <td>{row[2]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  }
/>

      </main>
    </>
  );
};

export default ModeOfPayment;
