import React from "react";

const WrongLetters = ({ wrong_letters }) => (
  <div className="Wrong-letters-container">
    <div>
      {wrong_letters.length > 0 && <p>Wrong!</p>}
      {wrong_letters
        .map((char, i) => <span key={i}>{char}</span>)
        .reduce(
          (prev, curr) => (prev === null ? [curr] : [prev, ", ", curr]),
          null
        )}
    </div>
  </div>
);

export default WrongLetters;
