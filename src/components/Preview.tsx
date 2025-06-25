"use client";

import { useSelector } from "react-redux";
import { useState } from "react";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Button } from "./ui/button";
import { RootState } from "@/store/store";

export function Preview() {
  const [view, setView] = useState<"preview" | "raw">("preview");
  const markdown = useSelector((state: RootState) =>
    state.sections.selected.map((s) => s.content).join("\n\n")
  );

  return (
    <aside className="w-2/5 bg-white dark:bg-neutral-900 p-4 border-l h-[calc(100vh-64px)] overflow-y-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-foreground">Preview</h2>
        <div className="flex gap-2">
          <Button
            variant={view === "preview" ? "default" : "outline"}
            onClick={() => setView("preview")}
          >
            Preview
          </Button>
          <Button
            variant={view === "raw" ? "default" : "outline"}
            onClick={() => setView("raw")}
          >
            Raw
          </Button>
        </div>
      </div>

      {view === "preview" ? (
        <div className="prose dark:prose-invert max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
        </div>
      ) : (
        <pre className="bg-white dark:bg-neutral-900 text-foreground p-4 rounded whitespace-pre-wrap break-words">
          {markdown}
        </pre>
      )}
    </aside>
  );
}
