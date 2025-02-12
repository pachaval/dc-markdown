import React from "react";

interface ControlsProps {
  handleModeChange: (isLive: boolean) => void;
  handleRender: () => void;
  isLive: boolean;
}

const Controls: React.FC<ControlsProps> = ({
  handleModeChange,
  handleRender,
  isLive,
}) => {
  return (
    <div className="controls">
      <div className="radio-group">
        <label>
          <input
            type="radio"
            name="mode"
            value="live"
            checked={isLive}
            onChange={() => handleModeChange(true)}
          />
          Live
        </label>
        <label>
          <input
            type="radio"
            name="mode"
            value="manual"
            checked={!isLive}
            onChange={() => handleModeChange(false)}
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
};

export default Controls;
