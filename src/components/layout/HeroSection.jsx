import Image from "next/image";
import React from "react";

function HeroSection({ leftImage, rightContent }) {
  return (
    <div className="flex">
      <div className="hidden md:block w-1/2">
        <Image
          src={leftImage}
          className="object-cover h-[300px]"
          width={500}
          height={500}
        />
      </div>
      <div className="flex flex-col justify-center w-full md:w-1/2 text-white bg-[#002147] gap-2 p-10 items-start">
        {rightContent}
      </div>
    </div>
  );
}

export default HeroSection;
