import { useState, useRef } from "react";

import MarkdownEditor from "./MarkdownEditor";
import Controls from "./Controls";

const MarkdownApp = () => {
  const [isLive, setIsLive] = useState(
    () => localStorage.getItem("markdown_mode") !== "manual"
  );

  const markdownEditorRef = useRef<{ handleRender: () => void } | null>(null);

  const handleModeChange = (isLive: boolean) => {
    setIsLive(isLive);
    localStorage.setItem("markdown_mode", isLive ? "live" : "manual");
  };

  const handleRender = () => {
    markdownEditorRef.current?.handleRender();
  };

  return (
    <div className="app-container">
      <MarkdownEditor ref={markdownEditorRef} isLive={isLive} />
      <Controls
        handleModeChange={handleModeChange}
        handleRender={handleRender}
        isLive={isLive}
      />
    </div>
  );
};

export default MarkdownApp;
