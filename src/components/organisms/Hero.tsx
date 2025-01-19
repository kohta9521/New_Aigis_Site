import React from "react";

const Hero = () => {
  return (
    <div className="w-screen h-[calc(100vh-80px)] relative flex flex-col justify-between">
      {/* title center */}
      <div className="absolute top-1/2 left-10 transform -translate-y-1/2">
        <h1 className="text-3xl sm:text-5xl">Solitudeを力に</h1>
      </div>
      {/* right bottom */}
      <div className="absolute bottom-3 right-2 text-right sm:bottom-6 sm:right-7">
        <h2 className="text-right text-xs sm:text-lg">
          本来のあなたを最大限発揮するための心理分析カウンセリング
        </h2>
        <p className="text-xs text-[var(--main-green)] sm:text-sm">
          Psychoanalytic counseling to maximize your true self
        </p>
      </div>
    </div>
  );
};

export default Hero;
