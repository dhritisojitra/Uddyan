import { Link } from "react-router-dom";
import { courses } from "../data/courses";
import img1 from "../assets/img1.jpeg";


export default function Courses() {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-10">
      <h1 className="text-3xl font-bold text-center text-[#007FFF] mb-10">
        Explore Our STEM Courses
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {courses.map((course) => (
          <Link
            to={`/courses/${course.id}`}
            key={course.id}
            className="group bg-white rounded-2xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <img
              src={img1}
              alt={course.title}
              className="w-full h-40 object-cover group-hover:opacity-90"
            />
            <div className="p-5">
              <h2 className="text-lg font-bold text-[#007FFF] mb-2">
                {course.title}
              </h2>
              <p className="text-sm text-gray-600 line-clamp-3">
                {course.description}
              </p>
              <button className="mt-3 bg-[#FFD700] text-gray-800 text-sm px-4 py-2 rounded-lg shadow hover:bg-yellow-500">
                View Course
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
