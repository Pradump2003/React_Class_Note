export default function DecrementBtn(props) {
  const dec = () => {
    if (props.count > 0) {
      props.setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <div>
      <button onClick={dec} disabled={props.count === 0}>Decrement</button>
    </div>
  );
}
