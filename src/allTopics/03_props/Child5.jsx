import React from "react";

const Child5 = (props) => {
  const handleBtn = () => {
    console.log("Button clicked");
    props.setState("Welcome");
  };

  return (
    <div>
      <h2>Child5</h2>
      <button onClick={handleBtn}> Click</button>
    </div>
  );
};

export default Child5;
