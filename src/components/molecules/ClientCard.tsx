"use client";
import React, { useState, useEffect } from "react";

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

  // ポップアップが開いた際に背景スクロールを無効化
  useEffect(() => {
    if (isPopupOpen) {
      document.body.style.overflow = "hidden"; // スクロールを無効化
    } else {
      document.body.style.overflow = "auto"; // 元に戻す
    }

    return () => {
      document.body.style.overflow = "auto"; // コンポーネントがアンマウントされたら元に戻す
    };
  }, [isPopupOpen]);

  return (
    <>
      {/* Card */}
      <div
        key={id}
        className="relative w-full h-auto max-w-md pt-10 pb-6 px-6 border border-gray-00 mb-5 bg-white shadow-lg rounded-lg group cursor-pointer hover:shadow-xl transition-shadow sm:w-5/12 sm:max-w-none"
        onClick={togglePopup}
      >
        <h2 className="text-xl font-semibold text-gray-800 mb-6">{title}</h2>
        <p className="text-sm font-serif text-gray-600 line-clamp-2 relative overflow-hidden h-auto min-h-28">
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

      {/* 📌 Popup (ポップアップの背景スクロールを防ぐ) */}
      {isPopupOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
          onClick={togglePopup}
        >
          <div
            key={id}
            className="relative w-11/12 max-w-lg max-h-[95vh] bg-white p-6 rounded-lg shadow-lg overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-6 text-xl right-4 text-gray-500 hover:text-red-600"
              onClick={togglePopup}
            >
              ✕
            </button>
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              {title}
            </h2>
            <p className="text-gray-700 mb-4 font-serif">{desc}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ClientCard;
