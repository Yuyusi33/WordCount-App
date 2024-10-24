import { useEffect, useState } from "react";

const SpacesCount = ({ text }) => {
  const [spaces, setSpaces] = useState(0);

  useEffect(() => {}, [text]);

  return (
    <div>
      <p>Spaces {spaces}</p>
    </div>
  );
};

export default SpacesCount;
