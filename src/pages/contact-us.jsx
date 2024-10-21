import Head from "next/head";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@nextui-org/react";
import { Button } from "@/components/ui/button";
import { ArrowRight, FacebookIcon } from "lucide-react";
import Link from "next/link";
import HeroSection from "@/components/layout/HeroSection";

function ContactUs() {
  return (
    <>
      <Head>
        <title>SPIPS - Contact Us</title>
      </Head>
      <div>
        <HeroSection
          leftImage={"/assets/images/gallery1.jpeg"}
          rightContent={
            <>
              <div className="uppercase font-bold text-2xl">Contact Us</div>
              <div className="w-2/3">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Facere, ex. Amet libero commodi quam delectus iure dicta,
                explicabo soluta eius praesentium quidem nam velit odio?
              </div>
            </>
          }
        />
        <div className="flex flex-col items-center">
          <div className="flex flex-col gap-3 items-center mt-10 lg:mt-20">
            <div className="font-bold text-2xl md:text-4xl lg:text-6xl text-[#002147]">
              Reach Out to Discover More
            </div>
            <div className="w-[min(500px,90vw)] text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              cumque eligendi iste?
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-[min(1300px,85vw)] justify-around gap-5">
            {[
              {
                image: "/assets/images/pages/contact-us/placeholder.svg",
                contactType: "Email : ",
                contact: "contact@company.com",
              },
              {
                image: "/assets/images/pages/contact-us/placeholder.svg",
                contactType: "Phone : ",
                contact: "8785469854",
              },
              {
                image: "/assets/images/pages/contact-us/placeholder.svg",
                contactType: "Location : ",
                contact: "some where in indore",
              },
              {
                image: "/assets/images/pages/contact-us/placeholder.svg",
                contactType: "Office Hours : ",
                contact: "Monday - Friday <br> 8:00 am to 5:00 PM",
              },
            ].map((contact) => (
              <div className="flex gap-2 items-center">
                <div>
                  <Image
                    src={contact.image}
                    className="object-cover size-[70px]"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="flex flex-col">
                  <div className="">{contact.contactType}</div>
                  <div
                    dangerouslySetInnerHTML={{ __html: contact.contact }}
                    className="font-semibold"
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col lg:flex-row bg-white w-[min(1300px,85vw)] rounded-xl border-gray-500 p-10 lg:p-14 my-10 gap-10">
            <form className="flex flex-col gap-3 w-full lg:w-1/2">
              <div className="flex flex-col md:flex-row gap-3">
                <div className="flex flex-col gap-2 w-full md:w-1/2">
                  <Label className="ml-2" htmlFor="Name">
                    Name
                  </Label>
                  <Input type="text" placeholder="John Cena" />
                </div>
                <div className="flex flex-col gap-2 w-full md:w-1/2">
                  <Label className="ml-2" htmlFor="email">
                    Email
                  </Label>
                  <Input type="email" placeholder="example@yourmail.com" />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-3">
                <div className="flex flex-col gap-2 w-full md:w-1/2">
                  <Label className="ml-2" htmlFor="email">
                    Phone
                  </Label>
                  <Input type="number" placeholder="+91 92933*****" />
                </div>
                <div className="flex flex-col gap-2 w-full md:w-1/2">
                  <Label className="ml-2" htmlFor="email">
                    Department To Enquire
                  </Label>

                  <Select className="w-full">
                    <SelectTrigger>
                      <SelectValue placeholder="Select a fruit" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Choose</SelectLabel>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                        <SelectItem value="blueberry">Blueberry</SelectItem>
                        <SelectItem value="grapes">Grapes</SelectItem>
                        <SelectItem value="pineapple">Pineapple</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex flex-col gap-3 w-full">
                <Label className="ml-2" htmlFor="email">
                  Message
                </Label>
                <Textarea placeholder="Type your message here." />
              </div>
              <div className="flex justify-center">
                <Button>
                  Send Message
                  <div>
                    <ArrowRight />
                  </div>
                </Button>
              </div>
            </form>
            <div className="flex flex-col gap-10">
              <div>
                <div className="font-bold">Want to reach out directly?</div>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                  beatae tempore
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="font-bold">Follow us on social media</div>
                <div className="flex gap-3 ">
                  {[
                    { icon: "/assets/icons/Facebook.svg", link: "" },
                    { icon: "/assets/icons/Twitter.svg", link: "" },
                    { icon: "/assets/icons/Instagram.svg", link: "" },
                    { icon: "/assets/icons/LinkedIn.svg", link: "" },
                    { icon: "/assets/icons/YouTube.svg", link: "" },
                  ].map((social) => (
                    <Link href={social.link}>
                      <Image
                        src={social.icon}
                        className="object-cover h-[30px] w-[30px]"
                        width={87}
                        height={87}
                      ></Image>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
