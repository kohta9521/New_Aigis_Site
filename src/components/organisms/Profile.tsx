import React from "react";

// components

const Profile = () => {
  return (
    <div className="w-screen py-20 sm:py-36">
      <div className="w-11/12 sm:w-8/12 mx-auto h-full" id="profile">
        <h1 className="text-4xl mb-10 sm:text-4xl">PROFILE</h1>
        <div className="sm:flex sm:justify-between sm:items-center">
          <div className="sm:w-1/2">
            <p className="text-base font-medium font-serif leading-relaxed mb-10">
              幼少期から事業承継などの諸問題を間近で見てきて、
              <br />
              組織におけるトップ層の意識、在り方の重要性を認識。
              <br />
              大学卒業後、経営層向けメンタルケア企業にて従事。
              <br />
              <br />
              その後カウンセラーとして独立。
              <br />
              経営者から若年層まで、幅広く200人以上をカウンセリング。
              <br />
              また、マタニティジムや学習塾などと提携し、家庭内の親子関係を支援。
              <br />
              <br />
              その後、精神分析的療法に基づく独自のカウンセリング手法の確立に至る。
              <br />
            </p>
          </div>
          <div className="sm:w-auto">
            <img
              className="w-full h-auto"
              src="/images/profile.png"
              alt="profile-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
