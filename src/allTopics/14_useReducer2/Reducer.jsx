// import React, { useReducer } from "react";

// let initialState = 0;
// function reducerfunc(prevState, action) {
//   switch (action) {
//     case "increment":
//       return prevState + 1;

//     case "decrement":
//       if (prevState > 1) {
//         return prevState - 1;
//       }
//       break;

//     case "reset":
//       return 0;
//   }
// }

// const Reducer = () => {
//   const [state, dispatch] = useReducer(reducerfunc, initialState);
//   console.log(state);

//   return (
//     <div className="flex flex-col gap-4 ">
//       <h1>Reducer {state}</h1>
//       <button className="mx-4 border-black rounded-md bg-blue-500 px-2 py-2" onClick={() => dispatch("increment")}>increment</button>
//       <button className="mx-4 border-black rounded-md bg-blue-500 px-2 py-2" onClick={() => dispatch("decrement")}>decrement</button>
//       <button className="mx-4 border-black rounded-md bg-blue-500 px-2 py-2" onClick={() => dispatch("reset")}>Reset</button>
//     </div>
//   );
// };

// export default Reducer;

import React, { useReducer } from "react";
let initialState = 0;

const Reducer = () => {
  const [state, dispatch] = useReducer(reducerFunc, initialState);
  function reducerFunc(preState, action) {
    switch (action) {
      case "increment":
        return preState + 1;
      case "decrement":
        return preState - 1;
      case "reset":
        return 0;
    }
  }

  return (
    <div className="mx-4">
      <h1 className=" mb-4">Reducer {state}</h1>
      <button
        className="border-black rounded-md bg-blue-500 px-3 py-2"
        onClick={() => dispatch("increment")}
      >
        Increment
      </button>
      <button
        className="mx-4 border-black rounded-md bg-blue-500 px-3 py-2"
        onClick={() => dispatch("decrement")}
      >
        Decrement
      </button>
      <button
        className=" border-black rounded-md bg-blue-500 px-3 py-2"
        onClick={() => dispatch("reset")}
      >
        Reset
      </button>
    </div>
  );
};

export default Reducer;
