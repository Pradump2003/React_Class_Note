import { useState } from "react";
import Child3 from "./Child3";

const Parent3 = () => {
const [state, setState] = useState("")

  function getDataFromChild(data) {
    console.log(data);
    setState(data);

  }
  return (
    <div>
      <h1>Parent 3 Component {state}</h1>
      <Child3 getData={getDataFromChild} />
    </div>
  );
};

export default Parent3;
