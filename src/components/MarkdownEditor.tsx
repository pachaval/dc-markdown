import useMarkdownStore from "../store/markdownStore";
import "../styles/markdown.css";

const MarkdownEditor = () => {
  const { text, setText } = useMarkdownStore();

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <>
      <textarea className="editor" value={text} onChange={handleTextChange} />
    </>
  );
};

export default MarkdownEditor;
