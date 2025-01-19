import React from "react";

const About = () => {
  return (
    <div className="w-11/12 mx-auto py-24 sm:py-36">
      <h1 className="text-4xl mb-1 sm:text-7xl">Introduction</h1>
      <p className="text-base mb-8 font-semibold text-[var(--main-green)] sm:text-2xl sm:mb-20">
        はじめに
      </p>
      <p className="text-base sm:text-xl">
        Aigisのカウンセリングは、「優しく癒す」でも「心が疲れた時のお悩み相談」でもありません。
        <br />
        科学的手法を基に、勇気と覚悟を持って自身の
        <span className="text-[var(--main-green)]">Solitude</span>と
        <span className="text-[var(--main-green)]">潜在能力</span>
        にアプローチし、人生を変容させるものです。
        <br />
        <br />
        この意識へのアプローチを軸に、さらに身体、食事などのサポートも取り入れ、
        全方向からオーダーメイドで、あなたを最高の状態にするものです。
      </p>
      {/* <div className="w-full h-72">
        <img
          className="w-full h-auto"
          src="/images/sea1.png"
          alt="about-section-right-iamge"
        />
      </div> */}
    </div>
  );
};

export default About;
