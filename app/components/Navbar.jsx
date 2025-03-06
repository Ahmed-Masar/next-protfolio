import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import { useDarkMode } from "../context/DarkModeContext";

const Navbar = () => {
  const { isDarkMode, setIsdarkMode } = useDarkMode();

  const sideMeun = useRef();

  const [isScroll, setScroll] = useState(false);

  const openMeun = () => {
    sideMeun.current.style.transform = "translateX(-16rem)";
  };
  const closeMeun = () => {
    sideMeun.current.style.transform = "translateX(0)";
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (screenY < 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, []);
  return (
    <>
      <div className=" fixed right-0 top-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image
          src={assets.header_bg_color}
          alt=""
          className="w-full dark:hidden"
        />
      </div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll
            ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20"
            : ""
        }`}
      >
        <a href="#top">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            className="w-28 cursor-pointer mr-14"
            alt=""
          />
        </a>
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll
              ? ""
              : "  bg-white shadow-sm border-opacity-50 dark:bg-transparent dark:border dark:border-wgite/20"
          } `}
        >
          <li>
            <a href="#top" className=" font-Ovo">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className=" font-Ovo">
              About Me
            </a>
          </li>
          {/* <li>
            <a href="#services" className=" font-Ovo">
              Services
            </a>
          </li> */}
          {/* <li>
            <a href="#work" className=" font-Ovo">
              My Work
            </a>
          </li> */}
          <li>
            <a href="#contact" className=" font-Ovo">
              Contact Me
            </a>
          </li>
        </ul>

        <div className=" flex items-center gap-4">
          <button
            onClick={() => {
              setIsdarkMode((prev) => !prev);
            }}
          >
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt=""
              className="w-6"
            />
          </button>
          <a
            href="#contact"
            className=" hidden lg:flex items-center px-5 py-2.5 border border-gray-500 rounded-full ml-4 gap-4"
          >
            Contact{" "}
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              className="w-3"
              alt=""
            />
          </a>
          <button onClick={openMeun} className=" block md:hidden ml-3">
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt=""
              className=" w-6 "
            />
          </button>
        </div>
        {/*============ mobile meun ========== */}
        <ul
          ref={sideMeun}
          className=" flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-100 dark:bg-darkHover dark:text-white"
        >
          <div onClick={closeMeun} className=" absolute right-6 top-6">
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt=""
              className="w-5 cursor-pointer"
            />
          </div>
          <li>
            <a onClick={closeMeun} href="#top" className=" font-Ovo">
              Home
            </a>
          </li>
          <li>
            <a onClick={closeMeun} href="#about" className=" font-Ovo">
              About Me
            </a>
          </li>
          {/* <li>
            <a onClick={closeMeun} href="#services" className=" font-Ovo">
              Services
            </a>
          </li> */}
          {/* <li>
            <a onClick={closeMeun} href="#work" className=" font-Ovo">
              My Work
            </a>
          </li> */}
          <li>
            <a onClick={closeMeun} href="#contact" className=" font-Ovo">
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
