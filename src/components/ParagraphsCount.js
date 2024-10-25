import { useEffect, useState } from "react";

const ParagraphsCount = ({ text }) => {
  const [parag, setParag] = useState([]);

  useEffect(() => {
    const paragArray = text.split(/\n+/).filter((element) => element.trim());

    setParag(paragArray);
  }, [text]);

  return (
    <div>
      <p>Paragraphs {parag.length}</p>
    </div>
  );
};

export default ParagraphsCount;
