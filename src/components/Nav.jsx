"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menu, setMenu] = useState(true);

  const handleMenu = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const shouldSetScrolled = scrollPosition > 0;
      setIsScrolled(shouldSetScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        isScrolled
          ? "bg-slate-700 fixed "
          : "bg-gradient-to-r from-green-300 to-blue-500 relative"
      } top-0 left-0 right-0 z-[1]`}
    >
      <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <div className="text-sm  flex flex-col justify-center items-center ">
            <Link href={"/"}>
              <Image
                src="/images.png"
                width={44}
                height={44}
                alt="logo"
                className="object-cover bg-blue-600 rounded-full"
              />
            </Link>
            <h3 className={`${isScrolled ? "text-white" : "text-slate-800"}`}>
              Online contact list
            </h3>
          </div>

          <div
            onClick={handleMenu}
            className="text-white cursor-pointer absolute top-[0px] right-[0px] leading-none px-4 py-1 border border-solid border-transparent rounded bg-transparent md:hidden outline-none focus:outline-none h-full flex justify-center items-center"
          >
            {!menu ? (
              <Image
                src={"/menu-bar.svg"}
                alt="menu bar"
                width={24}
                height={24}
                color="white"
              />
            ) : (
              <Image
                src={"/close-icon.svg"}
                alt="menu bar"
                width={22}
                height={22}
              />
            )}
          </div>
        </div>

        {/*Mobile Menu open: "block", Menu closed: "hidden" */}
        <div
          className={`${
            menu ? "translate-x-0 opacity-100 " : "opacity-0 -translate-x-full"
          } absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-slate-700 dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center`}
        >
          <div className="flex flex-col md:flex-row md:mx-6 items-center">
            <Link
              className="my-2 text-white transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              href="/"
              onClick={handleMenu}
            >
              Home
            </Link>
            <Link
              className="my-2 text-white transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              href="/new"
              onClick={handleMenu}
            >
              New
            </Link>
            <Link
              className="my-2 text-white transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              href="/login"
              onClick={handleMenu}
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
