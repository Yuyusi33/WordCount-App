import { useEffect, useState } from "react";

const CharacterCount = ({ text }) => {
  const [characterCount, setCharacterCount] = useState(0);

  useEffect(() => {
    const charArray = text.split("");

    const filterCharArray = charArray.filter((element) => element !== " ");
    setCharacterCount(filterCharArray.length);
  }, [text]);

  return (
    <div>
      <p>Character {characterCount}</p>
    </div>
  );
};

export default CharacterCount;
