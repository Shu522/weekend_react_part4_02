import { useState } from "react";

import PasswordInput from "../common/input/PasswordInput";
import ValidButton from "../common/buttons/ValidButton";

const Password = () => {
  const [check, setCheck] = useState({
    password: "",
    passwordCheck: "",
    isSame: true,
  });

  const change1 = (e) => {
    const { value } = e.target;
    setCheck((prev) => {
      return { ...prev, password: value, isSame: value == prev.passwordCheck };
    });
  };

  const change2 = (e) => {
    const { value } = e.target;
    setCheck((prev) => {
      return { ...prev, passwordCheck: value, isSame: value == prev.password };
    });
  };

  return (
    <>
      <PasswordInput text={"비밀번호"} change={(e) => change1(e)} />

      <PasswordInput text={"비밀번호 확인"} change={(e) => change2(e)} />
      <ValidButton check={check} />
    </>
  );
};

export default Password;
