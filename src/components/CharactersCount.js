import { useState } from "react";

const CharacterCount = ({ handleTextCount }) => {
  const [characterCount, setCharacterCount] = useState(0);

  return (
    <div>
      <p>Character {characterCount}</p>
    </div>
  );
};

export default CharacterCount;
