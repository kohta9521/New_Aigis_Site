import React from "react";

// components
import Logo from "../atoms/Logo";
import ListItem from "../atoms/ListItem";

const Header = () => {
  return (
    <div className="w-screen h-20">
      <div className="w-11/12 mx-auto h-full flex justify-between items-center">
        <Logo id="home" link="/" size="md" />
        <div className="hidden sm:flex sm:items-center sm:justify-between">
          <ListItem id="header-home" link="/" jaTitle="ホーム" enTitle="Home" />
          <ListItem
            id="header-about"
            link="#about"
            jaTitle="Aigisについて"
            enTitle="Introduction"
          />
          <ListItem
            id="header-philosophy"
            link="#philosophy"
            jaTitle="想い"
            enTitle="Philosophy"
          />
          <ListItem
            id="header-profile"
            link="#profile"
            jaTitle="プロフィール"
            enTitle="Profile"
          />
          <ListItem
            id="header-method"
            link="#method"
            jaTitle="メソッド"
            enTitle="Method"
          />
          <ListItem
            id="header-voice"
            link="#voice"
            jaTitle="クライアント様の声"
            enTitle="Client Voice"
          />
          <ListItem
            id="header-contact"
            link="#contact"
            jaTitle="お問い合わせ"
            enTitle="Contact"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
