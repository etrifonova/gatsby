import React, { useState, useEffect } from "react";
import { BASIC_VERBS, INTERMEDIATE_VERBS } from "./verbs.js";
import "./verbsPractice.css";

const VerbPractice = () => {
  const [verbs, setVerbs] = useState(BASIC_VERBS);
  const [randomElement, setRandomElement] = useState(null);
  const [randomInfinitive, setRandomInfinitive] = useState("");
  const [userInput, setUserInput] = useState("");
  const [userInput2, setUserInput2] = useState("");
  const [message, setMessage] = useState("");
  const [showAnswer, setShowAnswer] = useState("");
  const [selectedValue, setSelectedValue] = useState("");

  //  RADIO BUTTONS
  const handleRadioChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedValue(selectedValue);
    switch (selectedValue) {
      case "part1":
        setVerbs(BASIC_VERBS);
        break;
      case "part2":
        setVerbs(INTERMEDIATE_VERBS);
        break;
      default:
        setVerbs(BASIC_VERBS);
    }
  };

  // Map selected value to display text
  const getDisplayText = (value) => {
    switch (value) {
      case "part1":
        return "базовый";
      case "part2":
        return "продвинутый";
      default:
        return "";
    }
  };

  const generateRandomVerb = () => {
    const randomIndex = Math.floor(Math.random() * verbs.length);
    const randomVerb = verbs[randomIndex];
    setRandomElement(randomVerb);
    setRandomInfinitive(randomVerb.infinitive);
    setMessage("");
    setUserInput("");
    setUserInput2("");
    setShowAnswer("");
  };

  const checkAnswer = () => {
    const correctAnswer = verbs.find(
      (element) => element.infinitive === randomInfinitive
    ).psimple;

    const correctAnswer2 = verbs.find(
      (element) => element.infinitive === randomInfinitive
    ).pparticiple;

    if (
      userInput.trim().toLowerCase() === correctAnswer &&
      userInput2.trim().toLowerCase() === correctAnswer2
    ) {
      setMessage("Correct!");
      const updatedVerbs = verbs.filter((verb) => verb !== randomElement);
      setVerbs(updatedVerbs);
      setTimeout(() => {
        generateRandomVerb();
      }, 1500);
    } else {
      setMessage("Wrong!");
    }
  };

  const handleShowAnswer = () => {
    setShowAnswer(`${randomElement.psimple} ${randomElement.pparticiple}`);
  };

  // Add event listener for Enter key
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        checkAnswer();
      }
    };

    // Attach the event listener to the input fields
    const input1 = document.querySelector(".verbs__input:first-of-type");
    const input2 = document.querySelector(".verbs__input:last-of-type");

    if (input1) input1.addEventListener("keypress", handleKeyPress);
    if (input2) input2.addEventListener("keypress", handleKeyPress);

    // Cleanup the event listeners on component unmount
    return () => {
      if (input1) input1.removeEventListener("keypress", handleKeyPress);
      if (input2) input2.removeEventListener("keypress", handleKeyPress);
    };
  }, [userInput, userInput2]); // Re-run effect if userInput or userInput2 changes

  return (
    <div className="verbs__container">
      <div className="verbs__radio-group">
        <div className="verbs__radio-group-title">
          Выберите список глаголов:
        </div>
        <label className="verbs__radio-label">
          <input
            type="radio"
            name="verbLevel"
            value="part1"
            checked={selectedValue === "part1"}
            onChange={handleRadioChange}
          />
          базовый
        </label>
        <label className="verbs__radio-label">
          <input
            type="radio"
            name="verbLevel"
            value="part2"
            checked={selectedValue === "part2"}
            onChange={handleRadioChange}
          />
          продвинутый
        </label>
      </div>

      <p>Осталось глаголов: {verbs.length}</p>

      <div className="verbs__forms-area">
        <button className="button generate" onClick={generateRandomVerb}>
          Generate
        </button>
        <div className="verbs__forms-area_item">Infinitive</div>
        <div className="verbs__forms-area_item">Past Simple</div>
        <div className="verbs__forms-area_item">Past Participle</div>
        <div className="verbs__random">{randomInfinitive}</div>

        <input
          className="verbs__input psimple"
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />

        <input
          className="verbs__input pparticiple"
          type="text"
          value={userInput2}
          onChange={(e) => setUserInput2(e.target.value)}
        />
      </div>

      <div className="verbs__message">
        <button className="button" onClick={checkAnswer}>
          Check
        </button>
        <div>{message}</div>
      </div>

      <div className="verbs__message">
        <button className="button" onClick={handleShowAnswer}>
          Show Answer
        </button>
        <div>{showAnswer}</div>
      </div>
    </div>
  );
};

export default VerbPractice;
