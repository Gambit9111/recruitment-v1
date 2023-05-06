import React from 'react';

interface MenuButtonProps {
  menuOpen: boolean;
  toggleMenu: () => void;
}

const MenuButton: React.FC<MenuButtonProps> = ({ menuOpen, toggleMenu }) => {
  return (
    <button
    className="navigation-button mt-8 mr-8 z-10"
    onClick={toggleMenu}
  >
    {menuOpen ? (
      <p className="uppercase font-medium tracking-[0.1em] text-color-graylight">close</p>
    ) : (
      <p className="uppercase font-medium tracking-[0.1em] text-color-graylight">menu</p>
    )}
  </button>
  );
};

export default MenuButton;