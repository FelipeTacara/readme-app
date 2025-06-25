"use client";

import { AppDispatch, RootState, toggleTheme } from "@/store/store";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const dark = useSelector((state: RootState) => state.dark);

  const markdown = useSelector((state: RootState) =>
    state.sections.selected.map((s) => s.content).join("\n\n")
  );

  const downloadFile = () => {
    const blob = new Blob([markdown], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const readmeFile = document.createElement("a");
    readmeFile.href = url;
    readmeFile.download = "README.md";
    readmeFile.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="px-4 h-16 flex items-center justify-between bg-white dark:bg-neutral-900 border-b-1">
      <Link href="/" className="my-auto text-foreground text-xl">
        Home
      </Link>
      <div className="flex gap-2">
        <Button
          variant="outline"
          onClick={downloadFile}
          className="hover:text-foreground dark:text-white"
        >
          Download
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => dispatch(toggleTheme())}
          className="hover:text-foreground dark:text-white"
        >
          {dark ? <Sun size={16} /> : <Moon size={16} />}
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
