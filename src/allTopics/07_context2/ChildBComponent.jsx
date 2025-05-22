import { useContext } from "react";
import { GLOBAL_CONTEXT } from "./Context2";

const ChildBComponent = () => {
  let val = useContext(GLOBAL_CONTEXT);
  console.log(val);

  return (
    <div>
      <h1>ChildBComponent {val}</h1>
    </div>
  );
};

export default ChildBComponent;






// import React, { useContext } from 'react'
// import { globalContext } from './Context2'


// const ChildBComponent = () => {

//   let val = useContext(globalContext)
//   return (
//     <div>
//       <h2>ChildBComponent {val}</h2>
//     </div>
//   )
// }

// export default ChildBComponent












