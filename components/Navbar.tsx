import Image from "next/image";
import Link from "next/link";
import React from "react";

const navIcons = [
  {
    icon: "/search.svg",
    alt: "search",
  },
  {
    icon: "/heart.svg",
    alt: "heart",
  },
  {
    icon: "/user.svg",
    alt: "user",
  },
];

const Navbar = () => {
  return (
    <div className="w-full">
      <nav className="nav">
        <Link href={"/"} className="flex items-center gap-1">
          <Image src={"/logo.svg"} alt="logo" width={27} height={27} />
          <p className="nav-logo">
            Price<span className="text-primary">Wise</span>
          </p>
        </Link>
        <div className="flex item-center gap-5"></div>
      </nav>
    </div>
  );
};

export default Navbar;
