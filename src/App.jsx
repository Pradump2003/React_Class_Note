import CounterInFBC from "./allTopics/02_states/CounterInFBC";
import StatesinFBC from "./allTopics/02_states/StatesinFBC";
import Cbc from "./allTopics/01_typesofcomponents/Cbc";
import Fbc from "./allTopics/01_typesofcomponents/Fbc";
import Navbar from "./components/Navbar";
import StatesInCbc from "./allTopics/02_states/StatesInCbc";
import Parent1 from "./allTopics/03_props/Parent1";
import Parent2 from "./allTopics/03_props/Parent2";
import Parent3 from "./allTopics/03_props/Parent3";
import Parent4 from "./allTopics/03_props/Parent4";
import Parent5 from "./allTopics/03_props/Parent5";
import DrillParent1 from "./allTopics/04_propsDrilling/DrillParent1";
import Counter from "./components/Counter";
import ParentComponent from "./allTopics/07_context2/ParentComponent";
import Context2 from "./allTopics/07_context2/Context2";
import Cart from "./allTopics/07_context2/Cart";
import InlineCSS from "./allTopics/08_reactCSS/InlineCSS";
import MyContext from "./allTopics/05_context/MyContext";
import ParentA from "./allTopics/06_renendering_of_components/ParentA";
import Card from "./allTopics/08_reactCSS/Card";
import ControlledForm1 from "./allTopics/09_controlledform/ControlledForm1";
import TodoWrapper from "./task1/TodoWrapper";
import UncontrolledForms from "./allTopics/10_uncontrolledForms/UncontrolledForms";
import UseReducer from "./allTopics/11_useReducer/UseReducer";
import LifeCycleInFBC from "./allTopics/12_LifeCtcle/LifeCycleInFBC";
import LifeCycleInCBC from "./allTopics/12_LifeCtcle/LifeCyclelnCBC";
import { useState } from "react";
import FetchApi from "./allTopics/13_fetch/FetchApi";
import FetchApi2 from "./allTopics/13_fetch/FetchApi2";
import UseReducer1 from "./allTopics/14_useReducer2/Reducer";
import Reducer from "./allTopics/14_useReducer2/Reducer";
import MyComponent from "./allTopics/15_memo_and_callback/MyComponent";
import MyNavbar from "./allTopics/16_browerRouter/MyNavbar";
import Routing1 from "./allTopics/16_browerRouter/Routing1";

const App = () => {
  const [toggle, setToggle] = useState(false);

  function toggleHandle() {
    setToggle(!toggle);
  }

  return (
    <div>
      {/* <Navbar />
            <Fbc />
            <Cbc /> */}
      {/* <StatesinFBC />
            <CounterInFBC /> */}
      {/* <StatesInCbc /> */}
      {/* <Parent1 /> */}
      {/* <Parent2 /> */}
      {/* <Parent3 /> */}
      {/* <Parent4 /> */}
      {/* <Parent5 /> */}
      {/* <DrillParent1 /> */}
      {/* <Counter /> */}
      {/* <Context2>
                <ParentComponent />
                <Cart />
            </Context2> */}
      {/* <InlineCSS /> */}
      {/* <MyContext /> */}
      {/* <ParentA /> */}
      {/* <Card /> */}
      {/* <ControlledForm1 /> */}
      {/* <DisplayTodo /> */}
      {/* <TodoWrapper /> */}
      {/* <UncontrolledForms /> */}
      {/* <UseReducer /> */}

      {/* <button onClick={toggleHandle} className="bg-amber-300">
        toggle component
      </button>

      {toggle ? <LifeCycleInFBC /> : <h1>No component</h1>} */}
      {/* <FetchApi /> */}
      {/* <button
        onClick={toggleHandle}
        className="bg-red-500 px-2 py-2 mb-3 rounded-md font-bold text-lg"
      >
        toggle
      </button>
      {toggle ? <FetchApi2 /> : <h1>No Component</h1>} */}
      {/* <Reducer /> */}
      {/* <MyComponent /> */}
      <Routing1 />

      
    </div>
  );
};

export default App;
