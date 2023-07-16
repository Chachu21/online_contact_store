"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image'
const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const shouldSetScrolled = scrollPosition > 0;
      setIsScrolled(shouldSetScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        isScrolled
          ? "bg-slate-700 fixed"
          : "bg-gradient-to-r from-green-300 to-blue-500"
      } top-0 left-0 right-0 z-10`}
    >
      <div className="flex justify-between items-center px-4 py-3 mx-auto max-w-screen">
        <div className="text-white text-2xl flex justify-center items-center gap-4">
          <Image
            src="/images.png"
            width={64}
            height={64}
            alt="logo"
            className="object-cover bg-blue-600 rounded-full"
          />
          OCLS
        </div>
        <div className="text-white text-md flex justify-center gap-4">
          <Link href={"/"} className="hover:text-gray-300">
            Home
          </Link>
          <Link href={"/news"} className="hover:text-gray-300">
            News
          </Link>
          <Link href={"/login"} className="hover:text-gray-300">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
