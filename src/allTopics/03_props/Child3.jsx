
const Child3 = (props) => {
    console.log(props);
    function sendData(){
        props.getData("Hello from child 3")
    }
    
  return (
    <div>
      <h1>Parent 1</h1>
      <button onClick={sendData}>Get Data</button>
    </div>
  )
}

export default Child3
