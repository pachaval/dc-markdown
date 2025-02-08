export const transformText = (text: string) => {
    const codeBlocks: string[] = [];
  
    text = text.replace(/```([\s\S]+?)```/g, (match) => {
      codeBlocks.push(match);
      return `CODE_BLOCK_${codeBlocks.length - 1}`;
    });
  
    text = text.replace(/`([^`\n]+)`/g, `<span className="robotic">$1</span>`);
  
    text = text.replace(/\.\n/g, "\n");
  
    text = text.replace(/\n/g, "<br>\n");
  
    text = text.replace(/CODE_BLOCK_(\d+)/g, (_, index) => {
      const codeContent = codeBlocks[Number(index)]
        .replace(/^```|```$/g, '') 
        .trim(); 
      return `<div class="boxed-content">${codeContent}</div>`;
    });
  
    return text;
  };
  