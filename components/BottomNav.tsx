import React, { useState } from "react";
import { HomeIcon, TradeIcon, HistoryIcon, ProfileIcon } from "./Icons";

interface NavItemProps {
  key?: React.Key;
  icon: React.ElementType;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

function NavItem({ icon: Icon, label, isActive, onClick }: NavItemProps) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center w-full pt-2 pb-1 transition-colors duration-200 ease-in-out ${
        isActive ? "text-yellow-400" : "text-gray-500 hover:text-white"
      }`}
    >
      <Icon className="w-6 h-6 mb-1" />
      <span className="text-xs font-medium">{label}</span>
    </button>
  );
}

function BottomNav() {
  const [activeItem, setActiveItem] = useState("Home");

  const navItems = [
    { label: "Home", icon: HomeIcon },
    { label: "Trade", icon: TradeIcon },
    { label: "History", icon: HistoryIcon },
    { label: "Profile", icon: ProfileIcon },
  ];

  return (
    <footer className="flex-shrink-0 bg-[#1A1A1A] border-t border-gray-800">
      <div className="flex justify-around">
        {navItems.map((item) => (
          <NavItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            isActive={activeItem === item.label}
            onClick={() => setActiveItem(item.label)}
          />
        ))}
      </div>
    </footer>
  );
}

export default BottomNav;
