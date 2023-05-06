// src/components/MenuDropdown.tsx
import React from 'react';

import BigLogo from '../brand/BigLogo';

interface MenuDropdownProps {
  menuOpen: boolean;
}

const MenuDropdown: React.FC<MenuDropdownProps> = ({ menuOpen }) => {
  return (
    <>
    {menuOpen ? (
        <nav className="uppercase font-medium tracking-[0.1em] text-color-graylight w-full absolute top-0 left-0 h-screen bg-yellow-700 pt-8 pl-8">
          <button className='mb-12 w-36 h-8 bg-slate-950 active:bg-slate-700 rounded-full uppercase font-medium tracking-[0.1em] text-color-graylight navigation-button'>
            Contact Us
          </button>
          <ul className="flex flex-col gap-6 bg-green-700/30">
            <li>
              <a href="#home" className="hover:text-yellow-400">
                Recruitment Services
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-yellow-400">
                Case Studies
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-yellow-400">
                Customers
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow-400">
                Our Team
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow-400">
                Pricing
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow-400">
                Blog
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow-400">
                En
              </a>
            </li>
            <BigLogo />
          </ul>
        </nav>
    ) : null}
    </>
  );
};

export default MenuDropdown;


{/* <div
  className={`${
    menuOpen ? "absolute" : "hidden"
  } w-full bg-red-500 top-0 left-0 h-screen`}
  >
  <nav className="text-2xl text-white">
    <ul className="space-y-4">
      <li>
        <a href="#home" className="hover:text-yellow-400">
          Home
        </a>
      </li>
      <li>
        <a href="#about" className="hover:text-yellow-400">
          About
        </a>
      </li>
      <li>
        <a href="#services" className="hover:text-yellow-400">
          Services
        </a>
      </li>
      <li>
        <a href="#contact" className="hover:text-yellow-400">
          Contact
        </a>
      </li>
    </ul>
  </nav>
</div> */}