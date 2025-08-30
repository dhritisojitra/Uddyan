import React, { useState } from "react";
import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.jpeg";
import img3 from "../assets/img3.jpeg";
import img4 from "../assets/img4.jpeg";
import img5 from "../assets/img5.jpeg";
import img6 from "../assets/img6.jpeg";
import img7 from "../assets/img7.jpeg";
import img8 from "../assets/img8.jpeg";
import img9 from "../assets/img9.jpeg";
import img10 from "../assets/img10.jpeg";
import img11 from "../assets/img11.jpeg";
import img12 from "../assets/img12.jpeg";
import img13 from "../assets/img13.jpeg";
import img14 from "../assets/img14.jpeg";
import img15 from "../assets/img15.jpeg";
import img16 from "../assets/img16.jpeg";
import img17 from "../assets/img17.jpeg";
import img18 from "../assets/img18.jpeg";
import img19 from "../assets/img19.jpeg";
import img20 from "../assets/img20.jpeg";
import img21 from "../assets/img21.jpeg";
import img22 from "../assets/img22.jpeg";
import img23 from "../assets/img23.jpeg";
import img24 from "../assets/img24.jpeg";
import img25 from "../assets/img25.jpeg";
import img26 from "../assets/img26.jpeg";
import img27 from "../assets/img27.jpeg";
import img28 from "../assets/img28.jpeg";
import img29 from "../assets/img29.jpeg";
import img30 from "../assets/img30.jpeg";
import img31 from "../assets/img31.jpeg";
import img32 from "../assets/img32.jpeg";
import img33 from "../assets/img33.jpeg";

const images = [
  { src: img1, alt: "Uddyan Image" },
  { src: img2, alt: "Uddyan Image" },
  { src: img3, alt: "Uddyan Image" },
  { src: img4, alt: "Uddyan Image" },
  { src: img5, alt: "Uddyan Image" },
  { src: img6, alt: "Uddyan Image" },
  { src: img7, alt: "Uddyan Image" },
  { src: img8, alt: "Uddyan Image" },
  { src: img9, alt: "Uddyan Image" },
  { src: img10, alt: "Uddyan Image" },
  { src: img11, alt: "Uddyan Image" },
  { src: img12, alt: "Uddyan Image" },
  { src: img13, alt: "Uddyan Image" },
  { src: img14, alt: "Uddyan Image" },
  { src: img15, alt: "Uddyan Image" },
  { src: img16, alt: "Uddyan Image" },
  { src: img17, alt: "Uddyan Image" },
  { src: img18, alt: "Uddyan Image" },
  { src: img19, alt: "Uddyan Image" },
  { src: img20, alt: "Uddyan Image" },
  { src: img21, alt: "Uddyan Image" },
  { src: img22, alt: "Uddyan Image" },
  { src: img23, alt: "Uddyan Image" },
  { src: img24, alt: "Uddyan Image" },
  { src: img25, alt: "Uddyan Image" },
  { src: img26, alt: "Uddyan Image" },
  { src: img27, alt: "Uddyan Image" },
  { src: img28, alt: "Uddyan Image" },
  { src: img29, alt: "Uddyan Image" },
  { src: img30, alt: "Uddyan Image" },
  { src: img31, alt: "Uddyan Image" },
  { src: img32, alt: "Uddyan Image" },
  { src: img33, alt: "Uddyan Image" },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-6">
      <h1 className="text-3xl font-bold text-center text-[#007FFF] mb-10">
        Gallery
      </h1>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full max-w-sm aspect-square rounded-lg overflow-hidden shadow-md cursor-pointer 
                       transform hover:scale-105 hover:shadow-xl 
                       transition-all duration-300"
            onClick={() => setSelectedImage(image.src)}
          >
            <img
              src={image.src}
              alt={image.alt}
              title=""
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)} // click outside to close
        >
          <div className="relative">
            <img
              src={selectedImage}
              alt="Full View"
              className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg"
            />
            <button
              className="absolute top-2 right-2 text-white text-2xl bg-black bg-opacity-50 rounded-full px-3 py-1 hover:bg-opacity-70"
              onClick={() => setSelectedImage(null)}
            >
              
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;