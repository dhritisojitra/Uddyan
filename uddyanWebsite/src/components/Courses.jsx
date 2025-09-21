import React, { useState } from "react";
import { ChevronDown, ChevronUp, Clock, BookOpen, Target, Users } from "lucide-react";

// Course data
const courses = [
  {
    id: "7-9",
    title: "STEM Explorer (7–9 years)",
    ageGroup: "7–9 years",
    description: "Develop STEM skill-sets through fun, hands-on activities.",
    modules: [
      {
        name: "Module 1",
        activities: 12,
        duration: "18 hrs",
        description: "",
        topics: [
          "Environment science",
          "Electricity",
          "Mechanics",
          "Construction",
          "Aerospace modelling",
          "Maths",
        ],
      },
      {
        name: "Module 2",
        activities: 24,
        duration: "36 hrs",
        description: "",
        topics: [
          "Environment science",
          "Electricity",
          "Mechanics",
          "Construction",
          "Aerospace modelling",
          "Maths",
        ],
      },
      {
        name: "Module 3",
        activities: 48,
        duration: "72 hrs",
        description: "",
        topics: [
          "Environment science",
          "Electricity",
          "Mechanics",
          "Construction",
          "Aerospace modelling",
          "Maths",
        ],
      },
    ],
  },
  {
    id: "10-12",
    title: "STEM Innovator (10–12 years)",
    ageGroup: "10–12 years",
    description: "Hands-on experiments covering science, tech, and engineering basics.",
    modules: [
      {
        name: "Module 1",
        activities: 12,
        duration: "18 hrs",
        description: "",
        topics: [
          "Environment science",
          "Optic science",
          "Electricity",
          "Electronics",
          "Magnetism",
          "Mechanics",
          "Construction",
          "Aerospace modelling",
          "Science laws",
          "Maths",
        ],
      },
      {
        name: "Module 2",
        activities: 24,
        duration: "36 hrs",
        description: "",
        topics: [
          "Environment science",
          "Optic science",
          "Electricity",
          "Electronics",
          "Magnetism",
          "Mechanics",
          "Construction",
          "Aerospace modelling",
          "Science laws",
          "Maths",
        ],
      },
      {
        name: "Module 3",
        activities: 48,
        duration: "72 hrs",
        description: "",
        topics: [
          "Environment science",
          "Optic science",
          "Electricity",
          "Electronics",
          "Magnetism",
          "Mechanics",
          "Construction",
          "Aerospace modelling",
          "Science laws",
          "Maths",
        ],
      },
    ],
  },
  {
    id: "13-15",
    title: "STEM Builder (13–15 years)",
    ageGroup: "13–15 years",
    description: "Dive deeper into robotics, electronics, and advanced STEM concepts.",
    modules: [
      {
        name: "Module 1",
        activities: 12,
        duration: "18 hrs",
        description: "",
        topics: [
          "Electricity",
          "Electronics",
          "Magnetism",
          "Science laws",
          "Sensors",
          "Solar power",
          "Electromagnetism",
          "Hydraulics",
          "Robotics",
        ],
      },
      {
        name: "Module 2",
        activities: 24,
        duration: "36 hrs",
        description: "",
        topics: [
          "Electricity",
          "Electronics",
          "Magnetism",
          "Science laws",
          "Sensors",
          "Solar power",
          "Electromagnetism",
          "Hydraulics",
          "Robotics",
        ],
      },
      {
        name: "Module 3",
        activities: "Custom",
        duration: "Project based",
        description: "",
        topics: ["Customized projects as per requirement"],
      },
    ],
  },
  {
    id: "16plus",
    title: "STEM Advanced (16+ years, Engg/Diploma)",
    ageGroup: "16+ years",
    description: "Advanced customized STEM projects with engineering focus.",
    modules: [
      {
        name: "Module 1",
        activities: "Custom",
        duration: "Project based",
        description: "Professional-level customized projects for advanced students focusing on real-world engineering applications.",
        topics: [
          "Electronics",
          "Physics",
          "Sensors",
          "Solar power",
          "Robotics",
          "Arduino",
          "Drone modelling",
          "Electrical engineering",
        ],
      },
    ],
  },
];

// Function to get unique topics for a course
const getTopicsForAgeGroup = (ageGroup) => {
  const course = courses.find(c => c.ageGroup === ageGroup);
  if (!course) return [];
  
  const topicDescriptions = {
    'Environment science': 'Study ecosystems, recycling, and how human activities affect the planet.',
    'Optic science': 'Discover light properties, reflection, refraction, and optical phenomena.',
    'Electricity': 'Build small circuits to understand how current works.',
    'Electronics': 'Build electronic circuits, work with components, and understand digital systems.',
    'Magnetism': 'Investigate magnetic fields, electromagnets, and magnetic properties.',
    'Mechanics': 'Explore motion, speed, forces, and how gears, pulleys, and levers make work easier.',
    'Construction': 'Design and test models of bridges, towers, and other structures using different materials.',
    'Aerospace modelling': 'Create model planes or rockets and test how aerodynamics affects flight.',
    'Science laws': 'Understand fundamental scientific principles and natural laws.',
    'Maths': 'Apply maths to real problems like measuring, designing, and calculating in STEM projects.',
    'Sensors': 'Work with various sensors, data collection, and measurement technologies.',
    'Solar power': 'Learn renewable energy, photovoltaic systems, and sustainable power generation.',
    'Electromagnetism': 'Explore electromagnetic fields, induction, and electromagnetic applications.',
    'Hydraulics': 'Study fluid mechanics, hydraulic systems, and water-based engineering.',
    'Robotics': 'Build and program robots, learn automation and artificial intelligence basics.',
    'Physics': 'Explore fundamental physics concepts through practical experiments.',
    'Arduino': 'Program microcontrollers, create interactive projects and IoT devices.',
    'Drone modelling': 'Design, build, and program drones, study UAV technology.',
    'Electrical engineering': 'Advanced electrical systems, power distribution, and circuit design.',
    'Customized projects as per requirement': 'Tailored projects based on individual interests and career goals.'
  };

  const uniqueTopics = new Set();
  course.modules.forEach(module => {
    module.topics.forEach(topic => uniqueTopics.add(topic));
  });

  return Array.from(uniqueTopics).map(topic => ({
    name: topic,
    description: topicDescriptions[topic] || 'Hands-on learning experience in this STEM topic.'
  }));
};

// Module card component
const ModuleCard = ({ module, index }) => {
  const moduleColors = [
    'from-blue-500 to-blue-600',
    'from-green-500 to-green-600', 
    'from-purple-500 to-purple-600'
  ];

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 h-full flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className={`p-2 rounded-lg bg-gradient-to-br ${moduleColors[index % moduleColors.length]}`}>
            <Target className="text-white" size={20} />
          </div>
          <span className="text-sm text-gray-500 font-medium">Level {index + 1}</span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-800 mb-2">{module.name}</h3>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{module.description}</p>
      </div>
      
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2 text-gray-600">
            <BookOpen size={16} className="text-blue-500" />
            <span className="text-m font-semibold">{module.activities} Activities</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <Clock size={16} className="text-green-500" />
            <span className="text-l font-semibold">{module.duration}</span>
          </div>
        </div>
        <div className="text-sm text-gray-500">
          <span className="font-medium">{module.topics.length} Topics Included</span>
        </div>
      </div>
    </div>
  );
};

// Topic card component
const TopicCard = ({ topic }) => {
  const topicIcons = {
    'Environment science': '🌿',
    'Optic science': '🔬',
    'Electricity': '⚡',
    'Electronics': '🔌',
    'Magnetism': '🧲',
    'Mechanics': '⚙️',
    'Construction': '🏗️',
    'Aerospace modelling': '🚀',
    'Science laws': '📐',
    'Maths': '🔢',
    'Sensors': '📡',
    'Solar power': '☀️',
    'Electromagnetism': '🌐',
    'Hydraulics': '💧',
    'Robotics': '🤖',
    'Physics': '🔬',
    'Arduino': '💻',
    'Drone modelling': '🚁',
    'Electrical engineering': '⚡',
    'Customized projects as per requirement': '🛠️'
  };

  return (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-4 h-full flex">
      <span className="text-3xl flex-shrink-0 mr-3">{topicIcons[topic.name] || '📚'}</span>
      <div>
        <h4 className="font-semibold text-gray-800 mb-1">{topic.name}</h4>
        <p className="text-sm text-gray-600 leading-relaxed">{topic.description}</p>
      </div>
    </div>
  );
};

export default function Courses() {
  const [selectedAgeGroup, setSelectedAgeGroup] = useState("7–9 years");

  const ageGroups = [...new Set(courses.map((c) => c.ageGroup))];
  const selectedCourse = courses.find(c => c.ageGroup === selectedAgeGroup);
  const topics = getTopicsForAgeGroup(selectedAgeGroup);

  return (
    <div className="min-h-screen bg-[#FFFFF0] px-4 sm:px-6 lg:px-10 py-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
            STEM Learning Hub
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover hands-on learning experiences tailored for every age group
          </p>
        </div>

        {/* Age Groups */}
        <div className="mb-12">
          <h2 className="text-lg font-bold text-gray-800 mb-4">Age groups</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {ageGroups.map((age) => (
              <button
                key={age}
                onClick={() => setSelectedAgeGroup(age)}
                className={`p-4 rounded-lg border-2 font-semibold transition-all duration-200 text-center ${
                  selectedAgeGroup === age
                    ? "border-blue-500 bg-blue-50 text-blue-700"
                    : "border-gray-300 bg-white text-gray-700 hover:border-gray-400"
                }`}
              >
                {age}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Course Info */}
        {selectedCourse && (
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">
              {selectedCourse.title}
            </h2>
            <p className="text-md sm:text-lg text-gray-600 max-w-2xl mx-auto">
              {selectedCourse.description}
            </p>
          </div>
        )}

        {/* Modules */}
        <div className="mb-16">
          <h3 className="text-lg font-bold text-gray-800 mb-6">Modules</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {selectedCourse?.modules.map((module, idx) => (
              <ModuleCard key={`module-${idx}`} module={module} index={idx} />
            ))}
          </div>
        </div>

        {/* Topics */}
        <div className="mb-16">
          <h3 className="text-lg font-bold text-gray-800 mb-4">Topics to be covered in modules</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {topics.map((topic, idx) => (
              <TopicCard key={`topic-${idx}`} topic={topic} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
