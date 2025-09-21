import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AppContent } from "../context/AppContext"; // adjust path

const LoginPage = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn, getUserData } = useContext(AppContent);
   const backendURL = import.meta.env.VITE_API_URL;

  const [formData, setFormData] = useState({ username: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [focusedField, setFocusedField] = useState("");

  // Handle input changes
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);

    if (!formData.username || !formData.password) {
      setMessage({ type: "error", text: "Please fill in all fields." });
      return;
    }

    setIsLoading(true);

    try {
      const response = await axios.post(
        `${backendURL}/api/auth/login`,
        formData,
        { withCredentials: true } // important for cookie-based auth
      );

      console.log("Login response:", response.data);

      // Check backend success
      if (response.data.success || response.status === 200) {
        setIsLoggedIn(true);
        await getUserData();
        navigate("/dashboard");
      } else {
        alert(response.data.message || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      const errorMessage =
        error.response?.data?.message || error.message || "An unknown error occurred.";
      setMessage({ type: "error", text: errorMessage });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#D0EBFF] font-sans flex items-center justify-center p-4 relative overflow-hidden">
      <div className="relative bg-[#FFFFF0] bg-opacity-95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl w-full max-w-md transform transition-all duration-500 hover:scale-105">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg transform transition-transform duration-300 hover:rotate-12">
            <img
              src="/uddyanLogo.jpeg"
              alt="UDDYAN Logo"
              className="w-12 h-12 object-contain"
            />
          </div>
          <h1 className="text-3xl font-bold text-blue-600 mb-2 tracking-tight">UDDYAN</h1>
          <p className="text-gray-600 italic text-sm">
            "Fly High with Your Imagination & Creativity"
          </p>
        </div>

        {message && (
          <div
            className={`p-4 mb-4 rounded-xl text-center transition-all duration-300 ease-in-out ${
              message.type === "success"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div
            className={`transform transition-transform duration-300 ${
              focusedField === "username" ? "-translate-y-1" : ""
            }`}
          >
            <label htmlFor="username" className="block text-sm font-semibold text-gray-700 mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              onFocus={() => setFocusedField("username")}
              onBlur={() => setFocusedField("")}
              className="w-full px-4 py-3 bg-gray-50 border-2 border-blue-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all duration-300 hover:border-blue-300"
              placeholder="Enter your username"
              required
            />
          </div>

          <div
            className={`transform transition-transform duration-300 ${
              focusedField === "password" ? "-translate-y-1" : ""
            }`}
          >
            <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              onFocus={() => setFocusedField("password")}
              onBlur={() => setFocusedField("")}
              className="w-full px-4 py-3 bg-gray-50 border-2 border-blue-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all duration-300 hover:border-blue-300"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300 ${
              isLoading ? "opacity-70 cursor-not-allowed" : "hover:from-blue-600 hover:to-blue-800"
            }`}
          >
            <span className="flex items-center justify-center">
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Signing In...
                </>
              ) : (
                "SIGN IN TO LAB"
              )}
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
