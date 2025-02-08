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
  const codeBlocks: string[] = [];
  text = text.replace(/```([\s\S]+?)```/g, (match) => {
    codeBlocks.push(match); 
    return `CODE_BLOCK_${codeBlocks.length - 1}`; 
  });
  text = text.replace(/`([^`\n]+)`/g, `<span className="robotic">$1</span>`);
  text = text.replace(/\.\n/g, "\n");
  text = text.replace(/\n(?!CODE_BLOCK_\d+)/g, "<br>\n");
  text = text.replace(
    /CODE_BLOCK_(\d+)/g,
    (_, index) => codeBlocks[Number(index)]
  );
  return text;
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
    return <div className="boxed-content">{codeText}</div>;
  }

  return <code>{codeText}</code>;
};
