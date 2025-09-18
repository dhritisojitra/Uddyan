import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import img1 from "../assets/img1.jpeg";

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const slides = [
    { 
      id: 1, 
      img: img1, 
      title: "Fun Learning",
      description: `STEM education is all about Learning by Doing not by memorizing. 
      It includes four major disciplines - Science, Technology, Engineering and Mathematics. 
      These four disciplines are the main driving force of global economy and help maintain well-being of the society at large. 
      STEM learning is all about Experimenting. This helps children to find alternative solutions to their problems.`,
      color: "from-blue-500 to-purple-600"
    },
    { 
      id: 2, 
      img: img1, 
      title: "Explore Science",
      description: `Performing STEM learning activities together in a group promotes team spirit. 
      Children learn to apply the STEM skills to solve real world problems and challenges. 
      There is no stipulated age or time to start the basics of STEM that means it is never too early or too late to start teaching your child.`,
      color: "from-green-500 to-teal-600"
    },
    { 
      id: 3, 
      img: img1, 
      title: "Creative Innovation",
      description: `The skill-set shortage is critical to the employability and our economy. 
      Investing in STEM education early for children is no more a luxury today but a necessity. 
      The only use of technology is insufficient to fill the STEM skill-set gap. 
      We need our children to learn hands-on and be more interactive by blending the STEM activities in their education early on. 
      Exposure to STEM activities develop logical reasoning, critical thinking, problem solving, creativity, innovation, inquiry, collaboration and many others skills in children. 
      The main purpose of STEM education is to inculcate innovation and entrepreneurship qualities.`,
      color: "from-orange-500 to-red-600"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const goToSlide = (index) => setCurrentSlide(index);

  return (
    <div className="bg-[#FFFFF0] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-4xl font-bold text-[#007FFF] mb-4">
            Discover STEM Excellence
          </h2>
          <p className="text-gray-600 text-lg">
            Experience innovative learning through our comprehensive STEM programs
          </p>
        </div>

        {/* Main Carousel */}
        <div className={`relative overflow-hidden rounded-3xl shadow-2xl bg-white transition-all duration-1000 delay-300 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
          <div className="relative h-[600px] overflow-hidden">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  index === currentSlide 
                    ? 'translate-x-0 opacity-100' 
                    : index < currentSlide 
                      ? '-translate-x-full opacity-0' 
                      : 'translate-x-full opacity-0'
                }`}
              >
                <div className="grid md:grid-cols-2 h-full">
                  {/* Image Section */}
                  <div className="relative overflow-hidden">
                    <img
                      src={slide.img}
                      alt={slide.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${slide.color} opacity-20`}></div>
                  </div>

                  {/* Content Section */}
                  <div className="flex flex-col justify-center p-12 bg-gradient-to-br from-white to-gray-50">
                    <div className="space-y-6">
                      <h3 className="text-4xl font-bold text-gray-800 leading-tight">
                        {slide.title}
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed whitespace-pre-line">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <button onClick={prevSlide} className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/90 shadow-lg rounded-full p-3 z-10">
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <button onClick={nextSlide} className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/90 shadow-lg rounded-full p-3 z-10">
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-8 gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? 'w-12 h-3 bg-[#007FFF]'
                  : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
