import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const slides = [
    { 
      id: 1, 
      img: "/api/placeholder/800/500", 
      title: "Fun Learning",
      description: "Engaging hands-on experiments that make learning exciting and memorable for students of all ages.",
      color: "from-blue-500 to-purple-600"
    },
    { 
      id: 2, 
      img: "/api/placeholder/800/500", 
      title: "Explore Science",
      description: "Discover the wonders of science through interactive experiments and real-world applications.",
      color: "from-green-500 to-teal-600"
    },
    { 
      id: 3, 
      img: "/api/placeholder/800/500", 
      title: "Creative Innovation",
      description: "Foster creativity and innovation through DIY projects and cutting-edge STEM activities.",
      color: "from-orange-500 to-red-600"
    },
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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

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

        {/* Main Carousel Container */}
        <div className={`relative overflow-hidden rounded-3xl shadow-2xl bg-white transition-all duration-1000 delay-300 ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
          
          {/* Slides Container */}
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
                      src={img1}
                      alt={slide.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${slide.color} opacity-20`}></div>
                    
                    {/* Floating Elements */}
                    <div className="absolute top-6 left-6">
                      <div className="bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                        <span className="text-sm font-semibold text-gray-700">
                          {String(index + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="flex flex-col justify-center p-12 bg-gradient-to-br from-white to-gray-50">
                    <div className="space-y-6">
                      <div className={`inline-block px-4 py-2 bg-gradient-to-r ${slide.color} rounded-full`}>
                        <span className="text-white font-semibold text-sm tracking-wide uppercase">
                          STEM Excellence
                        </span>
                      </div>
                      
                      <h3 className="text-4xl font-bold text-gray-800 leading-tight">
                        {slide.title}
                      </h3>
                      
                      <p className="text-gray-600 text-lg leading-relaxed">
                        {slide.description}
                      </p>
                      
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110 group z-10"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-[#007FFF]" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110 group z-10"
          >
            <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-[#007FFF]" />
          </button>



          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200">
            <div 
              className="h-full bg-gradient-to-r from-[#007FFF] to-yellow-500 transition-all duration-700 ease-out"
              style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Dot Navigation */}
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

        {/* Stats Section */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          {[
            { number: "500+", label: "Students Trained", icon: "🎓" },
            { number: "50+", label: "Projects Completed", icon: "🔬" },
            { number: "15+", label: "STEM Programs", icon: "🚀" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-[#007FFF] mb-1">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}