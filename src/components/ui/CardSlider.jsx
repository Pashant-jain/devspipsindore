import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

function CardSlider({ title, data }) {
  return (
    <Carousel className="mx-auto w-[min(1400px,75vw)]">
      <div className="flex justify-between items-center pt-14 pb-7 px-3">
        <div className="text-2xl md:text-4xl font-bold">{title}</div>
        <div className="flex gap-3 items-center">
          <CarouselPrevious className="static translate-y-0" />
          <CarouselNext className="static translate-y-0" />
        </div>
      </div>
      <CarouselContent>
        {data.map((item, index) => (
          <CarouselItem
            className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
            key={index}
          >
            <Card className="p-0">
              <CardContent className="flex flex-col p-3 gap-3 aspect-square items-center justify-center">
                <Image
                  src={item.image}
                  height={300}
                  width={300}
                  className="size-[150px]"
                  alt=""
                />
                <div className="font-semibold text-xl">{item.name}</div>
                <div className="px-3 text-center">{item.description}</div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default CardSlider;
