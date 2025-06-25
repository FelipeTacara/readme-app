import { Editor } from "@/components/Editor";
import { Preview } from "@/components/Preview";
import { Sidebar } from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <Editor />
      <Preview />
    </div>
  );
}
