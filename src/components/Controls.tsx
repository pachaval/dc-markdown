import useMarkdownStore from "../store/markdownStore";
import React, { memo } from "react";

const Controls: React.FC = memo(() => {
  const { isLive, setLiveMode, handleRender } = useMarkdownStore();

  return (
    <div className="controls">
      <div className="radio-group">
        <label>
          <input type="radio" name="mode" value="live" checked={isLive} onChange={() => setLiveMode(true)} />
          Live
        </label>
        <label>
          <input type="radio" name="mode" value="manual" checked={!isLive} onChange={() => setLiveMode(false)} />
          Manual
        </label>
      </div>

      <button onClick={handleRender} className="render-button" disabled={isLive}>
        RENDER
      </button>
    </div>
  );
});

export default Controls;