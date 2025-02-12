import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import rehypeRaw from "rehype-raw";
import { memo } from "react";

import { transformText } from "../utils/helpers";
import CustomCode from "./CustomCode";

const MarkdownRenderer = memo(({ text }: { text: string }) => {
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
});

export default MarkdownRenderer;
