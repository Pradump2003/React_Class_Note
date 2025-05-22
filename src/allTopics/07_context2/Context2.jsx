import React, { createContext } from "react";

export const GLOBAL_CONTEXT = createContext();

const Context2 = (props) => {
  console.log(props);
  const data = "Hello Word";

  return (
    <GLOBAL_CONTEXT.Provider value={data}>
      {props.children}
    </GLOBAL_CONTEXT.Provider>
  );
};

export default Context2;





// import React, { createContext } from 'react'

// export const globalContext = createContext();

// const Context2 = (props) => {
//   console.log(props);
  

//   let data = "Pradum Prajapati"

//   return (
//     <globalContext.Provider value={data}>
//       {props.children}
//     </globalContext.Provider>
//   )
// }

// export default Context2
