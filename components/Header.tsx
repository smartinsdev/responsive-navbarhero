import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import SiderBar from "./SiderBar";

const navItem = ["Home", "About", "Projects", "Services"];

const Header: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openAndCloseMenu = () => setIsOpen(!isOpen);
  return (
    <div className="relative w-full flex justify-between items-center py-4">
      <span className="text-2xl font-semibold text-slate-900 font-sans">Martins</span>
      <nav className="flex space-x-1">
        <div className="hidden sm:flex space-x-1">
          {navItem.map((item, index) => (
            <Link key={index} href="#">
              <a className="inline-block py-2 px-3 text-blue-700 hover:bg-blue-600 hover:text-white rounded-md transition ease-in-out duration-300 ">
                {item}
              </a>
            </Link>
          ))}
          <Link href="#">
            <a className="inline-block py-2 px-3 bg-blue-800 text-white rounded-md hover:bg-blue-600 transition ease-in-out duration-300 ">
              Sign In
            </a>
          </Link>
        </div>

        <button
          onClick={openAndCloseMenu}
          className={`${
            isOpen ? "z-20 text-white ease-in-out duration-300" : ""
          } px-3 flex justify-center items-center sm:hidden`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </button>
        <SiderBar translate={isOpen ? "translate-x-0 " : "translate-x-full"} />
      </nav>
    </div>
  );
};

export default Header;
