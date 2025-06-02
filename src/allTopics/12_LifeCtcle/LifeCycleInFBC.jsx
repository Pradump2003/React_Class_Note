import { useEffect, useRef, useState } from "react";

const LifeCycleInFBC = () => {
  const [count, setCount] = useState(5);
  let isInitialRender = useRef(true);
  //let isInitialRender = {current : true}

  useEffect(() => {
    console.log("render");
  });

  useEffect(() => {
    console.log("component did mount");
    return () => {
      console.log("component will unmount");
    };
  }, []);

  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return () => {
        console.log("prev state was ", count);
      };
    }
    console.log("component did update");

    return () => {
      console.log("prev state was ", count);
    };
  }, [count]);

  return (
    <div>
      <h1>LifeCycleInFBC {count}</h1>
      <button onClick={() => setCount(count + 1)}>update count</button>
    </div>
  );
};

export default LifeCycleInFBC;
