
import Child2 from './child2'
import Child2B from './Child2B';

function Parent2() {

    let str = "React.js";
    let arr = ["Frontend", "Backend", "Database"]
    let obj = {
        id: 1,
        ename: "Pradum",
    }
  return (
    <div>
        <h1>Parent 2 Component</h1> 
        <Child2 props1 = {str} props2 = {arr} props3 = {obj} />
        <Child2B data={{str,arr,obj}}/>
    </div>
  )
}

export default Parent2
