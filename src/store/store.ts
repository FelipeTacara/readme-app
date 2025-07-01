import { configureStore } from "@reduxjs/toolkit";
import sectionReducer from "./slices/sectionSlice";
import themeReducer from "./slices/themeSlice";

export const store = configureStore({
  reducer: {
    sections: sectionReducer,
    dark: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
