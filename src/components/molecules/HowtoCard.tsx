"use client";

import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

type HowtoCardProps = {
  id: string;
  title: string;
  text1: string;
  text2: string;
  text3: string;
  subText: string;
  caseText: string;
};

const HowtoCard: React.FC<HowtoCardProps> = ({
  id,
  title,
  text1,
  text2,
  text3,
  subText,
  caseText,
}) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => setIsPopupOpen(!isPopupOpen);

  // Case の上2行のみを取得し、それ以降を隠す
  const caseLines = caseText.split("\n");
  const visibleText = caseLines.slice(0, 2).join("\n"); // 上2行のみ
  const hiddenText = caseLines.slice(2).join("\n"); // 3行目以降を隠す

  return (
    <>
      {/* Card */}
      <div
        key={id}
        className="relative w-full h-auto max-w-md pt-10 pb-6 px-6 bg-white shadow-lg rounded-lg group hover:shadow-xl transition-shadow sm:w-[30%]"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
        <p className="text-gray-700 mb-2">{text1}</p>
        <p className="text-gray-700 mb-2">{text2}</p>
        <p className="text-gray-700 mb-4">{text3}</p>
        <div className="w-full flex justify-center mb-3">
          <IoIosArrowDown className="text-2xl" />
        </div>
        <div className="p-3 bg-gray-300 rounded-md mb-5">
          <p className="text-gray-700">{subText}</p>
        </div>

        <h2 className="text-2xl font-semibold">Case</h2>

        {/* Case の上2行のみ表示し、それ以降をグラデーションで隠す */}
        <div className="relative overflow-hidden max-h-16">
          <p className="text-gray-700 whitespace-pre-line">{visibleText}</p>
          {hiddenText && (
            <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-b from-transparent to-white pointer-events-none"></div>
          )}
        </div>

        {/* Read More ボタン (hiddenText がある場合のみ表示) */}
        {hiddenText && (
          <button
            onClick={togglePopup}
            className="text-sm font-medium text-blue-600 underline hover:text-blue-800 block mt-2"
          >
            Read More
          </button>
        )}
      </div>

      {/* Popup (Read More を押すと開く) */}
      {isPopupOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
          onClick={togglePopup}
        >
          <div
            className="relative w-11/12 max-w-lg bg-white p-6 rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-red-600"
              onClick={togglePopup}
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{title}</h2>
            <p className="text-gray-700 mb-2">{text1}</p>
            <p className="text-gray-700 mb-2">{text2}</p>
            <p className="text-gray-700 mb-4">{text3}</p>

            <div className="p-3 bg-gray-300 rounded-md mb-5">
              <p className="text-gray-700">{subText}</p>
            </div>

            <h2 className="text-2xl font-semibold">Case</h2>
            <p className="text-gray-700 whitespace-pre-line">{caseText}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default HowtoCard;
