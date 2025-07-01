import { render, screen } from "@testing-library/react";
import DownloadButton from "../DownloadButton";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import sectionReducer from "@/store/slices/sectionSlice";
import themeReducer from "@/store/slices/themeSlice";

const mockStore = configureStore({
  reducer: {
    sections: sectionReducer,
    dark: themeReducer,
  },
  preloadedState: {
    sections: {
      available: [],
      selected: [],
      currentId: null,
    },
    dark: { value: "light" },
  },
});

describe("DownloadButton", () => {
  it('renders button with "Download" text', () => {
    render(
      <Provider store={mockStore}>
        <DownloadButton />
      </Provider>
    );
    expect(screen.getByText("Download")).toBeInTheDocument();
  });
});
