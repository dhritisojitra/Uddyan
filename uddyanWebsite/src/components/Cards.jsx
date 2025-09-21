import React from "react";
import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";
import img4 from "../assets/img4.jpeg";
import { Link } from "react-router-dom";

const cards = [
  {
    title: "STEM Courses",
    description: "Hands-on STEM learning for all age groups with flexible modules.",
    tags: ["Science", "Technology","Problem Solving", "Design Thinking", "Engineering", "Math"],
    image: img1,
  },
  {
    title: "Services",
    description: "Interactive workshops to spark curiosity and creativity.",
    tags: ["DIY Workshop", "Science Exhibition/Fair setup", "Electrical Engineeering  Project guidance", "Physcis Lab (class 12)"],
    image: img2,
  },
  {
    title: "Resources",
    description: "STEM kits and components for schools and hobbyists.",
    tags: ["Robotics Kits", "Microcontrollers and sensors", "Circuits and componenets","Computer with software","3D-printer", "Project Kits"],
    image: img3,
  },
  {
    title: "STEM Lab Setup",
    description: "Support in setting up tinkering and STEM labs.",
    tags: ["Tinkering Labs", "STEM Kits", "Teacher Training", "Collaborative Learning"],
    image: img4,
  },
];

const Cards = () => {
  return (
    <section className="py-16 px-10 bg-[#FFFFF0]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20 justify-items-center">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative rounded-2xl shadow-md overflow-hidden p-3 flex flex-col w-80 h-[420px] transition-transform transform hover:scale-105"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${card.image})` }}
            ></div>
            <div className="absolute inset-0 bg-white/70"></div>

            <div className="relative p-6 flex flex-col h-full">
              <h3 className="text-xl font-bold mb-2 text-gray-900 drop-shadow-md">
                {card.title}
              </h3>
              <p className="text-gray-800 mb-4 text-sm drop-shadow-sm">{card.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {card.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-white/80 text-gray-800 text-xs px-2 py-1 rounded-full shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {/* Removed individual button from here */}
            </div>
          </div>
        ))}
      </div>

      {/* Common button below all cards */}
      <div className="mt-10 flex justify-center">
        <Link to='/CoursesPage'><button className="text-white font-semibold bg-[#007FFF]  px-6 py-3 rounded-xl shadow text-xl hover:scale-105 transition-transform">
          Explore Now
        </button>
        </Link>
      </div>
    </section>
  );
};

export default Cards;
