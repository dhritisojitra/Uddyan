import React, { useState } from "react";
import { Link } from "react-router-dom";
const courses = [
  // Age Group: 7-9 years
  {
    id: "7-9-environment-science",
    title: "Environment Science Explorer",
    ageGroup: "7-9 years",
    description:
      "Discover the wonders of our environment through hands-on experiments. Learn about plants, animals, weather, and ecosystems through interactive DIY activities.",
    modules: [
      {
        name: "Module 1",
        activities: 12,
        duration: "18 hrs",
        topics: ["Basic ecology", "Plant life cycles", "Weather patterns", "Water cycle"],
      },
      {
        name: "Module 2",
        activities: 24,
        duration: "36 hrs",
        topics: ["Animal habitats", "Pollution awareness", "Recycling projects", "Garden ecosystems"],
      },
      {
        name: "Module 3",
        activities: 48,
        duration: "72 hrs",
        topics: ["Climate change basics", "Biodiversity", "Conservation projects", "Green technology"],
      },
    ],
  },
  {
    id: "7-9-optic-science",
    title: "Light & Vision Magic",
    ageGroup: "7-9 years",
    description:
      "Explore the fascinating world of light, colors, and vision through exciting optical experiments and creative projects.",
    modules: [
      {
        name: "Module 1",
        activities: 12,
        duration: "18 hrs",
        topics: ["Light sources", "Shadow play", "Color mixing", "Simple mirrors"],
      },
      {
        name: "Module 2",
        activities: 24,
        duration: "36 hrs",
        topics: ["Rainbow creation", "Kaleidoscope making", "Periscope building", "Lens experiments"],
      },
    ],
  },
  {
    id: "7-9-electricity",
    title: "Electricity Adventures",
    ageGroup: "7-9 years",
    description:
      "Learn about electricity through safe, fun experiments. Build simple circuits and understand how electricity powers our world.",
    modules: [
      {
        name: "Module 1",
        activities: 12,
        duration: "18 hrs",
        topics: ["Static electricity", "Battery circuits", "Switches", "Conductors & Insulators"],
      },
      {
        name: "Module 2",
        activities: 24,
        duration: "36 hrs",
        topics: ["Series & parallel circuits", "DIY torch", "Electromagnets", "Buzzer circuits"],
      },
    ],
  },

  // Age Group: 10-12 years
  {
    id: "10-12-electronics",
    title: "Electronics Workshop",
    ageGroup: "10-12 years",
    description:
      "Introduction to electronics through hands-on circuit building, component understanding, and practical project creation.",
    modules: [
      {
        name: "Module 1",
        activities: 12,
        duration: "18 hrs",
        topics: ["Resistors & capacitors", "Breadboard basics", "LED circuits", "Simple alarms"],
      },
      {
        name: "Module 2",
        activities: 24,
        duration: "36 hrs",
        topics: ["Amplifiers", "Transistors", "DIY radios", "Logic gates basics"],
      },
    ],
  },
  {
    id: "10-12-magnetism",
    title: "Magnetism & Electromagnetism",
    ageGroup: "10-12 years",
    description:
      "Discover the invisible forces of magnetism and create electromagnetic devices through engaging experiments.",
    modules: [
      {
        name: "Module 1",
        activities: 12,
        duration: "18 hrs",
        topics: ["Magnet properties", "Magnetic fields", "Compass making", "Electromagnets"],
      },
      {
        name: "Module 2",
        activities: 24,
        duration: "36 hrs",
        topics: ["Motors basics", "Generators", "Solenoids", "DIY magnetic crane"],
      },
    ],
  },

  // Age Group: 13-15 years
  {
    id: "13-15-robotics",
    title: "Introduction to Robotics",
    ageGroup: "13-15 years",
    description:
      "Build and program your first robots using sensors, motors, and basic programming concepts.",
    modules: [
      {
        name: "Module 1",
        activities: 12,
        duration: "18 hrs",
        topics: ["Motors & wheels", "Basic sensors", "Remote-controlled bots", "Line follower intro"],
      },
      {
        name: "Module 2",
        activities: 24,
        duration: "36 hrs",
        topics: ["Obstacle avoidance", "Bluetooth control", "Pick & place bot", "Mini battle bots"],
      },
    ],
  },
  {
    id: "13-15-solar-power",
    title: "Solar Power Engineering",
    ageGroup: "13-15 years",
    description:
      "Harness the power of the sun through solar panel projects, energy storage, and renewable energy systems.",
    modules: [
      {
        name: "Module 1",
        activities: 12,
        duration: "18 hrs",
        topics: ["Solar panels basics", "DIY solar lamp", "Solar oven", "Energy storage"],
      },
      {
        name: "Module 2",
        activities: 24,
        duration: "36 hrs",
        topics: ["Solar charging station", "Hybrid systems", "Mini solar house", "Advanced renewable models"],
      },
    ],
  },

  // Age Group: 15-17 years
  {
    id: "physics-practicals-10-12",
    title: "Physics Practicals (Class 10-12)",
    ageGroup: "15-17 years",
    description:
      "Complete physics laboratory experience covering all NCERT practicals for CBSE/GHSEB/ICSE and other boards.",
    modules: [
      {
        name: "Practicals",
        activities: 0,
        duration: "As per NCERT/Board syllabus",
        topics: ["Mechanics experiments", "Optics experiments", "Electricity experiments", "Modern physics"],
      },
    ],
  },

  // Age Group: 18+
  {
    id: "18plus-arduino",
    title: "Arduino Programming & Projects",
    ageGroup: "18+ years",
    description:
      "Master Arduino programming with advanced sensors, IoT connectivity, and complex automation projects.",
    modules: [
      {
        name: "Module 1",
        activities: 0,
        duration: "Customized",
        topics: ["Arduino IDE", "Sensor integration", "IoT basics", "Automation projects"],
      },
    ],
  },
  {
    id: "18plus-drone",
    title: "Drone Design & Programming",
    ageGroup: "18+ years",
    description:
      "Design, build, and program autonomous drones with flight control systems, cameras, and GPS navigation.",
    modules: [
      {
        name: "Module 1",
        activities: 0,
        duration: "Customized",
        topics: ["Drone assembly", "Flight controllers", "Camera integration", "Autonomous navigation"],
      },
    ],
  },
];

// Helper: unique age groups
const getAgeGroups = () => [...new Set(courses.map((c) => c.ageGroup))];

export default function Courses() {
  const [selectedAgeGroup, setSelectedAgeGroup] = useState("All");

  const ageGroups = getAgeGroups();

  const filteredCourses =
    selectedAgeGroup === "All"
      ? courses
      : courses.filter((c) => c.ageGroup === selectedAgeGroup);

  return (
    <div className="min-h-screen bg-[#FFFDEB] text-gray-800 px-6 py-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center text-[#007FFF] mb-4">
          Explore Our STEM Courses
        </h1>
        <p className="text-center text-gray-600 mb-10 max-w-3xl mx-auto">
          Hands-on experiments and DIY projects designed to develop creativity,
          critical thinking, and problem-solving skills across all age groups
        </p>

        {/* 🔹 Age Group Filter */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-10">
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Filter by Age Group
          </label>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedAgeGroup("All")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedAgeGroup === "All"
                  ? "bg-[#007FFF] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
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
                    ? "bg-[#007FFF] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {ageGroup}
              </button>
            ))}
          </div>
        </div>

        {/* 🔹 Courses by Age Group */}
        <div className="space-y-12">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-2xl shadow-md p-6"
            >
              <h2 className="text-2xl font-bold text-[#007FFF] mb-2">
                {course.title}
              </h2>
              <p className="text-gray-600 mb-4">{course.description}</p>

              {/* Modules */}
              <div className="space-y-6">
                {course.modules.map((module, idx) => (
                  <div
                    key={idx}
                    className="bg-gradient-to-r from-blue-50 to-yellow-50 rounded-xl p-4 shadow"
                  >
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {module.name} — {module.activities} Activities | {module.duration}
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      {module.topics.map((topic, tIdx) => (
                        <li key={tIdx}>{topic}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* No courses */}
          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No courses found
              </h3>
              <p className="text-gray-500">
                Try selecting another age group
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
