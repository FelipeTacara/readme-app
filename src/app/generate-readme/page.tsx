import React from "react";
import { Editor } from "src/components/Editor";
import { Preview } from "src/components/Preview";
import { Sidebar } from "src/components/Sidebar";

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
