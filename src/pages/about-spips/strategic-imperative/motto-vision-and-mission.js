import Head from "next/head";
import bannerImg from "/public/assets/images/liberary-banner.png";
import Image from "next/image";

import Banner from "@/components/banner";
import TabNavigation from "@/components/ui/TabNavigation";
import { mapObjectValues } from "@/lib/utils";
import { Button } from "@/components/ui/button";

function StrategicImperativePage() {
  return (
    <>
      <Head>
        <title>STRATEGIC IMPERATIVE - SPIPS</title>
      </Head>
      <Banner
        isFrontBanner={false}
        bannerImg={bannerImg}
        heading={"STRATEGIC IMPERATIVE"}
        description={
          "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam."
        }
      />
      <div className="flex">
        <div className="w-1/2 pl-10 lg:pl-20">
          <TabNavigation
            tabsData={mapObjectValues(
              {
                "Our Mission": {
                  title: "Highly effective solutions",
                  lists: [
                    {
                      image: "/assets/images/placeholder.svg",
                      title: "Innovative Technology",
                      description:
                        "We utilize cutting-edge technology to drive innovation.",
                    },
                    {
                      image: "/assets/images/placeholder.svg",
                      title: "Customer Focus",
                      description:
                        "Our solutions are designed with the customer in mind.",
                    },
                    {
                      image: "/assets/images/placeholder.svg",
                      title: "Sustainable Growth",
                      description:
                        "We ensure growth that benefits the company and the environment.",
                    },
                    {
                      image: "/assets/images/placeholder.svg",
                      title: "Team Collaboration",
                      description:
                        "Collaboration across teams drives the success of our mission.",
                    },
                  ],
                },
                "Our Vision": {
                  title: "Future-Ready Innovation",
                  lists: [
                    {
                      image: "/assets/images/placeholder.svg",
                      title: "Global Leadership",
                      description:
                        "To become a global leader in technological innovation.",
                    },
                    {
                      image: "/assets/images/placeholder.svg",
                      title: "Sustainable Practices",
                      description:
                        "Incorporating sustainability into all aspects of our business.",
                    },
                    {
                      image: "/assets/images/placeholder.svg",
                      title: "Community Impact",
                      description:
                        "Positively impacting communities through our products and services.",
                    },
                    {
                      image: "/assets/images/placeholder.svg",
                      title: "Adaptability",
                      description:
                        "Ensuring our solutions adapt to future trends and challenges.",
                    },
                  ],
                },
                "Our Values": {
                  title: "Guiding Principles",
                  lists: [
                    {
                      image: "/assets/images/placeholder.svg",
                      title: "Integrity",
                      description:
                        "We uphold honesty and transparency in everything we do.",
                    },
                    {
                      image: "/assets/images/placeholder.svg",
                      title: "Innovation",
                      description:
                        "Constantly pushing boundaries to innovate and improve.",
                    },
                    {
                      image: "/assets/images/placeholder.svg",
                      title: "Respect",
                      description:
                        "Treating everyone with respect and fostering an inclusive environment.",
                    },
                    {
                      image: "/assets/images/placeholder.svg",
                      title: "Excellence",
                      description:
                        "We strive for excellence in every aspect of our work.",
                    },
                  ],
                },
                "Our Strategy": {
                  title: "Strategic Objectives",
                  lists: [
                    {
                      image: "/assets/images/placeholder.svg",
                      title: "Market Expansion",
                      description:
                        "Expanding into new markets with tailored solutions.",
                    },
                    {
                      image: "/assets/images/placeholder.svg",
                      title: "Digital Transformation",
                      description:
                        "Driving digital transformation across all departments.",
                    },
                    {
                      image: "/assets/images/placeholder.svg",
                      title: "Talent Development",
                      description:
                        "Investing in talent to build a high-performing workforce.",
                    },
                    {
                      image: "/assets/images/placeholder.svg",
                      title: "Operational Efficiency",
                      description:
                        "Improving operational processes to maximize efficiency.",
                    },
                  ],
                },
              },
              (value) => {
                return (
                  <div>
                    <div className="text-2xl lg:text-4xl font-bold mt-[25px] mb-4">{value.title}</div>
                    <div className="flex flex-col gap-4">
                      {value.lists.map((item) => (
                        <div className="flex gap-2">
                          <div>
                            <Image
                              src={item.image}
                              className="object-cover size-[70px]"
                              width={100}
                              height={100}
                            />
                          </div>
                          <div className="flex flex-col h-full">
                            <div className="font-semibold">{item.title}</div>
                            <div
                              dangerouslySetInnerHTML={{
                                __html: item.description,
                              }}
                              // className="font-semibold"
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              }
            )}
          />
        </div>
        <div className="w-1/2">
          <Image
            src={"/assets/images/card_img.jpeg"}
            className="w-full h-full"
            width={500}
            height={500}
            alt="image"
          />
        </div>
      </div>
      <div className="flex flex-col items-center gap-5 my-20">
        <div className="flex flex-col items-center gap-3">
          <div className="text-2xl lg:text-4xl font-bold">Strategic Plan</div>
          <div>Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam.F</div>
        </div>
        <div>
          <Button size="lg" className="text-lg">
          View Strategic Plan PDF
          </Button>
        </div>
      </div>
    </>
  );
}

export default StrategicImperativePage;
