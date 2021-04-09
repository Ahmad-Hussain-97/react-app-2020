import React from "react";
import ReactDOM from "react-dom";

function H1(arg) {
  return <h1>{arg.title}</h1>;
}

ReactDOM.render(
  <div>
    <H1 title="Hello React App!" />
  </div>,
  document.getElementById("root")
);
