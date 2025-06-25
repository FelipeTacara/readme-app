"use client";

import { useSelector, useDispatch } from "react-redux";

import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { AppDispatch, RootState, updateContent } from "@/store/store";

export function Editor() {
  const { selected, currentId } = useSelector(
    (state: RootState) => state.sections
  );
  const dispatch = useDispatch<AppDispatch>();

  const section = selected.find((s) => s.id === currentId);

  if (!section) {
    return (
      <main className="flex-1 flex items-center justify-center bg-background dark:bg-neutral-900 h-[calc(100vh-64px)]">
        <p className="text-foreground">Select a section to edit</p>
      </main>
    );
  }

  return (
    <main className="flex-1 p-4 bg-background h-[calc(100vh-64px)] overflow-y-auto">
      <Card className="flex h-full ">
        <CardContent className="flex flex-col gap-4 p-4 overflow-y-hidden">
          <h2 className="text-xl font-bold">{section.label}</h2>
          <Textarea
            rows={10}
            value={section.content}
            className=""
            onChange={(e) =>
              dispatch(
                updateContent({ id: section.id, content: e.target.value })
              )
            }
          />
        </CardContent>
      </Card>
    </main>
  );
}
