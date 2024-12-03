const CoffeeButton = ({ coffee, isSelected, change }) => {
  return (
    <>
      <button
        onClick={change}
        className={`p-5 border border-slate-600 ${
          isSelected ? "bg-pink-500" : "bg-white"
        }`}
      >
        {coffee}
      </button>
    </>
  );
};

export default CoffeeButton;
