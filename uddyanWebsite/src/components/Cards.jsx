import React from "react";
import img1 from "../assets/img1.jpeg"
import img2 from "../assets/img2.jpeg"
import img3 from "../assets/img3.jpeg"
import img4 from "../assets/img4.jpeg"

const cards = [
  {
    title: "STEM Courses",
    description: "Hands-on STEM learning for all age groups with flexible modules.",
    tags: ["Science", "Technology", "Engineering", "Math"],
    image: img1,
  },
  {
    title: "DIY Workshops",
    description: "Interactive workshops to spark curiosity and creativity.",
    tags: ["Robotics", "Electronics", "Coding"],
    image: img2,
  },
  {
    title: "Project Guidance",
    description: "Expert mentorship for school exhibitions and engineering projects.",
    tags: ["Problem Solving", "Innovation", "Collaboration"],
    image: img3,
  },
  {
    title: "STEM Lab Setup",
    description: "Support for schools in setting up tinkering and STEM labs.",
    tags: ["Tinkering Labs", "STEM Kits", "Teacher Training"],
    image: img4,
  },
];

const Cards = () => {
  return (
    <section className="py-16 px-6 bg-[#D0EBFF]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative rounded-2xl shadow-md overflow-hidden flex flex-col transition-transform transform hover:scale-105 w-64 h-[420px]" // 👈 narrower & taller
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
              <button className="mt-auto flex items-center justify-between text-gray-900 font-semibold bg-white/80 px-3 py-2 rounded-xl shadow text-sm">
                Explore
                <span className="ml-2">→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;
