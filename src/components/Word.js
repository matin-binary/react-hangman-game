import React from "react";

const Word = ({ selected_word, correct_letters }) => (
  <div className="Word">
    {selected_word.split("").map((char, i) => (
      <span className="Letter" key={i}>
        {correct_letters.includes(char) ? char : ""}
      </span>
    ))}
  </div>
);

export default Word;
