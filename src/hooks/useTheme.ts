"use client"; 
import { useState, useEffect } from "react";

export const useTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle theme between light and dark mode
  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    document.body.classList.toggle("dark-mode", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  // Check theme from localStorage when the app loads
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = savedTheme === "dark" || (!savedTheme && prefersDark);

    setIsDarkMode(isDark);
    document.body.classList.toggle("dark-mode", isDark);
  }, []);

  return { isDarkMode, toggleTheme };
};
