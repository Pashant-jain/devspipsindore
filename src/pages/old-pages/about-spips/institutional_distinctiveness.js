import Head from "next/head";
import bannerImg from "/public/assets/images/liberary-banner.png";
import Image from "next/image";

import Banner from "@/components/banner";
import TabNavigation from "@/components/ui/TabNavigation";
import { mapObjectValues } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import ImageGrid from "@/components/ui/ImageGrid";

function InstitutionalDistinctiveness() {
  return (
    <>
      <Head>
        <title>INSTITUTIONAL DISTINCTIVENESS - SPIPS</title>
      </Head>
      <Banner
        isFrontBanner={false}
        bannerImg={bannerImg}
        heading={"INSTITUTIONAL DISTINCTIVENESS"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam."
        }
      />
      <div className="flex justify-center">
        <div className="flex w-[min(1600px,90vw)]">
          <TabNavigation
            tabsData={mapObjectValues(
              {
                "Rural Upliftment Program":
                  "The Rural Upliftment Program is an integral part of the college's commitment to social responsibility. Recognizing the importance of rural areas in the country's socio-economic fabric, the program aims to uplift and empower rural communities. The college believes that students should not only excel in academics but also in understanding the real-world challenges faced by the less privileged. Through this program, students participate in various outreach activities such as education, healthcare, infrastructure development, and agricultural improvements. The college collaborates with local authorities, non-governmental organizations, and community leaders to ensure the success of the initiatives. Regular workshops are conducted to train students in sustainable development practices, and these workshops are tailored to address the unique challenges of rural life. The Rural Upliftment Program also emphasizes the importance of education in rural areas, conducting literacy campaigns and setting up temporary schools during summer vacations where students teach children basic subjects. Healthcare is another key focus. Medical camps are regularly organized in rural areas with the help of volunteer doctors and students from healthcare-related fields. The students also contribute to building basic infrastructure, such as sanitation facilities and roads, thus making a direct impact on the quality of life in these areas. The college's NCC and NSS wings are actively involved in the program, organizing multiple community service events throughout the year. These activities range from tree plantation drives to helping farmers adopt modern farming techniques. The essence of this program is to create a two-way learning experience where students learn the value of service, empathy, and the power of community-driven change while making a tangible difference in rural lives. The program is an excellent opportunity for students to apply their academic knowledge to real-world situations, helping them grow both personally and professionally. In conclusion, the Rural Upliftment Program fosters a sense of responsibility, compassion, and leadership among students while addressing the pressing needs of rural communities.",

                "Morning Assembly":
                  "Morning Assembly at the college is more than a daily ritual; it is a significant moment where the entire college comes together to start the day on a positive note. Every day, students, faculty, and staff gather in the central courtyard to participate in this assembly, which aims to instill a sense of discipline, unity, and motivation among students. The assembly begins with the national anthem, which is a reminder of our collective identity and responsibility as citizens. Following this, the college's leadership often addresses the students, sharing important announcements or inspirational messages to set the tone for the day. The principal or a guest speaker may give a motivational talk, encouraging students to approach their day with energy, focus, and a positive attitude. Sometimes, these talks are centered on moral and ethical values, reinforcing the importance of integrity, respect, and compassion in students' lives. In addition to speeches, the assembly features a 'thought of the day' segment where a student shares a meaningful quote, followed by a brief reflection on how it can be applied in day-to-day life. This encourages critical thinking and reflection among students. Music also plays an important role in the morning assembly. The college choir often performs inspirational songs, which not only uplift spirits but also cultivate a love for music and art in the student body. Additionally, there are special assemblies held on significant national or international days, such as Independence Day, World Environment Day, or Teacher’s Day, during which students prepare speeches, presentations, or cultural performances to mark the occasion. The Morning Assembly is a great opportunity for the college to reinforce its core values of excellence, service, and leadership. It sets the tone for an environment of respect and unity, encouraging students to strive for their best throughout the day. In essence, the Morning Assembly serves as a unifying force, ensuring that every day begins with purpose, motivation, and a shared commitment to learning and personal growth.",

                "Promotion of Human values & Secularism":
                  "The Promotion of Human Values & Secularism is a cornerstone of the college’s educational philosophy. The institution believes that while academic excellence is important, it must go hand in hand with the development of moral character and a strong sense of social responsibility. Secularism, as embraced by the college, refers to an inclusive attitude where individuals of all faiths and beliefs are treated with equal respect and dignity. The promotion of these values is not just theoretical; the college integrates it into daily student life. This begins in the classroom, where students are encouraged to engage in discussions about ethics, morality, and societal responsibilities. The faculty lead by example, creating an atmosphere of mutual respect and understanding. The college’s curriculum also includes courses on moral philosophy, ethics, and cultural studies to broaden students’ perspectives on human values. Outside the classroom, the college organizes a variety of workshops, seminars, and conferences on human rights, equality, justice, and secularism. Guest speakers from various backgrounds and fields are invited to speak about the importance of maintaining harmony in a diverse society. The college also celebrates major festivals from different religions and cultures to promote understanding and respect for diversity. Another key initiative is the student-led 'Unity Club', which organizes interfaith dialogues and cultural exchange programs. These initiatives foster open-mindedness and the ability to engage in constructive conversations about differences without conflict. Students are also encouraged to volunteer in community service projects that serve underprivileged sections of society, reinforcing the values of compassion and social justice. The Promotion of Human Values & Secularism is a continuous process at the college, and every effort is made to ensure that students graduate not only with a strong academic foundation but also as responsible, empathetic, and open-minded individuals ready to contribute to a better world.",

                "Special Meetings with the Director and the Principal":
                  "The Special Meetings with the Director and the Principal provide students with an open platform to discuss issues, share ideas, and seek guidance on academic and personal matters. These meetings are held at regular intervals throughout the academic year and are designed to foster a healthy and open communication channel between the student body and the college administration. During these meetings, students can raise concerns about any aspect of college life, from academic programs to campus facilities, extracurricular activities, and even personal challenges they may be facing. The Director and the Principal listen attentively to these concerns and provide constructive feedback and solutions. What makes these meetings unique is the emphasis on collaboration. Students are encouraged not only to voice their concerns but also to propose solutions and suggestions for improvement. This participatory approach ensures that students feel empowered and responsible for contributing to the betterment of the college environment. Often, the administration shares updates on ongoing projects and upcoming initiatives during these meetings, giving students a sense of involvement in the college's development. Special Meetings with the Director and Principal are also an excellent opportunity for students to seek academic or career advice directly from the top leadership. Whether it's about choosing electives, preparing for competitive exams, or exploring career opportunities, the guidance provided in these meetings is invaluable. In summary, the Special Meetings foster a culture of transparency, inclusivity, and mutual respect between students and the administration, reinforcing the idea that student welfare is a top priority for the institution.",

                "Discipline Committee":
                  "The Discipline Committee plays a crucial role in maintaining order and upholding the values of the college. Comprised of faculty members and student representatives, the committee is responsible for ensuring that all students adhere to the college's code of conduct. The code of conduct outlines expected behavior both on and off-campus, covering aspects such as academic integrity, respect for peers and faculty, and adherence to campus rules and regulations. The committee handles cases related to disciplinary issues, such as cheating during exams, violations of campus rules, or any behavior that is deemed inappropriate or harmful to the college community. When a case is brought before the committee, a thorough investigation is conducted, during which both the complainant and the accused are given an opportunity to present their sides of the story. The committee then deliberates and recommends appropriate actions, which can range from warnings and counseling sessions to suspension or, in extreme cases, expulsion. The Discipline Committee also plays a proactive role by organizing workshops and seminars on topics like academic integrity, respect for diversity, and the importance of discipline in personal and professional life. These sessions are designed to educate students about the long-term impact of their actions and the importance of adhering to ethical and moral standards. In conclusion, the Discipline Committee ensures that the college remains a safe and respectful environment where students can thrive academically and personally, while also learning the importance of responsibility and ethical behavior.",

                "Anti ragging Zone":
                  "The college takes a strong stance against ragging, and the campus is officially designated as an Anti-Ragging Zone. Ragging, which is defined as any act of harassment, intimidation, or abuse of students by their peers, is strictly prohibited. The college administration, in collaboration with the student body, has put in place a robust anti-ragging policy that ensures the safety and well-being of all students. This policy is clearly communicated to students at the beginning of each academic year, and all students are required to sign an anti-ragging pledge. The college has also set up an Anti-Ragging Committee, which is responsible for monitoring and preventing incidents of ragging. Any student found to be involved in ragging activities faces serious consequences, including suspension, expulsion, and legal action as per the laws of the country. The college regularly organizes awareness campaigns on the issue, educating students about the negative effects of ragging and promoting a culture of respect and kindness. Senior students are also encouraged to mentor junior students, creating a supportive and inclusive environment rather than one based on intimidation or fear. The college provides multiple channels for reporting ragging incidents, including an anonymous helpline and a dedicated email address. The Anti-Ragging Committee works swiftly to investigate complaints and take appropriate",
              },
              (value) => {
                return (
                  <div
                    className="mt-5"
                    dangerouslySetInnerHTML={{ __html: value }}
                  ></div>
                );
              }
            )}
          />
        </div>
      </div>

      <ImageGrid />
    </>
  );
}

export default InstitutionalDistinctiveness;
