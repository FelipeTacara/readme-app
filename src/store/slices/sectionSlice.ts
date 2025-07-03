import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { DEFAULT_SECTIONS } from "../sections-data";
import { SelectedSection } from "@/types/sectionTypes";

const initialState = {
  available: [...DEFAULT_SECTIONS],
  selected: [] as SelectedSection[],
  currentId: null as string | null,
};

const sectionSlice = createSlice({
  name: "sections",
  initialState,
  reducers: {
    addSection: (
      state,
      action: PayloadAction<
        string | { id: string; label: string; content: string }
      >
    ) => {
      if (typeof action.payload === "string") {
        const item = state.available.find((s) => s.id === action.payload);
        if (item) {
          state.available = state.available.filter((s) => s.id !== item.id);
          state.selected.push({
            id: item.id,
            label: item.label,
            content: item.defaultContent,
          });
        }
      } else {
        const { id, label, content } = action.payload;
        const exists = state.selected.find((s) => s.id === id);
        if (!exists) {
          state.selected.push({ id, label, content });
        }
      }
    },

    removeSection: (state, action: PayloadAction<string>) => {
      const index = state.selected.findIndex((s) => s.id === action.payload);
      if (index !== -1) {
        const removed = state.selected.splice(index, 1)[0];
        const exists = state.available.find((s) => s.id === removed.id);
        if (!exists) {
          state.available.push({
            id: removed.id,
            label: removed.label,
            defaultContent: removed.content,
          });
        }
      }
    },
    updateContent: (
      state,
      action: PayloadAction<{ id: string; content: string }>
    ) => {
      const section = state.selected.find((s) => s.id === action.payload.id);
      if (section) section.content = action.payload.content;
    },
    reorderSections: (
      state,
      action: PayloadAction<{ from: number; to: number }>
    ) => {
      const [moved] = state.selected.splice(action.payload.from, 1);
      state.selected.splice(action.payload.to, 0, moved);
    },
    reset: () => initialState,
    setCurrentId: (state, action: PayloadAction<string | null>) => {
      state.currentId = action.payload;
    },
  },
});

export const {
  addSection,
  removeSection,
  updateContent,
  reorderSections,
  reset,
  setCurrentId,
} = sectionSlice.actions;

export default sectionSlice.reducer;
