import React, { useEffect } from "react";
import { useLocalStorage } from "./localStorage";

export function useDarkMode() {
  const [darkMode, setDarkMode] = useLocalStorage("dark");

  useEffect(() => {
    // if (useLocalStorage === "true") {
    // return document.body.classList.add("dark-mode") }
    darkMode
      ? document.body.classList.add("dark-mode")
      : document.body.classList.remove("dark-mode");
  }, [darkMode]);
  return [darkMode, setDarkMode];
}
