import { useState, useEffect } from "react";

import MarkdownRenderer from "./TextTransformer";

import "../styles/markdown.css";

const MarkdownEditor = () => {
  const initialText =
    "# Test document\n\nLets create a variable `x`, equal to 5.\n\n```\nx = 5\n```";

  const [text, setText] = useState(() => {
    return localStorage.getItem("markdown_text") || initialText;
  });

  useEffect(() => {
    localStorage.setItem("markdown_text", text);
  }, [text]);

  return (
    <div className="app-container">
      <div className="markdown-container">
        <textarea
          onChange={(e) => setText(e.target.value)}
          className="editor"
          value={text}
        />

        <div className="display">
          <MarkdownRenderer text={text} />
        </div>
      </div>
      <button className="render-button">RENDER</button>
    </div>
  );
};

export default MarkdownEditor;
