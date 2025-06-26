"use client";

import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";

const ImageContainer = () => {
  const dark = useSelector((state: RootState) => state.dark);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="-m-2 rounded-xl bg-secondary p-2 ring-1 ring-gray-900/10 ring-inset lg:-m-4 lg:rounded-2xl lg:p-4">
      {isLoading && (
        <Skeleton className="h-[400px] w-full rounded-md bg-foreground/50" />
      )}
      <Image
        alt="App screenshot"
        src={dark ? "/app-screenshot-dark.png" : "/app-screenshot.png"}
        width={2432}
        height={1442}
        className={`rounded-md shadow-2xl ring-1 ring-gray-900/10 transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
};

export default ImageContainer;
