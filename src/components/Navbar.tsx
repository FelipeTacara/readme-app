"use client";

import { AppDispatch, RootState, toggleTheme } from "@/store/store";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { usePathname } from "next/navigation";
import DownloadButton from "./DownloadButton";

const Navbar = () => {
  const path = usePathname();
  const dispatch = useDispatch<AppDispatch>();
  const dark = useSelector((state: RootState) => state.dark);

  return (
    <div className="px-4 h-16 flex items-center justify-between bg-neutral-100 dark:bg-neutral-900 border-b-1">
      <Link href="/" className="my-auto text-foreground text-xl font-medium">
        Home
      </Link>
      <div className="flex gap-2">
        {path === "/generate-readme" && <DownloadButton />}
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
