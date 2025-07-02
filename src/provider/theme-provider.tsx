"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useEffect } from "react";

export default function ThemeWrapper() {
  const theme = useSelector((state: RootState) => state.dark.value);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return null;
}
