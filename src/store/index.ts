import { configureStore } from "@reduxjs/toolkit";
import { sectionSlice } from "./slices/sectionsSlice";
import { themeSlice } from "./slices/themeSlice";

export const store = configureStore({
  reducer: {
    sections: sectionSlice.reducer,
    dark: themeSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
