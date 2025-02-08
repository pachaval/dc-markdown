import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import rehypeRaw from "rehype-raw";
import { transformText } from "../utils/helpers";

const MarkdownRenderer = ({ text }: { text: string }) => {
  return (
    <ReactMarkdown
      className="markdown"
      remarkPlugins={[remarkBreaks]}
      rehypePlugins={[rehypeRaw]}
      components={{
        code: CustomCode,
      }}
    >
      {transformText(text)}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;

const CustomCode = ({
  inline,
  children,
}: {
  inline?: boolean;
  children?: React.ReactNode;
}) => {
  const codeText = String(children);

  if (!inline && codeText.includes("\n")) {
    return <div className="boxed-content">{codeText}</div>;
  }

  return <code>{codeText}</code>;
};
