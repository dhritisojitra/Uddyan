import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Cards from './components/Cards';
import Carousel from './components/Carousel';
import CoursesPage from './components/Courses';
import CourseDetail from './components/CourseDetail'; 
import Footer from "./components/Footer";
import Gallery from "../src/pages/gallery"
import AboutUs from "./pages/aboutUs";
import ContactUs from "./pages/ContactUs";
import LoginPage from "./pages/Auth";

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

        {/* Gallery page */}
        <Route path="/gallery" element={<Gallery />} /> 

        {/* About Us page */}
        <Route path="/about" element={<AboutUs />} /> 

        {/* Contact Us page */}
        <Route path="/contact" element={<ContactUs />} /> 

        {/* Login page */}
        <Route path="/signin" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
