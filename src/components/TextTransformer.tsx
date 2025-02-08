import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import rehypeRaw from "rehype-raw";

import { transformText } from "../utils/helpers";
import CustomCode from "./CustomCode";

const MarkdownRenderer = ({ text }: { text: string }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkBreaks]}
      rehypePlugins={[rehypeRaw]}
      className="markdown"
      components={{
        code: CustomCode,
      }}
    >
      {transformText(text)}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;
