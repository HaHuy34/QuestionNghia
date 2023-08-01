import { useState } from "react";
const Question01c = () => {
  const [nameList, setNameList] = useState([
    "Huy",
    "Hiếu",
    "Hoai",
    "Dung",
    "Nam",
    "Truong",
  ]);
  const handleNameClick = (index) => {
    const updatedNameList = [...nameList];
    updatedNameList.splice(index, 1);
    setNameList(updatedNameList);
  };

  return (
    <>
      <h1>Name List</h1>
      <ol>
        {nameList.map((name, index) => (
          <li key={index} onClick={() => handleNameClick(index)}>
            {name}
          </li>
        ))}
      </ol>
    </>
  );
};

export default Question01c;
