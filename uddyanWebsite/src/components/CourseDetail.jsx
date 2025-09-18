import { useParams, Link } from "react-router-dom";
import { courses } from "../data/courses";

export default function CourseDetail() {
  const { id } = useParams();
  const course = courses.find((c) => c.id === id);

  if (!course) {
    return <p className="text-center mt-20">Course not found.</p>;
  }

  return (
    <div className="bg-[#FFFDEB] min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-10">
        <Link to="/CoursesPage" className="inline-block text-gray-600 hover:text-gray-800 mb-4">
          ← Back to All Courses
        </Link>

        <h1 className="text-3xl font-bold text-[#007FFF] mb-4">{course.title}</h1>
        <p className="text-gray-700 mb-6">{course.description}</p>

        {course.modules && (
          <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold text-[#007FFF] mb-4">Modules</h2>
            <ul className="space-y-4">
              {course.modules.map((mod, i) => (
                <li key={i} className="p-4 bg-gray-100 rounded-lg shadow-sm">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-lg">{mod.name}</span>
                    <span className="text-sm text-gray-600">
                      {mod.activities > 0 ? `${mod.activities} Activities` : "Customized"} • {mod.duration}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
