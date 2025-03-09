import { motion } from "framer-motion";
import CarouselComponent from "./CarouselComponent";

export default function Welcome() {
  return (
    <main>
      {/* Home Section */}
      <section
        id="home"
        className="h-screen flex flex-col justify-center bg-gray-100 px-10 py-20"
      >
        {/* Animated Text */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-full max-w-[1600px] text-center mb-10 mx-auto"
        >
          <h1 className="text-6xl font-bold">Welcome to Uttarakhand</h1>
        </motion.div>

        {/* Bigger Carousel */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
          className="w-full max-w-[1800px] mx-auto flex justify-center"
        >
          <CarouselComponent />
        </motion.div>
      </section>
    </main>
  );
}
