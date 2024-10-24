import CharacterCount from "./components/CharactersCount";
import ParagraphsCount from "./components/ParagraphsCount";
import SpacesCount from "./components/SpacesCount";
import WordsCount from "./components/WordsCount";
import "./App.css";
import InputText from "./components/InputText";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");

  const handleOnTextChange = (inputedText) => {
    setText(inputedText);
  };

  const handleTextCount = (texts) => {
    console.log("thisis", text);
  };

  return (
    <div className=" container">
      <h2>Character Count Tool</h2>
      <div>
        <form>
          <InputText onTextChange={handleOnTextChange} />
        </form>
      </div>
      <div className="display-result">
        <div>
          <CharacterCount onTextCount={handleTextCount} />
        </div>
        <div>
          <WordsCount />
        </div>
        <div>
          <ParagraphsCount />
        </div>
        <div>
          <SpacesCount />
        </div>
      </div>
    </div>
  );
}

export default App;
