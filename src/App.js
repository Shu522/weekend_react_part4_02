// import Icon from "./presentation/icon/Icon";
// import { FaHome } from "react-icons/fa";
// import { FaSearch } from "react-icons/fa";
// import Button from "./common/Button.jsx";
// import FruitButton from "./common/FruitButton.jsx";
// import Count from "./common/Count.jsx";
// import Input from "./common/Input.jsx";
// import Register from "./common/register.jsx";

import Coffee from "./container/Coffee";
import Password from "./container/Password";
import Select from "./container/Select";

// import DarkMode from "./common/DarkMode";

function App() {
  return (
    <div className="App">
      <div className="flex flex-col gap-2">
        <Select menu={["민트", "초코", "딸기", "바나나", "키위"]} />
        <Select menu={["윈터", "민정", "설윤"]} />
        <Select menu={["치즈", "바바", "띠", "준석"]} />
      </div>
      {/* <Icon icon={<FaHome />} title={"Home"} />
      <Icon icon={<FaSearch />} title={"Search"} />
      <Button coffee={"아메리카노"} num={3} />
      <Button coffee={"초코라떼"} num={99} /> */}
      {/* <FruitButton a={"aa"} b={"b"} /> */}
      {/* <Count a={0} />
      <Input /> */}
      {/* <Register /> */}
      <div className="h-10" />
      <Password />
      {/* <DarkMode /> */}
      <Coffee />
    </div>
  );
}

export default App;
