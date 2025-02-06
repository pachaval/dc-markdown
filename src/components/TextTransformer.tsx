import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import rehypeRaw from "rehype-raw";

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

const transformText = (text: string) => {
  return text
    .replace(/'(.+?)'/g, `<span className="robotic">$1</span>`)
    .replace(/\n{2,}/g, "\n\n<br>\n\n");
};

const CustomCode = ({
  inline,
  children,
}: {
  inline?: boolean;
  children?: React.ReactNode;
}) => {
  const codeText = String(children);

  if (!inline && codeText.includes("\n")) {
    return (
      <div
        className="boxed-content"
      >
        {codeText}
      </div>
    );
  }

  return <code>{codeText}</code>;
};
