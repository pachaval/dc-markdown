import MarkdownEditor from "./MarkdownEditor";
import Controls from "./Controls";

const MarkdownApp = () => {
  return (
    <div className="app-container">
      <MarkdownEditor />
      <Controls />
    </div>
  );
};

export default MarkdownApp;