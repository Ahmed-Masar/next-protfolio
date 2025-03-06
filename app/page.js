"use client";
import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import { DarkModeProvider } from "./context/DarkModeContext";

export default function Home() {
  const [isDarkMode, setIsdarkMode] = useState(false);
  return (
    <DarkModeProvider>
      <Navbar />
      <Header />
      <About />
      {/* <Work /> */}
      <Contact />
      <Footer />
    </DarkModeProvider>
  );
}
