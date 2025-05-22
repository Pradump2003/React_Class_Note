import Child1 from "./Child1";

export default function Parent1() {
  let str = "Hello Child 1";
  let user = {
    id: 1,
    ename: "Pradum",
  };

  let arr = [10, 30, 40, 50];
  let products = [
    {
      id: 1,
      name: "Samsung",
      price: 60000,
    },
    {
      id: 2,
      name: "Apple",
      price: 100000,
    },
    {
      id: 3,
      name: "Vivo",
      price: 50000,
    },
  ];

  return (
    <div>
      <h1>I am Parent1</h1>
      <Child1 data={str} user={user} arr={arr} products={products}/>
    </div>
  );
}
