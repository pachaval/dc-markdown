import useMarkdownStore from "../store/markdownStore";
import "../styles/markdown.css";
import MarkdownRenderer from "./TextTransformer";

const MarkdownDisplay = () => {
  const textToRender = useMarkdownStore((state) => (state.isLive ? state.text : state.displayText));

  return (
    <div className="display">
      <MarkdownRenderer text={textToRender} />
    </div>
  );
};

export default MarkdownDisplay;