import { useState } from "react";
import "../styles/markdown.css";
import MarkdownRenderer from "./TextTransformer";

const MarkdownEditor = () => {
  const [text, setText] = useState(
    "# Test document\n\nLets create a variable 'x', equal to 5.\n\n```\nx = 5\n```"
  );

  return (
    <div className="app-container">
      <div className="markdown-container">
        <textarea
          className="editor"
          value={text}
          onChange={(e) => setText(e.target.value)}
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
