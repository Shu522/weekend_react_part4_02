import { useState } from "react";

const FruitButton = ({ a, b }) => {
  const [friut, setFruit] = useState(a);

  const change = () => {
    setFruit((v) => (v == a ? b : a));
  };
  return (
    <button onClick={change} className="p-2 bg-red-500">
      {friut}
    </button>
  );
};

export default FruitButton;
