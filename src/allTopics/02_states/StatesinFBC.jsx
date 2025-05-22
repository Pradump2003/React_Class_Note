import { useState } from "react";

const StatesinFBC = () => {

    let [state, setState] = useState("add to cart");
    // console.log(state);
    // console.log(setState);

    function cartBtn() {
        setState("Go to Cart")
    }
    
    return(
        <div>
            <h1>States in Function Based Components</h1>
            <button onClick={cartBtn}>{state}</button>
        </div>
    );
}

export default StatesinFBC;