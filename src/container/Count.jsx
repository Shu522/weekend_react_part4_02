import { useState } from "react";

const Count = ({ a }) => {
  const [num, setNum] = useState(a);

  const add = () => {
    setNum((v) => {
      return v + 1;
    });
  };

  const reset = () => {
    setNum((v) => {
      return a;
    });
  };

  const abbb = () => {
    setNum((v) => {
      return v - 1;
    });
  };

  return (
    <div>
      <p>{num}</p>
      <button onClick={add} className="bg-blue-500 p-5">
        Plus
      </button>

      <button onClick={reset} className="bg-blue-500 p-5">
        Reset
      </button>
      <button onClick={abbb} className="bg-blue-500 p-5">
        {" "}
        nnn
      </button>
    </div>
  );
};

export default Count;
