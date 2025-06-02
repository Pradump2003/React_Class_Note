export default function IncrementBtn(props) {
  const inc = () => {
    props.setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <button onClick={inc}>Increment</button>
    </div>
  );
}
  