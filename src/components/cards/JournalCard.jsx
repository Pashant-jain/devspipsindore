import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

function JournalCard({ image, title, description, link }) {
  return (
    <Card className="w-[85vw] md:w-[300px]">
      {/* <CardHeader>
      <CardTitle>Create project</CardTitle>
      <CardDescription>Deploy your new project in one-click.</CardDescription>
    </CardHeader> */}
      <CardContent>
        <Image
          src={image}
          height={500}
          width={500}
          alt={title}
          className="w-full"
        />
        <div className="flex flex-col gap-2 p-4">
          <div className="font-semibold">{title}</div>
          <div>{description}</div>
          <Link className="font-semibold" href={link}>
            <div className="flex gap-2 items-center">
              Click to open <ArrowRight className="relative top-0.5" size={20}/>
            </div>
          </Link>
        </div>
      </CardContent>
      {/* <CardFooter className="flex justify-between">
      </CardFooter> */}
    </Card>
  );
}

export default JournalCard;
