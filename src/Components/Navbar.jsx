import React, { useState } from "react";
import { FaAlignRight } from "react-icons/fa6";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [active, setActive] = useState("Home"); // Default active link
  const [sidebar, setSidebar] = useState(false);

  const handleSidebar = () => {
    setSidebar(true);
  };

  return (
    <div className={`w-full flex justify-center items-center ${sidebar ? "overflow-hidden" : ""}`}>
      <div className="flex justify-between items-center w-[90%]">
        {/* Logo */}
        <div className="w-[100px]">
          <img src="/logow.png" alt="profile" />
        </div>

        {/* Navigation Links */}
        <div className="flex">
          <div
            className={`lg:hidden text-2xl cursor-pointer ${
              sidebar && "hidden"
            }`}
            onClick={handleSidebar}
          >
            <FaAlignRight />
          </div>
          <ul className="hidden lg:flex justify-center items-center text-lg">
            {["Home", "About", "Services","Projects","Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className={`px-4 py-1 mx-2 ${
                    active === item
                      ? "border-b-4 border-red-600 text-red-600"
                      : "hover:border-b-4 hover:border-red-600"
                  }`}
                  onClick={() => setActive(item)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Sidebar Component */}
        <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
      </div>
    </div>
  );
};

export default Navbar;
