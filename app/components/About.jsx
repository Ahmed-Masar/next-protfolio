"use client";
import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const About = ({ isDarkMode }) => {
  const liList = infoList.map(
    ({ icon, iconDark, title, description }, index) => {
      return (
        <motion.li
          whileHover={{ scale: 1.05 }}
          key={index}
          className=" border-[0.5px] border-gray-400 rounded-xl cursor-pointer p-6 hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:hover:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
        >
          <Image
            src={isDarkMode ? iconDark : icon}
            alt={title}
            className="w-7 mt-3"
          />
          <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
            {title}
          </h3>
          <p className="text-gray-600 text-sm dark:text-white/80">
            {description}
          </p>
        </motion.li>
      );
    }
  );

  const toolsList = toolsData.map((tool, index) => {
    return (
      <motion.li
        whileHover={{ scale: 1.1 }}
        key={index}
        className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-full cursor-pointer hover:-translate-y-1 duration-500"
      >
        <Image src={tool} alt="" className="w-5 sm:w-7" />
      </motion.li>
    );
  });
  return (
    <motion.div
      id="about"
      className="w-full px-[12%] py-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center text-lg mb-2 font-Ovo"
      >
        Introduction
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        About Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className=" flex flex-col lg:flex-row items-center gap-20 my-20"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className=" w-64 sm:w-80 rounded-3xl max-w-none"
        >
          <Image
            src={assets.user_image}
            alt="User"
            className="w-full rounded-3xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className=" flex-1"
        >
          <p className=" capitalize mb-10 max-w-2xl font-Ovo">
            I am a front-end developer specializing in building modern,
            high-performance websites using Next.js, with a focus on delivering
            a smooth and professional user experience. If you need a
            high-quality website tailored to your needs, feel free to contact me
          </p>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className=" grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl"
          >
            {liList}
          </motion.ul>

          <motion.h4
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="my-6 text-gray-700 font-Ovo dark:text-white/80"
          >
            Tools I Use
          </motion.h4>
          <motion.ul
            className="flex items-center gap-3 md:gap-5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.5 }}
          >
            {toolsList}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
