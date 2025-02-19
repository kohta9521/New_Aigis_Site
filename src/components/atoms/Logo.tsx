import React from "react";

// next
import Link from "next/link";

// clsx
import clsx from "clsx";

// props
export type LogoProps = {
  id: string;
  link: string;
  size?: "sm" | "md" | "lg";
};

const Logo = ({ id, link, size = "md" }: LogoProps) => {
  return (
    <Link
      key={id}
      href={link}
      className={clsx("block text-[var(--main-green)] font-semibold", {
        "text-4xl": size === "lg",
        "text-3xl": size === "md",
        "text-2xl": size === "sm",
      })}
    >
      <p className="font-didot tracking-wide">Aigis</p>
    </Link>
  );
};

export default Logo;
