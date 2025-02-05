import React from "react";

import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <div className="w-screen h-[calc(100vh-80px)] flex flex-col justify-between">
      {/* title center */}
      <div className="absolute top-1/2 text-center w-full">
        <h1 className="text-4xl sm:text-6xl font-serif">Solitudeを力に</h1>
        <p className="text-xs sm:text-lg font-noto text-[var(--main-green)]">
          本来のあなたを最大限発揮するための心理分析カウンセリング
        </p>
      </div>
      <div className="absolute bottom-2 w-full flex justify-center items-center">
        <div className="flex flex-col items-center">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-2 sm:text-sm">
            scroll
          </p>
          <ChevronDown
            className="w-8 h-8 text-[var(--main-text-green)] animate-bounce"
            strokeWidth={2}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
