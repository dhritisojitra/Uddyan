import React, { useState } from 'react';
import { Link } from "react-router-dom";

// Updated courses data
const courses = [
  // Age Group: 7-9 years
  {
    id: "7-9-environment-science",
    title: "Environment Science Explorer",
    ageGroup: "7-9 years",
    category: "Science",
    description: "Discover the wonders of our environment through hands-on experiments. Learn about plants, animals, weather, and ecosystems through interactive DIY activities.",
    modules: [
      { name: "Module 1", activities: 12, duration: "18 hrs", topics: ["Basic ecology", "Plant life cycles", "Weather patterns", "Water cycle"] },
      { name: "Module 2", activities: 24, duration: "36 hrs", topics: ["Animal habitats", "Pollution awareness", "Recycling projects", "Garden ecosystems"] },
      { name: "Module 3", activities: 48, duration: "72 hrs", topics: ["Climate change basics", "Biodiversity", "Conservation projects", "Green technology"] },
    ]
  },
  {
    id: "7-9-optic-science",
    title: "Light & Vision Magic",
    ageGroup: "7-9 years",
    category: "Science",
    description: "Explore the fascinating world of light, colors, and vision through exciting optical experiments and creative projects.",
    modules: [
      { name: "Module 1", activities: 12, duration: "18 hrs", topics: ["Light sources", "Shadow play", "Color mixing", "Simple mirrors"] },
      { name: "Module 2", activities: 24, duration: "36 hrs", topics: ["Rainbow creation", "Kaleidoscope making", "Periscope building", "Lens experiments"] },
    ]
  },
  {
    id: "7-9-electricity",
    title: "Electricity Adventures",
    ageGroup: "7-9 years",
    category: "Science",
    description: "Learn about electricity through safe, fun experiments. Build simple circuits and understand how electricity powers our world.",
    modules: [
      { name: "Module 1", activities: 12, duration: "18 hrs", topics: ["Static electricity", "Battery circuits", "Switches", "Conductors & Insulators"] },
      { name: "Module 2", activities: 24, duration: "36 hrs", topics: ["Series & parallel circuits", "DIY torch", "Electromagnets", "Buzzer circuits"] },
    ]
  },

  // Age Group: 10-12 years
  {
    id: "10-12-electronics",
    title: "Electronics Workshop",
    ageGroup: "10-12 years",
    category: "Technology",
    description: "Introduction to electronics through hands-on circuit building, component understanding, and practical project creation.",
    modules: [
      { name: "Module 1", activities: 12, duration: "18 hrs", topics: ["Resistors & capacitors", "Breadboard basics", "LED circuits", "Simple alarms"] },
      { name: "Module 2", activities: 24, duration: "36 hrs", topics: ["Amplifiers", "Transistors", "DIY radios", "Logic gates basics"] },
    ]
  },
  {
    id: "10-12-magnetism",
    title: "Magnetism & Electromagnetism",
    ageGroup: "10-12 years",
    category: "Science",
    description: "Discover the invisible forces of magnetism and create electromagnetic devices through engaging experiments.",
    modules: [
      { name: "Module 1", activities: 12, duration: "18 hrs", topics: ["Magnet properties", "Magnetic fields", "Compass making", "Electromagnets"] },
      { name: "Module 2", activities: 24, duration: "36 hrs", topics: ["Motors basics", "Generators", "Solenoids", "DIY magnetic crane"] },
    ]
  },

  // Age Group: 13-15 years
  {
    id: "13-15-robotics",
    title: "Introduction to Robotics",
    ageGroup: "13-15 years",
    category: "Robotics",
    description: "Build and program your first robots using sensors, motors, and basic programming concepts.",
    modules: [
      { name: "Module 1", activities: 12, duration: "18 hrs", topics: ["Motors & wheels", "Basic sensors", "Remote-controlled bots", "Line follower intro"] },
      { name: "Module 2", activities: 24, duration: "36 hrs", topics: ["Obstacle avoidance", "Bluetooth control", "Pick & place bot", "Mini battle bots"] },
    ]
  },
  {
    id: "13-15-solar-power",
    title: "Solar Power Engineering",
    ageGroup: "13-15 years",
    category: "Technology",
    description: "Harness the power of the sun through solar panel projects, energy storage, and renewable energy systems.",
    modules: [
      { name: "Module 1", activities: 12, duration: "18 hrs", topics: ["Solar panels basics", "DIY solar lamp", "Solar oven", "Energy storage"] },
      { name: "Module 2", activities: 24, duration: "36 hrs", topics: ["Solar charging station", "Hybrid systems", "Mini solar house", "Advanced renewable models"] },
    ]
  },

  // Age Group: 15-17 years
  {
    id: "physics-practicals-10-12",
    title: "Physics Practicals (Class 10-12)",
    ageGroup: "15-17 years",
    category: "Science",
    description: "Complete physics laboratory experience covering all NCERT practicals for CBSE/GHSEB/ICSE and other boards.",
    modules: [
      { name: "Practicals", activities: 0, duration: "As per NCERT/Board syllabus", topics: ["Mechanics experiments", "Optics experiments", "Electricity experiments", "Modern physics"] },
    ]
  },

  // Age Group: 18+
  {
    id: "18plus-arduino",
    title: "Arduino Programming & Projects",
    ageGroup: "18+ years",
    category: "Programming",
    description: "Master Arduino programming with advanced sensors, IoT connectivity, and complex automation projects.",
    modules: [
      { name: "Module 1", activities: 0, duration: "Customized", topics: ["Arduino IDE", "Sensor integration", "IoT basics", "Automation projects"] },
    ]
  },
  {
    id: "18plus-drone",
    title: "Drone Design & Programming",
    ageGroup: "18+ years",
    category: "Robotics",
    description: "Design, build, and program autonomous drones with flight control systems, cameras, and GPS navigation.",
    modules: [
      { name: "Module 1", activities: 0, duration: "Customized", topics: ["Drone assembly", "Flight controllers", "Camera integration", "Autonomous navigation"] },
    ]
  }
];

// Helper functions
const getAgeGroups = () => [...new Set(courses.map(course => course.ageGroup))];
const getCategories = () => [...new Set(courses.map(course => course.category))];

const getCategoryColor = (category) => {
  const colors = {
    'Science': 'bg-blue-100 text-blue-800',
    'Technology': 'bg-green-100 text-green-800',
    'Engineering': 'bg-purple-100 text-purple-800',
    'Robotics': 'bg-red-100 text-red-800',
    'Programming': 'bg-orange-100 text-orange-800'
  };
  return colors[category] || 'bg-gray-100 text-gray-800';
};

export default function Courses() {
  const [selectedAgeGroup, setSelectedAgeGroup] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const ageGroups = getAgeGroups();
  const categories = getCategories();

  const filteredCourses = courses.filter(course => {
    const ageMatch = selectedAgeGroup === 'All' || course.ageGroup === selectedAgeGroup;
    const categoryMatch = selectedCategory === 'All' || course.category === selectedCategory;
    return ageMatch && categoryMatch;
  });

  return (
    <div className="min-h-screen bg-[#FFFDEB] text-gray-800 px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-[#007FFF] mb-4">
          Explore Our STEM Courses
        </h1>
        <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
          Hands-on experiments and DIY projects designed to develop creativity, critical thinking, and problem-solving skills across all age groups
        </p>

        {/* Filter Section */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-10">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Age Group Filter */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Filter by Age Group
              </label>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedAgeGroup('All')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedAgeGroup === 'All'
                      ? 'bg-[#007FFF] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  All Ages
                </button>
                {ageGroups.map((ageGroup) => (
                  <button
                    key={ageGroup}
                    onClick={() => setSelectedAgeGroup(ageGroup)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedAgeGroup === ageGroup
                        ? 'bg-[#007FFF] text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {ageGroup}
                  </button>
                ))}
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Filter by Category
              </label>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory('All')}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === 'All'
                      ? 'bg-[#FFD700] text-gray-800'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  All Categories
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-[#FFD700] text-gray-800'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <Link
              to={`/courses/${course.id}`}
              key={course.id}
              className="group bg-white rounded-2xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              {/* Course Image Placeholder with Category Color */}
              <div className={`w-full h-40 ${getCategoryColor(course.category).replace('text-', 'bg-').replace('100', '200')} flex items-center justify-center relative`}>
                <div className="text-6xl opacity-20">
                  {course.category === 'Science' && '🔬'}
                  {course.category === 'Technology' && '⚙️'}
                  {course.category === 'Engineering' && '🏗️'}
                  {course.category === 'Robotics' && '🤖'}
                  {course.category === 'Programming' && '💻'}
                </div>
                <div className="absolute top-3 left-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(course.category)}`}>
                    {course.category}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-medium text-gray-700">
                    {course.ageGroup}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-xl font-bold text-[#007FFF] mb-3 line-clamp-2">
                  {course.title}
                </h2>
                <p className="text-sm text-gray-600 line-clamp-3 mb-4">
                  {course.description}
                </p>
                
                {/* Course Features */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-xs text-gray-500">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                    Hands-on Learning
                  </div>
                  <div className="flex items-center text-xs text-gray-500">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                    Project-based Activities
                  </div>
                  <div className="flex items-center text-xs text-gray-500">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                    Age-appropriate Content
                  </div>
                </div>

                <button className="w-full bg-[#FFD700] text-gray-800 text-sm font-semibold px-4 py-3 rounded-lg shadow hover:bg-yellow-500 transition-colors group-hover:bg-yellow-400">
                  Explore Course Details →
                </button>
              </div>
            </Link>
          ))}
        </div>

        {/* No Results Message */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No courses found</h3>
            <p className="text-gray-500">Try adjusting your filters to see more courses</p>
          </div>
        )}

        {/* Special Programs Section */}
        <div className="mt-16 bg-gradient-to-r from-[#007FFF] to-blue-600 rounded-3xl p-8 text-white">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-3">🏫</div>
              <h3 className="text-lg font-semibold mb-2">School Lab Setup</h3>
              <p className="text-sm opacity-90">Customized STEM tinkering lab setup for schools with 3-6 months duration</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">👩‍🏫</div>
              <h3 className="text-lg font-semibold mb-2">Teacher Training</h3>
              <p className="text-sm opacity-90">20-hour customized training modules for educators to implement STEM learning</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-3">🏆</div>
              <h3 className="text-lg font-semibold mb-2">Project Guidance</h3>
              <p className="text-sm opacity-90">Specialized guidance for engineering students and science fair exhibitions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
