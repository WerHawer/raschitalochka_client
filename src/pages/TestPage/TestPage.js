import React from "react";

const testWords = ["kokokok", "kolpop", "optop", "okli", "por"];

const TestPage = ({ test, testAction }) => {
  const handleClick = () => {
    const randomIndex = (max) => Math.floor(Math.random() * Math.floor(max));
    const randomWord = testWords[randomIndex(testWords.length)];
    testAction(randomWord);
  };
  return (
    <>
      <h1>Routing_1</h1>
      <p>Redux with persist: {test}</p>
      <button onClick={handleClick}>Test redux</button>
    </>
  );
};

export default TestPage;
