import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";

import { bestTimeContent } from "./bestTimeContent";
import CalendarComponent from "./CalenderComponent";

export default function Arrival() {


  return (
    <div className="flex flex-row justify-center items-start w-full px-20 py-20 gap-42">
      {/* Left Content - Best Time to Visit */}
      <div className="max-w-2xl text-left">
        <h1 className="text-5xl font-bold mb-8 text-black">
          {bestTimeContent.title}
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          {bestTimeContent.introduction}
        </p>

        {bestTimeContent.seasons.map((season, index) => (
          <div key={index} className="mt-6">
            <h2 className="text-2xl font-semibold text-amber-500">{season.name}</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {season.description}
            </p>
          </div>
        ))}
      </div>

      {/* Right Content - Calendar */}
        <CalendarComponent/>
    </div>
  );
}
