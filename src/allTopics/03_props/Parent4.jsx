import { useState } from "react";
import Child4 from "./Child4";

const Parent4 = () => {
  const [state, setState] = useState("");

  //this function receive data from child component
  function getData(x) {
    console.log(x);
    setState(x);
  }

  return (
    <div>
      <h1>Parent 4 <span>{state}</span></h1>
      <Child4 data={getData} />
    </div>
  );
};

export default Parent4;
