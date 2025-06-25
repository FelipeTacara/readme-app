import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-neutral-900 py-16 border-t-1 border-b-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 items-center flex flex-col gap-4">
        <Link className="text-white" href="https://github.com/FelipeTacara">
          Made by Felipe Tacara
        </Link>
        <Image src="/github.svg" width={24} height={24} alt="github logo" />
      </div>
    </footer>
  );
};
