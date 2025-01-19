import React from "react";

// components

const Profile = () => {
  return (
    <div className="w-screen py-24 sm:py-36">
      <div className="w-11/12 mx-auto h-full">
        <h1 className="text-4xl mb-1 sm:text-7xl">Profile</h1>
        <p className="text-base mb-8 font-semibold text-[var(--main-green)] sm:mb-20">
          立石真澄について
        </p>
        <div className="block sm:flex">
          <img
            className="block w-full h-auto mx-auto mb-8 sm:w-60 sm:bg-red-400"
            src="/images/sea1.png"
            alt="プロフィール画像"
          />
          <p className="text-base sm:text-xl sm:w-2/5">
            幼少期から事業承継などの諸問題を真近で見てきたことから、
            組織におけるトップ層の意識、在り方の重要性を認識。
            大学卒業後、経営層向けメンタルケア企業にて従事。
            <br />
            <br />
            その後カウンセラーとして独立。
            <br />
            上場企業経営者から若年層まで、幅広く200人以上をカウンセリング。
            また、マタニティジムや学習塾などと提携し、家庭内の親子関係を支援。
            <br />
            <br />
            その後、精神分析的療法に基づく独自のカウンセリング手法の確立に至る。
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
