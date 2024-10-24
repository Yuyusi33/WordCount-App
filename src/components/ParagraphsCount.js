import { useState } from "react";

const ParagraphsCount = () => {
  const [parag, setParag] = useState(0);

  return (
    <div>
      <p>Paragraphs {parag}</p>
    </div>
  );
};

export default ParagraphsCount;
