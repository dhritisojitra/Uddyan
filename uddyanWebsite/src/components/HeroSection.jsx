import React from "react";
import { Link } from "react-router-dom";
import img4 from "../assets/img4.jpeg";

const HeroSection = () => {
  return (
    <section className="relative bg-[#FFFFF0] py-16 md:py-24">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12">
        
        {/* Left Content inside Card */}
        <div className="flex-1 text-left mb-10 md:mb-0 md:pr-10">
          <div className="bg-white/80 backdrop-blur-sm shadow-xl rounded-2xl p-8 md:p-10 border border-yellow-100 hover:shadow-2xl transition-all duration-300">
            
            {/* Heading */}
            <h1 className="text-4xl md:text-5xl font-bold text-[#FFD700] mb-4">
              UDDYAN DIY & STEM Lab
            </h1>

            {/* Subheading / Quote */}
            <p className="italic text-lg md:text-xl text-[#007FFF] mb-6">
              “FLY HIGH WITH YOUR IMAGINATION & CREATIVITY”
            </p>

            {/* Body Text */}
            <p className="text-gray-800 text-lg leading-relaxed mb-6">
              Welcome to our state-of-the-art UDDYAN DIY & STEM Laboratory, where
              students can{" "}
              <span className="font-semibold text-[#007FFF]">
                explore, learn, and create
              </span>{" "}
              through hands-on STEM experiments. Our activities are designed to build{" "}
              <span className="font-semibold text-[#007FFF]">
                creativity, design thinking, problem-solving, and critical thinking skills
              </span>.
            </p>

            {/* CTA Button */}
            <Link to="/about">
              <button className="bg-[#007FFF] text-white font-semibold px-6 py-3 rounded-lg 
                     hover:bg-[#005FCC] hover:text-[#FFD700] hover:shadow-lg 
                     transform hover:scale-105 transition-all duration-300">
                Learn more
              </button>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={img4}
            alt="STEM Lab"
            className="rounded-2xl shadow-lg w-full max-w-xl md:max-w-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
