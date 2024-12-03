const Button = ({ num, coffee }) => {
  // props로 커피 이름 받으면 버튼안의 컨텐츠가 커피 이름 나오고 클릭하면 ~~ 커피 주문 하셨습니다 alert

  const hello = (x) => {
    alert(`${x}개 ${coffee} 커피 주문 하셨습니다`);
  };
  return (
    <button onClick={() => hello(num)} className="p-3 bg-gray-500 border-r-2">
      {coffee}
    </button>
  );
};

export default Button;
