const ValidButton = ({ check }) => {
  return (
    <button className={`p-1 ${check.isSame ? "bg-pink-500" : "bg-slate-300"}`}>
      {check.isSame ? "일치" : "불일치"}
    </button>
  );
};

export default ValidButton;
