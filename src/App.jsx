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

const App = () => {
    
    return(
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
            <Context2>
                <ParentComponent />
                <Cart />
            </Context2>
            {/* <InlineCSS /> */}
            {/* <MyContext /> */}
        </div>
    );
};

export default App;