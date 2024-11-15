import Head from "next/head";
import React from "react";
import Features from "@/components/liberary/Features";
import SectionImage from "/public/assets/images/Director.png";
import PageContent from "@/components/comman/PageContent";
import bannerImg from "/public/assets/images/college-banner.png";
import Banner from "@/components/banner";


const WelfareMeasures = () => {
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
          heading="Welfare Measures"
          Contact={true}
          // description="Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam."
        />

     

        <PageContent
          sectionGap="both"
          className="bg_white"
          content={
            <>
              <h3 className="heading-5">Welfare Measures</h3>
              
              The Welfare measures are decided by the management in consultation with the authority members. Our institute has effective welfare policies for both teaching and non-teaching staff, providing them with various platforms to enhance their professional, academic, technical and personal skills.
<br/><br/>
The faculty chambers at the college are spacious and the cabins are well-equipped with internet and intercom facilities for ease of communication.
<br/><br/>
The management provides 13 CLs and 10 MLs in a year. The casual and medical leaves act as a strong support to face unforeseen situations. Also, an annual vacation is offered as per the government norms to regenerate the potential of faculty members and gearing up for the next session.
<br/><br/>
Additionally, 6 Duty Leaves for research work, seminars, workshops, paper presentation, external examiner duties and for guest lectures are provided (on approval). The Duty leaves give the faculty an encouragement to participate in various advancement programs and also an opportunity to represent the institute on national and global platforms.
<br/><br/>
The faculty members are constantly inspired to take up minor research projects and precedence of their research work is guided by the eminent personalities and expert in their field. To adhere to it Department-wise National seminars are regularly conducted  to enhance the knowledge and skills of the faculty members.
<br/><br/>
The members are encouraged to attend refresher courses / summer & winter schools to optimally utilize time and available resources. The Institute itself, takes initiative by deputing faculty members to participate in workshops / seminars / conferences/ faculty development programs/ symposiums organized by other institutes, university or other professional bodies at Local/ State/ National/ International level. This inspires and motivates the faculty members to participate and present papers at recognised platform.
<br/><br/>
With constant involvement and research-oriented development of the faculty members, the members are also appointed as Research Guides for internships and project works at the college.
<br/><br/>
To keep in pace with the latest development in the diverse and respective areas of interests, the members are facilitated with a rich library, well equipped with all required reprographic, computing and internet facilities. Along with that, latest and reputed online / print journals and periodicals are also available at the library. These resources are available for the students, teaching and non-teaching staff.
<br/><br/>
The Institute also organizes programmes for skill and professional development of the non-teaching staff. Office Skill Trainings are offered to the non-teaching staff for their professional development, in relevant courses such as in Tally ERP 9. These Training programmes are organized for administrative and support staff including library in-charge, accounts office in-charge and office assistants. Institute also deputes the non-teaching staff to attend staff development programmes on different aspects and themes to foster their professional development.
<br/><br/>
Exchange of knowledge and experience among the peer group is the best way to educate. Inspired by this ideology, the institute has adopted a practice of FEF (Faculty Enriching Faculty) programmes which helps the members widen the horizon of their academic awareness.
<br/><br/>
Physical Facilities such as pure and potable drinking water, separate vehicle parking area, Canteen facility, an infirmary with first aid facilities for unfortunate health circumstances are provided by the college management for students, teaching staff & non-teaching staff.
<br/><br/>
To further the health and wellness initiatives at the college yoga sessions are conducted by the yoga experts, fortnightly.
<br/><br/>
For the benefit of female members, a fully paid Maternity leave as per the norms is provided by the Management.
<br/><br/>
Also, to anchor the feeling of oneness, a staff trip, felicitation ceremonies - all teaching staff on Teachers’ Day and non-teaching staff on ‘Foundation Day’ are arranged. The financial expenses of the trip and felicitations is solely borne by the Management.
<br/><br/>
The Management is aware and very responsible for administering the salary of its employees. Hence, it is made a point that before 5th day of every month the dues are credited to the bank accounts of the employees. Along with the salary, benefits such as Provident Fund (EPF) and Gratuity are also adminstered as per the regulatory norms.
<br/><br/>
The work environment is extremely coordial and harmonious at SPIPS, however in respect for the possibility of differences a Grievance Redressal Cell is established for teaching and non-teaching staff. Any and all matters of grievance concerns are addressed in regular meetings of the redressal cell and are chaired by the Director and the Principal of the Institute.


            </>
          }
        />

        <div></div>
      </main>
    </>
  );
};

export default WelfareMeasures;
