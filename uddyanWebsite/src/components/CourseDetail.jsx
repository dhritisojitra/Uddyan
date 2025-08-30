import { useParams, Link } from "react-router-dom";
import { courses } from "../data/courses";

export default function CourseDetail() {
  const { id } = useParams();
  const course = courses.find((c) => c.id === parseInt(id));

  if (!course) return <p className="text-center mt-20">Course not found.</p>;

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold text-[#007FFF] mb-4">{course.title}</h1>
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-64 object-cover rounded-xl mb-6"
      />
      <p className="text-gray-700 mb-6">{course.description}</p>

      <h2 className="text-xl font-semibold text-[#007FFF] mb-4">Modules</h2>
      <ul className="space-y-2 mb-6">
        {course.modules.map((mod, i) => (
          <li
            key={i}
            className="p-4 bg-gray-100 rounded-lg shadow-sm flex justify-between"
          >
            <span className="font-medium">{mod.name}</span>
            <span className="text-sm text-gray-600">
              {mod.activities} Activities • {mod.duration}
            </span>
          </li>
        ))}
      </ul>

      <Link
        to="/CoursesPage"
        className="inline-block bg-[#FFD700] text-gray-800 px-4 py-2 rounded-lg shadow hover:bg-yellow-500"
      >
        ← Back to Courses
      </Link>
    </div>
  );
}
