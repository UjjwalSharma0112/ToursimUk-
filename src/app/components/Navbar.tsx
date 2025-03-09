"use client";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  const controls = useAnimation();
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > window.innerHeight) {
        // Hide navbar when scrolling past home section
        setIsHidden(true);
        controls.start({ y: "-100%", transition: { duration: 0.4, ease: "easeInOut" } });
      } else {
        // Show navbar when scrolling back up to home section
        setIsHidden(false);
        controls.start({ y: "0%", transition: { duration: 0.4, ease: "easeInOut" } });
      }
    };

    // Run once on mount to check initial scroll position (fixes refresh issue)
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <motion.nav
      initial={{ y: isHidden ? "-100%" : "0%" }} // Set initial state based on scroll
      animate={controls}
      className="bg-amber-400/70 text-black p-4 fixed w-full top-0 shadow-md z-50 transition-all duration-300"
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <Link href="/">
          <span className="text-4xl font-bold cursor-pointer">Explore Uttarakhand</span>
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              className="hover:text-blue-500 cursor-pointer"
            >
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="destinations"
              smooth={true}
              duration={500}
              className="hover:text-blue-500 cursor-pointer"
            >
              Destinations
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="arrive"
              smooth={true}
              duration={500}
              className="hover:text-blue-500 cursor-pointer"
            >
              When To Visit
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              className="hover:text-blue-500 cursor-pointer"
            >
              Contact
            </ScrollLink>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
}
