import { FiSun } from "react-icons/fi";
import { FaMoon } from "react-icons/fa";
import { useState } from "react";

const DarkMode = () => {
  // react icons 활용
  const [isSun, setIsSun] = useState(true);

  // 한줄로 간결하게 가독성
  //   const change = () => {
  // alert(isSun ? "화이트모드" : "다크모드")
  //     setIsSun((prev) => !prev);
  //   };

  // return 명시적으로 이용해서 명확하게
  const change1 = () => {
    alert(isSun ? "화이트모드" : "다크모드");
    setIsSun((v) => {
      return !v;
    });
  };

  return (
    <>
      <button onClick={change1}>{isSun ? <FiSun /> : <FaMoon />} </button>
    </>
  );
};

export default DarkMode;
