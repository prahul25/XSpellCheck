import React, { useState } from "react";
import "./App.css";

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example",
};

function App() {
  const [text, setText] = useState("");
  const [suggestedText, setSuggestedText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);

    const words = text.split(" ");
    const correctedWords = words.map((word) => {
      const correctedWord = customDictionary[word.toLocaleLowerCase()];
      return correctedWord || word;
    });

    const firstCorrection = correctedWords.find(
      (word, idx) => word !== words[idx]
    );
    setSuggestedText(firstCorrection || "");
  };
  return (
    <div>
      <textarea
        value={text}
        rows={5}
        cols={40}
        onChange={handleChange}
        placeholder="Enter text..."
      ></textarea>
      {suggestedText && (
        <p>
          Did you mean: <strong>{suggestedText}</strong>?
        </p>
      )}
    </div>
  );
}

export default App;
