import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div>
        <div className="px-3 grid grid-cols-12 text-white bg-slate-800">
          <div className="col-span-3 text-center text-3xl py-2 font-bold hover:text-slate-200">
            <Link href="/">Our store</Link>
          </div>
          <div className="col-span-6 flex py-2">
            <input
              type="search"
              className="border border-3 border-orange-500 w-full rounded-s-md text-black-px-3 outline-none"
            />
            <button className="bg-orange-500 px-4 py-2 rounded-r-md hover:bg-orange-300 hover:text-orange-800 active:bg-orange-500 active:text-orange-500">
              search
            </button>
          </div>
          <div className="col-span-3 flex justify-evenly py-3">
            <Link href={"/login"}>Login</Link>
            <Link href={"/register"}>Register</Link>
            <Link href={"/cart"}>Cart</Link>
          </div>
        </div>
      </div>
      <div className="flex justify-evenly bg-slate-500 py-2 text-white">
        <Link href={"/"}>Home</Link>
        <Link href={"/products"}>Products</Link>
        <Link href={"/services"}>Services</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/contact"}>Contact</Link>
      </div>
    </>
  );
};

export default Header;
