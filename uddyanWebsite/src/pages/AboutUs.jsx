import React from "react";
import img33 from "../assets/img33.jpeg";

const AboutUs = () => {
  return (
    <div className="bg-[#FFFDEB] min-h-screen py-12 px-6">
      <h1 className="text-4xl font-bold text-center text-[#007FFF] mb-10">
        About Us
      </h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <div>
          <h2 className="text-3xl font-semibold text-yellow-500 mb-4">
            UDDYAN DIY & STEM Lab
          </h2>
          <p className="text-gray-800 leading-relaxed mb-4">
            UDDYAN is a state-of-the-art DIY & STEM laboratory built on the
            concept of <span className="font-semibold">Hands-on Experiments</span>. 
            Here, students explore, learn, and create projects through engaging 
            STEM activities.
          </p>
          <p className="text-gray-800 leading-relaxed mb-4">
            Our goal is to develop <span className="font-semibold">creativity, 
            design thinking, analytical abilities, and problem-solving skills</span> 
            while promoting critical thinking.
          </p>

          <h3 className="text-2xl font-bold text-[#007FFF] mb-2">Vision</h3>
          <p className="text-gray-700 mb-4">
            To make students creators of technology rather than just consumers.
          </p>

          <h3 className="text-2xl font-bold text-[#007FFF] mb-2">Mission</h3>
          <p className="text-gray-700 mb-4">
            To build strong STEM skill-sets in students through practical, 
            hands-on experiments and real-world applications.
          </p>

          <h3 className="text-2xl font-bold text-[#007FFF] mb-2">Why STEM?</h3>
          <p className="text-gray-700 mb-6">
            STEM is all about <span className="font-semibold">Learning by Doing</span>. 
            It develops logical reasoning, teamwork, innovation, and entrepreneurship. 
            STEM education empowers children to solve real-world problems and 
            prepares them for the future.
          </p>

          {/* Content from the doc */}
          <h3 className="text-2xl font-bold text-[#007FFF] mb-2">What We Offer</h3>
          <ul className="list-disc list-inside text-gray-800 mb-6 space-y-2">
            <li>STEM courses of one month to year-long duration for different age groups</li>
            <li>Electronic/electrical circuits and device creation</li>
            <li>Guidance for engineering students on projects</li>
            <li>Experiments using scientific instruments</li>
            <li>STEM projects for school exhibitions</li>
            <li>DIY workshops on STEM activities for all ages</li>
            <li>Setting up tinkering labs at schools</li>
          </ul>

          <h3 className="text-2xl font-bold text-[#007FFF] mb-2">Resources</h3>
          <ul className="list-disc list-inside text-gray-800 mb-6 space-y-2">
            <li>Robotics kits</li>
            <li>Microcontrollers and sensors</li>
            <li>Circuit building materials</li>
            <li>Scientific instruments and tools</li>
            <li>Computers with software</li>
            <li>STEM project kits & toys</li>
            <li>Physics lab for 12th science class</li>
          </ul>

          <h3 className="text-2xl font-bold text-[#007FFF] mb-2">Contact Us</h3>
          <p className="text-gray-700">
            Address: 108, Satyamev Royal-3, Nr. Apollo International School, 
            Opp. Dutt Avalon, Tragad, Chandkheda, Ahmedabad <br />
            Contact: 9909008718, 8141528579 <br />
            Email: <a href="mailto:uddyan.stemlab@gmail.com" className="text-blue-500">
              uddyan.stemlab@gmail.com
            </a>
          </p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src={img33}
            alt="UDDYAN STEM Lab"
            className="rounded-lg shadow-lg w-200 h-320 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
