import useMarkdownStore from "../store/markdownStore";
import MarkdownRenderer from "./TextTransformer";

import "../styles/markdown.css";

const MarkdownEditor = () => {
  const { text, displayText, isLive, setText } = useMarkdownStore();

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <div className="markdown-container">
      <textarea className="editor" value={text} onChange={handleTextChange} />
      <div className="display">
        <MarkdownRenderer text={isLive ? text : displayText} />
      </div>
    </div>
  );
};

export default MarkdownEditor;