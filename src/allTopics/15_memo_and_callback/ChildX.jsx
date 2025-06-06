import React from "react";

const ChildX = (props) => {
  console.log("ChildX");

  return (
    <div>
      <h1>childX</h1>
    </div>
  );
};

export default React.memo(ChildX);
