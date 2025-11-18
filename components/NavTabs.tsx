import React, { useState } from "react";

const NavTabs = () => {
  const tabs = ["Favourites", "Forex", "Crypto", "Indices", "Derivatives"];
  const [activeTab, setActiveTab] = useState("Forex");

  return (
    <nav className="flex-shrink-0 px-4 border-b border-gray-800">
      <div className="flex justify-between overflow-x-auto whitespace-nowrap -mb-px">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-3 text-sm font-medium transition-colors duration-200 ease-in-out ${
              activeTab === tab
                ? "text-white border-b-2 border-white"
                : "text-gray-500 hover:text-white"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default NavTabs;
