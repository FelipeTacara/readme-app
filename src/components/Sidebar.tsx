"use client";

import { useSelector, useDispatch } from "react-redux";

import { Button } from "@/components/ui/button";
import { RotateCcw, GripVertical, Trash2 } from "lucide-react";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";
import { AppDispatch, RootState } from "@/store/store";
import {
  addSection,
  removeSection,
  reorderSections,
  reset,
  setCurrentId,
} from "@/store/slices/sectionSlice";

function SortableItem({
  id,
  label,
  onRemove,
  onSelect,
}: {
  id: string;
  label: string;
  onRemove: () => void;
  onSelect: () => void;
}) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      className="flex items-center justify-between mb-2 border p-2 rounded cursor-pointer"
      onClick={onSelect}
    >
      <div className="flex items-center gap-2 text-foreground">
        <button
          {...listeners}
          onClick={(e) => e.stopPropagation()}
          className="cursor-grab"
          aria-label="Drag Handle"
        >
          <GripVertical size={16} />
        </button>
        <span>{label}</span>
      </div>
      <Button
        variant="destructive"
        size="sm"
        onClick={(e) => {
          e.stopPropagation();
          onRemove();
        }}
      >
        <Trash2 size={16} />
      </Button>
    </div>
  );
}

export function Sidebar() {
  const { available, selected } = useSelector(
    (state: RootState) => state.sections
  );

  const dispatch = useDispatch<AppDispatch>();

  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const oldIndex = selected.findIndex((s) => s.id === active.id);
      const newIndex = selected.findIndex((s) => s.id === over.id);
      dispatch(reorderSections({ from: oldIndex, to: newIndex }));
    }
  };
  const [search, setSearch] = useState("");

  return (
    <aside className="w-72 bg-white dark:bg-neutral-900 p-4 border-r h-[calc(100vh-64px)] overflow-y-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-foreground">Sections</h2>
        <div className="flex gap-2 px-2 ">
          <Button
            variant="link"
            size="icon"
            className="hover:text-red-900"
            onClick={() => {
              if (window.confirm("Are you sure you want to reset?")) {
                dispatch(reset());
              }
            }}
          >
            <RotateCcw size={16} />
            Reset
          </Button>
        </div>
      </div>

      <h3 className="font-semibold mb-2 text-foreground">Active Sections</h3>
      <p className="text-xs my-2 text-foreground">
        Click on a section below to edit the contents
      </p>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
        modifiers={[restrictToVerticalAxis]}
      >
        <SortableContext
          items={selected.map((s) => s.id)}
          strategy={verticalListSortingStrategy}
        >
          {selected.map((s) => (
            <SortableItem
              key={s.id}
              id={s.id}
              label={s.label}
              onRemove={() => dispatch(removeSection(s.id))}
              onSelect={() => dispatch(setCurrentId(s.id))}
            />
          ))}
        </SortableContext>
      </DndContext>

      <h3 className="font-semibold mt-4 mb-2 text-foreground">
        Available Sections
      </h3>
      <p className="text-xs my-2 text-foreground">
        Click on a section below to add it to your readme
      </p>
      <input
        type="text"
        placeholder="Search sections..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-4 px-2 py-1 rounded border bg-white dark:bg-neutral-800 text-foreground"
      />

      {available
        .filter((s) => s.label.toLowerCase().includes(search.toLowerCase()))
        .map((s) => (
          <Button
            variant="outline"
            key={s.id}
            className="flex items-center justify-between mb-2 border p-2 py-5 rounded cursor-pointer w-full"
            onClick={() => {
              dispatch(addSection(s.id));
              dispatch(setCurrentId(s.id));
            }}
          >
            <span className="text-foreground">{s.label}</span>
          </Button>
        ))}
    </aside>
  );
}
