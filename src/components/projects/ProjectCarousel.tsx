"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { type ProjectImage } from "@/types/data";
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

type ProjectCarouselsProps = {
  images: ProjectImage[];
};

export function ProjectCarousel({ images }: ProjectCarouselsProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="order-1 lg:order-2 flex flex-col items-center mx-auto">
      <Carousel setApi={setApi} className="max-w-[600px]">
        <CarouselContent>
          {images.map((image) => (
            <CarouselItem key={image.url} className="flex justify-center">
              <Image
                src={image.url}
                alt={image.altText}
                width={600}
                height={450}
                priority
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="flex gap-1.5">
        {Array.from({ length: count }).map((_, index) => {
          const isActive = current - 1 === index;

          return (
            <span
              key={index}
              className={`size-2.5 rounded-full ${
                isActive ? "bg-primary" : "bg-foreground/50"
              }`}
            ></span>
          );
        })}
      </div>
    </div>
  );
}
