
function Child2(props) {
    console.log(props);
    let {props1, props2, props3} = props;
    console.log(props1);
    console.log(props2);
    console.log(props3);
    
    
    
    
  return (
    <div>
      <h1>child2 Component</h1>
      <child2 />
    </div>
  )
}

export default Child2;
