const Child4 = (props) => {
  console.log(props);

  const handleBtn = () => {
    console.log("Button Click");
    props.data("Welcome");
  };
  return (
    <div>
      <h2>Child 4</h2>
      <button onClick={handleBtn}>Click</button>
    </div>
  );
};

export default Child4;
