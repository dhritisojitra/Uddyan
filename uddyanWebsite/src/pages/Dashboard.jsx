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
  const backendURL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  const [contactData, setContactData] = useState({
    email: "",
    phone: "",
    address: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

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

  // Fetch all images
  useEffect(() => {
    const fetchImages = async () => {
      try {
        
        const backendURL = import.meta.env.VITE_BACKEND_URL;
        const res = await axios.get(`${backendURL}/api/uploads/all`, {
          withCredentials: true,
        });

        console.log("Fetched images:", res.data);

        // Map backend images to { src, alt } format expected in your gallery
        const fetchedImages = res.data.map((img, index) => ({
          src: img.url,
          alt: `Upload ${index + 1}`,
          id: img._id,
        }));

        setImages(fetchedImages);
      } catch (err) {
        console.error("Failed to fetch images:", err);
      }
    };

    fetchImages();
  }, []);

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
          try {
            const res = await axios.post(`${backendURL}/api/images/save`, {
              url: secure_url,
              public_id,
            });
            setImages((prev) => [...prev, res.data.image]);
            alert("✅ Photo uploaded successfully!");
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
      console.log("Deleting image with ID:", imageId);
      await axios.delete(`${backendURL}/api/images/${imageId}`, {
        withCredentials: true,
      });
      setImages((prev) => prev.filter((img) => img.id !== imageId));
    } catch (err) {
      console.error("Failed to delete image:", err);
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
    <div className="min-h-screen bg-[#FFFFF0]">
      {/* Header */}
      <div className="relative bg-white shadow-sm border-b border-slate-200">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Welcome back, {userData?.username || "User"}
            </h1>
            <p className="text-slate-600 mt-2 text-lg">Manage your profile and gallery</p>
          </div>
          <button
            onClick={handleLogout}
            className="group flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl hover:from-red-600 hover:to-red-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-red-500/25"
          >
            <LogOut size={18} className="group-hover:rotate-12 transition-transform duration-200" />
            <span className="font-medium">Sign Out</span>
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
        {/* Contact Info Card */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 overflow-hidden">
          <div className="bg-[#6baadb] px-8 py-6 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <Mail className="text-white" size={20} />
              </div>
              <h2 className="text-2xl font-bold text-white">Contact Information</h2>
            </div>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="group flex items-center space-x-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-all duration-200 border border-white/20"
            >
              <Edit3 size={16} className="group-hover:rotate-12 transition-transform duration-200" />
              <span className="font-medium">{isEditing ? "Cancel" : "Edit Details"}</span>
            </button>
          </div>

          <div className="p-8 space-y-6">
            <div className="grid gap-6">
              {/* Email */}
              <div className="group">
                <label className="flex items-center space-x-3 text-sm font-medium text-slate-700 mb-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Mail className="text-white" size={16} />
                  </div>
                  <span>Email Address</span>
                </label>
                {isEditing ? (
                  <input
                    type="email"
                    value={contactData.email}
                    onChange={(e) => handleContactChange("email", e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-slate-50 focus:bg-white"
                    placeholder="Enter your email address"
                  />
                ) : (
                  <div className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-800 font-medium">
                    {contactData.email || "No email provided"}
                  </div>
                )}
              </div>

              {/* Phone */}
              <div className="group">
                <label className="flex items-center space-x-3 text-sm font-medium text-slate-700 mb-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                    <Phone className="text-white" size={16} />
                  </div>
                  <span>Phone Number</span>
                </label>
                {isEditing ? (
                  <input
                    type="tel"
                    value={contactData.phone}
                    onChange={(e) => handleContactChange("phone", e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-slate-50 focus:bg-white"
                    placeholder="Enter your phone number"
                  />
                ) : (
                  <div className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-800 font-medium">
                    {contactData.phone || "No phone number provided"}
                  </div>
                )}
              </div>

              {/* Address */}
              <div className="group">
                <label className="flex items-center space-x-3 text-sm font-medium text-slate-700 mb-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <MapPin className="text-white" size={16} />
                  </div>
                  <span>Address</span>
                </label>
                {isEditing ? (
                  <textarea
                    value={contactData.address}
                    onChange={(e) => handleContactChange("address", e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-slate-50 focus:bg-white resize-none"
                    rows="3"
                    placeholder="Enter your address"
                  />
                ) : (
                  <div className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 text-slate-800 font-medium min-h-[80px]">
                    {contactData.address || "No address provided"}
                  </div>
                )}
              </div>
            </div>

            {isEditing && (
              <button
                onClick={handleSaveContact}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-4 px-6 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-blue-500/25 flex items-center justify-center space-x-3"
              >
                <Save size={20} />
                <span>Save Changes</span>
              </button>
            )}
          </div>
        </div>

        {/* Photo Gallery Card */}
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 overflow-hidden">
          <div className="bg-[#6baadb] px-8 py-6 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <Camera className="text-white" size={20} />
              </div>
              <h2 className="text-2xl font-bold text-white">Photo Gallery</h2>
            </div>
            <button
              onClick={() => widgetRef.current.open()}
              className="group flex items-center space-x-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-all duration-200 border border-white/20"
            >
              <Upload size={16} className="group-hover:-translate-y-0.5 transition-transform duration-200" />
              <span className="font-medium">Upload Photo</span>
            </button>
          </div>

          <div className="p-8">
            {images.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map((image, index) => (
                  <div
                    key={index} // use index as key
                    className="group relative overflow-hidden rounded-xl bg-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    <img
                    src={image.src}
                    alt={image.alt}
                    
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    <button
                      onClick={() => handleImageRemove(image.id)}
                      className="absolute top-3 right-3 bg-red-500 text-white rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-red-600 hover:scale-110 shadow-lg"
                    >
                      <X size={16} />
                    </button>
                    <div className="absolute bottom-3 left-3 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300">
                      Photo {index + 1}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="w-20 h-20 bg-gradient-to-r from-slate-200 to-slate-300 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Camera className="text-slate-500" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-slate-700 mb-2">No photos yet</h3>
                <p className="text-slate-500 mb-6">Start building your gallery by uploading your first photo</p>
                <button
                  onClick={() => widgetRef.current.open()}
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl hover:from-emerald-700 hover:to-teal-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/25"
                >
                  <Upload size={18} />
                  <span className="font-medium">Upload Your First Photo</span>
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
