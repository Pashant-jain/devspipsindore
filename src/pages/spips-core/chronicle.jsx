import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Banner from "@/components/banner";
import Accordion from "@/components/comman/Accordion";
import TabNavigation from "@/components/comman/TabNavigation";

import bannerImg from "/public/assets/images/college-banner.png";
import RuralUpliftmentImage from "/public/assets/images/collage-7-1-1.png";

const tabsData = {
  "Happenings 2022-23": (
    <>
      <div>
        <table className="w-100">
          <tbody>
            <tr>
              <td colspan="2" width="616">
                July 2022
              </td>
            </tr>
            <tr>
              <td width="111">
                1<sup>st</sup> July
              </td>
              <td width="502">
                The program committee organised the welcome cum orientation
                program for the II and III year students. Vannahotsav
                Celebration by Environment Club by organising plantation drive
                in two phases.
                <strong>
                  <u>
                    <b> </b>
                  </u>
                </strong>
              </td>
            </tr>
            <tr>
              <td width="111">
                2<sup>nd</sup> July
              </td>
              <td width="502">
                N-list training program for faculty members commenced in the
                library between 9:00 a.m. to 4:00 p.m.
              </td>
            </tr>
            <tr>
              <td width="111">
                5<sup>th</sup> July
              </td>
              <td width="502">
                Department of computer science conducted inter department FEF
                program on the topic &quot;Word Press and Web Technologies’. The
                publication committee organised the session on the topic &quot;Life
                Skills&quot;
              </td>
            </tr>
            <tr>
              <td width="111">7th July</td>
              <td width="502">
                Commerce Department organized Intra department Faculty Enriching
                Faculty program on the topic &quot;Preparedness for Departmental
                Incubation Centre&quot;.
              </td>
            </tr>
            <tr>
              <td width="111">8th July</td>
              <td width="502">
                Department of humanity conducted in the intradepartmental
                Faculty Enriching Faculty Programme program on the topic &quot;A
                Journey of Thousand Miles Begins with a Single Step&quot;.
              </td>
            </tr>
            <tr>
              <td width="111">9th July</td>
              <td width="502">
                Department of computer science conducted inter department IQ
                quiz &quot;Know your World of IT&quot;.
              </td>
            </tr>
            <tr>
              <td width="111">11th July</td>
              <td width="502">
                N-list doubt sessions for BSC II, BCA II and BA II year in
                computer lab 2.
              </td>
            </tr>
            <tr>
              <td width="111">12th July</td>
              <td width="502">
                The department of humanities conducted a session on vocabulary
                retention strategies. • Career, skills development and placement
                committee conducted a session on “Effective Presentation skills.
                Resource person was Dr. Vivek Kaushik, HOD Management
                Department. • N-list doubt clearing session conducted in
                computer lab 2 for BBA II and B. Com CA II year students.
              </td>
            </tr>
            <tr>
              <td width="111">13th July</td>
              <td width="502">
                E-care committee conducted session on Basics of E-Care and PC
                Trouble Shooting. Career, skills, development and placement
                committee organized pre placement drive and preliminary
                interview was organised for on road job in Yes Bank.
              </td>
            </tr>
            <tr>
              <td width="111">14th July</td>
              <td width="502">
                Department of management conducted intra departmental Faculty
                Enriching Faculty at 12:30 p.m. on the topic
                &quot;Nationalisation&quot; The End of Globalization and
                De-Globalization. •Christian Students Association Committee
                organised a Bible quiz on &quot;Gospel According to St
                John&quot;. •N-list doubt clearing session conducted for B. Com
                Plain II-year, B. Com Plain III year and B. Com Tax II year
                students. •Commerce department organised &quot;Inauguration of
                Entrepreneurial Cell&quot;. Resource person was Mr. Ashutosh
                Kabra, Entrepreneur  and Founder Cloud Kitchen.
              </td>
            </tr>
            <tr>
              <td width="111">
                15<sup>th</sup> July
              </td>
              <td width="502">
                Music committee conducted a session on sharing about your
                favourite singer and their songs at 12:30 p.m. 41 students
                attend the session. •N-list doubt clearing session for students
                of <a href="http://b.com/">B.Com</a> FT III. year BSc III year
                and BCA III students in computer lab 2.
              </td>
            </tr>
            <tr>
              <td width="111">
                16<sup>th </sup>July
              </td>
              <td width="502">
                Department of management conducted in the department of students
                on the topic &quot;Glimpses of Management and Business
                World&quot; at 12:30 p.m. Photography and PowerPoint committee
                organised an Inter class photography competition. •N-list
                session conducted for BBA III year (A &amp; B), B.com CA III
                year students.
              </td>
            </tr>
            <tr>
              <td width="111">
                18<sup>th</sup> July
              </td>
              <td width="502">
                 Department of Humanities conducted an activity &quot;Main bhi
                Kavi&quot; at 12:15 p.m. •N-list Session conducted for 
                <a href="http://b.com/">B.Com</a> Honours III year A and B and  
                <a href="http://b.com/">B.Com</a> Tax III year.
              </td>
            </tr>
            <tr>
              <td width="111">20th July</td>
              <td width="502">
                 Language Lab Committee organized a session on “Enriching
                Elements of Language” part second. Display board committee
                organised an Inter class drawing competition on the topic
                “Suswagatam”. •Gender champions club organised the guest talk on
                the topic “Let&apos;s Talk about Gender Equality”. Resource
                Person were Shri Chandran and Sandhya Ghaveri. •Personality
                Development activity of B. Com Honors II Year A on “Candidature
                of CR”. Career, Skill Development and Placement Committee
                organized an internship drive for BSC and BCA final year
                students in IDA Insta Dot Analytics.
              </td>
            </tr>
            <tr>
              <td width="111">
                21<sup>st</sup> July
              </td>
              <td width="502">
                CCT committee organised in activity on the topic “Quiz for
                Improving Reasoning Ability”. Students Welfare Committee
                organized election of CR for II and III year classes.
              </td>
            </tr>
            <tr>
              <td width="111">
                22<sup>nd </sup>July
              </td>
              <td width="502">
                Department of science conducted Inter departmental Faculty
                Enriching Faculty Program on the topic &quot;Belief is
                relief&quot;. NCC committee organised an activity of donating
                clothes in slum areas. Department of computer science conducted
                a career counselling session.  Resources person was Mr. Tofique
                Khan. Women and child protection Committee conducted an
                orientation session for students on Role, Responsibility and
                Laws pertaining to Women and child Protection. Session taken by
                student coordinators.
              </td>
            </tr>
            <tr>
              <td width="111">
                23<sup>rd</sup> July
              </td>
              <td width="502">
                Department of commerce conduct a session on &quot;Earn While you
                Learn&quot; under Incubation Center Initiative. Resource person
                were Dr. Ravi Vyas and Prof. Ashay Joshi. Department of Science
                conducted Alumni session on the topic: Scope and Opportunities
                after MBA. Resources person was Ms. Siddhika Khode, SPIPS
                Alumni. NSS committee organised MOU singing ceremony with 4 NGOs
                under Urban Social Upliftment Program USU. PD activity of BA III
                year conducted on the topic &quot;Influence of Friends on Your
                Personality&quot;.
              </td>
            </tr>
            <tr>
              <td width="111">26th July</td>
              <td width="502">
                 Program committee organised a program on the theme “Rainbow
                :Mosaic of Talents”, on the occasion of Foundation Day
                celebration of the Institute.
              </td>
            </tr>
            <tr>
              <td width="111">27h July</td>
              <td width="502">
                Personality Development activity of BBA III A conducted on the
                topic &quot;Should election day be declared as a holiday&quot;.
                Personality Development activity of BSc II year conducted on the
                theme &quot;global warming&quot;. Sports committee organized an
                Inter department Chess League Tournament for boys and girls from
                27th to 29<sup>th</sup>.
              </td>
            </tr>
            <tr>
              <td width="111">
                28<sup>th</sup> July
              </td>
              <td width="502">
                Department of Computer Science conducted a session with alumna
                Ms. Mahima Patil on the topic digital content writing NSS
                Committee organised orientation session for II and III year
                students. Resources person was Dr. Lalita Sharma, Director,
                Abhakunj Welfare Society. NSS committee observed World Nature
                Conservation Day. Personality Development Activity of 
                <a href="http://b.com/">B.Com</a> FT III year conducted on the
                topic &quot;My Career My Aspiration&quot;.
              </td>
            </tr>
            <tr>
              <td width="111">29th July</td>
              <td width="502">
                Personality Development Activity of 
                <a href="http://b.com/">B.Com</a> Plain III year on &quot;Every
                Life Teaches Us a New Lesson Without Any Classroom&quot;. Social
                activity of <a href="http://b.com/">B.Com</a> Plain III year
                conducted. Visit to CK Naidu Udyan near GPO for plantation
                drive. Social activity of BA III year, a visit to Anganwadi and
                health survey in Chauhan Nagar Pipliyana. Social activity of 
                <a href="http://b.com/">B.Com</a> CA III year at Abhay Kunj
                welfare society. A literacy program was conducted. Class
                activity of B.Com Honours Section B conducted on the topic
                “Career Aspiration of Generation Z”. Class activity of B. Com
                Tax II year on the topic &quot;Are Friends More Important Than
                Career&quot;. Social activity of 
                <a href="http://b.com/">B.Com</a>
                 Tax III year on paper bag making and distribution. Class
                activity of B. Com Tax III year on the topic &quot;Career
                Options Available After Under Graduation&quot;.
              </td>
            </tr>
            <tr>
              <td width="111">30th July</td>
              <td width="502">
                Social activity (Street drama) at 56 dukan premises conducted by
                B. Com Honours III year B. Department of management conducted
                Interdepartmental Faculty Enriching Faculty Program on the topic
                &quot;Facilitating Entrepreneurial Development&quot;.
              </td>
            </tr>
            <tr>
              <td colspan="2" width="616">
                August 2022
              </td>
            </tr>
            <tr>
              <td width="111">
                3<sup>rd</sup> Aug
              </td>
              <td width="502">
                Library Committee conducted an article writing competition on
                the topic “Man and Environment”
              </td>
            </tr>
            <tr>
              <td width="111">
                4<sup>th</sup> Aug
              </td>
              <td width="502">
                Students Welfare Committee conducted a quiz on “Team Building
                and Leadership.”
              </td>
            </tr>
            <tr>
              <td width="111">
                <sup>5th</sup> Aug
              </td>
              <td width="502">
                Christian Students Association conducted “Spiritual Motivation
                and Meditation Session”
              </td>
            </tr>
            <tr>
              <td width="111">
                6<sup>th</sup> Aug
              </td>
              <td width="502">
                Department Of Commerce organized a session on “Career
                Opportunity in Taxation.” The Resource Person was Dr Ravi Vyas.
                Department Of Management organized a session on the topic Online
                Material for Studies and Exam Preparation. The Resource Person
                was Dr Ajay Patil and Dr Pooja Bakhuni
              </td>
            </tr>
            <tr>
              <td width="111">
                8<sup>th</sup> Aug
              </td>
              <td width="502">
                Inter Department Table Tennis Competition was inaugurated in the
                auditorium and the tournament continued for three days.
              </td>
            </tr>
            <tr>
              <td width="111">
                10<sup>th</sup> Aug
              </td>
              <td width="502">
                Publications Committee organized an article and poetry writing
                competition on the theme “Nature Nurture.” Careers Skills
                Development and Placement Committee organized a session on
                “Digital Marketing Associated Technologies.” The Resource Person
                was Mr Bhupendra Singh Rajput founder and CEO Robotronics India.
              </td>
            </tr>
            <tr>
              <td width="111">
                13<sup>th</sup> Aug
              </td>
              <td width="502">
                The Department of Commerce organized a session on “Career
                Options in Foreign Trade.” The Resource Person was Mr Rakesh
                Agarwal, Director, Export and Import Training Centre.
              </td>
            </tr>
            <tr>
              <td width="111">
                14<sup>th</sup> Aug
              </td>
              <td width="502">
                NCC Committee organized Tiranga Yatra on the occasion of “Azadi
                Ka Amrit Mahotsav” to encourage people to bring the Tiranga at
                home and to hoidt it to mark the 75 th Year of India’s
                Independence. On this Occasion the students were addressed by
                the Chairman Most Rev. Bishop Dr Chacko Thottumarickal and the
                Director Rev Fr Simon Raj.
              </td>
            </tr>
            <tr>
              <td width="111">
                15<sup>th</sup> Aug
              </td>
              <td width="502">
                The 76th Independence Day with the theme “Nation First Always
                First” was organised in the college. The Chief Guest was retired
                Major Saurabh Sharma.
              </td>
            </tr>
            <tr>
              <td width="111">
                16<sup>th</sup> Aug
              </td>
              <td width="502">
                Department of Science conducted GK quiz competition. Display
                Board Committee organized an event for Teachers Day card making.
                Music Committee conducted patriotic song competition on the
                theme “Azadi Ka Amrit Mahotsav.”
              </td>
            </tr>
            <tr>
              <td width="111">
                17<sup>th</sup> Aug
              </td>
              <td width="502">
                Women and Child Protection Committee conducted a guest talk on
                the topic “Women Health Issues.” The Resource Person was Dr
                Sangeeta Madhulia, Gynecologist.
              </td>
            </tr>
            <tr>
              <td width="111">
                18<sup>th</sup> Aug
              </td>
              <td width="502">
                Photography And PowerPoint Committee conducted a program in
                order to celebrate the World Photography Day. Department Of
                Humanity conducted an activity on the topic “Understanding
                Emotions Through Photographs.” The Physical Education Department
                conducted basketball practice match for the hostel teams.
              </td>
            </tr>
            <tr>
              <td width="111">
                20<sup>th</sup> Aug
              </td>
              <td width="502">
                The Department of Computer Science conducted a Science club
                activity on the topic “Motivational Video Presentation.” The NCC
                Committee conducted plantation programme near Piplihana Lake.
                The Gender Champions Club organised a guest talk on “Self
                Defense and Awareness for Fitness.” The Resource Person was Mr
                Vijay Kumar. The NSS Committee organised a special programme
                during Morning Assembly on the occasion of ‘Sadbhavna Divas’. To
                mark the day the Committee in Association with Samman Society
                organised two-wheeler servicing camp by women mechanics.
              </td>
            </tr>
            <tr>
              <td width="111">
                22<sup>nd</sup> Aug
              </td>
              <td width="502">
                 Under the IQAC initiative the Counseling and Tutorial Committee
                organised a guest talk on “Life Is All Positive.” The Resource
                Person was Mr Deek Parassini, Founder LIAP Foundation, United
                States of America.
              </td>
            </tr>
            <tr>
              <td width="111">
                23<sup>rd</sup> Aug
              </td>
              <td width="502">
                The Language Lab Committee organised an activity on the topic
                “Matrabhasha Avam Vyaktitva Vikas.” The Department of Humanities
                conducted a group discussion on the topic “Sri Lankan Economic
                and Political Crisis.” The Pre-University Examination Committee
                conducted logical and reasoning quiz for the third-year
                students.
              </td>
            </tr>
            <tr>
              <td width="111">
                24<sup>th</sup> Aug
              </td>
              <td width="502">
                The Environment Protection Committee conducted a guest talk on
                the topic Climate Change. The resource person was Mr. Joseph
                John, Senior Manager RWS group.
              </td>
            </tr>
            <tr>
              <td width="111">
                25<sup>th</sup> Aug
              </td>
              <td width="502">
                The Department of Computer Science conducted against of the
                topic role of object-oriented technology in software
                engineering. The resource person was Mr. Rafi Madhavi. The NCC
                Committee conducted the first phase of selection of NCC cadets.
                The University Examination Committee conducted E-Quiz on
                Competitive Exams.
              </td>
            </tr>
            <tr>
              <td width="111">
                26<sup>th</sup> Aug
              </td>
              <td width="502">
                Department of Management conducted a guest lecture and
                inaugurated the SPIPS Management Association. The resource
                person was Mr Ishan Nakra owner MBA Pizza.
              </td>
            </tr>
            <tr>
              <td width="111">
                27<sup>th</sup> Aug
              </td>
              <td width="502">
                Department of Science conducted Inter Department Faculty
                Enriching Faculty Programme on the topic “WiTricity.”
              </td>
            </tr>
            <tr>
              <td width="111">
                29<sup>th</sup> Aug
              </td>
              <td width="502">
                The Career Skills Development and Placement Committee conducted
                a session on “Let&apos;s Provide Financial Independence to
                Ourselves by Bajaj Finserv. The resource person was Mr Suman
                Chinchwadkar, Bajaj Finserv Corporate Trainer.
              </td>
            </tr>
            <tr>
              <td colspan="2" width="616">
                September 2022
              </td>
            </tr>
            <tr>
              <td width="111">1st Sept</td>
              <td width="502">
                Photography and PowerPoint Committee organized IQAC Viva PPT
                making session.
              </td>
            </tr>
            <tr>
              <td width="111">3rd Sept</td>
              <td width="502">
                The college organized a welcome cum orientation Programmme for
                the new batch of first year students.
              </td>
            </tr>
            <tr>
              <td width="111">5th Sept</td>
              <td width="502">
                A Special Programme was organised to exchange greetings to all
                the faculty members on the Teachers Day during Morning Assembly.
              </td>
            </tr>
            <tr>
              <td width="111">6th Sept</td>
              <td width="502">
                 Photography and PowerPoint Committee conducted IQAC Viva PPT
                making session. Department of Computer Science conducted Essay
                Writing Competition on the topic “Importance of Teachers in My
                Life” Careers Skills Development and Placement Committee
                conducted session on “Effective Communication Skills and Its
                Importance in Foreign Education.” The Resource Person was Mr
                Abhay Deshpande and Miss Megha Sharma from IDP Education
              </td>
            </tr>
            <tr>
              <td width="111">7th Sept</td>
              <td width="502">
                Library Committee conducted a session on “Literacy Awards.”
              </td>
            </tr>
            <tr>
              <td width="111">8th Sept</td>
              <td width="502">
                 The Feast Day of the Principal Dr Sr Alice Thomas was joyfully
                celebrated by the college fraternity. A Special Programme was
                conducted during the Morning Assembly to extend wishes to the
                Principal. A colourful cultural programme was organised along
                with a special celebration by Staff Association.
              </td>
            </tr>
            <tr>
              <td width="111">9th Sept</td>
              <td width="502">
                 Department of Computer Science conducted poster making
                exhibition cum competition.
              </td>
            </tr>
            <tr>
              <td width="111">11th Sept</td>
              <td width="502">
                NSS Committee in Association with Unnat Humanities Foundation
                organised a free Health Checkup Camp in Chauhan Nagar
              </td>
            </tr>
            <tr>
              <td width="111">12th Sept</td>
              <td width="502">
                 Department of Commerce organised a session on “Taxation and Tax
                Planning Under the Initiative of New Education Policy.” The
                Resource Person was Dr Ravi Vyas. Music Committee organised
                Instrumental competition.
              </td>
            </tr>
            <tr>
              <td width="111">13th Sept</td>
              <td width="502">
                 Department of Computer Science conducted a special session on
                “Effective Ways of Communication.” The Resource Person was Dr
                Stafard Anthony. Department of Science conducted a National
                Webinar on the topic “Application of Knowledge Management and
                Higher Education” in Collaboration with Carmel College, Mala
                Kerala.
              </td>
            </tr>
            <tr>
              <td width="111">14th Sept</td>
              <td width="502">
                Language Lab Commiittee conducted a session on “Figures of
                Speeches.” NSS Committee organised an Orientation Programme for
                the first-year students. Morning Assembly conducted a special
                programme to mark the observance of Hindi Divas. The election
                and selection of the first year Class Representatives was
                conducted by the respective class teachers.
              </td>
            </tr>
            <tr>
              <td width="111">15th Sept</td>
              <td width="502">
                The Environmental Awareness Committee organized “Cleanliness
                Awareness Programme.” Department of Management conducted Ad-Mad
                Show.
              </td>
            </tr>
            <tr>
              <td width="111">16th Sept</td>
              <td width="502">
                Department of Computer Science in collaboration with Saint
                Francis De Sales College, Nagpur organised National level
                Student Teacher Exchange Programme. Publication Committee
                conducted a session on “Editorial.” Logical and Reasoning Quiz
                conducted by Pre University Examination Committee.
              </td>
            </tr>
            <tr>
              <td width="111">17th Sept</td>
              <td width="502">
                The 10th Annual General Body Meeting of Parents Professor
                Association was conducted. The election of the Parent
                Representative was done during the meeting. A free Health
                Campaign in Association with Apollo Hospital was specially
                organised for the parents visiting the college during the
                meeting.
              </td>
            </tr>
            <tr>
              <td width="111">18 th Sept</td>
              <td width="502">
                The College provided auditorium to a team from Mumbai for
                conducting a seminar for Deaf and Dumb people.
              </td>
            </tr>
            <tr>
              <td width="111">19th Sept</td>
              <td width="502">
                 Gender Champions Club conducted Slogan Writing Competition on
                the topic “Strength Has No Gender.” Department of Science
                conducted Science Club Activity on “New Trends in Physics.”
                Display Board Committee organised a competition “Best Out Of
                Waste Showcase Your Talent.” Research and Journal Committee
                inaugurated SPIPS Research Forum and initiated Research
                Methodology Workshop.
              </td>
            </tr>
            <tr>
              <td width="111">20th Sept</td>
              <td width="502">
                 Department of Commerce organised “Poster Exhibition Cum
                Competition.” NCC Committee conducted a guest Talk on the topic
                “Opportunities In Defence Services.” Sports Committee organised
                Inter Departmental Turf Football League Touranement for both
                Boys and Girls from 15 to 20th September. Research Methodology
                Workshop day 2  was organised by the Research and Journal
                Committee. The Department of Management organised Alumni
                Interaction Programme on “Journey From SPIPS to
                Entrepreneurship.”
              </td>
            </tr>
            <tr>
              <td width="111">21st Sept</td>
              <td width="502">
                Counseling and Tutorial Committee organised a Guest Talk on
                “Understanding Mental Health In New Trends.” The session was
                taken by a Psychologist. The Department of Humanities conducted
                students smoke parliament
              </td>
            </tr>
            <tr>
              <td width="111">22nd Sept</td>
              <td width="502">
                 CCT and Assignment Committee conducted a session on “Improving
                Reasoning Ability for all the B Com 1st year classes. Department
                of Computer Science conducted “Flipped Classroom Activity.”
                Christian Students Association conducted a session on “Life of
                Saint Francis Of Assisi.”
              </td>
            </tr>
            <tr>
              <td width="111">23rd Sept</td>
              <td width="502">
                Women and Child Protection Committee conducted “A Smart Girl
                Workshop” for all the girls students of the college. NSS
                Committee anticipated the celebration of NSS day through a
                special programme during the Morning Assembly.
              </td>
            </tr>
            <tr>
              <td width="111">27th Sept</td>
              <td width="502">
                University Exam Committee conducted Department wise e-Quiz on
                Vocabulary.
              </td>
            </tr>
            <tr>
              <td colspan="2" width="616">
                October 2022
              </td>
            </tr>
            <tr>
              <td width="111">
                October  1<sup>st</sup>
              </td>
              <td width="502">
                 The Environment Protection Committee organized an exhibition of
                “Eco-friendly products”.
              </td>
            </tr>
            <tr>
              <td width="111">
                October 6<sup>th</sup> and 7<sup>th</sup>
              </td>
              <td width="502">
                NAAC Peer team visited St Paul Institute of Professional Studies
                as a part of first cycle of the college. The team comprised of
                the Chairperson: Dr Karan Jeet Singh, Member Coordinator: Dr
                Durga Prasad Gangodkar and Member: Dr Sushma Bhosale. The team
                in their visit viewed the PowerPoint presentation of the
                Principal,  IQAC coordinator and all the department and
                different Committees of the college. For the physical
                verification of the facilities, the team visited the entire
                campus. A cultural fest was conducted on the theme “MP: The
                Heart of India” on the occasion of NAAC Peer team visit of the
                day.
              </td>
            </tr>
            <tr>
              <td width="111">
                October 8 <sup>th</sup>
              </td>
              <td width="502">
                NAAC Peer Team visit Continued. Various presentations by
                different committees were given, followed by the discussion of
                the Peer team with the Principal and IQAC Coordinator. The visit
                ended with an exit meeting. There after the members of the team
                were taken to Ujjain for visit of the temple.
              </td>
            </tr>
            <tr>
              <td width="111">
                October 9<sup>th</sup>
              </td>
              <td width="502">
                The team departed from Indore on 9 October. The departure of the
                team at the airport and seeing off the team at the time of
                departure was done by the Principal Dr Sr Alice Thomas and the
                IQAC coordinator Dr. Goldie Zaki.
              </td>
            </tr>
            <tr>
              <td width="111">
                October 11<sup>th</sup>
              </td>
              <td width="502">
                The house wise election of the Office Bearers of 4 houses was
                conducted. The NAAC Visit result was declared and college got
                Accredited with Grade A with score of 3.12 out of 4
              </td>
            </tr>
            <tr>
              <td width="111">
                October 6<sup>th</sup> 10<sup>th</sup> and 11<sup>th</sup>
              </td>
              <td width="502">
                CCT Committee organized the common class test for the second and
                third year classes.
              </td>
            </tr>
            <tr>
              <td width="111">
                October 12<sup>th</sup>
              </td>
              <td width="502">
                The Photography and PowerPoint committee organized “PPT making
                session” under IQAC initiative for the students of 1st year. The
                “Investiture Ceremony” of house wise office bearers was
                organized during the morning assembly. The E-Care Committee
                conducted an Orientation Session for the first year students.
                The Department of Science conducted “Science Club Activity” on
                “New Technology.” Music Committee organized “Sur-Sadhana”,
                Learning Alankar along with Dr Suvarna Lapalikar.
              </td>
            </tr>
            <tr>
              <td width="111">
                October  13<sup>TH</sup>
              </td>
              <td width="502">
                The Department of Commerce organized an “Invited Talk on YouTube
                as a Career”, Mr. Ashwin was the Resource Person. A Seminar was
                organized by Christian Students Association on the occasion of
                “World Sight Day.” The NCC committee distributed fruits and
                snacks in Helen Keller Blind School. The Counseling and Tutorial
                Committee organized a special session for 1<sup>st</sup> year
                classes. The NSS committee organized a special programme during
                the Morning Assembly to mark the importance of World Sight Day.
              </td>
            </tr>
            <tr>
              <td width="111">
                October 14<sup>th</sup>
              </td>
              <td width="502">
                Library Committee conducted a workshop on “Reading.” National
                Webinar with Saint Xavier College was conducted by Department of
                Management on the topic “Bench Marking in the Service Industry”.
                Language Lab Committee conducted a competitive English mock
                test. The Pre-University Examination Committee conducted
                “Logical and Reasoning Quiz”.
              </td>
            </tr>
            <tr>
              <td width="111">
                October 15<sup>th</sup>
              </td>
              <td width="502">
                The Department of Management conducted an activity titled
                “Management Quiz”. The Gender Champions Club organized a street
                play on “Man Empowerment” to create awareness regarding
                empowerment of men inequality in the society; the venue was
                Kamla Nehru Prani Sangrhalay. Department of Computer Science
                conducted a Career Counseling session on “Prepare Yourself For
                Corporate and IT sector”. The Resource Person was Priyanka
                Chaudhary.
              </td>
            </tr>
            <tr>
              <td width="111">
                15<sup>th</sup> October
              </td>
              <td width="502">
                Sports Committee organized an “Inter Department Turf Cricket
                Tournament” from 11<sup>th</sup> to 15<sup>th</sup> October.
                Women and Child Protection Committee conducted a “Poster Making
                Competition” on the topic “Different Shapes of Women”.
              </td>
            </tr>
            <tr>
              <td width="111">
                October 16<sup>th</sup>
              </td>
              <td width="502">
                Sports Committee conducted an Inter College Badminton Men’s
                Tournament.
              </td>
            </tr>
            <tr>
              <td width="111">
                October 17<sup>th</sup>
              </td>
              <td width="502">
                Career Skills Development and Placement Committee conducted a
                session on “In Demand Job For Future.” The Resource Person was
                Mr. Aman Maurya, Director of Film Option private Limited.
                Display Board Committee organized “Handmade Book Making
                Competition”. Department of Commerce conducted a session on
                “Startup.” The resource person was Prof Ashay Joshi.
              </td>
            </tr>
            <tr>
              <td width="111">
                October 18<sup>th</sup>
              </td>
              <td width="502">
                Students Welfare Committee conducted a meeting of all the Class
                Representatives with the Director Rev. Father Simon Raj and
                Principal Dr. Sister Alice Thomas.
              </td>
            </tr>
            <tr>
              <td width="111">October 19th</td>
              <td width="502">
                The Discipline and Anti Ragging committee organized the session
                on “Importance of Discipline”. Department of Science conducted
                “Poster Making Competition cum Exhibition”.
              </td>
            </tr>
            <tr>
              <td width="111">October 20th</td>
              <td width="502">
                Research and Journal Committee conducted two days Research
                Methodology Workshop module.
              </td>
            </tr>
            <tr>
              <td width="111">October 21st</td>
              <td width="502">
                The Morning Assembly organized a programme to anticipate the
                festival of Deepavali. On this special day the assembly was
                addressed by the Director Rev Fr Simon Raj and concluded by the
                Principal Dr Sr Alice Thomas.
              </td>
            </tr>
            <tr>
              <td width="111">October 22- 24th</td>
              <td width="502">
                The Director Rev. Fr Simon Raj and the Principal Dr Sr Alice
                Thomas attended the 24th Triennial Conference of Xavier Board of
                Higher Education &quot;The Journeying with the Synodal Church
                through Networking and Academic Collaborations: Together in
                Communion, Participation and Mission&quot; held at St Joseph Vaz
                Spiritual Renewal Centre, Goa from 22 October to 24 October,
                2022
              </td>
            </tr>
            <tr>
              <td width="111">October 27th</td>
              <td width="502">
                The Department of Humanities conducted “Opera House”.
              </td>
            </tr>
            <tr>
              <td width="111">
                October 28<sup>th</sup>
              </td>
              <td width="502">
                Publications Committee conducted “General Knowledge Quiz”.
              </td>
            </tr>
            <tr>
              <td width="111">
                October 29<sup>th</sup>
              </td>
              <td width="502">
                The Inter Department Faculty Enriching Faculty programme was
                conducted by Department of Commerce on the topic “Tax Planning”.
              </td>
            </tr>
            <tr>
              <td width="111">
                October 31<sup>st</sup>
              </td>
              <td width="502">
                The day was especially dedicated to celebrate the Birthday of
                the Director Rev. Father Simon Raj. During the Morning Assembly,
                a special programme was organized to exchange birthday greetings
                to the Director. An Inter Class Competition titled: “Talent Show
                Day” was conducted during which the students of all the classes
                presented class-wise performances. The performances included
                Dance, Singing and Skit. The Alumni were called as the judges
                and first position in Skit was bagged by B.COM (FT) 2
                <sup>nd </sup>year, BA 1<sup>st</sup> year secured first
                position in singing while the dance competition was won
                collectively by B Sc students.
              </td>
            </tr>
            <tr>
              <td colspan="2" width="616">
                November 2022
              </td>
            </tr>
            <tr>
              <td width="111">
                1<sup>st</sup> November
              </td>
              <td width="502">
                The Morning Assembly Committee conducted the assembly with
                regards to “MP foundation day”. ‘CCT Committee’ organized
                session on ‘Exam Preparation for Semester Classes’. ‘Publication
                Committee’ organized a session on “Cultural Legacy of Madhya
                Pradesh”.
              </td>
            </tr>
            <tr>
              <td width="111">
                2<sup>nd</sup> November
              </td>
              <td width="502">
                Library Committee organized a workshop for 1st year students.
              </td>
            </tr>
            <tr>
              <td width="111">
                3<sup>rd</sup> November
              </td>
              <td width="502">
                Department of ‘Computer science’ organized a PPT making
                competition on the topic “Save Environment”.
              </td>
            </tr>
            <tr>
              <td width="111">
                4<sup>th</sup> November
              </td>
              <td width="502">
                Guest talk organized  by CSA Committee. The resource person was
                professor Neeraj Swamy.
              </td>
            </tr>
            <tr>
              <td width="111">
                7<sup>th</sup> November
              </td>
              <td width="502">
                The NSS committee organized 7 days NSS Annual Camp from 7th
                November to 13 November 2022 at Village Dudhiya”. The Camp was
                inaugurated in presence of village Sarpanch Mr. Rajesh Jani,
                Government School Principal Mrs. Asha Pathak, Principal of SPIPS
                DR. SR Alice Thomas and College Coordinator Dr. Unmekha Tare.
              </td>
            </tr>
            <tr>
              <td width="111">
                9<sup>th</sup> November
              </td>
              <td width="502">
                Department of Commerce Conducted Session on “Developing Business
                Ideas Phase 2” Department of Computer Science Conducted “Intra
                Department FEF on Dark Net. Department of Humanities organized
                “A National Webinar on the topic “Handling Emotions in Young Age
                in Reference to Love” in collaboration with De Paul College
                Mysore. The resource persons for session were Dr. Sunita Dahal,
                Assistant Professor Bherulal Patidar of Govt. College Mhow and
                Dr. Abhijeet Soni, MBBS, DNB in Psychiatry Indore. The welcome
                address for the Webinar was given by Dr. Sr. Alice Thomas,
                Principal, SPIPS.
              </td>
            </tr>
            <tr>
              <td width="111">
                10<sup>th</sup> November
              </td>
              <td width="502">
                Library Committee Conducted a session on “Newspaper Editorial’.
                The resource persons were Prof. Mathew MJ and Dr. Swati Singh.
                Department of Science Conducted a “Science Club Activity on the
                Topic Science Riddles. Music Committee Conducted “Sur Sadhana
                II” learning music with DR. Suvarna  Lapalikar. 16 students from
                ‘St Paul Institute of Professional Studies’ participated in
                University ‘Level Youth Festival 2022-23 which was organised by
                DAVV on 7, 9 and 10 November.
              </td>
            </tr>
            <tr>
              <td width="111">
                12<sup>th</sup> November
              </td>
              <td width="502">
                Departments of Computer Science Organized a guest lecture on
                “Career Opportunities In IT Sector”. The resource person was Mr.
                Ashok Vaktariya.
              </td>
            </tr>
            <tr>
              <td width="111">
                14<sup>th</sup> November
              </td>
              <td width="502">
                Students Welfare Committee and Discipline Committee Conducted a
                “Motivational Talk on Team Building”. The resource person was
                Captain Jaison Thomas. Department of Humanities conducted a
                “Movie Review”. Morning Assembly Committee “Celebrated Birsa
                Munda Jayanti”. Display Board Committee Conducted a “Poster
                Making Competition”. “NCC Committee organized an “Anti-Tobacco
                Rally” which was addressed by the Principal Dr. Sr. Alice Thomas
                and inaugurated by the Director Rev. Father Simon Raj.
              </td>
            </tr>
            <tr>
              <td width="111">
                15<sup>th</sup> November
              </td>
              <td width="502">
                The Department of Humanities had organized “Hindi Remedial
                Classes for 15 days from 1<sup>ST</sup> November to 15
                <sup>th</sup> November.
              </td>
            </tr>
            <tr>
              <td width="111">
                17<sup>th</sup> November
              </td>
              <td width="502">
                The Gender Champions Club Conducted a “Rally on Gender
                Awareness”. On this occasion the students were addressed by The
                Principal Dr. Sr. Alice Thomas. Research and General Committee
                organized a 3 Days Student Development Programme on the topic
                “Introduction of Java Programming for Newbies”. The resource
                person was Prof A. Manoj and the welcome address was given by
                the Principal. The Language Lab Committee Conducted a “Quiz on
                Proverbs”. Department of Humanities organized a “Special Lecture
                on National Epilepsy Day.”
              </td>
            </tr>
            <tr>
              <td width="111">
                18<sup>th</sup> November
              </td>
              <td width="502">
                7 Students Participated in various competitions organized in
                context to promotion of NEP 2020” at District Level. The
                students were selected after conducting competitions in college.
              </td>
            </tr>
            <tr>
              <td width="111">
                19<sup>th</sup> November
              </td>
              <td width="502">
                The Sports Committee organized an “Inter House Table Tennis and
                Chess Tournament from 17<sup>TH</sup> to 19<sup>TH</sup>
                 November 2022. The students on this occasion were addressed by
                The Director and The Principal. The Department of Commerce under
                collaboration with St Aloysius College Jabalpur MD organized a
                “National Seminar title Practical Implication of Taxation
                Policy”, the resource person for the session was Dr. Dilip
                Khosta, coordinator of St. Aloysius College, the welcome address
                was given by The Principal Dr. Sister Alice Thomas. Two students
                from St Paul Institute of Professional Studies presented
                research paper at ‘Shri Vaishnav Institute of Management Indore’
                on topic “Advancing From Women Empowerment To Achieving Gender
                Equality Challenges”, and received certificate. Ms. Arushi
                Chandran and Raj Nagar of BA 1<sup>st</sup> year, were
                facilitated during Morning Assembly. Department of Science
                Conducted a “Session on How To Write An Effective CV.”
              </td>
            </tr>
            <tr>
              <td width="111">
                21<sup>st</sup> November
              </td>
              <td width="502">
                ‘Counseling and Tutorial Committee’ organized “An Inter
                Department Psychology Girls Quiz.”
              </td>
            </tr>
            <tr>
              <td width="111">
                22<sup>nd</sup> November
              </td>
              <td width="502">
                Department of Humanities Conducted “Hindi Shrut Lekh” Workshop
                organised by “Women and Child Protection Committee For Self
                Defence” The ‘CSDP Committee’ organised an “Industrial Tour from
                21st November to 26 November 2022 to Chandigarh and Shimla.
                During this tour students visited APS Engineers Industry
                Chandhigarh”. The students were accompained by the Principal and
                four faculty members.
              </td>
            </tr>
            <tr>
              <td width="111">
                23<sup>rd</sup> November
              </td>
              <td width="502">
                Research and Journal Committee Organised a “Research Methodology
                Workshop.” CSDP Committee Organised a Guest Lecture On
                Government Jobs and its preparation.
              </td>
            </tr>
            <tr>
              <td width="111">
                . 24<sup>th</sup> November
              </td>
              <td width="502">
                Photography and PowerPoint Committee organised a Photography
                Workshop. The resource person was Mr.Ankit Balrai Environment
                Awareness Committee Conducted A Street Drama in the Canteen Area
                at 12:45 p.m. on the theme of Nature Conservation.
              </td>
            </tr>
            <tr>
              <td width="111">
                25<sup>th</sup> November
              </td>
              <td width="502">
                NSS Committee “Celebrated Constitution Day In The Morning
                assembly.”
              </td>
            </tr>
            <tr>
              <td width="111">
                26<sup>th</sup> November
              </td>
              <td width="502">
                Department of Computer Science Conducted Inter Department
                Faculty Enriching Faculty session on “Big Data Analysis and Dark
                Web.”
              </td>
            </tr>
            <tr>
              <td width="111">
                29<sup>th</sup> November
              </td>
              <td width="502">
                Inter House Art and Literary Competitions Day 1, “Poster Making,
                Rangoli, Clay Modelling, Debate, Poem Recitation was Conducted
                on 29th November, by Programme Committee. The event was
                inaugurated by the Principal Dr. Sr. Alice Thomas. ‘University
                Exam Committee’ Conducted a Quiz on General Knowledge from 25
                <sup>th</sup> to 29<sup>th</sup> November.
              </td>
            </tr>
            <tr>
              <td width="111">
                30<sup>th</sup> November
              </td>
              <td width="502">
                ‘Inter House Arts and Literary and Cultural Competition’
                Conducted by Program Committee. Day 2, Mehandi, Collage Making,
                Cartooning, Elocution, Poetry Recitation, and One Minute Show.
              </td>
            </tr>
            <tr>
              <td width="111">
                30<sup>th</sup> November
              </td>
              <td width="502">
                “English Remedial Classes” by Department of Humanities from 15
                to 30 November, 2022
              </td>
            </tr>
            <tr>
              <td colspan="2" width="616">
                December 2022
              </td>
            </tr>
            <tr>
              <td width="111">
                1<sup>ST</sup>December
              </td>
              <td width="502">
                ‘Publication Committee’ organized a session on HIV or AIDS
                awareness. ‘NCC Committee’ conducted Nukkad Natak on the
                occasion of ‘World AIDS Day’. ‘NSS Committee’ conducted Nukkad
                Natak on the occasion of World AIDS day at Kamla Nehru
                Prani-Sangrhalay Bholaram Ustad Marg and Bhavarkua area. ‘Inter
                House Cultural Competitions’ were organised by Programme
                Committee from first December to 3rd December 2022.
                ‘Pre-University Committee’ conducted PUC for BBA and BCA 5th
                semester classes.
              </td>
            </tr>
            <tr>
              <td width="111">
                2<sup>nd</sup>December
              </td>
              <td width="502">
                ‘Department of Computer Science’ conducted and essay writing
                competition on the topic ‘Computers Replacing Teachers’.
              </td>
            </tr>
            <tr>
              <td width="111">
                5<sup>TH</sup> December
              </td>
              <td width="502">
                ‘Department of Management’ conducted an invited talk on ‘Career
                related to stock and equity market, resource person was Mr.
                Vijay Jain associate vice president, Mandot Securities private
                limited. ‘Photography and PPT Committee’  conducted PPT making
                competition. ‘Industrial visit to Police Radio Training School’
                by the student of class BCA 1<sup>st</sup> and BSC 1
                <sup>st </sup>Year. ‘CSDP Committee’ organised an Industrial
                Exposure tour from 5<sup>th</sup> December to 10<sup>th </sup>
                December 2022 to Chandigarh and Shimla and visited two
                industries *Verka Milk Plant, Chandigarh * Amartex Fabric
                Manufacturing Industry, Chandigarh. The students were
                accompanied by four faculty members.
              </td>
            </tr>
            <tr>
              <td width="111">
                7<sup>th </sup>December
              </td>
              <td width="502">
                ‘Environmental Awareness Committee’ Conducted a PPT Making
                Competition on ‘Environmental Sensitivity’. ‘Department of
                Commerce’ conducted a Commerce Quiz Phase-1. ‘Department of
                Science’ conducted Science Club Activity “Video Presentation on
                Scope of Applied Sciences”. ‘Department of Humanity’ organised a
                session on ‘Career Options in Psychology’. ‘Physical Education
                Department’ organised Inter ‘College Yoga Man and Woman
                Tournament’. ‘CCT Committee’ organised E-Quiz-2 from 7
                <sup>th</sup> December to 16<sup>th</sup> December, 2022
              </td>
            </tr>
            <tr>
              <td width="111">
                8<sup>th</sup> December
              </td>
              <td width="502">
                ‘Display Board Committee’ organised an “Art and Craft Workshop”
                in Luminous Hall. ‘Department of Management’ conducted a Session
                on “How to write Research Paper?” Especially for students
                presenting research paper in National Seminar.
              </td>
            </tr>
            <tr>
              <td width="111">
                9<sup>th</sup> December
              </td>
              <td width="502">
                8 students from St. Paul Institute of Professional Studies
                participated in HR Conclave 2022 on “Re- engineering and
                Re-humanizing the workforce for resilient future held at BSS
                Institute of Advance Studies, Bhopal. The students were and
                company by the Principal, Dr. Sr Alice Thomas and MOU was signed
                with the Institute.
              </td>
            </tr>
            <tr>
              <td width="111">
                10<sup>th</sup> December
              </td>
              <td width="502">
                ‘Students Welfare Committee’ organised making and sale of
                Christmas Cards by Class Representatives and Student
                Coordinators. Industry Visit at Rani Press Pithampura by the
                class B.Com CA 1<sup>st</sup> year. ‘Sports Committee’ organised
                an Inter House Cricket and Volleyball Tournament (boys and
                girls) Badminton and Carrom Tournament (boys and girls). The
                students were address by the Director and The Principal on this
                occasion.
              </td>
            </tr>
            <tr>
              <td width="111">
                11<sup>th</sup>December
              </td>
              <td width="502">
                 17 students from St. Paul Institute of Professional Studies
                participated in Christmas Card singing competition held at
                Rajeshwar School, Mhow.
              </td>
            </tr>
            <tr>
              <td width="111">
                12<sup>th</sup> December
              </td>
              <td width="502">
                ‘Department of Humanity organised a guest talk on
                “Implementation of Psychological theories into professional
                practice” guest speaker was Mr. Pranjal Sharma, Psychologist.
                ‘CSDP Committee’ organised a Business Quiz in Inter Department.
              </td>
            </tr>
            <tr>
              <td width="111">
                13<sup>th</sup>December
              </td>
              <td width="502">
                ‘Research and General Committee’ conducted Research Methodology
                Workshop Module 4. ‘Department of Science Conducted Guest talk
                on the topic “Career in Computer Hardware and Software”.
                ‘Department of Commerce’ organised a National Conference on
                “Entrepreneurship and IPR Vision 2047, problem, challenges and
                opportunities”.
              </td>
            </tr>
            <tr>
              <td width="111">
                14<sup>th</sup>December
              </td>
              <td width="502">
                ‘University Exam Committee’ conducted E-Quiz based on
                competitive exams. ‘E-Care Committee and Website Committee’
                organised Guest Talk on Technical Aspects on the topic “Career
                Avenues in Blogging and Content Management”, guest Ms. Rishita
                Shukla. Industry visit at Flextuff Venture International limited
                by the student of Class B.com Hons 1<sup>st</sup> year.
                ‘Counselling and Tutorial Committee’ organised “Brainstorming
                Activity”. ‘Department of Management’ organised a National
                Seminar on “Ethics in Digitalized Era of Management and
                Entrepreneurship”.
              </td>
            </tr>
            <tr>
              <td width="111">
                15<sup>th</sup> December
              </td>
              <td width="502">
                ‘Women and Child Protection Committee’ organised the Nukkad
                Natak on the topic “Importance of Female Education at 56 Dukan,
                Indore. ‘Music Committee’ organised Carol Singing along with
                Christian Student Association in seminar hall. ‘Language Lab
                Committee’ organised a session on “Improve Your Vocabulary’.
                ‘Industry Visit by the Student of class B.com Plain 1
                <sup>st</sup> year at Flexi Tuff Venture International limited,
                Pritampur. ‘Counseling and Tutorial Committee’ organised a
                special session for Hostlers and the students were guided by the
                Director Rev. Fr Simon Raj and the Principal Dr. Sr Alice
                Thomas. ‘Student Welfare Committee’ conducted a meeting with the
                Director Rev. Fr Simon Raj and the Principal Dr. Sr Alice Thomas
                along with the class representatives.
              </td>
            </tr>
            <tr>
              <td width="111">
                16<sup>th</sup> December
              </td>
              <td width="502">
                ‘Library Committee’ organised a discussion on ‘Library Terms’.
                ‘Department of Humanity’ organised the Inter Department FEF on
                the topic “Basis of Psychological Counseling” Cricket team of
                St. Paul Institute of Professional Studies participated in Inter
                College Cricket tournament Indore and qualified for Semi final.
                ‘CCT Committee’ organized E-Care quiz 2 from 7<sup>th</sup>
                 December to 16<sup>th</sup> December.
              </td>
            </tr>
            <tr>
              <td width="111">
                17<sup>th</sup> December
              </td>
              <td width="502">
                ‘Morning Assembly Committee’ celebrated Christmas and Silver
                Jubilee year of Director Rev.Fr Simon Raj as Priesthood
                Celebration. Committee members organised a special prayer,
                prayer song, special thought and Christmas Carol by Christian
                Student Association. The students were addressed on the occasion
                by the Director Rev.Fr Simon Raj and the Principal Dr. Sr Alice
                Thomas. ‘The Program Committee’ organised Inter House Cultural
                Competition finals for group dance (classical and western).
                ‘Video Presentation, News Letter, release, Felicitation of NAAC
                participants and announcement of results by the Principal Dr. Sr
                Alice Thomas, were the key highlights. ‘During this event the
                Christmas celebration were anticipated and the silver jubilee
                year of Priestly ordination of the Director Rev.Fr Simon Raj was
                celebrated. The program was followed by a Christmas Card
                Exchange program. ‘The program committee in collaboration with
                the staff association organised a colourful evening celebration
                honoring the silver jubilee of priestly ordination of the
                Director Rev.Fr Simon Raj and Christmas celebration of extended
                SPIPS Family. Many prestigious guests become part of the joyous
                evening including the college chairman. Most Rev Bishop Dr
                Chacko Thottumarickal and Vice Chancellor of DAVV, Dr Renu Jain
                among many others. The programme began with a special prayer by
                Dr Goldie Zaki followed by welcome and introduction by the
                Principal Doctor Sr Alice Thomas. The program included lightning
                of the lamp by dignitaries, prayer dance video presentation on
                life journey of Rev Father Simon Raj, Skit, Carol singing and
                dance. Both student as well as the faculty members of elatedly
                participated in various events of the evening. The gathering was
                addressed by the College Chairman, VC DAVV, College Director and
                the Principal. Family members of the faculty were also invited
                to be a part of celebration and the program was followed by a
                special dinner for all.
              </td>
            </tr>
            <tr>
              <td width="111">18th December</td>
              <td width="502">
                ‘NSS and NCC Committee’ organised a Blood Donation Camp in
                association with St. Francis Hospital, to motivate the students.
                Honorable Director Rev Father Simon Raj also donated blood.
              </td>
            </tr>
            <tr>
              <td width="111">24th December</td>
              <td width="502">
                As per the notice received from collectorate, the faculty and
                staff members ‘Took Oath for Good Governance’ during Morning
                Assembly.
              </td>
            </tr>
            <tr>
              <td width="111">
                29<sup>th</sup> December
              </td>
              <td width="502">
                29 students from St. Paul Institute of Professional Studies
                Indore participated in Inter College Competitions held on the
                Annual Day ‘MRIDANG’ of SICA College, Indore from 29
                <sup>TH</sup> to 30<sup>TH</sup> December 2022. The Categories
                of events were ‘Solo and Group Singing Nukkad Natak/ skit, solo
                and group dance, photography, mimicry and beat boxing. The team
                from SPIPS bagged the following positions: Group Dance classical
                -1<sup>st</sup> position Solo singing (Western) -1<sup>st</sup>
                 position Skit - 1<sup>st</sup> position Group Singing -2
                <sup>nd</sup> position Group Dance (Western) – 2<sup>nd</sup>
                 position Beat boxing – 2<sup>nd</sup> position
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  ),
  "Happenings 2021-22": (
    <>
      <table className="w-100">
        <tbody>
          <tr>
            <td colspan="2" width="601">
              July 2021
            </td>
          </tr>
          <tr>
            <td width="123">1 July</td>
            <td width="479">
              The Photography and PowerPoint Committee organised a celebration
              on the occasion of National Doctors Day. They released a video
              titled ‘Shukriya’ as a tribute to doctors. The meeting of class
              representatives was held with the Director and the Principal.
            </td>
          </tr>
          <tr>
            <td width="123">2 July</td>
            <td width="479">
              Display Board Committee organised a drawing competition ‘Doodle
              for SPIPS’.
            </td>
          </tr>
          <tr>
            <td width="123">3 July</td>
            <td width="479">
              The Department of Humanities organised an activity on ‘Mimicry ke
              Superstars’. The Publications Committee released the Newsletter
              ‘Alvida- Luminous 11.3’ during the Morning Assembly. The NSS
              Committee organise a Paper Bag Making Workshop. The Department of
              Commerce organise a Student Led Initiative Workshop on ‘Resin
              Artwork’. Classes for 2<sup>nd</sup> and 3<sup>rd</sup> Year
              students begin with a motivational session.
            </td>
          </tr>
          <tr>
            <td width="123">6 July</td>
            <td width="479">
              The Department of Humanities organised an event ‘Showcasing Your
              Talent.’
            </td>
          </tr>
          <tr>
            <td width="123">7 July</td>
            <td width="479">
              The Counselling and Tutorial Committee organised a Motivational
              Session on the topic ‘Potential of Self-Awareness’. The Department
              of Management organise a webinar on ‘Online Material for Studies
              and Preparation’.
            </td>
          </tr>
          <tr>
            <td width="123">8 July</td>
            <td width="479">
              The Gender Champions Club organised a Guest Talk on ‘Educating
              Women about Healthcare Promotes Healthier Families’. The resource
              person was Prof. Ashweni Suryavanshi, Government Girls PG College
              of Excellence, Sagar, MP. The Music Committee conducted Online
              Music Quiz Competition.
            </td>
          </tr>
          <tr>
            <td width="123">9 July</td>
            <td width="479">
              The Women and Child Protection Committee organised an Inter Class
              Slogan Writing Competition on the topic ‘Awareness for
              Vaccination’. The Intra Department Faculty Enriching Faculty of
              department of Computer Science was held on the topic ‘Ensuring
              Qualities in Students’.
            </td>
          </tr>
          <tr>
            <td width="123">10 July</td>
            <td width="479">
              The Sports Committee organised a competition on ‘Inspirational
              Stories of Sports Person’. The NCC Committee organise a Group
              Discussion on ‘Cadets Expectation and Views Behind Joining NCC’.
            </td>
          </tr>
          <tr>
            <td width="123">12 July</td>
            <td width="479">
              The Intra Departmental Faculty Enriching of Department of Commerce
              was organised on the topic ‘Ad Mad Show’.
            </td>
          </tr>
          <tr>
            <td width="123">13 July</td>
            <td width="479">
              The Language Lab Committee organised a session on ‘Phonetics’.
            </td>
          </tr>
          <tr>
            <td width="123">14 July</td>
            <td width="479">
              The Intra Department Faculty Enriching Faculty programme of
              Department of Science was held on the topic ‘Knowledge is the
              Biggest Asset you can Accumulate’.
            </td>
          </tr>
          <tr>
            <td width="123">15 July</td>
            <td width="479">
              The Career Skill Development and Placement Committee organised a
              session on ‘Goal Setting and its Achievement’.
            </td>
          </tr>
          <tr>
            <td width="123">16 July</td>
            <td width="479">
              The Counselling and Tutorial Committee organised a quiz game on
              ‘Critical and Creative Thinking’. The Department of Science
              conducted a Alumni Interaction on topic ‘How to Prepare for IAS..
            </td>
          </tr>
          <tr>
            <td width="123">17 July</td>
            <td width="479">
              The Christian Students Association organised a fruitful discussion
              on the ‘Holy Word of God’.
            </td>
          </tr>
          <tr>
            <td width="123">20 July</td>
            <td width="479">
              The Library Committee organised a quiz competition on ‘Know Your
              MP’. The Inter Departmental Faculty Enriching Faculty Programme
              was organised by Department of Humanities on the theme ‘Voice in
              Grammar and its Application’ in the Seminar Hall. The session was
              taken by Dr. Swati Singh and Prof. Matthew MJ.
            </td>
          </tr>
          <tr>
            <td width="123">22 July</td>
            <td width="479">
              The Department of Computer Science conducted a special competition
              for advance learners on ‘Check Your IQ’. The Women and Child
              Protection Committee organised a Guest Talk by SPIPS Alumni on the
              topic ‘Violence against Children and their Protection’.
            </td>
          </tr>
          <tr>
            <td width="123">24 July</td>
            <td width="479">
              The Department of Computer Science organised a Alumni Sharing on
              ‘Recent Technical Advancement and Technical Know-How in the Field
              of Computer Networking’. The Department of Commerce organised a
              session by Alumni on ‘Career Planning in Various Sectors’. The
              Department of Management organised an Inter Class Competition on
              the theme ‘Know Your Firm’. The Sports Committee organised a
              Webinar on ‘Exercise and Physical Fitness Health Lifestyle’. The
              Resource Person was Dr. Vijay Francis, School of Physical
              Education, DAVV, Indore. The NSS Committee organised an invited
              talk on ‘You are not Alone to Address the Mental Health Issues
              amongst Youth’. The resource person was Ms. Elina P Mathew,
              Scholar, Clinical and Counselling Psychology.
            </td>
          </tr>
          <tr>
            <td width="123">26 July</td>
            <td width="479">
              The Department of Humanities organised a Hindi English Slogan
              Writing Competition on the topic ‘Importance of Wearing a Helmet
              while Riding’. The NCC Committee observed ‘Kargil Vijay Divas’.
              The Foundation Day of the college was celebrated stream wise. On
              the day, the Mass Media and Communication Room was inaugurated and
              the college magazine was released. The day concluded with a feast
              in the canteen.
            </td>
          </tr>
          <tr>
            <td width="123">27 July</td>
            <td width="479">
              The Language Lab Committee organise a workshop on ‘Writing
              Skills’.
            </td>
          </tr>
          <tr>
            <td width="123">28 July</td>
            <td width="479">
              The Career Skill Development and Placement Committee organised an
              awareness session for Certificate Program in Banking, Finance and
              Insurance by Bajaj Finserv.
            </td>
          </tr>
          <tr>
            <td width="123">29 July</td>
            <td width="479">
              The Gender Champions Club organised a Special Session
              commemorating the occasion of ‘Raising Awareness about Human
              Trafficking’ on World Day against Human Trafficking. The Library
              Committee organise a session on ‘Talk on Romantic Literature as
              People’.
            </td>
          </tr>
          <tr>
            <td width="123">30 July</td>
            <td width="479">
              A Session on ‘YouTube as a Career’ was organised by the Department
              of Commerce. The Department of Computer Science organise a Guest
              Talk on ‘What Next after BCA’. The Evaluation and Planning Meeting
              was held.
            </td>
          </tr>
          <tr>
            <td colspan="2" width="601">
              August 2021
            </td>
          </tr>
          <tr>
            <td width="123">3 August</td>
            <td width="479">
              Class Activity of B. Com Ca III Year held on Improving Leadership
              Skills: Class CR Elections. Class Activity of B. Com CA II Year
              held on ‘Who is your Role Model and Why?’.
            </td>
          </tr>
          <tr>
            <td width="123">5 August</td>
            <td width="479">
              The Counselling and Tutorial Committee organised a workshop on
              Rakhi Making at 12:15 pm on the Zoom App. The Resource Person was
              Ms. Darshana Khandelwal, SPIPS Alumni. Class Activity of B. Com
              Honours B II Year held at ‘Recent Development in Nanotechnology’.
            </td>
          </tr>
          <tr>
            <td width="123">6 August</td>
            <td width="479">
              The Publication Committee organised an ‘Online News Reading
              Competition- English’ at 02:30 pm. The Library Committee oragnised
              a discussion on ‘The other Side of the Coin- Perception of
              Thought’ at 01:30 pm on the zoom app. CSA organised a session on
              ‘How to be a Responsible Citizen’ at 12:30 pm on the Zoom App. The
              students were addressed by the Director and the Principal. AISCHE
              awarded the Principal Dr. Sr. Alice Thomas with the ‘Best
              Principal Award’ and Dr. Goldie Zaki with the ‘Best Innovative
              Faculty Award for Academics’ year 2019-20. Intra- Departmental FEF
              of the Department of Computer Science on ‘Pegasus- its Pros and
              Cons’ at 02:00 pm in the AV Room.
            </td>
          </tr>
          <tr>
            <td width="123">7 August</td>
            <td width="479">
              The Morning Assembly Committee in association with B. Com Honours
              III Year celebrated National Handloom Day at 12:30 pm on the Zoom
              App.
            </td>
          </tr>
          <tr>
            <td width="123">9 August</td>
            <td width="479">
              Committee Members Meeting held with the Director and the
              Principal.
            </td>
          </tr>
          <tr>
            <td width="123">10 August</td>
            <td width="479">
              The CSDP Committee in association with Bajaj Finance organised a
              certificate course in Banking, Insurance and Finance. The Language
              Lab Committee organised a session on ‘Some Interesting Facts of
              English and Hindi Language’ at 12:30 pm on then Zoom App.
            </td>
          </tr>
          <tr>
            <td width="123">11 August</td>
            <td width="479">
              Webinar on ‘Developing Entrepreneurs Skill’ was organised by the
              Department of Commerce at 1:00 p.m. on the Zoom app. The resource
              person was Dr. Deepti Maheshwari, Green Commerce and Research
              Coordinator, Rabindranath Tagore University, Bhopal. Department of
              Science organised an Online GK Quiz Competition at 12:15 p.m.
              Class Activity of BBA-A II Year held on ‘My Model Entrepreneur or
              Business Man’.
            </td>
          </tr>
          <tr>
            <td width="123">12 August</td>
            <td width="479">
              The Gender Champions organised a Poetry Writing Competition on the
              theme ‘Gender Equality- Norm of the New Age Movement’. CSDP
              Committee organised an Inter Class Live Business Quiz Competition
              at 12:30 p.m. Sports Committee organised Inter Departmental Debate
              Competition on the theme ‘The Performance of Indian Players in the
              Tokyo Olympics 2020 could have been Improved’ at 2:00 p.m. on the
              Zoom app. The Music Committee organised an Instrumental
              Competition on the theme ‘Patriotism’. Day 2 of NSS Activity in
              Ralamandal Kakkar at 12:30 p.m. The volunteers conducted a survey
               &amp; collected vaccination details, created awareness regarding
              cleanliness and giving information regarding different colour
              dustbins &amp; conducted a plantation drive rally.
            </td>
          </tr>
          <tr>
            <td width="123">13 August</td>
            <td width="479">
              The Women and Child Protection Committee organised a Guest Talk on
              ‘Awareness about ENT Cancers’ at 1:00 p.m. The resource person was
              Dr. Madhavi Patel, MS, ENT, Gold Medalist ENT and Cancer
              Specialist, Ear and Sinus Surgery.
            </td>
          </tr>
          <tr>
            <td width="123">15 August</td>
            <td width="479">
              Independence Day Celebration Phase 1 at 9:00 a.m. &amp; Phase 2 at
              10:00 a.m.
            </td>
          </tr>
          <tr>
            <td width="123">16 August</td>
            <td width="479">
              Science Club Activity organised by the Department of Science on
              ‘The Branch of Physics- Mechanics’ at 12:15 p.m.
            </td>
          </tr>
          <tr>
            <td width="123">17 August</td>
            <td width="479">
              The Display Board Committee organised a Student-led Initiative
              Workshop on ‘Card Making’ at 12:30 p.m. on the Google Meet App.
              Ms. Anushka Yadav, Student of B.Com CA 3rd year was the resource
              person. The Photography club organised a Photo Wall Exhibition at
              the college on the occasion of World Photography Day. The Language
              Lab Committee organised the session on ‘Some Interesting Facts on
              English and Hindi Language- Part 2’ at 12:30 p.m. Social Activity
              of BBA-A 3rd Semester a section held on ‘Mask Distribution’.
            </td>
          </tr>
          <tr>
            <td width="123">18 August</td>
            <td width="479">
              The CSDP Committee organised a Webinar on ‘Implementation of
              Machine Learning in Medical Science’ at 7:00 p.m. The resource
              person was Dr. Rimjhim Agarwal, Co-Founder and Chief Technology
              Officer, Britain. Department of Humanities Guest Talk on
              Entrepreneurship and Psychology at 10:00 p.m. on the Zoom App. Ms.
              Monica Verma was the resource person at 1:30 p.m. on Zoom app. The
              CSDP Committee organised a session on ‘Career Scope and
              Opportunities in the Field of Accounting Software’ at 2:00 p.m.
              Ms. Rachna Maheshwari, Corporate Trainer, Rachna Maheshwari
              Institutions was the resource person. The Counselling and Tutorial
              Committee organised an Experience Sharing on the topic ‘How to
              Regenerate your Life’ at 12:30 p.m. on the Zoom.
            </td>
          </tr>
          <tr>
            <td width="123">19 August</td>
            <td width="479">
              The Department of Computer Science conducted a Career Counselling
              Session at 2:00 p.m. The resource person was Prof.  Aasai Joshi.
              Catholic Diocese of Indore in Association with Department or
              Computer Science conducted a 6 days Online Workshop on ‘Hands on
              Zoom Cloud Meeting and MS Excel’ from 19/8/2021 to 26/8/2021.
            </td>
          </tr>
          <tr>
            <td width="123">20 August</td>
            <td width="479">
              The Department of Computer Science organised a Patriotic Video
              Competition on the theme ‘Patriotism’ from 13th to 20th August.
            </td>
          </tr>
          <tr>
            <td width="123">21 August</td>
            <td width="479">
              B.Com Plain 3rd Year in Association with the Morning Assembly
              Committee celebrated Raksha Bandhan at 12:30 p.m. on the Google
              Meet App. CSA Committee organised a Sing Song Service at 12:30
              p.m. on the Zoom App. The PPP Committee organised a Session on
              ‘Canva: Create your Customize Raksha Bandhan E-Greeting’ at 2:30
              p.m. Intra-Department FEF of the Department of Management held on
              ‘Kill your Excuses’ in the IQAC Room.
            </td>
          </tr>
          <tr>
            <td width="123">23 August</td>
            <td width="479">
              Department of Humanities organised a ‘Creative Writing Workshop’.
              The Students Welfare Committee conducted the meeting with the
              Class Representatives. Morning Assembly in association with B.Com
              Honours-B 3rd Year organised International Day for the Remembrance
              of Slave Trade and its Abolishing.
            </td>
          </tr>
          <tr>
            <td width="123">24 August</td>
            <td width="479">
              The Website Committee organised an exclusive session on ‘Website
              and Blogging’. Intra Departmental Faculty Enriching Faculty of the
              Department of Humanities was held on the topic ‘Stress
              Management’.
            </td>
          </tr>
          <tr>
            <td width="123">25 August</td>
            <td width="479">
              The Arts Club organised an activity on ‘Picture Composition’. NCC
              Committee conducted an activity on occasion of Plantation Day at
              the University Guest House. Department of Management organised an
              activity titled ‘My Best Advertising Commercial’.
            </td>
          </tr>
          <tr>
            <td width="123">26 August</td>
            <td width="479">
              The Research and Journal Committee organised a Beginners module
              for students from 26th to 28 August. The Research Forum was
              inaugurated by the Chief Guest Dr. KK Jose, Director SMSDA Mahatma
              Gandhi University, Kottayam. The Women and Child Protection
              Committee organised a Story Telling Competition on ‘Women
              Freedom’. The Gender Champions Club organised an Introductory
              Session on the ‘Genders Sensitivity Workshop’. Intra Departmental
              Faculty Enriching Faculty Programme of the Department of Commerce
              was held on the topic ‘Perfecting the Imperfect: Sharing on
              Innovative Class’.
            </td>
          </tr>
          <tr>
            <td width="123">27 August</td>
            <td width="479">
              The Department of Commerce organise a webinar on the topic ‘An
              Entrepreneurs’ Success Saga’. The resource person was Mr. Iqbal
              Hussain, Director, Pakiza Group.
            </td>
          </tr>
          <tr>
            <td width="123">28 August</td>
            <td width="479">
              The Sports Committee celebrated the National Sports Day and
              organised a Guest Lecture on the theme ‘Communication about World
              Records in Various Games’. The resource person was Dr. Kapil Dave,
              Dean, School of Sports Education, ITM University, Gwalior was the
              resource person. The NCC committee on the occasion of Azadi ka
              Amrit Mahotsav organised a Fit India Freedom Run. The Morning
              Assembly Committee along with B.Com FT 2nd year anticipated the
              celebration of Janmashtami.
            </td>
          </tr>
          <tr>
            <td colspan="2" width="601">
              September 2021
            </td>
          </tr>
          <tr>
            <td width="123">2 September</td>
            <td width="479">
              The meeting of class representative was organised by the Students
              Welfare Committee with the Director and the Principal.
            </td>
          </tr>
          <tr>
            <td width="123">3 September</td>
            <td width="479">
              The Library Committee organised an article writing competition on
              ‘Teacher: My Mentor’. The Display Board Committee organised a
              Student-led Initiative Workshop on ‘Drawing and Painting’. The
              Presentation and PowerPoint Committee organised the session title
              ‘Creating a Good PPT Presentation’.
            </td>
          </tr>
          <tr>
            <td width="123">4 September</td>
            <td width="479">
              Publication Committee organised an Article Writing Competition on
              ‘Health is Wealth’. Program Committee and Morning Assembly
              Committee anticipated Teachers Day Celebration.
            </td>
          </tr>
          <tr>
            <td width="123">6 September</td>
            <td width="479">
              NCC Committee organised on ‘My Favourite Freedom Fighter’.
            </td>
          </tr>
          <tr>
            <td width="123">7 September</td>
            <td width="479">
              The Department of Commerce organised an expert talk on ‘Career
              Opportunities and Taxation and GST’. The expert was Mr. Manish
              Mungar, CA and Tax Expert.
            </td>
          </tr>
          <tr>
            <td width="123">8 September</td>
            <td width="479">
              The Language Lab Committee organised a session on ‘World Literacy
              Day’. The Feast of Principal Dr. Sr. Alice Thomas was celebrated
              during the Morning Assembly. Special prayer, prayer song, thought,
              introduction of the day, video greeting, presentation of bouquet
              and card, address by the Director, acknowledgement by the
              Principal were the key highlights. The Programme Committee also
              celebrated the day with a special prayer, welcome address,
              greeting by the student fraternity, presentation of card and
              bouquet, poetry recitation, duet dance, book release, song,
              special video for feast day, address by the Director and the
              Principal and vote of thanks. The phase 3 of the Feast was
              celebrated by the Staff Association. It was followed by lunch.
            </td>
          </tr>
          <tr>
            <td width="123">9 September</td>
            <td width="479">
              The Music Committee organised a Share your Views and Article
              Writing Competition on the theme ‘Remix Culture of Music
              Industries: Pros and Cons’. Intra Departmental Faculty Enriching
              Faculty programme of Department of Humanities was conducted. Intra
              Departmental Faculty Enriching Faculty programme of Department of
              Computer Science was held. The Common Class Test for the second
              and third year students was held from 9<sup>th</sup> to 13
              <sup>th</sup> September.
            </td>
          </tr>
          <tr>
            <td width="123">10 September</td>
            <td width="479">
              World Suicide Prevention Day was observed by B.Com Plain 3rd Year
              and Morning Assembly Committee.
            </td>
          </tr>
          <tr>
            <td width="123">11 September</td>
            <td width="479">
              The Women and Child Protection Committee organised a poster making
              competition on ‘Different Shades of Women’. The Department of
              Computer Science organised a guest talk on ‘Careers in Database
              Management’. Mr Pradeep Upadhyay ,Database Consultant, Crist India
              Pvt. Ltd. was the resource person.
            </td>
          </tr>
          <tr>
            <td width="123">13 September</td>
            <td width="479">
              The Language Lab Committee organised an activity on ‘Slang Words’.
              The Module 2 of Research Methodology Workshop for Beginners was
              conducted from 13<sup>th</sup> to 15<sup>th</sup> September by the
              Research and Journal Committee.
            </td>
          </tr>
          <tr>
            <td width="123">14 September</td>
            <td width="479">
              Photography Committee organised an Online Photography Competition
              on the theme ‘Motivational Quotes’. The Department of Humanities
              organised an Essay Writing Competition on the topic ‘Aatmnirbhar
              Madhya Pradesh’. Guest Talk was organised by the Department of
              Science titled ‘An Overview of Technical Skills and Application of
              Mathematical Software’. Dr. Rachna Naval, Associate Professor,
              Department of Mathematics, SGSITS, Indore was the resource person.
              Intra Departmental Faculty Enriching Faculty Programme of Science
              Department was organised. The Department of Humanities celebrated
              Hindi Divas.
            </td>
          </tr>
          <tr>
            <td width="123">15 September</td>
            <td width="479">
              The Christian Students Association organised a Bible Quiz
              according to the Gospel of Mathew.
            </td>
          </tr>
          <tr>
            <td width="123">16 September</td>
            <td width="479">
              The Department of Humanities organised a session on ‘Common
              Linking Words and its Application’. The Career Skills Development
              and Placement Committee in association with Renaissance Global
              organised a session by Capilano University, Canada. The resource
              person was Mr. Rohan Mehta, Manager, Subcontinent Office, India.
              The Principal Dr. Sr. Alice Thomas was bestowed with Best
              Principal Award and Dr. Goldie Zaki won the Best Innovative
              Faculty Award of All India Association for Christian Higher
              Education.
            </td>
          </tr>
          <tr>
            <td width="123">17 September</td>
            <td width="479">
              Music Committee organised a musical treat on Bollywood Songs. The
              Students Welfare Committee organized a session on ‘Leadership’ for
              all class representatives. The resource person was Mr. Anand
              Balyan, Co-founder, One Hash Solution, Canada.
            </td>
          </tr>
          <tr>
            <td width="123">18 September</td>
            <td width="479">
              The Counselling and Tutorial Committee organized a guest talk on
              ‘Personality Development Challenges of Young India’. The resource
              person was Miss Ruma Maser, Counsellor, Army Public School. St.
              Aloysius College organized an International Faculty Student
              Exchange Program from 18<sup>th</sup> September to 1<sup>st</sup>{" "}
              October. The college achieved the following achievements: 2
              <sup>nd</sup> position in the quiz ‘I Know Me’; 2<sup>nd</sup>{" "}
              position in Debate Competition; Best Resource Person- Commerce Dr.
              Goldie Zaki; Best Resource Person-Management Dr. Stafard Anthony;
              Best Student (Arts)- Ms. Sai Kritika; Best Student Commerce- Mr
              Arnold Benedict &amp; overall 3rd position. The Library Committee
              organized a General Quiz Competition. Intra Departmental FEF of
              Department of Management was held on the topic ‘Words are Mightier
              than Sword’. NCC Committee organized an Essay Writing Competition.
              Department of Computer Science conducted a Quiz Competition on
              ‘Coding’.
            </td>
          </tr>
          <tr>
            <td width="123">22 September</td>
            <td width="479">
              The Department of Humanities organized a debate on ‘Nuclear
              Disarmament is Mandatory to Achieve World Peace’. Science Club
              Activity was conducted by the Department of Science on the topic
              ‘New Trends in Physics’.
            </td>
          </tr>
          <tr>
            <td width="123">23 September</td>
            <td width="479">
              The Women and Child Protection Committee organized a talk on
              ‘Women Empowerment and Opportunity are Global Necessity’. Dr
              Lalita Sharma, Educationalist and Philanthropist was the resource
              person. The Career Skills Development and Placement committee
              organized a session on ‘Changes in Entrepreneurship Post-Covid
              Era’. The resource person was Mr Arjun Chauhan, Technical Sales
              Consultant, Era Consulting Services, Zambia.
            </td>
          </tr>
          <tr>
            <td width="123">24 September</td>
            <td width="479">
              The Gender Champions Club organized a debate competition on ‘Men
              versus Women: Who are better Managers’. The Department of Commerce
              conducted Intra Departmental FEF programme on ‘Mind Management and
              Team Building Activities’. The Department of Humanities conducted
              a session of News Readers. NSS Committee celebrated NSS day during
              the Morning Assembly.
            </td>
          </tr>
          <tr>
            <td width="123">25 September</td>
            <td width="479">
              The Department of Physical Education organized Inter Departmental
              FEF programme on the topic ‘Acupressure: Way to Healthy Living’.
              NSS Committee in association with Nehru Yuva Kendra organized
              Azadi ka Amrit Mahotsav.
            </td>
          </tr>
          <tr>
            <td width="123">27 September</td>
            <td width="479">
              The Department of Humanities Arts Club organized an activity on
              ‘Cartooning on any Famous Indian Literary Character’. Research and
              Journal Committee organized a program on ‘Application of
              Statistical Tools in MS Excel’. The NSS Committee organized a free
              health check-up camp at Ralamandal Kakad.
            </td>
          </tr>
          <tr>
            <td width="123">28 September</td>
            <td width="479">
              The Sports Committee organized Offline Chess Competition on 28th
              and 29th September. The Language Lab Committee organized a session
              ‘Relative Conjunctions’. The Department of Management organized a
              debate on ‘Ease of using Plastic Money and Modern Modes’.
            </td>
          </tr>
          <tr>
            <td width="123">29 September</td>
            <td width="479">
              Subject Choice Selection for the first year students under the New
              Education Policy 2020 was done.
            </td>
          </tr>
          <tr>
            <td width="123">30 September</td>
            <td width="479">
              The Department of Commerce organized a webinar on ‘Learning from
              Changing Facets of Entrepreneurship’. The resource person was Dr.
              Nagresh Parashar, Faculty, Vikram University, Ujjain. The
              evaluation and planning meeting was conducted.
            </td>
          </tr>
          <tr>
            <td colspan="2" width="601">
              October 2021
            </td>
          </tr>
          <tr>
            <td width="123">1 October</td>
            <td width="479">
              The Library Committee organised a Poster Making Competition on
              ‘Indian Politics’. BBA-A 3<sup>rd</sup> Year and Morning Assembly
              Committee celebrated World Animal Welfare Day and World Habitat
              Day.
            </td>
          </tr>
          <tr>
            <td width="123">4 October</td>
            <td width="479">
              The Programme Committee organised the Orientation Programme for
              the 1<sup>st</sup> Year students. It was held in two phases: Phase
              1: Online Common Program  &amp; Phase 2 Classwise programme. The
              schedule for day one was as follows: BCom Honours A, B.Sc and BCA.
              BBA-A and B, B.Com FT. B.Com Tax and Plain. B.Com CA and  BA.
            </td>
          </tr>
          <tr>
            <td width="123">6 October</td>
            <td width="479">
              Regular classes begin for the 1<sup>st</sup> year students.
              Presentation and PowerPoint Committee organised an Inter Class PPT
              Making Competition on the theme ‘The Valour of Indian Air Force’.
              The Students Welfare Committee organised a webinar on ‘Increasing
              Employability’. Mr Subodh B, HR Business Partner, Regional, Best
              Seller India was the resource person. The department of Computer
              Science organised an Inter Departmental Quiz Competition using C
              and C++ Language on the theme ‘Spot an Error’. Intra Department
              FEF of the Department of Humanities organised a discussion on the
              topic ‘A Leader Within Attitude or Attitude Whom Would You Choose’
              in the conference hall.
            </td>
          </tr>
          <tr>
            <td width="123">7 October</td>
            <td width="479">
              The NCC Committee organised an essay writing and video
              presentation on ‘Evil of Single Use of Plastic’. The Publication
              Committee organised a workshop on Reading. The students were
              selected for an internship with Decathlon and Best Sellers India
              at a stipend of rupees 8000 per month.
            </td>
          </tr>
          <tr>
            <td width="123">8 October</td>
            <td width="479">
              The CSDP Committee organised a session on ‘Image Building’. Ms.
              Fatima Abbas was the resource person. The NSS Committee organised
              Free Eye Check-Up Camp in the adopted village Ralamandal Kakad on
              the occasion of World Sight Day. The Sports Committee organised an
              Intra Department Competition. The Department of Science conducted
              a Science Club Activitiy on the topic ‘Video Presentation on New
              Technology’.
            </td>
          </tr>
          <tr>
            <td width="123">9 October</td>
            <td width="479">
              NCC Selection for the 1<sup>st</sup> year students held in the
              college premises. The Department of Commerce organised a workshop
              on ‘Innovative Business Ideas’. The Library Committee organised a
              N-list Doubt Clearing Session. The Department of Computer Science
              organised an Alumni Sharing on ‘Hands on Tour on AWS’. Mr. Ashay
              Jain, AWS Certified Solution, Architect Associate was the resource
              person. BBA 3rd Year in association with the Morning Assembly
               Committee celebrated Indian Postal Day.
            </td>
          </tr>
          <tr>
            <td width="123">11 October</td>
            <td width="479">
              The Women and Child Protection Committee organised an elocution
              competition on the topic ‘Modern Age Women’. The Language Lab
              Committee organised a session on ‘English Modern Slangs and
              Acronyms’. The Research and Journal Committee conducted the module
              3 of RM Workshop for Beginners.
            </td>
          </tr>
          <tr>
            <td width="123">13 October</td>
            <td width="479">
              The Gender Champions Club organised an elocution on the topic
              ‘Role of Women in a Changing Patriarchal Society’. CSA committee
              organised a Bible Quiz competition on the Gospel of Mark.
            </td>
          </tr>
          <tr>
            <td width="123">16 October</td>
            <td width="479">
              The Music Committee organised an Essay Writing Competition on
              ‘Life Sketch of Favourite Singer’. Photography Club organised an
              Online Photography Competition on the theme ‘Celebrating Dusshera
              The Right Way’. Program Committee conducted meeting with the
              student representatives.
            </td>
          </tr>
          <tr>
            <td width="123">18 October</td>
            <td width="479">
              The Music Committee organised a Decade Wise Musical Journey from
              1980 to 1990. The Department of Commerce organised a webinar on
              ‘LinkedIn: a Digital Identity and Possession’. The session was
              taken by Mr Mayank Bathra, Digital Marketing Trainer and
              Consultant. The University Examination Committee organised an
              Online General Awareness Quiz. The Department of Humanities
              organised a Hindi Quiz Competition on Kahoot.
            </td>
          </tr>
          <tr>
            <td width="123">21 October</td>
            <td width="479">
              The NCC Committee cleaned the freedom fighters statue at 1:30 p.m.
              at MTH Compound, near MY Hospital(Rana Bakhtawar Singh). The
              Department of Computer Science organised a poster making
              competition on various theme. Intra department FEF of the
              Department of Management in the conference hall.
            </td>
          </tr>
          <tr>
            <td width="123">22 October</td>
            <td width="479">
              The Library Committee organised a Blog Writing Competition. The
              Counselling and Tutorial Committee organised a session on ‘Build
              Your Own Castle’. The session was taken by Blooni Mehta and
              Kushagra Gehlot.
            </td>
          </tr>
          <tr>
            <td width="123">23 October</td>
            <td width="479">
              Poster Exhibition cum Competition conducted by the Department of
              Science.
            </td>
          </tr>
          <tr>
            <td width="123">25 October</td>
            <td width="479">
              The Women and Child Protection Committee organised a Self Defence
              Workshop. The resource person was Dr Divya Gupta, President, Jwala
              Mahila Samiti, Indore . The Publication Committee organised a
              session on Vocabulary Booster . FEF of the Department of Science
              conducted in the conference hall on the topic ‘How to Balance
              between Personal and Professional Life’.
            </td>
          </tr>
          <tr>
            <td width="123">26 October</td>
            <td width="479">
              The Department of Humanities organised a session on Life Skills.
              The CSDP Committee organised a workshop on Resume Building. Mr
              Pankaj Vyas, Corporate Trainer was the resource person. The
              Department of Commerce organise a Commerce based Poster Making
              Competition for the first year students. The Language Lab
              Committee organised a competition on ‘Best Title on Pictures and
              Video,.
            </td>
          </tr>
          <tr>
            <td width="123">27 October</td>
            <td width="479">
              The Gender Champions Club organised a Guest Talk on ‘Two Side of
              the Same Coin- Understanding Gender Equality’ .Dr Maitri
              Chaturvedi, Peoples College of Paramedical Sciences and Research
              Centre, Bhopal was the resource person. The E-care Committee
              organised a Training Session for the first year students on
              e-care. The Christians Student Association organised a student-led
              Faith Sharing Session.
            </td>
          </tr>
          <tr>
            <td width="123">28 October</td>
            <td width="479">
              The Department of Commerce organised FEF on the theme ‘Mutual Fund
              as a Saving Avenue’. The session was taken by Dr Mahesh Joshi and
              Prof. Vidhi Paryani. NSS Committee organised the Orientation
              Program for the first year volunteers. The Counselling and
              Tutorial Committee organised a Group Counselling Session.
              Dr.Lavina Singh was the resource person for the session.
            </td>
          </tr>
          <tr>
            <td width="123">29 October</td>
            <td width="479">
              The Display Board Committee organised Drawing Competition on the
              theme ‘Showcasing your Talents’. The Sports Committee organised a
              poster making competition on the theme ‘Tokyo Olympics’ .
              Evaluation and Planning Meeting held in the conference hall.
            </td>
          </tr>
          <tr>
            <td width="123">30 October</td>
            <td width="479">
              Anticipatory Celebration of Father&apos;s Birthday: The Phase 1 of
              Father Director’s birthday was held in the Auditorium. It was
              organised by the Morning Assembly Committee. Special prayer,
              prayer song, thought of the day, birthday announcement,
              presentation of card and bouquet, greetings by the student,
              address by the Director and greetings by the Principal were the
              key highlights. The Phase 2 of the celebration was organised by
              the Program Committee. The Freshers Talent Show Day (SPIPS Got
              Talent 2021-22) also celebrated. Prayer, lighting of the lamp,
              greetings from the student fraternity, presentation of card and
              bouquet, performances by the first year classes, release of the
              news letter ‘suswagatam’,  special video, address by the Director
              and Principal, voth of thanks and distribution of sweets were the
              key highlights. Phase 3 of the celebration was organised by the
              Staff Association. The Department of Humanities organised an
              International Guest Talk. The resource person was Dr Sumitra Das
              Gupta, CNTW NHS Foundation Trust, Sunderland, Cumberiya, UK.
            </td>
          </tr>
          <tr>
            <td colspan="2" width="601">
              November 2021
            </td>
          </tr>
          <tr>
            <td width="123">1 November</td>
            <td width="479">
              The Department of Management organised an activity on ‘Companies
              that came back from the Brink’. The Morning Assembly Committee
              celebrated the MP Foundation Day and Anticipated Diwali.
            </td>
          </tr>
          <tr>
            <td width="123">8 November</td>
            <td width="479">
              Workshop on the Use of N-List was held in the computer lab.
              Intra-Department FEF Programme of Department of Commerce was held
              on the topic ‘Sharing on Motivational Quotes’.
            </td>
          </tr>
          <tr>
            <td width="123">9 November</td>
            <td width="479">
              The Department of Computer Science organised Intra Department PPT
              Competition on ‘Scope and Opportunity in Computer Science’. The
              Department of Science organised an online GK Quiz Competition. The
              Department of Humanities organised a guest talk on ‘Role of
              Subconscious Mind in Shaping the Human Being’. The resource person
              was Dr. Pulkitha Anand Shahid Chandrashekhar, Government PG
              College, Jhabua.
            </td>
          </tr>
          <tr>
            <td width="123">10 November</td>
            <td width="479">
              The Career Skills Development and Placement Committee organised
              session on ‘Voice and Accent Training’. The resource person was Mr
              Vishal Sharma, Trinity Global, Indore. The E-Care Committee
              organized a training for students on E-Care from 11 to 16
              November. The CCT Committee organised an online session for 1
              <sup>st</sup> year on Exam Training on E-care Portal. Intra
              department FEF of Humanities was conducted on the topic
              ‘Don&apos;t wait for Inspiration, be the Inspiration’. The
              Students Welfare Committee organised a meeting of class
              representatives with the Director and the Principal. The Common
              Class Test 2 of BBA and BCA 3rd and 5th semester begin and
              continue till 13<sup>th.</sup>
            </td>
          </tr>
          <tr>
            <td width="123">12 November</td>
            <td width="479">
              The Music Committee conducted a music class learning ‘Sargam’ with
              Dr. Suvarna Lapalikar. The Department of Management conducted
              Intra Department FEF program on ‘Self Health Management’. The
              Publications Committee conducted a session on ‘Forms of Writing’.
              The Women and Child Protection Committee organized a  guest talk
              on ‘Men&apos;s Contribution in Development of Women’. Mrs Ashwini
              Suryavanshi, Assistant Professor, Government Girls PG College,
              Satna was the resource person. The Gender Champions Club organised
              a talk on ‘Need for Promotion of Gender Equality in Indian
              Movies’. The session was conducted by alumni Ms. Tanya Singh. The
              NCC Committee conducted a session on ‘Introduction to NCC and its
              Advantage’.
            </td>
          </tr>
          <tr>
            <td width="123">13 November</td>
            <td width="479">
              The Department of Commerce organised Commerce Quiz Competition.
              The Sports Committee organised Inter Department Football
              Competition for boys.
            </td>
          </tr>
          <tr>
            <td width="123">16 November</td>
            <td width="479">
              The Department of Commerce organise a poster exhibition. The
              Christian Student Association organised a Bible Quiz on the Gospel
              of Luke. All the first year students were allotted houses by the
              programme committee. The Music Committee organised an Article
              Writing Competition on ‘Life Sketch of Your Favourite Singer’.
            </td>
          </tr>
          <tr>
            <td width="123">17 November</td>
            <td width="479">
              The Department of Commerce oragnised an expert talk on ‘Career
              Opportunities in Export and Import’. That session was conducted by
              alumni Miss Sakshi Gupta. The Presentation and PowerPoint
              Committee organised a session on ‘Essentials of a Good PPT
              Presentation’. Poetry Composition and Recitation was conducted as
              a part of Art Club Activity. Department of Science conducted the
              Intra Departmental FEF. The Industrial Visit of B.Com Plain and CA
              first year student was held at Amul Milk Packaging Unit. The
              Display Board Committee organised a poster making competition on
              the theme ‘Krist Jayanti’.
            </td>
          </tr>
          <tr>
            <td width="123">18 November</td>
            <td width="479">
              The Counselling and Tutorial Committee organised a session on
              ‘Brain and Brain Psychology’ on virtual platform. The session was
              taken by Dr Leena Thomas, Medical Officer, Kachhawa Christian
              Hospital, Uttar Pradesh. The Department of Computer Science
              organised a session on ‘Coding and Decoding’. The University Exam
              Committee organised an Online Reasoning Quiz on Google Form. The
              Language Lab Committee conducted an event on ‘Rainy Season Poetry
              Recitation’.
            </td>
          </tr>
          <tr>
            <td width="123">20 November</td>
            <td width="479">
              The Parent Professor Association organised election for Executive
              Committee Members. The House Election of the Office Bearers was
              organised by the Program Committee. The Department of Computer
              Science organised a guest lecture on ‘Basic of C: Connecting Real
              Life and Imagination’. Mr Bhushan Silora was the resource person.
              The Inter Departmental FEF program of Department of Computer
              Science was organised on the topic ‘Alien Technology’. The session
              was taken by Prof.  A Manoj. The Library Committee organised a
              General Quiz Competition.
            </td>
          </tr>
          <tr>
            <td width="123">23 November</td>
            <td width="479">
              The Department of Humanities organised a Short Documentary Video
              Making Competition on ‘The Social Dilemma’. The Photography Club
              inaugurated by the Presentation and PowerPoint Committee. The NCC
              Committee conducted a Nukkad Natak on Green India ,Clean India in
              the canteen area.
            </td>
          </tr>
          <tr>
            <td width="123">24 November</td>
            <td width="479">
              The Research and Journal Committee organised a three days Student
              Development Programme on ‘Linguistics Analysis for Lexical
              Resource Development’. The Careers Skills Development and
              Placement Committee organise a session on ‘Interview Skill’.
              Captain Jason Thomas, Founder and Chief Mentor at Rainy&apos;s
              genius temple was a resource person.
            </td>
          </tr>
          <tr>
            <td width="123">25 November</td>
            <td width="479">
              The Department of Humanities conducted students Mock Parliament on
              the topic ‘Whose Government This Time’. The Sports Committee
              organised Inter Departmental Competition for both boys and girls.
              The Language Lab Committee conducted a Nukkad Natak on ‘Hindi
              Bimar Hai’. The Department of Management organised a National
              Webinar.
            </td>
          </tr>
          <tr>
            <td width="123">26 November</td>
            <td width="479">
              The Sports Committee organised an Inter House Cricket Competition
              for boys and girls. The Christian Students Association organised a
              guest talk on ‘Challenges of Changes’. Mr. Rami Chaku, Counsellor
              and Psychologist, Thom Institute of Counselling and Career
              Guidance, Ujjain was the resource person. The Morning Assembly
              Committee in association with BCA 2<sup>nd</sup>  year observed
              the Constitution Day of India. The Gender Champions Club organised
              a Poster Making Competition on ‘Right to Education for Women’.
            </td>
          </tr>
          <tr>
            <td width="123">27 November</td>
            <td width="479">
              The Sports Committee organised Inter House Chess Competition for
              boys and girls. The Counselling and Tutorial Committee organised
              an Inter Department Competition on ‘Who is the Best Companion in a
              Teenagers Life: Family of Friend’. The Students Welfare Committee
              organized a Team Building for the Class Representatives. The
              Publication Committee organised a talk on ‘Essentials of Effective
              Writing’ Dr. Pulkitha Anand Shahid Chandrashekhar, Government PG
              College, Jhabua was a resource person. NSS Committee organised an
              awareness program in government school on the topic ‘Women Health
              and Hygiene’.
            </td>
          </tr>
          <tr>
            <td colspan="2" width="601">
              December 2021
            </td>
          </tr>
          <tr>
            <td width="123">1 December</td>
            <td width="479">
              The Library Committee organised the special session on ‘Editorial
              and Communication’. The Skill Task Force Group, DAVV and the CSDP
              Committee organised a webinar on Infosys BPM Industries and
              Opportunities for Non IT Professionals. The NSS Committee
              celebrated World AIDS Day during the Morning Assembly and created
              awareness through Nukkad Natak in the neighbourhood area.
            </td>
          </tr>
          <tr>
            <td width="123">2 December</td>
            <td width="479">
              The Programme Committee and NCC Committee organised the
              Investiture Ceremony and Piping Ceremony during the Morning
              Assembly. The Publications Committee organised an Article and
              Poetry Writing Competition in the library. The Industrial Visit
              for BCA and B.Sc 1<sup>st</sup> Year was held at HD Wires Ltd. The
              Department of Computer Science on Tips and Tricks for Group
              Discussion for BSC students. The Preliminary Round of Jaipuria
              College Quiz was held.
            </td>
          </tr>
          <tr>
            <td width="123">3 December</td>
            <td width="479">
              The Intra Department FEF programme of Department of Humanities was
              conducted. The Industry Visit of B.Com Tax First Year was held at
              HD Wires. The Gender Champions Club organised on ‘Issues in Modern
              Feminism’. The Department of Computer Science organised a Poster
              Making Competition cum Exhibition.
            </td>
          </tr>
          <tr>
            <td width="123">6 December</td>
            <td width="479">
              The Common Class Test for Yearly classes begin and the Pre
              University Examination for the semester classes also begin. The
              Department of Humanities organised the Poster Making Competition
              on ‘Different Forms in Visual Arts’.
            </td>
          </tr>
          <tr>
            <td width="123">7 December</td>
            <td width="479">
              The Intra Department FEF of Department of Commerce was held on
              ‘Experience Sharing on Joy of Giving’.
            </td>
          </tr>
          <tr>
            <td width="123">8 December</td>
            <td width="479">
              The Language Lab Committee organised a session on the topic ‘Make
              Your Daily Conversations Colourful’. 15 days student and teacher
              exchange program was organised by the Bhopal School of Social
              Sciences, Bhopal and St. Thomas College, Bhilai from 8 to 23
              December. 15 students from the Department of Computer Science
              participated in it. The following students brought laurels to the
              college in GK quiz for second position logical coding, second
              position poster mania and second position overall position.
            </td>
          </tr>
          <tr>
            <td width="123">9 December</td>
            <td width="479">
              Science Club Activity was conducted by the Department of Science
              on the topic ‘Discussion and Explanation on Key Topics of
              Physics’.
            </td>
          </tr>
          <tr>
            <td width="123">10 December</td>
            <td width="479">
              The Department of Humanities organised a debate on the topic ‘Love
              Marriage versus Arrange Marriage’ in the seminar hall.
            </td>
          </tr>
          <tr>
            <td width="123">11 December</td>
            <td width="479">
              The Department of Humanities is organised a guest talk on
              ‘Importance of Soft Skills in Career Development’. The Department
              of Commerce conducted the final round of Commerce Quiz in the
              auditorium.
            </td>
          </tr>
          <tr>
            <td width="123">13 December</td>
            <td width="479">
              The students of BCA 1<sup>st</sup> year were taken for an
              Industrial Visit to Police Radio Training School. Inter House Arts
              and Literary Competition begin in the auditorium and canteen area.
              New Session begins for BBA and BCA 4<sup>th</sup> and 6
              <sup>th</sup> semester.
            </td>
          </tr>
          <tr>
            <td width="123">14 December</td>
            <td width="479">
              Intra Department FEF Programme of Department of Management was
              conducted. The Industrial Visit of B. Com Honours-A 1st year
              students was held at Rani Press Private Limited.
            </td>
          </tr>
          <tr>
            <td width="123">15 December</td>
            <td width="479">
              The Career Skills Development and Placement Committee organise a
              session on Overcoming Stage Fear.
            </td>
          </tr>
          <tr>
            <td width="123">16 December</td>
            <td width="479">
              The Department of Management organised a guest talk on ‘Self
              Management Skills’. CA Pankaj Kothari was a resource person. The
              Women and Child Protection Committee organised a Poetry Recitation
              Competition on the topic ‘Gift of God: a Girl Child’. The
              Department of Humanities organised a ‘Idioms based Competition’.
              The University Exam Committee organised an Online General
              Awareness Quiz. The NCC Committee in collaboration with Morning
              Assembly Committee celebrated Vijaya Divas. The students of B.Com
              FT 1<sup>st</sup> year visited Amul as a part of their industrial
              visit. The Music Committee organised a session on ‘sur, tal and
              lai’.
            </td>
          </tr>
          <tr>
            <td width="123">17 December</td>
            <td width="479">
              The Department of Physical Education organised a  Divisional Level
              Inter College Yoga Men and Women Tournament. The Language Lab
              organised the Interview Session. The Department of Commerce
              organised a talk on ‘Start-ups for a Prosperous India’. Dr.
              Punikit Dwivedi, Social Advocate for Startups and Director, Modern
              Groups of Institution was the resource person. The Department of
              Science conducted the session on the topic ‘Tips for Public
              Speaking’.
            </td>
          </tr>
          <tr>
            <td width="123">18 December</td>
            <td width="479">
              The PowerPoint and Presentation Committee organised an Inter Class
              PPT Making Competition on 12 Months of Gratitude. The Christian
              Students Association conducted a Christmas Carol Singing Program
              in the seminar hall. The Counselling and Tutorial Committee
              organised an Inter Department Psychology Quiz Competition in the
              auditorium.
            </td>
          </tr>
          <tr>
            <td width="123">20 December</td>
            <td width="479">
              The Department of Humanities organised a Quiz Competition on
              General Knowledge. The Students Welfare Committee organized a task
              based activity titled ‘The Skills of CR’s’. The Department of
              Computer Science conducted an Intra Department FEF programme on
              the topic ‘Time Management’. The Department of Humanities
              organised Inter Departmental FEF programme on the topic
              ‘Introspection’. The session was taken by Prof. Rahat Ahmed
            </td>
          </tr>
          <tr>
            <td width="123">21 December</td>
            <td width="479">
              Inter House Cultural Competition was organised in the auditorium.
              solo dance, solo singing, Indian and western, solo instrumental
              music and group dance Indo Western was held.
            </td>
          </tr>
          <tr>
            <td width="123">22 December</td>
            <td width="479">
              Inter House Cultural Competition begin in the auditorium solo
              dance Indo Western, solo singing Indian group, singing Indian
              group dance Indian.
            </td>
          </tr>
          <tr>
            <td width="123">23 December</td>
            <td width="479">
              The Display Board Committee organised a Christmas themed Poster
              Exhibition on the ground floor lobby area. The Christmas
              Celebration was held during the Morning Assembly. The highlights
              of the program were : special prayer, song, thought, speech, Carol
              singing and address by the Director and Principal. The Phase 2 of
              the Christmas Celebration was held in the auditorium. It began
              with the prayer, Christmas greeting by faculty, nativity play  and
              distribution of gifts. The chairman most Reverend Bishop Chacko
              Thottumarikal SVD was the chief guest on the occasion. The Phase 3
              of the celebration was held in the canteen area with faculty
              talent show, Carol singing, card exchange and games being the key
              highlights.
            </td>
          </tr>
          <tr>
            <td width="123">28 December</td>
            <td width="479">
              22 students of the college participated in the Devi Ahilya
              Vishwavidyalay Youth Festival on 28, 29 and 30 December.
            </td>
          </tr>
          <tr>
            <td colspan="2" width="601">
              January 2022
            </td>
          </tr>
          <tr>
            <td width="123">5 January</td>
            <td width="479">
              The Department of Computer Science conducted their Intra
              Ddepartment FEF Program on ‘6<sup>th</sup> Generation Technology’.
            </td>
          </tr>
          <tr>
            <td width="123">6 January</td>
            <td width="479">
              The NSS Committee celebrated Youth Week. The schedule included
              traffic management, trekking, session on omicron, AIDS and TB.
            </td>
          </tr>
          <tr>
            <td width="123">7 January</td>
            <td width="479">
              The Pre University Exam Committee conducted a session on ‘Exam
              Tips’. The Intra Department FEF of Department of Commerce was held
              on the topic ‘New Year New Beginning’. The students from
              Department of Computer Science visited Rashtriya Drishtihin Kalyan
              Sang, Vijayanagar and donated five blankets and 24 bowls of
              sweets.
            </td>
          </tr>
          <tr>
            <td width="123">8 January</td>
            <td width="479">
              The Library Committee organised a One-Word Substitution Quiz in
              the library. The Department of Management organised a class-wise
              presentation on ‘Inspirational Personalities of Business World’.
              The Department of Computer Science conducted the workshop on
              ‘Python Programming Methodology’ for BCA and B.Sc students.
            </td>
          </tr>
          <tr>
            <td width="123">9 January</td>
            <td width="479">
              The NSS team with the volunteers trekked at Devguradiya as a part
              of their youth week.
            </td>
          </tr>
          <tr>
            <td width="123">10 January</td>
            <td width="479">
              The Language Lab Committee organised a Quick Workshop on
              ‘Advertisement and Short Stories’. The Sports Committee organised
              an Inter House Table Tennis Competition on 10<sup>th</sup> and 11
              <sup>th</sup> January in the auditorium. The Department of Science
              conducted a Science Club activity on ‘Science Riddles’.
            </td>
          </tr>
          <tr>
            <td width="123">11 January</td>
            <td width="479">
              The Common Class Test Committee organised a Poster Making
              Competition on ‘managing exams stress’. The Department of
              Humanities organised an Inter Department Competition on ‘Behaviour
              in Modern Scenario Fake or Real’.
            </td>
          </tr>
          <tr>
            <td width="123">12 January</td>
            <td width="479">
              The Department of Commerce organised a quiz on  ‘Crypto Currency’.
              The Publication Committee organise a session on ‘Discussion on
              Masterpieces’. The Intra Department FEF programme of the
              Department of Management on the topic ‘Importance of Psychological
              Counselling in Educational Institutions’ was held. The Department
              of Humanities conducted a Art Club activity titled ‘Where there is
              Will, there is a Way’. The NSS Committee celebrated Youth Day
              during the Morning Assembly with the special program.
            </td>
          </tr>
          <tr>
            <td width="123">13 January</td>
            <td width="479">
              The Music Committee organised a session on ‘Sur, Lai and Tal’ with
              Dr. Suvarna Lapalikar.
            </td>
          </tr>
          <tr>
            <td width="123">15 January</td>
            <td width="479">
              The NCC Committee celebrated the Armed Forces Veterans Day in the
              Morning Assembly. The Counselling and Tutorial Committee organised
              a poster making competition on ‘Impact of Meditation on Mental
              Health’.
            </td>
          </tr>
          <tr>
            <td width="123">17 January</td>
            <td width="479">
              The Department of Management organised a talks on Grooming. The
              Display Board Committee organised a Digital Collage Making
              Competition on the theme ‘Alvida: Farewell to batch 2019-22’.
            </td>
          </tr>
          <tr>
            <td width="123">18 January</td>
            <td width="479">
              The Department of Commerce organised an Essay Writing Competition
              on the topic ‘Current Economic Scenarios’ for all the B. Com
              students. The Department of Humanities organised an Open House.
              The Christian Student Association organised a guest talk on ‘How
              to Overcome Screen Addiction’.
            </td>
          </tr>
          <tr>
            <td width="123">19 January</td>
            <td width="479">
              The Gender Champions Club organised an In-House Rally on ‘Gender
              Awareness and Equality’. The Presentation and PowerPoint Committee
              organised a Hands-on Photography Workshop.
            </td>
          </tr>
          <tr>
            <td width="123">20 January</td>
            <td width="479">
              The Sports Committee organised an Inter House Football and Carrom
              Competition for both boys and girls from 20<sup>th</sup> to 23
              <sup>rd</sup> January. The Department of Humanities conducted
              Student Mock Court in the Parliament. The Department of Science
              conducted Intra Department FEF programme on the topic ‘New Year,
              New Opportunities’.
            </td>
          </tr>
          <tr>
            <td width="123">21 January</td>
            <td width="479">
              The Students Welfare Committee organised a meeting of class
              representatives with the Director and Principal.
            </td>
          </tr>
          <tr>
            <td width="123">22 January</td>
            <td width="479">
              The Department of Science organised a National Webinar on the
              topic ‘Biometric System for Food Quality’. Dr. PC Panchariya,
              Director, CSIR, Central Electronics Engineering Research
              Institute, Ministry of Science and Technology, Government of India
              was the resource person.
            </td>
          </tr>
          <tr>
            <td width="123">24 January</td>
            <td width="479">
              The Department of Humanities organised a General Knowledge Quiz.
              The Women and Child Protection Committee in association with
              Morning Assembly Committee celebrated the National Girl Child Day
              through a special program.
            </td>
          </tr>
          <tr>
            <td width="123">25 January</td>
            <td width="479">
              The Department of Computer Science organised a 1-Minute Solo Dance
              Video Competition on ‘Patriotic Theme’. The Patrons Day of the
              college was celebrated in the auditorium. The Chairman Most Rev.
              Bishop Chacko Thotuumarikal SVD was the chief guest. The key
              highlights were: special prayer, song, lighting of lamp ,prayer
              dance, life journey of our patron St. Paul, felicitation of
              Principal and Dr. Goldie Zaki and special dances. The college
              successfully register itself for IIQA at the NAAC Portal.
            </td>
          </tr>
          <tr>
            <td width="123">26 January</td>
            <td width="479">
              The 73<sup>rd</sup> Republic Day celebration was done
              enthusiastically in the college. Prayer for the nation, flag
              hoisting, parade by the NCC cadet and address by the chief guest,
              felicitation of the NSS volunteer and address by the Director were
              the key highlights of the program. The Department of Computer
              Science organised an Flyer Making Competition on the theme
              ‘Republic Day’.
            </td>
          </tr>
          <tr>
            <td width="123">27 January</td>
            <td width="479">
              The Research and Journal Committee in association with Career
              Skills Development and Placement Committee organise a Student
              Development Program from 27<sup>th</sup> to 29<sup>th</sup>{" "}
              January on ‘Skills to Build Confidence’. The Department of
              Management organised the Inter Department FEF on the topic
              ‘Teamwork and Motivation’.
            </td>
          </tr>
          <tr>
            <td width="123">29 January</td>
            <td width="479">
              The E-care Committee organised a Quiz Competition via Google form.
            </td>
          </tr>
          <tr>
            <td width="123">31 January</td>
            <td width="479">
              The Evaluation and Planning Meeting for the month of January was
              held.
            </td>
          </tr>
          <tr>
            <td colspan="2" width="601">
              February 2022
            </td>
          </tr>
          <tr>
            <td width="123">4 February</td>
            <td width="479">
              World Cancer Day was observed during the Morning Assembly through
              a special program conducted by B.Com Honours 2nd year -B section.
              The Department of Management organised an Alumni session on
              ‘Importance of Internship for Management Students’.
            </td>
          </tr>
          <tr>
            <td width="123">5 February</td>
            <td width="479">
              The Intra Department FEF programme of Department of Humanities was
              conducted on ‘Hard Work is Key to Success’. The Photography and
              PowerPoint Committee organised a photography competition on ‘Bond
              of Friendship’.
            </td>
          </tr>
          <tr>
            <td width="123">7 February</td>
            <td width="479">
              The NSS Committee organised an NSS camp from 7<sup>th</sup>{" "}
              February to 12<sup>th</sup> February at Bicholi Hapsi Village.
            </td>
          </tr>
          <tr>
            <td width="123">8 February</td>
            <td width="479">
              The Photography and PowerPoint Committee organised an Online
              Photography Competition on the theme ‘Bond of Friendship’. The
              Intra Department FEF programme of Department of Commerce was held
              on the topic ‘Learning from Personal Life for Professional
              Growth’. The Display Board Committee organised an Art Exhibition.
              The Department of Computer Science conducted the Intra Department
              FEF programme on the topic ‘Ways to Enhance Positive Thinking’.
            </td>
          </tr>
          <tr>
            <td width="123">9 February</td>
            <td width="479">
              The Career Skills Development and Placement Committee organise a
              session on ‘Self Development’.
            </td>
          </tr>
          <tr>
            <td width="123">10 February</td>
            <td width="479">
              The Gender Champions Club organised a guest lecture on ‘Effects of
              Gender Discrimination on Female Health’. Ms. Lina Joseph Medical
              and Psychiatry Guidance and Counsellor was the resource person.
              The Department of Humanities conducted a quiz competition on
              ‘UPSC’.
            </td>
          </tr>
          <tr>
            <td width="123">11 February</td>
            <td width="479">
              The Music Committee organised a musical treat ‘Bollywood Songs of
              1990 and 2000’. The Library Committee organised a session on ‘E-
              Library and Resources’.
            </td>
          </tr>
          <tr>
            <td width="123">12 February</td>
            <td width="479">
              The Department of Commerce organise a session on ‘Step-Up for
              Start-up’. The Department of Computer Science organised a session
              on ‘Academic Writing and Original Thinking’. Mrs. Karishma Gupta
              Territory Manager, Terminate in South Asia group was the resource
              person.
            </td>
          </tr>
          <tr>
            <td width="123">15 February</td>
            <td width="479">
              The Department of Science organised a session on ‘Communication
              Strategies for our Virtual Age’. The Department of Humanities
              conducted an activity ‘Act it Out’. The Sports Committee organised
              an Inter Class Football competition from 15 to 19 February.
            </td>
          </tr>
          <tr>
            <td width="123">17 February</td>
            <td width="479">
              The Department of Humanities organised a Spell Bee Competition.
            </td>
          </tr>
          <tr>
            <td width="123">18 February</td>
            <td width="479">
              The Women and Child Protection Committee organised a session on
              ‘Missing Women’. The Department of Commerce organised a session on
              ‘Union Budget’. The resource person was Mrs. CA Ritu Goyal. The
              Department of Computer Science organised a Workshop on Programming
              Skills and Logical Concepts under the banner of IT Club the
              workshop was titled ‘TCORTE 22&apos;. The Department of Management
              conducted Management Fest. The 1<sup>st</sup> Phase included a
              Business Plan Competition. It was followed by an Ad-Mad Show and
              Fun Fair.
            </td>
          </tr>
          <tr>
            <td width="123">19 February</td>
            <td width="479">
              The Counselling and Tutorial Committee organised a Guest Talk on
              ‘Importance of Self Focus to Attain the Goal’. Mr. Ronnie Chacko,
              Clinical Psychologist, Faculty BCTS, Kerela was the resource
              person.
            </td>
          </tr>
          <tr>
            <td width="123">21 February</td>
            <td width="479">
              The Department of Humanities organised a quiz on ‘Omicron’. The
              University Exam Committee organised an Online Reasoning Quiz on
              the Google Form. The E-Care Committee conducted a session on ‘PC
              Trouble Shooting and Tips&apos; for the faculty members of
              Department of Humanities. The Students Welfare Committee organised
              a quiz competition on ‘Team Building and Leadership’.
            </td>
          </tr>
          <tr>
            <td width="123">22 February</td>
            <td width="479">
              The Department of Humanities organised a group discussion on ‘How
              to Bring Quality in Education’. The Program Committee organised
              Inter Department Skit Competition titled ‘Waves 2022’. The Ex-
              students Mr. Tanuj Dalal, Mr. Jatin Gera and Mr. Mayank Rajliwal
              were the judges. The Department of Commerce was the winner
              followed by the Department of Humanities and Department of
              Management.
            </td>
          </tr>
          <tr>
            <td width="123">23 February</td>
            <td width="479">
              Science Club Activity was conducted by the Department of Science
              on ‘Fun with Reasoning’ A session on ‘Time Management’ was
              organised by the CSDP Committee.
            </td>
          </tr>
          <tr>
            <td width="123">24 February</td>
            <td width="479">
              The Inter Department Faculty Enriching Faculty Programme on the
              topic ‘Vedic Maths’. The session was taken by Prof. Shejal Gupta.
              The NSS Committee conducted C-Certificate Exam.
            </td>
          </tr>
          <tr>
            <td width="123">25 February</td>
            <td width="479">
              Farewell Programme for the Batch 2019-22 was held in the
              auditorium. The program was organised by the faculty members and
              taken care by the Program Committee.
            </td>
          </tr>
          <tr>
            <td width="123">26 February</td>
            <td width="479">
              The Intra Department FEF programme for the Department of
              Management was conducted. The Careers Skills Development and
              Placement Committee organised a placement drive for the final year
              and pass out students in the company Dual Fox Private Limited. The
              Department of Commerce organised Fiesta 2022. It was organised in
              two phases: the phase 1 comprised of Business Plan Competition,
              followed by the Fun Fair in the car parking area. The Display
              Board Committee organised a special art exhibition titled ‘Thank
              You to our Artist’.
            </td>
          </tr>
          <tr>
            <td width="123">28 February</td>
            <td width="479">
              The National Science Day was celebrated during the Morning
              Assembly by the Department of Science and Morning Assembly
              Committee.
            </td>
          </tr>
          <tr>
            <td colspan="2" width="601">
              March 2022
            </td>
          </tr>
          <tr>
            <td width="123">1 March</td>
            <td width="479">
              Pre University Exam of B.Com, B.Sc and BA 2<sup>nd</sup> and 3
              <sup>rd</sup> begins and continued till 12<sup>th</sup> of March.
              Common Class Test of B.Com 1st year and BBA and 2<sup>nd</sup> and
              3<sup>rd</sup> Year begin and continued till 4<sup>th</sup> March.
            </td>
          </tr>
          <tr>
            <td width="123">5 March</td>
            <td width="479">
              The college in association with MSME Development Institute, Indore
              organised a National Level Awareness Program on
              ‘Entrepreneurship’. The Department of Computer Science conducted
              Intra- Department FEF program on ‘Cashless Economy and
              Cryptocurrency’.
            </td>
          </tr>
          <tr>
            <td width="123">7 March</td>
            <td width="479">
              The Department of Commerce conducted Intra- Department FEF program
              on ‘The Power of Now’. The Department of Humanities conducted
              Intra- Department FEF program on ‘Improve Communication Skills’.
            </td>
          </tr>
          <tr>
            <td width="123">8 March</td>
            <td width="479">
              The International Women&apos;s Day was celebrated during the
              morning assembly through a special program organised by the
              Morning Assembly Committee.
            </td>
          </tr>
          <tr>
            <td width="123">10 March</td>
            <td width="479">
              The Library Committee organised a Book Review Competition on the
              novel ‘A Train to Pakistan by Khushwant Singh or Waiting for Godot
              by Samuel Beckett’.
            </td>
          </tr>
          <tr>
            <td width="123">11 March</td>
            <td width="479">
              The Careers Skills Development and Placement Committee organised a
              session on ‘Effective Presentation Skills and Queries Handling’.
            </td>
          </tr>
          <tr>
            <td width="123">12 March</td>
            <td width="479">
              The Publications Committee organised a guest talk on ‘Role of
              Great Classics in Personality Development’. Mrs. Punam Sharma,
              Principal, Hema Higher Secondary School, Bhopal was the resource
              person.
            </td>
          </tr>
          <tr>
            <td width="123">13 March</td>
            <td width="479">
              The NCC Committee conducted a trekking activity to Ralamandal.
            </td>
          </tr>
          <tr>
            <td width="123">14 March</td>
            <td width="479">
              The Department of Commerce organised a session on ‘Success Stories
              of Start-up’. The Department of Humanities organised a group
              discussion on ‘Changing Forms of Feeling’. The Department of
              Science organise an Online GK Quiz Competition. The Sports
              Committee organised a Table Tennis Competition.
            </td>
          </tr>
          <tr>
            <td width="123">15 March</td>
            <td width="479">
              The NSS Committee organise a Cyclothon on the theme ‘Save Fuel,
              Save Environment’.
            </td>
          </tr>
          <tr>
            <td width="123">16 March</td>
            <td width="479">
              The Sports Committee organise a Basketball Tournament from 16
              <sup>th</sup> to 19<sup>th</sup> March on the basketball court.
              The Christian Students Association organised a session. Placement
              Opportunity at Central India authorised distributor of Arma Cell
              India Private Limited was conducted.
            </td>
          </tr>
          <tr>
            <td width="123">19 March</td>
            <td width="479">
              The Photography and PowerPoint Committee organised a Poster Making
              Competition on the occasion of Holi. The theme of the competition
              was ‘Holi- The Festival of Colours’. The Language Lab Committee
              organised  an Composition Writing Competition on the theme
              ‘Colours of Holi’. The Display Board Committee organised an
              Inter-Department Drawing Competition on the Occasion of Birthday
              of the Principal, Dr. Sr. Alice Thomas. The Counselling and
              Tutorial Committee organised a guest talk on ‘Healing Addiction
              with Yoga’. Dr. Kapil Dave, Dean, School of Sports, ITM
              University, Gwalior was the resource person. The Department of
              Computer Science organised a session on the theme ‘Tips and Tricks
              of Group Discussion’.
            </td>
          </tr>
          <tr>
            <td width="123">21 March</td>
            <td width="479">
              The Gender Champions Club organised a special talk on ‘Gender
              Sensitivity Workshop’. The Department of Commerce organised a
              guest lecture on ‘Industry Readiness’. Ms.  Devakshi Kalani,
              President of International Limited was the resource person. The
              Department of Humanities organised a composition writing
              competition on the themes ‘Mother Nature’.
            </td>
          </tr>
          <tr>
            <td width="123">23 March</td>
            <td width="479">
              The birthday of Principal Dr. Sr. Alice Thomas was celebrated in
              two phases:  the phase 1 was organised by the Morning Assembly
              Committee and as a part of the 2<sup>nd</sup> Phase, all the
              faculty and staff members were taken for a day picnic to Grand
              Machal.
            </td>
          </tr>
          <tr>
            <td width="123">24 March</td>
            <td width="479">
              The Science Cub activity was conducted by Department of Science on
              ‘Video Presentation on New Technology’.
            </td>
          </tr>
          <tr>
            <td width="123">25 March</td>
            <td width="479">
              The Department of Humanities organised a session on ‘Adult
              Crisis’. The IT Club of Department of Computer Science organised a
              Quiz Competition to check the Programming Skills and Logical
              Concepts of the students. The Students Welfare Committee organised
              a session on ‘Leadership, Social Interaction versus Traditional
              Values’.
            </td>
          </tr>
          <tr>
            <td width="123">26 March</td>
            <td width="479">
              The Department of Management organised a Creative Management
              Activities. The NCC Committee organised a session on ‘Role of
              Youth in Progress of Country’. The session was taken by Alumni
              Cadet.
            </td>
          </tr>
          <tr>
            <td width="123">28 March</td>
            <td width="479">
              The Electoral Commission organised a competition on ‘My Vote is My
              Future: Power of One Vote’. The activities were quiz contest,
              video making, poster designing, song, slogan contest. The Inter
              Department FEF program of Department of Management and Department
              of Science was conducted.
            </td>
          </tr>
          <tr>
            <td width="123">29 March</td>
            <td width="479">
              The Self Study Report of NAAC was submitted by the Internal
              Quality Assurance Cell of the college.
            </td>
          </tr>
          <tr>
            <td width="123">30 March</td>
            <td width="479">
              The Internal Quality Assurance Cell organised a guest lecture on
              ‘Learning Practical Implications of Export-Import Management’. Mr
              Vikas Oberoi, PPA President and Custom Officer was the resource
              person.
            </td>
          </tr>
          <tr>
            <td colspan="2" width="601">
              April 2022
            </td>
          </tr>
          <tr>
            <td width="123">1 April</td>
            <td width="479">
              The Pre-University Exam commences for all the first year students.
            </td>
          </tr>
          <tr>
            <td width="123">4 April</td>
            <td width="479">
              The Intra Department FEF program of Department of Commerce was
              held on the topic ‘Discussion on Quotes: Words have Power to
              Change Course of Life’.
            </td>
          </tr>
          <tr>
            <td width="123">7 April</td>
            <td width="479">
              The Intra Department FEF programme of Department of Humanities was
              held on the topic ‘How to Maintain a Relation between a Teacher
              and Student’.
            </td>
          </tr>
          <tr>
            <td width="123">8 April</td>
            <td width="479">
              The NCC Committee conducted a poster making competition.
            </td>
          </tr>
          <tr>
            <td width="123">13 April</td>
            <td width="479">
              The Morning Assembly Committee anticipated Ambedkar Jayanti and
              Good Friday through a special programme.
            </td>
          </tr>
          <tr>
            <td width="123">15 April</td>
            <td width="479">
              St. Paul Institute of Professional Studies in association with St.
              Francis Hospital and Research Centre Indore organise a Blood
              Donation Camp at St. Francis Hospital.
            </td>
          </tr>
          <tr>
            <td width="123">16 April</td>
            <td width="479">
              Silver Jubilee Celebration of Director Rev. Fr. Simon Raj was done
              along with Anticipation of Easter. Special program was conducted
              in the Luminous Hall by the Staff Association and Morning Assembly
              Committee. The key highlights of the program were: special prayer,
              special prayer song, thought of the day, sharing on Easter, video
              presentation, silver jubilee greetings to the Director,
              presentation of gift to the Director and presentation of bouquet
              to the Director. The Inter Department FEF program was organised by
              the Department of Commerce on the topic ‘Power of Now’. The
              session was taken by Prof. Ashay Joshi along with Prof. Tanisha
              Dalal and Dr. Ravi Vyas. The Sports Committee organised an Open
              Badminton League Tournament for boys and girls from 16
              <sup>th</sup> to 18<sup>th</sup> April.
            </td>
          </tr>
          <tr>
            <td width="123">23 April</td>
            <td width="479">
              The Department of Computer Science conducted Intra Department FEF
              program on ‘Cloud Computing and MOOC’.
            </td>
          </tr>
          <tr>
            <td colspan="2" width="601">
              May 2022
            </td>
          </tr>
          <tr>
            <td width="123">9 May</td>
            <td width="479">
              The Evening Classes of St Paul Institute of Professional Studies
              offering Certificate Courses begin in the college.
            </td>
          </tr>
          <tr>
            <td width="123">12 May</td>
            <td width="479">
              The Director and the Principal departed for the Xavier Board
              Networking and Academic Collaboration National Meeting held at
              Cochin Ernakulam. MOU was signed with 14 colleges.
            </td>
          </tr>
          <tr>
            <td width="123">17 May</td>
            <td width="479">
              The Research and Journal Committee organised a workshop in
              association with Research Foundation of India. Dr Shalu Kotwani,
              Assistant Professor, Institute of Management and Certified Digital
              Content Writer was the resource person. The workshop was held on
              ‘Digital Content Writing: Need of Today’.
            </td>
          </tr>
          <tr>
            <td width="123">18 May</td>
            <td width="479">
              The Intra Department FEF program of Computer Science Department
              was held on ‘Embedded Systems’.
            </td>
          </tr>
          <tr>
            <td width="123">21 May</td>
            <td width="479">
              Intra Department FEF program of Department of Management was held
              on ‘Entrepreneurship Development Reduces Unemployment and Improves
              Economy’. Intra Department FEF program of Department of Commerce
              was held on the topic ‘There are no Mistakes just Happy
              Accidents’.
            </td>
          </tr>
          <tr>
            <td width="123">23 May</td>
            <td width="479">
              The Morning Assembly Committee in association with the Library
              Committee celebrated the ‘World Book and Copyright Day’ through a
              special program.
            </td>
          </tr>
          <tr>
            <td width="123">24 May</td>
            <td width="479">
              The Intra Department FEF faculty program of Department of Science
              was held. The Intra Department FEF program of Department of
              Humanities was held on ‘Positive and Work Culture’.
            </td>
          </tr>
          <tr>
            <td width="123">26 May</td>
            <td width="479">
              The Career Skills Development and Placement Committee organised a
              Recruitment Drive for Pass-out students of 2021 and 21-22 batch in
              Renaissance Global. The Research and Journal Committee in
              association with Research Foundation of India organised
              International Virtual Conference with this theme ‘Challenges,
              Opportunities and Innovation for Sustainable Development.’
            </td>
          </tr>
          <tr>
            <td width="123">27 May</td>
            <td width="479">
              The Inter Departmental FEF program of Department of Computer
              Science was organised on the topic ‘Changing the Face of Education
              through Cloud Computing and MOOC’. The session was taken by Prof.
              Bhavana Sangamnerkar, Prof. Hema Bharadwaj and Prof. A. Manoj. The
              Language Lab Committee organised an Online Interview Skills
              Session on Google Meet.
            </td>
          </tr>
          <tr>
            <td colspan="2" width="601">
              June 2022
            </td>
          </tr>
          <tr>
            <td width="123">4 June</td>
            <td width="479">
              The Program Committee organised E-Competition for 12<sup>th</sup>{" "}
              Class Pass Out students from 4<sup>th</sup> to 24<sup>th</sup>{" "}
              June. The theme was ‘Talent Vista 2022: Unleashing your Talent’.
              The competitions organised are solo dance competition, solo
              singing competition, rangoli making, best out of waste and book
              review competition.
            </td>
          </tr>
          <tr>
            <td width="123">6 June</td>
            <td width="479">
              The Language Lab Committee organized a session on ‘Competitive
              English Practice Test’. The Environment Club in association with
              NSS Committee conducted a special program on World Environment Day
              during the Morning Assembly. A special event ‘Let&apos;s Plant
              Together : a Sapling Exchange Program’ was organised.
            </td>
          </tr>
          <tr>
            <td width="123">7 June</td>
            <td width="479">
              The Library Committee organised a ‘Quiz on Current Affairs’ from 7
              <sup>th</sup> to 10<sup>th</sup> June on Google Form. Internship
              Program for BCA and B.Sc students was organised by the Careers
              Skill Development and Placement Committee. Intra Departmental FEF
              of Humanities Department was conducted on ‘Forgive and Forget, not
              Revenge and Regret’. Intra Departmental FEF of Commerce Department
              was conducted on ‘Harbingering the Future: Looking Ahead at
              2022-23’.
            </td>
          </tr>
          <tr>
            <td width="123">10 June</td>
            <td width="479">
              Intra Departmental FEF of Department of Science was held.
            </td>
          </tr>
          <tr>
            <td width="123">11 June</td>
            <td width="479">
              The Ph.D Guideship in Physics was awarded to HOD of Science, Dr.
              Arvind Jain. Intra Departmental FEF of Management Department was
              conducted on the topic ‘Life is the Gift of God: We are Proud of
              it’.
            </td>
          </tr>
          <tr>
            <td width="123">13 June</td>
            <td width="479">
              The Career Skills Development and Placement Committee organised a
              placement opportunity at WM Universal Solution Private Limited in
              the campus. The Ph.D Guideship in Commerce was awarded to Dr.
              Goldie Zaki, Dr. Mahesh Joshi and Dr. Suvarna by Devi Ahilya
              University, Indore.
            </td>
          </tr>
          <tr>
            <td width="123">14 June</td>
            <td width="479">
              The NSS Committee organised Voting Awareness Campaign in the
              college.
            </td>
          </tr>
          <tr>
            <td width="123">15 June</td>
            <td width="479">
              The NCC and NSS Committee organised Seven Day Yoga Workshop from
              15<sup>th</sup> to 21<sup>st</sup> June. Dr. Avinash Yadav, NCC
              Officer was the resource person. The University Vocational subject
              viva for various subjects was conducted from 15<sup>th</sup> June
              to 18<sup>th</sup> June.
            </td>
          </tr>
          <tr>
            <td width="123">22 June</td>
            <td width="479">
              The NCC and Sports Committee celebrated the International Yoga Day
              through a special program during the morning assembly.
            </td>
          </tr>
          <tr>
            <td width="123">28 June</td>
            <td width="479">
              The Department of Humanities organised Inter Department FEF
              program. The session was taken by the HOD, Prof. Rahat Ahmed.
            </td>
          </tr>
          <tr>
            <td width="123">29 June</td>
            <td width="479">
              The Feast Day of the Director Rev. Fr. Simon Raj was celebrated.
              It was a Jubilee celebrated in the college. A special program to
              mark the celebration during the morning assembly was held, where a
              bouquet and card was presented to the Director along with the
              greetings by the faculty, staff and Principal. The Staff
              Association organised the phase 2 of the celebration in the
              canteen area through a special prayer service, presentation of
              gift and memento followed by refreshment for all.
            </td>
          </tr>
        </tbody>
      </table>
    </>
  ),
  "Happenings 2020-21": (
    <>
      <table className="w-100">
        <tbody>
          <tr>
            <td colspan="2" width="714">
              <table className="w-100">
                <tbody>
                  <tr>
                    <td width="205">01/07/2020:</td>
                    <td width="433">
                      Department of Physical Education organised an
                      International Webinar on “ Sports as a Career”.
                    </td>
                  </tr>
                  <tr>
                    <td width="205"></td>
                    <td width="433"></td>
                  </tr>
                  <tr>
                    <td width="205">02/07/2020:</td>
                    <td width="433">
                      Department of Humanities organised a Guest Talk by
                      Alumners.
                    </td>
                  </tr>
                  <tr>
                    <td width="205"></td>
                    <td width="433"></td>
                  </tr>
                  <tr>
                    <td width="205">03/07/2020:</td>
                    <td width="433">
                      Department of Humanities organised a National Webinar on
                      the topic “ The global impact of Covid -19: Holistic
                      development of students.”
                    </td>
                  </tr>
                  <tr>
                    <td width="205"></td>
                    <td width="433"></td>
                  </tr>
                  <tr>
                    <td width="205">04/07/2020:</td>
                    <td width="433">
                      Department of Computer Science organised an International
                      Webinar on the topic “ Agile changing technology
                      landscape”.
                    </td>
                  </tr>
                  <tr>
                    <td width="205"></td>
                    <td width="433"></td>
                  </tr>
                  <tr>
                    <td width="205">10/07/2020:</td>
                    <td width="433">
                      Department of Computer Science organised a Photo Clicking
                      Competition on the theme “Capturing life during lockdown
                      through camera “ for BCA students.
                    </td>
                  </tr>
                  <tr>
                    <td width="205"></td>
                    <td width="433"></td>
                  </tr>
                  <tr>
                    <td width="205"></td>
                    <td width="433">
                      Department of Humanities organised a guest talk.
                    </td>
                  </tr>
                  <tr>
                    <td width="205"></td>
                    <td width="433"></td>
                  </tr>
                  <tr>
                    <td width="205">11/07/2020:</td>
                    <td width="433">
                      Mobile Photography competition was organised on the theme
                      “ Photography can light up darkness”.
                    </td>
                  </tr>
                  <tr>
                    <td width="205"></td>
                    <td width="433"></td>
                  </tr>
                  <tr>
                    <td width="205"></td>
                    <td width="433">
                      Various PD activities like Talent Show, Jumbled Word
                      Puzzle, Best out of Waste and Online games were conducted.
                    </td>
                  </tr>
                  <tr>
                    <td width="205"></td>
                    <td width="433"></td>
                  </tr>
                  <tr>
                    <td width="205">14/07/2020:</td>
                    <td width="433">
                      Extempore competition was conducted on Google Meet.
                    </td>
                  </tr>
                  <tr>
                    <td width="205"></td>
                    <td width="433"></td>
                  </tr>
                  <tr>
                    <td width="205">15/07/2020:</td>
                    <td width="433">
                      Department of Science organised a National Webinar on the
                      topic “Metals in Healthcare”.
                    </td>
                  </tr>
                  <tr>
                    <td width="205"></td>
                    <td width="433"></td>
                  </tr>
                  <tr>
                    <td width="205">16/07/2020:</td>
                    <td width="433">
                      Department of Commerce organised a Motivational Video
                      Competition.
                    </td>
                  </tr>
                  <tr>
                    <td width="205"></td>
                    <td width="433"></td>
                  </tr>
                  <tr>
                    <td width="205">17/07/2020:</td>
                    <td width="433">
                      Department of Commerce organised a Intra departmental FEF
                      on the topic ‘Effective use of Online teaching’.
                    </td>
                  </tr>
                  <tr>
                    <td width="205"></td>
                    <td width="433"></td>
                  </tr>
                  <tr>
                    <td width="205">18/07/2020:</td>
                    <td width="433">
                        Various activities and competitions like Photography
                      Competition, Unleashing a country/State/City, Movie
                      review, Experience sharing during lockdown, Mini case
                      study and presentation were conducted for different
                      classes.
                    </td>
                  </tr>
                  <tr>
                    <td width="205"></td>
                    <td width="433"></td>
                  </tr>
                  <tr>
                    <td width="205"></td>
                    <td width="433">
                      A meeting of the Commerce department was conducted with
                      the Director and the Principal.
                    </td>
                  </tr>
                  <tr>
                    <td width="205">21/07/2020:</td>
                    <td width="433">
                      Department of Humanities organised an activity on the
                      topic ‘ Common Errors in English Language”.
                    </td>
                  </tr>
                  <tr>
                    <td width="205">22/07/2020</td>
                    <td width="433">
                      The department of computer science organised a poetry
                      recitation competition on the theme patriotism during lock
                      down. The department of Commerce conducted and awareness
                      talk on unveiling the unexpressed problems of girls doctor
                      Anil gynecologist was the resource person. The department
                      of humanity is organised against lecture on awareness in
                      adolescence Dr Chitra Srivastava gynecologist was the
                      resource person
                    </td>
                  </tr>
                  <tr>
                    <td width="205"></td>
                    <td width="433"></td>
                  </tr>
                  <tr>
                    <td width="205">23/07/2020</td>
                    <td width="433">
                      Department of science organised and interaction with
                      alumni title career opportunities in the field of computer
                      science
                    </td>
                  </tr>
                  <tr>
                    <td width="205">24/07/2020</td>
                    <td width="433">
                      The department of management organised a session for girls
                      students on the topic young women in new normal
                    </td>
                  </tr>
                  <tr>
                    <td width="205">25/07/2020</td>
                    <td width="433">
                      The Christian students association organised a session on
                      breaking the chain of depression through blessed assurance
                      the session was taken by father Jerome Louis archdiocese 
                      of Hyderabad
                    </td>
                  </tr>
                  <tr>
                    <td width="205">26/07/2020</td>
                    <td width="433">
                      The department of computer science organised and awareness
                      talk for girls on the topic common issues and queries of
                      young girls the resource person of the session was Dr
                      Meenakshi Sharma gynecologist Choithram Hospital
                    </td>
                  </tr>
                  <tr>
                    <td width="205">28/07/2020</td>
                    <td width="433">
                      Department of science conducted and awareness talk on
                      right and wrong for girls. Resource person was Dr. Divya
                      Gupta, gynecologist. Dr Swati Singh was a resource person
                      in a webinar organised by SAGE University Indore the topic
                      was how to motivate yourself
                    </td>
                  </tr>
                  <tr>
                    <td width="205">29/07/2020</td>
                    <td width="433">
                      The results of Udaan competition was uploaded on the
                      website. The department of management conducted inter
                      department faculty and reaching faculty program on the
                      topic special features of zoom platform
                    </td>
                  </tr>
                  <tr>
                    <td width="205">01-08-2020</td>
                    <td width="433">
                      The Department of Commerce organized a Webinar on “ABC of
                      emotional health of today&apos;s generation” with Dr
                      Sandeep founder CH maker as a resource person. The
                      Department of Physical education and NCC organized a
                      National Webinar on “Corona pandemic social responsibility
                      of NCC”.
                    </td>
                  </tr>
                  <tr>
                    <td width="205">03-08-2020</td>
                    <td width="433">
                      The Language Lab Committee organize an inter class mock
                      comparing competition.
                    </td>
                  </tr>
                  <tr>
                    <td width="205">04-08-2020</td>
                    <td width="433">
                      The department of Humanities organized a vocabulary and
                      hands mint session. The Display Board committee organized
                      a poster making competition on the theme of Raksha
                      Bandhan, Independence Day and Ganesh Chaturthi.
                    </td>
                  </tr>
                  <tr>
                    <td width="205">06-08-2020</td>
                    <td width="433">
                      The Department of Physical Education organized an
                      awareness of sports.
                    </td>
                  </tr>
                  <tr>
                    <td width="205">07-08-2020</td>
                    <td width="433">
                      The Department of Humanities organized a webinar on ‘Help
                      and the problem of unemployment as a present and future
                      challenge’.
                    </td>
                  </tr>
                  <tr>
                    <td width="205">08-08-2020</td>
                    <td width="433">
                      The NCC committee organized a poster making competition on
                      corona virus.
                    </td>
                  </tr>
                  <tr>
                    <td width="205">10-08-2020</td>
                    <td width="433">
                      The department of Humanities conducted a story telling
                      session. The Christian Student Association organized a
                      mentor interaction with the students of BBA.
                    </td>
                  </tr>
                  <tr>
                    <td width="205">11-08-2020</td>
                    <td width="433">
                      The program committee organized an inter class slogan and
                      poetry writing competition on the occasion of the 73rd
                      independence day of the country with the theme one India
                      Unity in tricolor. The Department of Management organized
                      and national webinar on empowering to be happy. The
                      Department of Commerce conducted an intra departmental
                      faculty and enriching faculty program.
                    </td>
                  </tr>
                  <tr>
                    <td width="205">12-08-2020</td>
                    <td width="433">
                      Department of Computer Science conducted an intra
                      departmental faculty and enriching faculty program
                    </td>
                  </tr>
                  <tr>
                    <td width="205">13-08-2020</td>
                    <td width="433">
                      A special meeting of all the class representative was held
                      with the Director Reverend Father Simon Raj and Principal
                      Dr. Sr. Alice Thomas along with the faculty members of
                      student welfare committee.
                    </td>
                  </tr>
                  <tr>
                    <td width="205">14-08-2020</td>
                    <td width="433">
                      The music committee organized a patriotic singing
                      competition the research and journal committee organized a
                      session on basics of literature review.
                    </td>
                  </tr>
                  <tr>
                    <td width="205">15-08-2020</td>
                    <td width="433">
                      The NCC committee organized a patriotic singing
                      competition on the occasion of Independence Day Special
                      class wise program on the online platform was conducted,
                      the students enthusiastically participated and presented
                      different items pertaining to Independence Day.
                    </td>
                  </tr>
                  <tr>
                    <td width="205">17-08-2020</td>
                    <td width="433">
                      Common Class Test-1 for BA, B.Sc. &amp; B.Com – II &amp;
                      III Yr students on 17<sup>th</sup>, 18<sup>th</sup> &amp;
                      19<sup>th</sup> August 2020.
                    </td>
                  </tr>
                  <tr>
                    <td width="205">18- 08-2020</td>
                    <td width="433">
                      The NSS committee organized a plantation activity.
                    </td>
                  </tr>
                  <tr>
                    <td width="205">19-08-2020</td>
                    <td width="433">
                      The Photography and powerpoint committee conducted a
                      selfie and self portrait competition.
                    </td>
                  </tr>
                  <tr>
                    <td width="205">20-08-2020</td>
                    <td width="433">
                      The Department of Humanities conducted a session on common
                      errors in Grammar. The NCC committee organized a special
                      online program on the occasion of Sadbhavana Diwas. The
                      department of computer science organized a guest session
                      on the topic career opportunities and planning in computer
                      application and IT field.
                    </td>
                  </tr>
                  <tr>
                    <td width="205">22-08-2020</td>
                    <td width="433">
                      The NCC committee organized and essay writing competition
                      on the topic pandemic.
                    </td>
                  </tr>
                  <tr>
                    <td width="205">24-08-2020</td>
                    <td width="433">
                      The Christian student Association organized a personality
                      development and grooming session for the students of the
                      association.
                    </td>
                  </tr>
                  <tr>
                    <td width="205">25-08-2020</td>
                    <td width="433">
                      The Department of Commerce arranged four days student
                      development program. The department of Humanities
                      conducted a session titled one word substitution.
                    </td>
                  </tr>
                  <tr>
                    <td width="205">26-08-2020</td>
                    <td width="433">
                      The Women and Child Protection committee organized a story
                      telling competition, the theme was define stereotypes
                      answer women heroes.
                    </td>
                  </tr>
                  <tr>
                    <td width="205">27-08-2020</td>
                    <td width="433">
                      Committee organized an article writing competition on the
                      theme importance of e-library emits covid-19. The Gender
                      Champions club organized and inter class elocution
                      competition on the topic on girls leading boys in board
                      exams.
                    </td>
                  </tr>
                  <tr>
                    <td width="205">29-08-2020</td>
                    <td width="433">
                      Department of computer science organized a national
                      webinar on introduction to modern computing solution. A
                      session for all the third year students on how to write
                      open book exam was conducted by the class teachers. The
                      NCC committee through their credits organizes a mask
                      distribution activity in the vicinity of credits. The
                      Department of Humanities organized a current affair quiz.
                    </td>
                  </tr>
                  <tr>
                    <td width="205">30-08-2020</td>
                    <td width="433">
                      The NSS committee organize a special session with the DAVV
                      NSS coordinator Dr. Prakash Gadwal to orient the students
                      on B and C certificate exam the sports committee organised
                      poster making competition on the topic health is real
                      wealth.
                    </td>
                  </tr>
                  <tr>
                    <td width="205">01-09-2020</td>
                    <td width="433">
                      The department of Humanities conducted an activity titled
                      question tag. The career skills development and placement
                      committee organize a 15 days online digital marketing
                      certificate programs with digital Guru.
                    </td>
                  </tr>
                  <tr>
                    <td width="205">03-09-2020</td>
                    <td width="433">
                      The Department of Computer Science organized a three days
                      technical workshop on python.
                    </td>
                  </tr>
                  <tr>
                    <td width="205">04-09-2020</td>
                    <td width="433">
                      The Department of Commerce organized a faculty enriching
                      faculty programme on the topic effective teaching features
                      of Zoom and Google meet application the session from the
                      department was taken by Dr. Ravi Vyas and Prof. Ankur
                      sodani.
                    </td>
                  </tr>
                  <tr>
                    <td width="205">05-09-2020</td>
                    <td width="433">
                      In order to salute the nation builders a special class
                      wise program was organized on the occasion of
                      teacher&apos;s day.
                    </td>
                  </tr>
                  <tr>
                    <td width="205">08-0920</td>
                    <td width="433">
                      On the occasion of the feast day of Principal Dr. Sr.
                      Alice Thomas, the programme committee took the initiative
                      of organizing special class wise program. Staff
                      Association too organised and online program to
                      commemorate the feast of Mother Mary and to extend warm
                      wishes to the Principal Dr Sister Alice Thomas.
                    </td>
                  </tr>
                  <tr>
                    <td width="205">09-09-2020</td>
                    <td width="433">
                      The NCC committee organized a debate competition on – “By
                      Court Chinese product or not”
                    </td>
                  </tr>
                  <tr>
                    <td width="205">10-09-2020</td>
                    <td width="433">
                      The photography and powerpoint committee organised a
                      photography competition on the title family bonding The
                      Display Board committee organised a poster making
                      competition on the occasion of Hindi Diwas, World Ozone
                      day and International Day of democracy. The department of
                      science organised and online GK quiz competition. The
                      Christian student Association organized Bible quiz.
                    </td>
                  </tr>
                  <tr>
                    <td width="205">12-09-2020</td>
                    <td width="433">
                      And general committee organised a symposium on the topic
                      nothing is permanent except change
                    </td>
                  </tr>
                  <tr>
                    <td width="205">14-09-2020</td>
                    <td width="433">
                      Career, skills development and placement committee
                      organised a session on career development by the resource
                      person from Bajaj Fiserv
                    </td>
                  </tr>
                  <tr>
                    <td width="205">15-09-2020</td>
                    <td width="433">
                      Department of Humanities organised a session on narration
                      two imperative sentences
                    </td>
                  </tr>
                  <tr>
                    <td width="205">17-09-2020</td>
                    <td width="433">
                      Department of Science organised and invited talk on
                      importance of Physics in daily life.
                    </td>
                  </tr>
                  <tr>
                    <td width="205">18-09-2020</td>
                    <td width="433">
                      The career skills development and placement committee
                      organised a webinar on facing interview and resume
                      preparation
                    </td>
                  </tr>
                  <tr>
                    <td width="205">19-09-2020</td>
                    <td width="433">
                      The NCC committee organised a soap distribution activity.
                    </td>
                  </tr>
                  <tr>
                    <td width="205">20-09-2020</td>
                    <td width="433">
                      The women and Child Protection committee organized
                      motivational video clip competition, the topic was women
                      lean in together. The students of Saint Paul Institute of
                      Professional Studies under the care of Prof. Tanisha Dalal
                      participated in an international student faculty exchange
                      program titled Confluence 2020 which was organised by
                      Saint Aloysius College Jabalpur.
                    </td>
                  </tr>
                  <tr>
                    <td width="205">22-09-2020</td>
                    <td width="433">
                      The department of Humanities conducted a discussion on
                      psychological effect of web series in personality.
                    </td>
                  </tr>
                  <tr>
                    <td width="205">26-09-2020</td>
                    <td width="433">
                      The department of management organised an element
                      interaction on the basics of social media marketing. The
                      NCC committee conducted a guest lecture on advantages of
                      NCC in armed forces and other jobs.
                    </td>
                  </tr>
                  <tr>
                    <td width="205">29-09-2020</td>
                    <td width="433">
                      Counseling and tutorial committee conducted a special
                      session on untouched and explore personality. The career
                      skills development and placement committee conducted and
                      Entrepreneurship drive a new norm post covid-19.
                    </td>
                  </tr>
                  <tr>
                    <td width="205"></td>
                    <td width="433">
                      The Department of Science organized a guest lecture on the
                      theme “Career &amp; Science”. The Chief Guest was Mr. Ravi
                      Kumar Verma, Scientist, ISRO Ahmadabad.
                    </td>
                  </tr>
                  <tr>
                    <td width="205">02-10-2020:</td>
                    <td width="433">
                      The NSS Committee organized a Free Health Checkup Camp on
                      the 150<sup>th</sup>
                      birth anniversary of Gandhiji. A rally comprising of 30
                      volunteers was also organized by Dr. Mili Singh and Dr.
                      Javid Ahmad Mir which started from Sahitya Bhawan and
                      ended at Gandhi Hall.
                    </td>
                  </tr>
                  <tr>
                    <td width="205"></td>
                    <td width="433">
                      PPA Annual General Body Meeting was held in the
                      auditorium.
                    </td>
                  </tr>
                  <tr>
                    <td width="205">04-10-2020:</td>
                    <td width="433">
                      Mansi Gupta of B.Com. (Hons.) “B” I Year won the 1
                      <sup>st</sup> prize in Inter – College Poster Making
                      Competition.
                    </td>
                  </tr>
                  <tr>
                    <td width="205"></td>
                    <td width="433">
                      Aashisha Joseph of B.A. I Year won the III Prize in the
                      Debate Competition.
                    </td>
                  </tr>
                  <tr>
                    <td width="205">05-10-2020:</td>
                    <td width="433">
                      Day 1 of the Inter House Cultural Competition (Final) 2019
                      was organized at the auditorium for the following
                      activities :
                    </td>
                  </tr>
                  <tr>
                    <td width="205"></td>
                    <td width="433">·       Instrumental Music</td>
                  </tr>
                  <tr>
                    <td width="205"></td>
                    <td width="433">·       Solo Singing (Indian)</td>
                  </tr>
                  <tr>
                    <td width="205"></td>
                    <td width="433">·       Solo Singing (Western)</td>
                  </tr>
                  <tr>
                    <td width="205"></td>
                    <td width="433">
                      ·       Solo Dance (Classical/Semi – Classical/Folk)
                    </td>
                  </tr>
                  <tr>
                    <td width="205"></td>
                    <td width="433">·       Solo Dance (Western)</td>
                  </tr>
                  <tr>
                    <td width="205">10-10-2020:</td>
                    <td width="433">
                      Inter – House Face Painting Competition was organized by
                      Department of Humanities.
                    </td>
                  </tr>
                  <tr>
                    <td width="205"></td>
                    <td width="433">
                      CCT committee conducted a special session for students of
                      Commerce Department
                    </td>
                  </tr>
                  <tr>
                    <td width="205">12-10-2020</td>
                    <td width="433">
                      The intra department of faculty enriching faculty program
                      of Management was held on mental health and hygiene
                    </td>
                  </tr>
                  <tr>
                    <td width="205">16-10-2020</td>
                    <td width="433">
                      Department of humanities conducted an activity title
                      showcase your talent. NSS orientation come interaction
                      session for all the first year was conducted
                    </td>
                  </tr>
                  <tr>
                    <td width="205"></td>
                    <td width="433">
                      Photography and powerpoint committee organised a
                      testimonial writing competition. Intra department faculty
                      and reaching faculty program of department of humanities
                      was conducted on the topic lockdown impact on students and
                      their health
                    </td>
                  </tr>
                  <tr>
                    <td width="205">17-10-2020</td>
                    <td width="433">
                      The department of Commerce conducted DIY and life hack
                      video competition
                    </td>
                  </tr>
                  <tr>
                    <td width="205">19-10-2020</td>
                    <td width="433">
                      Language lab committee conducted a workshop on how to
                      groom your personality. Gender champions club conducted
                      article writing competition on victim blaming rape culture
                    </td>
                  </tr>
                  <tr>
                    <td width="205">20-10-2020</td>
                    <td width="433">
                      Music committee conducted a special session on music
                      alankaras
                    </td>
                  </tr>
                  <tr>
                    <td width="205">21-10-2020</td>
                    <td width="433">
                      The career skills development and placement committee
                      organised as session on MBA college options. The
                      department of science conducted intra department FEF on
                      pros and cons of online classes
                    </td>
                  </tr>
                  <tr>
                    <td width="205">26-10-2020</td>
                    <td width="433">
                      Digital marketing certificate course for all the first
                      year students begin the department of Commerce organised
                      online video dance competition for the first year students
                      title and leasing the talents of Commerce students. The
                      executive committee meeting of parents professor
                      association was organised
                    </td>
                  </tr>
                  <tr>
                    <td width="205">27-10-2020</td>
                    <td width="433">
                      The sports committee conducted debate competition on
                      performance of Indian players in Olympics
                    </td>
                  </tr>
                  <tr>
                    <td width="205">28-10-2020</td>
                    <td width="433">
                      Science club activity was conducted in the form of poster
                      competition the NCC committee conducted a session titled
                      identify the personality
                    </td>
                  </tr>
                  <tr>
                    <td width="205">31-10-2020</td>
                    <td width="433">
                      The staff association conducted a vibrant program to
                      celebrate the birthday of the Director Rev Fr Simon Raj.
                      The day was celebrated in the form of Freshers&apos;
                      Talent Show Day
                    </td>
                  </tr>
                  <tr>
                    <td width="205">2-11-2020</td>
                    <td width="433">
                      The 65th Madhya Pradesh state Foundation Day was
                      commemorated through a special program
                    </td>
                  </tr>
                  <tr>
                    <td width="205">5-11-2020</td>
                    <td width="433">
                      The department of science organised a session on all you
                      need to know about civil service exams. . The department
                      of Commerce organised and international webinar on the
                      topic the importance of effective communication in the
                      present era the session was taken by Mr Sangameswaran
                      Manikaram Iyer cyber security expert USA. The department
                      of Humanities organised an extempore competition. The
                      language lab committee conducted a poetry writing
                      competition on Diwali, festival of light
                    </td>
                  </tr>
                  <tr>
                    <td width="205">7-11-2020</td>
                    <td width="433">
                      The research and journal committee organised a special
                      session for the faculty members on new education policy
                      readiness and challenges. The NCC committee conducted a
                      guest lecture on how to groom your personality through NCC
                      on online platform
                    </td>
                  </tr>
                  <tr>
                    <td width="205">9 -11-2020</td>
                    <td width="433">
                      The program committee very meticulously conducted the
                      online election of house wise office bearers this was done
                      via Google form
                    </td>
                  </tr>
                  <tr>
                    <td width="205">10-11-2020</td>
                    <td width="433">
                      On the occasion of national education day the NSS
                      committee organised a debate competition on the topic new
                      education policy will it be successful in crafting the
                      future of students. The counseling and tutorial committee
                      conducted a webinar on how to overcome the challenges. The
                      sports committee conducted and inter departmental quiz
                      competition on sports. The department of Humanities held a
                      special session on grammar
                    </td>
                  </tr>
                  <tr>
                    <td width="205">11-11-2020</td>
                    <td width="433">
                      On the auspicious occasion of Diwali the photography and
                      Powerpoint committee inaugurated the SPIPS photography
                      club and organised a short film making competition on the
                      theme Diwali. The department of management organised as
                      special online Diwali celebration. The career skills
                      development and placement committee organised a session on
                      various techniques related to group discussion
                    </td>
                  </tr>
                  <tr>
                    <td width="205">17-11-2020</td>
                    <td width="433">
                      Christian student Association organised a parable
                      interpretation competition for the students.
                    </td>
                  </tr>
                  <tr>
                    <td width="205">19-11-2020</td>
                    <td width="433">
                      The department of Commerce organised a commerce quiz for
                      all the Commerce students via Google form. The department
                      of Humanities conducted and online mock parliamentary
                      session. The department of management Conducted intra
                      department program on theme perception of teachers for
                      online classes
                    </td>
                  </tr>
                  <tr>
                    <td width="205">20-11-2020</td>
                    <td width="433">
                      The music committee held a session on music entitled
                      alankara&apos;s revisited. The intra department faculty
                      program of department of science was held on technical
                      session to design Google form
                    </td>
                  </tr>
                  <tr>
                    <td width="205">21-11-2020</td>
                    <td width="433">
                      The science club organised Assassin for science students.
                      The CCT and assignment committee conducted a short session
                      for faculty members for clearing the doubts regarding
                      question paper setting
                    </td>
                  </tr>
                  <tr>
                    <td width="205">23-11-2020</td>
                    <td width="433">
                      Language lab organise a session on letter to the editor. A
                      demo common class test for all the students was held on
                      the online mode
                    </td>
                  </tr>
                  <tr>
                    <td width="205">24-11-2020</td>
                    <td width="433">
                      The common class test 2 for all the second and third years
                      and the common class test 1 for the first year students
                      commenced and continued on 3 days.
                    </td>
                  </tr>
                  <tr>
                    <td width="205">25-11-2020</td>
                    <td width="433">
                      The department of Commerce held intra department faculty
                      program on the theme practicing the pause
                    </td>
                  </tr>
                  <tr>
                    <td width="205">26-11-2020</td>
                    <td width="433">
                      The department of management organised a session on
                      management by movies
                    </td>
                  </tr>
                  <tr>
                    <td width="205"></td>
                    <td width="433">
                      The sports committee organise a biography writing
                      competition on sports personality. The NSS committee
                      organised and online quiz on the occasion of Indian
                      constitution day. The women and child protection committee
                      organised app poetry writing competition on the theme
                      women empowerment. The department of humanity is organised
                      mock parliament
                    </td>
                  </tr>
                  <tr>
                    <td width="205">27-11-2020</td>
                    <td width="433">
                      The Christian students association schedule a mentor
                      interaction with bcom computer application and tax first
                      year students. The language lab committee organise a
                      competition on translation of Arabic and Urdu words into
                      Hindi. The inter department faculty and reaching faculty
                      was conducted by department of management on challenges to
                      working professionals during covid-19
                    </td>
                  </tr>
                  <tr>
                    <td width="205">28-11-2020</td>
                    <td width="433">
                      The NCC committee organise a best out of waste
                      competition. Guru Nanak jayanti was celebrated during the
                      morning assembly. The month witnessed special interaction
                      and meeting of the Director and Principal on different
                      days with the first year students.
                    </td>
                  </tr>
                  <tr>
                    <td width="205">1-12-2020</td>
                    <td width="433">
                      The special meeting of Director and Principal with the
                      first year classes continued. The NCC selection process
                      begin and continue till 6th December.
                    </td>
                  </tr>
                  <tr>
                    <td width="205">2-12-2020</td>
                    <td width="433">
                      The library committee organised a poetry writing
                      competition on the theme celebrating Christmas during
                      covid-19. Inter house literary and arts competition were
                      organised from second to 5th December 2020 the events were
                      held into locations that are canteen area and auditorium.
                      Meeting of the class representatives was held with the
                      director and principle it was organised by the student
                      welfare committee
                    </td>
                  </tr>
                  <tr>
                    <td width="205">3-12-2020</td>
                    <td width="433">
                      The department of Commerce in association with parents
                      professors association organised a workshop for providing
                      training of feeling of shipping export and import
                      documents the resource person was Mr Vikas Oberoi custom
                      officer and PPA president of the college he was assisted
                      by custom supreme tendon Mr Stephen Samuel. The new
                      college website and ecare software was inaugurated and
                      launched
                    </td>
                  </tr>
                  <tr>
                    <td width="205">5-12-2020</td>
                    <td width="433">
                      The sports committee organise a inter house oral quiz
                      competition on sports. The NCC committee held a group
                      counselling session for all the cadets to improve an
                      enhance their personality.
                    </td>
                  </tr>
                  <tr>
                    <td width="205">7-12-2020</td>
                    <td width="433">
                      The department of humanity organise our shop on grammar at
                      your fingertips it also comments the remedial classes for
                      the first year students.
                    </td>
                  </tr>
                  <tr>
                    <td width="205">8-12-2020</td>
                    <td width="433">
                      The intra department faculty enriching faculty of
                      department of Commerce was held on the topic perfecting
                      the in perfect getting familiar with e care software. The
                      music committee organise the third vocal training session
                      on rhythm. The career skills development and placement
                      committee held a session on digital marketing. An
                      orientation session on neck was held from 8 to 12th
                      December for all the criteria heads and faculty members
                      the session was taken by professor Deepa and joint
                      coordinator Mercy college Kerala. The department of
                      management conducted online poster making competition on
                      the theme recent trends in management
                    </td>
                  </tr>
                  <tr>
                    <td width="205">9-12-2020</td>
                    <td width="433">
                      The women and child protection committee organise and
                      online debate competition on the theme the idea of women
                      emarpication is good or bad for the society. The intra
                      department faculty enriching faculty program of department
                      of management was held on the theme emotional intelligence
                      at workplace
                    </td>
                  </tr>
                  <tr>
                    <td width="205">10-12-2020</td>
                    <td width="433">
                      The morning assembly committee along with the students of
                      b.Com honours 3rd year b organised a special program on
                      human rights Day
                    </td>
                  </tr>
                  <tr>
                    <td width="205">11-12-2020</td>
                    <td width="433">
                      The research and journal committee organised a webinar on
                      what next a journey from self to self made the resource
                      person of the session was Dr Parul Sharda associate
                      professor iips. The department of Commerce organise and
                      international webinar on effective communication skills in
                      everyday life Mr Sangameshwaran Manikayaran Iyer cyber
                      security and communication specialist Canada USA was the
                      resource person
                    </td>
                  </tr>
                  <tr>
                    <td width="205">12-12-2020</td>
                    <td width="433">
                      The parents professor association held an online meeting
                      with the parents. The department of humanity started the
                      offline remedial classes for Hindi. The department of
                      computer science organise a poster making competition on
                      the theme Christmas. The NSS committee help the opening
                      session for secret Santa spreading smile in the life of
                      others as a part of Christmas celebration this year. The
                      gender champions club organised a department wise debate
                      competition on the theme working parents hinder their
                      children development
                    </td>
                  </tr>
                  <tr>
                    <td width="205">14-12-2020</td>
                    <td width="433">
                      Various sports activities begin in the college. The
                      Christian student association organise a special program
                      celebrating the mercy festival and depicting the real
                      meaning of Christmas. The science club activity for all
                      the bsc classes was held on the topic types of energy and
                      their uses in real life
                    </td>
                  </tr>
                  <tr>
                    <td width="205">15-12-2020</td>
                    <td width="433">
                      The department of physical education organised a guest
                      lecture on importance of games and sports and college the
                      resource person was Dr Sunil Dudhale director of physical
                      education DAVV Indore. The department of science conducted
                      there intra department of faculty enriching faculty
                      program on technical session on ecare portal. The
                      department of computer science organised and inter
                      department faculty enriching faculty program on the time
                      travelling professor Tina Negi and professor Anant Raj
                      Manoj along with professor Himanshu Bhagaiya delivered the
                      session
                    </td>
                  </tr>
                  <tr>
                    <td width="205">16-12-2020</td>
                    <td width="433">
                      The NSS committee visited Jyoti nivas as a part of social
                      activity. The department of management commenced the
                      social session for all BBA classes on the theme being
                      human Santa the activity continue till 31st December. The
                      intra department faculty enriching faculty program of
                      department of humanity was conducted on the theme how to
                      control anger. The NCC committee conducted a short film
                      making competition on Indian war heroes for all the NCC
                      cadets.
                    </td>
                  </tr>
                  <tr>
                    <td width="205">18-12-2020</td>
                    <td width="433">
                      The photography and powerpoint committee organised and
                      inter class competition the PPT was to be created on the
                      theme gratitude. The Christmas was jovially celebrated in
                      the college in three phases phase 1 was conducted during
                      the morning assembly as a part of face to the class wise
                      Christmas celebration was held in the phase 3 US special
                      activity title treasure hunt was conducted towards the end
                      of formal program was held in the auditorium
                    </td>
                  </tr>
                  <tr>
                    <td width="205">26-12-2020</td>
                    <td width="433">
                      Special session for all the first year classes on the use
                      of digital library and list was held from 26th to 29th
                      December the session was taken care by the librarian
                    </td>
                  </tr>
                  <tr>
                    <td width="205">28-12-2020</td>
                    <td width="433">
                      Saint Aloysius College Jabalpur organised series under
                      paramarsh for mentee institution. The title of the webinar
                      was related to criteria wise updates about NAAC.
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td colspan="2" width="714">
              Jan 2021
            </td>
          </tr>
          <tr>
            <td width="164">4 Jan 2021</td>
            <td width="549">
              A nine days faculty development program on practical aspects of
              ICT tools and online teaching in the current scenario was
              conducted in Association with Research Foundation of India and the
              world virtual conference forum.
            </td>
          </tr>
          <tr>
            <td width="164">6 Jan 2021</td>
            <td width="549">
              The NSS committee organised an online NSS camp from 6th to 12th
              January 2021.
            </td>
          </tr>
          <tr>
            <td width="164">9 Jan 2021</td>
            <td width="549">
              The sports committee organise inter-house badminton competitions
              for boys and girls on 9th, 11th,27th and 29th  January the
              department of management organised and even title the art of
              Creative Thinking. The Music committee conducted a session on
              RaagYamanKe Rang. The department of management has a competition
              for creative thinking to commemorate world Braille day.
            </td>
          </tr>
          <tr>
            <td width="164">11 Jan 2021</td>
            <td width="549">
              Offline classes for the second and third years students begin as
              per the covid protocol set by the government.
            </td>
          </tr>
          <tr>
            <td width="164">12 Jan 2021</td>
            <td width="549">
              NCC committee and Association with the morning assembly committee
              of the National Youth Day then NCC volunteers were addressed by
              the principal.
            </td>
          </tr>
          <tr>
            <td width="164">13 Jan 2021</td>
            <td width="549">
              The department of Humanities organised an online intradepartmental
              quiz competition. Theinter-house offline cultural competition
              began and continued on 13, 14, 15, 16, 18, 19, 23 and 25 January
              covering the competitions namely solo dance solo singing
              instrumental-music skit group dance and backdrop making.
            </td>
          </tr>
          <tr>
            <td width="164">15 Jan 2021</td>
            <td width="549">
              The department of Humanities in collaboration with the
              parent&apos;s professor Association organises an internship
              training program for all the second and third-year students with
              DHL. The NCC committee celebrated army Day through up special
              presentations and videos of Army Man.
            </td>
          </tr>
          <tr>
            <td width="164">16 Jan 2021</td>
            <td width="549">
              The general Champions club held a session on self-defence
              technique.
            </td>
          </tr>
          <tr>
            <td width="164">18 Jan 2021</td>
            <td width="549">
              The library committee organisedUPSC model preliminary exam from 18
              to 28 January.
            </td>
          </tr>
          <tr>
            <td width="164">19 Jan 2021</td>
            <td width="549">
              The department of Commerce organised a webinar on career in
              taxation.
            </td>
          </tr>
          <tr>
            <td width="164">20 Jan 2021</td>
            <td width="549">
              The department of science conducted and online GK competition quiz
              competition for all the first year students. The department of
              Humanities organised an offline ‘spell bee competition’. The
              photography and PowerPoint committee organised a special session
              on ‘photography technique’. The offline classes begin for the
              first and second year students.
            </td>
          </tr>
          <tr>
            <td width="164">21 Jan 2021</td>
            <td width="549">
              The Christian students Association organised 3 days special
              grooming and placement work shop get the job as a part of science
              club activity. The department of science conducted a video
              presentation on advanced Science and Technology. The students
              welfare committee organised us motivational session on leadership
              for all the class representatives.
            </td>
          </tr>
          <tr>
            <td width="164">22 Jan 2021</td>
            <td width="549">
              The career skills development and placement committee organised a
              workshop for all the final year students on group discussion and
              mock drill. The counselling and tutorial committee organised an
              international webinar on the impact of Mental Health on overall
              Lifestyle by one of the alumni MS Saloni Dev. The department of
              commerce in collaboration with the parent&apos;s professor&apos;s
              Association organised a workshop on the filing of import-export
              and shipping documents.
            </td>
          </tr>
          <tr>
            <td width="164">23 Jan 2021</td>
            <td width="549">
              The department of computer science organised a webinar on an
              empirical study on online recommendation systems and security
              Trends and their professional scope. The language lab committee
              organised a workshop on phonetics the department of management
              conducted an allocation competition on vocal for locals. The women
              and Child Protection committee and morning assembly committee
              observed the national girl child day. The Display Board committee
              organise a poster making competition on the theme of the new year
              new beginning.
            </td>
          </tr>
          <tr>
            <td width="164">25 Jan 2021</td>
            <td width="549">
              The patrons day was George celebrated through a special program
              containing prayer introduction of the daylighting of the lamb
              short film on the life journey of Patron Saint Paul investiture
              ceremony of the house wise office bearers inter-house Indian group
              dance and singing competition and vote of thanks.
            </td>
          </tr>
          <tr>
            <td width="164">26 Jan 2021</td>
            <td width="549">
              The 72nd Republic Day was celebrated the day marked hosting of the
              national flag by the principal Dr sister Alice Thomas and an
              effervescent parade by the NCC cadet recitation of Patriotic poem
              address by the director Reverend father Simon drug and
              distribution of sweet to oval.
            </td>
          </tr>
          <tr>
            <td width="164">27 Jan 2021</td>
            <td width="549">
              The NCC committee conducted one-day trekking for all the NCC
              cadets the department of Humanities organised a workshop on the
              topic R Ti bi an element
            </td>
          </tr>
          <tr>
            <td width="164">28 Jan 2021</td>
            <td width="549">
              The department of physical education organised of faculty and
              teaching faculty program on the topic of stress management through
              yoga the NCC cadets attended camp from 28 January to 1st February
              at 9 MP battalion Indore.
            </td>
          </tr>
          <tr>
            <td colspan="2" width="714">
              February 2021
            </td>
          </tr>
          <tr>
            <td width="164">2 Feb 2021</td>
            <td width="549">
              The department of Humanities organised a national workshop on
              psychology benefits of art therapy. The photography and PowerPoint
              committee held a photography competition title ‘back to college’.
            </td>
          </tr>
          <tr>
            <td width="164">3 Feb 2021</td>
            <td width="549">
              The Priya University exam for BBA and BCA 3rd and 5th semester it
              was held in the open book format.
            </td>
          </tr>
          <tr>
            <td width="164">5 Feb 2021</td>
            <td width="549">
              The department of computer science under the IT club organise and
              essay writing competition on the topic my nation my pride. The
              Display Board committee organise a life driver and competition on
              the theme my role model.
            </td>
          </tr>
          <tr>
            <td width="164">6 Feb 2021</td>
            <td width="549">
              Inter house table tennis competition for men and women were held
              on 6th, 9th, 22nd and 25th February. The NCC committee
              organisedessay writing competition on the theme Republic Day. The
              college in collaboration with Research Foundation of India
              organised a 7 days student development program from 6th to 12th
              February. The music committee held a session on music lessons on
              different styles and forms of singing.
            </td>
          </tr>
          <tr>
            <td width="164">8 Feb 2021</td>
            <td width="549">
              The department of computer science organizedspips wiz quiz for
              advanced learners. On online platform the library committee held a
              workshop on reading 10 to 21 the semester begin for the BCA and
              BBA 4th and 6th sem students. The language lab committee conducted
              the second phase of workshop on phonetics and pronunciation 11 to
              21. The department of management organised a debate competition on
              farmers Bil 2020. The Christian student Association conducted
              mentor interaction with the students.
            </td>
          </tr>
          <tr>
            <td width="164">12 Feb 2021</td>
            <td width="549">
              The department of Humanities organised and activity title the
              world of phonetics. The department of Commerce conducted and
              invited talk on Union budget 15 to 21. The common class test for
              BBA and BCA 1st semester students was held on 15th 16th and 17th
              February 18 to 21. The career skills and development and placement
              committee organised a mock interview drive for the second and
              third year students. The gender Champions club organised and
              elocution competition on the theme where feminism went wrong. The
              department of science conducted a science club activity Ee on the
              topic exoplanet 19 to 21. The department of Humanities organise an
              activity on identifying the Hindi phrases.
            </td>
          </tr>
          <tr>
            <td width="164">20 Feb 2021</td>
            <td width="549">
              The NCC committee conducted a social activity of cleaning the
              Statue of Saint Paul in the college premises. The department of
              computer science organised a guest lecture on Informatics. 23 to
              21 The women and Child Protection committee held a drawing
              competition on the topic child labour.
            </td>
          </tr>
          <tr>
            <td width="164">25 Feb 2021</td>
            <td width="549">
              The counseling and tutorial commityorganised and online Debate
              competition on farmers reforms will 2020.
            </td>
          </tr>
          <tr>
            <td width="164">26 Feb 2021</td>
            <td width="549">
              The national science day was observed during the morning assembly
              through to conduct of a special program.
            </td>
          </tr>
          <tr>
            <td colspan="2" width="714">
              March 2021
            </td>
          </tr>
          <tr>
            <td width="164">1 March 2021</td>
            <td width="549">
              The research and journal committee organised and online research
              methodology workshop for two days for the students.
            </td>
          </tr>
          <tr>
            <td width="164">3 March 2021</td>
            <td width="549">
              Common class test 2 for all the BCom BA and BSc first year
              students begin and concluded on 5th March the Priya University
              exam of BCom BA and Bsc 2nd and 3rd year students and BBA and BCA
              first year students comments and continued till 13th March.
            </td>
          </tr>
          <tr>
            <td width="164">5 March 2021</td>
            <td width="549">
              The Display Board committee organised a self-portrait competition
              that continued till 28th March.
            </td>
          </tr>
          <tr>
            <td width="164">6 March 2021</td>
            <td width="549">
              The inter house cricket Mens and womens competition begin and were
              conducted on 68 17th and 18th March.
            </td>
          </tr>
          <tr>
            <td width="164">8 March 2021</td>
            <td width="549">
              The women and Child Protection committee along with morning
              assembly commity celebrated the international Women&apos;s Day
              through a special online program.
            </td>
          </tr>
          <tr>
            <td width="164">9 March 2021</td>
            <td width="549">
              The department of management organised and international webinar
              on spirituality and Management. The department of Humanities
              organised and Karnatak in the canteen area the language lab
              committee organise a session on how to crack the exam.
            </td>
          </tr>
          <tr>
            <td width="164">10 March 2021</td>
            <td width="549">
              Inter house football competition was organised by the sports
              committee on 10th 12th 13th and 15th March.
            </td>
          </tr>
          <tr>
            <td width="164">12 March 2021</td>
            <td width="549">
              The career skills development and placement committee organise a
              webinar title in demand jobs of the future. The library committee
              organised a competition on my class my ebook Bank.
            </td>
          </tr>
          <tr>
            <td width="164">13 March 2021</td>
            <td width="549">
              The 24th executive committee meeting of parents professor&apos;s
              Association was held. The photography and PowerPoint committee
              organised the second phase of photography workshop on tips and
              techniques of shooting.
            </td>
          </tr>
          <tr>
            <td width="164">15 March 2021</td>
            <td width="549">
              After 5 days faculty development programme on the role of
              spirituality for a harmonious and fulfilling human community in
              collaboration with Research Foundation of India and world virtual
              conference commenced.
            </td>
          </tr>
          <tr>
            <td width="164">16 March 2021</td>
            <td width="549">
              The department of Humanities organised and activity titled tongue
              twisters.
            </td>
          </tr>
          <tr>
            <td width="164">17 March 2021</td>
            <td width="549">
              The NCC committee conducted a drill competition for all the NCC
              cadets the NSS committee organised a cycle rally to celebrate
              AzadikaAmritMahotsav.
            </td>
          </tr>
          <tr>
            <td width="164">18 March 2021</td>
            <td width="549">
              The Christian students Association organised and interactive
              session on handling relationships inspired by the holy scriptures.
            </td>
          </tr>
          <tr>
            <td width="164">22 March 2021</td>
            <td width="549">
              The World Water Day was duly observed and an online program there
              off was conducted.
            </td>
          </tr>
          <tr>
            <td width="164">23 March 2021</td>
            <td width="549">
              The birthday of beloved principal Dr sister Alice Thomas was
              celebrated jovial e during the morning assembly through a special
              prayer song thought of the day and presentation of a beautiful
              greeting card and birthday greetings by the director. The day was
              for the celebrated by all the faculty members in the presence of
              the director and principal through an informal program followed by
              lunch.
            </td>
          </tr>
          <tr>
            <td width="164">24 March 2021</td>
            <td width="549">
              The career skills development and placement committee organise a
              webinar to commemorate global money week. The department of
              science scheduled a presentation by the students on innovation of
              scientist as a part of science club activity.
            </td>
          </tr>
          <tr>
            <td width="164">25 March 2021</td>
            <td width="549">
              The career skills development and placement committee e arranged
              and Summer Internship programs with Bajaj Finance from 1st April
              230 1st mein.
            </td>
          </tr>
          <tr>
            <td width="164">26 March 2021</td>
            <td width="549">
              The department of Commerce organised and essay writing competition
              for all the first year Commerce students on the topic second wave
              of covid-19 India. Internet a boon or bane for women empowerment
              and disaster management. The faculty and teaching faculty program
              was conducted by Department of Science on solar energy system
              logical reasoning and brainstorming activity.
            </td>
          </tr>
          <tr>
            <td width="164">27 March 2021</td>
            <td width="549">
              the department of Commerce organised a career assessment test in
              Association with UPS University Dehradun
            </td>
          </tr>
          <tr>
            <td width="164">3 March 2021</td>
            <td width="549">
              The department of computer science organised and online debate
              competition on the topic social media has improved human
              communication. The gender Champions club conducted an online
              program in anticipation of transgender day.
            </td>
          </tr>
          <tr>
            <td colspan="2" width="714">
              April 2021
            </td>
          </tr>
          <tr>
            <td width="164">1 April 2021</td>
            <td width="549">
              A special program was organised under the care of morning assembly
              committee to anticipate Good Friday and Easter celebration.
            </td>
          </tr>
          <tr>
            <td width="164">3 April 2021</td>
            <td width="549">
              The counseling and tutorial committee organised and online program
              on stress management technique
            </td>
          </tr>
          <tr>
            <td width="164">5 April 2021</td>
            <td width="549">
              The common class test for the BBA and BCA 2nd 4th and 6th semester
              student was conducted through to the college e care portal and
              continued till 10th April.
            </td>
          </tr>
          <tr>
            <td width="164">6 April 2021</td>
            <td width="549">
              The Christian students Association organised a spiritual
              celebration title the good news of Easter to commemorate the
              importance of Easter.
            </td>
          </tr>
          <tr>
            <td width="164">7 April 2021</td>
            <td width="549">
              The NCC committee conducted a social activity of mask distribution
              by the NCC cadet in their vicinity area. The NSS committee
              observed World Health Day through an online program.
            </td>
          </tr>
          <tr>
            <td width="164">8 April 2021</td>
            <td width="549">
              The department of science organise a group discussion on
              e-Learning pros and challenges.
            </td>
          </tr>
          <tr>
            <td width="164">10 April 2021</td>
            <td width="549">
              The career skills development and placement committee organised a
              session on resume building.
            </td>
          </tr>
          <tr>
            <td width="164">12 April 2021</td>
            <td width="549">
              The department of computer science conducted and aluminized
              sharing session on admission process for PG courses and recent
              trends in computer science.
            </td>
          </tr>
          <tr>
            <td width="164">15 April 2021</td>
            <td width="549">
              The department of Commerce organised a poster making competition
              for all the BCom students the department of Humanities organised
              and online group discussion on students life and patience.
            </td>
          </tr>
          <tr>
            <td width="164">19 April 2021</td>
            <td width="549">
              The gender Champions club organised a poster making competition on
              gender roles during lockdown be responsible stop the spread.
            </td>
          </tr>
          <tr>
            <td width="164">24 April 2021</td>
            <td width="549">
              The department of Commerce organised faculty and teaching faculty
              program on the topic sleep is commerce the session was taken by
              professor Ashish&apos;s Ushi and Prof Tanisha Dalal.
            </td>
          </tr>
          <tr>
            <td width="164">22 April 2021</td>
            <td width="549">
              The department of Commerce organised and online workshop on e
              filing of passport.
            </td>
          </tr>
          <tr>
            <td width="164">23 April 2021</td>
            <td width="549">
              The library committee and morning assembly committee organise a
              special online program to commemorate world book day.
            </td>
          </tr>
          <tr>
            <td width="164">28 April 2021</td>
            <td width="549">
              The language lab committee organised a special session on some
              fastest way of language acquisition.
            </td>
          </tr>
          <tr>
            <td width="164">29 April 2021</td>
            <td width="549">
              The department of Humanities organised a gas talk on substance and
              drug abuse among youth and its impact on health.
            </td>
          </tr>
          <tr>
            <td colspan="2" width="714">
              May 2021
            </td>
          </tr>
          <tr>
            <td width="164">1 May 2021</td>
            <td width="549">
              The music committee organised assertion on vocal exercises for
              strengthening vocal cords.
            </td>
          </tr>
          <tr>
            <td width="164">3 May 2021</td>
            <td width="549">
              The Priya University examination for the students of BCom BA and
              BSc first year students along with BBA and BCA even semester
              classes begin. The photography and PowerPoint committee organise a
              photography competition on the occasion of Mother&apos;s Day. A 15
              days yoga workshop in Association with Research Foundation of
              India commenced the session was taken by DrAvinash Yadav the
              sports officer.
            </td>
          </tr>
          <tr>
            <td width="164">5 May 2021</td>
            <td width="549">
              The Display Board committee organised a digital collage making
              competition on my journey and memories this year.
            </td>
          </tr>
          <tr>
            <td width="164">6 May 2021</td>
            <td width="549">
              The NCC committee organised a poster making competition on
              coronavirus.
            </td>
          </tr>
          <tr>
            <td width="164">7 May 2021</td>
            <td width="549">
              The NCC and NSS committee conducted and awareness programme
              against Corona and prepare videos to spread awareness.
            </td>
          </tr>
          <tr>
            <td width="164">8 May 2021</td>
            <td width="549">
              The sports committee organise and inter departmental quiz
              competition.
            </td>
          </tr>
          <tr>
            <td width="164">9 May 2021</td>
            <td width="549">
              The Staff Association in coordination with the Research Foundation
              of India organise a one day workshop on power of prayers and Faith
              the resource person was father Job Kozhamthadom.
            </td>
          </tr>
          <tr>
            <td width="164">10May 2021</td>
            <td width="549">
              The women and Child Protection committee organised a session on
              MahilaSammanAbhiyan.
            </td>
          </tr>
          <tr>
            <td width="164">11 May 2021</td>
            <td width="549">
              The language committee organised are funny online English language
              game.
            </td>
          </tr>
          <tr>
            <td width="164">12 May 2021</td>
            <td width="549">
              The department of computer science organised a webinar on emerging
              technologies used in the area of Computer Science and application.
              The department of science organised and interaction with element
              on career opportunities in the field of statistics the department
              of Humanities organised and activity e titled mind gym mental
              health and fitness.
            </td>
          </tr>
          <tr>
            <td width="164">13 May 2021</td>
            <td width="549">
              The counseling and tutorial committee organised a guest talk on
              career planning technique with the spipseluminous MS Amita Singh
              have the resource person. The department of management organised
              and Alumina interaction on the topic initiate to exceed by the
              spipsaluminiMrsrajal Jain.
            </td>
          </tr>
          <tr>
            <td width="164">15 May 2021</td>
            <td width="549">
              The department of Commerce organised and international webinar on
              importance of Health Care Services with MrBhaskar Tare
              SuvarnaNazar Cognizant Technology solution USA as the resource
              person. The gender Champions club organised a session on health
              and hygiene during pandemic the sports committee organise of 1
              minute video fitness talent on push ups and skipping that lasted
              till 30th May.
            </td>
          </tr>
          <tr>
            <td width="164">17 May 2021</td>
            <td width="549">
              The Christian students Association organise a discussion on the
              theme hope through the word of god as a part of online
              entertainment inter class solo singing competition for all the
              first year students was conducted.
            </td>
          </tr>
          <tr>
            <td width="164">18 May 2021</td>
            <td width="549">
              The library committee organised at general quiz competition the
              career skills development and placement committee organised a
              session on the topic effective usage of LinkedIn. The department
              of Humanities organise a session on share your inspirational story
              as a part of online entertainment inter class solo singing
              competition was held for the second year students.
            </td>
          </tr>
          <tr>
            <td width="164">19 May 2021</td>
            <td width="549">
              Are training program in collaboration with Research Foundation of
              India on the topic art of writing research paper methods and
              solution was conducted. The program ended on 25th May as a part of
              online entertainment inter class solo singing competition for all
              the third year students was conducted.
            </td>
          </tr>
          <tr>
            <td width="164">20 May 2021</td>
            <td width="549">
              The department of management organised a session on spips&apos;
              BBA Corona Warriors as a part of online entertainment the finale
              of solo singing competition was conducted.
            </td>
          </tr>
          <tr>
            <td width="164">21 May 2021</td>
            <td width="549">
              The college in collaboration with the Research Foundation of India
              and Shri Vaishnav College of Commerce organised a 7 days faculty
              development programme on research  methodologyDr Ravi Vyas was the
              resource person for the same. On the day 5 the department of
              computer science and Science jointly organised a session on open
              book exam tips. The NCC committee organised a short video making
              competition for the NCC cadets as a part of online entertainment
              the inter class cartooning  and elocution competitions were
              conducted for all the first year students.
            </td>
          </tr>
          <tr>
            <td width="164">22 May 2021</td>
            <td width="549">
              The counseling and tutorial committee along with the department of
              Humanities organised are there Bina on how to overcome grief and
              anxiety with Archana Sharma psychologist and Counselor was a
              resource person as a part of online entertainment the elocution 
              and cartoon in competition competitions were conducted conducted
              for all the second year students. As a part of of online
              entertainment the fashionable ramp walk competition was conducted
              for all the first second and third year students.
            </td>
          </tr>
          <tr>
            <td width="164">24 May 2021</td>
            <td width="549">
              As a part of of online entertainment allocation and cartooning
              competition for all the third year students was conducted.
            </td>
          </tr>
          <tr>
            <td width="164">25 May 2021</td>
            <td width="549">
              The department of science organised and activity title
              entertainment and fun.
            </td>
          </tr>
          <tr>
            <td width="164">26 May 2021</td>
            <td width="549">
              A special session for the students of BBA for semester was taken
              in order to help them choose the specialisation field.
            </td>
          </tr>
          <tr>
            <td width="164">27 May 2021</td>
            <td width="549">
              The department of Humanities organised and interactive alumini
              guest lecture on the topic preparation for UPSC competitive exams
              as a part of online entertainment. The finals of cartooning and
              elocution competition were conducted.
            </td>
          </tr>
          <tr>
            <td width="164">28 May 2021</td>
            <td width="549">
              As a part of online entertainment the collage making competition
              and Debate competition was conducted for the first year students.
            </td>
          </tr>
          <tr>
            <td width="164">29 May 2021</td>
            <td width="549">
              The faculty in reaching faculty session was organised by the
              department of computer science on the theme digital well-being
              with 5G. The NCC committee observed the world No Tobacco Day
              through a special program as a part of online entertainment the
              collage making and debate competition was held for all the second
              year students.
            </td>
          </tr>
          <tr>
            <td width="164">30 May 2021</td>
            <td width="549">
              The department of Humanities organised and international webinar
              on menstrual health awareness Breaking the Taboo.
            </td>
          </tr>
          <tr>
            <td width="164">31 May 2021</td>
            <td width="549">
              As a part of online entertainment collage making and Debate
              competition were held for all the third year students.
            </td>
          </tr>
        </tbody>
      </table>
      <table className="w-100">
        <tbody>
          <tr>
            <td colspan="2" width="850">
              June 2021
            </td>
          </tr>
          <tr>
            <td width="194">1 June 2021</td>
            <td width="654">
              The career skills development and placement committee organised
              expert talk on what next guidance for career advancement after
              graduation as a part of online entertainment. The final
              competition of collage making and debate was held.
            </td>
          </tr>
          <tr>
            <td width="194">2 June 2021</td>
            <td width="654">
              The department of Commerce organised at two days workshop on a
              right investment share market and mutual funds on 2nd and 3rd June
              the session was taken by student representative message
              SachinPrajapati the NCC committee organised a group counselling
              session for the NCC cadets on the topic covid-19 psychology
              kalbehaviour interpersonal effects and clinical implications.
            </td>
          </tr>
          <tr>
            <td width="194">3 June 2021</td>
            <td width="654">
              The publications committee organised Hindi news reading
              competition. The department of computer science conducted 5 days
              mock Viva session on project.
            </td>
          </tr>
          <tr>
            <td width="194">4 June 2021</td>
            <td width="654">
              The department of computer science organise a discussion on Corona
              pandemic and black fungus. The photography and PowerPoint
              committee organised on mean making competition on the theme life
              in Quarantine City unblocked. The Display Board committee
              organised a drawing competition on showcasing your talent.
            </td>
          </tr>
          <tr>
            <td width="194">5 June 2021</td>
            <td width="654">
              An international virtual conference on intellectual property
              rights and contemporary issues in innovation ecosystem
              environmental and sustainable development was organised in
              collaboration with the Research Foundation of India the inaugural
              session was graced by the chairman most Reverend Dr 6 kotham
              Oracle and guest of honourDr S K Somani as Vice Chancellor Medical
              University professor doctor Pawan Kumar Jain Vice Chancellor and
              chairman Eklavya University MS Mira Hashmi management consultant
              CMD Government of Kerala thereafter the paper presentation and
              Technical session was held the valedictory session was conducted
              to culminate. The conference the NSS and morning assembly
              committee organised a celebration on the occasion of world
              environmental day.
            </td>
          </tr>
          <tr>
            <td width="194">7 June 2021</td>
            <td width="654">
              A 5 days student development program was organised in Association
              with the Research Foundation of India the department of management
              organisedNaveena on understanding mind body and soul with Ms Neha
              lunia freelance Counselor and life quotes as the resource person.
            </td>
          </tr>
          <tr>
            <td width="194">8 June 2021</td>
            <td width="654">
              The department of science organised a webinar on classification
              and working mechanism of nuclear weapons. The department of
              Humanities organised a faculty and teaching faculty program on the
              topic importance of maintaining relationship. The Christian
              students Association organise a session to see God&apos;s
              blessings and wisdom for good preparation of open book exam. The
              career skills development and program committee organise a Debina
              on opportunities in government job and its preparation.
            </td>
          </tr>
          <tr>
            <td width="194">10 June 2021</td>
            <td width="654">
              The as a part of internal Quality Assurance cell initiative and
              invited talk on how to protect against third wave of covid-19 was
              organized.
            </td>
          </tr>
          <tr>
            <td width="194">11 June 2021</td>
            <td width="654">
              The women and Child Protection committee organised an experience
              sharing session on the topic I am the responsible person to my
              family.
            </td>
          </tr>
          <tr>
            <td width="194">12 June 2021</td>
            <td width="654">
              The department of Commerce organised a workshop on e-Filing of
              driving licence. The career skills development and placement
              committee organise a mock placement drive for the final year
              students. Sports Commityorganise a guest talk on Chak De India
              with Mr Mir Ranjan Negi International Hockey player and coach as a
              resource person. The gender Champions club organise a slogan
              writing competition on the theme domestic violence.
            </td>
          </tr>
          <tr>
            <td width="194">14 June 2021</td>
            <td width="654">
              The language that committee organise a review writing competition
              on review your binge watch. The department of Humanities organise
              a group discussion on the topic health sector is the true defence
              of a nation.
            </td>
          </tr>
          <tr>
            <td width="194">15 June 2021</td>
            <td width="654">
              The NCCNSS committee organised at 7 days yoga workshop from 15th
              to 21st june. The NCC and NSS committee jointly organised a
              special programmeon the occasion of Blood donors Day.
            </td>
          </tr>
          <tr>
            <td width="194">16 June 2021</td>
            <td width="654">
              The department of science conducted an interactive element session
              on the topic career opportunities in the field of mathematics.
            </td>
          </tr>
          <tr>
            <td width="194">18 June 2021</td>
            <td width="654">
              As a big salute to the front line coronavirus Warriors the
              department of computer science organised a section titled
              experience sharing and conversation with coronavirus.
            </td>
          </tr>
          <tr>
            <td width="194">19 June 2021</td>
            <td width="654">
              The student welfare committee along with All the departments of
              the college organised and alumni meet the Alumina nmit it was
              highly appreciated by the element and it witnessed and to Z aztk
              participation to.
            </td>
          </tr>
          <tr>
            <td width="194">21 June 2021</td>
            <td width="654">
              The NCCNSS and morning assembly committee organised a special
              programme to mark the importance of international yoga day.
            </td>
          </tr>
          <tr>
            <td width="194">22 June 2021</td>
            <td width="654">
              Guest talk on preparation for competitive examination during
              graduation was organised by the department of Humanities. The
              department of computer science organise a brainstorming
              activities.
            </td>
          </tr>
          <tr>
            <td width="194">23 June 2021</td>
            <td width="654">
              The department of management organised the faculty in teaching
              faculty program on the topic effective usage of LinkedIn.
            </td>
          </tr>
          <tr>
            <td width="194">24 June 2021</td>
            <td width="654">
              The department of Commerce organised a webinar on stress
              management a key to success in business with Dr Ira Bapna director
              department of management Maharaja Ranjit Singh Group of
              Institution as resource person. The department of Humanities
              organise a fun game on riddles women and Child Protection
              committee organise a guest talk on topic women empowerment and
              domestic violence.
            </td>
          </tr>
          <tr>
            <td width="194">25 June 2021</td>
            <td width="654">
              The library committee organise a debate competition on books the
              best friend in lockdown. The department of management conducted a
              business plan competition.
            </td>
          </tr>
          <tr>
            <td width="194">26 June 2021</td>
            <td width="654">
              The sports committee organise a debate competition on the topic
              covid-19 has badly affected mental health of Indian players.
            </td>
          </tr>
          <tr>
            <td width="194">29 June 2021</td>
            <td width="654">
              The feast day of of Saint Paul and Saint Peter along with the
              feast day of the director Reverend father Simon Raj was overly
              celebrated a special program video presentation greetings on
              behalf of faculty and staff special song cake cutting special poem
              greetings by the principal were the key highlights of the program.
            </td>
          </tr>
          <tr>
            <td width="194"></td>
            <td width="654"></td>
          </tr>
        </tbody>
      </table>
    </>
  ),
  "Happenings 2019-20": (
    <>
      <table className="w-100">
        <tbody>
          <tr>
            <td width="189">01-07-2019</td>
            <td width="609">
              Welcome cum Orientation Program (Aagaz – 2019) was organized for
              the new batch of students 2019-20. The Orientation Program began
              with a special prayer followed by the address of the Principal,
              Dr. Sr. Alice Thomas. The lamp was lit by the Director, the
              Principal and the 9 first admissions of all the classes. The
              symphonic choir performed a melodious song. PowerPoint
              Presentation Phase I was presented by Dr. Goldie Zaki, Prof. Tapas
              Upadhyay and Prof. Aarti Patel focusing on the culture, rules and
              regulations of SPIPS, followed by a theme based skit and an
              energetic fusion dance. Powerpoint Presentation Phase II was
              presented by Dr. Sarita Rana, Prof. Shruti Pagare and Prof. Tapas
              Upadhyay. The Director addressed the parents and the students and
              also introduced the faculty and staff members. Annual Magazine
              “Luminous” of the college was released by the Director, Principal,
              Convener Dr. Ajay Patil and Prof. Tapas Upadhyay. Indo – western
              dance was performed by the Mystic Movers of SPIPS. The vote of
              Thanks was extended by Dr. Vishal Mehta. The program concluded
              with the College Anthem sung by the SPIPS Choir. Evaluation and
              Planning Meeting of the Department of Commerce was held in the
              A.V. Room with the Director and the Principal.
            </td>
          </tr>
          <tr>
            <td width="189">02-07-2019</td>
            <td width="609">
              Evaluation and Planning Meeting of the Department of Management
              was held in the A.V. Room with the Director and the Principal.
            </td>
          </tr>
          <tr>
            <td width="189">03-07-2019</td>
            <td width="609">
              Evaluation and Planning Meeting of the Department of Humanities
              was held in the A.V. Room with the Director and the Principal. A
              session on “The best use of Library” was conducted by the
              Librarian, Mrs. Shilpa Dhoble for the first year students which
              concluded on 5<sup>th</sup> July
            </td>
          </tr>
          <tr>
            <td width="189">04-07-2019</td>
            <td width="609">
              Evaluation and Planning Meeting of the Department of Computer
              Science was held in the A.V. Room with the Director and the
              Principal. The birthday of Mrs. Varsha Emmanuel was celebrated
              during the Morning Assembly.
            </td>
          </tr>
          <tr>
            <td width="189">05-07-2019 :</td>
            <td width="609">
              Evaluation and Planning Meeting of Department of Science was held
              in the A.V.Room with the Director and the Principal.
            </td>
          </tr>
          <tr>
            <td width="189">06-07-2019 :</td>
            <td width="609">
              Publication Committee organized an Article Writing Competition on
              the topic “My first day of college” in the library at 11:00 a.m.
              Evaluation and Planning Meeting of the Department of Physical
              Education was held in the A.V.Room with the Director and the
              Principal.
            </td>
          </tr>
          <tr>
            <td width="189">08-07-2019 :</td>
            <td width="609">
              Department of Commerce organized a Guest Lecture on “Current
              Banking Scenarios” at 10:00 a.m. in the Seminar Hall. The resource
              person was Mr. Jose Anthony, General Manager, South Indian Bank.
              The practice of the X Foundation cum Freshers’ Talent Show Day
              commenced. The birthday of Dr. Arvind Jain was celebrated during
              the Morning Assembly. Special English class commenced for a period
              of 15 days for the interested students.
            </td>
          </tr>
          <tr>
            <td width="189">09-07-2019:</td>
            <td width="609">
              Classroom Presentation on “Makhanlal Chaturvedi – Ek Parichaya”
              and “The second important phase of my life : The college life” was
              organized by B.A. – I Year. An ice breaking session “Getting to
              know each other” was organized by B.Com. (Hons.) “A” I Year. The
              NCC Committee organized a rally for “Awareness of Pollution” along
              with the NCC Cadets of St. Paul and St. Arnold’s School.
            </td>
          </tr>
          <tr>
            <td width="189">10-07-2019 :</td>
            <td width="609">
              Classroom Presentation on the topic “Lack of Practical Education –
              A Challenge before Youth” was organized by B.Com. (F.T.) – I Year.
            </td>
          </tr>
          <tr>
            <td width="189">11-07-2019 :</td>
            <td width="609">
              Classroom Presentation on “The case studies of Asian Paints and
              Pizza Hut” was organized by B.Com. (F.T.) – I Year. The birthday
              of Prof. Deepa Muley was celebrated during the Morning Assembly. 9
              NCC cadets performed a Nukkad Natak at The Holkar Science College
              for the Closing Ceremony of “Pollution Awareness Pakhware”.
              Classroom Presentation on “Makhanlal Chaturvedi – Ek Parichay” was
              organized by B.Com. (C.A.) – I Year. Classroom Presentation on
              “Stars, Stars and more shiny stars of all kinds – Students core
              interest and hidden talents” was organized by B.B.A. “B” – I Year.
            </td>
          </tr>
          <tr>
            <td width="189">12-07-2019 :</td>
            <td width="609">
              Classroom Presentation on the topic “Graduation : The next step”
              was organized by B.Sc. – I Year.
            </td>
          </tr>
          <tr>
            <td width="189">13-07-2019 :</td>
            <td width="609">
              The Department of Physical Education organized a presentation and
              practical session on “Yoga for Quality of Life and Health”. The
              introduction of the topic and welcome was taken care by Dr.
              Rafique Khan and the presentation on the same was given by Dr.
              Avinash Yadav. A practical session followed the presentation and
              the Director, the Principal  and all the faculty members actively
              participated in it. The Director and the Principal shared their
              views and a feedback session was held. The Vote of Thanks was
              delivered by Dr. Rafique Khan. The birthday of Dr. Avinash Yadav
              was celebrated during the morning assembly. The Principal, Dr. Sr.
              Alice Thomas visited The Holy Convent School, Pipliyakumar as the
              Chief Guest at their Investiture Ceremony. A special meeting of
              all the Committees was conducted individually with the Director
              and the Principal in the Director’s office.
            </td>
          </tr>
          <tr>
            <td width="189">15-07-2019 :</td>
            <td width="609">
              The Director introduced and welcomed Prof. Siji K. Sunny with a
              bouquet, who joined as an Assistant Professor in the Department of
              Humanities. The birthday of Mr. Ramesh Marabi was celebrated
              during the Welcome cum Orientation Program. Classroom Presentation
              on the topic “Interaction with Computer System” was organized by
              B.Com. (C.A.) – I Year]. The 2<sup>nd</sup> and 3<sup>rd</sup>{" "}
              year NCC students visited the Police Training School for firing
              practice. The Welcome cum Orientation Program was organized for
              the 2<sup>nd</sup> , 3<sup>rd</sup> year and PG students. Class
              Presentation on the topic “Role of Economics in Decision Making”
              was organized by B.B.A. “B” – I Year.
            </td>
          </tr>
          <tr>
            <td width="189">16-07-2019 :</td>
            <td width="609">
              Classroom Presentation on the topic “Artificial Intelligence” was
              organized by B.C.A. – I Year. Annual Meet of Christian Students
              Association was organized for the first year Christian students.
              Class Presentation on the topic “Group Discussion on : Necessity
              of Educational Qualification for Politicians” was organized by
              B.Com. (Plain) I Year. Prof. Manoj Dathan M. joined SPIPS as an
              Assistant Professor in the Department of Humanities. He was
              introduced and greeted with a bouquet by the Director and the
              Principal respectively during the Morning Assembly. Class
              Presentation on the topic “Debate : Traditional v/s Modern
              Educaqtion System” was organized by B.Com. (Tax) – I year.
            </td>
          </tr>
          <tr>
            <td width="189">17-07-2019 :</td>
            <td width="609">
              Class Presentation on the topic “Debate – Impact of Social Media
              on Youth” was organized by B.Com. (Hons.) “A” – I Year. The
              Inaugral Activity of Commerce Club for the Academic Year 2019 -20
              was organized on the topic “E – Application of Driving License”.
              Classroom Presentation on the topic “Information Technology” was
              organized by B.B.A. – I Year. Language Lab committee organized a
              Creative Reading Competition in the A.V.Room. Classroom
              Presentation on the topic “Effects of Social Media on Youth” was
              organized by B.Com. (Hons.) “B” – I Year. The birthday of Mrs.
              Parul David was celebrated during the morning assembly. NSS
              Orientation program for the 1<sup>st</sup> Year NSS Volunteers was
              organized in the seminar hall. Students were informed about NSS
              and their duties and experience was shared by the senior
              volunteers. Class presentation on the topic “Story telling” was
              organized by B.Com (Tax)-I Year.
            </td>
          </tr>
          <tr>
            <td width="189">18-07-2019 :</td>
            <td width="609">
              New session began for BBA and BCA II &amp; III Year students. A
              Guest lecture on “Career Opportunities in Defence for NCC Cadets”
              was delivered by Col. Atul Mishra and Captain Surendra Singh in
              the seminar hall.
            </td>
          </tr>
          <tr>
            <td width="189">19-07-2019 :</td>
            <td width="609">
              A Seminar was organized by the Display board committee on “Making
              the Display Board Attractive”. The physical fitness test was
              conducted for the 1<sup>st</sup> Year NCC Cadets in the
              Auditorium. The Issue of Library Cards for the 1<sup>st</sup> Year
              students began, which was undertaken over a period of 3 days
              during class hours class wise. Classroom presentation on the topic
              “Is Co-education needed in today’s scenario” was organized by
              B.Com (Plain)-II Year.
            </td>
          </tr>
          <tr>
            <td width="189">20-07-2019 :</td>
            <td width="609">
              B.Com (Tax) - I Year students visited Ralamandal Kakad as their
              social activity for conducting a demographic survey of the area.
              Classroom Presentation of B.Com. (Hons.) III Year on the topic
              “Tik Tok should be banned in India or not”. Classroom Presentation
              of B.Com. (Tax) III Year on the topic “Extempore Competition on
              Taxation Terminology”. B.Com. (C.A.) II Year visited Indore
              Railway Station for their social activity. They helped the
              passengers carry their baggage and spread awareness about the
              drawbacks of using plastics and motivated people to stop its use.
              B.Com. (P) I Year visited Arunabh Inclusive School, Pragati Park,
              Indore.The students planted trees and painted a wall themed
              “Nature”. B.Com. (P) III Year Took up the activity of making “Beej
              Bombs” for their social activity which were targeted at nearby
              areas. Class Presentation was organized by B.B.A. II Year on the
              topic “Discussion and Experience sharing on current themes”. Class
              B.A. I Year performed skit on various topics such as “Swacch
              Bharat, Swasth Bharat”, Role Play – Don’t follow the trends
              blindly, Role Play – Evil practices in Society and Advertisement
              Act – Bright floor mopper.” B.Com. (Tax) III year students
              undertook the social activity of Plantation at Bijasan Tekri.
              Classroom Presentation of B.B.A. II year on the topic “Extempore
              on various topics”. B.Com. (Hons.) “B” II Year conducted the
              social activity of Paper Bag making and Distribution. The paper
              bags were made and distributed to the local vendors. B.C.A. II
              Year distributed fruits in the slum areas as their social
              activity. B.Com. (C.A.) I Year visited the Geeta Bhawan Hospital
              for their social activity and distributed fruits and cookies to
              the patients. B.Com. (F.T.) II Year organized classroom
              presentation on the topic “Digital Marketing”. B.C.A. I year
              students visited Nirashrit Old Age Home for their social activity.
              They interacted with the elderly and distributed fruits. B.Com
              (Plain)-II Year visited The Vishesh Gruh Balika and serve food and
              spent quality time with the people. B.Com (Hons.)-“A” I Year
              conducted a social activity on Traffic Awareness and reminded the
              public about the traffic rules. The department of science
              organized a National Science Symposium on “Science : Opportunities
              and Challenges.” The programme began with the prayer followed by
              welcome address and floral welcome by the principal. The Chief
              guest was Ms. Tessy Thomas, Director General, DRDO. She took a
              session for the students of SPIPS, St. Paul School, St. Raphael’s
              School and St. Arnold’s School.
            </td>
          </tr>
          <tr>
            <td width="189">21.07.2019 :</td>
            <td width="609">
              NCC Cadets and NSS volunteers along with faculty members
              participated in the Taxathon 2019 “A walk on Income Tax day”
              starting from Nehru Stadium Indore.
            </td>
          </tr>
          <tr>
            <td width="189">22-07-2019 :</td>
            <td width="609">
              The department of Computer Science conducted the Inaugral activity
              of IT Club on the topic “Introduction to Social Media Security.”
              The resource person for the same was Prof. Gourav Rawal. B.Com
              (Plain) III Year organized a classroom activity on the topic
              “Career Opportunities after graduation.” B.C.A. III Year conducted
              a classroom activity on the topic “Discussion on Depression.”
            </td>
          </tr>
          <tr>
            <td width="189">23-07-2019 :</td>
            <td width="609">
              The department of Commerce organized an activity for the tax
              procedure group on “Shining Diamond Dealer took away PNB’s Shine”.
              The department of management organized the Inaugural activity of
              the SPIPS management association. on the theme “Scope of
              Management” and the resource person was Mr. Parakram Chaube. B.Com
              (Hons.) “B” I Year visited Jyoti Niwas Indore, an old age home,
              for their Social Activity. B.B.A. “A” I Year conducted a classroom
              activity on the topic “Enhance the situational performance
              encompassing managerial skills”. B.Com (C.A.) III Year organized a
              classroom presentation on the topic “Recent trends on Web
              Technology among Society”. Department of Commerce organized a
              group activity for all the B.Com (Hons.) students on “Budget 2019
              : An Overview”.
            </td>
          </tr>
          <tr>
            <td width="189">24-07-2019 :</td>
            <td width="609">
              Class presentation of B.C.A. II Year on “Youth and Truth”. Class
              Presentation of B.Sc. II Year on “My learning and experiences at
              SPIPS”. Class Presentation of B.C.A. I Year on the topic “Debate –
              effect of internet among millennial generation”. Class
              Presentation of B.A. II Year on various topics. The Women and
              Child protection committee performed an activity on the “Awareness
              of Traffic rules and regulations”. They promoted the use of
              Helmets and Seat belts and motivated the students to follow
              traffic rules.
            </td>
          </tr>
          <tr>
            <td width="189">25-07-2019 :</td>
            <td width="609">
              Class presentation of B.Com (Plain) II Year on Water crisis. Class
              Presentation of B.Sc. III Year on “Hazards of Human Activities on
              Marine System”. Class Presentation of B.C.A. II Year on “Ban On
              Cell phone Usages in Colleges and Schools”. B.Sc. II Year visited
              The Railway Station for their social activity. Class Presentation
              of B.Com (Tax) III Year on Current Social Issues. The Birthday of
              Prof. Bhavana Sangamnerker was celebrated during the morning
              assembly.
            </td>
          </tr>
          <tr>
            <td width="189">26-07-2019 :</td>
            <td width="609">
              10<sup>th</sup> Foundation cum Fresher’s Talent Show day was
              organized in the auditorium. The programme began with the Prayer
              followed by the prayer song. The welcome address was delivered by
              the Principal. It was proceeded by the ceremonial Lightning of the
              Lamp. Vice Principal Dr. Vishal Mehta presented a presentation on
              10 years of growth of SPIPS. Various cultural performances were
              done by the students. The prizes were distributed to the regular
              students followed by the felicitation of the non-teaching staff.
              The Chief guest motivated and congratulated the students for their
              performances. The program concluded with the College Anthem sung
              by the student choir.
            </td>
          </tr>
          <tr>
            <td width="189">27-07-2019 :</td>
            <td width="609">
              Principal, Dr. Sr. Alice Thomas visited Palloti School, Indore as
              a Chief Guest for their Investiture ceremony. EVPM conducted in
              the Conference Hall.
            </td>
          </tr>
          <tr>
            <td width="189">29-07-2019 :</td>
            <td width="609">
              B.A. I Year visited the Deaf, Dumb and Blind school for their
              social activity and distributed stationary to the students.
              Department of Commerce organized a Group Activity for the all the
              Foreign Trade Students on the topic “Understanding Foreign Trade –
              Core Curriculum and Scope”. Class Room activity of B.Com (F.T.) II
              Year was conducted on the topic “Freedom Fighter of our Country”.
              Class Room activity of B.Com (Tax) II Year was organized on the
              topic “Positive and Negative Impacts of Bollywood”. Class activity
              of B.Sc. III Year was organized on the topic “Importance of
              Physics in life”. Class Room presentation of B.Com (Plain) III
              Year was conducted on the topic “Nukkad Natak on GST”. Department
              of Management organized A group activity for all the BBA Students
              on the topic “Business innovation : Asset Light Model”. B.A. III
              Year conducted Class presentation on various topics. B.Sc. III
              Year provided their services at Navlakha Bus Stand as their social
              activity. B.Com (F.T.) II Year conducted their Social Activity on
              Creating Awareness regarding the Usage of Paper Bag in Tilak Nagar
              and Kanadia Road. B.Sc. II Year Performed their Class room
              Activity on the topic “Current scenario of Education System”.
              Intra Departmental Faculty Enriching Faculty was organized by the
              department of Humanities on the topic “Social Values, Mannerism in
              light of Modern Era”. B.Sc. I Year visited Day Care School for the
              differently abled children as their social activity.
            </td>
          </tr>
          <tr>
            <td width="189">30-07-2019 :</td>
            <td width="609">
              NSS Committee organized a Guest lecture on “Importance of NSS in
              Student’s Life” in two phases. Phase I included a workshop on
              making compost at home taken by Prof. Tapas Upadhyay. Phase II
              began with a prayer followed by the Welcome and Introduction. The
              Chief Guest, Dr. Sachin Sharma, NSS Co – Ordinator, Indore
              addressed the gathering. Intra Departmental Faculty Enriching
              Faculty of the Department of Computer Science was organized on the
              topic “Latest trends in Teaching Learning”. Intra Departmental
              Faculty Enriching Faculty of the Department of  Science was
              organized on the topic “Effect of Social Media on Student’s Life”.
              Intra Departmental Faculty Enriching Faculty of the Department of 
              Management was organized on the topic “Role of Spirituality and
              Spiritual Practices in Education”. Classroom presentation of
              B.Com. (Hons.) “A” – I Year was organized on the topic “History of
              Management”. B.A. II Year visited the slum areas of Bhawarkun and
              Railway Station as a part of their social activity and distributed
              fruits over there. B.C.A. III Year students undertook the activity
              of “Spreading Awareness about Rainwater Harvesting”. B.B.A. “B” I
              year undertook a traffic awareness programme at the Geeta Bhawan
              Square as their social activity and the students distributed
              chocolates and awareness cards. B.Com (Hons.) III Year made a
              class presentation on “A documentary on World War – II :
              Strategies and Application”. Department of Commerce organized A
              Group activity for the B.Com (Plain) students involving
              communication and team building games. B.Com (Hons.) “B” II Year
              conducted a presentation on a topic “Stories with moral values”.
              B.A. III Year students visited Navlakha Bus Stand and helped the
              passengers and distributed fruits and water. B.C.A. II Year made a
              class presentation on “Early birds v/s Night Owls”. B.Com (C.A.)
              III Year provided their services at the bus stand for their social
              activity. B.Com (C.A.) II Year organized a Class presentation on
              “Internet and E-commerce”. NSS Committee conducted an assembly
              programe on the theme “Water Harvesting and Energy Conservation
              Practices”.
            </td>
          </tr>
          <tr>
            <td width="189">31-07-2019 :</td>
            <td width="609">
              B.Com (Hons.) “B” II Year organized a class presentation on “India
              and its neighbors”. B. Com (C.A.) II Year conducted a class
              presentation on “Group Discussion : Five years of Modi
              Government”. Class room presentation B.Com (C.A.) III Year was
              organized on “My aspirations, My dreams”. A workshop on self
              defense was organized in the seminar hall. The resource person for
              the same was Dr. Divya Gupta, President, Jwala Mahila Samiti and a
              renowned Gynaecologist. Class presentation of B.Com (Hons.) “B” II
              Year conducted on the topic “Career in finance”. Language Lab
              committee organized A Spell Bee Competition. Class presentation of
              B.B.A. II Year on the topic “Case study on JIO”. B.B.A. III Year
              students conducted an Environmental Awareness Programme –
              Plantation for their social activity. Intra Departmental Faculty
              Enriching Faculty was conducted by the department of Commerce on
              the theme “Sharing the Subject Knowledge”. B.B.A. II Year students
              provided their services at Railway Station as their social
              activity. B.Com (F.T.) III Year students provided their services
              at Robert Nursing Home as their social activity. B.B.A. “A” I Year
              students visited the Gram Chitawad and carried out an
              Anti-Polythene awareness rally and A session on the importance of
              Compost Manure.
            </td>
          </tr>
          <tr>
            <td width="189">01-08-2019 :</td>
            <td width="609">
              Departmental Meeting of the Department of Commerce with the
              Director and the Principal was organized in the Conference Hall.
            </td>
          </tr>
          <tr>
            <td width="189">02-08-2019 :</td>
            <td width="609">
              Departmental Meeting of the Department of Management with the
              Director and the Principal was organized in the Conference Hall.
              The Birthday of Dr. Ravi Vyas was celebrated during the morning
              assembly. He was greeted with a sapling and a greeting card by the
              Director and the Principal respectively. Class Presentation of all
              the B.A. Classes was conducted. B.Com. (Plain) III Year students
              provided their services at the Gangwal Bus Stand as their social
              activity. Classroom Presentation of B.Sc. I year was organized on
              the topic “Self Awareness”. Department of Humanities organized a
              Guest Lecture on Competitive Exams. The Resource Person for the
              same was Mrs. Aarima Sariya.
            </td>
          </tr>
          <tr>
            <td width="189">03-08-2019 :</td>
            <td width="609">
              B.Com. (Tax) II Year students undertook a Paper Bag Making
              Activity. Class Presentation of B.Com. (Tax) II year was conducted
              on the topic “Advantages, Disadvantages and Safety Measures for
              using on the door services”. Class Presentation of B.Com. (Hons.)
              III year was organized on the topic “Live – in relationship :
              Should it be allowed in India or not?”. Class Presentaion of
              B.Com. (C.A.) III Year was organized on the topic “Discussion on
              Anger Management”. B.Com. (Hons.) III Year students distributed
              sweets and fruits at Shakuntaladevi Hospital as their social
              activity. Classroom Presentation of B.B.A. “B” I Year was
              undertaken on the topic “Conquering stage fear through Extempore”.
              The birthday of Dr. Sandeep Raghuvanshi was celebrated during the
              morning assembly. Departmental Meeting of the Department of
              Humanities with the Director and the Principal was conducted in
              the Conference Hall. NCC Committee organized a social visit for
              the NCC Cadets to a Blind School as their social activity. Class
              Presentation of B.C.A. III Year was organized on the topic “How to
              fix a dysfunctional family?”. B.B.A. III Year conducted a social
              cause campaign on Water Harvesting. B.C.A. II Year provided their
              services at the Indore Railway Station. B.Com. (Plain) II year
              undertook a Paper Bag Making Activity as their social activity.
              Class Presentation of B.Com. (F.T.) II Year was organized on the
              topic “National Cadet Corps (NCC) : Its Benefits and Career
              opportunities”. Class Presentation of B.Com. (Tax) III Year was
              organized on the topic “Round table Discussion on Aspiration of
              Today’s Youth”. B.Com. (C.A.) I Year conducted a cleanliness drive
              at Shivaji Vatika as their social activity. Class Presentation of
              B.Sc. I Year was organized on the topic “Traditional V/S Modern
              Educational System”. B.Sc. II Year students undertook the activity
              of Paper Bag making and distribution. Class Presentation of B.C.A.
              I year was conducted on the topic “Extempore on Current Affairs”.
              Class Presentation of B.B.A. “A” I year  was conducted on the
              topic “Let us interact : Group Discussion”. Class Presentation of
              B.Sc. III Year was conducted on the topic “Career after
              Graduation”. B.A. I Year conducted a Health and Hygiene Awareness
              Programme in Lalaram Nagar.
            </td>
          </tr>
          <tr>
            <td width="189">05-08-2019 :</td>
            <td width="609">
              II Phase for Special English Class began. Departmental Meeting of
              the Department of Computer Science with the Director and the
              Principal. A Guest Lecture was organized for B.Com. (P) I, II and
              III year students on the topic “Present Economic Scenarios”. The
              resource person for the same was Dr. Kiran V. Panchal.
            </td>
          </tr>
          <tr>
            <td width="189">06-08-2019 :</td>
            <td width="609">
              The Birthday of Mr. Robert Anthony was celebrated during the
              Morning Assembly. Departmental meeting of the Department of
              Science was held with the Director and the Principal. Class
              Presentation of B.A. II year was conducted on the topic “Sarv
              Dharm Sambhav”. A Guest lecture for all the B.Com. (F.T.) classes
              was organized on “Scope of Foreign Trade”. The resource person was
              Mr. Pramod Sahu. Class Presentation of B.Com. (Hons.) “B” I Year
              was organized on the topic “Exploring more about our reading
              interest”.
            </td>
          </tr>
          <tr>
            <td width="189">07-08-2019 :</td>
            <td width="609">
              The selection of House wise Office Bearers was conducted at
              various venues. Departmental meeting of the Department of Physical
              Education was held with the Director and the Principal.
            </td>
          </tr>
          <tr>
            <td width="189">08-08-2019 :</td>
            <td width="609">
              The Birthday of Mrs. Anima Ekka was celebrated during the Morning
              Assembly. The elected house representatives were introduced during
              the Morning Assembly. Class Presentation of B.Com. (F.T.) I Year
              was organized on “Distress in Youth : Problems and Solutions”. A
              Guest Lecture on “Industrial Readiness” was organized for all the
              B.Com. (Hons.) classes. Ms. Devakshi Kalani, AVP, Finance
              Flexituff Int. Ltd. was the resource person. Class Presentation of
              B.Sc. II year was conducted on the topic “Media and its effects on
              the society”. Class presentation of B.A. III Year was conducted on
              the topic “ Article 370 and your thoughts”. A Guest Lecture on
              E-Commerce was organized for all the B.Com. (C.A.) classes. Mr.
              Amit Nasikkar, Entrepreneur, AVN Infotech was the resource person.
              Publication Committee organized a Poetry Writing Competition on
              “My Country, My Pride”.
            </td>
          </tr>
          <tr>
            <td width="189">10-08-2019 :</td>
            <td width="609">
              The Department of Computer Science organized a Faculty Enriching
              Faculty session on “Computer Revolution from Basics to Advance”.
              The 21<sup>st</sup> PPA Executive Committee Meeting was held with
              11 members in attendance. The Director proposed the agenda for the
              meeting. The election for the President and Vice President for the
              Academic Year 2019-20 was also held. NSS Volunteers participated
              in an Inter – College Singing Competition “Yaad Karo Kurbani”
              organized by Gujarati Innovative College and secured 2
              <sup>nd</sup> position. B.Com. (F.T.) II Year conducted a
              cleanliness survey and awareness programme at Sone ki Phel. The
              Birthday of Dr. Suvarna Lapalikar was celebrated during the
              Morning Assembly
            </td>
          </tr>
          <tr>
            <td width="189">11-08-2019 :</td>
            <td width="609">
              NCC Committee organized a Guest Lecture on Save the Environment
              Campaign for the NCC Volunteers.
            </td>
          </tr>
          <tr>
            <td width="189">13-08-2019 :</td>
            <td width="609">
              Morning Assembly volunteers were felicitated during the Morning
              Assembly. The NSS Volunteers secured 2<sup>nd</sup> position in
              the Group Singing Competition organized by Gujarati Innovative
              College. They won a cash prize of Rs. 1500.
            </td>
          </tr>
          <tr>
            <td width="189">14-08-2020 :</td>
            <td width="609">
              Hindi Dictation competition was organized by the Department of
              Humanities. The Birthday of Dr. Sarika Pandey and Mr. Sharad Uikey
              were celebrated during the morning assembly.
            </td>
          </tr>
          <tr>
            <td width="189">15-08-2019 :</td>
            <td width="609">
              The 73<sup>rd</sup> Independence Day was celebrated in two phases.
              The programme began with a special prayer followed by the flag
              hoisting. NCC Cadets performed a synchronized March Past. The
              Second Phase was organized in the Auditorium. Songs, Dance and
              Mime were presented as a part of the celebration. The house
              Captains were officially welcomed to their posts by the
              Investiture ceremony. The programme was concluded by the National
              Song followed by the distribution of sweets.
            </td>
          </tr>
          <tr>
            <td width="189">16-08-2019 :</td>
            <td width="609">
              Counselling and Tutorial Committee organized an Inter – House
              Poster making Competition on “Personality Development”. Class
              Presentation of B.C.A. II year was conducted on “Friends, Enemy or
              Frenemies”. Various Skill Development Classes like MPPSC, French
              Language, Advance Excel and Digital marketing. Class Presentation
              of B.Com. (Plain) I year was conducted on “Group Discussion : Who
              is performing better? India or Indians”. Class Presentation of
              B.Com. (Plain) II Year was conducted on “Preparation of Ad copy”.
            </td>
          </tr>
          <tr>
            <td width="189">17-08-2019 :</td>
            <td width="609">
              B.Com. (Tax) III year students visited the Chacha Nehru Children’s
              hospital and distributed fruits and biscuits. NSS Committee
              observed Plantation Day and organized a special assembly program
              in the morning assembly. They also conducted a plantation drive at
              the DAVV Guest House. A special meeting of the students with their
              house animators was conducted. B.Com. (C.A.) III Year visited the
              Blind School as their social activity. They also conducted an
              Environmental Awareness Programme by planting saplings at Bypass
              area. A special session on “Voice Practice Technique for Solo and
              Group Singing” organized for the SPIPS Choir. Class Presentation
              of B.Com. (Tax) I Year was organized on “Sharing views on impact
              of GST on Indian Economy”. Class Presentation of B.Com. (P) II
              year was conducted on Extempore. B.Com. (P) I year visited Jyoti
              Niwas, Indore and performed chores as their social activity.
              b.com. (C.A.) I Year organized a class presentation on “How can I
              contribute to the India of my dreams?”
            </td>
          </tr>
          <tr>
            <td width="189">19-08-2019 :</td>
            <td width="609">
              World Photography Day was observed in the morning assembly
              organized by the Photography and Powerpoint Committee. Language
              Lab Committee organized a Pictorial Grammar Session. B.A. II year
              organized a class presentation on “Should students enter
              politics?” The Science Club conducted a PPT presentation on
              “Scientists and their inventions”.
            </td>
          </tr>
          <tr>
            <td width="189">20-08-2019 :</td>
            <td width="609">
              NSS Committee organized a special morning assembly on the occasion
              of Sadbhavana Diwas. The Principal led a special oath taking
              ceremony on this occasion. The Birthday of Mr. Ankit Bhalrai was
              celebrated during the Morning Assembly. Inter House Arts and
              Literary Competitions begin. The events were – Cartooning, Collage
              making, Rangoli and Poster making. B.Com. (Hons.)”A” I year
              organized a class presentation on various topics. B.B.A. III year
              conducted an Environment Awareness Programme as their social
              activity. B.Sc. III year organized a class presentation on
              “Discussion on Article 370 and Article 35A”. Interview was
              conducted for the III year and Alumni students by Mrs. Archana
              Jain, Vice President, PPA. Trials of indoor games begin.
            </td>
          </tr>
          <tr>
            <td width="189">21-08-2019 :</td>
            <td width="609">
              Inter House Arts and Literary Competitions were conducted. The
              events for the day were Painting, Clay Modelling and Mehandi. B.A.
              III year conducted a class presentation on “The impact of
              terrorism on India’s economy”. B.Sc. II year conducted a class
              presentation on “Don’t limit your challenges, challenge your
              limits – Extempore”. B.Com. (Hons.) “A” II Year conducted a class
              presentation on “MUN – Environmental issues and innovation based
              solution”. B.B.A. “A” I year organized a class presentation on
              “Overcoming stage fear through Extempore”. Women and Child
              Protection Committee conducted a “Health and Hygiene Awareness
              Workshop”. Dr. Ritu S. Haripriya was the resource person.
            </td>
          </tr>
          <tr>
            <td width="189">22-08-2019 :</td>
            <td width="609">
              The birthday of Dr. Aarti Patel was celebrated during the Morning
              Assembly. Inter – House Badminton Competition (Men and Women)
              began. Inter House Arts and Literary Competitions conducted for
              the day were Debate, Elocution, Poetry recitation and Mimicry.
              Special Assembly was conducted by B.Com. (Hons.) “A” I year on the
              occasion of Janmashtami
            </td>
          </tr>
          <tr>
            <td width="189">24-08-2019 :</td>
            <td width="609">
              EVPM for the month of August was conducted in the conference hall.
              The intra – departmental FEF of the Department of Humanities was
              conducted on the theme “The growth of institute depends on the
              management or the faculty”. The intra – departmental activity of
              Management was conducted on the theme “The importance of skill
              development for students”.
            </td>
          </tr>
          <tr>
            <td width="189">26-08-2019 :</td>
            <td width="609">
              B.C.A. II Year organized a class presentation on “Cloud
              Computing”. B.Com. (C.A.) I Year was conducted on “Effects of
              Social Networking sites on youth”. Intra – departmental Faculty
              Enriching Faculty of the Department of Computer Science was
              conducted on “Programming Languages”. B.A. III year conducted a
              class presentation on “First World War and its effects on the
              society”. B.C.A. III year conducted a class presentation on
              “Mobile Addiction”. B.C.A. I Year organized a class presentation
              on “Effect of Chinese goods on Indian economy”. B.A. III year
              organized a class presentation on “Understanding media politics
              economy society inter relationship in India : Relevance of
              Habermas and Chomsky by Arani Basu”. The Department of Management
              organized a Poster and Model Making Competition cum Exhibition on
              the theme “India 2020 : A Paradigm shift in Indian Management”.
              Dr. Goldie Zaki and Dr. Arvind Jain attended the NAAC Seminar.
              B.Com. (C.A.) II Year conducted a class presentation on “Skit on
              Environmental Awareness”.
            </td>
          </tr>
          <tr>
            <td width="189">27-08-2019 :</td>
            <td width="609">
              The Gender Champions Club organized a Guest lecture on Gender
              Equality. Dr. Praveen Shrivastava, a clinical psychologist was the
              resource person. B.B.A. II Year conducted a case study
              presentation “Nissan Motor Co. Ltd. : Building Operational
              Resilience” and “Operations management of Pepsico”. B.Com. (Hons.)
              “A” I year conducted a class presentation on “Child Abuse : A
              curse to the society”. Women and Child Protection Committee
              conducted a Traffic Awareness Activity at the college entrance.
              The Department of Commerce organized an Inter Collegiate Debate
              Competition “Sagesse 2019” on the theme “Abolition of Article 370
              beneficial for J &amp; K and Ladakh”. The Department of computer
              Science organized a Poster Exhibition cum Competition on the theme
              “Emerging trends in IT”. B.A. I Year students visited the Police
              Training School in Musakhedi under their industrial visit.
            </td>
          </tr>
          <tr>
            <td width="189">28-08-2019 :</td>
            <td width="609">
              B.Com. (Hons.) “B” I year conducted a cleanliness drive in Sone ki
              Phel. B.B.A. III Year organized a session on “Investment Guide for
              SPIPSians! Put your pocket money to work” as B.B.A. group
              activity. B.A. I year conducted a group activity. B.Sc. III Year
              provided their services at the M Y Hospital. B.Com. (Tax) II year
              students prepared paper bags and distributed in the Tilak Nagar
              Vegetable Market. B.Com. (Hons.) “A” I year students visited a
              differently abled children centre and distributed fruits and
              stationery. B.Com. (Plain), B.Com. (F.T.) and B.A. III year
              conducted a class presentation on “Extempore : Where there is a
              will, there is a way”. B.B.A. “A” I year conducted a traffic
              awareness program at the Agriculture College Square. B.Com. (F.T.)
              III Year conducted a class presentation on “Building a concrete
              CV”. B.Com. (Tax) I Year conducted a class presentation on “Anti
              Ragging Act”. Slogan writing and Painting competition was
              organized.
            </td>
          </tr>
          <tr>
            <td width="189">29-08-2019 :</td>
            <td width="609">
              The Department of Humanities organized a Guest Lecture on “Stress
              Management and Depression”. Ms. Neha Mulchandani was the resource
              person. Class Presentation of B.Com. (Hons.) III Year was
              conducted on the topic “Administrative Failures involved in Bhopal
              Gas Tragedy”. B.C.A. II year conducted a class presentation on
              “Career opportunities in IT”. B.Com. (C.A.) I Year conducted a
              class presentation on “Desktop Publishing”. The Department of
              Management organized a Guest Lecture on “New Dimensions
              inEntrepreneurship”. The resource person was Mr. Nikhil Nainani.
              Intra – Departmental FEF of the Department of Commerce was
              conducted on the topic “Sharing the Subject Knowledge – Phase II”.
              The Department of Computer Science organized a Guest Lecture on
              “Python”. The resource person for the same was Mr. Vilekh
              Adawadkar. The Department of Science organized a Guest Lecture on
              “Career Guidance in the field of Science”. Mr. Sanjay Chouhan was
              the resource person.
            </td>
          </tr>
          <tr>
            <td width="189">30-08-2019 :</td>
            <td width="609">
              B.Com. (C.A.) II year visited the Aanganwadi near Badi Gwaltoli
              and conducted a literacy program through games and donated
              stationery. Class Presentation of B.Com. (Hons.) “B” II Year was
              organized on the topic “Will Capital Sentence prevent from Mob
              Lynching?” and “Career Opportunities in Finance”. B.B.A. III year
              conducted a class presentation on “Knowledge sharing on importance
              of discipline in our professional and personal life” and “Heart
              Intelligent and Mind Emotional”. The CSA conducted a literacy
              program in two phases. The first phase was an orientation program
              in the chapel and the second phase in the Bicholi Kakad School.
              B.B.A. II year visited the Maa Anandmayi Ashram Orphanage for
              Mentally Challenged. The NCC Cadets visited the Geeta Bhawan
              Hospital and distributed fruits. The NSS Committee organized a
              workshop on “Making Eco –friendly Ganesha”. B.Sc. I Year and
              B.C.A. I year students visited the Police Radio Training School as
              their Industrial Visit. Department of Humanities organized a Mock
              Parliament in the Seminar Hall. Intra – Departmental FEF of the
              Department of Science was conducted on “Clean India Mission”.
            </td>
          </tr>
          <tr>
            <td width="189">31-08-2019 :</td>
            <td width="609">
              B.Com. (C.A.) II Year conducted a class presentation on “Article
              370”. B.Com. (C.A.) III year conducted a class presentation on
              “The power of positive thinking”. B.Com. (Tax) I Year visited the
              slum area next to Malwa Mill for Environmental Awareness. B.Com.
              (Hons.) “B” iI Year Organized an awareness campaign on social
              issues and provided services at the Railway Station. The
              Department of Computer Science organized a Guest Lecture on “How
              to prepare for Industry”. The session was delivered by the alumni
              of the institute. B.Sc. III year conducted a class presentation on
              “Importance of Morning Assembly”. B.Com. (Tax) II Year conducted a
              class presentation on “Open Discussion : Love marriage v/s
              Arranged Marriage”. B.Com. (Plain) I Year conducted a class
              presentation on “Job v/s Entrepreneurship : Which is better?”
              Language Lab Committee organized a session on “Explore Your
              Personality”. B.Com. (Plain) III year conducted a class
              presentation on “Digital Marketing”. B.B.A. “B” I year visited
              Vansprasth Ashram – an old age ome and distributed toiletries.
              B.A. II Year prepared paper bags and distributed them at Chappan
              Shops, LIG, Tilak Nagar and Railway Station. B.Com. (F.T.) I Year
              and B.B.A. “A” I Year visited Parle Agro for their Industrial
              Visit. Photography and Powerpoint Committee organized a
              Photography Competition cum Exhibition on the theme “SPIPS : My
              Second Home”.
            </td>
          </tr>
          <tr>
            <td width="189">03-09-2019 :</td>
            <td width="609">
              Library Committee organized Book Review Competition in the
              Library. The birthday of Prof. Madhavi Tarani was celebrated
              during the Morning Assembly. The Departmental meeting of the
              Department of Commerce was held with the Director and the
              Principal. B.B.A. II Year held a special assembly on the occasion
              of Ganesh Chaturthi. Meeting of the Class representatives with the
              Director and the Principal was held in the Conference Hall.
            </td>
          </tr>
          <tr>
            <td width="189">04-09-2019 :</td>
            <td width="609">
              Dr. Aarti Patel was felicitated during the morning assembly on the
              occasion of being awarded with the Ph.d. Inter House Table Tennis
              Competition begins. Departmental meeting of management was held
              with the Director and the Principal. The birthday of Dr. Vivek
              Kaushik was celebrated during the morning assembly. Class
              Presentation of B.Com. (F.T.) I year was conducted on the topic
              “Light on Article 370 and 35(A)”.
            </td>
          </tr>
          <tr>
            <td width="189">05-09-2019 :</td>
            <td width="609">
              Teacher’s Day celebration was held in the auditorium. It included
              various dance performances, melodious musical treat and a skit.
              The felicitation of the faculty members with a card and a gift was
              done by the Director and the Principal. The Departmental meeting
              of Humanities Department was held with the Director and the
              Principal.
            </td>
          </tr>
          <tr>
            <td width="189">06-09-2019 :</td>
            <td width="609">
              Orientation session for student symposium was held in the Seminar
              Hall. The Gender Champions Club held a session on “Parenting”.
              B.Com. (C.A.) III Year conducted a class presentation on “Should
              there be a minimum qualification for voters and leaders and should
              some incentives be given for casting the votes?” B.Com. (Plain) I
              Year visited Concor Company. Pithampur for their Industrial Visit.
              NSS Committee organized an Envelope making and Paper bag making
              workshop. Departmental Meeting of Computer Science department was
              held with the Director and the Principal.
            </td>
          </tr>
          <tr>
            <td width="189">07-09-2019 :</td>
            <td width="609">
              Departmental meeting of the Science Department was held with the
              Director and the Principal. The Principal’s Feast Day was
              celebrated during the Morning Assembly. The celebrations continued
              in the auditorium with song, dance and video presentation. the
              Staff Association celebrated the Feast Day in the Conference Hall
              with a Gift and Floral Greetings. A special video was also
              presented on the occasion and the program concluded with snacks.
            </td>
          </tr>
          <tr>
            <td width="189">09-09-2019 :</td>
            <td width="609">
              Language Lab Committee organized a Crosswords Competition in The
              A.V.Room. The NCC Committee organized a rally for Traffic
              Awareness from SPIPS Campus via GPO to the Agriculture College.
              Publication Committee organized a Punch Line writing competition
              on the theme “Live Informed, Live Young”. House Wise meeting of
              the students with the Animators was organized. Departmental
              meeting of the Department of Physical Education was held with the
              Director and the Principal. The birthday of Prof. Tapas Upadhyay
              was celebrated during the morning assembly.
            </td>
          </tr>
          <tr>
            <td width="189">11-09-2019 :</td>
            <td width="609">
              Workshop on N – List began in the Computer Lab during the lecture
              hours. The Photography and Powerpoint Committee organized a
              workshop on Photography. The resource person for the same were Mr.
              Tanuj Dalal and Mr. Jatin Gera, alumni of the College. The
              Research and Jounral committee organized a student symposium on
              “Real Life v/s Virtual Life : Realities and Myths”. A Guest
              Lecture on “E – Learning and Cloud Computing” was organized. The
              resource person for the same was Mr. Ankesh Gadwanshi
            </td>
          </tr>
          <tr>
            <td width="189">12-09-2019 :</td>
            <td width="609">
              B.Com. (Plain) II Year conducted a class presentation on “Green
              HRM”. B.Com. (F.T.) I year conducted a class presentation On
              “Hindi Language v/s Hindi Language”. B.Com. (F.T.) II year
              conducted a class presentation on “Extempore : A man without goal
              is like a ship without rudder”. B.Sc. II Year conducted a class
              presentation on “Latest Gadgets and its effects on student’s
              life”. The Department of Humanities conducted an Inter House
              Nukkad Natak Competition on the theme “Importance of Hindi
              Language”.
            </td>
          </tr>
          <tr>
            <td width="189">14-09-2019 :</td>
            <td width="609">
              The Department of Commerce organized a Faculty Enriching Faculty
              session on the theme “Start – ups”. The Phase I was an
              introductory session and Phase II was activity based. The Birthday
              of Mr. Suresh K. Dhurwey was celebrated during the morning
              assembly. 16-09-2019 :B.Com. (Tax) II Year conducted a class
              presentation on “Unsung Heroes of Indian Freedom Struggle”. B.C.A.
              III year conducted a class presentation on “Purpose, Passion and
              Vision”. B.Com. (F.T.) II year conducted a class presentation on
              “Importance of WhatsApp Messenger”. The Department of Science
              organized a Poster and Model Exhibition cum Competition. B.B.A. II
              Year conducted a class presentation on “GD and Presentation
              Skills”. B.Com. (C.A.) II Year organized a class presentation on
              “Debate : Is the youth of India confident or confused about
              choosing a career?” NCC Committee organized a special counseling
              session on “Brain v/s Heart leadership” for NCC Cadets. B.A. I
              year conducted a class presentation on “Articulation of Groups”.
              The birthday of Prof. Bhavesh Joshi was celebrated during the
              morning assembly.
            </td>
          </tr>
          <tr>
            <td width="189">17-09-2019 :</td>
            <td width="609">
              B.Com. (Plain) I Year conducted a class presentation on
              “Presentation on Topic”. B.B.A. group activity was organized by
              B.B.A. “A” I Year on the topic “Impression Management”. B.C.A. III
              Year conducted a rally for environmental awareness. B.A. III year
              conducted a class presentation on “Value based Education : a
              holistic approach”.
            </td>
          </tr>
          <tr>
            <td width="189">18-09-2019 :</td>
            <td width="609">
              B.Com. (Tax) III Year conducted a class presentation on “India vs
              Bharat”. Common Class Test 1 – Day 1 for yearly and semester
              classes.
            </td>
          </tr>
          <tr>
            <td width="189">19-09-2019 :</td>
            <td width="609">
              The Department of Commerce held the B.Com. (F.T.) group activity
              in the form of a session on “Export Marketing” by the B.Com.
              (F.T.) II year students. Common Class Test 1 – Day 2 for yearly
              classes.
            </td>
          </tr>
          <tr>
            <td width="189">20-09-2019 :</td>
            <td width="609">
              B.Com. (Plain) I Year conducted a Traffic Awareness program at
              Patrakar Square. B.Com. (Hons.) “B” – II Year conducted a Health
              &amp; Hygiene Awareness Program in the slum areas near Bhawarkuan
              Square. The Counselling and Tutorial Committee organized a special
              session for the Hosteller (Boys). B.Com. (Plain) II Year conducted
              a cleanliness drive at the Railway Station. B.Com. (Hons.) “A” I
              year distributed household items at Jyoti Niwas. M.Com. students
              conducted a health and hygiene awareness program in the slums near
              Bhawarkuan and distributed items there. B.C.A. III year conducted
              an MCQ Test on Current Affairs in Internet &amp; Web Technology.
              B.Sc. II year students visited the School for Mentally Challenged
              and conducted cultural activities. B.Com. (F.T.) III year
              conducted a class presentation on “A comparative analysis of
              education system around the world”. B.Com. (Tax) I Year conducted
              a skit on “Every new day is another challenge in your life”.
              Common Class Test – Day 2 for Semester classes and Day 3 for
              Yearly classes.
            </td>
          </tr>
          <tr>
            <td width="189">21-09-2019:</td>
            <td width="609">
              B.Com. (Plain) III Year conducted a class presentation on
              “Religion vs Law in democratic country”. B.Com. (Tax) III year
              students organized a Go Green Bike Rally from SPIPS to Regal
              Square. B.Com. (C.A.) I Year students conducted a Traffic
              Awareness Program at Pipliyahana Square. B.A. III year visited
              Jyoti Niwas and distributed fruits and biscuits. B.Sc. III Year
              conducted a class presentation on “Effect of Online Shopping on
              local markets”. B.Com. (Hons.) “B” I year conducted a Traffic
              Awareness program at Palasia Square. B.Com. (F.T.) III Year
              organized a Plantation Drive near By Pass Area. 25 NSS Volunteers
              attended a special seminar in the DAVV Auditorium delivered by Mr.
              Jeetu Patwari, Higher Education Minister of M.P. B.C.A. II year
              conducted a class presentation on “Importance of LinkedIN” and
              visited Disha Special School. B.Com. (Tax) I year students visited
              Jyoti Niwas as their social activity. B.Com. (C.A.) III Year
              conducted a class presentation on “Honesty is still the best
              policy” and organized a cleanliness drive at Indore Zoo. B.B.A. II
              year organized a Paper Bag making and Distribution activity.
              B.Com. (Hons.) III Year conducted a class presentation on “Parents
              always treat their children fairly : Yes or No” and organized a
              Traffic Awareness Activity at Shivaji Vatika. B.A. II Year visited
              Visarjan Ashram, Navlakha and distributed stationery and fruits.
              They also organized a class presentation on “Cyber Crime : Ways to
              Control”. B.B.A. “A” – I Year conducted a class presentation on
              “Nutrition for Health”. B.Com. (Hons.) III year conducted a rally
              in the nearby area on “Walk more, live healthy”. B.B.A. “B” I Year
              conducted a class presentation on “Role Play”.
            </td>
          </tr>
          <tr>
            <td width="189">23-09-2019 :</td>
            <td width="609">
              NCC Committee conducted a cleanliness drive at Shivaji Vatika
              Square. Women and Child Protection Committee conducted a Traffic
              Awareness Activity at the college campus. Inter – house cultural
              competition Trials – Day 1 commence in the Auditorium. B.B.A. “A”
              I year conducted a special rally in the college campus on
              “Nutrition for healthy body and mind”.
            </td>
          </tr>
          <tr>
            <td width="189">24-09-2019 :</td>
            <td width="609">
              B.Com. (Hons.) “B” I Year conducted a class presentation on
              “Bridging the gap between theory and practical application”. B.Sc.
              I year conducted a class presentation on “Earlier development in
              Physics upto 18<sup>th</sup> Century”. B.B.A. III year conducted a
              class presentation on “Case Study Discussion “. B.Com. (Hons.) “A”
              I year conducted a class presentation on “Self introduction
              entailing career objectives”. B.Com. (Tax) II year conducted a
              class presentation on “Discipline in my Lif”. NSS Day was
              celebrated during the morning assembly conducted by the NSS
              Committee.
            </td>
          </tr>
          <tr>
            <td width="189">25-09-2019 :</td>
            <td width="609">
              The National Seminar of Department of Humanities was organized on
              the theme “Value Based Education : A Holistic Approach”. B.B.A.
              III Year conducted a class presentation on “Indian Economy : An
              impact of recent Govt. announcement on the economy”. B.B.A. “A” I
              Year conducted a class presentation on “Is ragging always
              harmful?” B.C.A. I year organized a class presentation on “Effect
              of movies on youngsters”. B.Com. (F.T.) I Year organized a class
              presentation on “Impact of Parental Teaching”. A guest Lecture was
              conducted by Mr. Sharad Shashi Kumar on “Politics in Education”.
            </td>
          </tr>
          <tr>
            <td width="189">26-09-2019 :</td>
            <td width="609">
              B.Com. (C.A.) II year conducted a class presentation on
              “Extempore”. B.Com. (Plain) Group Activity was conducted on the
              topic “Crime against women”. Gender Champios Club organized a
              session on “Effects of Alcoholism on Society”. B.Com. (F.T.) III
              year conducted a class presentation on “Unemployment in India”.
              The Department of Computer Science organized a Guest Lecture on
              “Applications of Artificial Intelligence and Robotics”. B.Com.
              (Hons.) “B” II year conducted an Open Discussion on Stress and
              Anger Management.
            </td>
          </tr>
          <tr>
            <td width="189">27-09-2019 :</td>
            <td width="609">
              B.Com. (C.A.) and B.Com. (Tax) III Year conducted an Extempore on
              Current Affairs. B.C.A. II year conducted a class presentation on
              “Problems of aged people”. B.A. I Year students conducted a
              Traffic Awareness program at Shivaji Vatika Sqaure. The Christian
              Students Association held a Mentor Interaction cum Bible Study
              session for B.B.A. I Year. B.Com. (Tax) I year organized a class
              presentation on “Corruption in India”. B.Com. (Tax) II year
              students provided their services in the slum area of Bicholi
              Kakad. B.C.A. II Year conducted a class presentation on “How to
              overcome the gap between children and parents” and “Patience in
              Youth”. B.Com. (Plain) II year students presented a paper in the
              International Conference organized at the Dr. APJ Abdul Kalam
              University. Dr. Sarita Rana was felicitated with “Excellence in
              Research” by Dr. APJ Abdul Kalam University during their
              International Conference. B.Com. (Hons.) “A” II Year conducted a
              class presentation on “If I were the Prime Minister of India”.
              B.Com. (Hons.) “B” I year conducted a class presentation on “Sleep
              is Super Power”. B.A. III year conducted a class presentation on
              “Group Discussion : Make in India vs Make for India”. B.Sc. I Year
              visited Aastha Vradh Ashram. NCC Cadets visited Jyoti Niwas Old
              Age Home. B.A. II Year conducted a class presentation on “Society
              and Youth”. B.B.A. “B” I year conducted a class presentation on
              “Learning Management through Infotainment”. B.Com. (Hons.) III
              Year organized a class presentation on “Understanding the
              recruitment dynamics and CV Requirements”. The Women and Child
              Protection Committee organized a Guest Lecture on “Social media
              and Fraud”. B.Sc. III year and B.Com. (Hons.) III Year conducted
              “Extempore on Social Issues”. The Department of Commerce organized
              a Guest Lecture on “Employment Opportunities”.
            </td>
          </tr>
          <tr>
            <td width="189">28-09-2019 :</td>
            <td width="609">
              A National Seminar was organized by Department of Management on
              the theme    “Innovative Management : An imperative for Growth”.
              Intra – Departmental FEF of Computer Science Department was held
              on the topic “Mission Chandrayaan 2 : A Milestone”. Language Lab
              Committee organized a compering and script writing competition in
              the Language Lab. Intra – Departmental FEF of Department of
              Humanities was held on the topic “Following Professionalism in
              Work Place”. Intra Departmental FEF of the Department of Science
              was held on “Organ Donation”. B.Com. (Hons.) “B” II year conducted
              a class presentation on “Problems of Youth”. B.Com. (Hons.) “A” II
              Year visited the Central Jain, Indore.
            </td>
          </tr>
          <tr>
            <td width="189">30-09-2019 :</td>
            <td width="609">
              B.A. III Year conducted a class presentation on “Hindi as National
              Language”. B.Com. (Tax) II Year conducted a class presentation on
              “How our habits invite Cancer?” The Publication Committee
              organized a Workshop on Creative Writing. B.Com. (Hons.) “A” I
              year conducted a class presentation on “Postcard writing to
              Parents”. B.A. I year conducted a class presentation on “Role of
              Media in bringing public awareness”. Intra – Departmental FEF of
              the Department of Management was conducted on the topic “Internet
              has snatched our creativity”. B.Com. (C.A.) I year conducted a
              class presentation on “Ad Mad Show “ Consumer Goods”. B.Com.
              (Hons.) group activity was organized by B.Com. (Hons.) II year
              students on “Create a commercial : Break ice within a group”.
              B.Com. (C.A.) group activity was organized by B.Com. (C.A.) II
              year on “Digital World”. B.Sc. III year conducted an Environmental
              Awareness Program at Shivaji Vatika Square. B.B.A. “B” I year
              students conducted a Health and Hygiene Awareness Program at
              Bicholi Kakad. B.Com. (Plain) III year conducted a class
              presentation on “Present Education System in India”. B.Com.
              (Plain) I year conducted a class presentation on “Parmanu
              Prakshopastra and Vishwa”. B.C.A. I year conducted a class
              presentation on “How to deal with pessimistic people”. B.C.A. I
              year conducted a Traffic Awareness Program at Palasia Square.
            </td>
          </tr>
          <tr>
            <td width="189">01-10-19 :</td>
            <td width="609">
              The department of Science conducted a guest lecture with the
              renowned scientist Mr Ravi Kumar Verma in the seminar hall. B.Com.
              (Hons.) I year “B” students conducted a classroom presentation on
              Hard Work v/s Luck.
            </td>
          </tr>
          <tr>
            <td width="189">02-10-2019 :</td>
            <td width="609">
              The NSS Committee conducted a free health check up camp on the 150
              <sup>th</sup> birth anniversary of father of our nation Mahatma
              Gandhi in addition to this the NSS volunteers also participated in
              a rally from DAV Sahitya Bhawan to Gandhi Hall. The Annual General
              Meeting of Parents Professor Association was conducted in the
              Auditorium at 2000 at 9:00 a.m. a formal program included welcome
              by the principal and open discussion by the director then you PP
              executive committee members were also elected post formal meeting
              the parents made the class teacher
            </td>
          </tr>
          <tr>
            <td width="189">03-10-2019 :</td>
            <td width="609">
              B.Com. Plain II year students conducted a classroom presentation
              on happiness in helping others helping others. One of the students
              was Mansi Gupta secured I prize in Inter College poster making
              competition. Another student Aashisha Joseph B.A.  I year secured
              III price in debate. The classroom presentations of B.A. I year
              and B.Com. (C.A.) II year were held.
            </td>
          </tr>
          <tr>
            <td width="189">05-10-2019 :</td>
            <td width="609">
               The inter house cultural competition including solo singing and
              solo dance competition were held in the Auditorium at 11 a.m. The
              students of B.Com III year B.Com II year went for social visit.
            </td>
          </tr>
          <tr>
            <td width="189">09-10-2019 :</td>
            <td width="609">
              The classroom presentation of B.Sc. III year was held on
              nanotechnology and its application.
            </td>
          </tr>
          <tr>
            <td width="189">10-10-2019 :</td>
            <td width="609">
               Inter house face painting competition was organised by the
              department of Humanities. The Department of Science conducted a
              session  on the of importance laser technology. The Gender
              Champions club organised a session titled “Importance of Gender
              Champions Club” in the AV room at 1 p.m.
            </td>
          </tr>
          <tr>
            <td width="189"> 11-10-2019 :</td>
            <td width="609">
              BBA I year, B.A. III year B.Com. (Hons.) I year “A”, B.Com. (C.A.)
              I year, B.Com. (Plain) I year, B.Com II year Tax students at the
              classroom presentations. Guest lecture was organised by the
              department of science in the AV room titled “A microscopic world
              in your hand”.
            </td>
          </tr>
          <tr>
            <td width="189">12-10-2019 :</td>
            <td width="609">
              On the occasion of World Sight Day the NSS and NCC committee
              organised a special morning assembly and the volunteers
              participated in Rally at 12:45 p.m. from High Court square  to
              industry house the volunteers participated in the rally. The
              department of management conducted a faculty and teaching faculty
              program and how to overcome Stage Fright.
            </td>
          </tr>
          <tr>
            <td width="189">14-10-2019 :</td>
            <td width="609">
              B.Com. (F.T.) II year, B.Sc. II year, B.Com. ( C.A.) II year,
              B.C.A I year, B.Com. (F.T.) III year, B.C.A III year, B.Com.
              (C.A.) I year, B.Com. (F.T.) II year students conducted classroom
              presentation. B.Sc. II year, B.Com. (F.T.) I year and M.Com.
              students went on a social visit.
            </td>
          </tr>
          <tr>
            <td width="189">15-10-2019 :</td>
            <td width="609">
              The department of Computer Science conducted National Seminar
              titled “Global opportunities and recent development in information
              technology” in the seminar hall at 9:30 a.m. B.A. II year, B.Com.
              II year students had their classroom presentations. The Language
              Lab committee conducted poetry recitation competition. The Display
              Board committee conducted best cover page competition for the
              newsletter Kristu Jayanti. B.Com. Tax students had the group
              activity title business plan of Swift, Swiggy, Oyo and Paytm the
              activity was led by the tax I year students. B.Com. Hons I year
              students went for a social visit. Counseling and Tutorial
              committee conducted the special session for the girls the session
              was chaired by Sr. Principal.
            </td>
          </tr>
          <tr>
            <td width="189">16-10-2019 :</td>
            <td width="609">
              B.Com C.A. I year, B.Com. (Tax) III year, B.Com. (F.T.) I year,
              B.B.A. II year and B.A. II year students had their classroom
              presentations. The Publication Committee organised a caption
              writing competition in the library. As a part of B.Com. (Hons.)
              group activity a session titled “Say No to Plastic -  A gentle
              reminder” was conducted by the B.Com (Hons.) I year students. The
              career and skills development committee organised a special
              motivational session for Bank PO, SSC and MPPSC. The resource
              person was Mr Vincent Thomas. B.Com. Plain II year students
              conducted a social activity.
            </td>
          </tr>
          <tr>
            <td width="189">17-10-2019 :</td>
            <td width="609">
              B.Com. (Hons.) III year “B” , B.Com. (Plain) II year, B.B.A. III
              year, B.Com. (Plain) I year, B.Com. (Tax) III year, B.B.A. I year
              “A”,  BBA II year students conducted classroom presentation. As a
              part of B.Com. (F.T.) group activity a session on privatisation
              and globalisation in 2019 was conducted in seminar hall. The
              Christian Students Association organised a guest lecture title
              overcoming challenges in life of youth. The resource person was
              father Ashish Chakram. As a part of science club Activity the
              department of science conducted a special session title
              Chandrayaan 2. Inter departmental faculty and teaching faculty
              program was conducted by department of management. The Counseling
              and Tutorial Committee organised smart girls workshop for the
              girls students of the college. B.Com. Hons II year and B.Com. Tax
              III year students conducted the social activities.
            </td>
          </tr>
          <tr>
            <td width="189">18-10-2019  :</td>
            <td width="609">
              B.Com. II year, B.C.A. III yearm B.A. I year, B.B.A. I year, 
              B.Com. (F.T.) II year, B.B.A. III year students conducted that
              classroom presentation. The department of management organised a
              session in the seminar hall titled “Chain management”. The
              activity was conducted by B.B.A. I year and B.A. students. As a
              part of B.Com. Plain group activity, a presentation on motivation
              and teamwork was conducted by the students in the evening room.
              B.A. III year, B.C.A II year, B.Com. Honours III year, B.A. I
              year, B.Sc. III year students went for social visit.
            </td>
          </tr>
          <tr>
            <td width="189">19-10-2019 :</td>
            <td width="609">
              The inter house cultural competition comprising of skit, mime,
              group dance and group singing was conducted at 11:00 a.m. in the
              auditorium. The intra - departmental FEF of the department of
              Humanities was conducted. The intra - departmental FEF of the
              department of Commerce was conducted. B.Com. Hons. I year “A”
              conducted the social activity. B.Com. Hons II year students
              conducted their classroom presentation.
            </td>
          </tr>
          <tr>
            <td width="189">21-10-2019 :</td>
            <td width="609">
               B.C.A II year, B.Com. Tax I year, B.Com. Hons “B” I year students
              conducted classroom presentation. The department of Commerce
              organised inter stream skit competition in the seminar hall.
            </td>
          </tr>
          <tr>
            <td width="189"> 22-10-2019 :</td>
            <td width="609">
              Guest Lecture on computer hardware was conducted by department of
              computer science in seminar hall. The department of management
              conducted ad mad show in The Luminous Hall. The Gender Champions
              Club organised a session title marriage versus live in
              relationship in the AV room. B.Com. Hons II year “B”,  B.Com. Tax
              II year and B.Com. Tax I year students conducted their classroom
              presentation. B.Com. Plain I year and B.Com. Tax I year students
              the social visit activity. The students of B.Com. Hons. I year “A”
              and “B” were taken for industrial visit to AICTSL, Indore.
            </td>
          </tr>
          <tr>
            <td width="189">23-10-2019 :</td>
            <td width="609">
              As a part of B.Com. (C.A.) group activity, a session on career
              guidance was conducted by B.Com. CA III year students in the AV
              room. The department of Humanities conducted story telling
              competition in The Luminous hall. Intra departmental faculty and
              teaching faculty program of computer science department was
              conducted. The students of B.B.A I year, B.B.A II year, B.Com.
              (F.T.) III year, B.C.A I year B.Com. (C.A.) II year, B.Com. Hons.
              II year went for social visit. The students of B.C.A II year,
              B.Com. Hons. II year conducted classroom presentation.
            </td>
          </tr>
          <tr>
            <td width="189">24-10-2019 :</td>
            <td width="609">
              A special program was conducted to celebrate Diwali during the
              morning assembly. The students of B.Com. Tax and B.Com. (C.A.) I
              year went for industrial visit to AICTSL. B.B.A III year students
              went for social activity.
            </td>
          </tr>
          <tr>
            <td width="189">30-10-2019 :</td>
            <td width="609">
              B.A. III year and B.C.A I year students conducted classroom
              presentations. B.Com. Plain III year students conducted the social
              activity.
            </td>
          </tr>
          <tr>
            <td width="189">31-10-2019 :</td>
            <td width="609">
              On the occasion of birthday of the director Rev. Fr. Simon Raj, a
              special program was organised during the morning assembly. An
              inter class dance competition was conducted to make the directors
              birthday more memorable. B.Com. (F.T.) I year students conducted
              the classroom presentation.
            </td>
          </tr>
          <tr>
            <td width="189">01-11-2019 :</td>
            <td width="609">
              B.Com. Plain III year students conducted classroom presentation.
            </td>
          </tr>
          <tr>
            <td width="189">02-11-2019 :</td>
            <td width="609">
              The Language Lab Committee organised dialogue delivery
              competition. The classroom presentation of B.Sc. II year, B.Sc. I
              year, B.Sc. III year, B.Com. Tax II year was conducted. The
              students of B.A. II year, B.Com. plain I year, B.Com. Tax I year
              and B.Com. Hons II year went for social visit.
            </td>
          </tr>
          <tr>
            <td width="189">04-11-2019  :</td>
            <td width="609">
              The classroom presentations of B.A. I year and B.Com. Tax III year
              was conducted.
            </td>
          </tr>
          <tr>
            <td width="189">05-11-2019 :</td>
            <td width="609">
              The classroom presentation of B.Com. (F.T.) II year, B.Com. Hons.
              I year “A”, B.Com. Hons I year “B” and B.Com. C.A. III year, B.Sc.
              (C.S.) III year was conducted. The students of M.Com. and B.Com.
              Tax II year went for a social activity. The Language Lab Committee
              organised a competition title theme for annual day.
            </td>
          </tr>
          <tr>
            <td width="189">06-11-2019 :</td>
            <td width="609">
              B.Com. Plain III year and M.Com. II year students had their
              classroom presentation.
            </td>
          </tr>
          <tr>
            <td width="189">07-11-2019 :</td>
            <td width="609">
              B.Com. Hons I year “A”,  B.Com. Plain II year and B.Com. (F.T.)
              III year students had the classroom presentations. The students of
              B.Com. (F.T.) II year and B.B.A. II year went for a social
              activity.
            </td>
          </tr>
          <tr>
            <td width="189">08-11-2019 :</td>
            <td width="609">
              Inter house nail art competition was organised by the department
              of Humanities. 5 day research workshop was organised by the
              Research and Journal Committee for the students of different
              streams. The classroom presentation of B.Com. (C.A.) I year,
              B.Com. (C.A.),  B.Com. Tax III year, B.C.A. III year and B.Com.
              Tax II year was conducted.
            </td>
          </tr>
          <tr>
            <td width="189">13-11-2019 :</td>
            <td width="609">
              The students of B.A. I year and B.B.A. I year had their classroom
              presentation. The Publications Committee organised poetry writing
              competition in the library.
            </td>
          </tr>
          <tr>
            <td width="189">14-11-2019 :</td>
            <td width="609">
              A program was organised during the morning assembly on the
              occasion of Children&apos;s Day. The young thinkers forum under
              the care of department of Humanities organised a session titled “
              How to participate in Bali Asia International” In The Luminous
              Hall. The classrooms presentations of B.A. III year and B.Sc. I
              year students was conducted. The department of Commerce National
              Conference titled “Digital Innovation in business banking and
              finance the business challenges.”  The conference was conducted in
              the seminar hall.
            </td>
          </tr>
          <tr>
            <td width="189">15-11-2019 :</td>
            <td width="609">
              The department of Humanities conducted a group discussion on
              education and employment in the seminar hall. The NCC committee
              conducted on cleanliness drive in the college campus as a part of
              their social commitment. The classroom presentations of B.Com.
              (C.A.) II year and B.Com. Hons. III year students was conducted.
            </td>
          </tr>
          <tr>
            <td width="189">16-11-2019 :</td>
            <td width="609">
               The classroom presentations of B.Com. (C.A.) I year, B.Com. Tax
              III year, B.Com. Hons. II year “B”, B.C.A. I Year, B.C.A II year
              was conducted. B.Com. (C.A.) I year, B.Com. Plain II year, B.A. I
              year, B,Com. Honours I year “B”, B.C.A. II year and B.Sc. II year,
              B.Com. (C.A.) III year went for a social visit. The department of
              management organised management fest in 3 C&apos;s comprising of
              business plan movie learning and food stall.
            </td>
          </tr>
          <tr>
            <td width="189">18-11-2019 :</td>
            <td width="609">
              The Women and Child Protection committee organised a traffic and
              rule awareness in the college campus. The students of B.Com. Plain
              I year and B.Com. (F.T.) II year conducted classroom
              presentations. The students of B.Com. Hons III year and B.C.A. III
              year conducted their social activities.
            </td>
          </tr>
          <tr>
            <td width="189">19-11-2019 :</td>
            <td width="609">
              The NCC committee organised a drawing competition. The Christian
              Students Association conducted Bible quiz in the seminar hall. The
              inter-departmental faculty and teaching faculty program by
              department of Humanities was conducted. The classroom
              presentations of B.Sc. II year and B.B.A. II year was conducted.
            </td>
          </tr>
          <tr>
            <td width="189">20-11-2019 :</td>
            <td width="609">
              conduct Store mark Pal in parliament in the seminar hall. The
              classroom presentation of B.Com. I year students were conducted
              while the B.Com. II year students went for a social visit.
            </td>
          </tr>
          <tr>
            <td width="189">21-11-2019 :</td>
            <td width="609">
              The young thinkers forum conducted a session to discuss the role
              of fake media. The session was held in The Luminous hall. As a
              part of B.Com. Tax group Activity the students of the B.Com. (Tax)
              III year organised a session titled social media security and
              related issues. The students of B.B.A I year “B”  went for a
              social visit.
            </td>
          </tr>
          <tr>
            <td width="189">22-11-2019 :</td>
            <td width="609">
              The Publications Committee organised cover page design
              competition. As a part of B.Com. Hons activity, a session title
              management lessons from movie was conducted in the seminar hall.
              As a part of B.Com. (C.A.) group activity, the students of B.Com.
              (C.A.) II year conducted a session title management lessons by
              Mahabharata and Bible in the AV room. The students of B.A. III
              year went for a social activity. The students of B.A. II year had
              the classroom presentation.
            </td>
          </tr>
          <tr>
            <td width="189">23-11-2019 :</td>
            <td width="609">
              The department of Humanities conducted faculty enrichment program
              in the seminar hall.  The title was teaching methods and
              participatory learning.  The director and the principal witnessed
              the sessions. The students of B.Com. Tax III year went for a
              social activity. B.Com. Plain III year
            </td>
          </tr>
          <tr>
            <td width="189">25-11-2019 :</td>
            <td width="609">
              The NCC committee visited an old age home as a part of their
              social commitment program. Intra departmental faculty and teaching
              faculty program of department of science was organised.
            </td>
          </tr>
          <tr>
            <td width="189">26-11-2019 :</td>
            <td width="609">
              To mark the importance of constitution day a special program was
              organised during the morning assembly. As a part of B.Com. (F.T.)
              group activity, a Quiz Competition was held in Luminous fall.  The
              activity was coordinated by B.Com. (F.T.) III year students.
            </td>
          </tr>
          <tr>
            <td width="189">28-11-2019 :</td>
            <td width="609">
              The intra departmental faculty and teaching faculty program of
              department of computer science was conducted. As a part of B.Com.
              Plain group Activity, the B.Com. plain III year students organised
              a session on stress management and meditation in the AV Room. The
              classroom presentations of B.A. III year, B.Com. (F.T.) III year
              and B.Com. Tax I year were held.
            </td>
          </tr>
          <tr>
            <td width="189">29-11-2019 :</td>
            <td width="609">
              The Language Lab Committee organised a quotation writing
              competition. the of department was  conducted The Counseling and
              Tutorial Committee conducted a guest lecture titled the
              “Addiction” in the AV room.  The resource person was Dr Praveen
              Srivastava clinical psychologist. The students of B.B.A III year,
              B.Com. Plain I year, B.Com., BBA I year “A” and B.B.A. I year “B”
              conducted their classroom presentations. The students of B.B.A III
              year, B.C.A. I year, B.Sc. III year and B.B.A. II year conducted
              social activities.
            </td>
          </tr>
          <tr>
            <td width="189">30-11-2019 :</td>
            <td width="609">
              The Gender Champions Club organised a street play titled condition
              of women in the society.  The competition was conducted in the
              canteen area. Five students of the college participated in a
              business plan competition organised by Jaipuria Institute of
              Management and Technology.  The student secured I position in the
              competition. The students of B.Com. C.A. III year, B.Com. Tax I
              year and B.Com. Plain III year  and B.Com. Hons. II year “A”
              organised the classroom presentation. B.Com. (F.T.) I year
              students went for a social visit. The department of computer
              science on the occasion of world computer security day organised a
              special department activity in which the students visited the
              police control room and were addressed by the DSP in the
              headquarters.
            </td>
          </tr>
          <tr>
            <td width="189">02-12-2019 :</td>
            <td width="609">
              Intra – Departmental FEF of the Department of Management on
              “Socialism in students – Impact and Implication”. PUE for all the
              semester classes begin. International Day for Abolition of Slavery
              was celebrated during the morning assembly. Departmental Meeting
              of Commerce Department with the Director and the Principal.
            </td>
          </tr>
          <tr>
            <td width="189">03-12-2019 :</td>
            <td width="609">
              International Day for Differently Abled was celebrated during the
              morning assembly. Class Presentation of B.B.A. II Year on
              “Overcoming Anxiety before Exams and framing Strategies to Excel”.
              Departmental Meeting of Management Department with the Director
              and the Principal.
            </td>
          </tr>
          <tr>
            <td width="189">04-12-2019 :</td>
            <td width="609">
              CCT – II begins for the semester classes. Departmental Meeting of
              Humanities Department with the Director and the Principal.
            </td>
          </tr>
          <tr>
            <td width="189">05-12-2019 :</td>
            <td width="609">
              Departmental Meeting of Computer Science Department with the
              Director and the Principal.
            </td>
          </tr>
          <tr>
            <td width="189">06-12-2019 :</td>
            <td width="609">
              Departmental Meeting of Science Department with the Director and
              the Principal. Class Presentation of B.B.A. – III Year on
              “Professional Etiquettes : How to Dress for Success?”
            </td>
          </tr>
          <tr>
            <td width="189">07-12-2019 :</td>
            <td width="609">
              Class Presentation of B.Sc. – III Year on “Importance of
              recreational activities in Education System”. Social Activity of
              B.Com. (Hons) “B” I Year at the Navlakha Bust Stand. Social
              Activity of B.Com. (Hons.) “B” II Year on Health and Hygiene
              Awareness Program. Class Presentation of B.Com. (Tax) II Year on
              “Should the age of major be altered?” Social Activity of B.Com.
              (Hons.) “A” I Year at Robert Nursing Home. Social Activity of
              B.Com. (Plain) I Year on Cleanliness at the Indore Zoo. Social
              Activity of B.Com. (Plain) II year at an Old Age Home. Social
              Activity of B.Sc. II year at the Helen Keller Blind School.
              Management Talent Search Exam conducted. Departmental Meeting of
              Physical Education Department with the Director and the Principal.
            </td>
          </tr>
          <tr>
            <td width="189">09-12-2019 :</td>
            <td width="609">
              Class Presentation of B.Com. (Hons.) “A” I year on Virtue Tree
              Activity. Social Activity of B.Com. (Tax) I year at the Malwa Mill
              Vegetable Market. Social Activity of B.Com. (F.T.) – II Year on
              “Traffic Santa – Traffic Awareness Program” at the High Court.
              Class Presentation of B.Com. (F.T.) – II Year on “Social Media
              helps to express oneself”. Class Presentation of B.Com. (Tax) –
              III Year on “Group Discussion : Crime against women – Solution and
              Resolution”. Class Presentation of B.A. – III year on “Vote under
              NOTA choice should be made valid”. Traffic Awareness Program at
              the College Gate. Social Activity of NCC Committee on Teaching
              Program at Bicholi Kakad.
            </td>
          </tr>
          <tr>
            <td width="189">10-12-2019 :</td>
            <td width="609">
              World Human Rights Day celebrated during the morning assembly.
              Class Presentation of B.Com. (F.T.) I Year on “Experience is the
              key to successful entrepreneurship”. Class Presentation of B.Com.
              (F.T.) II year on “Think out of the Box”. Social Activity of B.A.
              III Year at the Visarjan Ashram. Class Presentation of B.Com.
              (F.T.) III Year on Group Discussion. Class Presentation of B.B.A.
              “A” I year on “Know Your Virtue through Virtue Tree” and
              Cleanliness Drive in the slum area near Sch. No. 140. PD  - B.A. I
              year on “Kids participation in reality show : Good or Bad?” Class
              Presentation of B.A. – II year on “Tech at fingertips : Beneficial
              or Harmful?” Class Presentation of B.C.A. I year on Justification
              of Indian rituals through Science”. Gender Champions Club
              organized a session on “Should men also contribute in household
              work?” Class Presentation of B.Sc. – II Year on “Present Education
              System : Its effectiveness and contribution”.
            </td>
          </tr>
          <tr>
            <td width="189">11-12-2019 :</td>
            <td width="609">
              Library Committee organized an Inter – house Poetry Writing
              Competition. Gender Champions Club organized a debate session on
              “Should rapist be handed for Mob Lynching or for legal process”.
              Class Presentation of B.Com. (C.A.) – III Year and B.Com. (Tax) –
              III Year on “Act on idioms”. Class Presentation of B.Com. (F.T.) –
              I Year on Ad Mad Show. Language Lab Committee organized a session
              on “Check Your Grammar”. Class Presentation of B.Sc. – I Year on
              “Role of Social Media in Education”. Social Activity of B.com.
              (Hons.) III year in Slum area near Bicholi Kakad and Class
              Presentation on “Should rapist be encountered?” and “Are Women
              safe in India?” B.Com. (C.A.) – II Year conducted Health and
              Hygiene Awareness Program at Jeevan Shala Visarjan Ashram. Social
              Activity of B.A. – II year at Anand Mahi Ashram for Differently
              Abled.
            </td>
          </tr>
          <tr>
            <td width="189">12-12-2019 :</td>
            <td width="609">
              Student Welfare Committee organized a Guest Lecture on “Feel the
              Wheels”. Class Presentation of B.Com. (C.A.) – III Year on “Is
              Social Media Good or Bad?” Language Lab Committee organized a
              workshop on “Phonetics”. Class Presentation of B.A. – I year on
              “Open Discussion : Dowry System in India is curtailed only in Law
              and not practically”. Class Presentation of B.Com. (Hons.) “B” – I
              year on “A Dumb Leader and Blind Followers – Will this Combination
              work?” Class Presentation of B.Com. (C.A.) – III Year on “Memories
              of the year 2019”. Class Presentation of B.Com. (Hons.) “A” – I
              Year on “No Subsidies, No Perks, No Incentives for the Leaders”.
              Class Presentation of B.B.A. “B” – I Year on “Which is better :
              Joint Family and Nuclear Family?” Class Presentation of B.com.
              (C.A.) – I year on “Developing Self Respect and Self Esteem”.
              Department of Science organized a Science Club Activity on Science
              Riddles. Class Presentation of B.A. – III Year on “Issues with
              Indian Judicial System”.
            </td>
          </tr>
          <tr>
            <td width="189">13-12-2019 :</td>
            <td width="609">
              B.A. I Year conducted a “Health and Hygiene Awareness Program” at
              Slum Area. Department of Humanities conducted a Blog Writing
              Competition. Personality Development Session of B.Com. (Plain) –
              II Year on Poster Making and Explanation on given topic. B.Com.
              (Hons.) “B” – II Year held a Group Discussion on “Increasing rape
              cases in India and ways to control them”. Class Presentation of
              B.C.A. – I Year on “Areas of Personal Development”. Class
              Presentation of B.B.A. “B” – I Year on Priyanka Reddy Rape Case.
              Class Presentation of B.Com. (Plain)  - I Year on Virtue Tree
              Activity. SPIPS Table Tennis team won the 1<sup>st</sup> position
              in Inter College tournament. Class Presentation of B.Com. (F.T.) –
              III Year on “My Dream, My Vision for 2020”. Class Presentation of
              B.B.A. “A” – I Year on “Planning and organizing are prerequisites
              to be successful”. Social Activity of B.A. – III Year in the Slum
              Area.
            </td>
          </tr>
          <tr>
            <td width="189">14-12-2019 :</td>
            <td width="609">
              Faculty Enriching Faculty was conducted by Computer Science
              Department on “Cyber Security”. Social Activity of B.Com. (Tax) –
              II Year on Majdoor Chowk, Agrasen Chouraha.
            </td>
          </tr>
          <tr>
            <td width="189">15-12-2019 :</td>
            <td width="609">
              NSS Committee conducted Walkathon For HIV AIDS Awareness.
            </td>
          </tr>
          <tr>
            <td width="189">16-12-2019 :</td>
            <td width="609">
              Class Presentation of B.Com. (Tax) – I year on Ad Mad Show. B.Com.
              (C.A.) III Year distributed Paper Bags at Geeta Bhawan. B.Com.
              (F.T.) III Year held a class presentation on “Importance of
              Discipline – Forced v/s Self”. B.Com. (Hons.) “B” I Year held a
              class presentation on “Passion v/s Reality”. Class Presentation of
              B.Com. (C.A.) I Year on “Increasing craze of Gym centres among the
              Youth”. Intra Department FEF of the Management Department on
              “Change Management Technique for Adoption”. Class Presentation of
              B.Com. (Plain) III Year on Consumer Awareness. Department of
              Humanities organized a Vocabulary Booster Seminar.
            </td>
          </tr>
          <tr>
            <td width="189">17-12-2019 :</td>
            <td width="609">
              Class Presentation of B.Com. (Plain) I year on “Atmakendrit Yuva”.
              Intra – Departmental FEF of Computer Science Department on
              “Reminiscences of the Department”. Class Presentation of B.Com.
              (Plain) II Year on “Human Impact on Bio – diversity and its
              conservation”. Class Presentation of B.Com. (C.A.) – II Year as
              Group Discussion.
            </td>
          </tr>
          <tr>
            <td width="189">18-12-2019 :</td>
            <td width="609">
              NCC Committee organized a social activity at Bhawarkuan Slum area
              and distributed clothes. Christmas celebration was held in the
              luminous hall followed by the Card Exchange of Faculty and Staff.
              Farewell was given to Dr. Mili Singh. Extended SPIPS Family
              Christmas Celebration was organized. Class Presentation of B.A.
              III Year on “Life at SPIPS”.
            </td>
          </tr>
          <tr>
            <td width="189">20-12-2019 :</td>
            <td width="609">
              B.Com. (F.T.) III Year conducted social activity in the slum area
              in the form of “Christmas Rally – Tell us the good in You”.
            </td>
          </tr>
          <tr>
            <td width="189">27-12-2019 :</td>
            <td width="609">
              Dr. Goldie Zaki and Prof. Gourav Rawal were honored with
              Excellence Awards.
            </td>
          </tr>
          <tr>
            <td width="189">06-01-2020 :</td>
            <td width="609">
              Prof. Shraddha Bhurre joined the college as an Assistant Professor
              in the Department of Computer Science. New Year celebration was
              held during the Morning Assembly.
            </td>
          </tr>
          <tr>
            <td width="189">07-01-2020 :</td>
            <td width="609">
              B.B.A. I Year University Exam commenced in the College. The
              Birthday of our Chairman – Bishop Chacko Thottumarikal was
              celebrated and card was presented at the Bishop House.
              Departmental Meeting of the Commerce Department was held with the
              Director and the Principal.
            </td>
          </tr>
          <tr>
            <td width="189">08-01-2020 :</td>
            <td width="609">
              Language Lab Committee organized a Vocabulary Game. B.Com. (F.T.)
              – II Year organized a FT Group Activity on INCO terms.
              Departmental Meeting of the Management Department was held with
              the Director and the Principal. Class Presentation of B.Com.
              (C.A.) – I Year on “Worry Box”. B.Com. (Hons.) III Year organized
              Honours Group Activity on “Implication of CAB (Citizen Amendment
              Bill).
            </td>
          </tr>
          <tr>
            <td width="189">09-01-2020 :</td>
            <td width="609">
              Departmental Meeting of the Humanities Department was held with
              the Director and the Principal. B.B.A. – Sem. I university Exam.
            </td>
          </tr>
          <tr>
            <td width="189">10-01-2020 :</td>
            <td width="609">
              B.Com. (F.T.) – II Year provided their services at the railway
              station. Class Presentation of B.Com. (Plain) II Year on “Virtue
              Tree”. Class Presentation of B.Com. (Hons.) “B” – I Year on
              “Contract of Abundance”. Class Presentation of B.Com. (Plain) –
              III Year on “There is no shortcut to success”. Class Presentation
              of B.Sc. – II Year on “Who serves the country most – Teachers or
              Soldiers?”
            </td>
          </tr>
          <tr>
            <td width="189">11-01-2020 :</td>
            <td width="609">B.B.A. – I Year University Exam.</td>
          </tr>
          <tr>
            <td width="189">13-01-2020 :</td>
            <td width="609">
              Class Presentation of B.Com. (F.T.) – II Year on “How to
              communicate our feelings – By Words or Smiles”. Language Lab
              committee conducted Group Discussion. Class Presentation of B.A. –
              III Year on “Should Government invest in general education or
              professional education?” Gender Champions Club organized a session
              on “Rights of Indian men in Indian society”. Class Presentation of
              B.C.A. – I Year on “Rekindling the spirit of Patriotism”. Intra –
              Departmental FEF of Commerce Department on “Pros and Cons of Co –
              education”. Publication Committee organized a workshop on “India
              beyond 2020”.
            </td>
          </tr>
          <tr>
            <td width="189">14-01-2020 :</td>
            <td width="609">
              B.B.A. I Year University Exam. Intra Departmental FEF of
              Department of Commerce on “How far is encounter justified in a
              Democracy”. Intra – Departmental FEF of Humanities Department on
              “Education v/s Literacy”.
            </td>
          </tr>
          <tr>
            <td width="189">15-01-2020 :</td>
            <td width="609">
              B.Com. (Plain) group activity organized on “Mental Health”. Class
              Presentation of B.B.A. – II Year on “Case Study Discussion – Pizza
              Hut, Kellogg’s”. Class Presentation of B.Com. (F.T.) – II Year on
              “Citizen Amendment Act”. Inter – house Treasure Hunt was
              organized. Intra – Departmental FEF of Management Department on
              “Capital Punishment for Rape Convicts”. Class Presentation of
              B.B.A. – II Year on “Reflection on spirituality v/s Science”.
            </td>
          </tr>
          <tr>
            <td width="189">16-01-2020 :</td>
            <td width="609">B.B.A. Sem. I University Exam.</td>
          </tr>
          <tr>
            <td width="189">17-01-2020 :</td>
            <td width="609">
              Class Presentation of M.Com. on “Reservation  : How far it is
              helpful?” Class Presentation of B.A. – III Year on “Child Labour”.
              M.Com. and B.com. (Hons.) “B” – II Year provided their services at
              the Navlakha Bus Stand. IMA Conclave held at Abhay Prashal on “$5
              billion economy : Vision or Reality?” Class Presentation of B.Sc.
              III Year on the topic “Role of media in breinging public
              awareness”. Department of Computer Science organized a Guest
              Lecture on “Cyber Security and Ethical Hacking”. Class
              Presentation of B.Com. (F.T.) III Year was conducted on the topic
              “Capital Punishment or Worse for Rape victims”. They also
              conducted their social activity at a Govt. school regarding the
              importance of cleanliness and Hygiene. B.Com. (Plain) I year held
              a class presentation on “New Beginning with New Year 2020”. Class
              Presentation of B.Com. (C.A.) III Year was conducted on 5G
              Wireless Technology”. Class Presentation of B.Com. (Hons.) III
              Year was held on the topic “Is Technology making us less human?”
              Class Presentation of B.Com. (Tax) II Year on “Drug Abuse and
              Rehabilitation in Youth”.
            </td>
          </tr>
          <tr>
            <td width="189">18-01-2020 :</td>
            <td width="609">
              Intra – Departmental FEF of Computer Science Department on “Ways
              to prevent and relieve stress in daily life”. B.B.A. Sem. I
              University Exam. Class Presentation of B.Com. (Plain) III Year on
              “Capital Punishment to Rapist”.
            </td>
          </tr>
          <tr>
            <td width="189">19-01-2020 :</td>
            <td width="609">
              Day 1 of the Inter – House Annual Athletics Meet was conducted.
            </td>
          </tr>
          <tr>
            <td width="189">20-01-2020 :</td>
            <td width="609">
              Day 2 of the Inter – House Annual Athletics Meet was conducted.
            </td>
          </tr>
          <tr>
            <td width="189">21-01-2020 :</td>
            <td width="609">
              SPIPS Antakshari was conducted in the Auditorium. Nation Seminar
              was conducted by the Department of Science. B.Com. (Plain) III
              Year conducted Traffic Awareness Program at Bhawarkuan Square.
              B.B.A. – II Year visited Aastha Old Age Home.
            </td>
          </tr>
          <tr>
            <td width="189">22-01-2020 :</td>
            <td width="609">
              B.Com. (Tax) III Year visited Chacha Nehru Children Hospital as
              their social activity. B.A. III Year visited slum area near
              Pipliyahana for their social activity. B.C.A. II Year visited slum
              area near Kanadia Road for distribution of sweets. B.Com. (Hons.)
              “B”  I Year distributed paper bags near Tilak Nagar. Digi Locker
              Workshop was organized by the Department of Computer Science.
              Class Presentation of B.Com. (C.A.) – II Year was conducted onb
              “Sharing views on freedom of media”. Class Presentation of B.com.
              (Tax) II year was held on the topic “Career Opportunities in
              Taxation”.
            </td>
          </tr>
          <tr>
            <td width="189">23-01-2020</td>
            <td width="609">
              Class Presentation of B.B.A. – III Year on Case Study : Strategic
              Management. Class Presentation of B.Com. (Tax) – III Year on
              “Thought Sharing on memories of College Days”. Class Presentation
              of B.C.A. – II year on “Hard work v/s Luck”. Social Activity of
              B.A. – II Year at Navlakha Bus Stand. Social Activity of B.Sc. –
              II Year at Shivaji Vatika Square on Environment Awareness. Social
              Activity of B.Com. (Plain) I Year at Navlakha Vegetable Market.
              Class Presentation of B.A. – I Year on “Views Sharing and
              Discussion on Acid Survivors”. Class Presentation of B.Com. (C.A.)
              – III Year on “Resolutions for Year 2020”.
            </td>
          </tr>
          <tr>
            <td width="189">24-01-2020 :</td>
            <td width="609">
              Class Presentation  of B.A. – I Year on “CAA and Article 15”.
              Class Presentation of B.Com. (Hons.) “B” – I Year on “Pictionary –
              Lets say the Unsaid Words”. Class Presentation of B.C.A.  – III
              Year on Team Building Activity. Class Presentation of B.Com.
              (Hons.) “B” – II year on Creative Story Writing. Class
              Presentation of B.Com. (Hons.) “A” – I Year on “Effect of Mistakes
              in College time on future life”. Class Presentation of B.C.A. – I
              Year on “Does dress code really matter at educational institutes?”
              Class Presentation of B.Sc. – III Year on “Is CCTV an invasion of
              privacy?” Social Activity of B.Com. (Plain) II Year at Robert
              Nursing Home. Social Activity of B.Com. (C.A.) – III Year near
              Geeta Bhawan. Women and Child Protection Committee conducted
              Special Assembly on the occasion of National Girl Child Day.
            </td>
          </tr>
          <tr>
            <td width="189">25-01-2020 :</td>
            <td width="609">
              Patron’s Day was celebrated at the Institute in III Phases: Phase
              I : Welcome &amp; Introduction followed by the Lighting of the
              Lamp and various cultural performances. Phase II : Distribution of
              Sewing Machines to the under privileged women near Canteen Area.
              Phase III : SPIPS Fiesta
            </td>
          </tr>
          <tr>
            <td width="189">26-01-2020 :</td>
            <td width="609">
              71<sup>st</sup> Republic Day was celebrated at the Institute.
            </td>
          </tr>
          <tr>
            <td width="189">27-01-2020 :</td>
            <td width="609">
              Class Presentation of B.Com. (C.A.) – I Year on CAB and its
              Implication. Women and Child Protection Committee conducted
              Traffic Awareness Program
            </td>
          </tr>
          <tr>
            <td width="189">28-01-2020 :</td>
            <td width="609">
              Social Activity of B.Com. (Tax) II Year at the Railway Station.
              Social Activity of B.C.A. III Year at the Dolphin Hospital.
              Language Lab Committee conducted a session on Phonic
              Transcription. Gender Champions Club organized a session on
              “Working mothers hinder their children’s development”. Class
              Presentation of B.Sc. I year on Learning Lessons from SPIPS
              Fiesta. Class Presentation of B.Com. (Hons.) “A” I year on “Impact
              of Reality TV Shows on the Indian Youth”. Social Activity of
              B.Com. (Tax) I Year at Bicholi Kakad. Class Presentation of B.B.A.
              “A” I Year on “Effect of mistakes in college time on future life”.
              Social Activity of B.Com. (Hons.) “A” I Year at Shivaji Vatika.
              Social Activity of B.B.A. – II Year at Govt. School, Navlakha on
              Importance of Cleanliness. B.Com. (C.A.) Group Activity organized
              by B.Com. (C.A.) – I year on “Whatever happens happens for a
              reason”
            </td>
          </tr>
          <tr>
            <td width="189">29-01-2020 :</td>
            <td width="609">
              Intra Departmental FEF was conducted by the Department of Science
              on “Importance of Value Education in Life”. Class Presentation of
              B.Com. (Plain) I year on Sharing Experience from IMA. Management
              Group Activity conducted at Seminar Hall on Infotainment. Class
              Presentation of B.Com. (Tax) I Year on Digital Payments are secure
              and India is ready to go cashless. Social Activity of B.Sc. I year
              at Shraddhanand Bal Ashram. Class Presentation of B.Com. (Tax) I
              year on “Co – Education : A Challenge for Today’s Era”. Social
              Activity of B.Com. (C.A.) II Year at Geeta Bhawan Hospital. Class
              Presentation of B.B.A. “B” I Year on “Is Consumer really the king
              of the market in India?” Social Activity of B.Com. (C.A.) I year
              on “Adoption of Plants”. Department of Computer Science organized
              a workshop on “Fire Safety and Disaster Management by State
              Disaster Rescue Force”.
            </td>
          </tr>
          <tr>
            <td width="189">30-01-2020 :</td>
            <td width="609">
              Social Activity of B.B.A. “A” I Year at Visarjan Ashram. Class
              Presentation of B.B.A. “A” I Year on “Should online streaming
              sites censor their content?” Social Activity of B.C.A. II Year at
              Palasia Square on traffic Management. Social Activity of B.A. I
              Year at an Orphanage. Social Activity of B.B.A. III year at an Old
              Age Home. Class Presentation of B.B.A. III year on “Maintaining
              Professional Competency – Stress Management”. Social Activity of
              B.Sc. III year at Navlakha Bus Stand on Health and Hygiene Drive.
              Class Presentation of B.B.A. “B” I Year on “Iran and America War
              Conflict”. Social Activity of B.Com. (Hons.) III year at an Old
              Age Home.
            </td>
          </tr>
          <tr>
            <td width="189">31-01-2020 :</td>
            <td width="609">
              Class Presentation of B.Com. (Hons.) “B” II Year on “Reviving
              Childhood through act play of cartoon chat.” Class Presentation of
              B.com. (P) II Year on “My Contribution to My Society.” Class
              Presentation of B.Com. (C.A.) II Year on “Discussion of role of
              farmers in our life”. Class Presentation of B.A. II year on “What
              is my IQ?” Class Presentation of B.C.A. I Year on “Life Cherishing
              Memories”.
            </td>
          </tr>
          <tr>
            <td width="189">01-02-2020 :</td>
            <td width="609">
              Inter House Sports Competition begin. Social Activity of B.C.A. –
              III Year At AICTSL, Indore. Class Presentation of B.Com. (C.A.) I
              Year on “How to write answers in exam?” Social Activity of B.Com.
              (C.A.) I Year near College Area.
            </td>
          </tr>
          <tr>
            <td width="189">03-02-2020 :</td>
            <td width="609">
              Mr. Sachin Prajapati secured 1<sup>st</sup> Prize at the Inter
              College Dance Competition at the Maheshwari College.
            </td>
          </tr>
          <tr>
            <td width="189">04-02-2020 :</td>
            <td width="609">
              Language Lab Committee conducted Story Telling Competition. Class
              Presentation of B.B.A. II year on “Is world trying to dominate
              emerging India?” Class Presentation of B.B.A. “A” I year on
              “Impact of Indian HR on Interantional market”.
            </td>
          </tr>
          <tr>
            <td width="189">05-02-2020 :</td>
            <td width="609">
              Class Presentation of B.Sc. III Year “China is lagging behind
              India in software”. Class Presentation of B.C.A. III year on “If
              you can dream it, you can do it”.
            </td>
          </tr>
          <tr>
            <td width="189">06-02-2020 :</td>
            <td width="609">
              Presentation and Powerpoint committee organized a Story Telling
              Competition on “Every picture tells a story”. Social Activity of
              B.B.A. II year at Robert Nursing Home. Class Presentation of
              B.Com. (Hons.) III year on “How to reduce and cope with stress?”
              Class Presentation of B.Com. (Plain) I year on Exam Pattern.
            </td>
          </tr>
          <tr>
            <td width="189">07-02-2020 :</td>
            <td width="609">
              Language Lab Committee organized a Symposium on “Should life
              skills be the part of the Syllabus?” Class Presentation of B.C.A.
              III year on Block Chain Technology. NCC Committee organized a
              Poster Making Competition on Social Issues on Current Affairs.
              Guest lecture was organized by the Department of Commerce on
              Budget Analysis.
            </td>
          </tr>
          <tr>
            <td width="189">08-02-2020 :</td>
            <td width="609">Department of Humanities conducted Alumni Meet.</td>
          </tr>
          <tr>
            <td width="189">10-02-2020 :</td>
            <td width="609">
              Class Presentation of  B.B.A. “B” I year on “Key Highlights of
              Budget”. Class Presentation of B.Com. (Hons.) “B” I Year on
              “Leader v/s Leadership”. Class Presentation of B.C.A. III Year on
              Interview Preparation technique. Class Presentation of B.Sc. II
              Year on “AI can replace human intelligence”.
            </td>
          </tr>
          <tr>
            <td width="189">11-02-2020 :</td>
            <td width="609">
              Department of Humanities organized  Patriotic Poetry Recitation.
              Class Presentation of B.Com. (Hons.) “A” I year on Orientation on
              Exam Pattern.
            </td>
          </tr>
          <tr>
            <td width="189">12-02-2020 :</td>
            <td width="609">
              Class Presentation of B.A. II Year on “How can music help to
              reduce stress?” NCC Committee distributed stationery items at
              Bicholi Kakad Aanganwadi. National Workshop was organized on
              “Developing a compelling Research Narrative by Research Foundation
              of India”. Class Presentation of B.A. I Year on “Biometric
              Attendance in Student’s life with context to Corporate”. Class
              Presentation of B.C.A. II Year on “Honesty is the best policy”.
            </td>
          </tr>
          <tr>
            <td width="189">13-02-2020 :</td>
            <td width="609">
              Class Presentation of B.B.A. “A” I Year on “Communication Games”.
              Social Activity of B.B.A. “A” I Year at Navlakha Bus Stand for
              distribution of Non – Plastic Bags in the vegetable market. Social
              Activity of B.A. III Year at the Robert Nursing Home. Christian
              Students Association organized a session on “Christian Life and
              its implications”.
            </td>
          </tr>
          <tr>
            <td width="189">14-02-2020 :</td>
            <td width="609">
              Humanities Group Activity organized on the topic “Activity on
              Waste Management”. Class Presentation of B.Com. (Hons.) “B” II
              Year on “Determination and Sincerity is the key to success”. Class
              Presentation of B.A. I year On “Delhi Elections 2020”. Science
              Club Activity organized an activity on “Science Games”. Class
              Presentation of B.C.A. II Year on “Gen Z is handicapped without
              technology”. Class Presentation of B.B.A. III Year on “Learning
              experiences in SPIPS”.
            </td>
          </tr>
          <tr>
            <td width="189">15-02-2020 :</td>
            <td width="609">
              Class Presentation of B.A. III Year on “Literary Quiz”. Class
              Presentation of B.Com. (Tax) III Year on “Exam Stress Management”.
              Class Presentation of B.Com. (Hons.) “B” I Year on “Handling Exam
              Stress”. Social Activity of B.A. I Year at a Shelter Home for
              Animals. Social Activity of B.C.A. II Year at Pipliyahana Village.
            </td>
          </tr>
          <tr>
            <td width="189">17-02-2020 :</td>
            <td width="609">
              Class Presentation of B.A. III Year on “How can music help to
              reduce stress?” Gender Champions Club organized a session on
              “Human Trafficking and Abuse”. Class Presentation of B.A. I year
              on “Coping with Exam Stress”.
            </td>
          </tr>
          <tr>
            <td width="189">18-02-2020</td>
            <td width="609">
              Class Presentation of B.Com. (Plain) II Year on “How to write
              answers in final exam?” Class Presentation of B.B.A. II Year on
              “Indian Union Budget 2020 : Analysis and Impact”. Class
              Presentation of B.Com. (Tax) II Year on “Fear to Fearlessness”.
              Women and Child Protection Committee organized a drive for Traffic
              Awareness.
            </td>
          </tr>
          <tr>
            <td width="189">20-02-2020 :</td>
            <td width="609">
              University Practical Exam was conducted for B.Com. (C.A. ) I Year
              and II Year. Class Presentation of B.A. II Year on “Exam Phobia”.
              Stage Practice for Annual Function.
            </td>
          </tr>
          <tr>
            <td width="189">21-02-2020 :</td>
            <td width="609">Dress Rehearsal for Annual Function.</td>
          </tr>
          <tr>
            <td width="189">22-02-2020 :</td>
            <td width="609">
              X Annual Day was celebrated on the theme “My Country, My Pride” at
              St. Paul School Premises.
            </td>
          </tr>
          <tr>
            <td width="189">24-02-2020 :</td>
            <td width="609">
              Intra Departmental FEF was conducted on “Employee Engagement and
              Encouragement”.
            </td>
          </tr>
          <tr>
            <td width="189">25-02-2020</td>
            <td width="609">
              IQAC NAAC visit to the Department of Science and Physical
              Education by Father and Sister. CCT I begins for the Semester
              Classes. PUE begins for the Yearly Classes. Class Presentation of 
              M.Com. II Year on “Examination Tips”.
            </td>
          </tr>
          <tr>
            <td width="189">26-02-2020 :</td>
            <td width="609">
              IQAC of Humanities Department. Social Activity of B.C.A. I year at
              Malwa Mill Vegetable Market.
            </td>
          </tr>
          <tr>
            <td width="189">27-02-2020 :</td>
            <td width="609">
              IQAC of the Management Department. Farewell Program was conducted
              for the Batch 2020.
            </td>
          </tr>
          <tr>
            <td width="189">28-02-2020 :</td>
            <td width="609">
              EVPM was conducted in the Conference Hall. Class Presentation of
              B.Com. (C.A.) – II Year on “How to improve presentation of solving
              final exam paper?” Special Counseling and Tutorial Session for
              Hostel Girls.
            </td>
          </tr>
          <tr>
            <td width="189">29-02-2020 :</td>
            <td width="609">
              IQAC of the Computer Science Department. Intra Departmental FEF of
              the Management Department on “Under Employment v/s Unemployment”.
              Intra Departmental FEF of the Science Department on “How to
              balance personal &amp; professional life?” Thanksgiving cum
              Felicitation gathering for the participants of Annual Day
              Celebration.
            </td>
          </tr>
          <tr>
            <td width="189">02-03-2020 :</td>
            <td width="609">
              IQAC of the Commerce Department. Departmental Meeting of the
              Commerce Department.
            </td>
          </tr>
          <tr>
            <td width="189">06-03-2020 :</td>
            <td width="609">
              Dr. Ravi Vyas was awarded “Professor in Excellence in Higher
              Education” at the International Conference at SJMC  DAVV. Dr.
              Sarita Rana was the Guest Speaker at the International Conference.
            </td>
          </tr>
          <tr>
            <td width="189">09-03-2020 :</td>
            <td width="609">
              Staff Association organized Staff Picnic at Touchwood Resort.
            </td>
          </tr>
          <tr>
            <td width="189">10-03-2020 :</td>
            <td width="609">
              Prof. Gourav Rawal was the Guest Speaker at the IPS Academy on
              “Cyber Crime Prevention against Women”.
            </td>
          </tr>
          <tr>
            <td width="189">20-03-2020:</td>
            <td width="609">
              College closes operation due to Covid-19 pandemic
            </td>
          </tr>
          <tr>
            <td width="189">13-04-2020:</td>
            <td width="609">
              The distribution of E-notes to students was started by the faculty
              members. The Faculty members were regularly calling and
              interacting with students on the telephone.
            </td>
          </tr>
          <tr>
            <td width="189">21-04-2020:</td>
            <td width="609">
              A meeting was conducted by the Department of Commerce with the
              Director and the Principal on Zoom App.
            </td>
          </tr>
          <tr>
            <td width="189">29-04-2020:</td>
            <td width="609">
              Department of Commerce conducted a meeting with the faculty
              members of the commerce department.
            </td>
          </tr>
          <tr>
            <td width="189">07-05-2020:</td>
            <td width="609">
              Commerce department conducted FEF via Zoom meeting on the topic
              ‘How to prepare quiz’.
            </td>
          </tr>
          <tr>
            <td width="189">08-05-2020:</td>
            <td width="609">
              Meeting of the Director and the Principal with the Commerce
              Department.
            </td>
          </tr>
          <tr>
            <td width="189">13-05-2020:</td>
            <td width="609">
              Commerce group A meeting with the Director and the Principal.
            </td>
          </tr>
          <tr>
            <td width="189">15-05-2020:</td>
            <td width="609">
              Faculty meeting via Zoom app for ‘Online entertainment’ for
              students.
            </td>
          </tr>
          <tr>
            <td width="189">16-05-2020:</td>
            <td width="609">
              Online Entertainment Intra College Competitions begins with Solo
              singing for 1st year students.
            </td>
          </tr>
          <tr>
            <td width="189">18-05-2020:</td>
            <td width="609">
              Online Entertainment Intra college Solo singing competition for
              2nd year students was organised and results were declared
            </td>
          </tr>
          <tr>
            <td width="189">19-05-2020:</td>
            <td width="609">
              Online Entertainment Intra college Solo singing competition for
              3rd  year students was organised and results were declared
            </td>
          </tr>
          <tr>
            <td width="189">20-05-2020:</td>
            <td width="609">
              A meeting was held for the Department of Management. Online
              Entertainment Intra college Solo Dance competition  for 1st year
              students was organised and results were declared.
            </td>
          </tr>
          <tr>
            <td width="189">21-05-2020:</td>
            <td width="609">
              A meeting was held for the Department of Computer Science. Online
              Entertainment Intra college Solo Dance competition for 2nd year
              students was organised and results were declared.
            </td>
          </tr>
          <tr>
            <td width="189">22-05-2020:</td>
            <td width="609">
              A meeting was held for the Department of Humanities. Online
              Entertainment Intra college Solo Dance competition for 3rd year
              students was organised and results were declared.
            </td>
          </tr>
          <tr>
            <td width="189">23-05-2020:</td>
            <td width="609">
              A meeting was held for the Department of Commerce B group. Online
              Entertainment Intra college Solo Dance Final competition was
              organised and results were declared. One minute fitness challenge
              competition begins. Inter Class activity - Push Ups and sit up
              begins
            </td>
          </tr>
          <tr>
            <td width="189">24-05-2020:</td>
            <td width="609">
              Various competitions like Suryanamaskar, Skipping, squats and
              Jumping Jacks were organised.
            </td>
          </tr>
          <tr>
            <td width="189">25-05-2020:</td>
            <td width="609">
              Online Entertainment Intra college Cartooning competition for 1st
              year students was organised and results were declared. Online
              Entertainment Intra college Elocution competition for 1st year
              students was organised and results were declared.
            </td>
          </tr>
          <tr>
            <td width="189">26-05-2020:</td>
            <td width="609">
              Online Entertainment Intra college Elocution competition for 2nd
              year students was organised and results were declared. Online
              Entertainment Intra college Cartooning competition for 2nd year
              students was organised and results were declared. Department of
              Commerce organised a Webinar on the topic “Economic and
              Psychological Challenges and solutions post covid -19”.
            </td>
          </tr>
          <tr>
            <td width="189">27-05-2020:</td>
            <td width="609">
              Online Entertainment Intra college Cartooning competition for 3rdt
              year students was organised and results were declared. Online
              Entertainment Intra college Elocution competition for 1st year
              students was organised and results were declared.
            </td>
          </tr>
          <tr>
            <td width="189">28-05-2020:</td>
            <td width="609">
              Online Entertainment Intra college Debate competition for 1st year
              students was organised and results were declared. Department of
              Management organised a Webinar on the topic “ Self Reliant India:
              Opportunities and Threats”.
            </td>
          </tr>
          <tr>
            <td width="189">29-05-2020:</td>
            <td width="609">
              Online Entertainment Intra college Debate competition for 2nd year
              students was organised and results were declared. Online
              Entertainment Intra college Collage making competition for 2nd
              year students was organised and results were declared.
            </td>
          </tr>
          <tr>
            <td width="189">30-05-2020:</td>
            <td width="609">
              Online Entertainment Intra college Debate competition for 3rd year
              students was organised and results were declared. Online
              Entertainment Intra college Collage making competition for 3rd
              year students was organised and results were declared. Department
              of Computer Science organised an International Webinar on the
              topic “ Vibrating IT in post Covid-19 situation”. Department of
              Science organised a Webinar on the topic” Career opportunities in
              the New Era”.
            </td>
          </tr>
          <tr>
            <td width="189">31-05-2020:</td>
            <td width="609">
              Department of Humanities organised a National Webinar on the topic
              “ Mental Health and Well being amidst various calamities”.
            </td>
          </tr>
          <tr>
            <td width="189">01-06-2020:</td>
            <td width="609">
              Online Entertainment Intra college Elocution, Cartooning, Debate,
              Collage Making competition Finals were organised and results were
              declared.
            </td>
          </tr>
          <tr>
            <td width="189">05-06-2020:</td>
            <td width="609">
              Inter- Collegiate E- competitions 2020 Talent Vista creativity
              unlocked begins. Various activities like Solo Dance, Solo Singing,
              Elocution, Face Painting, Nail Art, Mimicry, Poetry Recitation,
              Smart Cooking, Hair Style, Fashionable Ramp walk were organised.
            </td>
          </tr>
          <tr>
            <td width="189">08-06-2020:</td>
            <td width="609">
              Department of Physical Education organised an International
              Webinar on the Topic “ Managing Physical Fitness of body and
              mind”.
            </td>
          </tr>
          <tr>
            <td width="189">11-06-2020:</td>
            <td width="609">
              The Facebook and Instagram page of college was launched. The
              students of B.Com.(Honours)- B organised a webinar on ‘Atmanirbhar
              Bharat’.
            </td>
          </tr>
          <tr>
            <td width="189">13-06-2020:</td>
            <td width="609">
              A meeting was held for commerce group A and B. Department of
              Computer Science organised a session for Alumni on the topic
              “Career opportunities and admission process”.
            </td>
          </tr>
          <tr>
            <td width="189">15-06-2020:</td>
            <td width="609">
              Department of Physical Education started online Yoga classes
              everyday for 35 min for all students. Department of Computer
              Science organised a webinar on ‘ABC of Python for beginners”.
            </td>
          </tr>
          <tr>
            <td width="189">17-06-2020:</td>
            <td width="609">
              Department of Computer Science organised a Guest lecture on
              ‘Basics of Android Programming”.
            </td>
          </tr>
          <tr>
            <td width="189">18-06-2020:</td>
            <td width="609">
              Department of Management conducted  an Alumni session.
            </td>
          </tr>
          <tr>
            <td width="189">19-06-2020:</td>
            <td width="609">
              Various PD activities like - ‘Bujho tho jane : khel khel mein hal
              kare paheliya’, Memory games and Presentation and Online
              Entertainment were conducted.
            </td>
          </tr>
          <tr>
            <td width="189">20-06-2020:</td>
            <td width="609">
              The PD activities like ‘One Minute Elocution, Presentation and
              Discussion, Aao, /Sikhe Hindi mein Ginti were conducted for the
              students.
            </td>
          </tr>
          <tr>
            <td width="189">21-06-2020:</td>
            <td width="609">
              Computer Science department organised a ‘Technical Quiz 2020’ for
              all BCA semester classes.
            </td>
          </tr>
          <tr>
            <td width="189">22-06-2020:</td>
            <td width="609">
              Department of COmmerce organised an Expert Talk on the topic “
              Digital Marketing and E-Commerce Challenges &amp; Opportunities
              for Institutions of Higher Education during and Post Covid 19”.
              BCA 1st year conducted a PD activity on ‘Power of Positive
              Thinking’. Department of Humanities organised a poem competition.
            </td>
          </tr>
          <tr>
            <td width="189">23-06-2020:</td>
            <td width="609">
              PD activity for BA 1st year students was conducted.
            </td>
          </tr>
          <tr>
            <td width="189">24-06-2020:</td>
            <td width="609">
              Department of Computer Science organised a webinar on the topic
              “Significance of Forensic Science and Cyber Crime Investigation in
              Covid 19 situation”. PD activity for BA 2nd year students on the
              topic ‘Will students be happy by general promotion’. PD activity
              for B.Com. (Tax.) 1st year students on the topic ‘Will students be
              happy by general promotion’. Departmental, “Story Telling
              Activity” was conducted by the Commerce department.
            </td>
          </tr>
          <tr>
            <td width="189">25-06-2020:</td>
            <td width="609">
              Women and Child Protection Committee conducted a webinar on the
              topic ‘Child rights and Covid 19’.
            </td>
          </tr>
          <tr>
            <td width="189">26-06-2020:</td>
            <td width="609">
              Department of Science organised an Interactive session with Alumni
              Association on the topic “ How to prepare for competitive exams”.
              Department of Humanities conducted Intra departmental FEF on the
              topic “ How can we make the Online Classes more interesting for
              students. Department of Management conducted an activity  ‘Meraki:
              Talk your way competition’
            </td>
          </tr>
          <tr>
            <td width="189">27-06-2020:</td>
            <td width="609">
              An International Virtual Conference was organised in association
              with RFI and World Virtual Conference forum.
            </td>
          </tr>
          <tr>
            <td width="189">28-06-2020:</td>
            <td width="609">
              PD activity was conducted for B.Com. FT II year on ‘Posting of
              Motivational Videos’. Department of Physical Education organised a
              Quiz on the topic ‘Physical Fitness with Covid-19 awareness’. The
              Management Department organised a webinar on “Marketing strategies
              for business in the New Normal’”. The Feast Day of Father
              Director, Rev. Fr. Simon Raj was celebrated in the college.
            </td>
          </tr>
          <tr>
            <td width="189">30/06/2020:</td>
            <td width="609">
              Commerce department conducted activities on “Success story of
              SPIPS Aluma and Career Counselling”. The NSS Committee organised a
              session on ‘Mental Health Matters’.
            </td>
          </tr>
        </tbody>
      </table>
    </>
  ),
  "Happenings 2018-19": (
    <>
      <table className="w-100">
        <tbody>
          <tr>
            <td width="138">05-06-2018</td>
            <td width="540">
              World Environment Day. to commemorate the day saplings were
              planted in the college premises by the Director, Principal,
              Faculty members and students.
            </td>
          </tr>
          <tr>
            <td width="138">09-06-2018</td>
            <td width="540">
              Commencement of the Common Class Test for BBA and BCA II sem
              students.
            </td>
          </tr>
          <tr>
            <td width="138">21-06-2018</td>
            <td width="540">
              International Yoga Day. To mark the day, our students performed
              Yoga in the college.
            </td>
          </tr>
          <tr>
            <td width="138">23-06-2018</td>
            <td width="540">
              NSS &amp; NCC students participated in Prime Minister, Mr.
              Narendra Modi’s assembly at Nehru Stadium along with faculty
              incharges.
            </td>
          </tr>
          <tr>
            <td width="138">25-06-2018</td>
            <td width="540">
              Faculty Enrichment Programme. The IQA cell organized the session
              with Mr. Leonard Brown, Renowned educationist as resource person.
            </td>
          </tr>
          <tr>
            <td width="138">29-06-2018</td>
            <td width="540">
              Feast Day Celebration of the Director. The feast day of the
              Director, Rev. Fr. Simon Raj was celebrated during the morning
              assembly in the luminous hall. Later the Staff Association
              organised a gathering of staff and faculty members to wish and
              felicitate our honorable Director.
            </td>
          </tr>
          <tr>
            <td width="138">03-07-2018</td>
            <td width="540">
              Welcome cum Orientation Programme for the new batch of students.
              Cultural Programme was organised for the new batch of students by
              senior students. The Annual Magazine ‘Luminous’ was released.
            </td>
          </tr>
          <tr>
            <td width="138">04-07-2018</td>
            <td width="540">Classes commenced for First Year students.</td>
          </tr>
          <tr>
            <td width="138">09-07-2018</td>
            <td width="540">
              English Magic Classes were conducted for the students to improve
              their English and communication skills by Rev. Dr. Fr. Jolly. The
              classes started from 09th July and continued till 14th July.
            </td>
          </tr>
          <tr>
            <td width="138">14-07-2018</td>
            <td width="540">
              An emotional farewell was bid to Dr. Pragati Jain &amp; Prof.
              Vikas Rathore during the morning assembly. Both were presented
              with a token of love on behalf of the Staff Association.
            </td>
          </tr>
          <tr>
            <td width="138">16-07-2018</td>
            <td width="540">
              Welcome cum Orientation Programme was organised for the II and III
              Year students in the auditorium. Cultural programme was conducted,
              also PPT was Presented on the topic ‘Matters of well being’.
            </td>
          </tr>
          <tr>
            <td width="138">19-07-2018</td>
            <td width="540">
              Department of Commerce organised a programme to inaugurate
              Commerce Club. Prof. Pranay Karnik, the resource person, took an
              engaging session. A memento was presented to him for his
              informative and knowledgeable session.
            </td>
          </tr>
          <tr>
            <td width="138">20-07-18:</td>
            <td width="540">
              NSS Committee organised an Orientation Programme for the new
              members of the NSS team. Principal’s motivational message and
              Directors inspiring sharing were the key highlights.
            </td>
          </tr>
          <tr>
            <td width="138">21-07-2018</td>
            <td width="540">
              Department of Computer Science organised a ‘Guest lecture on
              Impact of IT in Daily Life and also inauguration of IT Club was
              done on the same day. An insightful lecture was delivered by the
              resource person Dr. Pratosh Bansal, HOD, IET, DAVV, Indore.
            </td>
          </tr>
          <tr>
            <td width="138">26-07-2018</td>
            <td width="540">
              9th Foundation cum Freshers’ Talent show day was organised in the
              auditorium. The colourful programme included many types of dance
              forms on different themes, performed by the students.
            </td>
          </tr>
          <tr>
            <td width="138">30-07-2018</td>
            <td width="540">
              Department of Management organised a Guest Lecture. The resource
              person, Mr. Pankaj Kothari delivered an insightful session for all
              the participants.
            </td>
          </tr>
          <tr>
            <td width="138">31-07-2018</td>
            <td width="540">
              The Career and skill development committee organized the session
              on Career Awareness &amp; Opportunities in the Financial Market.
            </td>
          </tr>
          <tr>
            <td width="138">04-08-2018</td>
            <td width="540">
              Department of Humanities organized an Invited Talk. An Interactive
              session was taken by the resource person, Deputy Collector, Mr.
              Rakesh Sharma.
            </td>
          </tr>
          <tr>
            <td width="138">07-08-2018</td>
            <td width="540">
              A visit to the Jeevan Jyoti Orphanage was organised for the
              students of BBA I sem.
            </td>
          </tr>
          <tr>
            <td width="138">09-08-2018</td>
            <td width="540">
              Department of Management organised “ Agamya Business Quiz”. The
              programme was successfully conducted and winners were awarded with
              the honorary prizes.
            </td>
          </tr>
          <tr>
            <td width="138">11-08-2018</td>
            <td width="540">
              18th PPA Executive Committee meeting was conducted.
            </td>
          </tr>
          <tr>
            <td width="138"></td>
            <td width="540">
              A Symposium was organised by the Research and Journal Committee.
              The topic for the discussion was ‘Development of Social and
              Personal Media and Changing dimension of Relationships’
            </td>
          </tr>
          <tr>
            <td width="138">14-08-2018</td>
            <td width="540">
              Interclass Psychology Quiz was organised by the Department of
              Humanities.
            </td>
          </tr>
          <tr>
            <td width="138">15-08-2018</td>
            <td width="540">
              72nd Independence Day was celebrated at the college. Chief guest
              Mr. &amp; Mrs. Gyanendra Purohit (Social Activities) shared their
              journey of helping and motivating others inspiring the audience to
              do the same.
            </td>
          </tr>
          <tr>
            <td width="138">17-08-2018</td>
            <td width="540">
              Holiday declared due to the sad demise of former Prime Minister
              Shri Atal Bihari Vajpyee.
            </td>
          </tr>
          <tr>
            <td width="138">23-08-2018</td>
            <td width="540">Inter- House Art competitions</td>
          </tr>
          <tr>
            <td width="138">24-08-2018</td>
            <td width="540">Inter House Literary Competitions</td>
          </tr>
          <tr>
            <td width="138">28-08-2018</td>
            <td width="540">
              Career, Skill Development and Placement committee organised a
              wonderful session on ‘Magic of Communication’.
            </td>
          </tr>
          <tr>
            <td width="138">29-08-2018</td>
            <td width="540">
              Inter House Sports activities were organised from 29th Aug. to
              31st Aug. 2018.
            </td>
          </tr>
          <tr>
            <td width="138">01-09-2018</td>
            <td width="540">
              Inter House Solo singing competitions. The competition started
              with classical solo singing and was followed by western solo
              singing performances.
            </td>
          </tr>
          <tr>
            <td width="138">04-09-2018</td>
            <td width="540">
              Department of Computer Science organised an industrial visit for
              the student of BCA 1st Year to Atal Indore City Transport Services
              Limited (AICTSL).
            </td>
          </tr>
          <tr>
            <td width="138">14-09-2018</td>
            <td width="540">
              Open Discussion on Answer Questions from the Bible was organised
              by Christian student Association in the AV room.
            </td>
          </tr>
          <tr>
            <td width="138">15-09-2018</td>
            <td width="540">The Department of Humanities Alumni meet.</td>
          </tr>
          <tr>
            <td width="138"></td>
            <td width="540">
              Inter house cultural competitions were organised at 10:10 a.m. in
              the auditorium.  Event included Solo dance, skit and group dance
              performances.
            </td>
          </tr>
          <tr>
            <td width="138">17-09-2018</td>
            <td width="540">Second day of Inter house cultural competition.</td>
          </tr>
          <tr>
            <td width="138">18-09-2018</td>
            <td width="540">
              Study Leave for preparation of CCT I for the first and second Year
              students.
            </td>
          </tr>
          <tr>
            <td width="138">19-09-2018</td>
            <td width="540">
              Common Class Tests were conducted for all the first Year students
              from 19th to 22nd September.
            </td>
          </tr>
          <tr>
            <td width="138"></td>
            <td width="540">
               Inter-college badminton competition was organised under the care
              of the Department of physical education and sports committee.
            </td>
          </tr>
          <tr>
            <td width="138">20-09-2018</td>
            <td width="540">
              The students of B.Com. plain III Year went for a social visit.
            </td>
          </tr>
          <tr>
            <td width="138">25-09-2018</td>
            <td width="540">Class presentation of B.Com. Tax 2nd Year.</td>
          </tr>
          <tr>
            <td width="138"></td>
            <td width="540">
              The Department of Commerce organised a story telling competition
              in the seminar hall.
            </td>
          </tr>
          <tr>
            <td width="138"></td>
            <td width="540">
              Annual NSS special camp of 7 days began from 25th September and
              lasted till 1st October.
            </td>
          </tr>
          <tr>
            <td width="138">26-09-2018</td>
            <td width="540">
              The Department of Science organised a poster cum model exhibition
              and competition in room number 222. Director Rev. Father Simon Raj
              and Principal Dr. Sr. Alice Thomas inaugurated the exhibition.
            </td>
          </tr>
          <tr>
            <td width="138">28-09-2018</td>
            <td width="540">
               Inter College quiz competition organised by the Department of
              Humanities in the college auditorium.
            </td>
          </tr>
          <tr>
            <td width="138">29-09-2018</td>
            <td width="540">The Department of science Alumni meet.</td>
          </tr>
          <tr>
            <td width="138"></td>
            <td width="540">
              Evaluation and Planning Meeting for the month of September.
            </td>
          </tr>
          <tr>
            <td width="138">02-10-2018</td>
            <td width="540">
              Parents Professors Association organised the Annual General Body
              Meeting wherein a session on Parenting was conducted followed by
              an open discussion and election of the new executive committee
              members.
            </td>
          </tr>
          <tr>
            <td width="138">05-10-2018</td>
            <td width="540">
              The career and skills development committee organised a session on
              resume building and Interview preparation.
            </td>
          </tr>
          <tr>
            <td width="138">06-10-2018</td>
            <td width="540">
              The students of B.C.A I Year were taken for an educational visit
              to Indore airport.
            </td>
          </tr>
          <tr>
            <td width="138"></td>
            <td width="540">The Department of computer science Alumni meet.</td>
          </tr>
          <tr>
            <td width="138">08-10-2018</td>
            <td width="540">
              Inter house outdoor games competitions were organised from 8th to
              12th October, post regular lectures.
            </td>
          </tr>
          <tr>
            <td width="138">11-10-2018</td>
            <td width="540">
              On the occasion of the world sight day a special program was
              organised during the morning assembly.
            </td>
          </tr>
          <tr>
            <td width="138"></td>
            <td width="540">
              Later the NSS volunteers along with other students drew human eye
              and an oath taking was done. The oath was administered by the
              Principal, Dr sister Alice Thomas.
            </td>
          </tr>
          <tr>
            <td width="138">13-10-2018</td>
            <td width="540">
              Under the care of program committee, an Inter College folk and
              tribal dance competition, Euphoria 2018 was organised in the
              auditorium. The judges of the competition were Mr. Rohit Ameriya,
              Mrs. Aditi Ahir and Ms. Priyanka Gagre. Students from 12 colleges
              participated in the event.
            </td>
          </tr>
          <tr>
            <td width="138">15-10-2018</td>
            <td width="540">
              The Christian students Association organised a Bible quiz . Both
              the written and oral round were conducted on the same day.
            </td>
          </tr>
          <tr>
            <td width="138">17-10-2018</td>
            <td width="540">
              The Department of Management organised an Ad Mad Show in the
              auditorium.
            </td>
          </tr>
          <tr>
            <td width="138">18-10-2018</td>
            <td width="540">
              As a part of election awareness program, a session was organised
              in the auditorium with the tehsildar Mrs. Nidhi Dhakad as a
              resource person.
            </td>
          </tr>
          <tr>
            <td width="138">22-10-2018</td>
            <td width="540">
              Meeting   of SPIPS choir was held in the AV room. Useful tips were
              shared by the music committee and a motivational address was
              delivered by the Director Rev. Fr. Simon Raj.
            </td>
          </tr>
          <tr>
            <td width="138"></td>
            <td width="540">
              A session on ‘Carve a niche through effective public speaking’ was
              organised by Department of management in the seminar hall. The
              resource person was CA Mr. Pankaj Kothari.
            </td>
          </tr>
          <tr>
            <td width="138">23-10-2018</td>
            <td width="540">
              The students of B.Com. (F.T.) 2nd Year conducted a class
              presentation.
            </td>
          </tr>
          <tr>
            <td width="138">25-10-2018</td>
            <td width="540">
              The Department of Commerce organised a session titled importance
              of verbal ability for Commerce students in the seminar hall.  The
              resource person was Miss Sonia Saluja.
            </td>
          </tr>
          <tr>
            <td width="138">26-10-2018</td>
            <td width="540">
              Class Presentations of B.Com. (F.T.) III Year and B.Com. (F.T.) I
              Year students were conducted.
            </td>
          </tr>
          <tr>
            <td width="138">27-10-2018</td>
            <td width="540">
              A common faculty and teaching faculty program was conducted by
              Department of Humanities under the care of Dr. Mamta Paithankar
              and Dr. Swati Singh in the seminar hall.
            </td>
          </tr>
          <tr>
            <td width="138">31-10-2018</td>
            <td width="540">
              Birthday of the Director, Rev. Fr. Simon Raj was celebrated during
              the morning assembly. A special program was organised at noon by
              the Staff Association to convey the heartfelt birthday greetings
              to the Director.
            </td>
          </tr>
          <tr>
            <td width="138">01-11-2018</td>
            <td width="540">
              Celebration of Madhya Pradesh Foundation Day in the AV room by
              B.Com Hons. I Year (B) students.
            </td>
          </tr>
          <tr>
            <td width="138">03-11-2018</td>
            <td width="540">Diwali celebration during morning assembly.</td>
          </tr>
          <tr>
            <td width="138">13-11-2018</td>
            <td width="540">
              An industrial exposure and study tour to Delhi and Agra was
              organised for II Year students from 13th to 17th November.
            </td>
          </tr>
          <tr>
            <td width="138">14-11-2018</td>
            <td width="540">
              Display Board Committee organised a cover page designing
              competition for newsletter Krist Jayanti.
            </td>
          </tr>
          <tr>
            <td width="138">15-11-2018</td>
            <td width="540">
              Guest talk on inculcating christian values in college life
              organised by Christian Students Association.
            </td>
          </tr>
          <tr>
            <td width="138">17-11-2018</td>
            <td width="540">
              The Internal Quality Assurance Cell organised a session titled
              “Reflection over spiritual quotient and Science quest”.  The
              resource person was Dr. Stephen, Faculty of Philosophy Jnanadeepa
              Vidyapeeth, Pune.
            </td>
          </tr>
          <tr>
            <td width="138">19-11-2018</td>
            <td width="540">
              The Department of Commerce organised a practical seminar on
              applying for the passport by Dr Vishal Mehta, Head of the
              Department.
            </td>
          </tr>
          <tr>
            <td width="138">22-11-2018</td>
            <td width="540">NCC day was celebrated during morning assembly.</td>
          </tr>
          <tr>
            <td width="138">24-11-2018</td>
            <td width="540">One day staff picnic to Udaianagar.</td>
          </tr>
          <tr>
            <td width="138">26-11-2018</td>
            <td width="540">
              0Felicitation of Prof. Arvind Jain and Prof. Mili Singh on being
              conferred their doctorate degrees.
            </td>
          </tr>
          <tr>
            <td width="138">27-11-2018</td>
            <td width="540">
              The Principal, Dr. Sr. Alice Thomas was invited as a resource
              person during a National seminar on Evangelism in Bhopal from 27
              to 29 November.
            </td>
          </tr>
          <tr>
            <td width="138">28-11-2018</td>
            <td width="540">
              The Department of Commerce conducted an activity titled “Case
              study on farmers distress” in the AV room.
            </td>
          </tr>
          <tr>
            <td width="138">29- 11-2018</td>
            <td width="540">
              The Department of Computer Science organised a Guest Lecture.  The
              resource person was Mr. Abhishek Shekhawat.
            </td>
          </tr>
          <tr>
            <td width="138">01-12-2018</td>
            <td width="540">
              The World AIDS Day was observed during the morning assembly.
            </td>
          </tr>
          <tr>
            <td width="138">04-12-2018</td>
            <td width="540">
              Common Class Test 2 for all the first and second Year students
              conducted on 4, 6 and 8 December.
            </td>
          </tr>
          <tr>
            <td width="138">13-12-2018</td>
            <td width="540">
              The Students Welfare Committee organised an open house in the
              seminar hall to get the suggestions and queries of the students.
            </td>
          </tr>
          <tr>
            <td width="138">15-12-2018</td>
            <td width="540">
              The Department of Commerce organised a presentation on Carbon
              footprints.
            </td>
          </tr>
          <tr>
            <td width="138">18-12-2018</td>
            <td width="540">
              The Christian Students Association and the Program Committee
              organised an audio-visual program during the morning assembly to
              celebrate Christmas.
            </td>
          </tr>
          <tr>
            <td width="138">19-12-2018</td>
            <td width="540">
              Christmas celebration of staff was conducted with a card exchange
              program. A gathering in which the Principal and the Director
              extended their heartfelt greetings to the fraternity.
            </td>
          </tr>
          <tr>
            <td width="138"></td>
            <td width="540">
              The Christmas celebration of the extended family was conducted in
              the Auditorium at 5:30 p.m..  The chairman of the college most
              Rev. Bishop  Chacko, Vice Chancellor of DAVV, Dr. Narendra Dhakad
              and Registrar of DAVV, Dr. Ajay Verma was the special guest.
              Refreshments, games and dinner were the special highlights of the
              program.
            </td>
          </tr>
          <tr>
            <td width="138">02-01-2019</td>
            <td width="540">
              A special program was organised during morning assembly on the
              occasion of New Year.
            </td>
          </tr>
          <tr>
            <td width="138">10-01-2019</td>
            <td width="540">
               The 9th annual Athletics Meet was organised in the college from
              10th to 12th January.
            </td>
          </tr>
          <tr>
            <td width="138">12-01-2019</td>
            <td width="540">
              The National Youth Day was duly celebrated during the morning
              assembly by the NCC committee. Surya Namaskar was demonstrated by
              the NCC officer Dr Avinash Yadav and his cadets.
            </td>
          </tr>
          <tr>
            <td width="138">15-01-2019</td>
            <td width="540">
              Army Day was celebrated during the morning assembly.
            </td>
          </tr>
          <tr>
            <td width="138"></td>
            <td width="540">
               Prof. Tabi Nandan Joshi was felicitated during the morning
              assembly on being conferred with his doctorate degree.
            </td>
          </tr>
          <tr>
            <td width="138">17-01-2019</td>
            <td width="540">
              Inter house antakshari competition was conducted in the
              auditorium.
            </td>
          </tr>
          <tr>
            <td width="138">19-01-2019</td>
            <td width="540">
              Our students Mr. Arpit Malviya and Shivansh Malviya were
              felicitated during morning assembly for securing third position
              and bronze Trophy in 24th International animation award 2018.  The
              winners were felicitated by the Director and Principal.
            </td>
          </tr>
          <tr>
            <td width="138">21-01-2019</td>
            <td width="540">
              The Gender Champions Club organised a session titled  “Gender in
              equity” in the AV room.
            </td>
          </tr>
          <tr>
            <td width="138">23-01-2019</td>
            <td width="540">
              Mr. Noyal Shaji (student) was felicitated during the morning
              assembly for securing third position in Inter College singing
              competition.
            </td>
          </tr>
          <tr>
            <td width="138">24-01-2019</td>
            <td width="540">
              A special program was organised during morning assembly on the
              occasion of National Girl Child Day.
            </td>
          </tr>
          <tr>
            <td width="138">25-01-2019</td>
            <td width="540">
              The patron’s day of the college was celebrated. A special program
              organised at 9:00 p.m. in the auditorium.  70 Sewing Machines were
              distributed to the needy and underprivileged women.  The Machines
              were sponsored by the members of SPIPS fraternity.
            </td>
          </tr>
          <tr>
            <td width="138"></td>
            <td width="540">
              On the same day the Department of Commerce organised the SPIPS
              Fiesta 2019.
            </td>
          </tr>
          <tr>
            <td width="138">26-1-2019</td>
            <td width="540">
              The 70th Republic Day of the nation was jovially celebrated on the
              college campus. The chief guest was Colonel Ranjit Singh Sarup. An
              effervescent parade by the NCC cadet was the highlight of the day
            </td>
          </tr>
          <tr>
            <td width="138">28-1-2019</td>
            <td width="540">
              Evaluation and Planning Meeting for the month of January.
            </td>
          </tr>
          <tr>
            <td width="138">30-1-2019</td>
            <td width="540">
              One minute silence was observed at 11 a.m. to mark the Martyrs
              Day.
            </td>
          </tr>
          <tr>
            <td width="138">31-01-2019</td>
            <td width="540">
              The Department of Humanities organised a nail art competition.
            </td>
          </tr>
          <tr>
            <td width="138">01-02-2019</td>
            <td width="540">
              The students of B.Com. Tax II Year visited the village adopted by
              the college that is Bicholi Kakad village.
            </td>
          </tr>
          <tr>
            <td width="138"> 06-02-2019</td>
            <td width="540">
              Ms. Danisha Pal (student) was felicitated during the morning
              assembly for having secured first position in the state level
              Youth Festival competition in elocution competition.
            </td>
          </tr>
          <tr>
            <td width="138">09-02-2019</td>
            <td width="540">
              Common Class Test for all the semester classes was conducted from
              9th to 11th February.
            </td>
          </tr>
          <tr>
            <td width="138">11-02-19</td>
            <td width="540">
              Ms. Parul Chauhan, Ms. Areman Khan and Mr Pradeep Sisodiya
              (students) were felicitated during the morning assembly for
              presenting research paper in an International conference held at
              Prestige Institute of Management and Research Indore.
            </td>
          </tr>
          <tr>
            <td width="138">15-02-2019</td>
            <td width="540">
              Meeting of the Students representative body was held with the
              Director, Principal and few members of faculty.
            </td>
          </tr>
          <tr>
            <td width="138"></td>
            <td width="540">
              The Department of Computer Science organised a National Seminar on
              vulnerable secure and solution in the Seminar Hall. The resource
              person was Dr Maya Ingle.
            </td>
          </tr>
          <tr>
            <td width="138">16-02-2019</td>
            <td width="540">
              The Department of Management organised a National Seminar on
              promising sustainability through green management in the seminar
              hall. The Vice Chancellor Dr Narendra Dhakad was a special
              invitee.
            </td>
          </tr>
          <tr>
            <td width="138">23-02-2019</td>
            <td width="540">
              9th Annual Day of the college was celebrated with pomp and show in
              the college premises. The program entailed beautiful and
              effervescent performances by the students of SPIPS. The Chief
              Guest of the occasion was Mr. Kurian Joseph, former honorable
              Justice, Supreme Court of India and the preceding guest was the
              Chairman of college Most Reverend Dr. Chacko Thottomurikkal,
              Bishop Indore.
            </td>
          </tr>
          <tr>
            <td width="138">26-02-2019</td>
            <td width="540">
              The Department of Science organised a National Seminar on
              contribution of science in the 21st century in the seminar hall.
            </td>
          </tr>
          <tr>
            <td width="138">27-02-2019</td>
            <td width="540">
              Evaluation and Planning Meeting for the month of February was
              held.
            </td>
          </tr>
          <tr>
            <td width="138">02-03-2019</td>
            <td width="540">
              The Department of Humanities organised a National Seminar titled
              “Technology and Society -  A contemporary scenario and future
              challenges” in the seminar hall.
            </td>
          </tr>
          <tr>
            <td width="138">08-03-2019</td>
            <td width="540">
              The International Women&apos;s Day was celebrated during the
              morning assembly and a special program to mark the day was
              organised.
            </td>
          </tr>
          <tr>
            <td width="138">09-03-2019</td>
            <td width="540">
              Common Class Test was organised for all the 6th semester students.
            </td>
          </tr>
          <tr>
            <td width="138">09-03-2019</td>
            <td width="540">
              Pre-University exam was conducted for all the first and second
              Year classes.
            </td>
          </tr>
          <tr>
            <td width="138">18-03-2019</td>
            <td width="540">
              Felicitation program was conducted for the participants and
              volunteers of the 9th Annual Day celebration.
            </td>
          </tr>
          <tr>
            <td width="138">20-03-2019</td>
            <td width="540">
              The Department of Commerce organised a National Conference on
              ethics and values and correcting superior value transformation in
              seminar hall.
            </td>
          </tr>
          <tr>
            <td width="138">22-03-2019</td>
            <td width="540">
              An emotional and solemn farewell program was organised for the
              final Year students. The lamp giving ceremony was the highlight of
              the occasion.
            </td>
          </tr>
          <tr>
            <td width="138">23-03-2019</td>
            <td width="540">
              The birthday of Principal Dr Sr. Alice Thomas was celebrated at
              Ralamandal.
            </td>
          </tr>
          <tr>
            <td width="138">29-03-2019</td>
            <td width="540">
              The evaluation and planning meeting for the month of March was
              held.
            </td>
          </tr>
          <tr>
            <td width="138">12-04-2019</td>
            <td width="540">
              Prof. Rahat Ahmed, HOD Department of Humanities was the resource
              person in a guest lecture organised for BCA I Year students.
            </td>
          </tr>
          <tr>
            <td width="138">18-04-2019</td>
            <td width="540">
              Anticipatory Celebration of Good Friday and Easter in the morning
              assembly.
            </td>
          </tr>
          <tr>
            <td width="138"></td>
            <td width="540">
              University exams of the BBA and BCA I Year students - 18th to 24th
              April.
            </td>
          </tr>
          <tr>
            <td width="138">22-04-2019</td>
            <td width="540">
              A debate competition was organised by the Department of Humanities
              on the topic ‘Are teachers to be symbolised as teachers in the
              present scenario?’
            </td>
          </tr>
          <tr>
            <td width="138">23-04-2019</td>
            <td width="540">
              On the occasion of World Book and Copyright Day, a special program
              was conducted during the morning assembly by the library
              committee.
            </td>
          </tr>
          <tr>
            <td width="138">04-06-2019</td>
            <td width="540">
              Anticipation of Eid-ul-Fitr and World Environment Day was done
              during the morning assembly in the form of a special program.
            </td>
          </tr>
          <tr>
            <td width="138">06-06-2019</td>
            <td width="540">
              A faculty development program was organised by the Internal
              Quality Assurance Cell. The resource person was Dr Thomas C Mathew
              ex Vice Chancellor Christ University. The topic of the program was
              bridging the skills gap.
            </td>
          </tr>
          <tr>
            <td width="138">07-06-2019</td>
            <td width="540">
              Intra-Departmental FEF of the Department of Commerce was
              conducted.
            </td>
          </tr>
          <tr>
            <td width="138">08-06-2019</td>
            <td width="540">
              An Intra-Departmental extempore session was organised by the
              Department of Humanities.
            </td>
          </tr>
          <tr>
            <td width="138">21-06-2019</td>
            <td width="540">
              International Yoga Day was celebrated in the college. The NCC and
              NSS participants performed various yoga Aasan.
            </td>
          </tr>
          <tr>
            <td width="138">22-06-2019</td>
            <td width="540">
              Evaluation and Planning meeting was conducted for the month of
              June.
            </td>
          </tr>
          <tr>
            <td width="138">26-06-2019</td>
            <td width="540">
              To commemorate the International Day against drug abuse of illicit
              trafficking a drawing competition was organised.
            </td>
          </tr>
          <tr>
            <td width="138">29-06-2019</td>
            <td width="540">
              Feast Day of the Director Rev. Father Simon Raj was celebrated
              enthusiastically during the morning assembly. The special festival
              greeting song by the faculty Choir was the highlight of the day.
              The fraternity extended greeting to the Director.
            </td>
          </tr>
        </tbody>
      </table>
    </>
  ),
  "Happenings 2017-18": (
    <>
      <table className="w-100">
        <tbody>
          <tr>
            <td width="85">
              <strong>0</strong>
              <strong>3</strong>
              <strong>-07-2017</strong>
            </td>
            <td width="516">
              The Academic Year 2017-18 commenced with a two days splendid
              welcome cum orientation programme for the first year students. A
              two days Welcome cum Orientation Programme was organized for the
              new batch of students. They were given a fraternal welcome by the
              II and III year students. In a special programme organized for the
              students of the first year, ten themes relating to our college
              were presented to them by our Faculty Members.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>05-07-2017</strong>
            </td>
            <td width="516">
               Regular classes commenced for the first year students. A four
              days English Magic Classes for the First Year students was also
              conducted by Rev. Fr. Jolly John.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>08-07-2017</strong>
            </td>
            <td width="516">
              An engaging and illuminating Faculty Enriching Programme was
              conducted by the Principal, Dr. Sr. Alice Thomas
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>17-07-2017</strong>
            </td>
            <td width="516">
              ‘My Earth, My Duties’ an awareness programme was conducted by the
              NCC Committee in the Morning Assembly to generate awareness about
              Mother Earth.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>19-07-2017</strong>
            </td>
            <td width="516">
              Meeting of the all the first year Christian students was held.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>20-07-2017</strong>
            </td>
            <td width="516">
              A heartening welcome programme was organized for the Second, Third
              year and Post Graduate students.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>26-07-2017</strong>
            </td>
            <td width="516">
              The Eighth Foundation Day cum Freshers’ Talent Show Day was
              celebrated in a spectacular way. The Chairman of the College,
              Bishop Most Rev. Chacko T.J was the Chief Guest. The Newsletter
              ‘Suswagatham’ was released during the programme. A Prize
              Distribution Ceremony was held. The Non-Teaching Staff were
              felicitated too.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>28-07-2017</strong>
            </td>
            <td width="516">
               A Guest Lecture on Goods and Service Tax (GST) was organized by
              the Commerce Department, Mr. Prateek Gattani and Mr. Madhav
              Tulsian were the Resource persons.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>31-07-2017</strong>
            </td>
            <td width="516">
              A workshop on Narcotics Drugs and its Harmful Effects on Youth was
              organized by the Department of Computer Science ,Mr.Varun Kapoor,
              IPS, ADGP Narcotics was the Resource Person.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>01-08-201</strong>
              <strong>7</strong>
            </td>
            <td width="516">
              Remedial classes in different subjects were conducted in order to
              bring the students at par.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>04-08 -201</strong>
              <strong>7</strong>
            </td>
            <td width="516">
              A workshop on Online Abuse of Women and Children was organized by
              the Women and Child Protection Committee. The Superintendent of
              Police Mr. Jitendra Singh, State Cyber Crime Cell was the Resource
              Person.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>05-08-17</strong>
            </td>
            <td width="516">
              The morning Assembly Committee celebrated the pious festival of
              Rakshabandhan through a short programme. Students who had gone to
              participate in the skit competition in the Choithram College were
              also felicitated on the occasion.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>10-08-201</strong>
              <strong>7</strong>
            </td>
            <td width="516">
              In order to ensure better functioning of the house wise
              activities, the selection of the Office Bearers of the Four Houses
              was done. The Captain, the Vice-Captain, Cultural Sports and
              Literary Captain from each House were selected.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>11-08-201</strong>
              <strong>7</strong>
            </td>
            <td width="516">
              An Industrial Visit to Atharv Packaging at Sanwer Indore was
              organized for the B.Com (C.A) First Year Students by CSDP
              Committee.
            </td>
          </tr>
          <tr>
            <td width="85"></td>
            <td width="516">
              With an aim to teach life skills to the students and to increase
              their employability, Skills Development Workshops on Film Making,
              Smart Phone Repairing and Training, Art and Craft and Beautician
              Course was organized by the Placement and Career Development
              Committee.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>12-08-201</strong>
              <strong>7</strong>
            </td>
            <td width="516">
              An engaging and insightful Faculty Enriching Faculty was conducted
              on the theme ‘Traits for Building Positive Personality’ by the
              Department of Humanities.
            </td>
          </tr>
          <tr>
            <td width="85"></td>
            <td width="516">
               The Fifteenth Executive Committee Meeting of the Parents
              Professors Association was organized. The election for the post of
              the President and Vice President of the session 2017-18 was
              conducted. The outgoing members were thanked for their
              contribution.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>15-08-17</strong>
            </td>
            <td width="516">
               Independence Day was celebrated with great fervour and enthusiasm
              paying gratitude to the nation. Phase I of the Programme started
              with a soulful payer recital followed by flag hoisting and
              National Anthem. The second phase of the programme commenced with
              a prayer followed by the introduction of Chief Guest Commodore
              Raman Arora. The day witnessed a mesmerizing performance by
              Warriors of SPIPS, a melodious musical treat by the Exotic
              Paulians and a zealous speech by Miss. Ashley Johnson.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>18-08-17</strong>
            </td>
            <td width="516">
               The management department organized a guest lecture by Mr. Pankaj
              Kothari of Toast Masters to develop Entrepreneurial spirit in the
              students. The NSS Committee organized a short programme in the
              morning Assembly to celebrate Sadbhavna Divas which included a
              Prayer song, poem recital and a brief Introduction of the Day.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>19-08-17</strong>
            </td>
            <td width="516">
              The Annual General Body meeting and Parents Professors Association
              meeting was held. The Principal addressed the gathering
              emphasizing on regular attendance. Election for the selection of
              Parents representative was conducted. Mr. Rajat Goyal and Mrs.
              Archana Joshi were elected as the new members of the Parents
              Professors Association. The election was followed by open house
              whereby the queries of the parents were answered satisfactorily.
              The meeting ended with a vote of thanks extended by Mrs. Kanak
              Hemrajani.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>22-08-17</strong>
            </td>
            <td width="516">
              A three days Arts Festival was organized in the form of Inter
              House Arts and Literary Competitions. There was enthusiastic
              participation in all the categories and the event witnessed
              fascinating display of stupendous performances by all the four
              Houses.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>01-09-17</strong>
            </td>
            <td width="516">
               An insightful Programme on River conservation was organized by
              the morning Assembly and NSS Committee in tandem. The Programme
              included a Special Prayer, special poem and a very informative
              Documentary highlighting the importance of Rivers.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>07-09-17</strong>
            </td>
            <td width="516">
              A session on Digital India was conducted for all the Computer
              Science Students by Prof. Bhavana Sangamnerkar.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>08-09-17</strong>
            </td>
            <td width="516">
               The blissful occasion of Feast Day of Sr. Principal was
              celebrated in the morning assembly. The programme started with a
              soulful prayer and a beautiful festal song. The Director greeted
              Sr. Principal with a bouquet and a card. In the second phase of
              the programme a colourful programme was put forth to celebrate the
              Feast day. The programme included a prayer , a soul nourishing
              duet dance, an entertaining skit, and a Retro group dance. The
              programme concluded with a melodious musical treat followed by a
              scintillating Indo western dance.  To commemorate the Feast day a
              short programme was organized by the Faculty and the Staff in the
              Conference hall.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>09-09-17</strong>
            </td>
            <td width="516">
              Dr. Sr. Alice Thomas participated in the National Conference and
              Annual General Body Meeting of Educationalist on current Political
              and Economic situation in India and its impact on Higher Education
              at Don Bosco Provincial School, Hyderabad.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>13-09-17</strong>
            </td>
            <td width="516">
               The Department of Humanities conducted the first written round of
              Inter College Quiz competition. 21 Colleges from Indore
              participated. Four Colleges entered the Final round.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>14-09-17</strong>
            </td>
            <td width="516">
              A short programme during the morning assembly on the occasion of
              Hindi Diwas was conducted that included a special prayer, a
              special song and a special poem, all of which highlighted the
              versatility and grandeur of our mother tongue Hindi. The Director
              emphasized on making Hindi a more popular language. The meeting of
              the Governing Body of the College was duly held.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>16-09-17</strong>
            </td>
            <td width="516">
              The students of Christian Students Association from B.Sc. III year
              conducted a special session on ‘Darkness and Light’.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>18-09-17</strong>
            </td>
            <td width="516">
              The NSS Committee organized an informative awareness programme on
              Organ donation and Laparoscopic Surgery. The Resource Person was
              Dr. Sudesh Sharda, Senior Consultant, Choithram Hospital.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>19-09-17</strong>
            </td>
            <td width="516">
              SPIPS hosted the Divisional level Volleyball Tournament for women
              from 18th to 19th September. Sixteen teams participated and UTD
              was declared as the winner and Shri Umiya Girls College as the
              runner-up.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>23-09-17</strong>
            </td>
            <td width="516">
              The NSS Day was celebrated enthusiastically during the Morning
              Assembly. A soulful prayer, an insightful speech throwing light on
              the significance of the day,  special song befitting the occasion
              were the chief highlights of the day.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>25-09-17</strong>
            </td>
            <td width="516">
              Poster Exhibition was conducted by the Computer Science Department
              expressing the intellectual ability and creativity of the students
              in the form of Working models and Posters.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>27-09-17</strong>
            </td>
            <td width="516">
              The Day 1 of the Arts Festival was organized in the form of the
              Inter House Cultural Competitions. There was an enthusiastic
              participation in all the categories namely Solo Dance (Semi
              classical), Solo Singing (Western), Skit and Group Singing
              (Indian).
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>28-09-17</strong>
            </td>
            <td width="516">
              The Day 2 of the Inter House Cultural Competitions of the Arts
              Festival was organised. Along with the lighting of lamp and the
              inspiring address by Director, the event witnessed a fascinating
              display of stupendous performances by all the four Houses.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>03-10-17</strong>
            </td>
            <td width="516">
              The College witnessed a clash of intellectuals in the Inter
              District Quiz competition conducted by out College on behalf of
              the DAVV youth Festival.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>04-10-17</strong>
            </td>
            <td width="516">
              Women and child protection Committee organized a knowledgeable
              workshop on Self Defence. Dr. Divya Gupta, President Jwala Mahila
              Samiti and renowned gynecologist was the resource person for the
              session.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>07-10-17</strong>
            </td>
            <td width="516">
              Christian Students’ Association conducted the written round of
              Bible Quiz for Christian Students.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>11-10-17</strong>
            </td>
            <td width="516">
              The Common Class Test – II for this Semester was conducted for all
              the classes on three days from 11th to 13th October.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>12-10-17</strong>
            </td>
            <td width="516">
              The NSS and NCC committee organized a Blind walk from SPIPS to MSW
              College on the occasion of the World Sight Day to support the
              noble cause of eye donation. One of the participants from Mahesh
              Drishti Kalyan Sangh expressed how the Blinds are now empowered.
              The guest Mr. Yogesh Bhalke and Bishop Rev. Dr. Chacko .T.J.
              addressed the gathering.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>13-10-17</strong>
            </td>
            <td width="516">
              The Christian Students’ Association organized a special session by
              the Sisters from Missionaries of Charity.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>14-10-17</strong>
            </td>
            <td width="516">
               An insightful session on Quality Eye Care was conducted by the
              Staff Association for Faculty and Staff. The Resource person was
              Dr. O.P. Agarwal, a renowned Ophthalmologist. The session was
              interactive and knowledgeable
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>14-10-17</strong>
            </td>
            <td width="516">
               An enriching  and a resourceful Faculty enriching Faculty
              Programme was conducted by the Department of Science  on the topic
              Basics of computer and cloud computing.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>16-10-17</strong>
            </td>
            <td width="516">
              The luminous festival of Diwali was anticipated with great delight
              and cheerfulness. The celebrations included a special prayer, a
              melodious festal song, an informative introductory speech, festal
              greetings by a student representative, pearls of wisdom by Father
              Director and the illuminating address by Sister Principal. On this
              glittering and joyous occasion, Greeting Cards were presented to
              the Director and the Principal.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>24-10-17</strong>
            </td>
            <td width="516">
              The Inaugural Ceremony of the seven days the NSS Annual Camp was
              held at Machla Village. The programme consisted of a Prayer Song,
              Welcome Address, Principal’s Address, oath administration on
              cleanliness Briefing about the regular and special activities,
              Director’s Address and the Special Address by the Guest of the
              day.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>31-10-17</strong>
            </td>
            <td width="516">
              Special greetings were accorded to the Director, Rev. Fr. Simon
              Raj on the joyous occasion of his Birth Day in the morning
              assembly. A prayer offering, an insightful introduction about the
              day, a welcome speech and a fantastic birthday song were the main
              highlights of this day. A semi classical song and a musical treat
              by the SPIPS choir made the rendered the programme more colourful.
              The Director was offered a floral welcome by the Principal and was
              presented a greeting card. A special prayer, a melodious festal
              greeting song and an enlightening introduction to the Day were the
              key highlights.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>1-11-17</strong>
            </td>
            <td width="516">
              The Final Round of the Bible Quiz was conducted by the Christian
              Students’ Association.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>02-11-17</strong>
            </td>
            <td width="516">
              An Invited talk on Safeguard against Social Media was conducted.
              Mrs. Devakshi Kalani, AVP Finance, Flexituff International ltd was
              the resource person. The session was very knowledgeable.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>06-11-17</strong>
            </td>
            <td width="516">
              The Pre-University Exams for all the classes were conducted from
              6th to 11th November.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>06-11-17</strong>
            </td>
            <td width="516">
                The energetic and enthusiastic activity of Treasure hunt was
              organized by the Department of Humanities. The first position was
              secured by Yellow Flowers and second by Blue Birds
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>10-11-17</strong>
            </td>
            <td width="516">
              A resourceful session on NAAC Accreditation was conducted. The
              Resource person for the session was Dr. Rajan Varghese, Assessor
              and Member Coordinator of Peer team of NAAC.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>20-11-17</strong>
            </td>
            <td width="516">
              A guest lecture on Import and Export Management: Scope and
              Opportunities was organized by the Department of Management. Mr.
              R.K Maru and Mr. Rajneesh Sharma were the Resource Person from
              Foreign Trade Management and Training.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>21-11-17</strong>
            </td>
            <td width="516">
              The Department of Computer Science organized a guest lecture on
              the occasion of the world Information Technology day. The resource
              person was Dr. P.K. Chande, Director Narsi Munji University.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>22-11-17</strong>
            </td>
            <td width="516">
              Our NCC cadet Mr. Bhushan Choudhary of B.Sc (CS) III attended a
              ten days Officers Training Academy Camp at OTA, Kamptee, Nagpur
              from 13th to 22ndNovember.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>22-11-17</strong>
            </td>
            <td width="516">
              The second phase of the election process for the selection of the
              Student Council   Body was done and Ms. Sakshi Gupta (President),
              Ms. Zubeida Khan (Vice President) Mr. Garvit Agarwal (Secretary)
              and Ms. Khadija Jawadwala (Joint Secretary) were selected as the
              Council members.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>23-11-17</strong>
            </td>
            <td width="516">
              Our sports teams participated in Divisional Level Athletic Meet on
              23rd and 24th November organized by Sports Department of DAVV.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>24-11-17</strong>
            </td>
            <td width="516">
                The Department of Computer Science felicitated Mr. Ashish
              Kerketta, Mr. Himanshu Halve, Ms. Julie Sharma and Ms. Nikita
              Solanki for their participation in Poster Exhibition cum
              Competition.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>25-11-17</strong>
            </td>
            <td width="516">
              In the process of the preparation of the Student Council Election
              2017 the nominations of the names for the Class Representatives
              was done along with their seconder and proposer.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>27-11-17</strong>
            </td>
            <td width="516">
              Election for the Post of Class Representatives was done as per the
              timetable of DHE in 29 classes.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>28-11-17</strong>
            </td>
            <td width="516">
              A highly interactive Faculty Enriching Faculty Programme was
              conducted by the Prof. Tapas Upadhyay and Prof. Stafard Anthony
              from the Department Management on Stress Management and mobile
              Health applications.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>29-11-17</strong>
            </td>
            <td width="516">
              The Department of Science organized an insightful lecture on the
              Scope of Applied Sciences. The Resource person Mr. Sanjay Vyas
              enlightened the students on the same.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>30-11-17</strong>
            </td>
            <td width="516">
              Eighty Six Students along with the faculty members of the Computer
              Science Department visited Atal Indore City Transport Service
              limited. The Resource person was Mrs. Mala Singh, HR Manager
              AICTSL
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>1-12-17</strong>
            </td>
            <td width="516">
              To mark the importance of the World AIDS Day and to create
              awareness in the   society a short programme was organized in the
              morning Assembly by the NCC Committee. The NSS and NCC volunteers
              under the care of respective Committee members performed a street
              play at Musakhedi and Barah Pathar Hanuman Mandi Square on the
              theme ‘My Health My Right’ to spread awareness about AIDS. The
              Director Rev. Fr. Simon Raj enlightened the community on the
              theme. Dr. Prakash Gadwal and Ms. Varsha Vinayak from IDSSS shared
              their knowledgeable views on HIV.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>3-12-17</strong>
            </td>
            <td width="516">
              With the noble objective of respecting the differently abled
              people on the International Day of persons with Disabilities St.
              Paul Institute in collaboration with IDSSS organized a special
              programme. The NSS and NCC volunteers of SPIPS along with Faculty
              members conducted games for the mentally challenged children. The
              programme was witnessed by Mr. Mukesh Machar Director   IDSSS and
              Sr. Arokia Mary, Jt. Director IDSSS. Our Chairman Most Rev. Dr.
              Chacko T.J, Director, Rev. Fr. Simon Raj and Principal, Dr. Sr.
              Alice Thomas were a part of the Panel of guests gracing the
              occasion.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>6-12-17</strong>
            </td>
            <td width="516">
              The meeting of the Academic Excellence Committee was held in the
              conference Hall to discuss regarding the submission of the CCE
              marks of the I year students.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>7-12-17</strong>
            </td>
            <td width="516">
              The Career skill Development and Placement Committee organized a
              workshop on Entrepreneurship Development .The Resource persons,
              Mr. Sanjay Gupta, Mr.  Nilesh Verma and Mrs. Neeraja Jaiswal from
              AISECT conducted the session in order to acquaint the students
              regarding advanced skill development courses under the Pradhan
              Mantri Kaushal Vikas Yojna.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>8-12-17</strong>
            </td>
            <td width="516">
              The College hosted three days Intercollegiate Badminton Tournament
              (Men) and Divisional level Badminton Tournament (Men and
              Women).The Chief Guest for the occasion was Dr. S.K Yadav, HOD,
              School of Physical Education DAVV. The Tournament continued on
              subsequent two days that is 9th and 10th December. Teams from
              various Colleges participated in the tournament.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>9-12-17</strong>
            </td>
            <td width="516">
              The Seventeenth Executive Committee meeting of the Parents
              Professors Association was held. The Industrial Visits of B.Com
              Tax I year students and BBA I year students were organized at Gee
              Tech Industries and Roca Products Pvt. Ltd.  respectively.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>9-12-17</strong>
            </td>
            <td width="516">
              The Department of Commerce organized an enriching and entertaining
              Faculty Enriching Faculty Programme. An Activity cum competition
              was arranged on the Theme Team building for the Faculty members.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>15-12-17</strong>
            </td>
            <td width="516">
              The jovial celebration of Christmas was conducted in the morning
              Assembly. The celebration commenced with a soulful prayer followed
              by a melodious prayer song and a speech expressing the importance
              of the Occasion. Beautiful Video presentation followed by an
              inspirational message by the Director and the Christmas carols by
              the enthusiastic group of SPIPS filled the atmosphere with joy and
              happiness. The programme was conducted jointly by the Christians
              Students’ Association and Programme Committee.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>16-12-17</strong>
            </td>
            <td width="516">
              To celebrate the joy of Christmas a get together of the Extended
              SPIPS family was organized. The Formal programme commenced with a
              soul foul prayer. The Director heartily welcomed and thanked the
              Vice Chancellor, DAVV, Dr. Narendra Dhakad, the Registrar of DAVV,
              Mr. Ajay Sharma and the Chairman of the College Bishop   Most Rev,
              Dr. Chaco Thotumarickal for their blissful presence.  The Bible
              reading by Principal Dr. Sister Alice Thomas and the Christmas
              carols by the Director Principal and the Faculty filled the
              atmosphere with divinity. The Third Phase of the Programme
              comprised of Games for all the Extended Family    members. The
              Programme was jointly organized by the Staff Association and the
              Programme Committee.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>28-12-17</strong>
            </td>
            <td width="516">
              NCC and NSS volunteers visited a school run by Diocese and
              distributed woolen clothes to the students there.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>01-01-18</strong>
            </td>
            <td width="516">
              01-01-18: With a view to train the students to face interview, a
              session on Career Guidance and facing Interview was organized. The
              resource person was Mrs. Anita Bandhopadhyay, Founder Director,
              Talent HR Solutions, Mumbai.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>02-01-18</strong>
            </td>
            <td width="516">
              A special programme was organized during the morning assembly to
              celebrate the New Year. A special prayer, a prayer song and a
              special thought were presented. The Director and the Principal
              gave enlightening messages.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>06-01-18</strong>
            </td>
            <td width="516">
              A job interview was conducted for the students by the Perfect
              Solutions, Indore for the III Year students. The NSS Committee
              members visited a village near Udaynagar and donated clothes to
              the needy and underprivileged.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>07-01-18</strong>
            </td>
            <td width="516">
               Special prayers were offered during the morning assembly on the
              occasion of the Birthday of Bishop, Most Rev. Dr. Chacko
              Thottumarickal, Chairman SPIPS. The Director, two faculty
              representatives and two Student representatives visited the Bishop
              House to convey greetings to the Bishop Swamiji.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>10-01-18</strong>
            </td>
            <td width="516">
              A Close Placement Drive was organized in the college, wherein, a
              team from Tek Info Tree conducted a presentation, Group Discussion
              and Personal Interview.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>11-01-18</strong>
            </td>
            <td width="516">
              A special lecture on Web Technologies was organized by the
              Department of Computer Science.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>12-01-18</strong>
            </td>
            <td width="516">
              To commemorate the birth anniversary of Swami Vivekananda,
              National Youth Day was celebrated with much enthusiasm and
              fervour. The ‘Surya Namaskar’ session was the highlight of the
              day. The Director and the Principal delivered thought provoking
              messages. As an initiative for selfless service towards the
              society, a Blood Donation Camp was organised by our NSS Units in
              the College.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>13-01-18</strong>
            </td>
            <td width="516">
              A Faculty Enriching Faculty programme was organized by the
              Department of Humanities on the topic ‘How to overcome fear’.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>15-01-18</strong>
            </td>
            <td width="516">
              In order to improve the language understanding, the Department of
              Humanities initiated special English and Hindi classes for the
              students.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>16-01-18</strong>
            </td>
            <td width="516">
              A motivational session on ‘How to become teachers in true sense’
              was organized by the Internal Quality Assurance Cell for the
              faculty members. The resource person was Fr. C.J. Sebastian,
              Rector and Director, Samanvaya, Don Bosco, Palakkad, Kerala. The
              members of Women and Child Protection Committee attended the
              Orientation Session of the DAVV organized Smart Girl Training
              Programme.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>20-01-18</strong>
            </td>
            <td width="516">
              It was a momentous occasion for the college as for the first time
              a National Seminar on Recent Developments in Science and Their
              Impact on Religion was organized for by the Department of Science.
              The ISSN coded Journal of the college ‘Luminous’ was released
              during the Seminar. The Occasion was graced by Dr. Fr. Job
              Kozhamthadam, Executive Director, Indian Institute of Science and
              Religion, New Delhi, Most. Rev. Dr. Chacko Thhotumarickal,
              Chairman, SPIPS, Dr. Narendra Dhakad, Vice Chancellor, DAVV, Dr.
              Ajay Verma, Registrar, DAVV, Dr. Ganesh Kawadia, Former Head,
              School of Economics, DAVV and many other renowned dignitaries in
              the field of education.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>23-01-18</strong>
            </td>
            <td width="516">
               IA session in Career Opportunities was organized for the
              students.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>24-01-18</strong>
            </td>
            <td width="516">
              In an effort to bring about a positive change in the outlook
              towards the female child, the National Girl Child Day was
              organized. A special Prayer, a special song, a special poem, video
              presentation and a noteworthy speech were presented.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>25-01-18</strong>
            </td>
            <td width="516">
              The Patron’s Day was celebrated with a lot of zeal. A solemn
              programme was organized on the occasion in the First Phase. In the
              Phase Two, the Director and the Principal inaugurated the
              SPIPS-Fiesta 2018 that was organized by the Department of
              Commerce. Food and Games stall were put by the students and
              everyone enjoyed the Fun Fair. Cash Prizes were awarded to the
              students who put forth the best of their entrepreneurial skills.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>26-01-18</strong>
            </td>
            <td width="516">
              Republic Day Celebrations were organized in a grand manner. The
              patriotic feelings were very well expressed in the form of a
              special prayer for the nation, the meticulous Flag Hoisting
              Ceremony and a well synchronised Parade by our NCC cadets. The
              Chief Guest, Retd. Col. Dinkar Chaturvedi, delivered a stimulating
              speech. A Prize Distribution Ceremony for the meritorious students
              and those having excellent attendance was held. An oath
              administered by the Principal, Dr. Sr. Alice Thomas was also taken
              by all.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>29-01-18</strong>
            </td>
            <td width="516">
              The Principal, Dr. Sr. Alice Thomas participated in the 18th
              Triennial Conference of the Xavier Board of Higher Education at
              Christ University, Bangalore. A two days Annual Athletics Meet was
              organized in the college. Dr. Sunil Doodhale, Head, School of
              Physical Education, DAVV inaugurated the Meet. The students
              enthusiastically participated in all the events.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>30-01-18</strong>
            </td>
            <td width="516">
              To commemorate the Martyrdom Day, silence was observed for two
              minutes at 11: 00 a.m.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>02-02-18</strong>
            </td>
            <td width="516">
              Hundred students attended the prestigious International Management
              Conclave – 2018, organized by the Indore Management Association.
              The Women and Child Protection Committee organized a Safety Riding
              Workshop for the girl students. The training was imparted by Ms.
              Isha Mishra, Safety Promotions, Honda Motorcycles &amp; Scooters
              Pvt. Ltd., Noida.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>07-02-18</strong>
            </td>
            <td width="516">
              Gandhi Vichar Sanskar Exam was conducted for the students by the
              NSS Committee.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>08-02-18</strong>
            </td>
            <td width="516">
              NSS ‘B’ certificate exam was held for the NSS volunteers.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>10-02-18</strong>
            </td>
            <td width="516">
              Faculty Enriching Faculty programme was conducted by the
              Department of Science.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>23-02-18</strong>
            </td>
            <td width="516">
              The magnanimous extravaganza of the Eighth Annual Day Celebrations
              unfolded at SPIPS premises in a spectacular manner. A pious
              invocation marked the start of the celebrations. It was followed
              by an invigorating welcome speech by the Director, Rev. Fr. Simon
              Raj. Dr. Narendra Dhakad, Vice Chancellor, DAVV and Most Rev. Dr.
              Chacko Thotumarickal were the Chief Guest and Presiding Guest of
              the programme. The evening witnessed a blissful prayer dance, a
              euphonic group song, electrifying dance performances, a riveting
              Skit presentation and intellectually stimulating speeches by the
              Chief Guest and the Presiding Guest. A succinct Annual Report was
              presented by the Principal. Prize distribution ceremony was also
              conducted.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>28-02-18</strong>
            </td>
            <td width="516">
              on the National Science Day, the Department of Science organized a
              written Quiz on general aptitude and reasoning.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>03-03-2018</strong>
            </td>
            <td width="516">
              A thanks giving gathering was organized to acknowledge and
              appreciate the hard     efforts and enthusiastic contributions of
              the participants and volunteers of the Eighth Annual Day
              Celebration.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>04-03-2018</strong>
            </td>
            <td width="516">
              A Career Orientation ‘Workshop on Modern Management and Business
              Analytic’ was organized by the Christ Institute of Management,
              LAVASA of Pune.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>05-03-2018</strong>
            </td>
            <td width="516">
              Inter House Spell Bee Competition was organized by the Humanities
              Department. The winners were given prizes by the Principal.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>07-03-2018</strong>
            </td>
            <td width="516">
              Pre University Exam for. B.A., B.Com and B.S.C I Year Students was
              held from 7/03/2018 to 15/03/2018.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>08-03-2018</strong>
            </td>
            <td width="516">
              The International Women’s’ Day was celebrated during the morning
              assembly. An emotive prayer and a captivating speech were given by
              the students. The inspirational words were enlightened by the
              Director and the program was illuminated by the Principal.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>10-03-2018</strong>
            </td>
            <td width="516">
              A special session on ‘Smart Girls Workshop’ was taken by some of
              the faculty members who attended the Smart Girls Trainers Workshop
              for the faculty members.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>12-03-2018</strong>
            </td>
            <td width="516">
              Common Class Test was conducted for all the IV and VI Semester
              classes including M.Com Previous and M.Com Final Year classes on
              12th and 14th March.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>14-03-2018</strong>
            </td>
            <td width="516">
              A Motivating Training Session on ‘Smart Girl Workshop’ was
              conducted for all the girl students of the college. All the points
              were beautifully demonstrated and explained by the professors
              correspondingly, who attended   ‘The Smart Girl Workshop.’ The
              Principals’ Meeting was attended by the Principal Dr. Sr. Alice
              Thomas at Devi Ahilya Vishwavidyalaya, Indore, in connection with
              the Smart Girl Workshop. Her feedback on the Workshop was appeared
              in Times of India Newspaper.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>15-03-2018</strong>
            </td>
            <td width="516">
              Anubhuti Camp of NSS was attended by the Eighteen NSS Volunteers
              along with   the Nodal Officer held at Piprani Dist.Dhar from 15th
              to 18th March.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>16-03-2018</strong>
            </td>
            <td width="516">
              A session on ‘Reflection over Lent; The last Seven Words Spoken on
              Cross by Lord Jesus Christ’ was organized by the Christian
              Students’ Association. A Short Story Writing Competition was
              organized by the Department of Humanities in order to develop the
              literary skills of the students.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>17-03-2018</strong>
            </td>
            <td width="516">
              On the Spot Discussion on Gender based topics was organized by the
              Gender Champion Club.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>23-03-2018</strong>
            </td>
            <td width="516">
              The Principal, Dr. Sr. Alice Thomas was greeted on her birthday
              with a cheerful programme, organized during the Morning Assembly.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>24/03/2018</strong>
            </td>
            <td width="516">
              The Parents Professors Meet was organized. The Parents personally
              met the respective class teachers and discussed about the progress
              of their wards.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>28-03-2018</strong>
            </td>
            <td width="516">
              To mark the resurrection of Lord Jesus Christ, Good Friday and
              Easter was celebrated. A special and captivating programme was
              organized during the morning assembly by the Christian Students’
              Association.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>5-04-2018</strong>
            </td>
            <td width="516">
              A Guest Lecture on “Professionalism and Career Planning” was
              organized by the Department of Management. Dr. Sandeep Atre,
              Founder Director, CH Edge Makers was the Resource Person.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>07-04-2018</strong>
            </td>
            <td width="516">
              World Health Day was commemorated during the morning assembly. The
              occasion was marked by a special prayer and poem. A video
              depicting the keys to good health was the highlight of the
              programme.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>09/04/2018</strong>
            </td>
            <td width="516">
              The students were felicitated during the Morning Assembly who
              participated and brought laurels to the institute by winning many
              prizes in various Competitions held at Vishishtha College Indore,
              Chameli Devi Group of Institutions and Indore School of Social
              Work.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>23/04/2018</strong>
            </td>
            <td width="516">
              A short programme was organized during the Morning Assembly to
              mark the significance of ‘World Book and Copyright Day.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>27/04/2018</strong>
            </td>
            <td width="516">
              A warm and heart touching Farewell was organized for the Outgoing
              Batch 2014-17. Lamps signifying the motto of our college, ‘Let
              Your Light Shine’ and Farewell Greeting Cards were handed over to
              all the students by the Director Rev. Fr. Simon Raj and the
              Principal Dr. Sr. Alice Thomas. The students also took a pledge
              administered by the Principal. The News Letter ‘Alvida’ was
              released.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>28/04/2018</strong>
            </td>
            <td width="516">
              Pre University Exam was conducted for all the II, IV Semester
              Classes and M.Com Previous and M.Com Final Year students.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>15/05/2018</strong>
            </td>
            <td width="516">
              The Principal Dr. Sr. Alice Thomas along with the faculty members
              visited an orphanage at Khandwa Road and offered alms to the
              needy.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>23/05/2018</strong>
            </td>
            <td width="516">
              The admission process for the Academic year 2018-19 commenced.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>05/06/2018</strong>
            </td>
            <td width="516">
              On the occasion of ‘World Environment Day’, a Plantation Programme
              was organized by the Department of Management. Saplings were
              planted in the college premise by the Director, Rev. Fr. Simon
              Raj, Principal, Dr. Sr. Alice Thomas, faculty members and
              students.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>09/06/2018</strong>
            </td>
            <td width="516">
              The Common Class Test was conducted for the BBA and BCA II Sem.
              students on 9th and 11th June.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>21/06/2018</strong>
            </td>
            <td width="516">
              On the International Yoga Day, in order to signify the importance
              of yoga, our NCC and NSS students performed the same.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>23/06/2018</strong>
            </td>
            <td width="516">
              Fifty one of our NSS and NCC students along with the faculty
              members, Dr. Aninash Yadav, Prof. Bhawesh Joshi and Dr. Rafique
              Khan participated in the assembly organized in honour of the Prime
              Minister Shri Narendra Modi’s visit to Indore.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>25/06/2018</strong>
            </td>
            <td width="516">
              An enriching and engaging Faculty Development Programme was
              organized by the Internal Quality Assurance Cell (IQAC) on the
              theme ‘A Teacher… Becoming a Great Trainer’. Renowned Educational
              Consultant and Trainer, Mr. Leonard Jude Brown was the Resource
              Person.
            </td>
          </tr>
          <tr>
            <td width="85">
              <strong>29/06/2018</strong>
            </td>
            <td width="516">
              On the occasion of the feast of St. Peter and St. Paul, the feast
              day of the Director, Rev. Fr. Simon Raj was cordially celebrated.
              Special prayers were offered and heartfelt wishes were extended by
              the faculty and staff.
            </td>
          </tr>
        </tbody>
      </table>
    </>
  ),
  "Happenings 2016-17": (
    <>
      <table className="w-100">
        <tbody>
          <tr>
            <td width="94">
              <strong>04-07-16</strong>
            </td>
            <td width="507">
              The Academic Year 2016-17 commenced with a two days splendid
              Welcome cum Orientation Programme for the First Year students.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>11-07-16</strong>
            </td>
            <td width="507">
              A Welcome Programme was organised for the Second and Third year
              students.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>12-07-16</strong>
            </td>
            <td width="507">
              The Director, Dr. Fr. C Michael John was greeted on his birthday
              through a short yet delightful programme. A beautiful poem and
              birthday greetings by the Principal, faculty representative and
              staff representative made the occasion more joyous.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>20-07-16</strong>
            </td>
            <td width="507">
              A special programme on the Introduction of Indian International
              Model United Nations  (IIMUN) was organised during the morning
               Assembly by a group of faculty and students.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>26-07-16</strong>
            </td>
            <td width="507">
              The Seventh Foundation Day cum Freshers&apos; Talent Show Day was
              celebrated in a magnicent manner. The Chief Guest, our Chairman,
              Bishop Most Rev. Chacko Thottumarickal and the Special Guest Rev.
              Fr. Antonysamy blessed the newly constructed Third Floor,
              Auditorium, Seminar Hall, Library, Prayer Room and the Conference
              Hall on the Day. The Newsletter &apos;Suswagatham&apos; was
              released during the programme. A Prize Distribution Ceremony was
              held. The Non Teaching Staff was felicitated too
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>2 8 - 0 7 - 1 6</strong>
            </td>
            <td width="507">
              T h e D e p a r t m e n t o f Commerce and Management organised a
              Guest Lecture on E business. The Resource Person, Prof. Kapil
              Suri, a renowned Corporate Trainer delivered an insightful talk.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>06-08-16</strong>
            </td>
            <td width="507">
              The twelfth Executive Committee Meeting of the Parents Professors
              Association was organised. The election for the post of the
              President and Vice President of the PPA Executive Committee for
              the session 2016-17 was conducted. The outgoing members were
              thanked for their contribution.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>09-08-16</strong>
            </td>
            <td width="507">
              In order to ensure better functioning of the house wise
              activities, the Selection of the Offce Bearers of the Four Houses
              was done. Captain, Vice- Captain, Cultural, Sports and Literary
              Captain from each House were selected.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>10-08-16</strong>
            </td>
            <td width="507">
              Thirteen NCC Cadets participated in a CATC Camp from 1st to 10th
              August organized by the 9MP Battalion NCC, Indore.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>12-08-16</strong>
            </td>
            <td width="507">
              Class Representatives (CRs) from each class were selected by the
              students. Subsequently, Students&apos; Representative Body for the
              Year 2016-17 comprising of 67 students from Academics, NSS, NCC,
              Music, Sports in addition to the House wise bearers and Class
              Representatives with Ms. President, Tanisha Dalal B.Com (Hons) III
              Year, Vice President, Mr. Aditya Vyas B.Com (Tax) III Year,
              Secretary, Ms. Divya Francis B.Com (Hons) II Year and Joint
              Secretary, Mr. Prasoon Yadav B.Com (Hons) I Year was formed.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>13-08-16</strong>
            </td>
            <td width="507">
              The students of B.Com (Tax) I Year were taken for an Industrial
              Visit to Pratibha Syntex, Pithampur.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>13 - 08 - 16</strong>
            </td>
            <td width="507">
              A highly interactive, engaging and insightful  Faculty enrichment
              programme  conducted by the Director.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>15-08-16</strong>
            </td>
            <td width="507">
              The Independence Day was celebrated in a vibrant and colourful
              manner. Major (Retired) Samuel Paul was the Chief Guest on the
              occasion. A marvelous parade by the NCC students was the highlight
              of the day. An effervescent cultural programme was organized. The
              College Magazine &apos;Luminous&apos; Vol. 6 was formally released
              on this day.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>16-08-16</strong>
            </td>
            <td width="507">
              n order to create increased a w a r e n e s s o f e n v i r o n m
              e n t sustainability, Plantation Day  was organised during the
              morning assembly. The Director and the Principal planted special
              indoor plants saplings in pots as an environmental friendly
              initiative.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>17-08-16</strong>
            </td>
            <td width="507">
              The festival of Raksha Bandhan was anticipated and a short
              programme was conducted during the morning assembly comprising of
              a blissful prayer, a heartwarming song and insightful addresses by
              the faculty, the Director and the Principal. An interactive and
              knowledgeable Guest Lecture was organised by the  D e p a r t m e
              n t o f C o m m e r c e a n d Management. Dr. Sandeep Atre,
              Director, CH Edge Makers, was the Resource Person.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>18-08-16</strong>
            </td>
            <td width="507">
              Our students participated in the Inter Group NCC Handball
              Competition organised by Durg Group Headquarter NCC from 9th to
              18th August. Mr. Karan Chowdhary, the Captain of Indore Group NCC
              Team was selected for the Nationals.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>19-08-16</strong>
            </td>
            <td width="507">
              Sadbhavna Diwas was observed to commemorate the birth anniversary
              of Shri Rajiv Gandhi, and a special morning assembly was organized
              for the same.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>20-08-16</strong>
            </td>
            <td width="507">
              The Sixth Annual General Body Meeting of the Parents Professors
              Association for the Academic Year 2016-17 was organized. The
              Executive Committee comprising of Parent Representatives was
              elected and felicitated by the Director and the Principal. An Open
              House Discussion was also conducted. The parents personally met
              the Class Teachers and discussed about the progress of their
              wards. The thirteenth Executive Meeting of the PPA was held along
              with the newly elected parent representatives.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>23-08-16</strong>
            </td>
            <td width="507">
              An Industrial Visit was organized for the students of B. Com  (
              FT) First Year. The students, accompanied by two faculty members
              visited Indira Exports, Pithampur
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>24-08-16</strong>
            </td>
            <td width="507">
              The joyous festival of Janmashtmi was anticipated. A Special
              prayer, a melodious prayer song, a insightful speech by the
              Director and the Principal culminated the programme.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>26-08-16</strong>
            </td>
            <td width="507">
              An Industrial Visit to Rajratan Wires, Pithampur was organized for
              the students of B Com (Hons.) I Year students.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>27-08-16</strong>
            </td>
            <td width="507">
              Common Class Test I of the Semester for all the classes was
              conducted on 27th and 29th August.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>30-08-16</strong>
            </td>
            <td width="507">
              A two days Inter House Indoor Games were organized. The students
              enthusiastically participated in the Chess, Carom, Table Tennis
              and Badminton Competitions.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>0 5 - 0 9 - 1 6</strong>
            </td>
            <td width="507">
              : T h e S t u d e n t s &apos; Representative Body of the College
              organized a colorful programme on the occasion of the Teachers
              Day. The day also witnessed the conduct of the Investiture
              Ceremony for the members of the Students&apos; Representatives
              Body. The Director and the Principal addressed the gathering and
              felicitated the faculty members.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>06-09-16</strong>
            </td>
            <td width="507">
              A  resourceful  session  on &apos; Choices after Graduation&apos;
              was conducted. The Resource Persons were Mr. Pankaj Singh and Mr.
              Sandeep Panjwani from Skill Maestro.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>06-09-16</strong>
            </td>
            <td width="507">
              In an earnest effort to impart Value Based Quality Education and
              to increase the rapport with the students, the Director and the
              Principal held Special Class-wise Meetings with the First Year
              students from 6th to 9th September. These Meetings were attended
              by a majority of the students.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>07-09-16</strong>
            </td>
            <td width="507">
              A three days Inter House Arts and Literary Competitions were held
              after the class hours. Poster making, cartooning, clay modelling,
              photography, collage making, rangoli making, on the spot painting,
              poetry recitation, debate, mimicry and elocution competitions were
              conducted. There was overwhelming participation by the students.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>9 - 0 9 - 1 6</strong>
            </td>
            <td width="507">
              T h e D e p a r t m e n t o f Computer Science organised a Quiz
              Contest. The winning team was awarded a cash prize.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>10-09-16</strong>
            </td>
            <td width="507">
              The Inter Collegiate District Level Chess Tournament was hosted by
              our College. Our team made us proud by bagging the first position
              among the fifteen teams that participated in the Tournament.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>10-09-16</strong>
            </td>
            <td width="507">
              The Principal conducted a thought provoking Faculty Enrichment
              Session.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>14-09-16</strong>
            </td>
            <td width="507">
              A short programme during Morning Assembly was conducted on the
              occasion of Hindi Diwas.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>15-09-16</strong>
            </td>
            <td width="507">
              Our College hosted the Inter Division Level Basketball (Women) on
              15<sup>th</sup> and 17<sup>th</sup> September. Our team reached
              the quarter final and one of the student, Ms. Shruti Basil was
              selected in the university team. Our College Team participated in
              the Inter Collegiate Table Tennis (Women) organised by Mata
              Jijabai P.G. College, Indore on 14th and 15th September. Our team
              was declared the winner and one of our students, Ms. Vaidehi Boyat
              was selected in the University Team
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>21-09-16</strong>
            </td>
            <td width="507">
              In order to enhance the analytical skills of the students, a ten
              days workshop on Data Analysis was organized for all the Second
              and Third Year students.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>21-09-16</strong>
            </td>
            <td width="507">
              With the aim of improving the overall personality of the students
              a ten days Workshop on Personality Development was organized by
              the Placement and Career Development Committee. The Department of
              Science organised a Poster Exhibition cum Competition.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>22-09-16</strong>
            </td>
            <td width="507">
              A two days Inter House Cultural Competitions were organised. The
              participants put up brilliant performances in the solo dance,
              group dance, solo singing, group singing and skit competitions
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>23 - 09 - 16</strong>
            </td>
            <td width="507">
              During the Morning Assembly, the NSS day was anticipated
              enthusiastically with a prayer offering, an insightful
              introduction about the day a special song and discerning address
              by the Director and the Principal to encourage the youth of the
              nation towards rendering community service.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>26-09-16</strong>
            </td>
            <td width="507">
              The final round of the Inter college Quize competition organized.
              The event witnessed a creative clash of the intellectuals from
              different colleges. The director and the principle present
              trophies and cheques to winning teams.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>2 7 - 0 9 - 1 6</strong>
            </td>
            <td width="507">
              T h e D e p a r t m e n t o f Computer Science organised an
              informative Guest Lecture on Android Technology. Mr. Sourabh
              Rajput from SGSITS, Indore was the Resource Person.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>29-09-16</strong>
            </td>
            <td width="507">
              S p e c i a l F e s t a l D a y Greetings were accorded to the
              Director, Dr. Fr. C Michael John on the joyous occasion of his
              Feast Day during the Morning Assembly. The Director was offered a
              oral welcome by the Principal and presented with a greeting card.
              A  special  prayer,  a  melodious festal greeting songs and an
              festal greeting song and an  enlightening introduction to the Day
              were the key highlights. Four of our students participated in the
              Cross Country (Men) Tournament organised by Selea Sasan College,
              Burhanpur.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>30-09-16</strong>
            </td>
            <td width="507">
              The Feast Day of the Director and the Principal was celebrated
              with great zeal and exhilaration. A soulful prayer, festal
              greetings, a kaleidoscope of cultural performances and the words
              of wisdom by the Honorable Director and Respected Principal marked
              this momentous
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>01-10-16</strong>
            </td>
            <td width="507">
              A blissful programme was arranged during the Morning Assembly to
              celebrate the Feast Day of the Principal, Dr. Sr. Lilly V.S.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>01-10-16</strong>
            </td>
            <td width="507">
              The Inaugural Function of the seven days NSS Annual Camp was held
              at Begumkhedi Village. Two of our NCC Cadets, Mr. Bhushan
              Chowdhary and Mr. Nirvishay Yadav attended an Advance Leadership
              Camp in Agra from 20th September to 1st October.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>03-10-16</strong>
            </td>
            <td width="507">
              Forty seven students of B. Com (Hons.) and BBA Second Year along
              with four faculty members went for an Industrial Exposure cum
              Study Tour to Delhi and Agra.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>0 7 - 1 0 - 1 6</strong>
            </td>
            <td width="507">
              O u r C o l l e g e T e a m participated in the Inter Collegiate
              Lawn Tennis ( Men) Tournament organised by Holkar Science College,
              Indore. One of our students, Mr. Bhushan Choudhary, was selected
              to participate in All India Inter University Tournament. Our
              college team  participated in the Inter Collegiate Lawn Tennis (
              Men) Tournament organised by Holkar Science College, Indore. One
              of our students, Mr. Bhushan Choudhary, was selected to
              participate in All India Inter University Tournament. The Common
              Class Test – II of the Semester was conducted for all the classes
              on 15th and 17th of October.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>22-10-16</strong>
            </td>
            <td width="507">
              The Regional Meet-2016 of the Xavier Board of Higher Education in
              India- Northern Region was hosted successfully by our College.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>2 5 - 1 0 - 1 6</strong>
            </td>
            <td width="507">
              The department  o f Computer Science organised a resourceful and
              interactive Seminar on Cloud Computing. Dr. Rupesh Shukla from
              Shri Cloth Market Girls Degree College was the Resource Person.
              Four of our NCC Cadets participated in NCC National Games at New
              Delhi from 15th to 26th October
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>26 - 1 0 - 1 6</strong>
            </td>
            <td width="507">
              The department of  Humanities organised a lively and fun- lled
              Inter House Treasure Hunt Competition. Four of our NCC Cadets
              participated in NCC National Games at New Delhi from 15th to 26th
              October.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>27-10-16</strong>
            </td>
            <td width="507">
              The luminous festival of Diwali was anticipated  with  great d e l
              i g h t a n d c h e e r f u l n e s s . T h e celebrations
              included a poised prayer, a harmonious festal song, a discerning
              introductory speech, festal greetings by student representative, 
              and  the i l luminating address by Sister Principal.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>27-10-16</strong>
            </td>
            <td width="507">
              A Feedback Meeting of the participants of the Industrial Exposure
              cum Study Tour to Delhi and Agra was conducted. 14th November. Our
              team reached the Semi Finals and our students, Mr. Ayush Joshi was
              selected in the Indore Division Team and Mr. Nishchay Kelkar as a
              second Stand By.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>18-11-16</strong>
            </td>
            <td width="507">
              Four NCC Cadets from our College attended a RDC DECAT- I Camp
              organised by the Raipur Group Head Quarters ( C. G.) from  12 t h
              November to 21st November.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>19-11-16</strong>
            </td>
            <td width="507">
              : The Principal conducted a Riveting and an intellectually
               stimulating Faculty Enrichment Programme.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>21-11-16</strong>
            </td>
            <td width="507">
              Three NCC Cadets from our College attended a National Integration
              Camp organised by the 9MP Battalion NCC, Indore from 7th November
              to 18th November
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>21 - 11 - 16</strong>
            </td>
            <td width="507">
              Six faculty  members attended a UGC sponsored six days Faculty
              Development Programme on Quality Management at HRDC, DAVV, Indore.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>26-11-16</strong>
            </td>
            <td width="507">
              The Constitution Day was c o m m e m o r a t e d t o h o n o u r 
              a n d c e l e b r a t e o u r D e m o c r a c y . T h e programme
              included  an  in  depth i n t r o d u c t i o n o f o u r c o u n
              t r y &apos; s Constitution as a &apos;Living Document&apos;. Our
              NCC Cadets, NSS Volunteers and Faculty Members visited the
              visually impaired students of the Helen Keller Blind School.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>30-11-16</strong>
            </td>
            <td width="507">
              To commemorate the World Computer Security Day, a session was
              conducted for the Faculty Members of the Department of Computer
              Science. Prof. Gourav Rawal delivered a lecture emphasizing on
              awareness about cyber crime.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>01-12-16</strong>
            </td>
            <td width="507">
              The World&apos;s AIDS Day was observed as an opportunity to show
              support to and solidarity with the millions of people suffering
              with the pandemic.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>03-12-16</strong>
            </td>
            <td width="507">
              The newly installed Lift was inaugurated by the Director and the
              Principal.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>10-12-16</strong>
            </td>
            <td width="507">
              The joyous &amp; momentous occasion of the Birthday of the
              Principal Dr. Sr. Lilly V.S. was celebrated with a lively
              programme. A poignant prayer, heartwarming greetings from faculty
              and staff members and words of appreciation from the Director made
              the occasion a memorable one.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>17-12-16</strong>
            </td>
            <td width="507">
              A jubilant celebration was organised in anticipation of the
              festival of Christmas. The rst phase began with a soulful prayer
              song rendition followed with festal greetings and presentation of
              bouquet and greeting cards to the Director and the Principal. A
              card exchange programme was conducted. The Christmas Carols lled
              the atmosphere with fun and festivity. An emotional farewell was
              bid to the Principal, Dr. Sr. Lilly V.S. The Christmas Issue of
              newsletter &apos;Krist Jayanti&apos; was released.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>18-12-16</strong>
            </td>
            <td width="507">
              In order to acknowledge the supportive role of the families of the
              faculty and staff, a Get Together of the Extended SPIPS Family was
              organised. A resplendent musical treat and other items made the
              event a memorable one. Sumptuous lunch was served to all towards
              the end.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>18-12-16</strong>
            </td>
            <td width="507">
              In order to acknowledge the supportive role of the families of the
              faculty and staff, a Get Together of the Extended SPIPS Family was
              organised. A resplendent musical treat and other items made the
              event a memorable one. Sumptuous lunch was served to all towards
              the end.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>23-12-16</strong>
            </td>
            <td width="507">
              Our College team was declared the Runners Up in the Inter
              Collegiate Football (Men) Tournament organised at B.M. College,
              Indore. Three of our students represented the Divisional team and
              won the  team  tournament at Jhabua.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>24-12-16</strong>
            </td>
            <td width="507">
              : Our students, Mr. Uttam Verma secured second position in
              Shot-put and Mr. Ajul Bansal attained second position in High Jump
              in the Inter Collegiate Division Level  T o u r n a m e n t o r g
              a n i z e d b y t h e Executive Sports Board, DAVV. Both of them
              were selected for the State Level University Tournament
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>30-12-16</strong>
            </td>
            <td width="507">
              Our student, Mr. Aman Yadav bagged the Third Position in the 57 Kg
              category in the Wrestling Intercollegiate Tournament organised by
              ILVA College. Mr. Ayush Joshi and Mr. Karan Choudhary were
              selected in the DAVV Cricket (Men) team and Handball team
              respectively.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>02-01-17</strong>
            </td>
            <td width="507">
              A blissful programme was organised in the Morning Assembly to
              celebrate the New Year. A soulful prayer, a beautiful New Year
              song, vibrant New Year greetings by a student, a self composed
              poem by a faculty member were presented. The Vice Principal, Dr.
              Vishal Mehta gave an edifying message.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>07-01-17</strong>
            </td>
            <td width="507">
              Special prayers were offered during the morning assembly on the
              occasion of the Birthday of Bishop, Most Rev. Dr. Chacko
              Thottumarickal, Chairman, SPIPS. Later  during  the  d a y , t h e
              D i r e c t o r ,  t w o  f a c u l t y r e p r e s e n t a t i v
              e s a n d t w o S t a f f representative visited the Bishop House
              to convey greetings to the Bishop in person.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>11-01-17</strong>
            </td>
            <td width="507">
              An informational Guest Lecture on IT and its application was
              organised by the Department of Science. Dr. H.S. Hooda was the
              Resource Person.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>12-01-17</strong>
            </td>
            <td width="507">
              The National Youth Day was celebrated with much enthusiasm. The
              &apos;Surya Namaskar&apos; session was the highlight of the day.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>13-01-17</strong>
            </td>
            <td width="507">
              To commemorate the Army Day/Flag Day, a special assembly programme
              was conducted. Special prayer was recited and the NCC song was
              sung with great zeal.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>14-01-17</strong>
            </td>
            <td width="507">
              The faculty and staff members enjoyed an exhilarating day long
              picnic to Somanipuram Farms, Indore.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>14-01-17</strong>
            </td>
            <td width="507">
              Our College Team reached the Semi Finals of the Division level
              Volleyball Tournament organized by Indore Institute of Management
              and Research on 13th and 14th January. Two of our students, Ms.
              Charul Silawat and Mr. Anugrah Singh were selected in the
              University Volleyball Team.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>16-01-17</strong>
            </td>
            <td width="507">
              A state of the art Badminton Arena was inaugurated. Dr. Anant
              Kumar Jinsiwala was the Chief Guest, Mrs. Seema Bhandari was the
              Guest of Honour and Dr. Danish Khan was the Special Guest on the
              occasion.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>1 8 - 0 1 - 1 7</strong>
            </td>
            <td width="507">
              T h e D e p a r t m e n t o f Computer Science organised a Guest L
              e c t u r e o n C y b e r C r i m e / L a w Awareness. Mr. Varun
              Kapoor, ADGP, Narcotics was the Resource Person.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>21-01-17</strong>
            </td>
            <td width="507">
              A unique programme titled Faculty Enriching Faculty was initiated
              under the guidance of the Director Dr. Fr. C Michael John where a
              group five faculty members from the D e p a r t m e n t o f C o m
              m e r c e a n d Management conducted a resourceful session.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>25-01-17</strong>
            </td>
            <td width="507">
              The Patron&apos;s Day of our College was celebrated with a lot of
              fervor and zeal. A special and colourful programme was organized
              on the occasion. Rev. Fr. Sibi Joseph graced the programme as the
              Chief Guest.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>26-01-17</strong>
            </td>
            <td width="507">
              With pride in hearts and patriotic fervor in mind, the Republic
              Day Celebration was organized. Dr. Ravi Atroliya, Retd. DSP was
              the Chief Guest of the  Day.  The  dutiful  Flag H o i s t i n g C
              e r e m o n y , a w e l l synchronized Parade by our NCC cadets, a
              special poem, a patriotic song, dazzling dance and inspiring
              speeches by the student, Chief Guest and the Director were the
              highlights of the day.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>27-01-16</strong>
            </td>
            <td width="507">
              Inter House Spell Bee Competition was organized by the Department
              of Humanities. The winners were given prizes by the Director and
              the Vice Principal.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>30-01-17</strong>
            </td>
            <td width="507">
              A Poster Competition cum Exhibition was organised  by  the D e p a
              r t m e n t o f C o m m e r c e a n d M a n a g e m e n t o n t h
              e T h e m e - Demonetization.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>30-01-17</strong>
            </td>
            <td width="507">
              To commemorate the Martyrdom&apos;s Day, two minutes silence was
              observed at 11: 00 a.m.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>31-01-17</strong>
            </td>
            <td width="507">
              With an intention to instill the team spirit in our students, a
              two days Annual Athletics Meet was organised by the Department of
              Physical Education. The Inaugural Ceremony was graced by Chief
              Guest, Dr. Ashutosh Mishra, Chairman, Executive Sports Board of
              DAVV. The Meet witnessed an extraordinarily enthusiastic
              participation of the students and faculty members.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>03-02-17</strong>
            </td>
            <td width="507">
              One hundred and forty seven students along with four faculty
              members attended the prestigious two days IMA Conclave.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>06-02-17</strong>
            </td>
            <td width="507">
              The NCC  &apos;B&apos;  Certificate exam was conducted for the 
              volunteers.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>08-02-17</strong>
            </td>
            <td width="507">
              The NSS &apos;B&apos; Certificate Exam for the NSS volunteers  was
               held.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>09-02-17</strong>
            </td>
            <td width="507">
              A blissful programme was o r g a n i s e d d u r i n g t h e M o r
              n i n g Assembly to anticipate the birthday of the Vice Principal
              Dr. Vishal Mehta.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>09-02-17</strong>
            </td>
            <td width="507">
              Our student, Ms. Purva Yadav brought laurels to the college by
              bagging the rst position in the Inter Collegiate Taekwondo
              Tournament organised by Govt. S.N. College, Khandwa. She along
              with Ms. Nandini Swami was selected in the DAVV team.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>16-02-17</strong>
            </td>
            <td width="507">
              A Blood Donation Camp was organized in the college wherein 63
              units of blood were donated by the Director, members of faculty
              and staff and our students.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>26-02-17</strong>
            </td>
            <td width="507">
              The Seventh Annual Day of the College was celebrated in a very
              grand and colourful way at St. Paul Premises. A kaleidoscope of
              engaging, entertaining and thought provoking programmes was
              presented. Mr. and Mrs. Sumat Prakash Jain, proud parents of
              martyr Lt. Gautam Jain were the Chief Guests and Most Rev. Dr.
              Chacko Thottumarickal, our Bishop Swamiji was the Presiding Guest
              on the occasion.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>01-03-17</strong>
            </td>
            <td width="507">
              The new Principal, Dr. Sr. Alice Thomas was accorded a warm and
              solemn welcome with a delightful programme that included a special
              prayer, a harmonious welcome song, foral greetings and heartfelt
              wishes from faculty, staff and students.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>04-03-17</strong>
            </td>
            <td width="507">
              Common Class Test I for the Semester was conducted for all the
              classes on 4th and 6th March.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>07-03-17</strong>
            </td>
            <td width="507">
              Forty seven students along with four faculty members went for a
              five days Industrial Exposure cum Study Tour to Jaipur.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>08-03-17</strong>
            </td>
            <td width="507">
              The International Women&apos;s Day was celebrated during the
              Morning Assembly. An emotive prayer, a melodious prayer song, an
              intriguing speech and soul stirring messages by the Director and
              the Principal illuminated the occasion.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>08-03-17</strong>
            </td>
            <td width="507">
              Two of our NSS volunteers were chosen as the best volunteers from
              Indore District for  the  Digital  D a a k i y a C a s h l e s s T
              r a n s a c t i o n Campaign conducted in association  w i t h A I
              C T S L a n d t h e D i s t r i c t Administration, Indore and
              were felicitated by Ministry of Human Resource and Development,
              New Delhi.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>11-03-17</strong>
            </td>
            <td width="507">
              A thanks giving gathering was organised  to  acknowledge  and a p
              p r e c ia te th e h a r d wo r k a n d wholehearted contributions
              of the participants and volunteers of the Seventh Annual Day
              Celebrations.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>21-03-17</strong>
            </td>
            <td width="507">
              A short  programme  was  o r g a n i s e d d u r i n g t h e m o r
              n i n g assembly to mark the signicance of the International Day
              for Elimination of Racial Discrimination.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>21-03-17</strong>
            </td>
            <td width="507">
              The Placement and Career Development Committee organised a
              resourceful session on the Job opportunities in Public Sector
              Units. The Resource Team consisted of Mr. Himanshu Prithmani and
              Ms. Aayushi Jain.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>23-03-17</strong>
            </td>
            <td width="507">
              The Principal, Dr. Sr. Alice Thomas was greeted on her birthday
              with a cheerful programme, organized during the Morning Assembly.
              A special session on Public Transport Awareness was conducted by a
              team of AICTSL (Atal Indore City Transport Service Limited).
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>31-03-17</strong>
            </td>
            <td width="507">
              An Open House in order to cater to the suggestions and ideas of
              the students was organized. The Director gave appropriate response
              to the suggestions given by the students.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>01-04-17</strong>
            </td>
            <td width="507">
              Common class test I for the semester was conducted for all the
              class on 4<sup>th</sup> and 6<sup>th</sup> march.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>03-04-17</strong>
            </td>
            <td width="507">
              Eight days workshop on Vedic Mathematics and Government Job Mantra
              were organized for the students by the Placement and Career
              Development Committee.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>04-04-17</strong>
            </td>
            <td width="507">
              The festival of Ramnavmi was anticipated during the Morning
              Assembly with a beautiful prayer, a refreshing festive song,
              thoughtful introduction of the day, messages and festal greetings
              by the Director and the Principal.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>07-04-17</strong>
            </td>
            <td width="507">
              A short  programme  was  o r g a n i s e d d u r i n g t h e M o r
              n i n g Assembly to commemorate World Health Day and to celebrate
              Mahavir Jayanti.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>08-04-17</strong>
            </td>
            <td width="507">
              With an aim to counsel the students in a better manner and to
              assist them in their tough times, a session on &apos;Depression
              and Suicide&apos; was conducted for the faculty members. Two of
              our Professors, Prof. Ashweni Suryawanshi and Dr. Yogita Menon
              shared insightful facts and information on the topic.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>13-04-17</strong>
            </td>
            <td width="507">
              To mark the resurrection of Lord Jesus, Good Friday and Easter was
              celebrated. A special programme was organized during the morning
              assembly.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>15-04-17</strong>
            </td>
            <td width="507">
              A warm and heart touching Farewell was organised for the Outgoing
              Batch 2013-16. Lamps signifying the motto of our college,
              &apos;Let Your Light Shine&apos; and Farewell Greeting Cards were
              handed over to all the students by the Director and the Principal.
              The students also took an oath administered by the Principal. The
              Newsletter &apos;Alvida&apos; was released.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>21-04-17</strong>
            </td>
            <td width="507">
              Pre University Exam for all the II and IV Sem. Classes began.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>25-04-17</strong>
            </td>
            <td width="507">
              The Parents Professors Meeting was organized. The parents
              personally met the Class Teachers and discussed about the progress
              of their wards.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>27-05-17</strong>
            </td>
            <td width="507">
              The Founder Director, Dr. Fr. C. Michael John was bid an emotional
              farewell and on the same day, the SPIPS family cordially welcomed
              Rev. Fr. Simon Raj as the new Director of the college. The college
              fraternity extended profound gratitude to Dr. Fr. C. Michael John
              for his valuable contributions and guidance
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>29-06-2017</strong>
            </td>
            <td width="507">
              On the occasion of the feast of St. Peter and St. Paul, the feast
              of the Director, Rev. Fr. Simon Raj was jovially celebrated.
              Special prayers were offered and heartfelt wishes were extended by
              the faculty and staff.
            </td>
          </tr>
          <tr>
            <td width="94">
              <strong>1-05-17</strong>
            </td>
            <td width="507">
              It was a momentous Six days UGC sponsored Short Term Course in
              Research Methodology was organized by Human Resource Development
              Centre, DAVV in our College.
            </td>
          </tr>
        </tbody>
      </table>
    </>
  ),
  "Happenings 2015-16": (
    <>
      <table className="w-100">
        <tbody>
          <tr>
            <td width="132">
              <strong>08-07-15</strong>
            </td>
            <td width="558">
              The Faculty Enrichment Programme was conducted by the Director Dr.
              Fr. C. Michael John.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>10, </strong>
              <strong>11-07-15</strong>
            </td>
            <td width="558">
              A two days Welcome cum Orientation Programme was organized for the
              new batch of students. They were given a fraternal welcome by the
              II- and III-year students. In a special programme organized for
              the students of the rst year, ten themes relating to our college
              were presented to them by our Faculty Members.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>11-07-15</strong>
            </td>
            <td width="558">
              The anticipation of the birthday of the Director Dr. Fr. C.
              Michael John was done during the Second Day of Welcome cum
              Orientation programme.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>13-07-15</strong>
            </td>
            <td width="558">
              The Regular Classes commenced for the First Year Students.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>17-07-15</strong>
            </td>
            <td width="558">
              A short programme was organized in anticipation of the feast of
              &apos;Eid -Ul- Fitr&apos; during the morning assembly.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>21-07-15</strong>
            </td>
            <td width="558">
              The Classes commenced for the B.A., B.Com. and B.Sc. II &amp;
              III-year students.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>25-07-15</strong>
            </td>
            <td width="558">
              On the occasion of the Feast of our Chairman, Bishop Most Rev. Dr.
              Chacko Thottumarickal, the SPIPS family prayed specially for him
              during the morning assembly. The Ninth Executive Body Meeting of
              the Parents Professors Association was held. The election for the
              post of the President and Vice-President of the PPA Executive
              Committee for the session 2015-16 was conducted. The outgoing
              members of the Committee were thanked for their contribution.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>28-07-15</strong>
            </td>
            <td width="558">
              The NSS Unit organized an Orientation programme for all the NSS
              volunteers including the rst year volunteers.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>01-08-15</strong>
            </td>
            <td width="558">
              The Sixth Foundation cum Freshers&apos; Talent Show Day programme
              was organized with zeal and enthusiasm. Rev. Fr. Biju Mathew was
              the Chief Guest on the occasion. The insightful addresses by the
              Chief Guest, the Principal and the Director motivated the
              audience. The newsletter &apos;Suswagatam&apos; was released and
              the &apos;College Choir&apos; was formally inaugurated. The Prize
              Distribution Ceremony was held for the students. The felicitation
              of the Staff Members was also done during the programme.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>03-08-15</strong>
            </td>
            <td width="558">
              To create increased awareness of environment sustainability,
              Plantation Day was organized in two phases. Phase I was a formal
              programme comprising of a prayer, a special prayer song,
              inspirational and thought-provoking speeches, a relevant poem, an
              insightful skit by the students and the address by the Director
              and the Principal. In the Phase II, the SPIPS Fraternity planted
              saplings in the campus as an environment friendly initiative. An
              Orientation Session was organized for the students. A Resource
              Team from France briefed the students on &apos;European Economic
              Crisis&apos;.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>05-08-15</strong>
            </td>
            <td width="558">
              The students of the BCA I Sem were taken for an Industrial Visit
              to &apos;Kirloskar Brothers Limited&apos; Dewas.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>08-08-15</strong>
            </td>
            <td width="558">
              The Fifth Annual General Body Meeting of the Parents Professors
              Association was organized. The new Executive Committee members for
              the session 2015-16 were elected and each member was felicitated
              by the Director and the Principal. An Open House Discussion was
              also conducted. The parents personally met the Class Teachers and
              discussed about the progress of their wards. Parents in large
              number attended the meeting.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>10-08-2015</strong>
            </td>
            <td width="558">
              Twenty NCC Cadets attended a 10 days Combined Annual Training Camp
              organized by the 9 M.P. Battalion, NCC, CRP Line Indore. They made
              the college proud by securing the Second position in the Quarter
              Guard Competition held during the Camp.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>13-08-15</strong>
            </td>
            <td width="558">
              The students of B. Com. (Foreign Trade) I Sem along with two
              faculty members went for an Industrial Visit to Indira Exports
              Pvt. Ltd, Indore.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>13-08-15</strong>
            </td>
            <td width="558">
              An Industrial Visit was organized for the students of B. Com.
              (C.A.) I Sem. The students, accompanied by two faculty members
              visited Neo Corp International Limited, Pithampur.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>15-08-15</strong>
            </td>
            <td width="558">
              The 69th Independence Day of our nation was celebrated in a
              vibrant and colourful manner. It instilled the feeling of
              patriotism among all present. Col. Gautam Mahajan was the Chief
              Guest on the occasion. A marvellous parade by the NCC students was
              the highlight of the day. An effervescent cultural programme was
              also organized. The College Magazine &apos;Luminous&apos; Vol. 5
              was formally released on the day. The International Youth Day was
              also observed during the programme and an oath was administered by
              the Principal Dr. Sr. Lilly V.S.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>17-08-15</strong>
            </td>
            <td width="558">
              In order to enhance the employability of the students, a two weeks
              Workshop on Tally ERP 9.2 Fundamentals was organized by the
              Placement and Career Development Committee. With the aim of
              improving the overall personality of the students, a fteen days
              Workshop on Communicative English and Personality Development was
              organized for all the students.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>22-08-15</strong>
            </td>
            <td width="558">
              The Common Class Test – I for this Semester was conducted for all
              the classes on two days with one day’s break in between i.e. on 22
              <sup>nd</sup> and 24th August.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>25-08-15</strong>
            </td>
            <td width="558">
              In an earnest effort to impart Value Based Quality Education and
              increase the rapport with the students, the Director and the
              Principal held Special Class-wise Meetings with the students.
              These Meetings were attended by a majority of the students. The
              meeting was held for ve days, each day for a different batch of
              students.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>20-08-15</strong>
            </td>
            <td width="558">
              The NSS Unit organized a special programme on the occasion of
              Sadbhavna Diwas during morning assembly.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>28-08-15</strong>
            </td>
            <td width="558">
              The festival of Raksha Bandhan was anticipated and a short
              programme was conducted during the morning assembly.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>01-09-15</strong>
            </td>
            <td width="558">
              In order to generate consciousness about the public transport
              system, the college organised a presentation by Atal Indore City
              Transport Service Limited, Indore. The Resource Team from AICTSL
              disseminated the knowledge of different modes of urban
              transportation and urged the students to make use of them.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>02-09-15</strong>
            </td>
            <td width="558">
              SPIPS hosted the Inter College Table Tennis Tournament (Women) on
              1st and 2nd September. Our college team won the Runners Up Trophy.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>04-09-15</strong>
            </td>
            <td width="558">
              Teachers Day was anticipated and the Investiture Ceremony of the
              Students&apos; Representative Body was held. A traditional
              welcome, a beautiful prayer song, a gratitude filled welcome
              address and the lighting of lamp marked a blessed start. Several
              scintillating dance performances and an entertaining skit made the
              atmosphere very cheerful. The Director Dr. Fr. C. Michael John and
              the Principal Dr. Sr. Lilly V.S. addressed the gathering and
              felicitated the faculty members.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>10-09-15</strong>
            </td>
            <td width="558">
              The Principal felicitated two of the NCC cadets, Mr. Mayuresh
              Bhardwaj and Mr. Safar Swalka who secured 5th and 6th positions
              respectively in the Short Put event held at the NCC State Level
              Athletics Meet in Gwalior.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>11-09-15</strong>
            </td>
            <td width="558">
              To enable the students to showcase their talent, the Inter House
              Literary Competitions were held. The events included were Debate,
              Elocution, Poetry recitation and Mimicry.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>12-09-15</strong>
            </td>
            <td width="558">
              A highly interactive, engaging and insightful Faculty Enrichment
              Programme was conducted by the Principal.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>14-09-15</strong>
            </td>
            <td width="558">
              A short programme during the morning assembly on the occasion of
              Hindi Diwas, was conducted that included a special prayer, a
              special song and a special poem, all of which highlighted the
              versatility and grandeur of our mother tongue Hindi. An eight days
              Short Term Certicate Course on e-commerce and e-business was
              organised with a vision to acclimatize students with the enormous
              opportunities being generated in the eld of online business.
              Prof. Kapil Suri, an eminent corporate trainer was the Resource
              Person for the workshop.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>17-09-15</strong>
            </td>
            <td width="558">
              A short programme was organized during the morning assembly in
              anticipation of Shri Ganesh Chaturthi. A special prayer, a
              melodious prayer song, a fascinating speech and an insightful
              concluding talk by the Principal culminated the celebrations.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>19-09-15</strong>
            </td>
            <td width="558">
              With a view of familiarizing the students with the procedure of
              internet ticket booking, a workshop was conducted by the
              Department of Commerce and Management on E-ticketing.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>23-09-15</strong>
            </td>
            <td width="558">
              An Industrial Visit was organized for the students of B.A. and B.
              Sc. I Semester. The students, accompanied by two faculties in
              charges visited S Kumar Textiles Industries Pvt. Ltd, Dewas. A
              workshop on Self Defence for girl students was conducted to make
              them more vigilant and better informed about their surroundings.
              The Resource Team comprised of Mr. Amrit Phale, DSP Indore, Mr.
              Shiv Pal Singh Kushwah, TI, Palasia Police Station, Mr. Aslam
              Sheikh, Legal Advisor of Police and Dr. Divya Gupta, Director,
              Jwala NGO.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>24 - 09 - 15</strong>
            </td>
            <td width="558">
              The NSS Day was celebrated enthusiastically during the morning
              assembly. A prayer offering, an insightful introduction about the
              day and a special song to encourage the youth of the nation
              towards rendering community service were the main highlights of
              the programme. In anticipation of the feast of Id-Ul-Azha, a
              well-crafted speech on the significance of the day was delivered.
              The students of B. Com. (Hons) I Sem. were taken for an Industrial
              Visit to &apos;Indo Toolings Pvt. Ltd., Mhow along with the
              Faculty In-charges. The Department of Computer Science organised a
              workshop on Windows and Web Based Applications in association with
              Ramasoft Web Developer Pvt. Ltd., Indore. The Workshop laid
              emphasis on the latest developments in the Software Industry. The
              College Badminton Team (Women) won the Inter Collegiate Tournament
              at Gujarati Professional Institute and later the State Level Inter
              University Competition at Barkatullah University Bhopal. The final
              round of the Inter College Quiz competition was organized. The
              event witnessed a creative clash of the intellectuals from four
              colleges. The Director and the Principal presented Trophies and
              Cheques worth Rs. 5000, Rs. 3000 and Rs. 2000 to the first three
              winning teams. Our college stood first.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>26-09-15</strong>
            </td>
            <td width="558">
              The Day 1 of the Arts Festival was organized in the form of the
              Inter House Cultural Competitions. There was an enthusiastic
              participation in all the categories namely Solo Dance (Semi
              classical), Solo Singing (Western), Skit and Group Singing
              (Indian).
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>29-09-15</strong>
            </td>
            <td width="558">
              Special festal day greetings were accorded to the Director Dr. Fr.
              C. Michael John on the joyous occasion of the Feast Day of the
              Archangel Michael, during the morning assembly. The Director was
              offered a oral welcome by the Principal and was presented a
              greeting card. A special prayer, a melodious festal greeting song
              and an enlightening introduction to the Day were the key
              highlights. To commemorate the Feast Day of the heavenly patron of
              our Director Dr. Fr. C. Michael John, a celebration was organized
              by the Faculty and Staff of the College.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>01-10-15</strong>
            </td>
            <td width="558">
              The Feast Day of the Director and the Principal was celebrated
              with great zeal and exhilaration. A soulful prayer, a oral
              welcome, Festal Greetings, a kaleidoscope of cultural performances
              and a Prize Distribution Ceremony for the meritorious students
              marked this momentous occasion. On the blessed occasion of the
              Feast Day of Sister Principal, the Festal Celebrations were
              organized for the Staff. Father Director, Faculty Members and
              Staff members extended festal greetings to Sister Principal.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>03-10-15</strong>
            </td>
            <td width="558">
              Day 2 of the Inter House Cultural Competitions of the Arts
              Festival was organised. Along with the lighting of lamp and the
              inspiring address by Director, the event witnessed a fascinating
              display of stupendous performances by all the four Houses.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>05-10-15</strong>
            </td>
            <td width="558">
              The Inaugural Ceremony of the seven days the NSS Annual Camp was
              held at Macchla Village. The programme consisted of a Prayer Song,
              Welcome Address, Principal&apos;s Address, Briefing about the
              regular and special activities, Director&apos;s Address and the
              Special Address by the Guest of the day. On the same day,
              International Non-Violence Day was also observed. The Students of
              the Second and Final Year went for two Industrial Exposure Tours,
              one to Gujarat and another to Jaipur. The students visited various
              small and large scaled industries.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>06-10-15</strong>
            </td>
            <td width="558">
              Ms. Supriya Chaurasia, B.Com. (Hons) I Sem. won First Position in
              three different events at the Division Level Swimming Competition
              organised by the ILVA College Indore.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>07-10-15</strong>
            </td>
            <td width="558">
              Mr. Sagar Suwalka secured Second position in the Above 100 Kg
              weight category in the Inter Collegiate Judo Competition (Men)
              organized by the Indore Christian College.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>10-10-15</strong>
            </td>
            <td width="558">
              An enriching Faculty Enrichment Programme was conducted by the
              Honourable Director.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>17-10-15</strong>
            </td>
            <td width="558">
              The Common Class Test – II for this Semester was conducted for all
              the classes on two days with one day&apos;s break in between i.e.
              17th and 19th October.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>19-10-15</strong>
            </td>
            <td width="558">
              During the morning assembly, the Principal felicitated the
              students who participated in the workshop on &apos;Windows and Web
              Based Applications&apos; that was organized by the Department of
              Computer Science in association with Ramasoft Web Developer Pvt.
              Limited. The Introductory Training Session of the SPIPS Choir was
              organised. The Resource Person was Rev. Fr. Bala. Fifteen of our
              students participated in the Inter College Football (Men)
              Tournament organized by the Christian Eminent College Indore on
              18th and 19th October. The team reached the Semi Finals.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>20-10-15</strong>
            </td>
            <td width="558">
              A fun filled, interactive Inter House Treasure Hunt Competition
              was organised in two phases. The Principal gave away prizes to the
              participants of the top three Houses that are Green Forests, Blue
              Birds and Yellow Flowers. Ms. Nikita Bhatt secured third position
              in the 200 metres race and Mr. Karan Chowdhary stood third in the
              400 meters Hurdle Race held at the Divisional Level Athletics Meet
              organised by the Govt. P.G. College, Dhar, on 19th and 20th
              October.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>21-10-15</strong>
            </td>
            <td width="558">
              The Feasts of Dusshera and Muharram were anticipated during the
              morning assembly. Soulful prayer songs, insightful speeches on the
              significance of both the occasions and the Principal&apos;s
              address made the day memorable.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>26-10-15</strong>
            </td>
            <td width="558">
              The Maharishi Valmiki Jayanti was anticipated during the morning
              assembly. A special prayer, a melodious prayer song and an
              enlightening introduction to the Day were the key highlights. The
              Director and Principal delivered enriching messages.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>07-11-15</strong>
            </td>
            <td width="558">
              The luminous festival of Diwali was anticipated with great delight
              and cheerfulness. The celebrations included a  special  prayer,  a
              m e l o d i o u s f e s t a l s o n g , a i n f o r m a t i v e
              introductory speech, festal greetings by a student representative,
              pearls of wisdom by Father Director and the illuminating address
              by Sister Principal. On this glittering and joyous occasion,
              Greeting Cards were presented to the Director and the Principal.
              Ms. Vaidehi Boyat brought accolades to the college as she secured
              First Position in the Inter State Table Tennis Competition. Mr.
              Sagar Suwalka secured Second Position in the Plus 100 kg weight
              category at Inter College Judo Competition. They were felicitated
              by the Principal during the morning assembly. Ms. Purva Yadav
              secured First Position in the 53 Kg weight category and Ms.
              Nandini Swami was declared the Winner in 73 Kg Weight category in
              the Division Level Taekwondo Tournament (Men and women) organized
              by Govt S. N College Khandwa on 6th and 7th November.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>20-11-15</strong>
            </td>
            <td width="558">
              As a first time initiative, a Case Writing Workshop was organized
              with the objective of equipping the participating Faculty Members
              with skills and resources to develop and publish a case study. The
              Introductory Session on Day 1 was conducted by the Resource Person
              Dr. Mayank Saxena.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>24-11-15</strong>
            </td>
            <td width="558">
              The festival of Shri Guru Nanak Jayanti was anticipated during the
              morning assembly. A special prayer, festal prayer song,
              enlightening introduction of the day, an enriching special
              thought, insightful address by the Director and a stimulating
              message by the Principal were the highlights of the occasion.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>2 6 - 1 1 - 1 5</strong>
            </td>
            <td width="558">
              The Constitution Day was commemorated to honour and celebrate our
              Democracy. The programme included a thoughtful prayer, harmonious
              prayer song, an in-depth introduction of our country&apos; s
              Constitution as a &apos;living Document&apos;.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>01-12-15</strong>
            </td>
            <td width="558">
              The World&apos;s AIDS Day was observed as an opportunity to show
              support to and solidarity with the millions of people suffering
              with the pandemic.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>03-12-15</strong>
            </td>
            <td width="558">
              The International Day for Differently Abled Persons was observed.
              A short programme dedicated to the special group of society was
              organised during morning assembly.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>05-12-15</strong>
            </td>
            <td width="558">
              Mr. Shubham Verma, B.Com. (Plain) II Year was selected in the
              Madhya Pradesh Power Lifting Team for the Sub Junior, Junior and
              Masters National Power Lifting Championship, Indore.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>07-12-15</strong>
            </td>
            <td width="558">
              Nine faculty members attended a six days HRDC and UGC sponsored
              Faculty Development Programme at Indore Institute of Management
              and Research, Indore.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>08-12-15</strong>
            </td>
            <td width="558">
              In the Phase 2 of the Case Writing Workshop, all the faculty
              members visited the AICTSL (Atal Indore City Transport Services
              Limited), Indore for an interactive session with Ms. Mala Singh
              Thakur, PRO and HR Head, AICTSL.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>11-12-15</strong>
            </td>
            <td width="558">
              The joyous and momentous occasion of the Birthday of the Principal
              Dr. Sr. Lilly V.S. was celebrated with a lively programme. A
              poignant prayer, heartwarming greetings from faculty and staff
              members and words of appreciation from the Director made the
              occasion a memorable one.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>11-12-15</strong>
            </td>
            <td width="558">
              A jubilant celebration was organised in anticipation the festival
              of Christmas. The first phase began with a soulful prayer song
              rendition followed with festal greetings and presentation of
              bouquet and greeting cards to the Director and the Principal. A
              card exchange programme was conducted. The Christmas Carols filled
              the atmosphere with fun and festivity. In the second phase, a
              musical treat was organised. The Newsletter &apos;Krist
              Jayanti&apos; was also released.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>12-12-15</strong>
            </td>
            <td width="558">
              A one day picnic to the picturesque city of Maheshwar for the
              faculty and staff members was organized.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>16-12-15</strong>
            </td>
            <td width="558">
              Dr. Sonal Sisodia from the Commerce and Management Department
              represented the College at the Third Pan IIM World Conference
              organised by IIM Indore from 14th to 16th December.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>18-12-15</strong>
            </td>
            <td width="558">
              Mr. Shubham Verma, B.Com (Plain) II Year secured fth position in
              the National Power Lifting competition held at Malwa Power lifting
              Association, M.P.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>07-01-16</strong>
            </td>
            <td width="558">
              Special prayers were offered during the morning assembly on the
              occasion of the Birthday of Bishop, Most Rev. Dr. Chacko
              Thottumarickal, Chairman SPIPS. The Director, the Principal, two
              faculty representatives and two Staff representatives visited the
              Bishop House to convey greetings to the Bishop Swamiji.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>08-01-16</strong>
            </td>
            <td width="558">
              In the third phase of the Case Writing Workshop, the cases
              developed by all the four groups of the faculty members were
              presented.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>11-01-16</strong>
            </td>
            <td width="558">
              To mark the beginning of the new semester, a Special Assembly was
              conducted. A special prayer, a prayer song and a special thought
              were presented. The Director and the Principal gave enlightening
              messages.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>12-01-16</strong>
            </td>
            <td width="558">
              To commemorate the birth anniversary of Swami Vivekanand, National
              Youth Day was celebrated with much enthusiasm and fervour. The
              &apos;Surya Namaskar&apos; session was the highlight of the day.
              The Director and the Principal delivered thought provoking
              messages.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>14-01-16</strong>
            </td>
            <td width="558">
              Our College team reached the Semi Finals of the Division level
              Volleyball Tournament organized by Indore Institute of Management
              and Research. Two of our students, Ms. Charul Silawat, B.Com (FT)
              I Year and Mr. Anugrah Singh, B.Com. (CA) I Year were selected in
              the University Volleyball Team.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>15-01-16</strong>
            </td>
            <td width="558">
              To commemorate the Army Day/Flag Day, a special assembly programme
              was conducted. Special prayer was recited and the NCC song was
              sung with great zeal. An insightful Introduction to the Day was
              given and motivating speeches by the Director and the Principal
              were presented.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>16-01-16</strong>
            </td>
            <td width="558">
              Four of our students got selected in an Open Campus Placement by
              Tata Consultancy Services.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>23-01-16</strong>
            </td>
            <td width="558">
              In an effort to bring about a positive change in the outlook
              towards the female child, the National Girl Child Day was
              anticipated. A special Prayer, a special song, a special poem and
              a noteworthy speech were presented.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>25-01-16</strong>
            </td>
            <td width="558">
              The Patron&apos;s Day was celebrated with a lot of zeal. A
              colourful programme was organized on the occasion. Rev. Fr.
              Cajetan D&apos;Mello, Principal, St. Arnold H.S. School was the
              Chief Guest.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>26-01-16</strong>
            </td>
            <td width="558">
              Republic Day Celebrations were organized in a grand manner. The
              patriotic feelings were very well expressed in the form of a
              special prayer for the nation, the meticulous Flag Hoisting
              Ceremony and a well synchronised Parade by our NCC cadets. The
              Chief Guest, Lt. Ajay Jain, President, All India BSF Ex. Service
              Welfare Association, delivered a stimulating speech.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>27-01-16</strong>
            </td>
            <td width="558">
              An Inter House Spell Bee Competition w a s  o r g a n i z e d  b
              y  t h e  D e p a r t m e n t  o f  Humanities.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>29-01-16</strong>
            </td>
            <td width="558">
              The Inaugural Ceremony of the Annual Athletics Meet was organised.
              The Chief Guest Dr. S. K. Yadav, Head of Department of Physical
              Education, DAVV and the Director gave thought-provoking speeches.
              The Principal administered the oath to all present. A prize
              distribution ceremony was conducted.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>30-01-16</strong>
            </td>
            <td width="558">
              To commemorate the Martyrdom Day, silence was observed for two
              minutes at 11: 00 a.m.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>06-02-16</strong>
            </td>
            <td width="558">
              Hundred and twelve students along with five faculty members
              attended the prestigious International Management Conclave – 2016,
              organized by the Indore Management Association.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>11-02-16</strong>
            </td>
            <td width="558">
              As an initiative for seless service towards the society, a Blood
              Donation Camp along with an Eye Checkup and General Health Checkup
              was organised by our NSS Units in the College.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>13-02-16 and 15-02-16</strong>
            </td>
            <td width="558">
              CCT II Day 1 and Day 2 for B.A., B.Sc. B.Com. II and IV Semester
              and CCT I Day 1 and Day 2 for BBA and BCA II and IV Semester were
              conducted.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>15-02-16</strong>
            </td>
            <td width="558">
              The NSS B-Certificate Exam for the NSS volunteers was conducted.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>29-02-16</strong>
            </td>
            <td width="558">
              The magnanimous extravaganza of the Sixth Annual Day Celebrations
              unfolded at SPIPS premises in a spectacular manner. A pious
              invocation marked the start of the celebrations. It was followed
              by an invigorating welcome speech by the Director, oral welcome
              being accorded to the Chief Guest, Dr. Fr. Davis George, Director,
              St. Aloysius Institute of Technology, Jabalpur and Presiding
              Guest, our Chairman, His E x c e l l e n c y, M o s t R e v. D r.
              C h a c k o Thottumarickal, ceremonial lamp lighting, and an
              insightful introduction to the theme of the day, &apos;The India
              of our Dreams&apos;. The evening witnessed a blissful prayer
              dance, a breathtaking Mime presentation, a euphonic group song,
              electrifying dance performances, a riveting Skit presentation and
              intellectually stimulating speeches by the Chief Guest and the
              Presiding Guest. A succinct Annual Report was presented by the
              Principal. Prize distribution ceremony was also conducted.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>01-03-16</strong>
            </td>
            <td width="558">
              An enriching orientation session was conducted by Dr. Fr. Davis
              George, Director, St. Aloysius Institute of Technology, Jabalpur,
              for the faculty members.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>08-03-16</strong>
            </td>
            <td width="558">
              The International Women&apos;s Day was celebrated during the
              Morning Assembly. An emotive prayer, a melodious prayer song, an
              intriguing speech and soul stirring messages by the Director and
              the Principal illuminated the occasion.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>09-03-16</strong>
            </td>
            <td width="558">
              A Thanks Giving cum Felicitation Gathering was organised to
              acknowledge and appreciate the hard work and wholehearted
              contributions of the participants and volunteers of the Sixth
              Annual Day Celebrations.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>12-03-16</strong>
            </td>
            <td width="558">
              A warm and heart touching Farewell was organised for the Outgoing
              Batch 2013-16. A melodious prayer song rendition, a touching
              welcome address, lighting of the lamp, student sharing, a cheerful
              group song by faculty choir, precious thoughts by the Director and
              the Principal made the event special. The highlight of the day was
              the handing over of the ceremonial lamp to the nine class
              representatives. The Principal administered a special oath.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>16-03-16</strong>
            </td>
            <td width="558">
              A six days Industrial Exposure and Study Tour to Chandigarh and
              Amritsar was organized for the second-year students.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>21-03-16</strong>
            </td>
            <td width="558">
              A short programme was organised during the morning assembly to
              mark the International Day for the Elimination of Racial
              discrimination. A special prayer, a heartening prayer song,
              insightful introduction of the day and intriguing message by the
              Director and the Principal were the special highlights of the day.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>22-03-16</strong>
            </td>
            <td width="558">
              The colourful festival of Holi was celebrated during the morning
              assembly with a beautiful prayer, a refreshing festive song,
              thoughtful introduction of the day, engaging messages and festal
              greetings by the Director and the Principal.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>26-03-16</strong>
            </td>
            <td width="558">
              To mark the resurrection of Lord Jesus Christ, Good Friday and
              Easter were celebrated. The short programme comprised of a
              poignant prayer, a mesmerizing prayer song, an intriguing speech
              on the signicance of the day and thought-provoking messages by
              the Director and the Principal.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>30-03-16</strong>
            </td>
            <td width="558">
              CCT I Day 1 for BBA and BCA all Semesters and CCT II Day 1 for
              B.A., B.Sc. B.Com. II and IV Semester was conducted.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>01-04-16</strong>
            </td>
            <td width="558">
              CCT I Day 2 for BBA and BCA all Semesters and CCT II Day 2 for
              B.A., B.Sc. B.Com. II and IV Semester conducted.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>01-04-16</strong>
            </td>
            <td width="558">
              Eleventh Executive Committee Meeting of the Parents Professors
              Association was held.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>05-04-16</strong>
            </td>
            <td width="558">
              In order to develop the competitive skills of the students, a ten
              days workshop on Vedic Mathematics was organized.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>0 7 - 0 4 - 1 6</strong>
            </td>
            <td width="558">
              T h e W o r l d H e a l t h D a y w a s commemorated during the
              morning assembly. Along with that, the festivals of Gudi Padwa and
              Chetichand were also celebrated.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>09-04-16</strong>
            </td>
            <td width="558">
              A Faculty Enrichment Programme was conducted for the faculty
              members by the Principal.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>11-04-16</strong>
            </td>
            <td width="558">
              In order to invite genuine and prompt feedback from the
              participants of the Industrial Exposure and Study Tour, a feedback
              meeting was organised.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>13-04-16</strong>
            </td>
            <td width="558">
              A short programme to mark Ambedkar Jayanti and Shri Ramnavmi was
              held during the morning assembly. The programme saw an
              effervescent mix of a poised prayer, a harmonious prayer song,
              introduction of the occasion and stimulating speeches by the
              Director and the Principal.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>18-04-16</strong>
            </td>
            <td width="558">
              Shri Mahavir Jayanti was celebrated during the morning assembly.
              The programme comprised of a beautiful prayer, a soulful prayer
              song, an insightful introduction of the day and precious thoughts
              by the Director and the Principal.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>20-04-16</strong>
            </td>
            <td width="558">
              A resourceful programme was organised in the College where the
              Police Department of Indore conducted an enriching session on
              Crime Prevention. The Resource Person, Mr. Vipin Maheshwari, ADGP,
              Indore along with other senior police officials held an
              interactive session with the students.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>23-04-16</strong>
            </td>
            <td width="558">
              The Parents Professors Meeting was organized. An open house
              discussion was also held. The parents met the class teachers and
              discussed about the progress of their wards.
            </td>
          </tr>
          <tr>
            <td width="132">
              <strong>25-04-16</strong>
            </td>
            <td width="558">Pre-University Exams for all the Classes began.</td>
          </tr>
          <tr>
            <td width="132">
              <strong>29-04-16</strong>
            </td>
            <td width="558">
              The International Labour Day was commemorated. The Newsletter
              &apos;Alvida&apos; was released.
            </td>
          </tr>
        </tbody>
      </table>
    </>
  ),
  "Happenings 2014-15": (
    <>
      <table className="w-100">
        <tbody>
          <tr>
            <td width="104">
              <strong>02-07-14</strong>
            </td>
            <td width="497">
              Two days Faculty Enrichment Programme was conducted by the
              Director Dr. Fr. C. Michael John.
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>07-07-14</strong>
            </td>
            <td width="497">
              The second and third year students of B.Com, B.Sc. and B.A. were
              welcomed by the Faculty Members for the session 2014-15. A
              cultural programme was organized and presented by the faculty.
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>12 </strong>
              <strong>- 07 - 14</strong>
            </td>
            <td width="497">
              The new Seminar Hall was inaugurated by the Chairman of SPIPS,
              Bishop Most Rev. Dr. Chacko Thottumarickal, SVD, on the occasion
              of the birthday of our Director Dr. Fr. C. Michael John,
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>14-07-14</strong>
            </td>
            <td width="497">
              The new batch of students was given a fraternal welcome by the II
              and III year students. A special programme was organized for them.
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>26-07-14</strong>
            </td>
            <td width="497">
              The Fifth Foundation Day cum Freshers&apos; Talent Show Day was
              celebrated with joy and fervour. The Chief Guest on the occasion
              was Rev. Dr. Xavier Thirukudumbam, SVD. The Annual Magazine,
              Luminous Vol. 4, and the Newsletter, Luminous 5.1,
              &apos;Suswagatam&apos; were also released on the occasion.
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>28-07-14</strong>
            </td>
            <td width="497">
              In anticipation of the feast of Eid-Ul-Fitr a short programme was
              organized during the assembly. An Invited Talk on &apos;Union
              Budget Analysis 2014&apos; was organized by the Department of
              Commerce and Management. The Resource Persons were Mr. Sarthak
              Jain and Mr. Manmeet Singh Arora from FAST Education Ltd., Indore.
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>02-08-14</strong>
            </td>
            <td width="497">
              The Seventh Executive Committee Meeting of the Parents Professors
              Association was held. The election for the post of the President
              and Vice President of PPA Executive Committee for the session
              2014-15 was conducted. The outgoing  Members of the committee were
              thanked for their contribution.
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>05-08-14</strong>
            </td>
            <td width="497">
              In order to give industrial exposure to the students, an
              Industrial Visit was organized for the B.Com. (Hons) I and B.A. I
              Semester students. They visited Sanchi Dugdh Sangha, Mangliya,
              Indore.
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>06-08-14</strong>
            </td>
            <td width="497">
               Plantation Day was organised by the NSS Units of SPIPS under the
              guidance of the Programme Ofcers Dr. Pragati Jain and Prof. Deepa
              Muley.
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>07-08-14</strong>
            </td>
            <td width="497">
              To make the students aware of the Cyber related Laws, a Workshop
              on Cyber Crime and Cyber Law was organized by the Department of
              Computer Science. Mr. Varun Kapoor, IPS, IG and Director, Police
              Radio Training School (PRTS) and Mr. Sudeep Goenka, Additional SP,
              Training, PRTS, Indore, were the Resource Persons.
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>08-08-14</strong>
            </td>
            <td width="497">
              A short programme was organized in the Morning Assembly in
              anticipation of Raksha Bandhan.
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>13-08-14</strong>
            </td>
            <td width="497">
               Selection of the House-wise Office Bearers was done. The Captain,
              Vice-Captain, Cultural, Sports and Literary Captain from each
              House were selected.
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>15-08-14</strong>
            </td>
            <td width="497">
              The 68th Independence Day was celebrated with patriotism and zeal.
              March Past, singing of patriotic songs, patriotic group dance,
              motivational speeches and poem recitation were the main events.
              The Chief Guest on the occasion was Brigadier P.S. Rana,
              Commander, CTW, MCTE, Mhow.
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>16-08-14</strong>
            </td>
            <td width="497">
              A special programme was organized on the occasion of Devi Ahilya
              Birth Anniversary. Anticipation of Janamashtmi was also done
              during the Morning Assembly.
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>19-08-14</strong>
            </td>
            <td width="497">
              Class Representatives (CRs) from each class were selected by the
              students and a Student Council, consisting of the President Ms.
              Ashwini Alexander (B.B.A. III Year), Vice President Mr. Palash
              Jaisinghani (B.C.A. III Year), Secretary Ms. Nikita Bhatt (B.Com
              (Tax) II Year) and Joint Secretary Mr. Shubham Raghuvanshi (B.Com
              (CA) I Year), was formed from the group of CRs
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>20-08-14</strong>
            </td>
            <td width="497">
              A special programme was organized by the NSS committee to
              celebrate  Sadbhawana Diwas.
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>23-08-14</strong>
            </td>
            <td width="497">
              The Fourth Annual General Body Meeting of Parents Professors
              Association was held. It included Open House Discussion, Report on
              the functioning of PPA and Election of the new PPA Executive
              Committee Members for the session 2014-15. Parents in large number
              attended the Meeting and also met the Class Teachers to discuss
              the progress of their wards.
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>25-08-14</strong>
            </td>
            <td width="497">
              A three days Inter-House Indoor Games Competition was organized.
              The competitions included Table Tennis, Chess, Carom and Badminton
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>28-08-14</strong>
            </td>
            <td width="497">
              : In the history of SPIPS, for the rst time, the Common Class
              Test was conducted for the students of all the Classes. Students
              in very large number appeared in the Test.
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>30-08-14</strong>
            </td>
            <td width="497">
              : The Department of Humanities organized an Inter-House Treasure
              Hunt. The Green House secured the rst position and the second was
              bagged by the Blue House. The Winner Team was given gifts worth
              Rs. 3000 and the Runner-up Team was given gifts worth Rs. 2000 by
              the Management of the College.
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>05-09-14</strong>
            </td>
            <td width="497">
              Teacher&apos;s Day was celebrated. Students&apos; Council of the
              College took the initiative to organize a beautiful programme, and
              all our Professors were felicitated during the programme. Prof.
              Mamta Gokhe was congratulated on the completion of her doctoral
              degree and was felicitated during the Teachers&apos; Day
              Celebration.
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>06-09-14</strong>
            </td>
            <td width="497">
              Industrial Visits were organized for the BBA I and B.Com (Tax) I
              Semester students. They visited Indira Exports Pvt. Ltd., Rau, and
              Kirloskar Ltd., Pithampur respectively
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>08-09-14</strong>
            </td>
            <td width="497">
              SPIPS hosted The Indore District Intercollegiate Table Tennis
              Tournament (Woman). Mrs. Rinku Acharya (International T. T.
              Player) and Mrs. Poonam Kaushik (Sr. Sports Ofcer, Kasturba Gram
              Rural Institute and a member of Selection Committee) were the
              Guests for the Inaugural Session of the Tournament.
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>09-09-14</strong>
            </td>
            <td width="497">
              The Inter-College Table Tennis Tournament continued. The Chief
              Guest was Dr. Ajay Sahni, In- charge Director of Physical
              Education, DAVV, and Dr. Anand Nigoskar, Principal, Maharaja
              Ranjit Singh College, was the Observer of the Tournament. SPIPS
              won the Final against UTD. Two of our students Ms. Yashasvi
              Sihare, BBA III Year and Ms.Vaidehi Boyat, BBA II Year were
              selected for the University District Level Competition. Ms.
              Yashasvi Sihare was declared as the Captain of the University
              Team.
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>10-09-14</strong>
            </td>
            <td width="497">
              : A three days Inter-House Arts and Literary Competitions were
              conducted. Collage Making, Cartooning, Clay Modelling, On the Spot
              Painting, Photography, Poster Making, Debate, Elocution, Mimicry,
              Poem Recitation and Rangoli competitions were held.
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>12-09-14</strong>
            </td>
            <td width="497">
              In anticipation of Hindi Diwas, a short programme, stressing on
              the importance of the Hindi Language, was conducted during the
              Morning Assembly.
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>13-09-14</strong>
            </td>
            <td width="497">
              Faculty Enrichment Programme was conducted by the Principal, Dr.
              Sr. Lilly V.S. A Workshop on Research Methodology (Advance SPSS)
              was organized for the Faculty Members. The Resource Person was Dr.
              Ira Bapna, Director Maharaja Ranjit Singh College, Indore.
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>15-09-14</strong>
            </td>
            <td width="497">
              The First Phase of the Inter-College Quiz Competition was
              conducted. This was in written form. Students from seven colleges
              participated in it.
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>18-09-14</strong>
            </td>
            <td width="497">
              A Thirteen Days Career Development Workshop was organized for all
              the students.
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>19-09-14</strong>
            </td>
            <td width="497">
              : &apos;Arts Festival&apos; was celebrated in the form of
              Inter-House Cultural competitions for two days. Solo and Group
              Singing, Solo and Group Dance Competitions were held. Students in
              large number participated enthusiastically in it.
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>22-09-14</strong>
            </td>
            <td width="497">
              To increase the rapport with the students, a special feature was
              introduced in this Academic Year. The Principal held a Special
              Class-wise Meetings with the students. These Meetings were
              attended by a majority of the students. It consisted of two
              session: one was a Motivational Session and the other, an
              Evaluation of the Faculty by the students. It was very much
              appreciated by the students. The meeting was held from 22nd till
              30th September, each day for different batch of students.
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>24-09-14</strong>
            </td>
            <td width="497">
              The NSS Day was celebrated. A programme comprising of the NSS
              Song, a Special Poem, Speeches and a Power Point Presentation on
              NSS activities of our college was conducted. The Department of
              Science conducted a &apos;Written Quiz on General Science&apos;
              for the students of all streams, and 170 students participated in
              it.
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>25-09-14</strong>
            </td>
            <td width="497">
              The Final Round of the Inter-College Quiz Competition was
              conducted. Teams from Govt. Arts and Commerce College (GACC), IPS
              Academy, Prestige Institute and SPIPS participated in it. The
              First position was secured by GACC and SPIPS secured the Second
              Position. Cash Prize worth Rs. 5000 and Rs. 3000 were given for
              the First and Second position respectively. Consolation prizes
              worth Rs. 2000 were also given to the other  participating teams.
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>01-10-14</strong>
            </td>
            <td width="497">
              The Feast of the Director Dr. Fr. C. Michael John and the
              Principal Dr. Sr. Lilly V.S. was celebrated. A special and a
              beautiful cultural programme was organized by the Faculty and
              Staff and was presented by the students.
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>09-10-14</strong>
            </td>
            <td width="497">
              The annual NSS Special Camp of seven days was organized at
              Pigdamber village, Indore District. Dr. Prakash Gadhwal, NSS
              Coordinator DAVV was the Chief Guest for the Inaugural Session.
              The Theme of the Camp was &apos;Health and Cleanliness&apos;.
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>10-10-14</strong>
            </td>
            <td width="497">
              The SPIPS family witnessed a very sad moment as it lost one of 
              its  students  Mr. Mayank Kumar Sharma of B.Com. (Tax) I Sem. in a
              road accident.
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>13-10-14</strong>
            </td>
            <td width="497">
              A Condolence Prayer Meeting was held in the Luminous Hall to pay
              homage to the departed soul of Mr. Mayank Kumar Sharma.
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>20-10-14</strong>
            </td>
            <td width="497">
              The festival of light, Diwali was enthusiastically celebrated with
              pomp and show. The Investiture Ceremony of the Students&apos;
              Council Members and the Class Representatives was also conducted
              during the programme.
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>27</strong> <strong>- 10 - 14</strong>
            </td>
            <td width="497">
              Our  Associate NCC  Officer, Dr. Avinash Yadav along with seven
              NCC students participated in a ten days Combined Annual Training
              Camp organised at Kanakeshwari Dham Parisar, Nanda Nagar, Indore.
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>28-10-14</strong>
            </td>
            <td width="497">
              The Common Class Test (CCT) II was conducted for the students of
              all the Classes.
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>31 </strong>
              <strong>- 10 - 14</strong>
            </td>
            <td width="497">
              To commemorate the Birth Anniversary of Sardaar Vallabh Bhai Patel
              and Martyr Day of the Former Prime Minister Smt. Indira Gandhi,
              National Integration Day was observed during the Morning Assembly.
              The Director spoke on the occasion and inspired the students to be
              united. An Oath administered by the Principal, Dr. Sr. Lilly V.S.
              was taken by all. The NSS Programme Ofcer, Prof. Deepa Muley
              along with twenty two students, participated in a &apos;Run for
              Unity&apos;  rally  on 27th January 2015, organized by DAVV,
              Indore.
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>02-11-14</strong>
            </td>
            <td width="497">
              Under the motivational guidance of our Director and Principal, the
              Placement Committee organised a maiden six days Industrial
              Exposure Tour to Gujarat for the B. Com. (Hons.) and BBA Final
              Year students. A group of forty-ve students and four Faculty
              Members visited three industries i.e. General Motors (Vadodara),
              AMUL (Anand) and Havmor Ice-cream (Ahmedabad).
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>16-11-14</strong>
            </td>
            <td width="497">
              The Associate NCC Ofcer of our College, Dr. Avinash Yadav was
              given a Certicate of Appreciation, for his outstanding
              contribution to NCC, during the year 2014 by Mr. Deepak Joshi,
              Minister, State Govt. M.P. and Brig. V.S. Saini, Commander, NCC at
              the NCC Group Headquarters, Indore.
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>17-11-14</strong>
            </td>
            <td width="497">
              A five days Inter-House Outdoor Games Competitions was organized.
              Students form all the house participated enthusiastically in the
              Basket Ball, Volley Ball, Cricket and Football Competitions (for
              both Boys and Girls).
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>21-11-14</strong>
            </td>
            <td width="497">
               On the occasion of the World IT Day, an Invited Talk on
              &apos;Recent Trends of IT in e-Banking&apos; was organised by the
              Department of Computer Science. Mr. Vinod Kumar Mittal, DGM, IDBI
              Bank, Indore, Mr. Puneet Jain, Manager, IDBI Bank, Indore, and Mr.
              Rohit Jain, Manager, IDBI Bank, Indore, were the Resource Persons.
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>22-11-14</strong>
            </td>
            <td width="497">
              Under the guidance of the Placement Committee, thirty students
              participated in an Open Campus Drive of E-Clerx (A leading
              Financial Firm). Two students, Ms. Saloni Agar of B.Com. (Tax) V
              Sem and Mr. Shubham Jain of B.Com. (Hons.) V Sem were recruited by
              the Company.
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>28-11-14</strong>
            </td>
            <td width="497">
              One of our students, Mr. Akshay Bajaj BBA III Sem, after clearing
              the Inter-Collegiate, District and State Level Quiz Competition of
              the Youth Festival organised by DAVV, reached the Central Zone
              Level and secured Fourth position in it.
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>29-11-14</strong>
            </td>
            <td width="497">
              Mr. Shubham Verma, B.Com. (Plain) I Sem., participated in a State
              Level Power Lifting Competition and was selected for the National
              Level where he achieved the Fifth position.
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>01-12-14</strong>
            </td>
            <td width="497">
              A short programme on the World AIDS Day, consisting of a special
              prayer and speech was organized during the Morning Assembly.
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>03-12-14</strong>
            </td>
            <td width="497">
              To mark the importance of the International Day for Abolition of
              Slavery and the International Day for the Differently Abled
              People, inspirational and thought provoking speeches in a very
              creative manner were delivered by the students.
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>04-12-14</strong>
            </td>
            <td width="497">
              To commemorate the Indian Navy Day, a special programme was
              organised during the Morning Assembly. A special prayer was
              recited, patriotic songs were sung and a very motivating power
              point Presentation was presented.
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>09-12-14</strong>
            </td>
            <td width="497">
              A short programme was organised in anticipation of the World Human
              Rights Day during the Assembly. Enlightening speeches were
              delivered by the Principal Dr. Sr. Lilly V.S. and a student. In
              remembrance of the birth of Lord Jesus Christ, Christmas
              Celebration was organised. Christmas Carols were sung and special
              cultural programme was arranged. The Newsletter Luminous Vol. 5.2
              &apos;Krist Jayanti&apos; December 2014 issue was released during
              the programme.
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>17-12-14</strong>
            </td>
            <td width="497">
              A Felicitation Programme was organized to congratulate Prof.
              Goldie Zaki on the completion of her Doctoral Degree.
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>12-01-15</strong>
            </td>
            <td width="497">
              On the occasion of birth anniversary of Swami Vivekananda, The
              National Youth Day was enthusiastically celebrated. A special
              programme consisting of a Skit, Surya Namaskar and motivational
              songs was organized. The Chief Guest was Mr. Alok Ranjan Mourya,
              District Co-ordinator, Red Ribbon Club, Indore.
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>24-01-15</strong>
            </td>
            <td width="497">
              : St. Paul&apos;s Day was celebrated with joy and fervour in
              remembrance of our Heavenly Patron. Rev. Fr. Thomas Mathew,
              Principal, St. Paul Higher Secondary School, Indore, was the Chief
              Guest. A Power Point Presentation based on the Life of St. Paul,
              Group Songs, Dances and Prize Distribution were the key events. In
              order to create the voting awareness among the youth, an Oath
              administered by the Principal was also taken by all.
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>26-01-15</strong>
            </td>
            <td width="497">
              The 66th Republic Day of our country was celebrated with zeal and
              zest. Col. Nikhil Diwanji was the Chief Guest on the occasion. A
              parade was very wonderfully performed by the NCC students and a
              short cultural programme was organized.
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>27-01-15</strong>
            </td>
            <td width="497">
              Twenty eight students along with two Faculty Members participated
              in a Seminar on &apos;Girl Security&apos; organized by the Indore
              Police at the University Auditorium, Indore. Twenty fve NSS
              Volunteers, along with the NSS Programme Offcer, Prof. Deepa
              Muley, participated in a Rally organised by the Devi Ahilya
              University for creating voting awareness among the youth.
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>05-02-15</strong>
            </td>
            <td width="497">
              A Blood Donation Camp and an Eye and General Health Camp were
              organized by the NSS Units of our College. Faculty, staff and
              students donated blood in it and 51 Units of Blood was collected.
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>06-02-15</strong>
            </td>
            <td width="497">
              One Hundred students and ve Members of Faculty of our College
              attended a two days International Conclave organized by the Indore
              Management Association.
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>09-02-15</strong>
            </td>
            <td width="497">
              &apos;B&apos; Certifcate NSS Exam in the form of a Written Test
              and Interview was conducted for the NSS Volunteers.
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>10-02-15</strong>
            </td>
            <td width="497">
              A two days Annual Athletics Meet was organized. Dr. Ajay Sahni,
              Director, School of Physical Education, Devi Ahilya University,
              was the Chief Guest.
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>11-02-15</strong>
            </td>
            <td width="497">
              The Eighth Executive Committee Meeting of the Parents Professors
              Association (PPA) was held to discuss about the Fifth Annual Day
              Celebrations, the forthcoming meeting of the PPA and other matters
              related to the progress of the College.
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>21-02-15</strong>
            </td>
            <td width="497">
              The Common Class Test – I for this Semester was conducted for all
              the classes on two days with one day&apos;s break in between i.e.,
              on 21st and 23rd February.
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>24-02-15</strong>
            </td>
            <td width="497">
              Thirteen NCC Cadets attended a 10 days Combined Annual Training
              Camp organised at Kanakeshwari Dham Parisar, Nanda Nagar, Indore.
              They also appeared in the &apos;B&apos; Certifcation Exam.
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>28-02-15</strong>
            </td>
            <td width="497">
              On the occasion of the National Science Day, twelve students of
              B.Sc. I Year along with the Faculty of the Department of Science
              visited Raja Ramanna Centre for Advanced Technology, Indore.
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>03-03-15</strong>
            </td>
            <td width="497">
              The Fifth Annual Day was celebrated in a colourful manner. Rev.
              Fr. Dr. Johnney P.J., Director, Bhopal School of Social Sciences,
              Bhopal, was the Chief Guest and Most Rev. Dr. Chacko
              Thottumarickal, Bishop of the Catholic Diocese of Indore, was the
              Presiding Guest on the occasion. A very grand programme was
              organised at Ravindra Natya Graha. The performance of the students
              and the efforts of the Management, Faculty and Staff were
              remarkable and appreciated by all.
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>13-03-15</strong>
            </td>
            <td width="497">
              A special programme was organized to thank and to express
              gratitude to all the participants and volunteers of the Annual
              Day. Certicate of Participation was distributed to all.
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>16-03-15</strong>
            </td>
            <td width="497">
              In order to develop the employability and computer skills of the
              students, a five days Workshop on MS-Excel was organized under the
              Career Development Programme
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>17-03-15</strong>
            </td>
            <td width="497">
               With the aim of imparting Value Based Quality Education and
              increasing the rapport with the students, the Director and the
              Principal held Special Class-wise Meetings with the students.
              These Meetings were attended by a majority of the students. The
              meeting was held for ve days, each day for a different batch of
              students.
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>12-03-15</strong>
            </td>
            <td width="497">
              One of our students, Ms. Saloni Agar, B.Com (Tax) III Year,
              represented DAVV and participated in the State Level NSS Camp
              organised by the Department of Higher Education, Madhya Pradesh at
              Maihar Village, Satna District.
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>25-03-15</strong>
            </td>
            <td width="497">
              The Department of Commerce and Management organised a Workshop on
              &apos;Filing for E-Passport&apos;. The Workshop was conducted by
              the Head of the Department, Dr. Vishal Mehta.
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>27-03-15</strong>
            </td>
            <td width="497">
               In anticipation of &apos;Ram Navmi&apos;, a short programme was
              organised during the morning assembly.
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>30-03-15</strong>
            </td>
            <td width="497">
              Under the Career Development Programme, an eighty hours Workshop
              on Java Script, HTML, CSS and XML was organized by the Department
              of Computer Science. Four Students of our College participated in
              an Inter-College Debate Competition organized at the Vishisht
              School of Management.
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>01-04-15</strong>
            </td>
            <td width="497">
              Good Friday was observed and Easter was celebrated with religious
              fervor in the college, and a special programme showcasing the
              importance of the festival was organized. In anticipation of
              Mahavir Jayanti, a short programme was organized during the
              morning assembly.
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>02-04-15</strong>
            </td>
            <td width="497">
              The Head of the Science Department, Dr. Pragati Jain was invited
              as a delegate by the Delhi University for a Workshop on
              &apos;Indian Woman and Mathematics&apos;. She was the only
              delegate selected from M.P.
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>06-04-15</strong>
            </td>
            <td width="497">
              Under the motivational guidance of our Director and Principal, the
              Placement Committee organized a six days Industrial Exposure Tour
              to Maharashtra for all the second year students. A group of forty
              seven students and four Faculty Members visited four industries i
              . e . Maganlal Chikki (Lonavala), Mapro Factories (Mahabaleshwar),
              Brinton Carpets Asia Ltd. (Mahabaleshwar) and Honey Industries
              (Mahabaleshwar).
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>07-04-15</strong>
            </td>
            <td width="497">
              Ten students of our  college participated in different
              competitions organized at B.M. College, Indore. Our students won
              rst position in the Singing Competition and second position in
              the Quiz and Skit Competition.
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>08</strong> <strong>- 04 - 15</strong>
            </td>
            <td width="497">
              Ten students of our  college participated in different
              competitions organized at B.M. College, Indore. Our students won
              rst position in the Singing Competition and second position in
              the Quiz and Skit Competition.
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>13-04-15</strong>
            </td>
            <td width="497">
              In honour of the sculptor of our Constitution, Ambedkar Jayanti
              was celebrated during the morning assembly. Common Class Test - II
              for this semester was conducted for the students of all the
              classes on 13th and 15th April.
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>16-04-15</strong>
            </td>
            <td width="497">
              A Workshop on Banking and Finance, under the flagship of National
              Skills Development Corporation (NSDC), was conducted for our
              students. Thirty five students participated in it. Our Faculty
              Members, Dr. Ravi Vyas, Prof. Vivek Kaushik and Prof. Prateek
              Patel were the Resource Persons for the Workshop.
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>17-04-15</strong>
            </td>
            <td width="497">
              The students who had participated in the Skit and Singing
              Competitions held at B.M. College, Indore, and had won, were
              felicitated by the Director and the Principal.
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>18-04-15</strong>
            </td>
            <td width="497">
              PPA Meeting was organized for the parents. An Open House
              Discussion was also held. The parents met the Class Teachers and
              discussed about the progress of their wards.
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>20-04-15</strong>
            </td>
            <td width="497">
              In anticipation of Shri Parshuram Jayanti, a short program was
              organized during the morning assembly.
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>23-04-15</strong>
            </td>
            <td width="497">
              On the occasion of the World Books Day, a short programme, on the
              importance of the books and reading, was conducted during the
              morning assembly.
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>24-04-15</strong>
            </td>
            <td width="497">
              The Department of Commerce and Management organized an Exhibition
              of the Posters and Models submitted by the students. The
              Exhibition was inaugurated by the Principal, Dr. Sr. Lilly V. S.
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>25-04-15</strong>
            </td>
            <td width="497">
              A solemn Farewell Ceremony was organized for all the Final Year
              students of 2012-2015 Batch. The Alumni Association was introduced
              by the Director, Dr. Fr. C. Michael John. The Principal, Dr. Sr.
              Lilly V. S. elucidated the signicance of &apos;Light&apos; in the
              life of the students. Lighted Lamps symbolizing the motto of our
              college, &apos;Let Your Light Shine&apos; and Farewell Greeting
              Cards were handed over to all the students by the Director and the
              Principal. The students also took the oath administered by the
              Principal.
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>27-04-15</strong>
            </td>
            <td width="497">
              The Pre-University Exams began for all the students.
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>30-04-15</strong>
            </td>
            <td width="497">
              A farewell was given to Dr. Mamta Gokhe, Department of Humanities.
              The Director and the Principal extended their best wishes to her.
              A token of remembrance, on behalf of the Staff Association was
              also presented to her by Dr. Vishal Mehta.
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>02-05-15</strong>
            </td>
            <td width="497">The Pre-University Exams ended.</td>
          </tr>
          <tr>
            <td width="104">
              <strong>18-05-15</strong>
            </td>
            <td width="497">
              Prof. Prateek Patel, Department of Commerce and Management, was
              given a Farewell. The Principal presented a bouquet to him on
              behalf of the SPIPS family and extended best wishes to him.
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>26-05-15</strong>
            </td>
            <td width="497">
              Two female Police Offcers from the Palasia Police Station, Indore,
              visited our college. A meeting of the Offcers with the Faculty
              Members of the Women and Child Protection Committee was conducted.
              They also met the Director and Principal.
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>30-05-15</strong>
            </td>
            <td width="497">
              In order to create awareness about the ill-effects of tobacco
              consumption, a short programme in anticipation of the World No
              Tobacco Day was organized during the morning assembly.
            </td>
          </tr>
          <tr>
            <td width="104">
              <strong>14-06-15</strong>
            </td>
            <td width="497">
              The First Alumni Meet of our College was organized. SPIPS Alumni
              in large number attended the Meet. They were given a fraternal
              welcome and an organized informal programme was arranged by the
              Management and an organized informal programme was arranged by the
              management  Association&apos;s elections were held and the First
              Executive Committee of the Alumni Association of SPIPS was formed.
            </td>
          </tr>
        </tbody>
      </table>
    </>
  ),
  "Happenings 2013-14": (
    <>
      <table className="w-100">
        <tbody>
          <tr>
            <td width="113">
              <strong>24</strong>
              <strong>th </strong>
              <strong>June 2013</strong>
            </td>
            <td width="488">
              <strong> </strong>To welcome the II and III year students after
              their summer vacation, a welcome programme was organized by the
              B.B.A. and B.C.A students.
            </td>
          </tr>
          <tr>
            <td width="113">
              <strong>28</strong>
              <strong>th </strong>
              <strong>June</strong>
            </td>
            <td width="488">
              A workshop on E-modes of payment of Property and Water Tax was
              conducted.
            </td>
          </tr>
          <tr>
            <td width="113">
              <strong>2</strong>
              <strong>nd </strong>
              <strong>July</strong>
            </td>
            <td width="488">
              The senior students accorded cordial welcome to the new batch of
              students. All the new students were given a oral welcome and a
              wonderful cultural programme was arranged. The College Annual
              Magazine was released on the occasion by the Director and the
              Principal.
            </td>
          </tr>
          <tr>
            <td width="113">
              <strong>3</strong>
              <strong>rd </strong>
              <strong>July</strong>
            </td>
            <td width="488">
              To enhance and improve the linguistic capacities of the First year
              students, 15 days classes were held by the INCISIVE group
            </td>
          </tr>
          <tr>
            <td width="113">
              <strong>23</strong>
              <strong>rd </strong>
              <strong>July</strong>
            </td>
            <td width="488">
              Plantation Day was organized and 150 saplings were planted by the
              N.S.S volunteers under the guidance of the N.S.S. Programme Ofcer
              Dr. Pragati Jain. Mrs. Annie Pawar the Vice President, YWCA, was
              the Chief Guest.
            </td>
          </tr>
          <tr>
            <td width="113">
              <strong>
                26<sup>th </sup>July
              </strong>
            </td>
            <td width="488">
              The Fourth Foundation Day cum Freshers&apos; Talent Show Day was
              celebrated. Dr. Rajeev Dixit, DCDC, Devi Ahilya University was the
              Chief Guest on the occasion. The  new  batch  of  students 
              exhibited  their t a l e n t s t h r o u g h a b e a u t i f u l c
              u l t u r a l programme. All our staff members were  felicitated
              during the programme. The Newsletter &apos;Suswagatam&apos; was
              released on the occasion.
            </td>
          </tr>
          <tr>
            <td width="113">
              <strong>
                7<sup>th</sup> AUGUST
              </strong>
            </td>
            <td width="488">
               T h e P a r e n t s P r o f e s s o r s Association&apos;s 
              (PPA)  Executive  Committee Meeting was held to discuss about the
              Annual General Body Meeting of PPA and other matters related to
              the progress of the College.
            </td>
          </tr>
          <tr>
            <td width="113">
              <strong>
                8<sup>TH</sup> AUGUST
              </strong>
            </td>
            <td width="488">
              The feast of Eid-Ul-Fitr was celebrated in the College.
            </td>
          </tr>
          <tr>
            <td width="113">
              <strong>11</strong>
              <strong>th </strong>
              <strong>August</strong>
            </td>
            <td width="488">
              The Annual General Body Meeting of PPA was held. It included an
              Open House Discussion and distribution of report cards to the
              parents. Parents in large number attended the meeting and sought
              information about their wards progress in studies.
            </td>
          </tr>
          <tr>
            <td width="113">
              <strong>12 AUGUST</strong>
            </td>
            <td width="488">
              BBA &amp; BCA students were welcomed for their next session by the
              other students through a small programme.
            </td>
          </tr>
          <tr>
            <td width="113">
              <strong>15 AUGUST</strong>
            </td>
            <td width="488">
              The Independence Day was celebrated with patriotism and zeal.
              March Past, singing of patriotic songs, motivational speeches and
              poems were the main events. Lt. Col. S. K. Shukla was the Chief
              Guest.
            </td>
          </tr>
          <tr>
            <td width="113">
              <strong>16 AUGUST</strong>
            </td>
            <td width="488">
              Selection of House-wise Office  Bearers was done. Captain,
              Vice-Captain, Cultural, Sports &amp; Literary Captain from each
              House were selected.
            </td>
          </tr>
          <tr>
            <td width="113">
              <strong>17</strong>
              <strong>th </strong>
              <strong>August</strong>
            </td>
            <td width="488">
              Class Representatives (CR) from each class were elected by the
              students and a Student Council consisting of the President Ms.
              Kajal Dixit B. Com (Tax) III Year, Vice President Mr. Lakshay Dave
              B. Com (CA) III Year, Secretary Mr. Anirudh Kalyani B.B.A. II Year
              and Joint Secretary Ms. Milan Chavhan B. Com (Tax) I Year was
              formed from the group of CRs.
            </td>
          </tr>
          <tr>
            <td width="113">
              <strong>18 August</strong>
            </td>
            <td width="488">
               On the occasion of the World Photography Day, an Inter House
              Photo- graphy competition was held.
            </td>
          </tr>
          <tr>
            <td width="113">
              <strong>20 August</strong>
            </td>
            <td width="488">
              A special programme was organized to celebrate the Sadbhavna
              Diwas.
            </td>
          </tr>
          <tr>
            <td width="113">
              <strong>
                26<sup>th</sup> August
              </strong>
            </td>
            <td width="488">
               A talk on &apos;The Importance of Economics in Daily life&apos;
              by Dr. Kamlesh Bhandari was conducted
            </td>
          </tr>
          <tr>
            <td width="113">
              <strong>29</strong>
              <strong>th </strong>
              <strong>August</strong>
            </td>
            <td width="488">
              Fine Arts Festival was celebrated in the form of Inter House
              Literary and Arts competitions. Events were conducted on 29th
              &amp;30<sup>th</sup> August and 20<sup>th</sup> and 21th September
              respectively.
            </td>
          </tr>
          <tr>
            <td width="113">
              <strong>5</strong>
              <strong>th </strong>
              <strong>September</strong>
            </td>
            <td width="488">
              Teachers&apos; Day was celebrated. Students&apos; Council of the
              College took the initiative to organize a beautiful programme and
              all our professors were felicitated during this programme.
            </td>
          </tr>
          <tr>
            <td width="113">
              <strong>6</strong>
              <strong>th </strong>
              <strong>September</strong>
            </td>
            <td width="488">
               Inter-House Quiz Competition was organized in three phases and
              prize worth Rs. 10,000 (I-position) &amp; Rs. 5,000 (II-position)
              were given by the Management after the nal round.
            </td>
          </tr>
          <tr>
            <td width="113">
              <strong>
                10<sup>th</sup> september
              </strong>
            </td>
            <td width="488">
              The Department of Science conducted a &apos;Quiz on
              Mathematics&apos; for all the nal year students. 11 th September:
              A &apos;Workshop on Ethical Hacking &amp; I.T. Security&apos; was
              organized by the Department of Computer Science.
            </td>
          </tr>
          <tr>
            <td width="113">
              <strong>
                14<sup>th</sup> september
              </strong>
            </td>
            <td width="488">
              On the occasion of Hindi Diwas, a short programme stressing on the
              importance of the Hindi language was conducted during the morning
              assembly
            </td>
          </tr>
          <tr>
            <td width="113">
              <strong>16</strong>
              <strong>th </strong>
              <strong>September</strong>
            </td>
            <td width="488">
               Our NCC Officer Dr. Avinash Yadav attended a Pre Commission
              Training Course (PRCN) from 16th September to 14<sup>th</sup>{" "}
              December 2013 at the Ofcers Training Academy, Kamptee, Nagpur to
              become an Associate NCC Ofcer (ANO). An Industrial Visit was
              organized and students visited companies l ike Mahindra Two
              Wheelers, Neo Corp., Raj Ratan Global Corp., Windals Auto etc.
            </td>
          </tr>
          <tr>
            <td width="113">
              <strong>
                24<sup>th</sup> September
              </strong>
            </td>
            <td width="488">
              NSS Day was celebrated. A programme comprising of a Skit, N.S.S.
              Song and a Power Point Presentation on N.S.S. activities was
              conducted.
            </td>
          </tr>
          <tr>
            <td width="113">
              <strong>4</strong>
              <strong>th </strong>
              <strong>October</strong>
            </td>
            <td width="488">
              An N.S.S Special Camp of seven days was organized at Sanawadiya
              village, Indore District. The theme of the camp was &apos;Health
              and Hygiene&apos;.
            </td>
          </tr>
          <tr>
            <td width="113">
              <strong>11</strong>
              <strong>th </strong>
              <strong>October</strong>
            </td>
            <td width="488">
              To enhance the accounting skills of the students a         15 days
              &apos;Tally Workshop&apos; was organized.
            </td>
          </tr>
          <tr>
            <td width="113">
              <strong>31</strong>
              <strong>st </strong>
              <strong>October</strong>
            </td>
            <td width="488">
              The festival of light, Diwali was enthusiastically celebrated with
              pomp and show. MP Foundation Day was also added to this programme
            </td>
          </tr>
          <tr>
            <td width="113">
              <strong>
                16<sup>th</sup> november
              </strong>
            </td>
            <td width="488">
              Guru Nanak Jyanti was celebrated and an informative speech was
              delivered by Mr. Jatin Gera BCA III Year on the occasion.
            </td>
          </tr>
          <tr>
            <td width="113">
              <strong>2nd December</strong>
            </td>
            <td width="488">
              To create awareness about the International Day for Abolition of
              Slavery, a Skit was presented by the students.
            </td>
          </tr>
          <tr>
            <td width="113">
              <strong>4</strong>
              <strong>
                <sup>th</sup>
              </strong>
              <strong> december</strong>
            </td>
            <td width="488">
              The 42<sup>nd</sup> Anniversary of the Indian Navy was observed.
              Thirty students and a few faculty members visited Yugpurush Dham
              orphanage, distributed sweets and donated woolen clothes.
            </td>
          </tr>
          <tr>
            <td width="113">
              <strong>7</strong>
              <strong>th </strong>
              <strong>December</strong>
            </td>
            <td width="488">
              To commemorate the Indian Flag Day, an Informative Speech was
              delivered during the Morning Assembly.
            </td>
          </tr>
          <tr>
            <td width="113">
              <strong>
                10<sup>th</sup> December
              </strong>
            </td>
            <td width="488">
               A short programme was organized on World Human Rights Day and the
              Principal Dr. Sr. Lilly V.S. delivered a speech on the occasion.
            </td>
          </tr>
          <tr>
            <td width="113">
              <strong>17</strong>
              <strong>th </strong>
              <strong>December</strong>
            </td>
            <td width="488">
              Remembering the birth of the savior of the world Lord Jesus Christ
              Christmas celebration was organized. Christmas Carols and a Power
              Point Presentation based on the story of Christmas and the life of
              Lord Jesus were the main attraction.
            </td>
          </tr>
          <tr>
            <td width="113">
              <strong>2</strong>
              <strong>nd </strong>
              <strong>January 2014</strong>
            </td>
            <td width="488">
              The New Year was welcomed with  open  arms. A  short            
              programme comprising of special prayer and motivational songs was
              organized during the assembly.
            </td>
          </tr>
          <tr>
            <td width="113">
              <strong>
                9<sup>th</sup> January 2014
              </strong>
            </td>
            <td width="488">
              The National Youth Day was enthusiastically celebrated. The
              photograph of S w a m i V i v e k a n a n d a w a s g a r l a n d
              e d , m o t i v a t i o n a l s o n g s w e r e s u n g a n d
              demonstration of Surya Namaskar was done.
            </td>
          </tr>
          <tr>
            <td width="113">
              <strong>17</strong>
              <strong>th </strong>
              <strong>January</strong>
            </td>
            <td width="488">
               A two days Athletics Meet was organized. Mr. Sunil Dhoodhale,
              Deputy Director, Sports Department, Devi Ahilya University was the
              Chief Guest.
            </td>
          </tr>
          <tr>
            <td width="113">
              <strong>21</strong>
              <strong>st </strong>
              <strong>January</strong>
            </td>
            <td width="488">
              A Blood Donation Camp, Eye and Dental Check up were organized by
              the NSS Unit of our College. The Director Dr. Fr. C. Michael John,
              faculty, staff and students donated blood.
            </td>
          </tr>
          <tr>
            <td width="113">
              <strong>24</strong>
              <strong>th </strong>
              <strong>January</strong>
            </td>
            <td width="488">
              On the occasion of the National Girl Child Day a thought provoking
              speech was delivered by Prof. Neeraj Sethi and a poem stating the
              importance of a girl child was recited by Mr. Vineet Bidwai B.Com
              (Hons) III Year.
            </td>
          </tr>
          <tr>
            <td width="113">
              <strong>25</strong>
              <strong>th </strong>
              <strong>January</strong>
            </td>
            <td width="488">
              St. Paul&apos;s Day was celebrated with fervor and enthusiasm in
              remembrance of our Heavenly Patron. Rev. Fr. Thankachan, Director,
              Education Commission of the Catholic Diocese, Indore, was the
              Chief Guest. A Power Point Presentation based on St. Paul, group
              songs, dances and prize distribution were the key events.
            </td>
          </tr>
          <tr>
            <td width="113">
              <strong>26</strong>
              <strong>th </strong>
              <strong>January</strong>
            </td>
            <td width="488">
               The Republic Day was celebrated with zeal and zest. Col. K.K.
              Sharma was the Chief Guest on the occasion.
            </td>
          </tr>
          <tr>
            <td width="113">
              <strong>4</strong>
              <strong>th </strong>
              <strong>February</strong>
            </td>
            <td width="488">
              B Certificate Exam in the form of a written test and personal
              interview was conducted for the NSS volunteers.
            </td>
          </tr>
          <tr>
            <td width="113">
              <strong>
                22<sup>nd</sup> February
              </strong>
            </td>
            <td width="488">
              Students of B.Sc. I year were taken on an Educational Visit to
              Raja Ramanna Centre for Advanced Technology, Indore.
            </td>
          </tr>
          <tr>
            <td width="113">
              <strong>23</strong>
              <strong>rd </strong>
              <strong>February</strong>
            </td>
            <td width="488">
              A written test for NCC Cadets was conducted at CRP Line,  Indore 
              and 12 Cadets of our college participated in it.
            </td>
          </tr>
          <tr>
            <td width="113">
              <strong>
                26<sup>th</sup> February
              </strong>
            </td>
            <td width="488">
              The Fourth Annual Day was celebrated in a colorful manner. Most
              Rev. Dr. Chacko Thhotumarikcal, Bishop of Catholic Diocese of
              Indore was the Presiding Guest and Mr. Varun Kapoor, Inspector
              General, Police Radio Training School, Indore was the Special
              Guest on the occasion. A very grand programme was organized in
              Ravindra Natya Graha. The performances by the students and the
              hard work of the management, faculty and staff were overwhelming
              and remarkable.
            </td>
          </tr>
          <tr>
            <td width="113">
              <strong>28</strong>
              <strong>th </strong>
              <strong>February</strong>
            </td>
            <td width="488">
               On the National Science Day, Dr. C.V. Raman was specially
              remembered for his contribution in the world of Science.
            </td>
          </tr>
          <tr>
            <td width="113">
              <strong>10</strong>
              <strong>th </strong>
              <strong>March</strong>
            </td>
            <td width="488">
              A Series of Invited Talks on &apos;Career Option in Administrative
              sector, in the eld of Designing and in Management&apos; were
              organized for three consecutive days.
            </td>
          </tr>
          <tr>
            <td width="113">
              <strong>
                13<sup>th </sup>March
              </strong>
            </td>
            <td width="488">
              In order to develop the employability of the students, a 13 Days
              Vedic Maths, Group Discussion and Personal Interview Model classes
              were started for the students under the Career Development
              Programme.
            </td>
          </tr>
          <tr>
            <td width="113">
              <strong>15</strong>
              <strong>th </strong>
              <strong>March</strong>
            </td>
            <td width="488">
              PPA Meeting was organized for the parents. The parents personally
              met the Class Teachers and discussed about the progress of their
              wards.
            </td>
          </tr>
          <tr>
            <td width="113">
              <strong>19</strong>
              <strong>th </strong>
              <strong>March</strong>
            </td>
            <td width="488">
              A talk on &apos;Quantum Physics&apos; was organized for the
              Science students. The Resource person was Mr. T.J. Andrews from
              SGSITS, Indore.
            </td>
          </tr>
          <tr>
            <td width="113">
              <strong>
                25<sup>th</sup> March
              </strong>
            </td>
            <td width="488">
              A Special Programme was organized to thank and to express
              gratitude to all the participants and volunteers of the Annual
              Day. Certicates of participation were distributed to all.
            </td>
          </tr>
          <tr>
            <td width="113">
              <strong>29</strong>
              <strong>th </strong>
              <strong>March</strong>
            </td>
            <td width="488">
              To bid adieu to all the B.A., B.Sc. and B.Com. III year students,
              a solemn farewell was organized. Alumni Association was introduced
              by the Director Dr. Fr. C. Michael John. The Principal Dr. Sr.
              Lilly V.S. elucidated the signicance of &apos;Light&apos; in the
              life of the students. Lighted Lamps signifying the motto of our
              College “Let your Light Shine” were handed over to all the
              students by the Director and the Principal.
            </td>
          </tr>
          <tr>
            <td width="113">
              <strong>11</strong>
              <strong>th </strong>
              <strong>April</strong>
            </td>
            <td width="488">
              In anticipation of Mahavir Jayanti, a short programme was
              organized during the morning assembly
            </td>
          </tr>
          <tr>
            <td width="113">
              <strong>
                17<sup>th</sup> April
              </strong>
            </td>
            <td width="488">
              Good Friday was observed and Easter was celebrated with religious
              enthusiasm in the college.1st May: The Labourer&apos;s Day was
              celebrated in the form of the feast of St. Joseph. A special
              programme was held to mark the importance of the day. S P I P S i
              n a s s o c i a t i o n w i t h R o o m a n Technologies,
              Bengaluru, organized a sixty hours&apos; Workshop under the
              agship of the National Skills Development Corporation (NSDC), New
              Delhi. The Workshop was in two phases. First phase of the Workshop
              was inaugurated by the Director Dr. Fr. C. Michael John and the
              second phase by the Principal Dr. Sr. Lilly V.S. The Training
              started from 1st May and lasted till 24th May &apos;14. The
              Trainers were Mr. Naval T. Menon (Certied Network Trainer- CISCO)
              and Mr. Subhojeet Saha (Certied IT Trainer-Microsoft). Main
              Topics covered in the Workshop were Concept of Networking, Data
              Sharing, Server Setup, IT Protocols and Guide to improve Typing
              Skills.
            </td>
          </tr>
          <tr>
            <td width="113">
              <strong>19</strong>
              <strong>th </strong>
              <strong>May</strong>
            </td>
            <td width="488">
              Inauguration of the new Computer Lab was done by Prof. Gourav
              Rawal, Head of the Computer Science Department, in the presence of
              the Director, Principal, members of faculty, staff and students.
            </td>
          </tr>
          <tr>
            <td width="113">
              <strong>30</strong>
              <strong>th </strong>
              <strong>May</strong>
            </td>
            <td width="488">
              Farewell &apos;LET YOUR LIGHT SHINE&apos; was organized for the
              BBA and BCA VI Semester students by the Programme Committee.
              Alumni Association was introduced by the Director. The Principal,
              Dr. Sr. Lilly V.S. illuminated on the implication of
              &apos;Light&apos; in the life of the students. Lighted Lamps
              signifying our motto were handed over to all the students by the
              Director and the Principal. Students also took an oath
              administered by the Principal.
            </td>
          </tr>
          <tr>
            <td width="113">
              <strong>
                31<sup>th </sup>May
              </strong>
            </td>
            <td width="488">
               A Gathering of SPIPS family to felicitate the Director Dr. Fr. C.
              Michael John on his becoming the Vicar General of the Catholic
              Diocese of Indore was conducted. A Thanks Giving programme for the
              faculty and staff was also organized on the same day. To make the
              day more enjoyable a Music Concert was arranged. The singers were
              Mr. Rajesh Sharma and Mrs. Kavita Shrivastava. Later, a delicious
              lunch was served to all.
            </td>
          </tr>
          <tr>
            <td width="113">
              <strong>24</strong>
              <strong>th </strong>
              <strong>June</strong>
            </td>
            <td width="488">
              The Annual Planner for 2014-15 was released and the List of
              Committees for the session 2014-15 was distributed to all the
              faculty members.
            </td>
          </tr>
          <tr>
            <td width="113">
              <strong>29</strong>
              <strong>th </strong>
              <strong>June</strong>
            </td>
            <td width="488">
              Our College hosted an exam of the Railway Recruitment Board which
              was conducted in the college campus by the Ministry of Railways
              under Govt. of India.
            </td>
          </tr>
        </tbody>
      </table>
    </>
  ),
  "Happenings 2012-13": (
    <>
      <table className="w-100">
        <tbody>
          <tr>
            <td width="128">
              <strong>DATE</strong>
            </td>
            <td width="232">
              <strong>NAME OF THE EVENT</strong>
            </td>
            <td width="338">
              <strong>DESCRIPTION</strong>
            </td>
          </tr>
          <tr>
            <td width="128">5-March-12</td>
            <td width="232">
              Visit to Barli Development Institute for Rural Women
            </td>
            <td width="338">
              The Visit was organized on the occasion of Women’s Day.
            </td>
          </tr>
          <tr>
            <td width="128">19-March-12</td>
            <td width="232">Science Day Celebration</td>
            <td width="338">
              Working models and posters were displayed. Dr. Dinesh Varshney,
              Former DCDC, HOD, Dept. of Physics was invited as the Chief Guest.
            </td>
          </tr>
          <tr>
            <td width="128">21-March-12</td>
            <td width="232">International Day for English.</td>
            <td width="338">
              A speech competition was organized in Hindi and Anti-racial
              Discrimination Day was observed.
            </td>
          </tr>
          <tr>
            <td width="128">28-March-12</td>
            <td width="232">Inter-college Volleyball Match</td>
            <td width="338">
              It was between Altius college and SPIPS and was organized on SPIPS
              sports ground.
            </td>
          </tr>
          <tr>
            <td width="128">2-April-12</td>
            <td width="232">Invited talk on Career Options in Management</td>
            <td width="338">
              Mr. Sandeep Atre, Director, CH edgemakers was the resource person.
            </td>
          </tr>
          <tr>
            <td width="128">3-April-12</td>
            <td width="232">Invited talk on Career Options in Computers</td>
            <td width="338">
              Mr. Manoj Bajpai, Member, Octopus Group, was the resource person.
            </td>
          </tr>
          <tr>
            <td width="128">5-April-12</td>
            <td width="232">Feast of Good Friday and Easter</td>
            <td width="338">
              Good Friday was observed and Easter was celebrated in the college.
            </td>
          </tr>
          <tr>
            <td width="128">11-April-12</td>
            <td width="232">
              Participation in inter-college Indoor and Outdoor games
            </td>
            <td width="338">Was organized at Vikrant College, MHOW. SPIPS</td>
          </tr>
          <tr>
            <td width="128">1-May-2012</td>
            <td width="232">Labour Day Celebration</td>
            <td width="338">
              Message was given by the Principal and the Vice- Principal
              denoting the importance of the day.
            </td>
          </tr>
          <tr>
            <td width="128">13-May-2012</td>
            <td width="232">Mother’s Day Celebration</td>
            <td width="338">
              Decoration was done and posters were exhibited on the occasion.
            </td>
          </tr>
          <tr>
            <td width="128">5-June-2012</td>
            <td width="232">World Environment Day</td>
            <td width="338">
              NSS students participated in a rally organized by DAVV.
            </td>
          </tr>
          <tr>
            <td width="128">25-June-2012</td>
            <td width="232">Welcome Programme for Students</td>
            <td width="338">
              To welcome the students after the summer vacations, a cultural
              programme was organized by the members of faculty.
            </td>
          </tr>
          <tr>
            <td width="128">13-July-2012</td>
            <td width="232">Plantation Programme guest house.</td>
            <td width="338">
              NSS student volunteers conducted the programme at DAVV.
            </td>
          </tr>
          <tr>
            <td width="128">21-July-2012</td>
            <td width="232">Importance of Soft Skills</td>
            <td width="338">
              A guest lecture delivered by the famous Quiz Master of M.P, Mr.
              Amiya Pahare.
            </td>
          </tr>
          <tr>
            <td width="128">23-July-2012</td>
            <td width="232">Plantation Day Celebration</td>
            <td width="338">
              Collage and poster-making competition was conducted to create
              environmental awareness.
            </td>
          </tr>
          <tr>
            <td rowspan="3" width="128">
              26-July-2012
            </td>
            <td width="232">The Third Foundation Day Celeberation</td>
            <td width="338">
              Students performed various cultural activities. Celebrated as the
              Fresher’s Talent Show Day.
            </td>
          </tr>
          <tr>
            <td width="232">NSS Inaugurated</td>
            <td width="338">
              It was inaugurated by Mr. Sachin Sharma, Indore District
              Co-ordinator.
            </td>
          </tr>
          <tr>
            <td width="232">NCC Constituted</td>
            <td width="338">
              It was constituted by Col. SS Waradkar, Group Commander, 9 M.P.
              Battalion, NCC.
            </td>
          </tr>
          <tr>
            <td width="128">27-July-2012</td>
            <td width="232">
              Bridging the Gap Between Theoretical and Practical Approach
            </td>
            <td width="338">
              Guest Lecture by Mr. Franklin Manual, Adani Group of Industries.
            </td>
          </tr>
          <tr>
            <td width="128">1-Aug-2012</td>
            <td width="232">Rakshabandhan Celebration</td>
            <td width="338">Rakhi-making competition was conducted.</td>
          </tr>
          <tr>
            <td width="128">4-Aug-2012</td>
            <td width="232">
              Basics of Capital Market and Professional Photography sessions
            </td>
            <td width="338">15 days Certificate Course was organised.</td>
          </tr>
          <tr>
            <td width="128">7-Aug-2012</td>
            <td width="232">‘Health’ Quiz Competition</td>
            <td width="338">Was conducted by the NSS team members.</td>
          </tr>
          <tr>
            <td width="128">14-Aug-2012</td>
            <td width="232">SAREGAMA Talent Hunt</td>
            <td width="338">
              Auditions and seminar were organized. Mr. Gautam Kale, Director,
              SAREGAMA was the Chief Guest.
            </td>
          </tr>
          <tr>
            <td width="128">15-Aug-2012</td>
            <td width="232">Independence Day Celebration</td>
            <td width="338">
              Celebrated by organizing a march past and singing of patriotic
              songs. Col. Pavan Bharadwaj was the Chief Guest.
            </td>
          </tr>
          <tr>
            <td width="128">18-Aug-2012</td>
            <td width="232">Picnic to Mandav</td>
            <td width="338">
              An excursion enjoyed by all students, staff &amp; faculty.
            </td>
          </tr>
          <tr>
            <td width="128">25-Aug-2012</td>
            <td width="232">Fresher’s Day Celebration</td>
            <td width="338">
              Cultural programme was presented by the senior students for their
              juniors.
            </td>
          </tr>
          <tr>
            <td width="128">1-Sept-2012</td>
            <td width="232">New Principal appointed</td>
            <td width="338">
              Dr. Sr. Lilly V.S. took charge as the new principal of SPIPS
            </td>
          </tr>
          <tr>
            <td width="128">5-Sept-2012</td>
            <td width="232">Teacher’s Day Celebration</td>
            <td width="338">
              Cultural programme was organized by the students for the teachers.
            </td>
          </tr>
          <tr>
            <td width="128">7-Sept-2012</td>
            <td width="232">Industrial Visit</td>
            <td width="338">
              Students visited Mahindra Two Wheelers, Neo Corp and Raj Ratan
              Global Corp for a hands-on experience.
            </td>
          </tr>
          <tr>
            <td width="128">14-Sept-2012</td>
            <td width="232">Hindi Diwas Celebration</td>
            <td width="338">
              A short programme during the morning assembly was conducted
              stressing on the importance of the Hindi Language
            </td>
          </tr>
          <tr>
            <td width="128">18-Sept-2012</td>
            <td width="232">Inter-house Competition</td>
            <td width="338">
              Students participated in Rangoli and Photography competitions.
            </td>
          </tr>
          <tr>
            <td width="128">22-Sept-2012</td>
            <td width="232">Fine Arts Day</td>
            <td width="338">
              Inter-house literary and cultural competitions were conducted.
            </td>
          </tr>
          <tr>
            <td width="128">24-Sept-2012</td>
            <td width="232">NSS Day Celebration</td>
            <td width="338">
              PPT Presentation on the past, present and future of NSS activities
              organized in the college was done. Mr. Prajwal Khare, Asst.
            </td>
          </tr>
          <tr>
            <td width="128">27-Sept-2012</td>
            <td width="232">College NEWS Letter Luminous 3.1</td>
            <td width="338">
              The 3rd edition of the NEWS letter was released.
            </td>
          </tr>
          <tr>
            <td width="128">5-Oct-2012</td>
            <td width="232">Inter-college Girls Table Tennis Tournament</td>
            <td width="338">
              SPIPS hosted the tournament for the first time &amp; won II
              position Table Tennis Tournament
            </td>
          </tr>
          <tr>
            <td width="128">12-Oct-2012</td>
            <td width="232">Visit to Orphanage and Old Age Home</td>
            <td width="338">
              40 NSS student volunteers visited Jyoti Niwas, distributed sweets
              and donated woolen cloths.
            </td>
          </tr>
          <tr>
            <td width="128">15-Oct-2012</td>
            <td width="232">Youth Festival</td>
            <td width="338">
              Students participated in Youth Festival and represented DAVV at
              National level Debate Competition and bagged the 4th position.
            </td>
          </tr>
          <tr>
            <td width="128">19-Oct-2012</td>
            <td width="232">Blood Donation Camp</td>
            <td width="338">
              Conducted in the college campus by the NSS unit with Dr. Prakash
              Gadwal as the Chief Guest.
            </td>
          </tr>
          <tr>
            <td width="128">1-Nov-2012</td>
            <td width="232">M.P. Foundation Day Celebration</td>
            <td width="338">M.P. Anthem was sung by all at the assembly.</td>
          </tr>
          <tr>
            <td width="128">10-Nov-2012</td>
            <td width="232">Diwali Celebration</td>
            <td width="338">
              Cultural programme and bursting of fire crackers was done.
            </td>
          </tr>
          <tr>
            <td width="128">20-Nov-2012</td>
            <td width="232">NCC Camp</td>
            <td width="338">
              Student NCC cadets participated in a 10 days camp at MHOW
            </td>
          </tr>
          <tr>
            <td width="128">22-Nov-2012</td>
            <td width="232">SPIPS as Exam Center</td>
            <td width="338">
              College was declared as the University semester exam center for
              the first time for B. Com I Semester by DAVV.
            </td>
          </tr>
          <tr>
            <td width="128">1-Dec-2012</td>
            <td width="232">
              World AIDS Day and International Day of People with Disability
            </td>
            <td width="338">
              The day was observed in the college. The students and professors
              in their messages stressed the need to treat everyone with
              respect.
            </td>
          </tr>
          <tr>
            <td width="128">4-Dec-2012</td>
            <td width="232">PPA Executive Committee Meeting</td>
            <td width="338">
              The 4th PPA Executive Committee meeting’s points of discussion
              were about college discipline, punctuality and regularity of
            </td>
          </tr>
          <tr>
            <td width="128">15-Dec-2012</td>
            <td width="232">Christmas Celebration</td>
            <td width="338">
              Cultural programmes, PPT based on the life of Jesus were the main
              attractions.
            </td>
          </tr>
          <tr>
            <td width="128">1-Jan-2013</td>
            <td width="232">New Year Celebration</td>
            <td width="338">Speeches were delivered and songs were sung.</td>
          </tr>
          <tr>
            <td width="128">6-Jan-2013</td>
            <td width="232">NSS Camp</td>
            <td width="338">
              A ten days NSS Camp at Piwdai village was organized.
            </td>
          </tr>
          <tr>
            <td width="128">12-Jan-2013</td>
            <td width="232">Youth Day Celebration</td>
            <td width="338">
              Photograph of Swami Vivekananda was garlanded and poems were
              recited.
            </td>
          </tr>
          <tr>
            <td width="128">21-Jan-2013</td>
            <td width="232">Seminar by Microsoft</td>
            <td width="338">
              Mr. Amit Jadhav of Microsoft, Mumbai was the resource person.
            </td>
          </tr>
          <tr>
            <td width="128">23-25-Jan-2013</td>
            <td width="232">Annual Sports Athletic Meet</td>
            <td width="338">
              A two days inter-house athletic meet was organized with Mr.
              Kulwinder Gill, President, M.P Basketball Association as
            </td>
          </tr>
          <tr>
            <td width="128">25-Jan-2013</td>
            <td width="232">St. Paul’s Day</td>
            <td width="338">
              A short programme was conducted alongwith the closing ceremony of
              Annual Sport’s Meet
            </td>
          </tr>
          <tr>
            <td width="128">26-Jan-2013</td>
            <td width="232">Republic Day Celebration</td>
            <td width="338">
              The day was celebrated with full fervor. Col. Alok Beri was the
              Chief Guest.
            </td>
          </tr>
          <tr>
            <td width="128">22-Feb-2013</td>
            <td width="232">The 3rd Annual Day Celebration</td>
            <td width="338">
              Vice-Chancellor, DAVV, Dr. D.P Singh was the Chief Guest. A grand
              Annual Day programme was organized.
            </td>
          </tr>
          <tr>
            <td width="128">23-Feb-2013</td>
            <td width="232">Visit to RRCAT</td>
            <td width="338">Students of B. Sc went on an educational tour.</td>
          </tr>
          <tr>
            <td width="128">26-Feb-2013</td>
            <td width="232">Tally, English Improvement</td>
            <td width="338">
              A 15 days Certificate Course was organized for the students.
            </td>
          </tr>
          <tr>
            <td width="128">28-Feb-2013</td>
            <td width="232">World Science Day and PD Workshop</td>
            <td width="338">
              Science exhibition with posters and working models was organized.
            </td>
          </tr>
          <tr>
            <td width="128">17-March-2013</td>
            <td width="232">Parents Professors Meeting</td>
            <td width="338">
              Meeting included open discussions and the distribution of
              student’s report cards to the parents by the class teachers.
            </td>
          </tr>
          <tr>
            <td width="128">21-March-2013</td>
            <td width="232">Invited Talk</td>
            <td width="338">
              Series of lectures on: Interview orientation, Mock Interview,
              Budget Analysis and Career in Banking Sector were organized.
            </td>
          </tr>
          <tr>
            <td width="128">4 - April-2013</td>
            <td width="232">Campus Recruitment Programme</td>
            <td width="338">
              The programme was in collaboration with the Orlando Academy. It
              included presentation, Group Discussions, Personal Interviews.
            </td>
          </tr>
          <tr>
            <td width="128">17-April-2013</td>
            <td width="232">Farewell Function ‘Let your Light Shine’</td>
            <td width="338">
              It was organized for the first outgoing batch of students. Alumni
              Association was inaugurated by the Director, Dr. Fr. C. Michael
              John.
            </td>
          </tr>
        </tbody>
      </table>
    </>
  ),
};

const chronicle = () => {
  return (
    <>
      <Head>
        <title>INSTITUTIONAL DISTINCTIVENESS - SPIPS</title>
      </Head>
      <Banner
        isFrontBanner={false}
        bannerImg={bannerImg}
        heading={"INSTITUTIONAL DISTINCTIVENESS"}
      />
      <div className={`spacing_both`}>
        <div className="container">
          <Accordion
            tabsData={tabsData}
            tabHeadClassName={"Accordian_dark_bg"}
          />
        </div>
      </div>
    </>
  );
};

export default chronicle;
