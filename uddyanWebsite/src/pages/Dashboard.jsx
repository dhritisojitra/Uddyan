import React, { useState, useEffect, useContext, useRef } from "react";
import axios from "axios";
import {
  Camera,
  Save,
  Mail,
  Phone,
  MapPin,
  Edit3,
  LogOut,
  Upload,
  X,
} from "lucide-react";
import { AppContent } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { isLoggedIn, userData, setIsLoggedIn } = useContext(AppContent);
  const backendURL = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();

  const [contactData, setContactData] = useState({
    email: "",
    phone: "",
    address: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [images, setImages] = useState([]);

  // widget refs
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  // Fetch contact info
  useEffect(() => {
    if (!isLoggedIn) return;

    axios
      .get(`${backendURL}/api/contact`, { withCredentials: true })
      .then((res) => {
        if (res.data) {
          setContactData({
            email: res.data.email || "",
            phone: res.data.contact || "",
            address: res.data.address || "",
          });
        }
      })
      .catch((err) => console.error(err));
  }, [isLoggedIn, backendURL]);

  // Initialize Cloudinary widget
    useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dolzapgsh",
        uploadPreset: "firstupload",
      },
      async (error, result) => {
        if (error) {
          console.error("Upload error:", error);
          alert("⚠️ Upload failed. Please try again.");
          return;
        }

        if (result && result.event === "success") {
          const { secure_url, public_id } = result.info;

          console.log(result.info);
          alert("✅ Image uploaded to Cloudinary successfully!");
          try {
            // Save to MongoDB through your backend
            const res = await axios.post(`${backendURL}/api/images/save`, {
              url: secure_url,
              public_id,
            });

            // Update gallery immediately
            setImages((prev) => [...prev, res.data.image]);

            alert("✅ Image uploaded and saved successfully!");
          } catch (err) {
            console.error("Failed to save image:", err);
            alert("⚠️ Upload succeeded but saving to DB failed.");
          }
        }
      }
    );
  }, []);

  const handleContactChange = (field, value) => {
    setContactData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSaveContact = async () => {
    try {
      await axios.put(
        `${backendURL}/api/contact`,
        {
          email: contactData.email,
          contact: contactData.phone,
          address: contactData.address,
        },
        { withCredentials: true }
      );
      setIsEditing(false);
      alert("Contact info updated successfully! 🚀");
    } catch (err) {
      console.error(err);
      alert("Failed to save contact info.");
    }
  };

  const handleImageRemove = async (imageId) => {
    try {
      await axios.delete(`${backendURL}/api/photos/${imageId}`, {
        withCredentials: true,
      });
      setImages((prev) => prev.filter((img) => img.id !== imageId));
      alert("Photo removed successfully!");
    } catch (err) {
      console.error("Remove failed:", err);
      alert("Failed to remove photo.");
    }
  };

  const handleLogout = async () => {
    try {
      await axios.post(
        `${backendURL}/api/auth/logout`,
        {},
        { withCredentials: true }
      );
      setIsLoggedIn(false);
      navigate("/");
    } catch (err) {
      console.error("Logout failed:", err);
      alert("Logout failed. Try again.");
    }
  };

  if (!isLoggedIn) return null;

  return (
    <div className="min-h-screen bg-[#FFFFF0] p-6 space-y-10">
      {/* Heading */}
      <div className="flex items-center justify-between max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900">
          Hello, {userData?.username || "User"}!
        </h1>
        <button
          onClick={handleLogout}
          className="flex items-center space-x-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
        >
          <LogOut size={16} />
          <span>Logout</span>
        </button>
      </div>

      {/* Contact Info */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 max-w-2xl mx-auto space-y-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900">Contact Information</h2>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
          >
            <Edit3 size={16} />
            <span>{isEditing ? "Cancel" : "Edit"}</span>
          </button>
        </div>

        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <Mail className="text-blue-500" size={20} />
            {isEditing ? (
              <input
                type="email"
                value={contactData.email}
                onChange={(e) => handleContactChange("email", e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <span className="text-gray-800">{contactData.email}</span>
            )}
          </div>

          <div className="flex items-center space-x-3">
            <Phone className="text-blue-500" size={20} />
            {isEditing ? (
              <input
                type="tel"
                value={contactData.phone}
                onChange={(e) => handleContactChange("phone", e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <span className="text-gray-800">{contactData.phone}</span>
            )}
          </div>

          <div className="flex items-start space-x-3">
            <MapPin className="text-blue-500 mt-1" size={20} />
            {isEditing ? (
              <textarea
                value={contactData.address}
                onChange={(e) => handleContactChange("address", e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                rows="3"
              />
            ) : (
              <span className="text-gray-800">{contactData.address}</span>
            )}
          </div>
        </div>

        {isEditing && (
          <button
            onClick={handleSaveContact}
            className="w-full mt-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-600 hover:to-blue-800 transition-all transform hover:-translate-y-1 flex items-center justify-center space-x-2"
          >
            <Save size={20} />
            <span>Save Changes</span>
          </button>
        )}
      </div>

      {/* Photo Gallery */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 max-w-2xl mx-auto space-y-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900">Photo Gallery</h2>
          <button
            onClick={() => widgetRef.current.open()}
            className="flex items-center space-x-2 px-4 py-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors"
          >
            <Upload size={16} />
            <span>Upload Photo</span>
          </button>
        </div>

        {/* Image Grid */}
        {images.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 mt-6">
            {images.map((image, index) => (
              <div key={index} className="relative group">
                <img
                  src={image.url}
                  alt={`Upload ${index + 1}`}
                  className="w-full h-32 object-cover rounded-lg"
                />
                <button
                  onClick={() => handleImageRemove(image.id)}
                  className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600"
                >
                  <X size={14} />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <Camera className="mx-auto text-gray-300 mb-3" size={48} />
            <p className="text-gray-500">No photos uploaded yet</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
