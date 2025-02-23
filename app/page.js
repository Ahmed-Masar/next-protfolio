"use client";
import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Work from "./components/Work";

export default function Home() {
  const [isDarkMode, setIsdarkMode] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsdarkMode(true);
    } else {
      setIsdarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);
  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsdarkMode={setIsdarkMode} />
      <Header isDarkMode={isDarkMode} setIsdarkMode={setIsdarkMode} />
      <About isDarkMode={isDarkMode} setIsdarkMode={setIsdarkMode} />
      <Work isDarkMode={isDarkMode} setIsdarkMode={setIsdarkMode} />
      <Contact isDarkMode={isDarkMode} setIsdarkMode={setIsdarkMode} />
      <Footer isDarkMode={isDarkMode} setIsdarkMode={setIsdarkMode} />
    </>
  );
}
