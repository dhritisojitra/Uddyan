import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Users, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import img1 from '../assets/img1.jpeg';
import img2 from '../assets/img2.jpeg';
import img3 from '../assets/img3.jpeg';

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const slides = [
    { 
      id: 1, 
      img: img1, 
      title: "Fun Learning",
      description: (
        <>
          STEM education is all about{" "}
          <span className="font-semibold text-[#007FFF]">Learning by Doing</span>, not memorizing.  
          It includes four major disciplines –{" "}
          <span className="font-semibold text-[#FFD700]">Science, Technology, Engineering, and Mathematics</span>.  
          These are the <span className="font-semibold text-[#007FFF]">driving forces of the global economy</span>  
          and help maintain the well-being of society.  
          STEM learning focuses on <span className="font-semibold text-[#FFD700]">experimenting and problem-solving</span>.
        </>
      ),
      color: "from-blue-500 to-purple-600",
      link: "/gallery"
    },
    { 
      id: 2, 
      img: img2, 
      title: "Explore Science",
      description: (
        <>
          Performing STEM activities in groups promotes{" "}
          <span className="font-semibold text-[#007FFF]">teamwork</span> and{" "}
          <span className="font-semibold text-[#FFD700]">collaboration</span>.  
          Children learn to apply STEM skills to <span className="font-semibold text-[#007FFF]">real-world challenges</span>.  
          It’s never too early or too late to start <span className="font-semibold text-[#FFD700]">STEM education</span>.
        </>
      ),
      color: "from-green-500 to-teal-600",
      link: "/CoursesPage"
    },
    { 
      id: 3, 
      img: img3, 
      title: "Creative Innovation",
      description: (
        <>
          Early STEM exposure builds <span className="font-semibold text-[#007FFF]">logical reasoning</span>,{" "}
          <span className="font-semibold text-[#FFD700]">critical thinking</span>, and{" "}
          <span className="font-semibold text-[#007FFF]">innovation skills</span>.  
          The goal of STEM is to instill{" "}
          <span className="font-semibold text-[#FFD700]">entrepreneurship and creativity</span> in children for the future.
        </>
      ),
      color: "from-orange-500 to-red-600",
      link: "/about"
    }
  ];

  const stats = [
    {
      icon: Users,
      number: "100+",
      label: "Students Taught",
      color: "text-blue-600"
    },
    {
      icon: BookOpen,
      number: "500+",
      label: "Projects Completed",
      color: "text-green-600"
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
    <div className="bg-[#D0EBFF] py-12 px-4 sm:py-16 sm:px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className={`text-center mb-8 sm:mb-12 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#007FFF] mb-2 sm:mb-4">
            Discover STEM Excellence
          </h2>
          <p className="text-gray-600 text-md sm:text-lg">
            Experience innovative learning through our comprehensive STEM programs
          </p>
        </div>

        {/* Carousel */}
        <div className={`relative overflow-hidden rounded-2xl shadow-2xl bg-white transition-all duration-1000 delay-300 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
          <div className="relative h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  index === currentSlide 
                    ? 'translate-x-0 opacity-100 z-10' 
                    : index < currentSlide 
                      ? '-translate-x-full opacity-0 z-0' 
                      : 'translate-x-full opacity-0 z-0'
                }`}
              >
                <div className="grid md:grid-cols-2 h-full gap-0 md:gap-0">

                  {/* Image Section */}
                  <div className="relative overflow-hidden md:h-full h-64 sm:h-80">
                    <img
                      src={slide.img}
                      alt={slide.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${slide.color} opacity-20`}></div>
                  </div>

                  {/* Content Section */}
                  <div className="flex flex-col justify-center p-6 sm:p-8 md:p-12 bg-gradient-to-br from-white to-gray-50">
                    <div className="space-y-4 sm:space-y-6">
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
                        {slide.title}
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-md md:text-lg leading-relaxed whitespace-pre-line">
                        {slide.description}
                      </p>
                      
                      {/* Learn more button per slide */}
                      <Link to={slide.link}>
                        <button className="bg-[#007FFF] text-white font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-lg 
                                           hover:bg-[#005FCC] hover:text-[#FFD700] hover:shadow-lg 
                                           transform hover:scale-105 transition-all duration-300 text-sm sm:text-md">
                          Learn more
                        </button>
                      </Link>
                    
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button onClick={prevSlide} className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 bg-white/90 shadow-lg rounded-full p-2 sm:p-3 z-10">
            <ChevronLeft className="w-4 sm:w-6 h-4 sm:h-6 text-gray-700" />
          </button>
          <button onClick={nextSlide} className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 bg-white/90 shadow-lg rounded-full p-2 sm:p-3 z-10">
            <ChevronRight className="w-4 sm:w-6 h-4 sm:h-6 text-gray-700" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-4 sm:mt-8 gap-2 sm:gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? 'w-8 sm:w-12 h-2 sm:h-3 bg-[#007FFF]'
                  : 'w-2 sm:w-3 h-2 sm:h-3 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-8 sm:mt-12 transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-4 sm:p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-50 mb-2 sm:mb-4">
                <stat.icon className={`w-5 sm:w-6 h-5 sm:h-6 ${stat.color}`} />
              </div>
              <div className="text-xl sm:text-2xl font-bold text-gray-800 mb-1 sm:mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium text-sm sm:text-md">{stat.label}</div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
