"use client";
import React, { useState } from "react";
import NavLink from "./NavLink";

const DropDownMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="md:hidden relative">
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="flex flex-col gap-1 p-1 cursor-pointer"
        suppressHydrationWarning={true} 
      >
        <span className="block w-5 h-0.5 bg-gray-700"></span>
        <span className="block w-5 h-0.5 bg-gray-700"></span>
        <span className="block w-5 h-0.5 bg-gray-700"></span>
      </button>

      {menuOpen && (
        <ul className="absolute top-full left-0 mt-2 w-44 bg-gray-300 border border-gray-500 rounded-md shadow-lg z-500">
          <li className="border-b border-gray-700">
            <NavLink href={"/"} onClick={() => setMenuOpen(false)}>
              <span className="block px-4 py-3 text-sm text-gray-900 hover:bg-purple-500/20">
                Home
              </span>
            </NavLink>
          </li>
          <li className="border-b border-gray-700">
            <NavLink href={"/alltiles"} onClick={() => setMenuOpen(false)}>
              <span className="block px-4 py-3 text-sm text-gray-900 hover:bg-purple-500/20">
                All Tiles
              </span>
            </NavLink>
          </li>
          <li className="border-b border-gray-700">
            <NavLink href={"/tiles-cart"} onClick={() => setMenuOpen(false)}>
              <span className="block px-4 py-3 text-sm text-gray-900 hover:bg-purple-500/20">
                Tiles Cart
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink href={"/profile"} onClick={() => setMenuOpen(false)}>
              <span className="block px-4 py-3 text-sm text-gray-900 hover:bg-purple-500/20">
                Profile
              </span>
            </NavLink>
          </li>
        </ul>
      )}
    </div>
  );
};

export default DropDownMenu;