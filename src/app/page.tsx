"use client";
import Arrival from "./components/Arrival";
import CarouselComponent from "./components/CarouselComponent";
import CustomCursor from "./components/CustomCursor";
import Destination from "./components/Destination";
import Welcome from "./components/Welcome";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="scroll-smooth">
      <CustomCursor />
      <Navbar />

      {/* Home Section */}
      <section id="home" className="h-screen flex flex-col justify-center items-center bg-gray-100 px-10 py-20">
        <Welcome/>
      </section>

      {/* Destination Section */}
      <section id="destinations" className="h-screen flex items-center justify-center bg-gray-100 px-10">
        <Destination />
      </section>

      {/* About Us Section */}
      <section id="arrive" className="h-screen flex flex-col justify-center items-center bg-gray-100 px-10">
        <div className="w-full max-w-4xl text-center mb-6">
          <h2 className="text-6xl font-semibold">Best Time to Visit</h2>
        </div>
        <div className="w-full flex justify-center">
          <Arrival />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="h-screen flex flex-col justify-center items-center bg-green-100 px-10">
        <div className="w-full max-w-4xl text-center">
          <h2 className="text-4xl font-semibold">Contact</h2>
        </div>
      </section>
    </div>
  );
}
