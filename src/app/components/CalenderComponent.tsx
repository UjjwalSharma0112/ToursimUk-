import { Calendar } from "@/components/ui/calendar";
import { useState, useEffect } from "react";

// Define TypeScript Interfaces for Weather API Response
interface WeatherData {
  main: {
    temp: number;
  };
  weather: {
    description: string;
  }[];
  wind: {
    speed: number;
  };
}

export default function CalendarComponent() {
  const [date, setDate] = useState<Date>(new Date());
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (date) {
      fetchWeather();
    }
  }, [date]);

  const fetchWeather = async () => {
    setLoading(true);
    setError(null);

    const API_KEY = process.env.WEATHER_API_KEY; // Replace with your API Key
    const LAT = "30.0668"; // Latitude for Uttarakhand
    const LON = "79.0193"; // Longitude for Uttarakhand

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${API_KEY}&units=metric`
      );
      if (!response.ok) throw new Error("Failed to fetch weather data");

      const data: WeatherData = await response.json();
      setWeather(data);
    } catch (err) {
      setError("Could not fetch weather data");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="flex flex-col items-center w-[400px] bg-white shadow-lg rounded-lg p-6">
      {/* Fixed-size Calendar */}
      <div className="w-[320px]">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(selectedDate) => {
            if (selectedDate) {
              setDate(selectedDate);
              console.log("Selected Date:", selectedDate);
            }
          }}
          className="rounded-md border shadow-md w-full"
        />
      </div>

      {/* Text below calendar */}
      <div className="mt-4 text-lg text-black font-medium flex items-center gap-2">
        <span>🌤️</span> Weather On the Selected Date
      </div>
    </div>
  );
}
