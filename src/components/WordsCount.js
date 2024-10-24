import { useEffect, useState } from "react";

const WordsCount = ({ text }) => {
  const [words, setWords] = useState(0);
  useEffect(() => {
    const Words = "";
  }, [text]);

  return (
    <div>
      <p>Words {words}</p>
    </div>
  );
};

export default WordsCount;
