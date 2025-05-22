export default function Child1(props) {
  console.log(props.products);

  return (
    <div>
      <h1>I am Child1</h1>
      <h2>{props.data}</h2>
      <h2>{props.user.ename}</h2>
      <h2>{props.arr[0]}</h2>
      {props.products.map((product) => {
        console.log(product.name);
        return(
            <div key={product.id}>
                <h1>Name :<mark>{product.name}</mark></h1>
                <p>Price :{product.price} </p>
            </div>
        )
      })}
    </div>
  );
}
