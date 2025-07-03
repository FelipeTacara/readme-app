"use client";

import { store } from "@/store/store";
import { Provider } from "react-redux";
import ThemeWrapper from "./theme-provider";
import { useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
};

export function ReduxProvider({ children }: Props) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <Provider store={store}>
      <ThemeWrapper />
      {isMounted && children}
    </Provider>
  );
}
