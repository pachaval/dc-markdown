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

export default CustomCode;
