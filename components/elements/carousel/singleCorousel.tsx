import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const images = [
  "/carousel/inv1.jpg",
  "/carousel/inv2.jpg",
  "/carousel/inv3.jpg",
  "/carousel/inv4.jpg",
  "/carousel/inv5.jpg",
  "/carousel/inv6.jpg",
];

export function CarouselSingle() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap() + 1);
    };

    api.on("select", handleSelect);

    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  React.useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollTo((api.selectedScrollSnap() + 1) % api.scrollSnapList().length);
    }, 5000);

    return () => clearInterval(interval);
  }, [api]);

  const handleNext = () => {
    if (api) {
      api.scrollTo((api.selectedScrollSnap() + 1) % api.scrollSnapList().length);
    }
  };

  const handlePrev = () => {
    if (api) {
      const prevIndex =
        (api.selectedScrollSnap() - 1 + api.scrollSnapList().length) %
        api.scrollSnapList().length;
      api.scrollTo(prevIndex);
    }
  };

  return (
    <div className="w-full h-full relative">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] shadow-lg rounded-lg overflow-hidden"
      >
        <CarouselContent className="w-full h-full">
          {images.map((imageUrl, index) => (
            <CarouselItem key={index} className="w-full h-full">
              <Card className="w-full h-full">
                <CardContent className="flex items-center justify-center w-full h-full">
                  <img
                    src={imageUrl}
                    alt={`Image ${index + 1}`}
                    className="w-full h-full object-cover shadow-md transition-all duration-500"
                    loading="lazy"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div
        className="absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer text-4xl hover:text-blue-500"
        onClick={handlePrev}
      >
        &#10094;
      </div>
      <div
        className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer text-4xl hover:text-blue-500"
        onClick={handleNext}
      >
        &#10095;
      </div>

      <div className="py-2 text-center text-sm text-muted-foreground">
        Slide {current} of {count}
      </div>
    </div>
  );
}

export function CarouselContainer() {
  return (
    <div className="max-w-[920px] mx-auto mb-10 pt-5">
      <div className="carousel-container shadow-lg p-0 overflow-hidden">
        <div className="w-full h-[300px] overflow-hidden relative">
          <CarouselSingle />
        </div>
      </div>
    </div>
  );
}
