import React, { useState, useEffect } from "react";
import axios from "axios";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 9;

  const totalPages = Math.ceil(images.length / imagesPerPage);
  const startIndex = (currentPage - 1) * imagesPerPage;
  const currentImages = images.slice(startIndex, startIndex + imagesPerPage);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const backendURL = import.meta.env.VITE_API_URL;
        const res = await axios.get(`${backendURL}/api/uploads/all`, {
          withCredentials: true,
        });

        const fetchedImages = res.data.map((img, index) => ({
          src: img.url,
          alt: `Upload ${index + 1}`,
        }));

        setImages(fetchedImages);
      } catch (err) {
        console.error("Failed to fetch images:", err);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="bg-[#FFFDEB] min-h-screen py-8 px-4 sm:py-12 sm:px-6">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-[#007FFF] mb-8 sm:mb-12">
        Gallery
      </h1>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
        {currentImages.map((image, index) => (
          <div
            key={index}
            className="w-full aspect-square rounded-xl overflow-hidden shadow-md cursor-pointer 
                       transform hover:scale-105 hover:shadow-xl transition-all duration-300"
            onClick={() => setSelectedImage(image.src)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex flex-wrap justify-center mt-6 sm:mt-10 gap-2">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
          className="px-3 sm:px-4 py-2 rounded-lg bg-[#007FFF] text-white font-semibold disabled:opacity-50"
        >
          Prev
        </button>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 sm:px-4 py-2 rounded-lg font-semibold ${
              currentPage === i + 1
                ? "bg-[#007FFF] text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {i + 1}
          </button>
        ))}
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
          className="px-3 sm:px-4 py-2 rounded-lg bg-[#007FFF] text-white font-semibold disabled:opacity-50"
        >
          Next
        </button>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-full max-h-full">
            <img
              src={selectedImage}
              alt="Full View"
              className="max-h-[80vh] sm:max-h-[90vh] max-w-full rounded-lg shadow-lg"
            />
            <button
              className="absolute top-2 right-2 sm:top-3 sm:right-3 text-white text-xl sm:text-2xl bg-black bg-opacity-60 rounded-full px-2 py-1 sm:px-3 sm:py-1 hover:bg-opacity-80"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
