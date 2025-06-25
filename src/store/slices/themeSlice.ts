import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: false, // false = light, true = dark
  reducers: {
    toggleTheme: (state) => !state,
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
