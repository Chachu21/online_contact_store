"use client";

// import { setNavActive } from "@/utils/AdminNavSlice";
// import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
// import { useDispatch } from "react-redux";

export default function AdminNavbar() {
  const router = useRouter();
  // const dispatch = useDispatch();

  const handleLogout = () => {
    // Cookies.remove("token");
    localStorage.clear();
    location.reload();
  };

  return (
    <div className="navbar dark:text-black bg-white">
      <div className="flex-1">
        <div className="dropdown md:hidden">
          <label tabIndex={0} className="btn btn-active btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          {/* <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow text-black bg-gray-50 rounded-box w-52"
          >
            <li onClick={() => {}}>
              <button>Homepage</button>
            </li>
            <li onClick={() => {}}>
              <button>Categories</button>
            </li>
            <li onClick={() => {}}>
              <button>Products</button>
            </li>
            <li>
              <Link href={"/product/add-product"}>Add Products</Link>
            </li>
            <li>
              <Link href={"/category/add-category"}>Add Category</Link>
            </li>
            <li onClick={() => {}}>
              <button>Pending orders</button>
            </li>
            <li onClick={() => {}}>
              <button>Completed orders</button>
            </li>
          </ul> */}
        </div>
      </div>
      <div className="flex justify-end items-end ">
        <div className="flex flex-col justify-center items-center gap-4">
          <label tabIndex={0} className="">
            <div className="w-20 relative rounded-full mt-1">
              <Image
                src="/images.png"
                width={44}
                height={44}
                alt="logo"
                className="object-cover bg-blue-600 rounded-full"
              />
            </div>
          </label>
          <ul
            tabIndex={0}
            className=" flex-col justify-center items-center hidden shadow bg-gray-50 rounded-box w-52"
          >
            <li>
              <Link href="/Dashboard" className="flex justify-between items-center">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li onClick={handleLogout}>
              <button className="border outline-none bg-slate-500 text-white text-lg rounded-md px-2"> Logout </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
