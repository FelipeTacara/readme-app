import { configureStore } from "@reduxjs/toolkit";
import sectionReducer from "./slices/sectionSlice";
import themeReducer from "./slices/themeSlice"; // Nome do export padrão

export const store = configureStore({
  reducer: {
    sections: sectionReducer,
    theme: themeReducer, // Nome atualizado
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
