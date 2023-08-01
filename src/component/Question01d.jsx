import { useState } from "react";
const Question01d = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };


  return (
    <div
      className={`switch-button ${isOn ? "on" : "off"}`}
      onClick={handleToggle}
    >
      <div className="toggle">{isOn ? <span>ON</span> : <span>OFF</span>}</div>
    </div>
  );
};

export default Question01d;
