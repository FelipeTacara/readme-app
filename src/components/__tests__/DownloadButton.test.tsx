import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import sectionReducer from "@/store/slices/sectionSlice";
import themeReducer from "@/store/slices/themeSlice";
import DownloadButton from "../DownloadButton";

const mockStore = configureStore({
  reducer: {
    sections: sectionReducer,
    dark: themeReducer,
  },
  preloadedState: {
    sections: {
      available: [],
      selected: [
        { id: "1", label: "Test", content: "# Title" },
        { id: "2", label: "Test2", content: "Content" },
      ],
      currentId: null,
    },
    dark: { value: "light" },
  },
});

// Mock URL methods since they don't exist in test environment
global.URL.createObjectURL = jest.fn(() => "blob:url");
global.URL.revokeObjectURL = jest.fn();

describe("DownloadButton", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders button with "Download" text', () => {
    render(
      <Provider store={mockStore}>
        <DownloadButton />
      </Provider>
    );
    expect(screen.getByText("Download")).toBeInTheDocument();
  });

  it("triggers download on click", () => {
    // Spy on anchor click
    const anchorClickSpy = jest.spyOn(HTMLAnchorElement.prototype, "click");

    render(
      <Provider store={mockStore}>
        <DownloadButton />
      </Provider>
    );

    fireEvent.click(screen.getByText("Download"));

    // Verify blob creation
    expect(global.URL.createObjectURL).toHaveBeenCalledWith(expect.any(Blob));

    // Verify download click
    expect(anchorClickSpy).toHaveBeenCalled();

    // Verify cleanup
    expect(global.URL.revokeObjectURL).toHaveBeenCalledWith("blob:url");
  });
});
