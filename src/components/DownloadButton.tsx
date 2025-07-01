import React from "react";
import { Button } from "./ui/button";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const DownloadButton = () => {
  const markdown = useSelector((state: RootState) =>
    state.sections.selected.map((s) => s.content).join("\n\n")
  );

  const downloadFile = () => {
    const blob = new Blob([markdown], { type: "text/markdown" });
    const url = URL.createObjectURL(blob);
    const readmeFile = document.createElement("a");
    readmeFile.href = url;
    readmeFile.download = "README.md";
    readmeFile.click();
    URL.revokeObjectURL(url);
  };
  return (
    <Button
      variant="outline"
      onClick={downloadFile}
      className="hover:text-foreground dark:text-white"
    >
      Download
    </Button>
  );
};

export default DownloadButton;
