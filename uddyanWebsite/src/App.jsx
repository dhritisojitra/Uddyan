import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Cards from './components/Cards';
import Carousel from './components/Carousel';
import CoursesPage from './components/Courses';
import CourseDetail from './components/CourseDetail'; 
import Footer from "./components/Footer";
import Gallery from "../src/pages/gallery"

function App() {
  return (
    <Router>
      <Navbar /> 

      <Routes>

        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <Carousel />
              <Cards />
              <Footer/>
            </>
          }
        />

        {/* Courses listing */}
        <Route path="/CoursesPage" element={<CoursesPage />} />

        {/* Individual course page */}
        <Route path="/courses/:id" element={<CourseDetail />} />

        {/* Gallery page */}
        <Route path="/gallery" element={<Gallery />} /> 
      </Routes>
    </Router>
  );
}

export default App;
