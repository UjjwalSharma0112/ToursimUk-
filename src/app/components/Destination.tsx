"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { destinations } from "./destContent";

export default function Destination() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % destinations.length);
    }, 5000); // Change destination every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="h-screen w-full flex items-center justify-center bg-gray-100 overflow-hidden relative">
      {/* Background Image */}
      <motion.div
        key={`image-${destinations[index].name}`} // Ensure unique key
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 50 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="absolute left-[200px] top-1/2 transform -translate-y-1/2 w-[650px] h-[750px] rounded-3xl overflow-hidden shadow-lg"
      >
        <img
          src={destinations[index].image}
          alt={destinations[index].name}
          className="w-full h-full object-cover"
        />
        <p className="absolute bottom-5 left-5 text-amber-200 text-2xl italic font-semibold">
          {destinations[index].name}
        </p>
      </motion.div>

      {/* Text Content */}
      <motion.div
        key={`text-${destinations[index].name}`} // Ensure unique key
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="ml-[900px] max-w-lg"
      >
        <div className="w-full h-full">
          <h1 className="text-6xl font-bold text-amber-400">
            Discover <br /> {destinations[index].name}
          </h1>
          <p className="mt-4 text-lg text-black">
            {destinations[index].description}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
