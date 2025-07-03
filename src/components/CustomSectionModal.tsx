"use client";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function CustomSectionModal({
  open,
  onClose,
  onSubmit,
}: {
  open: boolean;
  onClose: () => void;
  onSubmit: (title: string) => void;
}) {
  const [title, setTitle] = useState("");

  const handleSubmit = () => {
    if (!title.trim()) return;
    onSubmit(title);
    setTitle("");
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mx-auto">Enter section title</DialogTitle>
        </DialogHeader>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="e.g. My Custom Section"
        />
        <div className="grid grid-cols-2 gap-2 w-full">
          <Button
            className="mt-4 w-full"
            variant="outline"
            onClick={() => onClose()}
          >
            Cancel
          </Button>
          <Button className="mt-4 w-full" onClick={handleSubmit}>
            Add Section
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
