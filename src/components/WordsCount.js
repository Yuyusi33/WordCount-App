import { useEffect, useState } from "react";

const WordsCount = ({ text }) => {
  const [words, setWords] = useState([]);

  useEffect(() => {
    const array = text.split(" ");

    const neWordArray = array.filter((element) => element !== "");

    setWords(neWordArray);
  }, [text]);

  return (
    <div>
      <p>Words {words.length}</p>
    </div>
  );
};

export default WordsCount;
