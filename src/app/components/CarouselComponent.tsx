"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

export default function CarouselComponent() {
  const images = [
    "/images/item1.jpg",
    "/images/item2.jpg",
    "/images/item3.jpg",
    "/images/item4.jpg",
    "/images/item5.jpg",
    "/images/item6.jpg",
    "/images/item7.jpg",
    "/images/item8.jpg",
    "/images/item9.jpg",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="w-full flex justify-center"
    >
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-[1600px] mx-auto"
      >
        <CarouselContent className="flex gap-3 py-10">
          {images.map((src, index) => (
            <CarouselItem key={index} className="basis-1/3 flex justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="w-[450px] h-[450px] rounded-lg overflow-hidden shadow-lg"
              >
                <Image
                  src={src}
                  alt={`Slide ${index + 1}`}
                  width={500}
                  height={500}
                  quality={100}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </motion.div>
  );
}
