import React, { useEffect, useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import axios from "axios";

export default function ContactUs() {
  const [contactData, setContactData] = useState({
    email: "",
    phone: "",
    address: ""
  });

  const backendURL = import.meta.env.VITE_BACKEND_URL;

  // Fetch contact info from backend
  useEffect(() => {
    axios
      .get(`${backendURL}/api/contact`)
      .then((res) => {
        if (res.data) {
          setContactData({
            email: res.data.email || "",
            phone: res.data.contact || "",
            address: res.data.address || ""
          });
        }
      })
      .catch((err) => console.error("Failed to fetch contact info:", err));
  }, []);

  return (
    <div className="bg-[#FFFDEB] min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-10 py-16">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-6 sm:p-10 transition-all transform hover:scale-[1.02] hover:shadow-2xl duration-500 animate-pulse-once">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#007FFF] text-center mb-8 animate-bounce-in">
          Contact Us
        </h1>

        <div className="space-y-6 text-gray-800">
          {/* Address */}
          <div className="flex flex-col sm:flex-row items-start gap-4 p-4 rounded-lg hover:bg-yellow-100 transition-all duration-300 hover:translate-x-2 hover:shadow-md group animate-slide-in-left">
            <MapPin className="w-6 h-6 text-[#007FFF] flex-shrink-0 group-hover:scale-110 transition-transform duration-300 group-hover:rotate-12" />
            <div>
              <h2 className="font-semibold text-lg group-hover:text-[#007FFF] transition-colors duration-300">
                Address
              </h2>
              <p className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                {contactData.address || "Loading..."}
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex flex-col sm:flex-row items-start gap-4 p-4 rounded-lg hover:bg-yellow-100 transition-all duration-300 hover:translate-x-2 hover:shadow-md group animate-slide-in-right">
            <Phone className="w-6 h-6 text-[#007FFF] flex-shrink-0 group-hover:scale-110 transition-transform duration-300 group-hover:rotate-12" />
            <div>
              <h2 className="font-semibold text-lg group-hover:text-[#007FFF] transition-colors duration-300">
                Contact
              </h2>
              <p className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                {contactData.phone || "Loading..."}
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex flex-col sm:flex-row items-start gap-4 p-4 rounded-lg hover:bg-yellow-100 transition-all duration-300 hover:translate-x-2 hover:shadow-md group animate-slide-in-left">
            <Mail className="w-6 h-6 text-[#007FFF] flex-shrink-0 group-hover:scale-110 transition-transform duration-300 group-hover:rotate-12" />
            <div>
              <h2 className="font-semibold text-lg group-hover:text-[#007FFF] transition-colors duration-300">
                Email
              </h2>
              <a
                href={`mailto:${contactData.email}`}
                className="text-gray-700 hover:text-[#007FFF] transition-colors duration-300 hover:underline decoration-2 underline-offset-2 break-words"
              >
                {contactData.email || "Loading..."}
              </a>
            </div>
          </div>

          {/* Working Hours */}
          <div className="flex flex-col sm:flex-row items-start gap-4 p-4 rounded-lg hover:bg-yellow-100 transition-all duration-300 hover:translate-x-2 hover:shadow-md group animate-slide-in-left">
            <Clock className="w-6 h-6 text-[#007FFF] flex-shrink-0 group-hover:scale-110 transition-transform duration-300 group-hover:rotate-12" />
            <div>
              <h2 className="font-semibold text-lg group-hover:text-[#007FFF] transition-colors duration-300">
                Working Hours
              </h2>
              <p className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                Mon – Fri: 9:00 AM – 6:00 PM <br />
                Sat: 10:00 AM – 2:00 PM <br />
                Sun: Closed
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes bounce-in {
          0% {
            transform: translateY(-20px);
            opacity: 0;
          }
          50% {
            transform: translateY(5px);
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes slide-in-left {
          0% {
            transform: translateX(-30px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slide-in-right {
          0% {
            transform: translateX(30px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes pulse-once {
          0% {
            transform: scale(0.95);
            opacity: 0.8;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-bounce-in {
          animation: bounce-in 0.8s ease-out;
        }
        .animate-slide-in-left {
          animation: slide-in-left 0.6s ease-out 0.2s both;
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.6s ease-out 0.4s both;
        }
        .animate-slide-in-left:last-child {
          animation-delay: 0.6s;
        }
        .animate-pulse-once {
          animation: pulse-once 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}
