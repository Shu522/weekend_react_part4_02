const fruits = ["apple", "banana", "pineapple", "mango", "kiwi"];

const [a, b, c] = fruits; // apple, banana, pineapple
const [a1] = fruits; // apple

const test = () => {
  return ["국어", "영어", "수학", "사회", "과학"];
};

const [a2, b2, c2] = test(); // 국어 영어 수학

const menu = [
  { name: "커피", price: 2500 },
  { name: "도너츠", price: 3000 },
  { name: "타르트", price: 3500 },
];

// menu.map((v, i) => {
//   v.id = i + 1;
//   return v;
// });

// 아래 방식으로 연습
menu.map((v, i) => {
  return { ...v, id: i + 1 };
});

const starbucks = [
  { name: "americano", shot: 2, price: 4000 },
  { name: "latte", shot: 2, price: 5000 },
  { name: "mint", shot: 0, price: 5500 },
];

starbucks.map((v, i) => {
  return { ...v, no: i, shot: v.shot + 1, price: v.price + 1000 };
});
