import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

import Image from "next/image";

import photoGalleryData from "@/data/photo-gallery.json";

export default function PhotoGallery() {
  return (
    <>
      <Carousel className="w-[min(1200px,70vw)] mx-auto my-5">
        <CarouselContent>
          {photoGalleryData.images.map((image, index) => (
            <>
              <Dialog key={index}>
                <DialogTrigger asChild >
                  <CarouselItem
                    className="md:basis-1/2 lg:basis-1/3"
                    onClick={() => {}}
                  >
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <Image
                            className="w-[400px] h-[400px] object-cover"
                            src={image}
                            width={500}
                            height={500}
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                </DialogTrigger>
                <DialogContent className="w-[min(1200px,90vw)] h-[90vh]">
                  {/* <DialogHeader>
              <DialogTitle>{image.alt}</DialogTitle>
              <DialogDescription>
              Make changes to your profile here. Click save when you're done.
              </DialogDescription>
              </DialogHeader> */}
                  <div className="">
                    <Image
                      className="block mx-auto h-full object-cover"
                      src={image}
                      width={500}
                      height={500}
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}
