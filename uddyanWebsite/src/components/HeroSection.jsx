import React from "react";
import { Link } from "react-router-dom";
import img4 from "../assets/img4.jpeg";

const HeroSection = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#FFFFF0] py-16 md:py-24">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12">
          {/* Left Content */}
          <div className="flex-1 text-left mb-10 md:mb-0 md:pr-10">
            {/* Funky Font for Heading */}
            <h1 className="text-5xl md:text-6xl font-bold font-funky text-[#FFD700] mb-4">
              UDDYAN
            </h1>
            {/* Times New Roman for Subheading */}
            <h2 className="text-2xl md:text-3xl font-semibold font-times text-blue-600 mb-4">
              DIY & STEM LAB
            </h2>
            {/* Funky Font for Italic Quote */}
            <p className="italic text-xl md:text-2xl font-funky text-[#FFD700] mb-6">
              “FLY HIGH WITH YOUR IMAGINATION & CREATIVITY”
            </p>
            {/* Times New Roman for Body Text */}
            <p className="text-gray-800 text-lg md:text-xl font-times mb-6 leading-relaxed">
              Welcome to our state-of-the-art UDDYAN DIY & STEM Laboratory, where
              students can <span className="font-bold">explore, learn, and create</span>
              through hands-on STEM experiments. Our activities are designed to build
              <span className="font-bold"> creativity, design thinking, problem-solving, and critical thinking skills.</span>
            </p>
            <Link to="/about">
              <button className="bg-[#007FFF] text-white font-semibold px-6 py-3 rounded-lg 
                     hover:bg-[#005FCC] hover:text-[#FFD700] hover:shadow-lg 
                     transform hover:scale-105 transition-all duration-300">
                Learn more
              </button>
            </Link>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center">
            <img
              src={img4}
              alt="STEM Lab"
              className="rounded-2xl shadow-lg w-full max-w-md md:max-w-lg object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;