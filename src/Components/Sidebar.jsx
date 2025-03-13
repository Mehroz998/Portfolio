import React from "react";
import { RxCross2 } from "react-icons/rx";

const Sidebar = ({ sidebar, setSidebar }) => {
  const handleCross = () => {
    setSidebar(false);
  };

  return (
    <div
      className={`lg:hidden fixed top-0 right-0 h-full bg-red-500 shadow-lg transition-transform duration-300 ease-in-out transform overflow-auto z-10 ${
        sidebar ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Close Button (Aligned Properly) */}
      <div className="flex justify-end p-4">
        <button
          className="text-3xl text-white cursor-pointer"
          onClick={handleCross}
        >
          <RxCross2 />
        </button>
      </div>

      {/* Sidebar Menu */}
      <ul className="mx-[25px] mt-4">
        {["Home", "About","Services", "Projects", "Contact"].map((item) => (
          <a href={`#${item}`}><li
            key={item}
            className="m-4 px-2 pt-4 text-center text-white text-lg hover:border-b-4 hover:border-white cursor-pointer transition-all duration-200"
            onClick={handleCross}
          >
            {item}
          </li></a>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
