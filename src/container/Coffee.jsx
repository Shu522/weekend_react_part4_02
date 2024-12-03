import { useState } from "react";
import CoffeeButton from "../common/buttons/CoffeeButton";

const Coffee = () => {
  const [coffee, setCoffee] = useState([false, false, false, false]);

  const change = (num) => {
    setCoffee((prev) => {
      const newArr = prev.map((v, i) => i == num);
      return newArr;
    });
  };
  return (
    <div className="flex">
      <CoffeeButton
        change={() => change(0)}
        coffee={"전체"}
        isSelected={coffee[0]}
      />
      <CoffeeButton
        change={() => change(1)}
        coffee={"커피"}
        isSelected={coffee[1]}
      />
      <CoffeeButton
        change={() => change(2)}
        coffee={"논커피"}
        isSelected={coffee[2]}
      />
      <CoffeeButton
        change={() => change(3)}
        coffee={"더치커피"}
        isSelected={coffee[3]}
      />
    </div>
  );
};

export default Coffee;
