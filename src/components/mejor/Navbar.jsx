"use client";

import React from "react";
import DropDownMenu from "../minor/DropDownMenu";
import Link from "next/link";
import NavLink from "../minor/NavLink";
import Image from "next/image";
import avatar from "@/assets/user.png";
import { signOut, useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  const { data: session, isPending } = useSession();

  const handleLogout = async () => {
    await signOut();

    router.refresh();
    router.push("/");
  };

  // MENU ITEMS
  const loggedInMenus = [
    { name: "Home", href: "/", icon: "🏠" },
    { name: "Tutors", href: "/tutors", icon: "👨‍🏫" },
    { name: "Add Tutors", href: "/add-tutors", icon: "➕" },
    { name: "My Tutors", href: "/my-tutors", icon: "📚" },
    {
      name: "My Booked Session",
      href: "/my-booked-session",
      icon: "📅",
    },
  ];

  const loggedOutMenus = [
    { name: "Home", href: "/", icon: "🏠" },
    { name: "Tutors", href: "/tutors", icon: "👨‍🏫" },
    { name: "Services", href: "/services", icon: "✨" },
    { name: "About", href: "/about", icon: "ℹ️" },
    { name: "Contact", href: "/contact", icon: "📩" },
  ];

  const menus = session?.user ? loggedInMenus : loggedOutMenus;

  return (
    <div className="relative z-999999 pb-2">
      <div className="mx-auto mt-2 flex w-[97%] items-center justify-between overflow-visible rounded-2xl border border-base-300 bg-base-100/80 p-3 shadow-md backdrop-blur-md lg:w-[85%] md:w-[90%]">
        
        {/* Logo */}
        <div className="flex items-center gap-1">
          <DropDownMenu menus={menus} />

          <h2 className="rounded-md text-lg font-semibold text-primary md:text-2xl md:font-bold">
            <Link href="/">Tuition-Terminal</Link>
          </h2>
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden gap-7 text-center font-medium text-base-content md:flex md:gap-2 lg:gap-7">
          {menus.map((menu) => (
            <li
              key={menu.href}
              className="rounded-md px-2 py-1 transition hover:bg-base-200"
            >
              <NavLink href={menu.href}>
                {menu.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Auth Section */}
        <div className="flex items-center justify-center gap-1 md:gap-3">
          {isPending ? (
            <div className="h-9 w-28 animate-pulse rounded-md bg-base-300"></div>
          ) : session?.user ? (
            <div className="flex items-center gap-2">
              <Link href={"/profile"}>
                <Image
                  referrerPolicy="no-referrer"
                  className="rounded-full border border-base-300"
                  src={
                    session?.user?.image &&
                    session.user.image.startsWith("http")
                      ? session.user.image
                      : avatar
                  }
                  width={38}
                  height={38}
                  alt="avatar"
                />
              </Link>

              <button
                onClick={handleLogout}
                className="rounded-md bg-error px-2 py-1.5 text-sm bg-red-500 text-error-content transition hover:opacity-90 md:px-4 md:py-2"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Image
                className="rounded-full border border-base-300"
                src={avatar}
                width={32}
                height={32}
                alt="avatar"
              />

              <Link
                href={"/signup"}
                className="rounded-md bg-primary px-0.5 md:px-3 py-2 text-sm font-semibold  text-primary-content transition hover:opacity-90"
              >
                Sign Up
              </Link>

              <Link
                href={"/login"}
                className="rounded-md bg-secondary px-0.5 md:px-3 py-2 text-sm font-semibold text-secondary-content transition hover:opacity-90"
              >
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;