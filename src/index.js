import React from "react";
import ReactDOM from "react-dom";

function H1(arg) {
  return (
    <div>
      <h1>{arg.title}</h1>
      <p>{arg.para}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <H1
      title="Hello React App!"
      para="This is the paragraph to be shown in p tag"
    />
  </div>,
  document.getElementById("root")
);
