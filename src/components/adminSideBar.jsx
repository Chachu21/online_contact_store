"use client"
import Link from "next/link";
import React from "react";
export default function AdminSidebar() {
  return (
    <div className="w-60 hidden dark:text-black md:block bg-white h-full">
      <div className="w-full text-center py-2 px-2 h-20">
        <h1 className="flex text-2xl font-semibold items-center justify-center">
          Dashboard
        </h1>
      </div>
      <div className="w-full ">
        <ul className="flex px-4 flex-col items-start justify-center">
          <li onClick={() => {}} className="py-3 px-1 mb-3">
            <button className="flex items-center justify-center">
              {/* <AiFillHome className="mx-2" /> Home */} Home
            </button>
          </li>
          <li onClick={() => {}} className="py-3 px-1 mb-3">
            <button className="flex items-center justify-center">
              {/* <BiCategory className="mx-2" /> Categories */}
              Categories
            </button>
          </li>

          <li className="py-3 px-1 mb-3">
            <Link
              href="/add-product"
              className="flex items-center justify-center"
            >
              {/* <IoIosAddCircle className="mx-2" /> Add Products */}
              Add contacts
            </Link>
          </li>
          <li className="py-3 px-1 mb-3">
            <Link
              href="/category/add-category"
              className="flex items-center justify-center"
            >
              {/* <IoIosAddCircle className="mx-2" /> Add Category */}
              Add Category
            </Link>
          </li>
          <li onClick={() => {}} className="py-3 px-1 mb-3">
            <button className="flex items-center justify-center">
              {/* <GiLoincloth className="mx-2" /> Products */}
            Setting
            </button>
          </li>
          <li onClick={() => {}} className="py-3 px-1 mb-3">
            <button className="flex items-center justify-center">
              {/* <GiLoincloth className="mx-2" /> Products */}
              app details
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
