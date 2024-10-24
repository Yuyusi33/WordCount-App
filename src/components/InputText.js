import { useState } from "react";

const InputText = ({ onTextChange }) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    const newtext = e.target.value;
    setText(newtext);
    onTextChange(newtext);
  };

  return (
    <>
      <textarea
        id="textInput"
        name="textInput"
        placeholder="input text"
        value={text}
        onChange={handleChange}
      ></textarea>
    </>
  );
};
export default InputText;
