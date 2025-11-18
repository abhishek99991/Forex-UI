import React from "react";
import { MenuIcon, FilterIcon } from "./Icons";
import { FaFilter } from "react-icons/fa";

const Header: React.FC = () => {
  return (
    <header className="flex-shrink-0 flex items-center justify-between p-4">
      <button className="text-gray-400 hover:text-white">
        <MenuIcon className="w-6 h-6" />
      </button>
      <div className="text-center"></div>
      <button className="text-gray-400 hover:text-white">
        <FaFilter />
      </button>
    </header>
  );
};

export default Header;
