import { useState } from "react";

const Question01a = () => {
  const[curTime, setCurTime] = useState('')
  const handleUpdateTime = () => {
    const curDate = new Date();
    const options = { hour12: true };
    const formatTime = curDate.toLocaleTimeString("en-US", options);
    setCurTime(formatTime)
  }
  return (
    <>
      <h3>Time: {curTime}</h3>
      <button className="updateTime" onClick={handleUpdateTime}>
        Update Time
      </button>
    </>
  );
};

export default Question01a;
