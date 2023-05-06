"use client"
import React, { useState } from "react";

import Logo from "../brand/Logo";
import MenuButton from "./MenuButton";
import MenuDropdown from "./MenuDropdown";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
    <header className="h-full bg-blue-700/50 flex justify-between items-start">
      <Logo />
      <MenuButton menuOpen={menuOpen} toggleMenu={toggleMenu} />
    </header>
    <MenuDropdown menuOpen={menuOpen} />
    </>
  );
};

export default Navbar;