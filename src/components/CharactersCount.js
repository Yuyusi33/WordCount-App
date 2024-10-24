import { useEffect, useState } from "react";

const CharacterCount = ({ text }) => {
  const [characterCount, setCharacterCount] = useState(0);

  useEffect(() => {
    setCharacterCount(text.length);
  }, [text]);

  return (
    <div>
      <p>Character {characterCount}</p>
    </div>
  );
};

export default CharacterCount;
