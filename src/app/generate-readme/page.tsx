import { Editor } from "@/components/Editor";
import { Preview } from "@/components/Preview";
import { Sidebar } from "@/components/Sidebar";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <Editor />
      <Preview />
    </div>
  );
};

export default page;
