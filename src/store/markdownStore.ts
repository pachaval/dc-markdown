import { create } from "zustand";

interface MarkdownState {
  text: string;
  displayText: string;
  isLive: boolean;
  setText: (text: string) => void;
  setLiveMode: (isLive: boolean) => void;
  handleRender: () => void;
}

const useMarkdownStore = create<MarkdownState>((set, get) => ({
  text: "# Test document\n\nLets create a variable `x`, equal to 5.\n\n```\nx = 5\n```",
  displayText:
    "# Test document\n\nLets create a variable `x`, equal to 5.\n\n```\nx = 5\n```",
  isLive: localStorage.getItem("markdown_mode") !== "manual",

  setText: (text: string) => {
    set({ text });
    if (get().isLive) {
      set({ displayText: text });
    }
  },

  setLiveMode: (isLive: boolean) => {
    set({ isLive });
    localStorage.setItem("markdown_mode", isLive ? "live" : "manual");
  },

  handleRender: () => {
    set({ displayText: get().text });
  },
}));

export default useMarkdownStore;
