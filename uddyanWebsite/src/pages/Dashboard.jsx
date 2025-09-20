import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Camera, Save, User, Mail, Phone, MapPin, Edit3, LogOut } from "lucide-react";
import { AppContent } from "../context/AppContext"; // adjust path
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { isLoggedIn, userData, setIsLoggedIn } = useContext(AppContent); // added setter for logout
  const backendURL = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();

  const [contactData, setContactData] = useState({
    email: "",
    phone: "",
    address: ""
  });
  const [isEditing, setIsEditing] = useState(false);
  const [images, setImages] = useState([]);
  const [newImage, setNewImage] = useState(null);

  // Fetch contact info from backend on mount
  useEffect(() => {
    if (!isLoggedIn) return; // skip fetching if not logged in

    axios
      .get(`${backendURL}/api/contact`, { withCredentials: true })
      .then((res) => {
        if (res.data) {
          setContactData({
            email: res.data.email || "",
            phone: res.data.contact || "",
            address: res.data.address || ""
          });
        }
      })
      .catch((err) => console.error(err));
  }, [isLoggedIn]);

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
          address: contactData.address
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

  // Image handling remains local state for now
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setNewImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };
  const handleAddImage = () => {
    if (newImage) {
      setImages((prev) => [...prev, newImage]);
      setNewImage(null);
    }
  };

  // Logout function
  const handleLogout = async () => {
    try {
      await axios.post(`${backendURL}/api/auth/logout`, {}, { withCredentials: true });
      setIsLoggedIn(false); // update context
      navigate("/"); // redirect to homepage
    } catch (err) {
      console.error("Logout failed:", err);
      alert("Logout failed. Try again.");
    }
  };

  // Render nothing if not logged in
  if (!isLoggedIn) return null;

  return (
    <div className="min-h-screen bg-[#FFFFF0] p-6 space-y-10">
      {/* Personalized heading using username */}
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

      {/* Gallery section (images) remains unchanged */}
    </div>
  );
};

export default Dashboard;
