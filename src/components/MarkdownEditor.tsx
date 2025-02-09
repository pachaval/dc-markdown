import { useState, useEffect } from "react";
import "../styles/markdown.css";
import MarkdownRenderer from "./TextTransformer";

const MarkdownEditor = () => {
  const initialText =
    "# Test document\n\nLets create a variable `x`, equal to 5.\n\n```\nx = 5\n```";

  const [text, setText] = useState(
    () => localStorage.getItem("markdown_text") || initialText
  );
  const [displayText, setDisplayText] = useState(text);
  const [isLive, setIsLive] = useState(
    () => localStorage.getItem("markdown_mode") !== "manual"
  );

  useEffect(() => {
    localStorage.setItem("markdown_text", text);
  }, [text]);

  useEffect(() => {
    localStorage.setItem("markdown_mode", isLive ? "live" : "manual");
  }, [isLive]);

  return (
    <div className="app-container">
      <div className="markdown-container">
        <textarea
          className="editor"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            if (isLive) setDisplayText(e.target.value);
          }}
        />

        <div className="display">
          <MarkdownRenderer text={displayText} />
        </div>
      </div>

      <div className="controls">
        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="mode"
              value="live"
              checked={isLive}
              onChange={() => setIsLive(true)}
            />
            Live
          </label>

          <label>
            <input
              type="radio"
              name="mode"
              value="manual"
              checked={!isLive}
              onChange={() => setIsLive(false)}
            />
            Manual
          </label>
        </div>

        <button
          onClick={() => setDisplayText(text)}
          className="render-button"
          disabled={isLive}
        >
          RENDER
        </button>
      </div>
    </div>
  );
};

export default MarkdownEditor;
