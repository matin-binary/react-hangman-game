import React from "react";
import "./App.css";
import Header from "./components/Header";
import Figure from "./components/Figure";
import WrongLetters from "./components/WrongLetters";
import Word from "./components/Word";

const words = [
  "anxiety",
  "summer",
  "dance",
  "digital",
  "resist",
  "definite",
  "achievement",
  "central",
  "uncle",
  "trench",
  "agony",
  "party",
  "reduce",
  "morning",
  "decide",
  "transaction",
  "remunerate",
  "descent",
  "election",
  "monster",
];
let selected_word = words[Math.floor(Math.random() * words.length)];

function App() {
  const [correct_letters, setCorrectLetters] = React.useState([]);
  const [wrong_letters, setWrongLetters] = React.useState([]);

  React.useEffect(() => {
    const handleKeydown = (event) => {
      const { key, keyCode } = event;
      if (wrong_letters.length <= 5 && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        if (selected_word.includes(letter)) {
          if (correct_letters.includes(letter)) {
            // Already entered
          } else {
            setCorrectLetters((correct_letters) => [
              ...correct_letters,
              letter,
            ]);
          }
        } else {
          if (wrong_letters.includes(letter)) {
            // Already entered
          } else {
            setWrongLetters((wrong_letters) => [...wrong_letters, letter]);
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => window.removeEventListener("keydown", handleKeydown);
  }, [correct_letters, wrong_letters]);

  return (
    <div className="App">
      <Header />
      <div className="Body">
        <Figure wrong_letters={wrong_letters} />
        <WrongLetters wrong_letters={wrong_letters} />
        <Word selected_word={selected_word} correct_letters={correct_letters} />
      </div>
    </div>
  );
}

export default App;
