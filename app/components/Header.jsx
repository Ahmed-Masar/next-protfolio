import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Header = () => {
  return (
    <div className=" w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-1">
      {/* <div>
        <Image
          src={assets.profile_img}
          alt="ahmed"
          className=" rounded-full w-32"
        />
      </div> */}
      <motion.h3
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className=" flex items-end gap-3 text-xl md:text-2xl mb-3"
      >
        Hi I'm Ahmed Masar{" "}
      </motion.h3>
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className=" capitalize text-3xl sm:text-6xl lg:text-[66px] font-Ovo"
      >
        Front-end web developer based in Iraq.
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className=" capitalize max-w-2xl mx-auto font-Ovo"
      >
        I am a front-end developer specializing in building modern and fast
        websites using Next.js
      </motion.p>
      <div className=" flex flex-col md:flex-row items-center gap-4 mt-4">
        <motion.a
          href="#contact"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className=" rounded-full px-10 py-3 border border-white bg-black text-white flex items-center gap-2 dark:bg-transparent"
        >
          {" "}
          Contact Me{" "}
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </motion.a>
        <motion.a
          href="/sample-resume.pdf"
          download
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className=" px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 dark:bg-white dark:text-black"
        >
          {" "}
          My Resume <Image src={assets.download_icon} alt="" className="w-4" />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
