import { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import "../styles/markdown.css";
import MarkdownRenderer from "./TextTransformer";

interface MarkdownEditorProps {
  isLive: boolean;
}

const MarkdownEditor = forwardRef(({ isLive }: MarkdownEditorProps, ref) => {
  const initialText =
    "# Test document\n\nLets create a variable `x`, equal to 5.\n\n```\nx = 5\n```";

  const [text, setText] = useState(
    () => localStorage.getItem("markdown_text") || initialText
  );
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    localStorage.setItem("markdown_text", text);
  }, [text]);

  const handleRender = () => {
    setDisplayText(text);
  };

  useImperativeHandle(ref, () => ({
    handleRender,
  }));

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    if (isLive) {
      setDisplayText(e.target.value);
    }
  };

  return (
    <div className="markdown-container">
      <textarea className="editor" value={text} onChange={handleTextAreaChange} />
      <div className="display">
        <MarkdownRenderer text={isLive ? text : displayText} />
      </div>
    </div>
  );
});

export default MarkdownEditor;
