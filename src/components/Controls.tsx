import React, { memo } from "react";
import useMarkdownStore from "../store/markdownStore";

const Controls: React.FC = memo(() => {
  const isLive = useMarkdownStore((state) => state.isLive);
  const setLiveMode = useMarkdownStore((state) => state.setLiveMode);
  const handleRender = useMarkdownStore((state) => state.handleRender);

  return (
    <div className="controls">
      <div className="radio-group">
        <label>
          <input
            type="radio"
            name="mode"
            value="live"
            checked={isLive}
            onChange={() => setLiveMode(true)}
          />
          Live
        </label>
        <label>
          <input
            type="radio"
            name="mode"
            value="manual"
            checked={!isLive}
            onChange={() => setLiveMode(false)}
          />
          Manual
        </label>
      </div>

      <button
        onClick={handleRender}
        className="render-button"
        disabled={isLive}
      >
        RENDER
      </button>
    </div>
  );
});

export default Controls;
