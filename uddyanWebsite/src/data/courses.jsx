import img2 from "../assets/img2.jpeg"
import img3 from "../assets/img3.jpeg"

export const courses = [
  {
    id: 1,
    title: "STEM Basics (Age 7-9)",
    description: "Hands-on experiments in everyday science — exploring the environment, light and shadows, simple electric circuits, machines, and building models.",
    modules: [
      { name: "Module 1", activities: 12, duration: "18 hrs" },
      { name: "Module 2", activities: 24, duration: "36 hrs" },
      { name: "Module 3", activities: 48, duration: "72 hrs" },
    ],
    image: img2,
  },
  {
    id: 2,
    title: "STEM Explorers (Age 10-12)",
    description: "Projects in electricity, electronics, magnetism, mechanics, construction, aerospace, science laws, and maths.",
    modules: [
      { name: "Module 1", activities: 12, duration: "18 hrs" },
      { name: "Module 2", activities: 24, duration: "36 hrs" },
      { name: "Module 3", activities: 48, duration: "72 hrs" },
    ],
    image: img3,
  },
];
