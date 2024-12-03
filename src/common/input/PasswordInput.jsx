import { useState } from "react";

const PasswordInput = ({ text, change }) => {
  const [isShow, setIsShow] = useState(false);
  const changeShow = () => setIsShow((prev) => !prev);
  return (
    <div className="border border-black p-2">
      <span>{text}</span>
      <input onChange={change} type={isShow ? "text" : "password"}></input>
      <button onClick={() => changeShow()}>
        {isShow ? "보이기" : "가리기"}
      </button>
    </div>
  );
};

export default PasswordInput;
