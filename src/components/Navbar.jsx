import React from "react";
import Link from "next/link";


const Navbar = () => {

  return (
    <div className="relative">
      <div className="absolute z-50 flex justify-center h-[5vh] bg-white text-black rounded-3xl shadow-xl shadow-black">
        <ul className="flex justify-center items-center lg:text-xl font-semibold">
          <Link href={"/"}>
            <li  className={` px-5 my-0 mx-5 hover:bg-gradient-to-tr hover:from-pink-400 hover:to-blue-400 hover:text-white duration-1000 transition-all ease-in-out rounded-3xl`}>
              Home
            </li>
          </Link>
          <Link href={"/"}>
            <li className="px-5 my-0 mx-5 hover:bg-gradient-to-tr hover:from-pink-400 hover:to-blue-400 hover:text-white duration-1000 transition-all ease-in-out rounded-3xl">
              About
            </li>
          </Link>
          <Link href={"/"}>
            <li className="px-5 my-0 mx-5 hover:bg-gradient-to-tr hover:from-pink-400 hover:to-blue-400 hover:text-white duration-1000 transition-all ease-in-out rounded-3xl">
              Services
            </li>
          </Link>
          <Link href={"/"}>
            <li className="px-5 my-0 mx-5 hover:bg-gradient-to-tr hover:from-pink-400 hover:to-blue-400 hover:text-white duration-1000 transition-all ease-in-out rounded-3xl">
              Team
            </li>
          </Link>
          <Link href={"/"}>
            <li className="px-5 my-0 mx-5 hover:bg-gradient-to-tr hover:from-pink-400 hover:to-blue-400 hover:text-white duration-1000 transition-all ease-in-out rounded-3xl">
              Contact
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
