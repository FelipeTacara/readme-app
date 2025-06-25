"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useEffect } from "react";

export default function ThemeWrapper() {
  const isDark = useSelector((state: RootState) => state.dark);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  return null;
}
