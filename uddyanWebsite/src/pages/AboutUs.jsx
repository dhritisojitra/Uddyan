import React, { useState, useEffect } from "react";
import img33 from "../assets/img33.jpeg";

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="bg-[#FFFDEB] min-h-screen py-12 px-6">
      <h1 className={`text-4xl font-bold text-center text-[#007FFF] mb-10 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
        About Us
      </h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <div className={`space-y-6 transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
          <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-yellow-100">
            <h2 className="text-3xl font-semibold text-yellow-500 mb-4 hover:text-yellow-600 transition-colors duration-300">
              UDDYAN DIY & STEM Lab
            </h2>
            <p className="text-gray-800 leading-relaxed mb-4">
              UDDYAN is a state-of-the-art DIY & STEM laboratory built on the
              concept of <span className="font-semibold text-[#007FFF] px-1 py-0.5 bg-blue-50 rounded">Hands-on Experiments</span>. 
              Here, students explore, learn, and create projects through engaging 
              STEM activities.
            </p>
            <p className="text-gray-800 leading-relaxed">
              Our goal is to develop <span className="font-semibold text-[#007FFF] px-1 py-0.5 bg-blue-50 rounded">creativity, 
              design thinking, analytical abilities, and problem-solving skills</span> 
              while promoting critical thinking.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-[#007FFF]">
              <h3 className="text-xl font-bold text-[#007FFF] mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#007FFF] rounded-full animate-pulse"></span>
                Vision
              </h3>
              <p className="text-gray-700">
                To make students creators of technology rather than just consumers.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-white rounded-xl p-5 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-yellow-500">
              <h3 className="text-xl font-bold text-[#007FFF] mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></span>
                Mission
              </h3>
              <p className="text-gray-700">
                To build strong STEM skill-sets in students through practical, 
                hands-on experiments and real-world applications.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 via-white to-yellow-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <h3 className="text-2xl font-bold text-[#007FFF] mb-3 flex items-center gap-3">
              <span className="text-2xl">🔬</span>
              Why STEM?
            </h3>
            <p className="text-gray-700">
              STEM is all about <span className="font-semibold text-yellow-600 px-1 py-0.5 bg-yellow-50 rounded">Learning by Doing</span>. 
              It develops logical reasoning, teamwork, innovation, and entrepreneurship. 
              STEM education empowers children to solve real-world problems and 
              prepares them for the future.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <h3 className="text-2xl font-bold text-[#007FFF] mb-4 flex items-center gap-3">
              <span className="text-2xl">🎯</span>
              What We Offer
            </h3>
            <div className="grid gap-3">
              {[
                "STEM courses of one month to year-long duration for different age groups",
                "Electronic/electrical circuits and device creation",
                "Guidance for engineering students on projects",
                "Experiments using scientific instruments",
                "STEM projects for school exhibitions",
                "DIY workshops on STEM activities for all ages",
                "Setting up tinkering labs at schools"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-2 rounded-lg hover:bg-blue-50 transition-colors duration-200 group">
                  <span className="w-2 h-2 bg-[#007FFF] rounded-full mt-2 group-hover:scale-125 transition-transform duration-200"></span>
                  <span className="text-gray-800 group-hover:text-gray-900">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-50 to-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
            <h3 className="text-2xl font-bold text-[#007FFF] mb-4 flex items-center gap-3">
              <span className="text-2xl">🛠️</span>
              Resources
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Robotics kits",
                "Microcontrollers and sensors",
                "Circuit building materials",
                "Scientific instruments and tools",
                "Computers with software",
                "STEM project kits & toys",
                "Physics lab for 12th science class"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-yellow-50 transition-colors duration-200 group">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full group-hover:scale-125 transition-transform duration-200"></span>
                  <span className="text-gray-800 group-hover:text-gray-900 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className={`flex justify-center transition-all duration-1000 delay-600 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#007FFF] to-yellow-500 rounded-lg blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
            <img
              src={img33}
              alt="UDDYAN STEM Lab"
              className="relative rounded-lg shadow-xl w-200 h-350 object-cover transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-2xl border-4 border-white"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;