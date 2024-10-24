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
          <CharacterCount text={text} />
        </div>
        <div>
          <WordsCount text={text} />
        </div>
        <div>
          <ParagraphsCount text={text} />
        </div>
        <div>
          <SpacesCount text={text} />
        </div>
      </div>
    </div>
  );
}

export default App;
