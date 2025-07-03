import { createSlice } from "@reduxjs/toolkit";

// Verifica o localStorage para o tema salvo ou usa o padrão
const getInitialTheme = () => {
  if (typeof window !== "undefined") {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "light";
  }
  return "light";
};

const themeSlice = createSlice({
  name: "theme", // Alterado para um nome mais significativo
  initialState: { value: getInitialTheme() },
  reducers: {
    toggleTheme: (state) => {
      const newTheme = state.value === "light" ? "dark" : "light";
      state.value = newTheme;
      // Salva no localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem("theme", newTheme);
      }
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
