import { useEffect, useState } from "react";

const CharacterCount = ({ text }) => {
  const [characterCount, setCharacterCount] = useState([]);

  useEffect(() => {
    const charArray = text.split("");
    const filterCharArray = charArray.filter((element) => element !== " ");
    console.log(filterCharArray);

    setCharacterCount(filterCharArray.length);
  }, [text]);

  return (
    <div>
      <p>Character {characterCount}</p>
    </div>
  );
};

export default CharacterCount;
