import { useEffect, useState } from "react";

const SpacesCount = ({ text }) => {
  const [spaces, setSpaces] = useState(0);

  useEffect(() => {
    const spacesArray = text.split("");
    const countSpacesArray = spacesArray.filter((element) => element === " ");

    setSpaces(countSpacesArray.length);
  }, [text]);

  return (
    <div>
      <p>Spaces {spaces}</p>
    </div>
  );
};

export default SpacesCount;
