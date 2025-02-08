export const transformText = (text: string) => {
  const codeBlocks: string[] = [];
  text = extractCodeBlocks(text, codeBlocks);
  text = formatInlineCode(text);
  text = removePeriodBeforeNewline(text);
  text = replaceNewlinesWithBreaks(text);
  text = restoreCodeBlocks(text, codeBlocks);
  return text;
};

const extractCodeBlocks = (text: string, codeBlocks: string[]) =>
  text.replace(/```([\s\S]+?)```/g, (_, code) => {
    codeBlocks.push(code);
    return `BOXED_CONTENT_${codeBlocks.length - 1}`;
  });

const formatInlineCode = (text: string) => {
  return text.replace(/`([^`\n]+)`/g, `<span className="robotic">$1</span>`);
};

const removePeriodBeforeNewline = (text: string) => {
  return text.replace(/\.\n/g, "\n");
};

const replaceNewlinesWithBreaks = (text: string) => {
  return text.replace(/\n/g, "<br>\n");
};

const restoreCodeBlocks = (text: string, codeBlocks: string[]) => {
  return text.replace(/BOXED_CONTENT_(\d+)/g, (_, index) => {
    const codeContent = codeBlocks[Number(index)]
      .replace(/^```|```$/g, "")
      .trim();
    return `<div class="boxed-content">${codeContent}</div>`;
  });
};
