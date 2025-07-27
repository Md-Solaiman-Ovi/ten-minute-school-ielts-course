import React from "react";
// import { FaSearch } from "react-icons/fa";
import logo from "../assets/10mslogo.svg";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../redux/store";
import { setLanguage, fetchProduct } from "../redux/slices/productSlice";
import SearchIcon from "./SearchIcon";
import { IoCall } from "react-icons/io5";

const Navbar: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const lang = useSelector((state: RootState) => state.product.lang);

  const toggleLanguage = () => {
    const newLang = lang === "en" ? "bn" : "en";
    dispatch(setLanguage(newLang));
    dispatch(fetchProduct(newLang));
  };

  return (
    <nav className="w-full border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Left: Logo */}
        <div className="flex items-center gap-4">
          <img src={logo} alt="10 Minute School" className="h-8 w-auto" />

          {/* Search Bar */}
          <div className="shadow-0 hidden w-full items-center gap-2 rounded-b-[23px] rounded-t-[23px] border-0 px-[12px] py-2 md:flex md:border">
            <SearchIcon />
            <input
              autoComplete="off"
              autoCorrect="off"
              placeholder="স্কিলস কোর্স, কিংবা স্কুল প্রোগ্রাম সার্চ করুন..."
              className="w-full flex-1 placeholder:text-sm placeholder:font-normal placeholder:leading-5 placeholder:text-[#7C818A] focus:outline-none"
              type="search"
              name="Search"
            />
          </div>
        </div>

        {/* Center: Navigation Links */}
        <div className="hidden items-center gap-6 text-sm font-medium text-gray-700 md:flex">
          <a href="#" className="hover:text-green-600">
            Class 6-12
          </a>
          <a href="#" className="hover:text-green-600">
            Skills
          </a>
          <a href="#" className="hover:text-green-600">
            Admission
          </a>
          <a href="#" className="hover:text-green-600">
            Online Batch
          </a>
          <a href="#" className="hover:text-green-600">
            English Centre
          </a>
          <a href="#" className="hover:text-green-600">
            More
          </a>
        </div>

        {/* Right: Language, Phone, Login */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="rounded border px-4 py-1 text-sm text-gray-600 hover:text-green-600"
          >
            {lang === "en" ? "বাং " : "EN"}
          </button>
          <a
            href="tel:16910"
            className="hidden items-center gap-1 text-sm text-green-600 sm:flex"
          >
            <IoCall className="size-4" />
            <span>16910</span>
          </a>
          <button className="rounded bg-green-600 px-3 py-1 text-sm text-white hover:bg-green-700">
            লগ-ইন
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
