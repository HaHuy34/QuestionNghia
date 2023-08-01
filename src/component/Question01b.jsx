import { useState } from "react";

const Question01b = () => {
  const [seeMore, setSeeMore] = useState(false);
  const contentShow =
    "You will immediately go get your passport and pack for your trip before you can say how much you love this blog and the beautiful pictures posted here. You can find everything from the best food places to the least visited places, World of Wanderlust provides you with valuable experiences to plan your trip. Whether it's America, Costa Rica or Japan, this blog provides cultural enthusiasts with interesting information and helps them improve their English.";
  const toggleContent = () => {
    setSeeMore(!seeMore);
  };
  return (
    <>
      <h3>Welcome to javaTpoint!!</h3>
      <p className="contentShow">{seeMore ? contentShow : ""}</p>
      {seeMore ? (
        <button onClick={toggleContent}>Show Less</button>
      ) : (
        <button onClick={toggleContent}>Read More</button>
      )}
    </>
  );
};

export default Question01b;
