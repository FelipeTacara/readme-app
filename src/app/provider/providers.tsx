"use client";

import { store } from "@/store/store";
import { Provider } from "react-redux";
import ThemeWrapper from "./theme-provider";

type Props = {
  children: React.ReactNode;
};

export function ReduxProvider({ children }: Props) {
  return (
    <Provider store={store}>
      <ThemeWrapper />
      {children}
    </Provider>
  );
}
