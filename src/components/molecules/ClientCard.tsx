"use client";
import React, { useState } from "react";

// props
export type ClientCardProps = {
  id: string;
  title: string;
  desc: string;
};

const ClientCard = ({ id, title, desc }: ClientCardProps) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  // Toggle Popup
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  return (
    <>
      {/* Card */}
      <div
        key={id}
        className="relative w-full h-auto max-w-md pt-10 pb-6 px-6 border border-gray-00 mb-5 bg-white shadow-lg rounded-lg group cursor-pointer hover:shadow-xl transition-shadow sm:w-5/12 sm:max-w-none"
        onClick={togglePopup}
      >
        <h2 className="text-xl  font-semibold text-gray-800 mb-6">{title}</h2>
        <p className="text-sm text-gray-600 line-clamp-2 relative overflow-hidden h-auto min-h-28 font-mono">
          {desc}
          {/* Gradient effect */}
          <span className="absolute inset-0 bg-gradient-to-b from-transparent to-white pointer-events-none" />
        </p>
        <div className="flex justify-end mt-4">
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevent card click
              togglePopup();
            }}
            className="text-sm font-medium text-blue-600 underline hover:text-blue-800"
          >
            View More
          </button>
        </div>
      </div>
      {isPopupOpen && (
        <div
          className="fixed inset-0 z-50 flex  overflow-scroll items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
          onClick={togglePopup}
        >
          <div
            key={id}
            className="relative w-11/12 max-w-lg bg-white p-6 rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-red-600"
              onClick={togglePopup}
            >
              ✕
            </button>
            <h2 className="text-xl  font-semibold text-gray-800 mb-6">
              {title}
            </h2>
            <p className="text-gray-700 mb-4 font-mono">{desc}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ClientCard;
