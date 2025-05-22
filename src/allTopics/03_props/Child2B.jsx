function Child2B(props) {
  console.log(props);
  // let {data:{str, arr, obj}} = props
  let { str, arr, obj } = props.data;

  console.log(str);
  console.log(arr);
  console.log(obj);

  return (
    <div>
      <h1>Child2B Component {str}</h1>
    </div>
  );
}

export default Child2B;
