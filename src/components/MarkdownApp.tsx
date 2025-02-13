import MarkdownEditor from "./MarkdownEditor";
import Controls from "./Controls";
import MarkdownDisplay from "./MarkdownDisplay";

const MarkdownApp = () => {
  return (
    <div className="app-container">
      <div className="markdown-container">
        <MarkdownEditor />
        <MarkdownDisplay />
      </div>
      <Controls />
    </div>
  );
};

export default MarkdownApp;
