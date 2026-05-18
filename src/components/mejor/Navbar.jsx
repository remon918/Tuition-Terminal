"use client";

import React from "react";
import DropDownMenu from "../minor/DropDownMenu";
import Link from "next/link";
import NavLink from "../minor/NavLink";
import Image from "next/image";
import avatar from "@/assets/user.png";

const Navbar = () => {
  return (
    <div className="pb-2 shadow-sm relative z-999999">
     <div className="flex justify-between items-center w-[97%] mx-auto lg:w-[85%] md:w-[90%] mt-2 p-3 rounded-2xl border border-white/40 bg-linear-to-r from-[#e9f6f3] to-[#eff8fbc5]  shadow-md relative z-999999 overflow-visible">
        <div className="flex items-center gap-1">
          <DropDownMenu />

          <h2 className="font-semibold text-lg md:font-bold text-blue-400  rounded-md md:text-2xl">
            <Link href="/">
              Tuition Terminal
            </Link>
          </h2>
        </div>
        <ul className="gap-7 lg:gap-7 md:gap-2 font-medium text-gray-700 md:flex hidden text-center">
          <li className="hover:bg-gray-200 p-1">
            <NavLink href={"/"}>Home</NavLink>
          </li>
          <li className="hover:bg-gray-200 p-1">
            <NavLink href={"/tutors"}>Tutors</NavLink>
          </li>
          <li className="hover:bg-gray-200 p-1">
            <NavLink href={"/tiles-cart"}>Services</NavLink>
          </li>
          <li className="hover:bg-gray-200 p-1">
            <NavLink href={"/profile"}>About</NavLink>
          </li>
          <li className="hover:bg-gray-200 p-1">
            <NavLink href={"/profile"}>Contact</NavLink>
          </li>
        </ul>

        <div className="flex justify-center items-center md:gap-3 gap-1">
          
            <div className="flex gap-1 md:gap-2 items-center">
              <Link href={"/profile"}>
                <Image
                  className="mx-auto rounded-full mr-0.5 md:mr-1 "
                  src={avatar}
                  width={32}
                  height={30}
                  alt="avatar"
                />
              </Link>
              <button
                suppressHydrationWarning={true}
                className="btn bg-red-500 hover:bg-red-400 text-white md:px-4 px-1 text-sm"
              >
                Logout
              </button>
            </div>
         
            <div className="flex items-center gap-1 md:gap-3">
              <Image
                className="mr-0.5 md:mr-1 "
                src={avatar}
                width={30}
                height={15}
                alt="avatar"
              />
              <Link
                href={"/signup"}
                className="btn text-sm bg-blue-500 text-white font-semibold p-1.5 md:p-2 md:px-6 rounded-md hover:bg-blue-400"
              >
                Sign Up
              </Link>
              <Link
                href={"/login"}
                className="btn bg-purple-500 text-white p-1.5 md:p-2 md:px-6 text-sm font-semibold rounded-md hover:bg-purple-400"
              >
                Login
              </Link>
            </div>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
