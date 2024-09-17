"use client";

import { useState, useEffect } from "react";
import {
  RiGraduationCapFill,
  RiCodeBoxFill,
  RiGithubFill,
  RiMickeyFill,
} from "react-icons/ri";
import { BsFillLightningChargeFill } from "react-icons/bs";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50); // Change when user scrolls more than 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`navbar fixed top-0 left-0 w-full flex items-center justify-around transition-colors duration-300 z-10 ${
        scrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <a
        href="#home"
        className="text-center text-2xl font-bold text-purple-900 hover:text-purple-600 transition-colors duration-200"
      >
        Riya Dev
      </a>
      <NavBarIcon
        icon={<RiMickeyFill size="24" />}
        text="About"
        link="#about"
      />
      <NavBarIcon
        icon={<RiGraduationCapFill size="24" />}
        text="Education"
        link="#education"
      />
      <NavBarIcon
        icon={<BsFillLightningChargeFill size="24" />}
        text="Skills"
        link="#skills"
      />
      <NavBarIcon
        icon={<RiCodeBoxFill size="24" />}
        text="Projects"
        link="#projects"
      />
      <NavBarIcon
        icon={<RiGithubFill size="24" />}
        text="Links"
        link="#links"
      />
    </div>
  );
};

const NavBarIcon = ({ icon, text, link }) => (
  <a
    href={link}
    className="flex flex-col items-center text-purple-900 hover:text-purple-600 transition-colors duration-200"
  >
    {icon}
    <span className="text-sm">{text}</span>
  </a>
);

export default NavBar;
